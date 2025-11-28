import fs from "fs";
import path from "path";
import Link from "next/link";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { BackLink } from "@/components/ui";

export default function GDPR() {
  const filePath = path.join(process.cwd(), "src/content/privacy-policy.md");
  const content = fs.readFileSync(filePath, "utf8");

  const stats = fs.statSync(filePath);
  const lastUpdated = stats.mtime.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="py-12 lg:py-20">
      <div className="lg:grid lg:grid-cols-12 lg:gap-12">
        {/* LEFT COLUMN: Sticky Header Information */}
        <aside className="lg:col-span-4 mb-12 lg:mb-0">
          <div className="lg:sticky lg:top-12">
            <BackLink href="/" className="mb-8" />

            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter leading-[0.9] mb-6">
                Privacy &<br />
                <span className="text-[var(--text-muted)]">GDPR Policy</span>
              </h1>
              <div className="h-1 w-20 bg-[var(--accent)] rounded-full"></div>
            </div>

            <div className="mb-8">
              <p className="text-[var(--text-muted)] uppercase tracking-wider font-semibold text-xs mb-2">
                Last Updated
              </p>
              <p className="font-mono text-[var(--text)]">{lastUpdated}</p>
            </div>

            <div className="pt-8 border-t border-[rgba(255,255,255,0.05)]">
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                This document explains how I collect, use, and protect your data. I value transparency and
                your right to privacy.
              </p>
            </div>
          </div>
        </aside>

        {/* RIGHT COLUMN: Content */}
        <main className="lg:col-span-8">
          <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-2xl shadow-2xl backdrop-blur-sm">
            <div className="p-8 md:p-12 lg:p-16">
              <MarkdownRenderer content={content} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
