import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BottomTabBar from "@/components/BottomTabBar";

export const metadata: Metadata = {
  title: "Piekara.me | Developer & Creator",
  description: "I build apps, teach Programming, and occasionally break production.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-[1100px] mx-auto px-6 pb-20 md:pb-0">
          <Navigation />
          {children}
          <Footer />
        </div>
        <BottomTabBar />
      </body>
    </html>
  );
}
