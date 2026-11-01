"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export type LightboxItem = {
  src: string;
  title: string;
  category?: string;
  width: number;
  height: number;
};

type LightboxProps = {
  items: LightboxItem[];
  index: number;
  onClose: () => void;
  onIndex: (index: number) => void;
};

export function Lightbox({ items, index, onClose, onIndex }: LightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const onCloseRef = useRef(onClose);
  const [zoom, setZoom] = useState(false);
  const [zoomFor, setZoomFor] = useState(index);
  const item = items[index];

  if (index !== zoomFor) {
    setZoomFor(index);
    setZoom(false);
  }

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (!dialog.open) dialog.showModal();
    const onCancel = (event: Event) => {
      event.preventDefault();
      onCloseRef.current();
    };
    dialog.addEventListener("cancel", onCancel);
    return () => {
      dialog.removeEventListener("cancel", onCancel);
      if (dialog.open) dialog.close();
    };
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" && items.length > 1) {
        onIndex((index + 1) % items.length);
      }
      if (event.key === "ArrowLeft" && items.length > 1) {
        onIndex((index - 1 + items.length) % items.length);
      }
      if (event.key === "+" || event.key === "=") setZoom(true);
      if (event.key === "-" || event.key === "_") setZoom(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, items.length, onIndex]);

  if (!item) return null;

  return (
    <dialog
      ref={dialogRef}
      className="lightbox"
      aria-labelledby="lightbox-title"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6 sm:py-4">
          <p className="shrink-0 text-xs uppercase tracking-[0.22em] text-paper/70">
            {index + 1} / {items.length}
          </p>
          <div className="flex flex-wrap items-center justify-end gap-2">
            <button
              type="button"
              className="border border-paper/30 px-3 py-2 text-[0.68rem] uppercase tracking-[0.18em] hover:bg-paper hover:text-ink"
              aria-pressed={zoom}
              onClick={() => setZoom((value) => !value)}
            >
              {zoom ? "Verkleinern" : "Vergrössern"}
            </button>
            <button
              type="button"
              className="border border-paper/30 px-3 py-2 text-[0.68rem] uppercase tracking-[0.18em] hover:bg-paper hover:text-ink"
              onClick={onClose}
              autoFocus
            >
              Schliessen
            </button>
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-auto" onClick={onClose}>
          <div
            className="flex min-h-full w-max min-w-full items-center justify-center p-4"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={item.src}
              alt={item.title}
              width={item.width}
              height={item.height}
              sizes={zoom ? "160vw" : "100vw"}
              quality={85}
              className={
                zoom
                  ? "h-[150vh] w-auto max-w-none"
                  : "h-auto max-h-[calc(100vh-12.5rem)] w-auto max-w-[min(100%,1100px)]"
              }
              priority
            />
          </div>
        </div>

        <div className="grid items-end gap-3 px-4 py-3 sm:grid-cols-[1fr_auto] sm:gap-4 sm:px-6 sm:py-4">
          <div className="min-w-0">
            <h2
              id="lightbox-title"
              className="font-serif text-[1.65rem] leading-tight text-paper sm:text-4xl"
            >
              {item.title}
            </h2>
            {item.category ? (
              <p className="mt-1 text-[0.68rem] uppercase tracking-[0.22em] text-paper/70">
                {item.category}
              </p>
            ) : null}
          </div>
          {items.length > 1 ? (
            <div className="flex gap-2">
              <button
                type="button"
                className="border border-paper/30 px-4 py-2 text-[0.68rem] uppercase tracking-[0.18em] hover:bg-paper hover:text-ink"
                onClick={() => onIndex((index - 1 + items.length) % items.length)}
              >
                Zurück
              </button>
              <button
                type="button"
                className="border border-paper/30 px-4 py-2 text-[0.68rem] uppercase tracking-[0.18em] hover:bg-paper hover:text-ink"
                onClick={() => onIndex((index + 1) % items.length)}
              >
                Weiter
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </dialog>
  );
}
