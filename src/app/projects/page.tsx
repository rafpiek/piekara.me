import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      name: "E-Commerce Platform",
      description: "Full-stack commerce solution with React, Node.js, and PostgreSQL integration",
      category: "Web Development"
    },
    {
      name: "Task Management App",
      description: "Collaborative task management with real-time updates and drag-and-drop functionality",
      category: "Web Application"
    },
    {
      name: "Weather Dashboard",
      description: "Responsive weather app with forecasts, charts, and historical data visualization",
      category: "Frontend Project"
    },
    {
      name: "Blog Platform",
      description: "Markdown-based blogging platform with syntax highlighting and RSS generation",
      category: "Content Platform"
    },
    {
      name: "API Rate Limiter",
      description: "Flexible rate-limiting middleware for Node.js with Redis backend",
      category: "Backend Development"
    },
    {
      name: "Mobile Banking App",
      description: "Secure banking application with biometric authentication and real-time transactions",
      category: "Mobile Development"
    },
    {
      name: "Machine Learning Pipeline",
      description: "Automated ML pipeline for data processing and model deployment",
      category: "Data Science"
    },
    {
      name: "Open Source UI Kit",
      description: "Component library and design system for modern web applications",
      category: "Open Source"
    },
    {
      name: "How to Rails YouTube Channel",
      description: "Educational content teaching modern Ruby on Rails development practices",
      category: "Educational Content"
    },
    {
      name: "Portfolio Website (This Site)",
      description: "Modern portfolio built with Next.js and featuring dark theme design",
      category: "Personal Project"
    }
  ];

  return (
    <>
      {/* BACK LINK */}
      <div className="mb-12">
        <Link
          href="/"
          className="inline-flex items-center text-[var(--text-muted)] hover:text-[var(--text)] transition-colors mb-6"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
      </div>

      {/* PAGE HEADER */}
      <div className="mb-16">
        <h1 className="mb-4">Side Projects</h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '600px' }}>
          A collection of experiments, open-source work, and creative projects
        </p>
      </div>

      {/* PROJECTS LIST */}
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <span className="project-name">{project.name}</span>
            <span className="project-desc">{project.category}</span>
          </div>
        ))}
      </div>

      {/* ABOUT SECTION */}
      <div className="app-card">
        <h2 style={{ fontSize: '1.25rem', marginBottom: '16px' }}>
          About These Projects
        </h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '16px', lineHeight: 1.6 }}>
          This is a curated selection of my work spanning different technologies and domains.
          Each project represents a learning opportunity and a chance to solve interesting problems.
        </p>
        <p style={{ color: 'var(--text-muted)', marginBottom: '24px', lineHeight: 1.6 }}>
          Some projects are production-ready applications, while others are experimental or educational
          in nature. All of them reflect my passion for clean code, user-centered design, and continuous learning.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '20px',
          marginTop: '32px'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '8px', color: 'var(--accent)' }}>
              {projects.length}+
            </div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Projects Completed
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '8px', color: 'var(--accent)' }}>
              15+
            </div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Technologies Used
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '8px', color: 'var(--accent)' }}>
              5+
            </div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Years of Experience
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
