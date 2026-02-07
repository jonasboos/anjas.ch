"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen px-4 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-zinc-900">
              <Image
                src="/images/about/anja-boos-portrait.jpg"
                alt="Anja Boos beim Malen"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:py-8"
          >
            <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.3em] text-zinc-600">
              Über mich
            </span>
            <h1 className="mb-8 text-4xl font-light tracking-tight text-white sm:text-5xl">
              Anja Boos
            </h1>

            <div className="space-y-6 text-zinc-400 leading-relaxed">
              <p>
                Ich möchte mit meinen Kunstwerken die Natur und die Landschaft einfangen, 
                wie ich sie sehe. Die Natur kommt mir sehr verletzlich vor und ich möchte 
                diese noch festhalten, bevor sie vielleicht verschwindet.
              </p>
              <p>
                Ich bin sehr fasziniert von Landschaften und wie sich die Farben im Laufe 
                der Jahreszeiten verändern. Ich versuche die Farben der Bilder von meiner 
                Stimmung und meinen Gefühlen zu beeinflussen. Die Natur und ihre Harmonie 
                bieten eine Vielzahl von Inspirationsmöglichkeiten.
              </p>
              <p>
                Ich beginne meistens sehr spontan und arbeite das Bild langsam heraus, 
                weshalb ich am liebsten mit schnell trocknender Acrylfarbe arbeite.
              </p>
              <p>
                Ich lasse mich von vielen Dingen inspirieren, von der Natur und Landschaften 
                bis hin zu Tieren, Menschen und Stimmungen. Ich glaube, dass Kunst eine Sprache 
                ist, die Grenzen überschreitet und uns erlaubt, unsere Gedanken und Gefühle 
                auf eine einzigartige und persönliche Art auszudrücken.
              </p>
              <p>
                Als Künstlerin bin ich ständig bestrebt, mich weiterzuentwickeln und neue 
                Techniken zu erlernen, um meine künstlerische Vision zu erweitern.
              </p>
              <p>
                Kontaktieren Sie mich gerne unter anja@anjas.ch oder direkt mit dem
                Kontaktformular.
              </p>
            </div>

            {/* Contact CTA */}
            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:bg-zinc-200"
              >
                Kontakt aufnehmen
              </Link>
              <a
                href="mailto:anja@anjas.ch"
                className="text-sm text-zinc-500 transition-colors hover:text-white"
              >
                anja@anjas.ch
              </a>
            </div>

            <div className="mt-16 rounded-2xl border border-zinc-900 bg-zinc-950/70 p-6">
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-zinc-600">
                Anmeldung Freundesliste / Newsletter
              </span>
              <p className="mt-4 text-sm text-zinc-400">
                Bleib auf dem Laufenden ueber neue Kunstwerke und exklusive Angebote aus
                meinem Atelier! Kein Spam, aber viel Herzlichkeit.
              </p>
              <form className="mt-6 grid gap-3">
                <input
                  type="text"
                  placeholder="Name*"
                  className="w-full rounded-full border border-zinc-800 bg-black/50 px-4 py-3 text-sm text-white"
                />
                <input
                  type="email"
                  placeholder="E-Mail*"
                  className="w-full rounded-full border border-zinc-800 bg-black/50 px-4 py-3 text-sm text-white"
                />
                <button
                  type="button"
                  className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
                >
                  Absenden
                </button>
              </form>
              <p className="mt-3 text-xs text-zinc-600">
                Es gilt unsere{" "}
                <a
                  href="https://anjas1.jimdoweb.com/j/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline"
                >
                  Datenschutzerklaerung
                </a>
                . Bitte die mit * gekennzeichneten Felder ausfuellen.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
