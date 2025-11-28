import Link from "next/link";

export default function DocumentHub() {
  return (
    <div className="legal-section" id="legal">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 style={{ fontSize: "1.25rem", marginBottom: "6px" }}>
            The Document Hub
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "0" }}>
            Privacy policies, terms of service, and other legal documents.
          </p>
        </div>
        <Link
          href="/info-hub"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--surface-hover)] text-[var(--text)] text-sm font-medium rounded-lg hover:bg-[#333] transition-colors whitespace-nowrap"
        >
          View All Documents →
        </Link>
      </div>
    </div>
  );
}
