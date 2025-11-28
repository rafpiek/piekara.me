export default function Hero() {
  return (
    <section className="py-20 pb-24 max-w-[800px]">
      <h1 className="text-[clamp(2.5rem,5vw,4rem)] mb-6">
        I build apps, teach Programming, and occasionally{" "}
        <span className="highlight">break production.</span>
      </h1>
      <p className="text-xl text-[var(--text-muted)] max-w-[600px] mb-8">
        Hi, I&apos;m Rafał Piekara. Welcome to my digital HQ. This is where I
        ship my commercial products, host my creative projects, and keep the
        lawyers happy.
      </p>
      <div className="flex flex-wrap gap-4 text-sm">
        <a
          href="https://x.com/raf_piek"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-[#1DA1F2] text-white rounded-lg hover:bg-[#1a8cd8] transition-colors"
        >
          X (Twitter)
        </a>
        <a
          href="https://www.tiktok.com/@grubykodzi"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-[#000000] text-white rounded-lg hover:bg-[#333] transition-colors"
        >
          TikTok
        </a>
        <a
          href="https://www.instagram.com/rafalpiekara/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-[#E4405F] text-white rounded-lg hover:bg-[#d13352] transition-colors"
        >
          Instagram
        </a>
        <a
          href="https://www.threads.net/@rafalpiekara"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-[#000000] text-white rounded-lg hover:bg-[#333] transition-colors"
        >
          Threads
        </a>
        <a
          href="https://www.linkedin.com/in/rafalpiekara/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-[#0077B5] text-white rounded-lg hover:bg-[#005885] transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="https://bsky.app/profile/rafalpiekara.bsky.social"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-[#0085FF] text-white rounded-lg hover:bg-[#0066cc] transition-colors"
        >
          BlueSky
        </a>
        <a
          href="https://www.youtube.com/@grubykodzi"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-[#FF0000] text-white rounded-lg hover:bg-[#cc0000] transition-colors"
        >
          YouTube
        </a>
      </div>
    </section>
  );
}

