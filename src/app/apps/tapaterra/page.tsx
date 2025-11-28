import Link from "next/link";

export default function Tapaterra() {
  const features = [
    {
      icon: "🏳️",
      title: "Flag Recognition",
      description: "Learn to identify flags from all countries around the world with interactive flashcards and quizzes."
    },
    {
      icon: "🌍",
      title: "Country Information",
      description: "Discover fascinating facts about countries including capitals, populations, languages, and geography."
    },
    {
      icon: "🎮",
      title: "Fun Quizzes",
      description: "Engage in educational games that make learning geography exciting and memorable for kids."
    },
    {
      icon: "📚",
      title: "Progress Tracking",
      description: "Monitor learning progress with achievement badges and personalized learning paths."
    },
    {
      icon: "🗺️",
      title: "Interactive Maps",
      description: "Explore world maps with clickable countries to learn more about each region."
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Kid-Friendly",
      description: "Designed with colorful interfaces and simple navigation perfect for young learners."
    },
    {
      icon: "📱",
      title: "Offline Learning",
      description: "Download content for offline access during travel or when internet is not available."
    },
    {
      icon: "🏆",
      title: "Achievement System",
      description: "Earn badges and rewards as you master flags and country knowledge."
    }
  ];

  const screenshots = [
    { title: "Flag Flashcards", description: "Learn flags with beautiful, high-quality images" },
    { title: "Country Details", description: "Explore comprehensive information about each country" },
    { title: "Interactive Quizzes", description: "Test your knowledge with fun educational games" },
    { title: "Progress Dashboard", description: "Track learning achievements and milestones" }
  ];

  const techStack = [
    "React Native", "TypeScript", "Node.js", "PostgreSQL",
    "Firebase", "Redux", "JWT Auth", "Interactive Maps API"
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
              Tapaterra
            </h1>
            <p className="text-xl text-[var(--text-muted)] mb-8 leading-relaxed">
              An engaging educational app that makes learning world flags and country information fun and accessible. Designed for kids, loved by everyone.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-10">
              <div className="flex items-center px-4 py-2 rounded-full bg-[var(--surface)]">
                <span className="mr-2">✓</span>
                <span className="text-[var(--text-muted)] text-sm font-medium">iOS & Android</span>
              </div>
              <div className="flex items-center px-4 py-2 rounded-full bg-[var(--surface)]">
                <span className="text-yellow-500 mr-2">★</span>
                <span className="text-[var(--text-muted)] text-sm font-medium">4.9 Rating</span>
              </div>
              <div className="flex items-center px-4 py-2 rounded-full bg-[var(--surface)]">
                <span className="text-blue-500 mr-2">🎓</span>
                <span className="text-[var(--text-muted)] text-sm font-medium">Educational</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-[var(--text)] text-[var(--bg)] font-bold rounded-[var(--radius)] hover:opacity-90 transition-opacity flex items-center justify-center">
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                Download for iOS
              </button>
              <button className="px-8 py-4 bg-[var(--surface)] text-[var(--text)] font-bold rounded-[var(--radius)] hover:bg-[var(--surface-hover)] transition-colors flex items-center justify-center">
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-1.229 0 .996.996 0 010-1.229l9.158-9.158-9.158-9.158a.996.996 0 010-1.229.996.996 0 011.228 0zM20.487 12c0-.4-.156-.78-.438-1.061l-8.943-8.943a1.5 1.5 0 00-2.121 2.121L17.246 12l-8.261 8.261a1.5 1.5 0 102.121 2.121l8.943-8.943A1.496 1.496 0 0020.487 12z"/>
                </svg>
                Download for Android
              </button>
            </div>
          </div>

          {/* Featured Image Placeholder */}
          <div className="flex-1 flex justify-center items-center">
            <div className="w-full max-w-sm aspect-[3/4] rounded-[var(--radius)] bg-[var(--surface)] flex items-center justify-center relative overflow-hidden shadow-2xl">
              <div className="text-center z-10">
                <div className="text-8xl mb-4 opacity-80">🏳️</div>
                <div className="text-xl font-bold tracking-tight">Tapaterra</div>
              </div>
              {/* Abstract decorative circles */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent)] rounded-full blur-3xl opacity-10 transform translate-x-10 -translate-y-10"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-[var(--accent)] rounded-full blur-3xl opacity-5 transform -translate-x-10 translate-y-10"></div>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Perfect for Young Explorers</h2>
            <p className="text-[var(--text-muted)] text-lg mb-8 max-w-2xl mx-auto">
              Whether you&apos;re a parent looking for educational content, a teacher planning lessons, or just curious about the world.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div>
                <div className="text-3xl font-bold text-[var(--accent)] mb-1">195+</div>
                <div className="text-[var(--text-muted)] text-sm uppercase tracking-wider">Countries</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[var(--accent)] mb-1">500K+</div>
                <div className="text-[var(--text-muted)] text-sm uppercase tracking-wider">Learners</div>
              </div>
              <div className="col-span-2 md:col-span-1">
                <div className="text-3xl font-bold text-[var(--accent)] mb-1">1k+</div>
                <div className="text-[var(--text-muted)] text-sm uppercase tracking-wider">Questions</div>
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
                 <div className="text-[var(--text-muted)] opacity-20 text-4xl font-mono">APP UI</div>
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
          <h2 className="text-3xl font-bold mb-6">Start Your Adventure</h2>
          <p className="text-[var(--text-muted)] mb-10 max-w-2xl mx-auto text-lg">
            Join thousands of learners exploring the world through flags and country facts.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/info-hub"
              className="inline-flex items-center justify-center px-8 py-4 bg-[var(--accent)] text-[var(--text)] font-bold rounded-[var(--radius)] hover:opacity-90 transition-opacity text-lg"
            >
              Contact for Schools
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
