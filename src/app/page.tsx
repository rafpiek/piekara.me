import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-black dark:to-slate-900">
      <Navigation currentPage="/" />

      <main className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Welcome to My Digital Space
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-8">
              I'm a passionate developer and creator. This is my corner of the internet where I share my work, thoughts, and ideas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/apps/tapaterra"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105"
              >
                🏳️ Try Tapaterra App
              </Link>
              <Link
                href="/apps"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
              >
                View All Apps
              </Link>
              <Link
                href="/info-hub"
                className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-800 dark:text-white font-semibold rounded-full border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all transform hover:scale-105"
              >
                Learn More About Me
              </Link>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-12 text-center text-white mb-16">
            <h2 className="text-3xl font-bold mb-4">🏳️ Featured App: Tapaterra</h2>
            <p className="text-xl mb-6 max-w-3xl mx-auto">
              An engaging educational app that makes learning world flags and country information fun and accessible, especially designed for kids but enjoyable for all ages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/apps/tapaterra"
                className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-slate-100 transition-colors"
              >
                Learn More
              </Link>
              <Link
                href="/apps"
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transition-all"
              >
                View All Apps
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Clean Code</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Writing elegant, maintainable code that stands the test of time and scales with your needs.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Performance</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Building fast, responsive applications that provide excellent user experiences across all devices.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-pink-600 dark:text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">User-Centered</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Creating intuitive interfaces that users love to interact with, focusing on accessibility and usability.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Let's Connect</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/info-hub"
                className="px-8 py-3 bg-white text-slate-900 font-semibold rounded-full hover:bg-slate-100 transition-colors"
              >
                Get in Touch
              </Link>
              <Link
                href="/projects"
                className="px-8 py-3 border border-slate-600 text-white font-semibold rounded-full hover:bg-slate-800 transition-colors"
              >
                See My Work
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
