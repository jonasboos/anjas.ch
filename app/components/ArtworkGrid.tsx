"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import type { Artwork } from "@/lib/data";
import { Lightbox } from "./Lightbox";

export function ArtworkGrid({
  artworks,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
}: {
  artworks: Artwork[];
  sizes?: string;
}) {
  const [index, setIndex] = useState<number | null>(null);
  const close = useCallback(() => setIndex(null), []);

  return (
    <>
      <ul className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {artworks.map((art, itemIndex) => (
          <li key={art.id} id={`werk-${art.id}`}>
            <figure>
              <button
                type="button"
                onClick={() => setIndex(itemIndex)}
                className="group block w-full text-left"
              >
                <span className="block bg-mat p-3 ring-1 ring-ink/8 shadow-[0_18px_50px_-32px_rgba(27,25,22,0.55)] transition-transform duration-500 group-hover:-translate-y-1">
                  <Image
                    src={art.src}
                    alt={art.alt}
                    width={art.width}
                    height={art.height}
                    sizes={sizes}
                    className="h-auto w-full"
                    loading="lazy"
                  />
                </span>
                <span className="sr-only">
                  {art.mediumLabel}
                  {art.size ? `, ${art.size}` : ""}. Vergrössern
                </span>
                <span aria-hidden="true" className="mt-4 block font-serif text-[1.7rem] leading-tight text-ink">
                  {art.title}
                </span>
                <span
                  aria-hidden="true"
                  className="mt-1 block text-[0.68rem] uppercase tracking-[0.22em] text-muted"
                >
                  {art.mediumLabel}
                  {art.size ? ` · ${art.size}` : ""}
                </span>
              </button>
            </figure>
          </li>
        ))}
      </ul>
      {index !== null ? (
        <Lightbox
          items={artworks.map((art) => ({
            src: art.src,
            title: art.title,
            category: [art.mediumLabel, art.size].filter(Boolean).join(" · "),
            width: art.width,
            height: art.height,
            alt: art.alt,
          }))}
          index={index}
          onClose={close}
          onIndex={setIndex}
        />
      ) : null}
    </>
  );
}
