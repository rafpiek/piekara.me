"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Home, Grid3X3, FolderOpen, MessageSquare, Info } from "lucide-react";

export default function BottomTabBar() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Set mounted and initial hash
    setMounted(true);
    setHash(window.location.hash);

    const handleHashChange = () => {
      setHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    // Update hash when pathname changes
    if (mounted) {
      setHash(window.location.hash);
    }
  }, [pathname, mounted]);

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/apps", label: "Apps", icon: Grid3X3 },
    { href: "/projects", label: "Projects", icon: FolderOpen },
    { href: "/#social", label: "Contact", icon: MessageSquare },
    { href: "/info-hub", label: "Info", icon: Info },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[var(--bg)]/95 backdrop-blur-md border-t border-[var(--border)]">
      <div className="flex justify-around items-center py-2">
        {navItems.map((item) => {
          let isActive = false;

          if (item.href === "/#social") {
            isActive = pathname === "/" && hash === "#social";
          } else if (item.href === "/") {
            isActive = pathname === "/" && hash !== "#social";
          } else {
            isActive = pathname.startsWith(item.href);
          }

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