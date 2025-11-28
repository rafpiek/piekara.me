import Link from "next/link";

export default function InfoHub() {
  return (
    <>
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center text-[var(--text-muted)] hover:text-[var(--text)] transition-colors mb-6"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
        <h1 className="mb-4">
          Info Hub
        </h1>
        <p className="text-xl text-[var(--text-muted)]">
          Learn more about me, my background, and how to get in touch
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 space-y-8">
          <div className="app-card">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              About Me
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-[var(--text-muted)] leading-relaxed mb-4">
                Hello! I&apos;m Rafał Piekara, a passionate software developer with a love for creating elegant, efficient solutions to complex problems. My journey in technology began with a curiosity about how things work and evolved into a career dedicated to building meaningful digital experiences.
              </p>
              <p className="text-[var(--text-muted)] leading-relaxed mb-4">
                I specialize in modern web technologies and enjoy working across the full stack. From crafting pixel-perfect user interfaces to designing scalable backend architectures, I find joy in every aspect of the development process.
              </p>
              <p className="text-[var(--text-muted)] leading-relaxed">
                When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community through writing and mentoring.
              </p>
            </div>
          </div>

          <div className="app-card">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <div className="w-8 h-8 bg-purple-900 rounded-full flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              Skills & Expertise
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Frontend Development</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Backend Development</h3>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-green-900 text-green-200 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Tools & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'Docker', 'AWS', 'Vercel', 'Figma', 'VS Code'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-purple-900 text-purple-200 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="app-card">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <div className="w-8 h-8 bg-green-900 rounded-full flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              Experience
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold">Senior Full Stack Developer</h3>
                <p className="text-[var(--text-muted)] mb-2">Tech Company | 2021 - Present</p>
                <p className="text-[var(--text-muted)]">
                  Leading development of modern web applications, mentoring junior developers, and architecting scalable solutions.
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-semibold">Frontend Developer</h3>
                <p className="text-[var(--text-muted)] mb-2">Digital Agency | 2019 - 2021</p>
                <p className="text-[var(--text-muted)]">
                  Built responsive, user-friendly interfaces for various client projects using React and modern CSS frameworks.
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-lg font-semibold">Junior Developer</h3>
                <p className="text-[var(--text-muted)] mb-2">Startup | 2018 - 2019</p>
                <p className="text-[var(--text-muted)]">
                  Started my professional journey, learning best practices and contributing to various features of the main product.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="rounded-2xl p-8 text-white bg-gradient-to-br from-blue-600 to-purple-600">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>contact@piekara.me</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Poland</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                <span>piekara.me</span>
              </div>
            </div>
            <div className="mt-6">
              <Link
                href="/"
                className="inline-block w-full text-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-slate-100 transition-colors"
              >
                Send Message
              </Link>
            </div>
          </div>

          <div className="app-card">
            <h2 className="text-xl font-bold mb-4">Social Profiles</h2>
            <div className="space-y-3">
              <a
                href="https://github.com"
                className="flex items-center p-3 rounded-lg hover:bg-[var(--surface-hover)] transition-colors"
              >
                <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <span className="text-[var(--text)]">GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                className="flex items-center p-3 rounded-lg hover:bg-[var(--surface-hover)] transition-colors"
              >
                <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <span className="text-[var(--text)]">LinkedIn</span>
              </a>
              <a
                href="https://twitter.com"
                className="flex items-center p-3 rounded-lg hover:bg-[var(--surface-hover)] transition-colors"
              >
                <div className="w-8 h-8 bg-sky-900 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-sky-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </div>
                <span className="text-[var(--text)]">Twitter</span>
              </a>
            </div>
          </div>

          <div className="app-card">
            <h2 className="text-xl font-bold mb-4">Interests</h2>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                <span className="text-[var(--text)]">Open Source Contributions</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                <span className="text-[var(--text)]">UI/UX Design</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                <span className="text-[var(--text)]">Technical Writing</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                <span className="text-[var(--text)]">Mentoring</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                <span className="text-[var(--text)]">Photography</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-3xl p-12 text-center bg-gradient-to-r from-slate-900 to-slate-800 border border-[var(--border)]">
        <h2 className="text-3xl font-bold text-white mb-4">Let&apos;s Work Together</h2>
        <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
          I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/projects"
            className="px-8 py-3 bg-white text-slate-900 font-semibold rounded-full hover:bg-slate-100 transition-colors"
          >
            View Projects
          </Link>
          <Link
            href="/"
            className="px-8 py-3 border border-slate-600 text-white font-semibold rounded-full hover:bg-slate-800 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </>
  );
}
