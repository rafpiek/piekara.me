import Link from "next/link";
import {
  Hero,
  SectionTitle,
  AppCard,
  ProjectItem,
  SocialLinks,
  ContactCard,
  DocumentHub,
} from "@/components/home";

const apps = [
  {
    icon: "🏳️",
    badge: "Educational",
    title: "Tapaterra",
    description: "An engaging educational app that makes learning world flags and country information fun and accessible.",
    href: "/apps/tapaterra",
    linkText: "View Details →",
  },
  {
    icon: "🚀",
    badge: "Coming Soon",
    title: "Upcoming App",
    description: "Something exciting is in development. Stay tuned for my next commercial product release.",
    linkText: "Stay Tuned",
    disabled: true,
  },
  {
    icon: "💡",
    badge: "Free",
    title: "Developer Tools",
    description: "A suite of utilities designed to streamline the development workflow and boost productivity.",
    href: "#",
    linkText: "Get Access →",
  },
];

const projects = [
  {
    name: 'Ultimate Rails SaaS template',
    description: 'A Rails & React SaaS template powered by Inertia.js for modern, scalable apps.',
    href: '#',
  },
  {
    name: 'Course: Ruby on Rails architecture basics',
    description: 'A deep dive into the fundamentals of building robust and maintainable Rails applications.',
    href: '#',
  },
  {
    name: 'Book: The Mystery Beast',
    description: "A gripping horror novel where a small town is terrorized by an unseen creature.",
    href: '#',
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <div className="text-right mb-4">
        <Link href="/apps" className="text-sm text-[var(--accent)] hover:underline">
          See more →
        </Link>
      </div>
      <SectionTitle>Apps</SectionTitle>
      <div className="app-grid" id="apps">
        {apps.map((app) => (
          <AppCard key={app.title} {...app} />
        ))}
      </div>

      <SectionTitle id="projects">I'm currently working on</SectionTitle>
      <div className="project-list">
        {projects.map((project) => (
          <ProjectItem key={project.name} {...project} />
        ))}
      </div>

      <SectionTitle id="social">Connect With Me</SectionTitle>
      <SocialLinks />
      <ContactCard />

      <DocumentHub />
    </>
  );
}
