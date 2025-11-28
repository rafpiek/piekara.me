import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function Home() {
  const featuredApps = [
    {
      icon: "🏳️",
      title: "Tapaterra",
      description: "An engaging educational app that makes learning world flags and country information fun and accessible, especially designed for kids.",
      price: "Educational",
      link: "/apps/tapaterra"
    },
    {
      icon: "🚀",
      title: "Upcoming App",
      description: "Something exciting is in development. Stay tuned for my next commercial product release.",
      price: "Coming Soon",
      link: "#"
    },
    {
      icon: "💡",
      title: "Developer Tools",
      description: "A suite of utilities designed to streamline the development workflow and boost productivity.",
      price: "Free",
      link: "#"
    }
  ];

  const skills = [
    {
      title: "Clean Code",
      description: "Writing elegant, maintainable code that stands the test of time and scales with your needs."
    },
    {
      title: "Performance",
      description: "Building fast, responsive applications that provide excellent user experiences across all devices."
    },
    {
      title: "User-Centered",
      description: "Creating intuitive interfaces that users love to interact with, focusing on accessibility and usability."
    }
  ];

  return (
    <div>
      <Navigation currentPage="/" />

      <div className="wrapper">
        {/* HERO */}
        <section className="hero">
          <h1>
            I build apps, teach development, and occasionally <span className="highlight">break production.</span>
          </h1>
          <p>
            Hi, I&apos;m Rafał Piekara. Welcome to my digital HQ.
            This is where I ship my commercial products, host my creative projects,
            and keep the lawyers happy.
          </p>
        </section>

        {/* APPS (Commercial) */}
        <h2 className="section-title">Commercial Apps</h2>
        <div className="app-grid">
          {featuredApps.map((app, index) => (
            <div key={index} className="app-card">
              <div className="flex justify-between items-start mb-4">
                <div className="app-icon" style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: 'rgba(217, 29, 65, 0.1)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent)',
                  fontFamily: 'var(--font-head)',
                  fontWeight: 'bold',
                  fontSize: '1.2rem'
                }}>
                  {app.icon}
                </div>
                <span className="app-price" style={{
                  fontSize: '0.9rem',
                  background: '#2a2a2a',
                  padding: '4px 10px',
                  borderRadius: '4px',
                  color: 'var(--text-muted)'
                }}>
                  {app.price}
                </span>
              </div>
              <h3 style={{
                fontSize: '1.25rem',
                marginBottom: '8px'
              }}>
                {app.title}
              </h3>
              <p style={{
                color: 'var(--text-muted)',
                fontSize: '0.95rem',
                marginBottom: '24px',
                flexGrow: 1
              }}>
                {app.description}
              </p>
              <Link
                href={app.link}
                className="app-link"
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: 'var(--text)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                {app.price === "Coming Soon" ? "Learn More" : "View Details"} →
              </Link>
            </div>
          ))}
        </div>

        {/* PROJECTS (Skills/Approach) */}
        <h2 className="section-title">Development Approach</h2>
        <div className="app-grid">
          {skills.map((skill, index) => (
            <div key={index} className="app-card">
              <h3 style={{
                fontSize: '1.25rem',
                marginBottom: '12px'
              }}>
                {skill.title}
              </h3>
              <p style={{
                color: 'var(--text-muted)',
                fontSize: '0.95rem',
                lineHeight: 1.5
              }}>
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        {/* LEGAL HUB (Documentation) */}
        <div className="app-card mb-12">
          <h2 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>
            The Document Hub
          </h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>
            Because <span className="highlight">piekara.me</span> is also a business entity, here are the required documents.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px'
          }}>
            {/* General */}
            <div>
              <h4 style={{
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: 'var(--text-muted)',
                marginBottom: '16px'
              }}>
                General (Piekara.me)
              </h4>
              <ul style={{ listStyle: 'none' }}>
                <li style={{ marginBottom: '10px' }}>
                  <Link href="/gdpr" className="text-[var(--text)] opacity-80 hover:opacity-100 hover:text-[var(--accent)] transition-all">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Product Specific */}
            <div>
              <h4 style={{
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: 'var(--text-muted)',
                marginBottom: '16px'
              }}>
                Tapaterra App
              </h4>
              <ul style={{ listStyle: 'none' }}>
                <li style={{ marginBottom: '10px' }}>
                  <Link href="/apps/tapaterra" className="text-[var(--text)] opacity-80 hover:opacity-100 hover:text-[var(--accent)] transition-all">
                    App Details
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 style={{
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: 'var(--text-muted)',
                marginBottom: '16px'
              }}>
                Connect
              </h4>
              <ul style={{ listStyle: 'none' }}>
                <li style={{ marginBottom: '10px' }}>
                  <Link href="/info-hub" className="text-[var(--text)] opacity-80 hover:opacity-100 hover:text-[var(--accent)] transition-all">
                    Contact Info
                  </Link>
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <Link href="/projects" className="text-[var(--text)] opacity-80 hover:opacity-100 hover:text-[var(--accent)] transition-all">
                    Projects
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
