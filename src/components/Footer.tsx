import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 py-10 border-t border-[#222] text-[var(--text-muted)] text-sm flex justify-between">
      <div>© 2024 Piekara.me</div>
      <div className="flex gap-5">
        <Link href="#" className="hover:text-[var(--text)] transition-colors">Twitter/X</Link>
        <Link href="#" className="hover:text-[var(--text)] transition-colors">GitHub</Link>
      </div>
    </footer>
  );
}
