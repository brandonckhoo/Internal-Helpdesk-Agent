import { Pinecone } from "@pinecone-database/pinecone";
import OpenAI from "openai";
import fs from "fs";
import path from "path";

export interface KbChunk {
  id: string;
  heading: string;
  content: string;
}

export interface RetrievedChunk {
  heading: string;
  score: number;
  snippet: string;
  content: string;
}

// Singleton Pinecone client
let _pinecone: Pinecone | null = null;
function getPineconeClient(): Pinecone {
  if (!_pinecone) {
    _pinecone = new Pinecone({ apiKey: process.env.PINECONE_API_KEY! });
  }
  return _pinecone;
}

// Split kb.md on lines starting with "## " (not "###")
export function parseKbChunks(): KbChunk[] {
  const kbPath = path.join(process.cwd(), "data", "kb.md");
  const content = fs.readFileSync(kbPath, "utf-8");
  const lines = content.split("\n");

  const chunks: KbChunk[] = [];
  let currentHeading = "";
  let currentLines: string[] = [];
  let chunkIndex = 0;

  for (const line of lines) {
    if (line.startsWith("## ")) {
      // Save the previous chunk if it has content
      if (currentHeading && currentLines.length > 0) {
        chunks.push({
          id: `chunk-${chunkIndex}`,
          heading: currentHeading,
          content: currentLines.join("\n").trim(),
        });
        chunkIndex++;
      }
      currentHeading = line.replace(/^## /, "").trim();
      currentLines = [];
    } else {
      currentLines.push(line);
    }
  }

  // Push the last chunk
  if (currentHeading && currentLines.length > 0) {
    chunks.push({
      id: `chunk-${chunkIndex}`,
      heading: currentHeading,
      content: currentLines.join("\n").trim(),
    });
  }

  return chunks;
}

// Embed text with text-embedding-3-small (1536 dims)
export async function embedText(openai: OpenAI, text: string): Promise<number[]> {
  const response = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: text,
  });
  return response.data[0].embedding;
}

// Upsert all chunks — stores heading, snippet, and full content in metadata
export async function upsertKbChunks(openai: OpenAI): Promise<{ upserted: number }> {
  const pc = getPineconeClient();
  const indexName = process.env.PINECONE_INDEX!;
  const index = pc.index(indexName);

  const chunks = parseKbChunks();

  // Embed in batches of 10 to avoid rate limits
  const batchSize = 10;
  let totalUpserted = 0;

  for (let i = 0; i < chunks.length; i += batchSize) {
    const batch = chunks.slice(i, i + batchSize);

    const vectors = await Promise.all(
      batch.map(async (chunk) => {
        const embeddingInput = `${chunk.heading}\n\n${chunk.content}`;
        const values = await embedText(openai, embeddingInput);
        const snippet = chunk.content.slice(0, 200).replace(/\n/g, " ").trim();

        return {
          id: chunk.id,
          values,
          metadata: {
            heading: chunk.heading,
            snippet,
            content: chunk.content,
          },
        };
      })
    );

    await index.upsert({ records: vectors });
    totalUpserted += vectors.length;
  }

  return { upserted: totalUpserted };
}

// Query Pinecone, return top-k chunks with scores
export async function retrieveChunks(
  openai: OpenAI,
  query: string,
  topK = 4
): Promise<RetrievedChunk[]> {
  const pc = getPineconeClient();
  const indexName = process.env.PINECONE_INDEX!;
  const index = pc.index(indexName);

  const queryVector = await embedText(openai, query);

  const result = await index.query({
    vector: queryVector,
    topK,
    includeMetadata: true,
  });

  return (result.matches ?? []).map((match) => ({
    heading: String(match.metadata?.heading ?? ""),
    score: match.score ?? 0,
    snippet: String(match.metadata?.snippet ?? ""),
    content: String(match.metadata?.content ?? ""),
  }));
}
