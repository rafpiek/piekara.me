import Link from "next/link";

interface NavigationProps {
  currentPage?: string;
}

export default function Navigation({ currentPage = "" }: NavigationProps) {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/apps", label: "Apps" },
    { href: "/info-hub", label: "Info Hub" },
    { href: "/projects", label: "Projects" },
    { href: "/gdpr", label: "GDPR" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Rafał Piekarz
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors ${
                  currentPage === item.href || (currentPage === "" && item.href === "/")
                    ? "text-blue-600 dark:text-blue-400 font-medium"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <button className="text-slate-600 dark:text-slate-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}