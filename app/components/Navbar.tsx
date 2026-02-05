"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const links = [
  { href: "/gallery", label: "Galerie" },
  { href: "/videos", label: "Videos" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "Über" },
  { href: "/contact", label: "Kontakt" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-6 left-1/2 z-50 -translate-x-1/2"
    >
      <div className="flex items-center gap-1 rounded-full border border-white/10 bg-zinc-950/80 px-2 py-1.5 shadow-2xl shadow-black/50 backdrop-blur-xl">
        {/* Logo */}
        <Link
          href="/"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20"
        >
          <span className="text-xs font-black tracking-tighter">AB</span>
        </Link>

        {/* Divider */}
        <div className="mx-2 h-5 w-px bg-white/10" />

        {/* Navigation Links */}
        <div className="flex items-center">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2"
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-white/10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span
                  className={cn(
                    "relative z-10 text-sm font-medium transition-colors duration-200",
                    isActive ? "text-white" : "text-zinc-500 hover:text-white"
                  )}
                >
                  {link.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
}
