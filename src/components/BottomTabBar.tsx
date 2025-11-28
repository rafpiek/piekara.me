"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Home, Grid3X3, FolderOpen, MessageSquare, Info } from "lucide-react";

export default function BottomTabBar() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  // Track hash changes for anchor navigation
  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash);

    // Set initial hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navItems = [
    { href: "/", label: "Home", icon: Home, isAnchor: false },
    { href: "/apps", label: "Apps", icon: Grid3X3, isAnchor: false },
    { href: "/projects", label: "Projects", icon: FolderOpen, isAnchor: false },
    { href: "/#social", label: "Contact", icon: MessageSquare, isAnchor: true },
    { href: "/info-hub", label: "Info", icon: Info, isAnchor: false },
  ];

  const getIsActive = (item: typeof navItems[0]) => {
    if (item.isAnchor) {
      // For anchor links, check if we're on the homepage and the hash matches
      return pathname === "/" && hash === "#social";
    } else if (item.href === "/") {
      // For home page, active when on homepage and NOT on #social section
      return pathname === "/" && hash !== "#social";
    } else {
      // For other pages, check if pathname starts with the href
      return pathname.startsWith(item.href);
    }
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[var(--bg)]/95 backdrop-blur-md border-t border-[var(--border)]">
      <div className="flex justify-around items-center py-2">
        {navItems.map((item) => {
          const isActive = getIsActive(item);
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                isActive
                  ? "!text-red-500"
                  : "text-[var(--text-muted)] hover:text-[var(--text)]"
              }`}
            >
              <Icon size={20} />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}