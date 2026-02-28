"use client";

import { useState, useRef, useEffect } from "react";

const SUGGESTED = [
  "How do I request a laptop upgrade?",
  "What's our PTO policy?",
  "Log a bug — SSO login failing for enterprise customers",
  "How do I submit an expense report?",
];

type Tab = "response" | "tools" | "eval";

interface RagChunk {
  heading: string;
  score: number;
  snippet: string;
}

interface HistoryEntry {
  query: string;
  action: "answer" | "route" | "out_of_scope";
  score: number | null;
  passed: boolean | null;
  timestamp: number;
}

interface HelpdeskResponse {
  decision: {
    action: "answer" | "route" | "out_of_scope";
    confidence: number;
    reasoning: string;
  };
  answer?: {
    text: string;
    citations: string[];
  };
  routing?: {
    team: string;
    reason: string;
    contact: string;
  };
  tool_results: Array<{
    tool: string;
    ticket?: Record<string, unknown>;
    query?: string;
    chunks?: RagChunk[];
    [key: string]: unknown;
  }>;
  judge: {
    score: number;
    passed: boolean;
    criteria: Record<string, number>;
    feedback: string;
  };
}

export default function HelpdeskChat() {
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<HelpdeskResponse | null>(null);
  const [activeTab, setActiveTab] = useState<Tab>("response");
  const [error, setError] = useState<string | null>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [placeholder, setPlaceholder] = useState("");
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Load history from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("helpdesk_history");
      if (stored) setHistory(JSON.parse(stored));
    } catch {}
  }, []);

  // Auto-resize textarea
  useEffect(() => {
    const ta = textareaRef.current;
    if (!ta) return;
    ta.style.height = "auto";
    ta.style.height = `${ta.scrollHeight}px`;
  }, [query]);

  // Typewriter placeholder
  useEffect(() => {
    if (isFocused || query) return;
    let idx = 0;
    let charIdx = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const word = SUGGESTED[idx];
      if (!deleting) {
        charIdx++;
        setPlaceholder(word.slice(0, charIdx));
        if (charIdx === word.length) {
          deleting = true;
          timer = setTimeout(tick, 1800);
        } else {
          timer = setTimeout(tick, 48);
        }
      } else {
        charIdx--;
        setPlaceholder(word.slice(0, charIdx));
        if (charIdx === 0) {
          deleting = false;
          idx = (idx + 1) % SUGGESTED.length;
          timer = setTimeout(tick, 400);
        } else {
          timer = setTimeout(tick, 24);
        }
      }
    };

    timer = setTimeout(tick, 600);
    return () => clearTimeout(timer);
  }, [isFocused, query]);

  const handleRun = async (q?: string) => {
    const question = (q ?? query).trim();
    if (!question || loading) return;
    setLoading(true);
    setError(null);
    setResult(null);
    setSubmitted(question);
    setQuery("");
    try {
      const res = await fetch("/api/helpdesk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: question }),
      });
      if (!res.ok) throw new Error("Request failed");
      const data: HelpdeskResponse = await res.json();
      setResult(data);
      setActiveTab("response");
      // Save to history
      const entry: HistoryEntry = {
        query: question,
        action: data.decision.action,
        score: data.judge?.score ?? null,
        passed: data.judge?.passed ?? null,
        timestamp: Date.now(),
      };
      setHistory((prev) => {
        const next = [entry, ...prev].slice(0, 10);
        try { localStorage.setItem("helpdesk_history", JSON.stringify(next)); } catch {}
        return next;
      });
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleRun();
    }
  };

  const reset = () => {
    setResult(null);
    setSubmitted("");
    setError(null);
    setTimeout(() => textareaRef.current?.focus(), 50);
  };

  const hasResult = result || loading || error;

  return (
    <div className="w-full max-w-3xl flex flex-col gap-5 py-12">

      {/* ── Heading (hidden once result is shown) ── */}
      {!hasResult && (
        <div className="text-center space-y-3 mb-2">
          <img src="/owl.svg" alt="Owl" className="mx-auto h-14 w-14" />
          <h1
            className="text-3xl font-semibold tracking-tight"
            style={{ color: "var(--foreground)" }}
          >
            How can I help you today?
          </h1>
          <p className="text-base" style={{ color: "var(--muted)" }}>
            Ask about company policies, report a bug, or get routed to the right team.
          </p>
        </div>
      )}

      {/* ── Submitted query label ── */}
      {submitted && hasResult && (
        <div className="flex items-start justify-between gap-4">
          <p className="text-sm font-medium" style={{ color: "var(--foreground)" }}>
            {submitted}
          </p>
          <button
            onClick={reset}
            className="flex-shrink-0 text-xs underline-offset-2 hover:underline"
            style={{ color: "var(--muted)" }}
          >
            New question
          </button>
        </div>
      )}

      {/* ── Loading ── */}
      {loading && (
        <div className="result-panel p-8 flex items-center gap-3" style={{ color: "var(--muted)" }}>
          <SpinnerIcon />
          <span className="text-sm">Processing your question…</span>
        </div>
      )}

      {/* ── Error ── */}
      {error && (
        <div className="result-panel p-5 text-sm text-red-500">{error}</div>
      )}

      {/* ── Result ── */}
      {result && !loading && (
        <div className="result-panel">
          {/* Tab strip */}
          <div
            className="flex items-center border-b px-4"
            style={{ borderColor: "var(--border)" }}
          >
            {(["response", "tools", "eval"] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="px-4 py-3 text-xs font-medium border-b-2 -mb-px transition-all capitalize"
                style={{
                  borderColor: activeTab === tab ? "var(--foreground)" : "transparent",
                  color: activeTab === tab ? "var(--foreground)" : "var(--muted)",
                }}
              >
                {tab === "response"
                  ? result.decision.action === "route" ? "Routing"
                  : result.decision.action === "out_of_scope" ? "Out of Scope"
                  : "Answer"
                  : tab === "tools" ? "Tool Results" : "Eval"}
              </button>
            ))}

            {/* Score pill */}
            <div className="ml-auto flex items-center gap-1.5 pb-1">
              {result.judge.score != null ? (
                <>
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ background: result.judge.passed ? "#4ade80" : "#f87171" }}
                  />
                  <span className="text-xs" style={{ color: "var(--muted)" }}>
                    {(result.judge.score * 100).toFixed(0)}%
                  </span>
                </>
              ) : (
                <span className="text-xs" style={{ color: "var(--muted)" }}>N/A</span>
              )}
            </div>
          </div>

          {/* Tab content */}
          <div className="p-5 overflow-auto" style={{ maxHeight: "360px" }}>

            {/* ── Response tab ── */}
            {activeTab === "response" && (
              <div className="space-y-4">
                {/* Action badge */}
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium"
                  style={
                    result.decision.action === "answer"
                      ? { background: "rgba(52,211,153,0.12)", color: "#059669" }
                      : result.decision.action === "route"
                      ? { background: "rgba(251,191,36,0.12)", color: "#d97706" }
                      : { background: "rgba(148,163,184,0.15)", color: "#64748b" }
                  }
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{
                      background:
                        result.decision.action === "answer" ? "#10b981"
                        : result.decision.action === "route" ? "#f59e0b"
                        : "#94a3b8",
                    }}
                  />
                  {result.decision.action === "answer" ? "Answered from KB"
                    : result.decision.action === "route" ? "Routed to team"
                    : "Out of scope"}
                  {result.decision.action !== "out_of_scope" && (
                    <span style={{ opacity: 0.65 }}>
                      · {(result.decision.confidence * 100).toFixed(0)}% confidence
                    </span>
                  )}
                </span>

                {/* KB Answer */}
                {result.answer && (
                  <>
                    <p
                      className="text-sm leading-relaxed whitespace-pre-line"
                      style={{ color: "var(--foreground)" }}
                    >
                      {result.answer.text}
                    </p>
                    <div
                      className="rounded-xl border p-3.5 space-y-1.5"
                      style={{ borderColor: "var(--border)", background: "var(--surface-raised)" }}
                    >
                      <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--muted)" }}>
                        Citations
                      </p>
                      {result.answer.citations.map((c, i) => (
                        <p key={i} className="text-xs" style={{ color: "var(--foreground)" }}>→ {c}</p>
                      ))}
                    </div>
                  </>
                )}

                {/* Out of scope */}
                {result.decision.action === "out_of_scope" && (
                  <div
                    className="rounded-xl border p-4 space-y-2"
                    style={{ borderColor: "rgba(148,163,184,0.3)", background: "rgba(248,250,252,0.8)" }}
                  >
                    <p className="text-sm font-medium" style={{ color: "#475569" }}>
                      This question is outside the scope of the internal helpdesk.
                    </p>
                    <p className="text-xs" style={{ color: "#94a3b8" }}>
                      {result.decision.reasoning}
                    </p>
                    <p className="text-xs" style={{ color: "#94a3b8" }}>
                      For general company info, visit the internal wiki in Notion.
                    </p>
                  </div>
                )}

                {/* Routing */}
                {result.routing && (
                  <div
                    className="rounded-xl border p-4 space-y-2"
                    style={{ borderColor: "rgba(251,191,36,0.3)", background: "rgba(254,252,232,0.8)" }}
                  >
                    <p className="text-sm font-medium text-amber-800">
                      Routing to: {result.routing.team}
                    </p>
                    <p className="text-xs text-amber-700">{result.routing.reason}</p>
                    <p className="text-xs text-amber-600" style={{ fontFamily: "var(--font-mono)" }}>
                      {result.routing.contact}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* ── Tool Results tab ── */}
            {activeTab === "tools" && (
              <div className="space-y-3">
                {result.tool_results.map((tr, i) => {
                  if (tr.tool === "rag_retrieval" && tr.chunks) {
                    const chunks = tr.chunks as RagChunk[];
                    return (
                      <div
                        key={i}
                        className="rounded-xl border p-4 space-y-3"
                        style={{ borderColor: "var(--border)", background: "var(--surface-raised)" }}
                      >
                        {/* Header */}
                        <div className="flex items-center justify-between gap-3 flex-wrap">
                          <div className="flex items-center gap-2">
                            <span
                              className="text-xs font-semibold px-2 py-0.5 rounded-md"
                              style={{ background: "rgba(168,124,245,0.12)", color: "#A87CF5" }}
                            >
                              Pinecone
                            </span>
                            <span className="text-xs" style={{ color: "var(--muted)" }}>
                              RAG · {chunks.length} chunk{chunks.length !== 1 ? "s" : ""} retrieved
                            </span>
                          </div>
                          <span
                            className="text-xs font-mono px-2 py-0.5 rounded-md"
                            style={{ background: "rgba(62,216,192,0.1)", color: "#3ED8C0" }}
                          >
                            text-embedding-3-small
                          </span>
                        </div>

                        {/* Query */}
                        <p className="text-xs italic" style={{ color: "var(--muted)" }}>
                          &ldquo;{tr.query as string}&rdquo;
                        </p>

                        {/* Chunks */}
                        <div className="space-y-3">
                          {chunks.map((chunk, j) => {
                            const pct = Math.round(chunk.score * 100);
                            const barColor =
                              pct >= 85 ? "#3ED8C0" : pct >= 70 ? "#5B9DF5" : "#A87CF5";
                            return (
                              <div key={j} className="space-y-1.5">
                                <div className="flex items-center justify-between gap-2">
                                  <p
                                    className="text-xs font-medium truncate"
                                    style={{ color: "var(--foreground)" }}
                                  >
                                    {chunk.heading}
                                  </p>
                                  <span
                                    className="text-xs font-mono flex-shrink-0"
                                    style={{ color: barColor }}
                                  >
                                    {pct}%
                                  </span>
                                </div>
                                {/* Score bar */}
                                <div
                                  className="h-1 rounded-full overflow-hidden"
                                  style={{ background: "var(--border)" }}
                                >
                                  <div
                                    className="h-full rounded-full transition-all"
                                    style={{ width: `${pct}%`, background: barColor }}
                                  />
                                </div>
                                <p
                                  className="text-xs leading-relaxed line-clamp-2"
                                  style={{ color: "var(--muted)" }}
                                >
                                  {chunk.snippet}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  }

                  if (tr.tool === "create_linear_ticket" && tr.ticket) {
                    const t = tr.ticket as {
                      id: string; title: string; type: string;
                      priority: string; team: string; status: string;
                      url: string; description: string;
                    };
                    const priorityColor: Record<string, string> = {
                      urgent: "#ef4444", high: "#f97316", medium: "#eab308", low: "#6b7280",
                    };
                    return (
                      <div
                        key={i}
                        className="rounded-xl border p-4 space-y-3"
                        style={{ borderColor: "var(--border)", background: "var(--surface-raised)" }}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-semibold px-2 py-0.5 rounded-md"
                              style={{ background: "rgba(91,157,245,0.12)", color: "#3b82f6" }}>
                              Linear
                            </span>
                            <span className="text-xs font-mono" style={{ color: "var(--muted)" }}>
                              {t.id}
                            </span>
                          </div>
                          <span className="text-xs font-medium capitalize px-2 py-0.5 rounded-full"
                            style={{ background: `${priorityColor[t.priority]}18`, color: priorityColor[t.priority] }}>
                            {t.priority}
                          </span>
                        </div>
                        <p className="text-sm font-medium" style={{ color: "var(--foreground)" }}>{t.title}</p>
                        <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>{t.description}</p>
                        <div className="flex items-center gap-4 pt-1">
                          {[{ label: "Type", value: t.type }, { label: "Team", value: t.team }, { label: "Status", value: t.status }].map(({ label, value }) => (
                            <div key={label}>
                              <p className="text-[10px] uppercase tracking-wider" style={{ color: "var(--muted)" }}>{label}</p>
                              <p className="text-xs font-medium capitalize" style={{ color: "var(--foreground)" }}>{value}</p>
                            </div>
                          ))}
                        </div>
                        <p className="text-xs font-mono" style={{ color: "#3b82f6" }}>{t.url}</p>
                      </div>
                    );
                  }
                  return (
                    <div key={i} className="rounded-xl border p-3.5 space-y-1.5"
                      style={{ borderColor: "var(--border)", background: "var(--surface-raised)" }}>
                      <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--muted)" }}>
                        {tr.tool}
                      </p>
                      <pre className="text-xs leading-relaxed whitespace-pre-wrap" style={{ color: "var(--foreground)" }}>
                        {JSON.stringify(tr, null, 2)}
                      </pre>
                    </div>
                  );
                })}
              </div>
            )}

            {/* ── Eval tab ── */}
            {activeTab === "eval" && (
              <div className="space-y-4">
                {result.judge.score != null && result.judge.criteria != null ? (
                  <>
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-3xl font-semibold" style={{ color: "var(--foreground)" }}>
                          {(result.judge.score * 100).toFixed(0)}
                          <span className="text-sm font-normal ml-0.5" style={{ color: "var(--muted)" }}>/100</span>
                        </p>
                        <p className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>Overall eval score</p>
                      </div>
                      <span
                        className="rounded-full px-3 py-1 text-xs font-medium"
                        style={result.judge.passed
                          ? { background: "rgba(52,211,153,0.12)", color: "#059669" }
                          : { background: "rgba(248,113,113,0.12)", color: "#dc2626" }}
                      >
                        {result.judge.passed ? "✓ Passed" : "✗ Failed"}
                      </span>
                    </div>
                    <div className="space-y-2.5">
                      {Object.entries(result.judge.criteria).map(([key, val]) => (
                        <div key={key} className="flex items-center gap-3">
                          <span className="w-28 text-xs capitalize" style={{ color: "var(--muted)" }}>
                            {key.replace("_", " ")}
                          </span>
                          <div className="flex-1 h-1.5 rounded-full overflow-hidden"
                            style={{ background: "var(--surface-raised)", border: "1px solid var(--border)" }}>
                            <div className="progress-fill gradient-primary" style={{ width: `${(val as number) * 100}%` }} />
                          </div>
                          <span className="text-xs w-8 text-right" style={{ color: "var(--foreground)" }}>
                            {((val as number) * 100).toFixed(0)}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="rounded-xl border p-4"
                    style={{ borderColor: "var(--border)", background: "var(--surface-raised)" }}>
                    <p className="text-sm font-medium" style={{ color: "var(--muted)" }}>
                      No eval score — query was routed or out of scope.
                    </p>
                  </div>
                )}
                <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
                  {result.judge.feedback}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── Chat input ── */}
      <div className="chat-input">
        <textarea
          ref={textareaRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={isFocused || query ? "Ask about policies, report a bug, or get routed to the right team…" : placeholder}
          rows={1}
          className="w-full resize-none bg-transparent text-sm outline-none"
          style={{
            color: "var(--foreground)",
            lineHeight: "1.6",
            maxHeight: "160px",
            overflowY: "auto",
          }}
        />
        <div className="flex items-center justify-between mt-2">
          <span className="text-xs" style={{ color: "var(--muted)" }}>
            Enter to send · Shift+Enter for new line
          </span>
          <button
            onClick={() => handleRun()}
            disabled={loading || !query.trim()}
            className="flex h-8 w-8 items-center justify-center rounded-full transition-all disabled:opacity-30"
            style={{ background: "var(--foreground)", color: "var(--surface)" }}
          >
            {loading ? <SpinnerIcon /> : <SendIcon />}
          </button>
        </div>
      </div>

      {/* ── Recent Queries history ── */}
      {!hasResult && history.length > 0 && (
        <div className="space-y-2">
          <p
            className="text-xs font-medium uppercase tracking-wider px-1"
            style={{ color: "var(--muted)" }}
          >
            Recent Queries
          </p>
          <div
            className="rounded-xl border divide-y overflow-hidden"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}
          >
            {history.slice(0, 5).map((entry, i) => (
              <button
                key={i}
                onClick={() => handleRun(entry.query)}
                disabled={loading}
                className="w-full flex items-center gap-3 px-4 py-3 text-left transition-colors"
                style={{ background: "transparent" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--surface-raised)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                {/* Action dot */}
                <span
                  className="h-2 w-2 rounded-full flex-shrink-0"
                  style={{
                    background:
                      entry.action === "answer" ? "#10b981"
                      : entry.action === "route" ? "#f59e0b"
                      : "#94a3b8",
                  }}
                />
                {/* Query text */}
                <span
                  className="flex-1 text-sm truncate"
                  style={{ color: "var(--foreground)" }}
                >
                  {entry.query}
                </span>
                {/* Score pill */}
                {entry.score != null && (
                  <span
                    className="flex-shrink-0 text-xs px-2 py-0.5 rounded-full font-medium"
                    style={
                      entry.passed
                        ? { background: "rgba(52,211,153,0.12)", color: "#059669" }
                        : { background: "rgba(248,113,113,0.12)", color: "#dc2626" }
                    }
                  >
                    {(entry.score * 100).toFixed(0)}%
                  </span>
                )}
                {/* Timestamp */}
                <span
                  className="flex-shrink-0 text-xs"
                  style={{ color: "var(--muted)" }}
                >
                  {relativeTime(entry.timestamp)}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}


    </div>
  );
}

/* ─── Helpers ───────────────────────────────────────── */
function relativeTime(ts: number): string {
  const diff = Date.now() - ts;
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  return `${Math.floor(hrs / 24)}d ago`;
}

/* ─── Icons ─────────────────────────────────────────── */
function SendIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 14 14" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M7 2v10M2 7l5-5 5 5" />
    </svg>
  );
}

function SpinnerIcon() {
  return (
    <svg className="h-3 w-3 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
    </svg>
  );
}
