import { SectionTitle } from "@/components/home";

export interface Screenshot {
  title: string;
  description: string;
}

export interface ScreenshotGalleryProps {
  screenshots: Screenshot[];
  title?: string;
}

export function ScreenshotGallery({
  screenshots,
  title = "App Screenshots",
}: ScreenshotGalleryProps) {
  return (
    <>
      <SectionTitle>{title}</SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {screenshots.map((screenshot, index) => (
          <div
            key={index}
            className="bg-[var(--surface)] rounded-[var(--radius)] overflow-hidden group transition-colors"
          >
            <div className="aspect-[9/16] bg-[#111] flex items-center justify-center relative">
              <div className="text-[var(--text-muted)] opacity-20 text-4xl font-mono">
                APP UI
              </div>
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
    </>
  );
}




