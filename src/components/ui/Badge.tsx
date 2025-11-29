interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "feature";
  className?: string;
}

export default function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  if (variant === "feature") {
    return (
      <span
        className={className}
        style={{
          padding: "2px 8px",
          backgroundColor: "rgba(255,255,255,0.05)",
          color: "var(--text-muted)",
          borderRadius: "4px",
          fontSize: "0.75rem",
          fontWeight: 500,
        }}
      >
        {children}
      </span>
    );
  }

  return (
    <span
      className={`px-4 py-2 bg-[var(--surface)] text-[var(--text-muted)] rounded-[var(--radius)] text-sm font-medium hover:text-[var(--text)] transition-colors ${className}`}
    >
      {children}
    </span>
  );
}



