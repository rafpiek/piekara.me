import { SectionTitle } from "@/components/home";
import { Badge } from "@/components/ui";

export interface TechStackProps {
  technologies: string[];
  title?: string;
}

export function TechStack({ technologies, title = "Built With" }: TechStackProps) {
  return (
    <>
      <SectionTitle>{title}</SectionTitle>
      <div className="mb-24">
        <div className="flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </div>
    </>
  );
}



