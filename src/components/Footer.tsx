import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 py-10 border-t border-[#222] text-[var(--text-muted)] text-sm flex justify-between">
      <div>© {currentYear} piekara.me</div>
      <div className="flex gap-5">
        <Link href="/#social" className="hover:text-[var(--text)] transition-colors">Contact</Link>
        <Link href="https://github.com/grubykodzi" target="_blank" className="hover:text-[var(--text)] transition-colors">GitHub</Link>
      </div>
    </footer>
  );
}
