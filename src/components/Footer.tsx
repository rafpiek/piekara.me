import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div>© 2024 Piekara.me</div>
      <div>
        <Link href="#" style={{ marginLeft: "20px" }}>Twitter/X</Link>
        <Link href="#" style={{ marginLeft: "20px" }}>GitHub</Link>
      </div>
    </footer>
  );
}
