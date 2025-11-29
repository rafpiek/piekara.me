import Link from "next/link";
import Badge from "@/components/ui/Badge";

interface AppCardProps {
  icon: string;
  badge: string;
  title: string;
  description: string;
  href?: string;
  linkText?: string;
  disabled?: boolean;
  features?: string[];
}

export default function AppCard({
  icon,
  badge,
  title,
  description,
  href,
  linkText = "View Details →",
  disabled = false,
  features,
}: AppCardProps) {
  return (
    <div className="app-card">
      <div className="app-header">
        <div className="app-icon">{icon}</div>
        <span className="app-price">{badge}</span>
      </div>
      <h3>{title}</h3>
      <p className={features ? "mb-4" : ""}>{description}</p>

      {features && features.length > 0 && (
        <div className="mb-5">
          <h4
            style={{
              fontSize: "0.8rem",
              fontWeight: 600,
              color: "var(--text-muted)",
              marginBottom: "8px",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Features:
          </h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {features.slice(0, 3).map((feature) => (
              <Badge key={feature} variant="feature">
                {feature}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {href && (
        <div className="hidden" style={{ display: "none", justifyContent: "flex-end", marginTop: "auto" }}>
          {disabled ? (
            <span className="app-link" style={{ cursor: "default", opacity: 0.6 }}>
              {linkText}
            </span>
          ) : (
            <Link href={href} className="app-link">
              {linkText}
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

