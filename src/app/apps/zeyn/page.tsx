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
    icon: "🧘",
    title: "Focus Mode",
    description:
      "Distraction-free writing environment with zen mode and zero UI distractions to help you stay in the flow.",
  },
  {
    icon: "🎬",
    title: "Visual Structure",
    description:
      "Organize your story visually like a film. Drag-and-drop chapters and navigate quickly through your narrative.",
  },
  {
    icon: "📈",
    title: "Smart Tracking",
    description:
      "Monitor daily word counts, maintain writing streaks, and watch your novel grow with meaningful progress metrics.",
  },
  {
    icon: "🚀",
    title: "Finish Faster",
    description:
      "Designed specifically to help novelists stop starting over and finally finish their manuscripts.",
  },
  {
    icon: "🔒",
    title: "Local & Safe",
    description:
      "Your work is stored locally on your device with backup options, ensuring your data remains yours.",
  },
  {
    icon: "💻",
    title: "Desktop First",
    description:
      "Optimized for desktop writing during Beta, with cross-platform mobile support in development.",
  },
  {
    icon: "💎",
    title: "Lifetime Deal",
    description:
      "Get lifetime access with a single purchase. No subscriptions, no surprise bills, just writing.",
  },
  {
    icon: "✨",
    title: "AI Powered",
    description:
      "Leverage AI-powered tools to enhance your focus and overcome writer's block effectively.",
  },
];

const screenshots: Screenshot[] = [
  {
    title: "Distraction-Free Editor",
    description: "Clean interface for pure writing focus",
  },
  {
    title: "Chapter Management",
    description: "Visual organization of your story arc",
  },
  {
    title: "Progress Dashboard",
    description: "Track words, streaks, and completion",
  },
  {
    title: "Novel Structure",
    description: "Drag and drop scenes and chapters",
  },
];

const techStack = [
  "Electron",
  "React",
  "TypeScript",
  "Local Storage",
  "Node.js",
  "Tailwind CSS",
];

export default function Zeyn() {
  return (
    <>
      <BackLink href="/apps" label="Back to Apps" />

      <AppHero
        title="Zeyn"
        description="The focus-first editor for novel writers. Stop starting over and finally finish your novel with distraction-free tools and smart organization."
        badges={[
          { icon: "✍️", label: "For Novelists", iconColor: "text-purple-500" },
          { icon: "★", label: "4.9/5 Rating", iconColor: "text-yellow-500" },
          { icon: "💻", label: "Desktop Beta", iconColor: "text-blue-500" },
        ]}
        buttons={[
          {
            label: "Get Early Access",
            href: "https://zeyn.ink",
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
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            ),
          },
        ]}
        previewEmoji="🖋️"
        accentColors={{ top: "#6366f1", bottom: "#14b8a6" }}
      />

      <FeatureGrid features={features} />

      <StatsBanner
        title="Empowering Writers"
        description="Join a community of writers who are finally finishing their stories."
        stats={[
          { value: "2.3M+", label: "Words Written" },
          { value: "92%", label: "Finish Rate" },
          { value: "Lifetime", label: "Access" },
        ]}
      />

      <ScreenshotGallery screenshots={screenshots} />

      <TechStack technologies={techStack} />

      <AppCTA
        title="Write Your Masterpiece"
        description="Get lifetime access to Zeyn and start writing without distractions today."
        primaryLink={{
          label: "Visit Website",
          href: "https://zeyn.ink",
          external: true,
        }}
        secondaryLink={{ label: "View Other Apps", href: "/apps" }}
      />
    </>
  );
}
