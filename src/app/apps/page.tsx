import { BackLink, PageHeader } from "@/components/ui";
import { AppCard } from "@/components/home";

export default function Apps() {
  const apps = [
    {
      icon: "🏳️",
      title: "Tapaterra",
      description: "An engaging educational app that makes learning world flags and country information fun and accessible, especially designed for kids but enjoyable for all ages.",
      badge: "Educational",
      href: "/apps/tapaterra",
      features: ["Flag Recognition", "Country Facts", "Interactive Quizzes", "Kid-Friendly"],
    },
    {
      icon: "🦉",
      title: "Wordee",
      description: "An English dictionary on your terms. Learn specific words by taking pictures of textbooks and starting effective learning immediately with AI.",
      badge: "Early Access",
      href: "/apps/wordee",
      features: ["Camera Input", "AI Powered", "Personalized", "Effective Learning"],
    },
    {
      icon: "🖋️",
      title: "Zeyn",
      description: "The focus-first editor for novel writers. Stop starting over and finally finish your novel with distraction-free tools and smart organization.",
      badge: "Beta Access",
      href: "/apps/zeyn",
      features: ["Focus Mode", "Visual Structure", "Smart Tracking", "Desktop First"],
    },
    {
      icon: "🚀",
      title: "Upcoming Project",
      description: "Something exciting is in development. Stay tuned for my next commercial product release with innovative features and modern design.",
      badge: "Coming Soon",
      href: "#",
      features: ["In Development", "Innovation", "User-Centric", "Modern Design"],
      disabled: true,
      linkText: "Learn More",
    },
    {
      icon: "💡",
      title: "Developer Tools",
      description: "A suite of utilities designed to streamline the development workflow and boost productivity for fellow developers.",
      badge: "Free",
      href: "#",
      features: ["Developer Focused", "Productivity", "Open Source", "Community"],
    },
    {
      icon: "🎯",
      title: "Learning Platform",
      description: "Interactive educational content and courses to help developers advance their skills and stay current with technology trends.",
      badge: "Course",
      href: "#",
      features: ["Video Content", "Interactive", "Progress Tracking", "Certificates"],
    },
  ];

  return (
    <>
      <BackLink href="/" />
      <PageHeader title="My Apps" subtitle="Discover mobile applications and digital products I've created" />

      <div className="app-grid">
        {apps.map((app, index) => (
          <AppCard
            key={index}
            icon={app.icon}
            badge={app.badge}
            title={app.title}
            description={app.description}
            href={app.href}
            linkText={app.linkText}
            disabled={app.disabled}
            features={app.features}
          />
        ))}
      </div>
    </>
  );
}
