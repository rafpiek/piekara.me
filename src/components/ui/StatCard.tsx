interface StatCardProps {
  value: string;
  label: string;
}

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "8px", color: "var(--accent)" }}>
        {value}
      </div>
      <div style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>{label}</div>
    </div>
  );
}


