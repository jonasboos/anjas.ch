import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-28 text-center">
      <p className="text-[0.7rem] uppercase tracking-[0.28em] text-muted">404</p>
      <h1 className="mt-3 font-serif text-5xl text-ink sm:text-6xl">Seite nicht gefunden</h1>
      <p className="mt-5 max-w-md text-muted">
        Die gesuchte Seite existiert leider nicht. Vielleicht wurde sie verschoben oder gelöscht.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex bg-ink px-7 py-3 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-paper hover:bg-spruce"
      >
        Zurück zur Startseite
      </Link>
    </div>
  );
}
