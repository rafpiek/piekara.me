import Link from "next/link";

interface BackLinkProps {
  href: string;
  label?: string;
  className?: string;
}

export default function BackLink({ href, label = "Back to Home", className = "mb-12" }: BackLinkProps) {
  return (
    <div className={className}>
      <Link
        href={href}
        className="inline-flex items-center text-[var(--text-muted)] hover:text-[var(--text)] transition-colors mb-6"
      >
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        {label}
      </Link>
    </div>
  );
}

