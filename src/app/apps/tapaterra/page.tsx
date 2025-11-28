import { BackLink } from "@/components/ui";
import {
  AppHero,
  FeatureGrid,
  StatsBanner,
  ScreenshotGallery,
  TechStack,
  AppCTA,
  type Feature,
  type Screenshot,
} from "@/components/apps";

const features: Feature[] = [
  {
    icon: "🏳️",
    title: "Flag Recognition",
    description:
      "Learn to identify flags from all countries around the world with interactive flashcards and quizzes.",
  },
  {
    icon: "🌍",
    title: "Country Information",
    description:
      "Discover fascinating facts about countries including capitals, populations, languages, and geography.",
  },
  {
    icon: "🎮",
    title: "Fun Quizzes",
    description:
      "Engage in educational games that make learning geography exciting and memorable for kids.",
  },
  {
    icon: "📚",
    title: "Progress Tracking",
    description:
      "Monitor learning progress with achievement badges and personalized learning paths.",
  },
  {
    icon: "🗺️",
    title: "Interactive Maps",
    description:
      "Explore world maps with clickable countries to learn more about each region.",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Kid-Friendly",
    description:
      "Designed with colorful interfaces and simple navigation perfect for young learners.",
  },
  {
    icon: "📱",
    title: "Offline Learning",
    description:
      "Download content for offline access during travel or when internet is not available.",
  },
  {
    icon: "🏆",
    title: "Achievement System",
    description:
      "Earn badges and rewards as you master flags and country knowledge.",
  },
];

const screenshots: Screenshot[] = [
  {
    title: "Flag Flashcards",
    description: "Learn flags with beautiful, high-quality images",
  },
  {
    title: "Country Details",
    description: "Explore comprehensive information about each country",
  },
  {
    title: "Interactive Quizzes",
    description: "Test your knowledge with fun educational games",
  },
  {
    title: "Progress Dashboard",
    description: "Track learning achievements and milestones",
  },
];

const techStack = [
  "React Native",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Firebase",
  "Redux",
  "JWT Auth",
  "Interactive Maps API",
];

export default function Tapaterra() {
  return (
    <>
      <BackLink href="/apps" label="Back to Apps" />

      <AppHero
        title="Tapaterra"
        description="An engaging educational app that makes learning world flags and country information fun and accessible. Designed for kids, loved by everyone."
        badges={[
          { icon: "✓", label: "iOS & Android" },
          { icon: "★", label: "4.9 Rating", iconColor: "text-yellow-500" },
          { icon: "🎓", label: "Educational", iconColor: "text-blue-500" },
        ]}
        buttons={[
          {
            label: "Download for iOS",
            variant: "primary",
            icon: (
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
            ),
          },
          {
            label: "Download for Android",
            variant: "secondary",
            icon: (
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-1.229 0 .996.996 0 010-1.229l9.158-9.158-9.158-9.158a.996.996 0 010-1.229.996.996 0 011.228 0zM20.487 12c0-.4-.156-.78-.438-1.061l-8.943-8.943a1.5 1.5 0 00-2.121 2.121L17.246 12l-8.261 8.261a1.5 1.5 0 102.121 2.121l8.943-8.943A1.496 1.496 0 0020.487 12z" />
              </svg>
            ),
          },
        ]}
        previewEmoji="🏳️"
        accentColors={{ top: "var(--accent)", bottom: "var(--accent)" }}
      />

      <FeatureGrid features={features} />

      <StatsBanner
        title="Perfect for Young Explorers"
        description="Whether you're a parent looking for educational content, a teacher planning lessons, or just curious about the world."
        stats={[
          { value: "195+", label: "Countries" },
          { value: "500K+", label: "Learners" },
          { value: "1k+", label: "Questions" },
        ]}
      />

      <ScreenshotGallery screenshots={screenshots} />

      <TechStack technologies={techStack} />

      <AppCTA
        title="Start Your Adventure"
        description="Join thousands of learners exploring the world through flags and country facts."
        primaryLink={{ label: "Contact for Schools", href: "/info-hub" }}
        secondaryLink={{ label: "View Other Apps", href: "/apps" }}
      />
    </>
  );
}
