import { StatCard } from "@/components/ui";

export interface Stat {
  value: string;
  label: string;
}

export interface StatsBannerProps {
  title: string;
  description: string;
  stats: Stat[];
}

export function StatsBanner({ title, description, stats }: StatsBannerProps) {
  return (
    <div className="my-20 p-8 md:p-12 rounded-[var(--radius)] bg-[var(--surface)] text-center relative overflow-hidden">
      <div className="relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
        <p className="text-[var(--text-muted)] text-lg mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {stats.map((stat, index) => (
            <StatCard key={index} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </div>
  );
}




