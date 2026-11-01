"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { navLinks } from "@/lib/site";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openPath, setOpenPath] = useState(pathname);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  if (pathname !== openPath) {
    setOpenPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const root = menuRef.current;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const items = root
      ? [...root.querySelectorAll<HTMLElement>("a, button")]
      : [];
    items[0]?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }
      if (event.key !== "Tab" || items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
      previouslyFocused?.focus();
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between px-5 md:h-[4.5rem] md:px-10">
        <Link
          href="/"
          className="font-serif text-[1.7rem] leading-none tracking-tight text-ink"
        >
          Anja Boos
          <span className="sr-only">, Startseite</span>
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "text-[0.72rem] font-medium uppercase tracking-[0.22em] transition-colors",
                  active ? "text-ink" : "text-muted hover:text-ink"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-ink md:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen(true)}
        >
          Menü
        </button>
      </div>

      {open ? (
        <div
          id={menuId}
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation"
          className="fixed inset-0 z-50 flex flex-col bg-paper px-6 py-5 md:hidden"
        >
          <div className="flex items-center justify-between">
            <p className="font-serif text-3xl">Anja Boos</p>
            <button
              type="button"
              className="text-[0.72rem] font-medium uppercase tracking-[0.22em]"
              onClick={() => setOpen(false)}
            >
              Schliessen
            </button>
          </div>
          <nav aria-label="Mobilnavigation" className="mt-16 flex flex-col gap-5">
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "font-serif text-5xl leading-none",
                    active ? "text-spruce" : "text-ink"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
