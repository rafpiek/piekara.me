import { SectionTitle, SocialLinks, ContactCard } from "@/components/home";

export const metadata = {
  title: "Contact - Rafal Piekara",
  description: "Get in touch with Rafal Piekara. Connect via email or social media.",
};

export default function ContactPage() {
  return (
    <>
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact</h1>
        <p className="text-lg text-[var(--text-muted)]">
          Let's connect! Whether you have a question, want to collaborate, or just want to say hi,
          I'd love to hear from you.
        </p>
      </div>

      <SectionTitle id="email">Get in Touch</SectionTitle>
      <ContactCard />

      <SectionTitle id="social">Connect With Me</SectionTitle>
      <SocialLinks />
    </>
  );
}
