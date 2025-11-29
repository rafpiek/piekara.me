import Image from "next/image";
import { BackLink, PageHeader } from "@/components/ui";
import { AppCard } from "@/components/home";

export default function Apps() {
  const apps = [
    {
      icon: "🏳️",
      title: "Tapaterra",
      description: "An engaging educational app that makes learning world flags and country information fun and accessible, especially designed for kids but enjoyable for all ages.",
      badge: "Educational",
      features: ["Flag Recognition", "Country Facts", "Interactive Quizzes", "Kid-Friendly"],
    },
    {
      icon: "🦉",
      title: "Wordee",
      description: "An English dictionary on your terms. Learn specific words by taking pictures of textbooks and starting effective learning immediately with AI.",
      badge: "Early Access",
      features: ["Camera Input", "AI Powered", "Personalized", "Effective Learning"],
    },
    {
      icon: "🖋️",
      title: "Zeyn",
      description: "The focus-first editor for novel writers. Stop starting over and finally finish your novel with distraction-free tools and smart organization.",
      badge: "Beta Access",
      features: ["Focus Mode", "Visual Structure", "Smart Tracking", "Desktop First"],
    },
    {
      icon: "🚀",
      title: "Upcoming Project",
      description: "Something exciting is in development. Stay tuned for my next commercial product release with innovative features and modern design.",
      badge: "Coming Soon",
      features: ["In Development", "Innovation", "User-Centric", "Modern Design"],
      disabled: true,
    },
    {
      icon: "💡",
      title: "Developer Tools",
      description: "A suite of utilities designed to streamline the development workflow and boost productivity for fellow developers.",
      badge: "Coming Soon",
      features: ["Developer Focused", "Productivity", "Open Source", "Community"],
      disabled: true,
    },
    {
      icon: "🎯",
      title: "Learning Platform",
      description: "Interactive educational content and courses to help developers advance their skills and stay current with technology trends.",
      badge: "Coming Soon",
      features: ["Video Content", "Interactive", "Progress Tracking", "Certificates"],
      disabled: true,
    },
  ];

  return (
    <>
      <BackLink href="/" />
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-12">
        <div className="flex-1">
          <PageHeader title="My Apps" subtitle="Discover mobile applications and digital products I've created" />
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/profile-apps.jpg"
            alt="Rafał Piekara - Developer"
            width={280}
            height={280}
            className="rounded-2xl shadow-xl"
          />
        </div>
      </div>

      <div className="app-grid">
        {apps.map((app, index) => (
          <AppCard
            key={index}
            icon={app.icon}
            badge={app.badge}
            title={app.title}
            description={app.description}
            disabled={app.disabled}
            features={app.features}
          />
        ))}
      </div>
    </>
  );
}
