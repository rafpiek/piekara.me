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
    <header>
      <Link href="/" className="logo">
        piekara<span className="highlight">.me</span>
      </Link>
      <nav className="nav-links hidden md:flex">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={
              pathname.startsWith(item.href)
                ? "text-[var(--text)]"
                : ""
            }
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
