"use client";

import { useState } from "react";
import { galleryArtworks, type ArtworkMedium } from "@/lib/data";
import { shell } from "@/lib/site";
import { cn } from "@/lib/utils";
import { ArtworkGrid } from "../ArtworkGrid";

const filters = ["Alle", "Malkarton", "Leinwand", "Papier", "Weitere"] as const;

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("Alle");
  const filtered =
    activeFilter === "Alle"
      ? galleryArtworks
      : galleryArtworks.filter((art) => art.medium === (activeFilter as ArtworkMedium));

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
              Alle Werke einzeln: Originalbilder auf Malkarton, Leinwand und Papier sowie
              weitere Arbeiten der Künstlerin Anja Boos aus der Region Bern und Belp.
            </p>
            <p>
              Filtern Sie nach Medium. Tippen oder klicken Sie auf ein Bild, um es in der
              Vollansicht zu öffnen.
            </p>
          </div>
        </header>

        <div
          className="mt-12 flex flex-wrap gap-x-5 gap-y-3 border-y border-line py-4"
          role="toolbar"
          aria-label="Medium filtern"
        >
          {filters.map((filter) => {
            const selected = activeFilter === filter;
            const count =
              filter === "Alle"
                ? galleryArtworks.length
                : galleryArtworks.filter((art) => art.medium === filter).length;
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
                <span className="ml-2 text-muted">({count})</span>
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
      </div>
    </div>
  );
}
