"use client";

import Image from "next/image";
import { useState } from "react";

export function VideoCard({ id, title }: { id: string; title: string }) {
  const [playing, setPlaying] = useState(false);
  const poster = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

  return (
    <figure>
      <div className="relative aspect-video overflow-hidden bg-ink">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0"
          >
            <Image
              src={poster}
              alt={`Video-Vorschaubild: ${title}`}
              fill
              unoptimized
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <span className="absolute inset-0 bg-ink/25 transition-colors group-hover:bg-ink/35" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="bg-paper px-4 py-2 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-ink">
                Abspielen
              </span>
            </span>
            <span className="sr-only">{title} abspielen</span>
          </button>
        )}
      </div>
      <figcaption className="mt-4 font-serif text-2xl text-ink">{title}</figcaption>
    </figure>
  );
}
