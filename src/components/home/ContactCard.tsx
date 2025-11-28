import { MailIcon } from "@/components/icons/SocialIcons";

export default function ContactCard() {
  return (
    <div className="app-card mb-20">
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        <div className="md:shrink-0">
          <h3 className="text-xl font-semibold mb-2">Get in Touch</h3>
          <p className="text-[var(--text-muted)]">
            Have a question or want to work together? Feel free to reach out.
          </p>
        </div>
        <a
          href="mailto:contact@piekara.me"
          className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--accent)] text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
        >
          <MailIcon className="w-5 h-5" />
          Email me
        </a>
      </div>
    </div>
  );
}

