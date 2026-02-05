import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center">
      <h1 className="text-9xl font-bold tracking-tighter text-zinc-900">404</h1>
      <h2 className="mb-8 text-2xl font-light text-white">Seite nicht gefunden</h2>
      <p className="mb-12 max-w-md text-zinc-500">
        Die gesuchte Seite existiert leider nicht. Vielleicht wurde sie verschoben oder gelöscht.
      </p>
      <Link
        href="/"
        className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
      >
        Zurück zur Startseite
      </Link>
    </div>
  );
}
