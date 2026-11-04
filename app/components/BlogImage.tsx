"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { Lightbox } from "./Lightbox";

export function BlogImage({
  src,
  alt,
  title,
  width,
  height,
}: {
  src: string;
  alt: string;
  title: string;
  width: number;
  height: number;
}) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      <figure className="mt-10 flex justify-center">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="block bg-mat p-2 ring-1 ring-ink/8 sm:p-3"
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            className="h-auto max-h-[70vh] w-auto max-w-full"
          />
          <span className="sr-only">Bild vergrössern</span>
        </button>
      </figure>
      {open ? (
        <Lightbox
          items={[{ src, title, width, height, alt }]}
          index={0}
          onClose={close}
          onIndex={() => undefined}
        />
      ) : null}
    </>
  );
}
