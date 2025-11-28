import Link from "next/link";

export default function Zeyn() {
  const features = [
    {
      icon: "🧘",
      title: "Focus Mode",
      description: "Distraction-free writing environment with zen mode and zero UI distractions to help you stay in the flow."
    },
    {
      icon: "🎬",
      title: "Visual Structure",
      description: "Organize your story visually like a film. Drag-and-drop chapters and navigate quickly through your narrative."
    },
    {
      icon: "📈",
      title: "Smart Tracking",
      description: "Monitor daily word counts, maintain writing streaks, and watch your novel grow with meaningful progress metrics."
    },
    {
      icon: "🚀",
      title: "Finish Faster",
      description: "Designed specifically to help novelists stop starting over and finally finish their manuscripts."
    },
    {
      icon: "🔒",
      title: "Local & Safe",
      description: "Your work is stored locally on your device with backup options, ensuring your data remains yours."
    },
    {
      icon: "💻",
      title: "Desktop First",
      description: "Optimized for desktop writing during Beta, with cross-platform mobile support in development."
    },
    {
      icon: "💎",
      title: "Lifetime Deal",
      description: "Get lifetime access with a single purchase. No subscriptions, no surprise bills, just writing."
    },
    {
      icon: "✨",
      title: "AI Powered",
      description: "Leverage AI-powered tools to enhance your focus and overcome writer's block effectively."
    }
  ];

  const screenshots = [
    { title: "Distraction-Free Editor", description: "Clean interface for pure writing focus" },
    { title: "Chapter Management", description: "Visual organization of your story arc" },
    { title: "Progress Dashboard", description: "Track words, streaks, and completion" },
    { title: "Novel Structure", description: "Drag and drop scenes and chapters" }
  ];

  const techStack = [
    "Electron", "React", "TypeScript", "Local Storage",
    "Node.js", "Tailwind CSS"
  ];

  return (
    <>
      <div className="mb-8">
        <Link
          href="/apps"
          className="inline-flex items-center text-[var(--text-muted)] hover:text-[var(--text)] transition-colors mb-6"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Apps
        </Link>

        {/* HERO SECTION */}
        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          <div className="flex-1">
            <h1 className="mb-4 text-4xl font-bold">
              Zeyn
            </h1>
            <p className="text-xl text-[var(--text-muted)] mb-8 leading-relaxed">
              The focus-first editor for novel writers. Stop starting over and finally finish your novel with distraction-free tools and smart organization.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-10">
              <div className="flex items-center px-4 py-2 rounded-full bg-[var(--surface)]">
                <span className="text-purple-500 mr-2">✍️</span>
                <span className="text-[var(--text-muted)] text-sm font-medium">For Novelists</span>
              </div>
              <div className="flex items-center px-4 py-2 rounded-full bg-[var(--surface)]">
                <span className="text-yellow-500 mr-2">★</span>
                <span className="text-[var(--text-muted)] text-sm font-medium">4.9/5 Rating</span>
              </div>
              <div className="flex items-center px-4 py-2 rounded-full bg-[var(--surface)]">
                <span className="text-blue-500 mr-2">💻</span>
                <span className="text-[var(--text-muted)] text-sm font-medium">Desktop Beta</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="https://zeyn.ink" target="_blank" className="px-8 py-4 bg-[var(--text)] text-[var(--bg)] font-bold rounded-[var(--radius)] hover:opacity-90 transition-opacity flex items-center justify-center">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
                Get Early Access
              </Link>
            </div>
          </div>

          {/* Featured Image Placeholder */}
          <div className="flex-1 flex justify-center items-center">
            <div className="w-full max-w-sm aspect-[3/4] rounded-[var(--radius)] bg-[var(--surface)] flex items-center justify-center relative overflow-hidden shadow-2xl">
              <div className="text-center z-10">
                <div className="text-8xl mb-4 opacity-80">🖋️</div>
                <div className="text-xl font-bold tracking-tight">Zeyn</div>
              </div>
              {/* Abstract decorative circles */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 rounded-full blur-3xl opacity-10 transform translate-x-10 -translate-y-10"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-teal-500 rounded-full blur-3xl opacity-5 transform -translate-x-10 translate-y-10"></div>
            </div>
          </div>
        </div>

        {/* FEATURES GRID */}
        <h2 className="text-2xl mb-8 flex items-center gap-3 after:content-[''] after:h-px after:bg-[#333] after:flex-grow">Key Features</h2>
        <div className="app-grid">
          {features.map((feature, index) => (
            <div key={index} className="app-card">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CALLOUT SECTION */}
        <div className="my-20 p-8 md:p-12 rounded-[var(--radius)] bg-[var(--surface)] text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Empowering Writers</h2>
            <p className="text-[var(--text-muted)] text-lg mb-8 max-w-2xl mx-auto">
              Join a community of writers who are finally finishing their stories.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div>
                <div className="text-3xl font-bold text-[var(--accent)] mb-1">2.3M+</div>
                <div className="text-[var(--text-muted)] text-sm uppercase tracking-wider">Words Written</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[var(--accent)] mb-1">92%</div>
                <div className="text-[var(--text-muted)] text-sm uppercase tracking-wider">Finish Rate</div>
              </div>
              <div className="col-span-2 md:col-span-1">
                <div className="text-3xl font-bold text-[var(--accent)] mb-1">Lifetime</div>
                <div className="text-[var(--text-muted)] text-sm uppercase tracking-wider">Access</div>
              </div>
            </div>
          </div>
        </div>

        {/* SCREENSHOTS */}
        <h2 className="text-2xl mb-8 flex items-center gap-3 after:content-[''] after:h-px after:bg-[#333] after:flex-grow">App Screenshots</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              className="bg-[var(--surface)] rounded-[var(--radius)] overflow-hidden group transition-colors"
            >
              <div className="aspect-[9/16] bg-[#111] flex items-center justify-center relative">
                 {/* Placeholder for screenshot */}
                 <div className="text-[var(--text-muted)] opacity-20 text-4xl font-mono">UI</div>
              </div>
              <div className="p-4 border-t border-[rgba(255,255,255,0.05)]">
                <h3 className="font-semibold text-sm mb-1 text-[var(--text)]">
                  {screenshot.title}
                </h3>
                <p className="text-xs text-[var(--text-muted)]">
                  {screenshot.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* TECH STACK */}
        <div className="mb-24">
          <h2 className="text-2xl mb-8 flex items-center gap-3 after:content-[''] after:h-px after:bg-[#333] after:flex-grow">Built With</h2>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-[var(--surface)] text-[var(--text-muted)] rounded-[var(--radius)] text-sm font-medium hover:text-[var(--text)] transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA FOOTER */}
        <div className="text-center mb-16 pt-12 border-t border-[rgba(255,255,255,0.05)]">
          <h2 className="text-3xl font-bold mb-6">Write Your Masterpiece</h2>
          <p className="text-[var(--text-muted)] mb-10 max-w-2xl mx-auto text-lg">
            Get lifetime access to Zeyn and start writing without distractions today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="https://zeyn.ink"
              target="_blank"
              className="inline-flex items-center justify-center px-8 py-4 bg-[var(--accent)] text-[var(--text)] font-bold rounded-[var(--radius)] hover:opacity-90 transition-opacity text-lg"
            >
              Visit Website
            </Link>
            <Link
              href="/apps"
              className="inline-flex items-center justify-center px-8 py-4 bg-[var(--surface)] text-[var(--text)] font-bold rounded-[var(--radius)] hover:bg-[var(--surface-hover)] transition-colors text-lg"
            >
              View Other Apps
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
