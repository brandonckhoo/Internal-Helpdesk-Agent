export const runtime = "nodejs";

import { NextResponse } from "next/server";
import OpenAI from "openai";
import { Pinecone } from "@pinecone-database/pinecone";
import { upsertKbChunks, parseKbChunks } from "@/app/lib/pinecone";

async function ensureIndex(pc: Pinecone, indexName: string) {
  const { indexes } = await pc.listIndexes();
  const exists = (indexes ?? []).some((idx) => idx.name === indexName);

  if (!exists) {
    await pc.createIndex({
      name: indexName,
      dimension: 1536,
      metric: "cosine",
      spec: {
        serverless: {
          cloud: "aws",
          region: "us-east-1",
        },
      },
      waitUntilReady: true,
    });
    return { created: true };
  }

  return { created: false };
}

export async function POST() {
  if (!process.env.PINECONE_API_KEY || !process.env.PINECONE_INDEX) {
    return NextResponse.json(
      { error: "PINECONE_API_KEY and PINECONE_INDEX must be set in .env.local" },
      { status: 500 }
    );
  }

  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json(
      { error: "OPENAI_API_KEY must be set in .env.local" },
      { status: 500 }
    );
  }

  try {
    const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
    const { created } = await ensureIndex(pc, process.env.PINECONE_INDEX);

    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const { upserted } = await upsertKbChunks(openai);
    const chunks = parseKbChunks().map((c) => ({ id: c.id, heading: c.heading }));

    return NextResponse.json({
      ok: true,
      message: `${created ? "Created index and upserted" : "Upserted"} ${upserted} KB chunks into Pinecone.`,
      index_created: created,
      upserted,
      chunks,
    });
  } catch (err) {
    console.error("Seed error:", err);
    return NextResponse.json(
      {
        error: "Seed failed.",
        detail: err instanceof Error ? err.message : String(err),
      },
      { status: 500 }
    );
  }
}
