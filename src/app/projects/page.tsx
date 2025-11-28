import { BackLink, PageHeader, StatCard } from "@/components/ui";
import { ProjectItem } from "@/components/home";

export default function Projects() {
  const projects = [
    {
      name: "E-Commerce Platform",
      description: "Full-stack commerce solution with React, Node.js, and PostgreSQL integration",
      category: "Web Development",
      href: "#",
    },
    {
      name: "Task Management App",
      description: "Collaborative task management with real-time updates and drag-and-drop functionality",
      category: "Web Application",
      href: "#",
    },
    {
      name: "Weather Dashboard",
      description: "Responsive weather app with forecasts, charts, and historical data visualization",
      category: "Frontend Project",
      href: "#",
    },
    {
      name: "Blog Platform",
      description: "Markdown-based blogging platform with syntax highlighting and RSS generation",
      category: "Content Platform",
      href: "#",
    },
    {
      name: "API Rate Limiter",
      description: "Flexible rate-limiting middleware for Node.js with Redis backend",
      category: "Backend Development",
      href: "#",
    },
    {
      name: "Mobile Banking App",
      description: "Secure banking application with biometric authentication and real-time transactions",
      category: "Mobile Development",
      href: "#",
    },
    {
      name: "Machine Learning Pipeline",
      description: "Automated ML pipeline for data processing and model deployment",
      category: "Data Science",
      href: "#",
    },
    {
      name: "Open Source UI Kit",
      description: "Component library and design system for modern web applications",
      category: "Open Source",
      href: "#",
    },
    {
      name: "How to Rails YouTube Channel",
      description: "Educational content teaching modern Ruby on Rails development practices",
      category: "Educational Content",
      href: "#",
    },
    {
      name: "Portfolio Website (This Site)",
      description: "Modern portfolio built with Next.js and featuring dark theme design",
      category: "Personal Project",
      href: "#",
    },
  ];

  return (
    <>
      <BackLink href="/" />
      <PageHeader
        title="Side Projects"
        subtitle="A collection of experiments, open-source work, and creative projects"
      />

      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectItem key={index} href={project.href} name={project.name} description={project.category} />
        ))}
      </div>

      <div className="app-card">
        <h2 style={{ fontSize: "1.25rem", marginBottom: "16px" }}>About These Projects</h2>
        <p style={{ color: "var(--text-muted)", marginBottom: "16px", lineHeight: 1.6 }}>
          This is a curated selection of my work spanning different technologies and domains. Each project
          represents a learning opportunity and a chance to solve interesting problems.
        </p>
        <p style={{ color: "var(--text-muted)", marginBottom: "24px", lineHeight: 1.6 }}>
          Some projects are production-ready applications, while others are experimental or educational in
          nature. All of them reflect my passion for clean code, user-centered design, and continuous
          learning.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "20px",
            marginTop: "32px",
          }}
        >
          <StatCard value={`${projects.length}+`} label="Projects Completed" />
          <StatCard value="15+" label="Technologies Used" />
          <StatCard value="5+" label="Years of Experience" />
        </div>
      </div>
    </>
  );
}
