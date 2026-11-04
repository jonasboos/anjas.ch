import Link from "next/link";
import { navLinks, shell, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-8 border-t border-line">
      <div className={`${shell} grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:py-16`}>
        <div>
          <p className="font-serif text-4xl text-ink">Anja Boos</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
            Acrylmalerei, inspiriert von Natur, Landschaften und Gefühlen.
          </p>
        </div>

        <nav aria-label="Fussnavigation" className="flex flex-col gap-2 text-sm">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="w-fit text-muted hover:text-ink">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="space-y-2 text-sm text-muted">
          <p>{site.studio}</p>
          <a className="block w-fit hover:text-ink" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <a
            className="block w-fit hover:text-ink"
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
            <span className="sr-only"> (öffnet in neuem Tab)</span>
          </a>
          <a
            className="block w-fit hover:text-ink"
            href={site.saatchi}
            target="_blank"
            rel="noopener noreferrer"
          >
            Saatchi Art
            <span className="sr-only"> (öffnet in neuem Tab)</span>
          </a>
        </div>
      </div>
      <div className={`${shell} border-t border-line py-5 text-xs tracking-wide text-muted`}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} Anja Boos</span>
          <Link href="/datenschutz" className="hover:text-ink">
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  );
}
