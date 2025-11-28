import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 py-10 border-t border-[#222] text-[var(--text-muted)] text-sm">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div>© {currentYear} piekara.me</div>
        <div className="flex flex-wrap gap-5 justify-center">
          <a href="mailto:rafal@piekara.me" className="hover:text-[var(--text)] transition-colors">
            Email
          </a>
          <Link href="https://grubykodzi.pl" target="_blank" className="hover:text-[var(--text)] transition-colors">
            Blog (PL)
          </Link>
          <Link href="https://rafactoring.com" target="_blank" className="hover:text-[var(--text)] transition-colors">
            Blog (EN)
          </Link>
          <Link href="https://github.com/grubykodzi" target="_blank" className="hover:text-[var(--text)] transition-colors">
            GitHub
          </Link>
          <Link href="https://x.com/raf_piek" target="_blank" className="hover:text-[var(--text)] transition-colors">
            X
          </Link>
          <Link href="https://www.linkedin.com/in/rafalpiekara/" target="_blank" className="hover:text-[var(--text)] transition-colors">
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
