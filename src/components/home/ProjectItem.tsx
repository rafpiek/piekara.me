import Link from "next/link";

interface ProjectItemProps {
  href: string;
  name: string;
  description: string;
}

export default function ProjectItem({ href, name, description }: ProjectItemProps) {
  return (
    <Link href={href} className="project-item">
      <span className="project-name">{name}</span>
      <span className="project-desc">{description}</span>
    </Link>
  );
}



