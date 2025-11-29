"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: "/apps", label: "Apps" },
    { href: "/#social", label: "Contact" },
    { href: "/info-hub", label: "Info Hub" },
  ];

  return (
    <header className="sticky top-0 z-50 -mx-6 px-6 py-6 flex justify-between items-center bg-[var(--bg)]/80 backdrop-blur-md border-b border-transparent transition-all duration-300 [&:not(:hover)]:border-b-white/5">
      <Link href="/" className="font-[family-name:var(--font-head)] text-xl font-semibold tracking-tight flex items-center gap-2">
        <Image
          src="/logo-alfa.png"
          alt="Piekara.me logo"
          width={28}
          height={28}
          className="object-contain"
        />
        <span>piekara<span className="text-[var(--accent)]">.me</span></span>
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
    </header>
  );
}
