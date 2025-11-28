"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Grid3X3, FolderOpen, MessageSquare, Info } from "lucide-react";

export default function BottomTabBar() {
  const pathname = usePathname();

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
          const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                isActive
                  ? "text-[var(--accent)]"
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