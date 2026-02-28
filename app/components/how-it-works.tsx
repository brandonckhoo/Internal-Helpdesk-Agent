"use client";

import { useState } from "react";

const STEPS = [
  {
    step: "1",
    title: "Someone asks a question",
    accent: "#5B9DF5",
    body: [
      "A question comes in from an employee or CSM. It could be a policy question, a request to file a bug, or anything in between.",
      "The agent does not treat question types differently. Every input goes through the same pipeline.",
    ],
  },
  {
    step: "2",
    title: "The question gets translated into numbers",
    accent: "#3ED8C0",
    tag: "OpenAI embeddings",
    body: [
      "Before the agent can search anything, it converts the question into a list of numbers called an embedding. Think of it like a GPS coordinate for meaning.",
      "Two questions that say the same thing in different words will produce coordinates that sit very close together. Two questions about completely different topics will sit far apart.",
      "We call the OpenAI embeddings API to generate this in under 100ms. This translation step is what makes the search smart instead of literal.",
    ],
  },
  {
    step: "3",
    title: "Pinecone finds what is relevant",
    accent: "#A87CF5",
    tag: "Pinecone",
    body: [
      "Those numbers get sent to Pinecone, a database built specifically for this kind of search. Pinecone has already stored the same kind of number representation for all 24 sections of the company knowledge base.",
      "It compares the question against every stored section, ranks them by how close they are in meaning, and returns the top four in milliseconds.",
      "We chose Pinecone because keyword search breaks the moment someone phrases a question differently than the document was written. Pinecone searches by meaning, so it finds the right policy section even when the vocabulary does not match. The API is clean, the reliability is high, and it scales to millions of documents without any infrastructure to manage.",
    ],
  },
  {
    step: "4",
    title: "GPT-5-mini reads and responds",
    accent: "#3ED8C0",
    tag: "GPT-5-mini",
    body: [
      "The four retrieved sections land in front of GPT-5-mini as its only context. It does not see the rest of the knowledge base. It does not have internet access.",
      "Working entirely from what Pinecone surfaced, the model decides whether to answer directly, route the question to a specific team, or flag it as outside scope.",
      "We chose GPT-5-mini because it handles instruction following and structured JSON output reliably — the agent needs to produce a consistently formatted response with a decision, an answer, and citations all in one pass.",
      "It also supports native function calling, which powers two integrations mid-conversation. If the query is a bug report or feature request, the model opens a Linear ticket. If it is routing to a team, it pings the right Slack channel. Neither requires a separate orchestration layer.",
    ],
  },
  {
    step: "5",
    title: "Every response is scored by an independent judge",
    accent: "#7B5CF3",
    tag: "LLM judge",
    body: [
      "After the model generates an answer, a second GPT-5-mini call evaluates it as an outside observer. The judge receives the original question, the four retrieved KB sections, and the generated answer, but has no knowledge that it produced the answer. That removes the incentive to self-report favourably.",
      "The score you see in the Eval tab is that independent judgment: relevance, accuracy, completeness, and citation quality. Because it runs as a separate call with no shared context, the score reflects actual quality rather than confidence.",
      "In Arize, we configure claude-sonnet-4-6 — Anthropic's Claude Sonnet — as the judge model for online evaluation. Every trace that arrives is automatically scored by Claude via the Anthropic API. This means production quality is continuously monitored by a model from a completely different provider, making the evaluation genuinely independent.",
    ],
  },
  {
    step: "6",
    title: "Arize monitors quality at scale",
    accent: "#7B5CF3",
    tag: "Arize",
    body: [
      "Every OpenAI call in this agent is traced and sent to Arize automatically. Arize records the full chain: what was retrieved, what the model reasoned, the final answer, and any tool calls made.",
      "Where Arize becomes powerful is at scale. You configure evaluators once in the dashboard — pointing them at Claude (claude-sonnet-4-6) via the Anthropic API — and Arize runs them automatically on every new trace that comes in. Hallucination detection, answer relevance, retrieval quality — all scored without manual review.",
      "As query volume grows, you get a dataset that shows exactly where the agent underperforms and what to fix. LangSmith gives you the detailed trace to debug individual sessions. Arize gives you the aggregate picture across thousands of them.",
    ],
  },
];

export default function HowItWorks() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="relative">
      {/* Vertical connector line */}
      <div
        className="absolute left-6 top-8 bottom-8 w-px hidden sm:block"
        style={{ background: "var(--border)" }}
      />

      <div className="space-y-3">
        {STEPS.map(({ step, title, accent, tag, body }, i) => (
          <div key={step} className="flex gap-4 sm:gap-6">
            {/* Step number */}
            <div className="flex flex-col items-center flex-shrink-0">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl text-sm font-semibold z-10 transition-all"
                style={{
                  background: open === i ? `${accent}22` : `${accent}12`,
                  color: accent,
                  border: `1px solid ${open === i ? `${accent}50` : `${accent}28`}`,
                }}
              >
                {step}
              </div>
            </div>

            {/* Card */}
            <div
              className="flex-1 rounded-xl border overflow-hidden transition-all"
              style={{
                borderColor: open === i ? `${accent}40` : "var(--border)",
                background: "var(--surface)",
              }}
            >
              {/* Header — clickable */}
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left gap-4 transition-colors"
                style={{ background: open === i ? `${accent}06` : "transparent" }}
                onMouseEnter={(e) => {
                  if (open !== i) e.currentTarget.style.background = "var(--surface-raised)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = open === i ? `${accent}06` : "transparent";
                }}
              >
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                    {title}
                  </span>
                  {tag && (
                    <span
                      className="text-[10px] font-semibold px-2 py-0.5 rounded-md uppercase tracking-wide"
                      style={{ background: `${accent}14`, color: accent }}
                    >
                      {tag}
                    </span>
                  )}
                </div>
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

              {/* Body */}
              {open === i && (
                <div
                  className="px-5 pb-5 space-y-2"
                  style={{ borderTop: `1px solid ${accent}18` }}
                >
                  {body.map((para, j) => (
                    <p key={j} className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                      {para}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
