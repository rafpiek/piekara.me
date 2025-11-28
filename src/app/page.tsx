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
  { name: "Development Approach & Skills", description: "Methodology", href: "/projects" },
  { name: "Open Source UI Kit", description: "GitHub / MIT License", href: "#" },
  { name: "My Old Blog (Archive)", description: "2018 - 2022", href: "#" },
];

export default function Home() {
  return (
    <>
      <Hero />

      <SectionTitle>Apps</SectionTitle>
      <a href="/apps" className="text-sm text-[var(--accent)] hover:underline mb-4 inline-block">
        See more →
      </a>
      <div className="app-grid" id="apps">
        {apps.map((app) => (
          <AppCard key={app.title} {...app} />
        ))}
      </div>

      <SectionTitle id="projects">Side Projects</SectionTitle>
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
