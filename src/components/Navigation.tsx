import Link from "next/link";

interface NavigationProps {
  currentPage?: string;
}

export default function Navigation({ currentPage = "" }: NavigationProps) {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/apps", label: "Apps" },
    { href: "/projects", label: "Projects" },
    { href: "/info-hub", label: "Info Hub" },
    { href: "/gdpr", label: "Docs" },
  ];

  return (
    <header className="py-10">
      <div className="wrapper flex items-center justify-between">
        <Link
          href="/"
          className="logo"
          style={{
            fontFamily: 'var(--font-head)',
            fontSize: '1.25rem',
            fontWeight: 600,
            letterSpacing: '-0.02em'
          }}
        >
          piekara<span className="highlight">.me</span>
        </Link>
        <nav className="nav-links hidden md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`ml-6 text-sm transition-colors ${
                currentPage === item.href || (currentPage === "" && item.href === "/")
                  ? "text-[var(--text)]"
                  : "text-[var(--text-muted)] hover:text-[var(--text)]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <button className="text-[var(--text-muted)]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}