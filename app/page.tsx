import React from "react";
import HelpdeskChat from "./components/demo-card";
import ArchitectureDiagram from "./components/architecture-diagram";
import FaqSection from "./components/faq-section";
import HowItWorks from "./components/how-it-works";

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
            <TechBadge label="Anthropic" color="#C96442" />
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

          {/* Pipeline steps — interactive accordion */}
          <div className="mb-16">
            <HowItWorks />
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
