"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { artworks } from "@/lib/data";
import { cn } from "@/lib/utils";

const filters = ["Alle", "Landschaft", "Pflanzen", "Tiere", "Mandala", "Andere"];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("Alle");

  const filteredArtworks = activeFilter === "Alle" 
    ? artworks 
    : artworks.filter((art) => art.category === activeFilter);

  return (
    <div className="container mx-auto min-h-screen px-4 py-24">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Bildergalerie</h1>
        <div className="mx-auto max-w-3xl space-y-4 text-zinc-400">
          <p>
            Herzlich willkommen auf meiner ArtWork Seite, auf der ich meine neuesten
            Kunstwerke praesentiere!
          </p>
          <p>
            In meiner kuenstlerischen Arbeit lasse ich mich von verschiedenen Themen
            inspirieren, darunter Natur, Tiere, Landschaften, Menschen und vieles mehr.
            Jedes Kunstwerk ist einzigartig und drueckt meine kreative Leidenschaft aus.
          </p>
          <p>
            Ich hoffe, dass Sie meine Kunstwerke geniessen und dass sie Sie inspirieren,
            Ihre eigene kreative Leidenschaft zu entfachen.
          </p>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="mb-12 flex flex-wrap justify-center gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              activeFilter === filter
                ? "bg-white text-black"
                : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white"
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Artwork Grid */}
      <motion.div 
        layout
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <AnimatePresence>
          {filteredArtworks.map((art) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={art.id}
              className="group relative aspect-square overflow-hidden rounded-lg bg-zinc-900 cursor-pointer"
            >
               <Image
                src={art.src}
                alt={art.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 w-full p-4 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-xs font-medium text-zinc-300">{art.category}</p>
                <h3 className="font-bold text-white">{art.title}</h3>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {[
          {
            title: "Malkarton",
            items: [
              "Berge Adelboden | Acryl auf Malkarton | 30x30cm",
              "Bettmeralp | Acryl auf Malkarton | 24x30cm",
              "Wintersonne | Acryl auf Malkarton | 30x30cm",
              "Bergbach | Acryl auf Malkarton | 40x50cm",
              "Herbstspaziergang | Acryl auf Malkarton | 40x50cm",
              "Sommerliche Gipfel | Acryl auf Malkarton | 40x50cm",
              "Haus im Winter | Acryl auf Malkarton | 40x50cm",
              "Winterberg | Acryl auf Malkarton | 40x50cm",
              "Winterbaum | Acryl auf Malkarton | 24x30cm",
              "Schwarzsee 2 | Acryl auf Malkarton | 24x30cm",
            ],
          },
          {
            title: "Leinwand",
            items: [
              "Bietschhorn im Herbst | Acryl auf Leinwand | 60x80cm",
              "Schwarzsee im Herbst | Acryl auf Leinwand | 40x50cm",
              "Blauer Bergsee | Oel auf Leinwand | 23.5x30cm",
            ],
          },
          {
            title: "Papier",
            items: [
              "Portraet | Oel auf Papier | 21x29cm",
              "Rotmilan | Tusche auf Papier | 30x42cm",
              "Ente | Tusche auf Papier | 30x42cm",
            ],
          },
        ].map((section) => (
          <div key={section.title} className="rounded-2xl border border-zinc-900 bg-zinc-950/70 p-6">
            <h2 className="text-lg font-semibold text-white">{section.title}</h2>
            <ul className="mt-4 space-y-2 text-sm text-zinc-400">
              {section.items.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
