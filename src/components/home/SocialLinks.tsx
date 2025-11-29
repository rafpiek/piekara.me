import { Linkedin, Youtube, Instagram, Music2, AtSign, FileText } from "lucide-react";
import { XIcon, BlueskyIcon } from "@/components/icons/SocialIcons";

const socials = [
  { href: "https://x.com/raf_piek", label: "X / Twitter", Icon: XIcon, hoverColor: "group-hover:text-[var(--text)]" },
  { href: "https://www.linkedin.com/in/rafalpiekara/", label: "LinkedIn", Icon: Linkedin, hoverColor: "group-hover:text-[#0A66C2]" },
  { href: "https://www.youtube.com/@grubykodzi", label: "YouTube", Icon: Youtube, hoverColor: "group-hover:text-[#FF0000]" },
  { href: "https://www.instagram.com/rafalpiekara/", label: "Instagram", Icon: Instagram, hoverColor: "group-hover:text-[#E4405F]" },
  { href: "https://www.tiktok.com/@grubykodzi", label: "TikTok", Icon: Music2, hoverColor: "group-hover:text-[var(--text)]" },
  { href: "https://bsky.app/profile/rafalpiekara.bsky.social", label: "Bluesky", Icon: BlueskyIcon, hoverColor: "group-hover:text-[#0085FF]" },
  { href: "https://www.threads.net/@rafalpiekara", label: "Threads", Icon: AtSign, hoverColor: "group-hover:text-[var(--text)]" },
  { href: "https://grubykodzi.pl", label: "Blog (PL)", Icon: FileText, hoverColor: "group-hover:text-[var(--accent)]" },
];

export default function SocialLinks() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-20">
      {socials.map(({ href, label, Icon, hoverColor }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="app-card group flex flex-col items-center justify-center py-6"
        >
          <Icon className={`w-8 h-8 mb-3 text-[var(--text-muted)] ${hoverColor} transition-colors`} />
          <span className="text-sm text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors">
            {label}
          </span>
        </a>
      ))}
    </div>
  );
}


