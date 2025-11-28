import Link from "next/link";

export default function Wordee() {
  const features = [
    {
      icon: "📱",
      title: "Mobile First",
      description: "Designed primarily for mobile usage to help you learn on the go, anytime, anywhere."
    },
    {
      icon: "📸",
      title: "Snap & Learn",
      description: "Take pictures of your textbooks, notes, or any English text to instantly extract and save vocabulary."
    },
    {
      icon: "🧠",
      title: "AI-Powered",
      description: "Intelligent AI translates words to Polish and creates personalized learning sets adapted to you."
    },
    {
      icon: "⚡",
      title: "High Effectiveness",
      description: "Proven methodology boasting 94% effectiveness and +127% memorization improvement."
    },
    {
      icon: "👆",
      title: "Intuitive Swiping",
      description: "Learn efficiently by swiping cards, making the process as engaging as scrolling social media."
    },
    {
      icon: "🎯",
      title: "Personalized",
      description: "Focus only on the words you need from your own materials, not generic lists."
    },
    {
      icon: "🔄",
      title: "Adaptive Learning",
      description: "The system evolves with your progress to ensure optimal retention and growth."
    },
    {
      icon: "🆓",
      title: "Early Access",
      description: "Join the Early Birds Program to get free access and shape the future of the app."
    }
  ];

  const screenshots = [
    { title: "Camera Input", description: "Capture text from any source instantly" },
    { title: "Vocabulary Extraction", description: "AI identifies and lists key words" },
    { title: "Swipe Learning", description: "Review words with intuitive gestures" },
    { title: "Progress Stats", description: "Track your retention and mastery" }
  ];

  const techStack = [
    "React Native", "AI/ML", "Computer Vision", "Node.js",
    "Cloud Functions", "Natural Language Processing"
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
              Wordee
            </h1>
            <p className="text-xl text-[var(--text-muted)] mb-8 leading-relaxed">
              An English dictionary on your terms. Learn specific words by taking pictures of textbooks and starting effective learning immediately.
            </p>
            
            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-10">
              <div className="flex items-center px-4 py-2 rounded-full bg-[var(--surface)]">
                <span className="mr-2">🚀</span>
                <span className="text-[var(--text-muted)] text-sm font-medium">Early Access</span>
              </div>
              <div className="flex items-center px-4 py-2 rounded-full bg-[var(--surface)]">
                <span className="text-purple-500 mr-2">✨</span>
                <span className="text-[var(--text-muted)] text-sm font-medium">AI Powered</span>
              </div>
              <div className="flex items-center px-4 py-2 rounded-full bg-[var(--surface)]">
                <span className="text-green-500 mr-2">📈</span>
                <span className="text-[var(--text-muted)] text-sm font-medium">High Retention</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="https://wordee.pl" target="_blank" className="px-8 py-4 bg-[var(--text)] text-[var(--bg)] font-bold rounded-[var(--radius)] hover:opacity-90 transition-opacity flex items-center justify-center">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Get Early Access
              </Link>
            </div>
          </div>

          {/* Featured Image Placeholder */}
          <div className="flex-1 flex justify-center items-center">
            <div className="w-full max-w-sm aspect-[3/4] rounded-[var(--radius)] bg-[var(--surface)] flex items-center justify-center relative overflow-hidden shadow-2xl">
              <div className="text-center z-10">
                <div className="text-8xl mb-4 opacity-80">🦉</div>
                <div className="text-xl font-bold tracking-tight">Wordee</div>
              </div>
              {/* Abstract decorative circles */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-10 transform translate-x-10 -translate-y-10"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-5 transform -translate-x-10 translate-y-10"></div>
            </div>
          </div>
        </div>

        {/* FEATURES GRID */}
        <h2 className="section-title">Key Features</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Proven Effectiveness</h2>
            <p className="text-[var(--text-muted)] text-lg mb-8 max-w-2xl mx-auto">
              Our AI-driven methodology is designed to help you remember more and learn faster.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div>
                <div className="text-3xl font-bold text-[var(--accent)] mb-1">94%</div>
                <div className="text-[var(--text-muted)] text-sm uppercase tracking-wider">Effectiveness</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[var(--accent)] mb-1">+127%</div>
                <div className="text-[var(--text-muted)] text-sm uppercase tracking-wider">Memorization</div>
              </div>
              <div className="col-span-2 md:col-span-1">
                <div className="text-3xl font-bold text-[var(--accent)] mb-1">AI</div>
                <div className="text-[var(--text-muted)] text-sm uppercase tracking-wider">Powered</div>
              </div>
            </div>
          </div>
        </div>

        {/* SCREENSHOTS */}
        <h2 className="section-title">App Screenshots</h2>
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
          <h2 className="section-title">Built With</h2>
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
          <h2 className="text-3xl font-bold mb-6">Start Learning Today</h2>
          <p className="text-[var(--text-muted)] mb-10 max-w-2xl mx-auto text-lg">
            Join the Early Birds Program and experience a new way of learning English.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="https://wordee.pl"
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
