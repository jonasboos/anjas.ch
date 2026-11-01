"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import type { Artwork } from "@/lib/data";
import { Lightbox } from "./Lightbox";

export function ZoomableArtwork({
  art,
  priority = false,
  sizes,
}: {
  art: Artwork;
  priority?: boolean;
  sizes: string;
}) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className="group block w-full text-left">
        <span className="block bg-mat p-2 ring-1 ring-ink/8 sm:p-3">
          <Image
            src={art.src}
            alt={art.title}
            width={art.width}
            height={art.height}
            priority={priority}
            sizes={sizes}
            className="h-auto w-full"
          />
        </span>
        <span className="sr-only">. Vergrössern</span>
      </button>
      {open ? (
        <Lightbox items={[art]} index={0} onClose={close} onIndex={() => undefined} />
      ) : null}
    </>
  );
}
