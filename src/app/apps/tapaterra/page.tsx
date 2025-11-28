import Link from "next/link";
import Navigation from "@/components/Navigation";

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-black dark:to-slate-900">
      <Navigation currentPage="/apps/tapaterra" />

      <main className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <Link
              href="/apps"
              className="inline-flex items-center text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors mb-6"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Apps
            </Link>

            <div className="flex flex-col lg:flex-row gap-8 mb-12">
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
                  Tapaterra
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
                  An engaging educational app that makes learning world flags and country information fun and accessible, especially designed for kids but enjoyable for all ages.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-2">
                      <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-700 dark:text-slate-300">Available on iOS</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-2">
                      <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-700 dark:text-slate-300">Available on Android</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mr-2">
                      <svg className="w-4 h-4 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    </div>
                    <span className="text-slate-700 dark:text-slate-300">4.9 Rating</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-2">
                      <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                      </svg>
                    </div>
                    <span className="text-slate-700 dark:text-slate-300">Educational</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-full hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                    </svg>
                    Download for iOS
                  </button>
                  <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-colors flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-1.229 0 .996.996 0 010-1.229l9.158-9.158-9.158-9.158a.996.996 0 010-1.229.996.996 0 011.228 0zM20.487 12c0-.4-.156-.78-.438-1.061l-8.943-8.943a1.5 1.5 0 00-2.121 2.121L17.246 12l-8.261 8.261a1.5 1.5 0 102.121 2.121l8.943-8.943A1.496 1.496 0 0020.487 12z"/>
                    </svg>
                    Download for Android
                  </button>
                </div>
              </div>

              <div className="flex-1 flex justify-center">
                <div className="w-64 h-96 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl shadow-2xl flex items-center justify-center">
                  <div className="w-56 h-80 bg-black dark:bg-slate-800 rounded-2xl flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-6xl mb-4">🏳️</div>
                      <div className="text-sm">Tapaterra</div>
                      <div className="text-xs opacity-75">Learn Flags & Countries</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-12 text-white mb-12">
              <h2 className="text-3xl font-bold mb-4 text-center">Perfect for Young Explorers</h2>
              <p className="text-xl mb-8 text-center max-w-3xl mx-auto">
                Whether you're a parent looking for educational content for your kids, a teacher planning geography lessons, or someone who wants to expand their world knowledge, Tapaterra makes learning geography fun and engaging.
              </p>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold mb-2">195+</div>
                  <div className="text-blue-100">Countries</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">500K+</div>
                  <div className="text-blue-100">Happy Learners</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">1000+</div>
                  <div className="text-blue-100">Quiz Questions</div>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center text-slate-900 dark:text-white">App Screenshots</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {screenshots.map((screenshot, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden"
                  >
                    <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                        {screenshot.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {screenshot.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Technical Stack</h2>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Start Your Geography Adventure</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
                Join thousands of learners exploring the world through flags and country facts. Download Tapaterra today and make learning geography an exciting journey!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
                >
                  Contact for Schools
                </Link>
                <Link
                  href="/apps"
                  className="px-8 py-3 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  View Other Apps
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}