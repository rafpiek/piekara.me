import { SectionTitle } from "@/components/home";

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface FeatureGridProps {
  features: Feature[];
  title?: string;
}

export function FeatureGrid({ features, title = "Key Features" }: FeatureGridProps) {
  return (
    <>
      <SectionTitle>{title}</SectionTitle>
      <div className="app-grid">
        {features.map((feature, index) => (
          <div key={index} className="app-card">
            <div className="text-3xl mb-4">{feature.icon}</div>
            <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}


