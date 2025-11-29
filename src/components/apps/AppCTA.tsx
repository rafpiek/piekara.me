import Link from "next/link";

export interface CTALink {
  label: string;
  href: string;
  external?: boolean;
}

export interface AppCTAProps {
  title: string;
  description: string;
  primaryLink: CTALink;
  secondaryLink?: CTALink;
}

export function AppCTA({
  title,
  description,
  primaryLink,
  secondaryLink,
}: AppCTAProps) {
  return (
    <div className="text-center mb-16 pt-12 border-t border-[rgba(255,255,255,0.05)]">
      <h2 className="text-3xl font-bold mb-6">{title}</h2>
      <p className="text-[var(--text-muted)] mb-10 max-w-2xl mx-auto text-lg">
        {description}
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <Link
          href={primaryLink.href}
          target={primaryLink.external ? "_blank" : undefined}
          className="inline-flex items-center justify-center px-8 py-4 bg-[var(--accent)] text-[var(--text)] font-bold rounded-[var(--radius)] hover:opacity-90 transition-opacity text-lg"
        >
          {primaryLink.label}
        </Link>
        {secondaryLink && (
          <Link
            href={secondaryLink.href}
            target={secondaryLink.external ? "_blank" : undefined}
            className="inline-flex items-center justify-center px-8 py-4 bg-[var(--surface)] text-[var(--text)] font-bold rounded-[var(--radius)] hover:bg-[var(--surface-hover)] transition-colors text-lg"
          >
            {secondaryLink.label}
          </Link>
        )}
      </div>
    </div>
  );
}


