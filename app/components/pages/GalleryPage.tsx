"use client";

import { useState } from "react";
import { artworks, catalogue } from "@/lib/data";
import { shell } from "@/lib/site";
import { cn } from "@/lib/utils";
import { ArtworkGrid } from "../ArtworkGrid";

const filters = ["Alle", "Landschaft", "Pflanzen", "Tiere", "Mandala", "Andere"] as const;

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("Alle");
  const filtered =
    activeFilter === "Alle"
      ? artworks
      : artworks.filter((art) => art.category === activeFilter);

  return (
    <div className="py-14 md:py-20">
      <div className={shell}>
        <header className="max-w-3xl">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-muted">
            Werke
          </p>
          <h1 className="mt-3 font-serif text-5xl text-ink sm:text-7xl">Bildergalerie</h1>
          <div className="mt-8 space-y-4 text-base leading-relaxed text-muted md:text-lg">
            <p>
              Herzlich willkommen auf meiner ArtWork Seite, auf der ich meine neuesten
              Kunstwerke präsentiere!
            </p>
            <p>
              In meiner künstlerischen Arbeit lasse ich mich von verschiedenen Themen
              inspirieren, darunter Natur, Tiere, Landschaften, Menschen und vieles mehr.
              Jedes Kunstwerk ist einzigartig und drückt meine kreative Leidenschaft aus.
            </p>
            <p>
              Ich hoffe, dass Sie meine Kunstwerke geniessen und dass sie Sie inspirieren,
              Ihre eigene kreative Leidenschaft zu entfachen.
            </p>
          </div>
        </header>

        <div
          className="mt-12 flex flex-wrap gap-x-5 gap-y-3 border-y border-line py-4"
          role="toolbar"
          aria-label="Kategorien"
        >
          {filters.map((filter) => {
            const selected = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                aria-pressed={selected}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "text-[0.72rem] uppercase tracking-[0.2em] transition-colors",
                  selected
                    ? "text-ink underline decoration-ink/40 underline-offset-8"
                    : "text-muted hover:text-ink"
                )}
              >
                {filter}
              </button>
            );
          })}
        </div>

        <div className="mt-12">
          {filtered.length === 0 ? (
            <p className="text-muted">Keine Werke in dieser Auswahl.</p>
          ) : (
            <ArtworkGrid key={activeFilter} artworks={filtered} />
          )}
        </div>

        <section className="mt-24 border-t border-line pt-16" aria-labelledby="werkverzeichnis">
          <h2 id="werkverzeichnis" className="font-serif text-4xl text-ink sm:text-5xl">
            Werkverzeichnis
          </h2>
          <div className="mt-10 grid gap-12 md:grid-cols-3">
            {catalogue.map((section) => (
              <div key={section.title}>
                <h3 className="font-serif text-2xl text-ink">{section.title}</h3>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
