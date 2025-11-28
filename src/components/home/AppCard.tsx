import Link from "next/link";

interface AppCardProps {
  icon: string;
  badge: string;
  title: string;
  description: string;
  href?: string;
  linkText?: string;
  disabled?: boolean;
}

export default function AppCard({
  icon,
  badge,
  title,
  description,
  href,
  linkText = "View Details →",
  disabled = false,
}: AppCardProps) {
  return (
    <div className="app-card">
      <div className="app-header">
        <div className="app-icon">{icon}</div>
        <span className="app-price">{badge}</span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      {disabled ? (
        <span className="app-link" style={{ cursor: "default", opacity: 0.6 }}>
          {linkText}
        </span>
      ) : (
        <Link href={href || "#"} className="app-link">
          {linkText}
        </Link>
      )}
    </div>
  );
}

