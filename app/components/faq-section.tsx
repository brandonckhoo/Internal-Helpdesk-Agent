"use client";

import React, { useState } from "react";

const FAQS = [
  {
    q: "Why Pinecone instead of a keyword search?",
    accent: "#A87CF5",
    a: [
      <>Traditional search matches <strong>keywords</strong>. <strong>Pinecone</strong> matches <strong>meaning</strong>. If someone asks about taking time off and the policy says paid leave, keyword search fails. Pinecone does not.</>,
      <>At query time we send the number representation of the question to Pinecone, and it returns the four closest knowledge base sections by meaning in under 50ms. The API is clean, it scales to millions of documents without any infrastructure to manage, and it is used in production by teams at Notion, Shopify, and Slack.</>,
      <>Alternatives we considered: <strong>Weaviate</strong> and <strong>Qdrant</strong> require you to manage your own infrastructure. <strong>pgvector</strong> works at small scale but degrades as data grows. <strong>Chroma</strong> is great for prototyping but not production-hardened. Pinecone is the only one that is fully managed and consistently fastest in independent benchmarks.</>,
    ],
  },
  {
    q: "Which OpenAI models does this use and why?",
    accent: "#3ED8C0",
    a: [
      <>Two separate OpenAI APIs. The <strong>embeddings API</strong> (<strong>text-embedding-3-small</strong>) runs at setup time to index every knowledge base section, and again at query time to convert each question into a searchable number representation.</>,
      <>The <strong>chat completions API</strong> (<strong>GPT-5-mini</strong>) runs once per query to read the retrieved context and produce the structured response. We chose GPT-5-mini because it handles multi-step decisions and structured JSON output more reliably than its predecessors, and because it supports <strong>native function calling</strong>, which powers the Linear and Slack integrations without a separate orchestration layer.</>,
      <>Using one provider for both APIs keeps the integration simple and reduces the number of things that can go wrong.</>,
    ],
  },
  {
    q: "How do you know if the agent is giving good answers?",
    accent: "#7B5CF3",
    a: [
      <>Every response is scored by an independent <strong>LLM judge</strong> — a second <strong>GPT-5-mini</strong> call that evaluates the answer as an outside observer. The judge receives the original question, the four retrieved KB sections, and the generated answer, but does not know it produced the answer. That eliminates the incentive to self-report favourably.</>,
      <>The score in the Eval tab reflects relevance, accuracy, completeness, and citation quality. <strong>Arize</strong> handles the production layer: every OpenAI call is traced and sent to Arize automatically. Once you configure evaluators in the Arize dashboard, they run on every new trace that comes in without any manual work — that is where LLM evaluation at scale actually happens.</>,
    ],
  },
  {
    q: "What happens when a question is outside the knowledge base?",
    accent: "#F5A154",
    a: [
      <>The model is instructed to flag out-of-scope questions rather than guess. If none of the four retrieved sections are relevant to the query, GPT-5-mini returns a routing decision instead of fabricating an answer.</>,
      <>Routing decisions include a suggested team or channel to contact. If the query is a bug report or feature request, the model can open a <strong>Linear ticket</strong> directly or ping the appropriate <strong>Slack channel</strong> via native function calling, without a separate orchestration layer.</>,
    ],
  },
  {
    q: "How is agent behavior traced and observed?",
    accent: "#F5A154",
    a: [
      <><strong>LangSmith</strong> wraps the OpenAI client and records every call automatically. Each session captures the full chain: the question, the Pinecone search, the four sections retrieved, the model reasoning, the final answer, and any tool calls made.</>,
      <>Those traces feed into <strong>Arize</strong>, which runs independent evaluation on each response. LangSmith gives you the trail. Arize tells you whether what is in that trail is any good. Anyone on the team can open any session and follow exactly what happened.</>,
    ],
  },
  {
    q: "Can this connect to tools like Linear and Slack?",
    accent: "#5B9DF5",
    a: [
      <>Yes, via <strong>native function calling</strong> built into GPT-5-mini. When the model decides a query is a bug report or feature request, it calls the Linear API mid-conversation to open a ticket and returns the ticket URL in its response.</>,
      <>When routing to a team, it can ping the right Slack channel directly. Neither integration requires a separate orchestration service. The model decides when to call each tool based on the query content, and the API call happens inside the same request.</>,
    ],
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      <h2
        className="text-3xl font-semibold tracking-tight text-center"
        style={{ color: "var(--foreground)" }}
      >
        Frequently Asked Questions
      </h2>
      <div
        className="rounded-xl overflow-hidden"
        style={{ border: "1px solid var(--border)", background: "var(--surface)" }}
      >
        {FAQS.map(({ q, a, accent }, i) => (
          <div
            key={i}
            style={i > 0 ? { borderTop: "1px solid var(--border)" } : undefined}
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between px-6 py-4 text-left gap-4 transition-colors"
              style={{
                background: open === i ? `${accent}08` : "transparent",
              }}
              onMouseEnter={(e) => {
                if (open !== i) e.currentTarget.style.background = "var(--surface-raised)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = open === i ? `${accent}08` : "transparent";
              }}
            >
              {/* Accent bar */}
              <span
                className="flex-shrink-0 w-0.5 self-stretch rounded-full transition-all"
                style={{ background: open === i ? accent : "transparent" }}
              />
              <span
                className="flex-1 text-base font-medium"
                style={{ color: "var(--foreground)" }}
              >
                {q}
              </span>
              <span
                className="flex-shrink-0 flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold transition-all"
                style={{
                  background: open === i ? `${accent}18` : "var(--surface-raised)",
                  color: open === i ? accent : "var(--muted)",
                  transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                }}
              >
                +
              </span>
            </button>

            {open === i && (
              <div
                className="px-6 pt-4 pb-5 space-y-2.5 pl-9"
                style={{ borderTop: `1px solid ${accent}18` }}
              >
                {a.map((para, j) => (
                  <p
                    key={j}
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--muted)" }}
                  >
                    {para}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
