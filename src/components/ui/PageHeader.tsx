interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function PageHeader({ title, subtitle, className = "" }: PageHeaderProps) {
  return (
    <div className={`mb-16 ${className}`}>
      <h1 className="mb-4">{title}</h1>
      {subtitle && (
        <p style={{ fontSize: "1.25rem", color: "var(--text-muted)", maxWidth: "600px" }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}



