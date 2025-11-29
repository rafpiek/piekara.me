import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-20 pb-24 max-w-[1100px]">
      <div className="flex flex-col-reverse md:flex-row gap-12 md:gap-16 items-center">
        <div className="flex-1 max-w-[700px]">
          <h1 className="text-[clamp(2.5rem,5vw,4rem)] mb-6">
            I build apps, teach Programming, and occasionally{" "}
            <span className="highlight">break production.</span>
          </h1>
          <p className="text-xl text-[var(--text-muted)] max-w-[600px]">
            Hi, I&apos;m Rafał Piekara. Welcome to my digital HQ. This is where I
            ship my commercial products, host my creative projects, and keep the
            lawyers happy.
          </p>
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/profile.jpg"
            alt="Rafał Piekara"
            width={400}
            height={400}
            className="rounded-full shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] ring-1 ring-white/10"
            priority
          />
        </div>
      </div>
    </section>
  );
}




