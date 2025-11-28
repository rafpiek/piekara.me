import Link from "next/link";

export default function Apps() {
  const apps = [
    {
      icon: "🏳️",
      title: "Tapaterra",
      description: "An engaging educational app that makes learning world flags and country information fun and accessible, especially designed for kids but enjoyable for all ages.",
      price: "Educational",
      link: "/apps/tapaterra",
      features: ["Flag Recognition", "Country Facts", "Interactive Quizzes", "Kid-Friendly"]
    },
    {
      icon: "🦉",
      title: "Wordee",
      description: "An English dictionary on your terms. Learn specific words by taking pictures of textbooks and starting effective learning immediately with AI.",
      price: "Early Access",
      link: "/apps/wordee",
      features: ["Camera Input", "AI Powered", "Personalized", "Effective Learning"]
    },
    {
      icon: "🖋️",
      title: "Zeyn",
      description: "The focus-first editor for novel writers. Stop starting over and finally finish your novel with distraction-free tools and smart organization.",
      price: "Beta Access",
      link: "/apps/zeyn",
      features: ["Focus Mode", "Visual Structure", "Smart Tracking", "Desktop First"]
    },
    {
      icon: "🚀",
      title: "Upcoming Project",
      description: "Something exciting is in development. Stay tuned for my next commercial product release with innovative features and modern design.",
      price: "Coming Soon",
      link: "#",
      features: ["In Development", "Innovation", "User-Centric", "Modern Design"]
    },
    {
      icon: "💡",
      title: "Developer Tools",
      description: "A suite of utilities designed to streamline the development workflow and boost productivity for fellow developers.",
      price: "Free",
      link: "#",
      features: ["Developer Focused", "Productivity", "Open Source", "Community"]
    },
    {
      icon: "🎯",
      title: "Learning Platform",
      description: "Interactive educational content and courses to help developers advance their skills and stay current with technology trends.",
      price: "Course",
      link: "#",
      features: ["Video Content", "Interactive", "Progress Tracking", "Certificates"]
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
        <h1 className="mb-4">My Apps</h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '600px' }}>
          Discover mobile applications and digital products I&apos;ve created
        </p>
      </div>

      {/* APPS GRID */}
      <div className="app-grid">
        {apps.map((app, index) => (
          <div key={index} className="app-card">
            <div className="app-header">
              <div className="app-icon">{app.icon}</div>
              <span className="app-price">{app.price}</span>
            </div>
            <h3>{app.title}</h3>
            <p className="mb-4">{app.description}</p>

            <div className="mb-5">
              <h4 style={{
                fontSize: '0.8rem',
                fontWeight: 600,
                color: 'var(--text-muted)',
                marginBottom: '8px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Features:
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {app.features.slice(0, 3).map((feature) => (
                  <span
                    key={feature}
                    style={{
                      padding: '2px 8px',
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      color: 'var(--text-muted)',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      fontWeight: 500
                    }}
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 'auto' }}>
              <Link href={app.link} className="app-link">
                {app.price === "Coming Soon" ? "Learn More" : "View Details"} →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
