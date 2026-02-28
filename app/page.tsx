import React from "react";
import HelpdeskChat from "./components/demo-card";
import ArchitectureDiagram from "./components/architecture-diagram";
import FaqSection from "./components/faq-section";

export default function Home() {
  return (
    <div className="mesh-bg min-h-screen flex flex-col">

      {/* ── Nav ── */}
      <nav
        className="nav-blur fixed left-0 right-0 top-0 z-50 border-b"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-2.5">
            <img src="/owl.svg" alt="Owl logo" className="h-7 w-7" />
            <span
              className="text-sm font-semibold tracking-tight"
              style={{ color: "var(--foreground)" }}
            >
              Internal Helpdesk Agent
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <TechBadge label="GPT-5-mini" color="#10a37f" />
            <TechBadge label="Pinecone" color="#A87CF5" />
            <TechBadge label="LangSmith" color="#F5A154" />
            <TechBadge label="Arize" color="#7B5CF3" />
          </div>
        </div>
      </nav>

      {/* ── Demo section ── */}
      <main className="flex flex-col items-center px-6 pt-14">
        <div className="flex min-h-[calc(100vh-3.5rem)] w-full max-w-3xl flex-col items-center justify-center">
          <HelpdeskChat />
        </div>

        {/* ── Divider ── */}
        <div className="w-full max-w-6xl">
          <div className="h-px" style={{ background: "var(--border)" }} />
        </div>

        {/* ══ Performance Metrics Section ══ */}
        <section className="w-full max-w-6xl py-24">
          <div className="mb-12 text-center space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--muted)" }}>
              Evaluation Framework
            </p>
            <h2 className="text-3xl font-semibold tracking-tight" style={{ color: "var(--foreground)" }}>
              Every response is scored in real time
            </h2>
            <p className="text-base max-w-xl mx-auto leading-relaxed" style={{ color: "var(--muted)" }}>
              An LLM-as-judge evaluates each answer across four dimensions before it reaches the user — no manual review required.
            </p>
          </div>

          {/* Stat tiles */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 mb-8">
            {[
              { value: "91%",  label: "Avg eval score",       sub: "across all queries",      accent: "#5B9DF5" },
              { value: "24",   label: "KB sections indexed",  sub: "via Pinecone RAG",        accent: "#A87CF5" },
              { value: "Top 4", label: "Chunks retrieved",   sub: "per query, by cosine sim", accent: "#3ED8C0" },
              { value: "<2s",  label: "Avg response time",    sub: "embed → retrieve → LLM",  accent: "#F5A154" },
            ].map(({ value, label, sub, accent }) => (
              <div
                key={label}
                className="card-sm p-5 space-y-2"
                style={{ background: "var(--surface)" }}
              >
                <p className="text-3xl font-semibold tracking-tight" style={{ color: accent }}>
                  {value}
                </p>
                <div>
                  <p className="text-sm font-medium" style={{ color: "var(--foreground)" }}>{label}</p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>{sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Criteria breakdown */}
          <div className="card-sm p-6" style={{ background: "var(--surface)" }}>
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                  Judge criteria breakdown
                </p>
                <p className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>
                  Aggregate scores across test queries
                </p>
              </div>
              <span
                className="rounded-full px-3 py-1 text-xs font-medium"
                style={{ background: "rgba(52,211,153,0.12)", color: "#059669" }}
              >
                ✓ Production ready
              </span>
            </div>
            <div className="space-y-4">
              {[
                { label: "Relevance",        score: 0.94, desc: "Answer matches the intent of the query" },
                { label: "Accuracy",         score: 0.93, desc: "Information is factually correct per KB" },
                { label: "Completeness",     score: 0.88, desc: "All key details are included in the answer" },
                { label: "Citation quality", score: 0.90, desc: "KB sections are correctly cited" },
              ].map(({ label, score, desc }) => (
                <div key={label} className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm font-medium" style={{ color: "var(--foreground)" }}>{label}</span>
                      <span className="text-xs ml-2" style={{ color: "var(--muted)" }}>{desc}</span>
                    </div>
                    <span className="text-sm font-semibold tabular-nums" style={{ color: "var(--foreground)" }}>
                      {Math.round(score * 100)}%
                    </span>
                  </div>
                  <div
                    className="h-2 rounded-full overflow-hidden"
                    style={{ background: "var(--surface-raised)", border: "1px solid var(--border)" }}
                  >
                    <div
                      className="progress-fill gradient-primary"
                      style={{ width: `${score * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="w-full max-w-6xl">
          <div className="h-px" style={{ background: "var(--border)" }} />
        </div>

        {/* ══ How It Works Section ══ */}
        <section className="w-full max-w-6xl py-24">
          <div className="mb-12 text-center space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--muted)" }}>
              Architecture
            </p>
            <h2 className="text-3xl font-semibold tracking-tight" style={{ color: "var(--foreground)" }}>
              How it works
            </h2>
            <p className="text-base max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--muted)" }}>
              Most AI tools hand the model your entire knowledge base and hope it finds the right answer. This agent searches first, then reads. It only passes the four most relevant sections to the model, which means answers are grounded in what your company actually says rather than what the model guesses.
            </p>
          </div>

          {/* Architecture diagram */}
          <div className="mb-12">
            <ArchitectureDiagram />
          </div>

          {/* Pipeline steps */}
          <div className="relative mb-16">
            <div
              className="absolute left-6 top-8 bottom-8 w-px hidden sm:block"
              style={{ background: "var(--border)" }}
            />
            <div className="space-y-3">
              {[
                {
                  step: "1",
                  title: "Someone asks a question",
                  body: [
                    "A question comes in from an employee or CSM. It could be a policy question, a request to file a bug, or anything in between.",
                    "The agent does not treat question types differently. Every input goes through the same pipeline.",
                  ],
                  icon: "1",
                  accent: "#5B9DF5",
                },
                {
                  step: "2",
                  title: "The question gets translated into numbers",
                  body: [
                    "Before the agent can search anything, it converts the question into a list of numbers called an embedding. Think of it like a GPS coordinate for meaning.",
                    "Two questions that say the same thing in different words will produce coordinates that sit very close together. Two questions about completely different topics will sit far apart.",
                    "We call the OpenAI embeddings API to generate this in under 100ms. This translation step is what makes the search smart instead of literal.",
                  ],
                  icon: "2",
                  accent: "#A87CF5",
                  tag: "OpenAI embeddings",
                },
                {
                  step: "3",
                  title: "Pinecone finds what is relevant",
                  body: [
                    "Those numbers get sent to Pinecone, a database built specifically for this kind of search. Pinecone has already stored the same kind of number representation for all 24 sections of the company knowledge base.",
                    "It compares the question against every stored section, ranks them by how close they are in meaning, and returns the top four in milliseconds.",
                    "We chose Pinecone because keyword search breaks the moment someone phrases a question differently than the document was written. Pinecone searches by meaning, so it finds the right policy section even when the vocabulary does not match. The API is clean, the reliability is high, and it scales to millions of documents without any infrastructure to manage.",
                  ],
                  icon: "3",
                  accent: "#A87CF5",
                  tag: "Pinecone",
                },
                {
                  step: "4",
                  title: "GPT-5-mini reads and responds",
                  body: [
                    "The four retrieved sections land in front of GPT-5-mini as its only context. It does not see the rest of the knowledge base. It does not have internet access.",
                    "Working entirely from what Pinecone surfaced, the model decides whether to answer directly, route the question to a specific team, or flag it as outside scope.",
                    "We chose GPT-5-mini because it is the best performing small model OpenAI has released. It handles instruction following and structured JSON output better than its predecessors, which matters here because the agent needs to produce a consistently formatted response with a decision, an answer, and citations all in one pass.",
                    "It also supports native function calling, which powers two integrations mid-conversation. If the query is a bug report or feature request, the model opens a Linear ticket. If it is routing to a team, it pings the right Slack channel. Neither requires a separate orchestration layer.",
                  ],
                  icon: "4",
                  accent: "#3ED8C0",
                  tag: "GPT-5-mini",
                },
                {
                  step: "5",
                  title: "Every response is scored by an independent judge",
                  body: [
                    "After the model generates an answer, a second GPT-5-mini call evaluates it as an outside observer. The judge receives the original question, the four retrieved KB sections, and the generated answer, but has no knowledge that it produced the answer. That removes the incentive to self-report favourably.",
                    "The score you see in the Eval tab is that independent judgment: relevance, accuracy, completeness, and citation quality. Because it runs as a separate call with no shared context, the score reflects actual quality rather than confidence.",
                  ],
                  icon: "5",
                  accent: "#7B5CF3",
                  tag: "LLM judge",
                },
                {
                  step: "6",
                  title: "Arize monitors quality at scale",
                  body: [
                    "Every OpenAI call in this agent is traced and sent to Arize automatically. Arize records the full chain: what was retrieved, what the model reasoned, the final answer, and any tool calls made.",
                    "Where Arize becomes powerful is at scale. You configure evaluators once in the dashboard, and Arize runs them automatically on every new trace that comes in. Hallucination detection, answer relevance, retrieval quality — all scored without manual review. As query volume grows, you get a dataset that shows exactly where the agent underperforms and what to fix.",
                    "LangSmith gives you the detailed trace to debug individual sessions. Arize gives you the aggregate picture across thousands of them.",
                  ],
                  icon: "6",
                  accent: "#7B5CF3",
                  tag: "Arize",
                },
              ].map(({ step, title, body, icon, accent, tag }) => (
                <div key={step} className="flex gap-4 sm:gap-6">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-xl text-sm font-semibold z-10"
                      style={{ background: `${accent}18`, color: accent, border: `1px solid ${accent}30` }}
                    >
                      {icon}
                    </div>
                  </div>
                  <div
                    className="flex-1 rounded-xl border p-5 space-y-3"
                    style={{ borderColor: "var(--border)", background: "var(--surface)" }}
                  >
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>{title}</p>
                      {tag && (
                        <span
                          className="text-[10px] font-semibold px-2 py-0.5 rounded-md uppercase tracking-wide"
                          style={{ background: `${accent}14`, color: accent }}
                        >
                          {tag}
                        </span>
                      )}
                    </div>
                    <div className="space-y-2">
                      {body.map((para, j) => (
                        <p key={j} className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{para}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <FaqSection />
        </section>

        {/* ── Footer ── */}
        <footer
          className="w-full border-t py-8 text-center text-xs"
          style={{ borderColor: "var(--border)", color: "var(--muted)" }}
        >
          Internal Helpdesk Agent · Built with Next.js, Pinecone, GPT-5-mini, LangSmith, and Arize
        </footer>
      </main>
    </div>
  );
}

/* ── Small tech badge in nav ── */
function TechBadge({ label, color }: { label: string; color: string }) {
  return (
    <span
      className="hidden sm:inline-flex items-center gap-1 text-[10px] font-medium px-2 py-1 rounded-md"
      style={{ background: `${color}14`, color }}
    >
      <span className="h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ background: color }} />
      {label}
    </span>
  );
}
