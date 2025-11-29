import Link from "next/link";
import { BackLink, PageHeader } from "@/components/ui";
import { SectionTitle } from "@/components/home";
import { MailIcon } from "@/components/icons/SocialIcons";

export default function InfoHub() {
  const legalDocs = [
    {
      title: "GDPR Policy",
      description: "How I collect, use, and protect your personal data in compliance with GDPR.",
      href: "/gdpr",
      icon: "🛡️",
    },
    {
      title: "Terms and Conditions",
      description: "The rules and guidelines for using piekara.me and its services.",
      href: "/terms-and-conditions",
      icon: "📜",
    },
    {
      title: "Privacy Policy",
      description: "Information about data collection, cookies, and privacy practices on this site.",
      href: "/privacy-policy",
      icon: "🔒",
    },
  ];

  const appDocs = [
    {
      app: "Tapaterra",
      docs: [
        { title: "GDPR Policy", href: "/gdpr" },
        { title: "Terms and Conditions", href: "/terms-and-conditions" },
      ],
    },
    {
      app: "Wordee",
      docs: [
        { title: "GDPR Policy", href: "/gdpr" },
        { title: "Terms and Conditions", href: "/terms-and-conditions" },
      ],
    },
    {
      app: "Zeyn",
      docs: [
        { title: "GDPR Policy", href: "/gdpr" },
        { title: "Terms and Conditions", href: "/terms-and-conditions" },
      ],
    },
  ];

  return (
    <>
      <BackLink href="/" />
      <PageHeader
        title="Info Hub"
        subtitle="All legal documents, privacy policies, and terms of service for piekara.me and my apps in one place."
        className="mb-12"
      />

      <section className="mb-16">
        <SectionTitle>General Documents</SectionTitle>
        <div className="grid md:grid-cols-3 gap-6">
          {legalDocs.map((doc) => (
            <Link key={doc.title} href={doc.href} className="app-card group">
              <div className="text-4xl mb-4">{doc.icon}</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-[var(--accent)] transition-colors">
                {doc.title}
              </h3>
              <p className="text-[var(--text-muted)] text-sm flex-grow">{doc.description}</p>
              <span className="text-sm text-[var(--accent)] mt-4 inline-flex items-center gap-1">
                Read Document →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-16 hidden">
        <SectionTitle>App Documentation</SectionTitle>
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
            <MailIcon className="w-4 h-4" />
            Email Me
          </a>
        </div>
      </section>
    </>
  );
}
