export default function ArchitectureDiagram() {
  return (
    <div
      className="w-full overflow-x-auto rounded-2xl border p-6"
      style={{ borderColor: "var(--border)", background: "var(--surface)" }}
    >
      <svg
        viewBox="0 0 940 326"
        className="w-full min-w-[640px]"
        style={{ fontFamily: "var(--font-sans)" }}
        aria-label="RAG pipeline architecture diagram"
      >
        <defs>
          <marker id="arrowGray" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <path d="M0,0 L8,3 L0,6 Z" fill="#7A756F" />
          </marker>
          <marker id="arrowBlue" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <path d="M0,0 L8,3 L0,6 Z" fill="#5B9DF5" />
          </marker>
          <marker id="arrowArize" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <path d="M0,0 L8,3 L0,6 Z" fill="#7B5CF3" />
          </marker>
          <marker id="arrowCyan" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <path d="M0,0 L8,3 L0,6 Z" fill="#06B6D4" />
          </marker>
        </defs>

        {/* ── LangSmith observability wrapper ── */}
        <rect
          x="165" y="10" width="581" height="176" rx="14"
          fill="#F5A15406" stroke="#F5A154" strokeWidth="1.5" strokeDasharray="6 4"
        />
        <text x="187" y="33" fontSize="9.5" fill="#F5A154" fontWeight="700" letterSpacing="0.1em">
          LANGSMITH  ·  OBSERVABILITY  ·  TRACES EVERY API CALL
        </text>

        {/* ══ Box 1: Employee ══ */}
        <rect x="14" y="73" width="126" height="68" rx="10"
          fill="#F3F2EE" stroke="#E6E3DC" strokeWidth="1.5" />
        <text x="77" y="98" fontSize="11.5" fill="#1A1917" textAnchor="middle" fontWeight="600">Employee</text>
        <text x="77" y="113" fontSize="9.5" fill="#7A756F" textAnchor="middle">CSM · AE · Support</text>
        <text x="77" y="127" fontSize="9" fill="#7A756F" textAnchor="middle">HR · Finance</text>

        {/* Arrow 1: User → OpenAI */}
        <line x1="140" y1="107" x2="172" y2="107"
          stroke="#7A756F" strokeWidth="1.5" markerEnd="url(#arrowGray)" />
        <text x="153" y="97" fontSize="9" fill="#7A756F" textAnchor="middle">query</text>

        {/* ══ Box 2: OpenAI Embeddings ══ */}
        <rect x="172" y="48" width="150" height="118" rx="10"
          fill="#3ED8C00C" stroke="#3ED8C055" strokeWidth="1.5" />
        <text x="247" y="78" fontSize="11.5" fill="#1A1917" textAnchor="middle" fontWeight="600">OpenAI</text>
        <text x="247" y="96" fontSize="10" fill="#3ED8C0" textAnchor="middle" fontWeight="600">Embeddings API</text>
        <text x="247" y="114" fontSize="9" fill="#7A756F" textAnchor="middle">text-embedding-3-small</text>
        <text x="247" y="130" fontSize="9" fill="#7A756F" textAnchor="middle">converts text to numbers</text>

        {/* Arrow 2: OpenAI → Pinecone */}
        <line x1="322" y1="107" x2="362" y2="107"
          stroke="#7A756F" strokeWidth="1.5" markerEnd="url(#arrowGray)" />
        <text x="342" y="100" fontSize="9" fill="#7A756F" textAnchor="middle">embed</text>

        {/* ══ Box 3: Pinecone ══ */}
        <rect x="362" y="48" width="138" height="118" rx="10"
          fill="#A87CF50C" stroke="#A87CF555" strokeWidth="1.5" />
        <text x="431" y="78" fontSize="11.5" fill="#1A1917" textAnchor="middle" fontWeight="600">Pinecone</text>
        <text x="431" y="96" fontSize="10" fill="#A87CF5" textAnchor="middle" fontWeight="600">Vector Search</text>
        <text x="431" y="114" fontSize="9" fill="#7A756F" textAnchor="middle">matches by meaning</text>
        <text x="431" y="130" fontSize="9" fill="#7A756F" textAnchor="middle">24 policy sections</text>

        {/* Arrow 3: Pinecone → GPT-5-mini (64px gap)
            Draw line first, then white pill backing, then label on top. ── */}
        <line x1="500" y1="107" x2="562" y2="107"
          stroke="#7A756F" strokeWidth="1.5" markerEnd="url(#arrowGray)" />
        <rect x="510" y="80" width="42" height="24" rx="4" fill="#FFFFFF" />
        <text x="531" y="92" fontSize="9" fill="#7A756F" textAnchor="middle">top 4</text>
        <text x="531" y="103" fontSize="9" fill="#7A756F" textAnchor="middle">chunks</text>

        {/* ══ Box 4: GPT-5-mini ══ */}
        <rect x="562" y="48" width="150" height="118" rx="10"
          fill="#5B9DF50C" stroke="#5B9DF555" strokeWidth="1.5" />
        <text x="637" y="78" fontSize="11.5" fill="#1A1917" textAnchor="middle" fontWeight="600">GPT-5-mini</text>
        <text x="637" y="96" fontSize="10" fill="#5B9DF5" textAnchor="middle" fontWeight="600">Generation</text>
        <text x="637" y="114" fontSize="9" fill="#7A756F" textAnchor="middle">answer / route / OOS</text>
        <text x="637" y="130" fontSize="9" fill="#7A756F" textAnchor="middle">+ tool calls</text>

        {/* Arrow 4: GPT-5-mini → Response (44px gap from LangSmith border) */}
        <line x1="712" y1="107" x2="786" y2="107"
          stroke="#7A756F" strokeWidth="1.5" markerEnd="url(#arrowGray)" />

        {/* ══ Box 5: Response ══ */}
        <rect x="786" y="78" width="132" height="58" rx="10"
          fill="#F3F2EE" stroke="#E6E3DC" strokeWidth="1.5" />
        <text x="852" y="103" fontSize="11.5" fill="#1A1917" textAnchor="middle" fontWeight="600">Response</text>
        <text x="852" y="120" fontSize="9" fill="#7A756F" textAnchor="middle">answer + eval score</text>

        {/* Arrow 5: GPT-5-mini → Linear (optional, dashed) */}
        <line x1="637" y1="166" x2="637" y2="256"
          stroke="#5B9DF5" strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#arrowBlue)" />
        <rect x="641" y="218" width="88" height="13" rx="2" fill="#FFFFFF" />
        <text x="648" y="228" fontSize="9" fill="#7A756F">bug or feature req</text>

        {/* Arrow to Slack: GPT-5-mini → Slack (diagonal, optional) */}
        <line x1="572" y1="166" x2="451" y2="256"
          stroke="#06B6D4" strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#arrowCyan)" />
        <rect x="482" y="213" width="52" height="13" rx="2" fill="#FFFFFF" />
        <text x="508" y="223" fontSize="9" fill="#7A756F" textAnchor="middle">if routing</text>

        {/* ══ Box 6: Linear (optional) ══ */}
        <rect x="562" y="258" width="150" height="52" rx="10"
          fill="#5B9DF508" stroke="#5B9DF540" strokeWidth="1.5" strokeDasharray="5 3" />
        <text x="637" y="279" fontSize="11.5" fill="#1A1917" textAnchor="middle" fontWeight="600">Linear</text>
        <text x="637" y="295" fontSize="9" fill="#5B9DF5" textAnchor="middle" fontWeight="500">bug or feature request</text>

        {/* ══ Box 7: Slack (optional) ══ */}
        <rect x="375" y="258" width="138" height="52" rx="10"
          fill="#06B6D408" stroke="#06B6D440" strokeWidth="1.5" strokeDasharray="5 3" />
        <text x="444" y="279" fontSize="11.5" fill="#1A1917" textAnchor="middle" fontWeight="600">Slack</text>
        <text x="444" y="295" fontSize="9" fill="#06B6D4" textAnchor="middle" fontWeight="500">notify team channel</text>

        {/* Arrow 6: Response → Arize (evaluation of final output) */}
        <line x1="852" y1="136" x2="852" y2="256"
          stroke="#7B5CF3" strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#arrowArize)" />
        <text x="864" y="205" fontSize="9" fill="#7A756F">eval</text>

        {/* ══ Box 8: Arize (online evaluation) ══ */}
        <rect x="786" y="258" width="132" height="52" rx="10"
          fill="#7B5CF308" stroke="#7B5CF340" strokeWidth="1.5" strokeDasharray="5 3" />
        <text x="852" y="279" fontSize="11.5" fill="#1A1917" textAnchor="middle" fontWeight="600">Arize</text>
        <text x="852" y="295" fontSize="9" fill="#7B5CF3" textAnchor="middle" fontWeight="600">Online Evaluation</text>
      </svg>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap items-center gap-4 px-1">
        <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--muted)" }}>
          Note
        </p>
        <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
          <span className="font-medium" style={{ color: "var(--foreground)" }}>LangSmith</span> is the observability layer. It records every API call for inspection.{" "}
          <span className="font-medium" style={{ color: "var(--foreground)" }}>GPT-5-mini</span> can call two tools mid-conversation: <span className="font-medium" style={{ color: "var(--foreground)" }}>Linear</span> for bug and feature requests, and <span className="font-medium" style={{ color: "var(--foreground)" }}>Slack</span> to notify the right team channel when routing. <span className="font-medium" style={{ color: "var(--foreground)" }}>Arize</span> receives the final response and scores it with an independent judge model.
        </p>
      </div>
    </div>
  );
}
