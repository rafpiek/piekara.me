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
    icon: "📱",
    title: "Mobile First",
    description:
      "Designed primarily for mobile usage to help you learn on the go, anytime, anywhere.",
  },
  {
    icon: "📸",
    title: "Snap & Learn",
    description:
      "Take pictures of your textbooks, notes, or any English text to instantly extract and save vocabulary.",
  },
  {
    icon: "🧠",
    title: "AI-Powered",
    description:
      "Intelligent AI translates words to Polish and creates personalized learning sets adapted to you.",
  },
  {
    icon: "⚡",
    title: "High Effectiveness",
    description:
      "Proven methodology boasting 94% effectiveness and +127% memorization improvement.",
  },
  {
    icon: "👆",
    title: "Intuitive Swiping",
    description:
      "Learn efficiently by swiping cards, making the process as engaging as scrolling social media.",
  },
  {
    icon: "🎯",
    title: "Personalized",
    description:
      "Focus only on the words you need from your own materials, not generic lists.",
  },
  {
    icon: "🔄",
    title: "Adaptive Learning",
    description:
      "The system evolves with your progress to ensure optimal retention and growth.",
  },
  {
    icon: "🆓",
    title: "Early Access",
    description:
      "Join the Early Birds Program to get free access and shape the future of the app.",
  },
];

const screenshots: Screenshot[] = [
  {
    title: "Camera Input",
    description: "Capture text from any source instantly",
  },
  {
    title: "Vocabulary Extraction",
    description: "AI identifies and lists key words",
  },
  {
    title: "Swipe Learning",
    description: "Review words with intuitive gestures",
  },
  {
    title: "Progress Stats",
    description: "Track your retention and mastery",
  },
];

const techStack = [
  "React Native",
  "AI/ML",
  "Computer Vision",
  "Node.js",
  "Cloud Functions",
  "Natural Language Processing",
];

export default function Wordee() {
  return (
    <>
      <BackLink href="/apps" label="Back to Apps" />

      <AppHero
        title="Wordee"
        description="An English dictionary on your terms. Learn specific words by taking pictures of textbooks and starting effective learning immediately."
        badges={[
          { icon: "🚀", label: "Early Access" },
          { icon: "✨", label: "AI Powered", iconColor: "text-purple-500" },
          { icon: "📈", label: "High Retention", iconColor: "text-green-500" },
        ]}
        buttons={[
          {
            label: "Get Early Access",
            href: "https://wordee.pl",
            variant: "primary",
            external: true,
            icon: (
              <svg
                className="w-6 h-6 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            ),
          },
        ]}
        previewEmoji="🦉"
        accentColors={{ top: "#a855f7", bottom: "#3b82f6" }}
      />

      <FeatureGrid features={features} />

      <StatsBanner
        title="Proven Effectiveness"
        description="Our AI-driven methodology is designed to help you remember more and learn faster."
        stats={[
          { value: "94%", label: "Effectiveness" },
          { value: "+127%", label: "Memorization" },
          { value: "AI", label: "Powered" },
        ]}
      />

      <ScreenshotGallery screenshots={screenshots} />

      <TechStack technologies={techStack} />

      <AppCTA
        title="Start Learning Today"
        description="Join the Early Birds Program and experience a new way of learning English."
        primaryLink={{
          label: "Visit Website",
          href: "https://wordee.pl",
          external: true,
        }}
        secondaryLink={{ label: "View Other Apps", href: "/apps" }}
      />
    </>
  );
}
