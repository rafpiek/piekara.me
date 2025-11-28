import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function Apps() {
  const apps = [
    {
      title: "Tapaterra",
      description: "An educational app that makes learning world flags and country information fun and accessible, especially designed for kids.",
      image: "/api/placeholder/400/250",
      category: "Educational",
      platform: "iOS & Android",
      features: ["Flag Recognition", "Country Facts", "Interactive Quizzes", "Kid-Friendly"],
      color: "from-blue-400 to-purple-500",
      href: "/apps/tapaterra"
    },
    {
      title: "Coming Soon",
      description: "More exciting apps are currently in development. Stay tuned for updates!",
      image: "/api/placeholder/400/250",
      category: "Various",
      platform: "Multiple",
      features: ["In Development", "Innovation", "User-Centric", "Modern Design"],
      color: "from-blue-400 to-purple-500",
      href: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-black dark:to-slate-900">
      <Navigation currentPage="/apps" />

      <main className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors mb-6"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
              My Apps
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Discover mobile applications and digital products I've created
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {apps.map((app, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`relative h-48 bg-gradient-to-br ${app.color}`}>
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/90 rounded-2xl flex items-center justify-center shadow-lg">
                      <svg className="w-10 h-10 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 dark:bg-black/70 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium">
                      {app.category}
                    </span>
                  </div>
                  {app.platform && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-black/70 text-white rounded-full text-sm font-medium">
                        {app.platform}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">
                    {app.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                    {app.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {app.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded text-xs font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {app.href !== "#" ? (
                    <Link
                      href={app.href}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
                    >
                      Learn More
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ) : (
                    <div className="px-6 py-3 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-full text-center font-medium">
                      Coming Soon
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-12 text-center text-white mb-12">
            <h2 className="text-3xl font-bold mb-4">Tapaterra - Now Available!</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              An engaging educational app that makes learning world flags and country information fun and accessible, especially designed for kids.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/apps/tapaterra"
                className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-slate-100 transition-colors"
              >
                Learn More About Tapaterra
              </Link>
              <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transition-all">
                Download App
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Quality Assured</h3>
              <p className="text-slate-600 dark:text-slate-400">
                All apps are thoroughly tested and refined for the best user experience.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Regular Updates</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Continuous improvements and new features based on user feedback.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">User Focused</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Designed with care for the end user's needs and preferences.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}