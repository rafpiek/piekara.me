import Link from "next/link";
import { ReactNode } from "react";

export interface AppBadge {
  icon: string;
  label: string;
  iconColor?: string;
}

export interface AppButton {
  label: string;
  href?: string;
  icon?: ReactNode;
  variant: "primary" | "secondary";
  external?: boolean;
}

export interface AppHeroProps {
  title: string;
  description: string;
  badges: AppBadge[];
  buttons: AppButton[];
  previewEmoji: string;
  accentColors?: {
    top?: string;
    bottom?: string;
  };
}

export function AppHero({
  title,
  description,
  badges,
  buttons,
  previewEmoji,
  accentColors = { top: "var(--accent)", bottom: "var(--accent)" },
}: AppHeroProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-8 mb-16">
      <div className="flex-1">
        <h1 className="mb-4 text-4xl font-bold">{title}</h1>
        <p className="text-xl text-[var(--text-muted)] mb-8 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-3 mb-10">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center px-4 py-2 rounded-full bg-[var(--surface)]"
            >
              <span className={`mr-2 ${badge.iconColor || ""}`}>{badge.icon}</span>
              <span className="text-[var(--text-muted)] text-sm font-medium">
                {badge.label}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          {buttons.map((button, index) => {
            const className =
              button.variant === "primary"
                ? "px-8 py-4 bg-[var(--text)] text-[var(--bg)] font-bold rounded-[var(--radius)] hover:opacity-90 transition-opacity flex items-center justify-center"
                : "px-8 py-4 bg-[var(--surface)] text-[var(--text)] font-bold rounded-[var(--radius)] hover:bg-[var(--surface-hover)] transition-colors flex items-center justify-center";

            if (button.href) {
              return (
                <Link
                  key={index}
                  href={button.href}
                  target={button.external ? "_blank" : undefined}
                  className={className}
                >
                  {button.icon}
                  {button.label}
                </Link>
              );
            }

            return (
              <button key={index} className={className}>
                {button.icon}
                {button.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <div className="w-full max-w-sm aspect-[3/4] rounded-[var(--radius)] bg-[var(--surface)] flex items-center justify-center relative overflow-hidden shadow-2xl">
          <div className="text-center z-10">
            <div className="text-8xl mb-4 opacity-80">{previewEmoji}</div>
            <div className="text-xl font-bold tracking-tight">{title}</div>
          </div>
          <div
            className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-10 transform translate-x-10 -translate-y-10"
            style={{ backgroundColor: accentColors.top }}
          />
          <div
            className="absolute bottom-0 left-0 w-40 h-40 rounded-full blur-3xl opacity-5 transform -translate-x-10 translate-y-10"
            style={{ backgroundColor: accentColors.bottom }}
          />
        </div>
      </div>
    </div>
  );
}



