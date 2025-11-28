"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: "/apps", label: "Apps" },
    { href: "/projects", label: "Projects" },
    { href: "/gdpr", label: "Docs" },
  ];

  return (
    <header className="py-10 flex justify-between items-center">
      <Link href="/" className="font-[family-name:var(--font-head)] text-xl font-semibold tracking-tight">
        piekara<span className="text-[var(--accent)]">.me</span>
      </Link>
      <nav className="hidden md:flex gap-6">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`text-sm transition-colors ${
              pathname.startsWith(item.href)
                ? "text-[var(--text)]"
                : "text-[var(--text-muted)] hover:text-[var(--text)]"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button className="text-[var(--text-muted)]">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
