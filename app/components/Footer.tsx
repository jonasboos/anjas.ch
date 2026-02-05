import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-light tracking-tight text-white"
          >
            Anja Boos
          </Link>

          {/* Links */}
          <nav className="flex gap-8 text-sm">
            <Link href="/gallery" className="text-zinc-500 transition-colors hover:text-white">
              Galerie
            </Link>
            <Link href="/videos" className="text-zinc-500 transition-colors hover:text-white">
              Videos
            </Link>
            <Link href="/about" className="text-zinc-500 transition-colors hover:text-white">
              Über
            </Link>
            <Link href="/contact" className="text-zinc-500 transition-colors hover:text-white">
              Kontakt
            </Link>
          </nav>

          {/* Divider */}
          <div className="h-px w-16 bg-zinc-800" />

          {/* Copyright */}
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} Anja Boos
          </p>
        </div>
      </div>
    </footer>
  );
}
