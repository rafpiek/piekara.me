import Link from "next/link";

export default function InfoHub() {
  const legalDocs = [
    {
      title: "Privacy & GDPR Policy",
      description: "How I collect, use, and protect your personal data in compliance with GDPR.",
      href: "/gdpr",
      icon: "🔒",
    },
    {
      title: "Terms of Use",
      description: "The rules and guidelines for using piekara.me and its services.",
      href: "/gdpr",
      icon: "📜",
    },
    {
      title: "Cookie Policy",
      description: "Information about cookies and tracking technologies used on this site.",
      href: "/gdpr",
      icon: "🍪",
    },
  ];

  const appDocs = [
    {
      app: "Tapaterra",
      docs: [
        { title: "Privacy Policy", href: "/gdpr" },
        { title: "Terms of Service", href: "/gdpr" },
      ],
    },
    {
      app: "Wordee",
      docs: [
        { title: "Privacy Policy", href: "/gdpr" },
        { title: "Terms of Service", href: "/gdpr" },
      ],
    },
    {
      app: "Zeyn",
      docs: [
        { title: "Privacy Policy", href: "/gdpr" },
        { title: "Terms of Service", href: "/gdpr" },
      ],
    },
  ];

  return (
    <>
      <div className="mb-12">
        <Link
          href="/"
          className="inline-flex items-center text-[var(--text-muted)] hover:text-[var(--text)] transition-colors mb-8"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Info Hub
        </h1>
        <p className="text-xl text-[var(--text-muted)] max-w-2xl">
          All legal documents, privacy policies, and terms of service for piekara.me and my apps in one place.
        </p>
      </div>

      {/* General Legal Documents */}
      <section className="mb-16">
        <h2 className="text-2xl mb-8 flex items-center gap-3 after:content-[''] after:h-px after:bg-[#333] after:flex-grow">
          General Documents
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {legalDocs.map((doc) => (
            <Link
              key={doc.title}
              href={doc.href}
              className="app-card group"
            >
              <div className="text-4xl mb-4">{doc.icon}</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-[var(--accent)] transition-colors">
                {doc.title}
              </h3>
              <p className="text-[var(--text-muted)] text-sm flex-grow">
                {doc.description}
              </p>
              <span className="text-sm text-[var(--accent)] mt-4 inline-flex items-center gap-1">
                Read Document →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* App-Specific Documents */}
      <section className="mb-16">
        <h2 className="text-2xl mb-8 flex items-center gap-3 after:content-[''] after:h-px after:bg-[#333] after:flex-grow">
          App Documentation
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {appDocs.map((app) => (
            <div key={app.app} className="app-card">
              <h3 className="text-lg font-semibold mb-4">{app.app}</h3>
              <ul className="space-y-3">
                {app.docs.map((doc) => (
                  <li key={doc.title}>
                    <Link
                      href={doc.href}
                      className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors text-sm flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></span>
                      {doc.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="legal-section">
        <h2 className="text-xl font-semibold mb-2">Questions?</h2>
        <p className="text-[var(--text-muted)] mb-6">
          If you have any questions about these documents or need clarification, feel free to reach out.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:contact@piekara.me"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--accent)] text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email Me
          </a>
        </div>
      </section>
    </>
  );
}
