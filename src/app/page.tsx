import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="py-20 pb-24 max-w-[800px]">
        <h1 className="text-[clamp(2.5rem,5vw,4rem)] mb-6">
          I build apps, teach Rails, and occasionally <span className="highlight">break production.</span>
        </h1>
        <p className="text-xl text-[var(--text-muted)] max-w-[600px]">
          Hi, I&apos;m Rafał Piekara. Welcome to my digital HQ.
          This is where I ship my commercial products, host my creative projects,
          and keep the lawyers happy.
        </p>
      </section>

      {/* APPS (Commercial) */}
      <h2 className="text-2xl mb-8 flex items-center gap-3 after:content-[''] after:h-px after:bg-[#333] after:flex-grow">Commercial Apps</h2>
      <div className="app-grid" id="apps">

        {/* App 1 - Tapaterra */}
        <div className="app-card">
          <div className="app-header">
            <div className="app-icon">🏳️</div>
            <span className="app-price">Educational</span>
          </div>
          <h3>Tapaterra</h3>
          <p>An engaging educational app that makes learning world flags and country information fun and accessible.</p>
          <Link href="/apps/tapaterra" className="app-link">
            View Details →
          </Link>
        </div>

        {/* App 2 - Placeholder */}
        <div className="app-card">
          <div className="app-header">
            <div className="app-icon">🚀</div>
            <span className="app-price">Coming Soon</span>
          </div>
          <h3>Upcoming App</h3>
          <p>Something exciting is in development. Stay tuned for my next commercial product release.</p>
          <span className="app-link" style={{ cursor: 'default', opacity: 0.6 }}>
            Stay Tuned
          </span>
        </div>

        {/* App 3 - Tools */}
        <div className="app-card">
          <div className="app-header">
            <div className="app-icon">💡</div>
            <span className="app-price">Free</span>
          </div>
          <h3>Developer Tools</h3>
          <p>A suite of utilities designed to streamline the development workflow and boost productivity.</p>
          <Link href="#" className="app-link">
            Get Access →
          </Link>
        </div>

      </div>

      {/* PROJECTS (Side Projects) */}
      <h2 className="text-2xl mb-8 flex items-center gap-3 after:content-[''] after:h-px after:bg-[#333] after:flex-grow" id="projects">Side Projects</h2>
      <div className="project-list">
        <Link href="/projects" className="project-item">
          <span className="project-name">Development Approach & Skills</span>
          <span className="project-desc">Methodology</span>
        </Link>
        <Link href="#" className="project-item">
          <span className="project-name">Open Source UI Kit</span>
          <span className="project-desc">GitHub / MIT License</span>
        </Link>
        <Link href="#" className="project-item">
          <span className="project-name">My Old Blog (Archive)</span>
          <span className="project-desc">2018 - 2022</span>
        </Link>
      </div>

      {/* LEGAL HUB */}
      <div className="legal-section" id="legal">
        <h2 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>The Document Hub</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '0' }}>
          Because <span className="highlight">piekara.me</span> is also a business entity, here are the required documents.
        </p>

        <div className="legal-grid">
          {/* General */}
          <div className="legal-col">
            <h4>General (Piekara.me)</h4>
            <ul>
              <li><Link href="/gdpr">Terms of Use</Link></li>
              <li><Link href="/gdpr">Privacy Policy</Link></li>
              <li><Link href="/gdpr">Cookie Settings</Link></li>
            </ul>
          </div>

          {/* Product Specific */}
          <div className="legal-col">
            <h4>Tapaterra App</h4>
            <ul>
              <li><Link href="/apps/tapaterra">App Details</Link></li>
              <li><Link href="/gdpr">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="legal-col">
            <h4>Connect</h4>
            <ul>
              <li><Link href="/info-hub">Contact Info</Link></li>
              <li><Link href="/projects">Projects</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
