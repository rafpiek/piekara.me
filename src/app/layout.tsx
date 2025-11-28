import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Piekara.me | Developer & Creator",
  description: "I build apps, teach Rails, and occasionally break production.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-[1100px] mx-auto px-6">
          <Navigation />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
