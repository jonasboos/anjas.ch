"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { artworks } from "@/lib/data";
import { blogPosts } from "@/lib/blog-data";

export default function HomePage() {
  const featuredArtworks = artworks.slice(0, 6);
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section - Minimal & Clean */}
      <section className="relative flex min-h-[100svh] flex-col items-center justify-center px-4">
        {/* Subtle background glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/4 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/5 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-[100px]" />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 flex flex-col items-center text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-zinc-500"
          >
            Künstlerin · Schweiz
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-6 text-6xl font-light tracking-tight text-white sm:text-8xl md:text-9xl"
          >
            Anja Boos
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-12 max-w-md text-lg text-zinc-500"
          >
            Acrylmalerei inspiriert von der Natur
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <Link
              href="/gallery"
              className="group inline-flex items-center gap-3 text-sm font-medium text-white transition-colors hover:text-zinc-400"
            >
              <span>Werke entdecken</span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">Scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="h-8 w-px bg-gradient-to-b from-zinc-600 to-transparent"
            />
          </div>
        </motion.div>
      </section>

      {/* Gallery Preview - Clean Grid */}
      <section className="relative px-4 py-32">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 flex flex-col items-center text-center"
          >
            <span className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-zinc-600">
              Ausgewählte Werke
            </span>
            <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl">
              Aktuelle Arbeiten
            </h2>
          </motion.div>

          {/* Artwork Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredArtworks.map((art, index) => (
              <motion.div
                key={art.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Link
                  href="/gallery"
                  className="group relative block aspect-[3/4] overflow-hidden rounded-lg bg-zinc-900"
                >
                  <Image
                    src={art.src}
                    alt={art.title}
                    fill
                    className="object-cover transition-all duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/40" />
                  {/* Title on hover */}
                  <div className="absolute inset-0 flex items-end p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-zinc-300">
                        {art.category}
                      </p>
                      <h3 className="mt-1 text-lg font-medium text-white">
                        {art.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* View All Link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-16 flex justify-center"
          >
            <Link
              href="/gallery"
              className="group inline-flex items-center gap-3 rounded-full border border-zinc-800 px-8 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-zinc-600 hover:bg-zinc-900"
            >
              <span>Alle Werke ansehen</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl">
            Herzlich willkommen in meiner Welt der Malerei
          </h2>
          <div className="mt-8 space-y-6 text-zinc-400">
            <p>
              Tauchen Sie ein in meine Kunstgalerie, wo jedes Bild eine Geschichte
              erzaehlt und meine Verbundenheit zur Natur widerspiegelt. Ich lade Sie
              ein, die Welt durch meine Augen zu erleben und meine kuenstlerische
              Reise zu begleiten.
            </p>
            <p>
              Ich hoffe, dass meine Kunstwerke Sie inspirieren und Freude in Ihr
              Leben bringen werden. Falls Sie an einem meiner Werke interessiert sind
              oder eine spezielle Anfrage haben, stehe ich Ihnen gerne zur Verfuegung.
            </p>
            <p>Herzlich willkommen in meiner Welt der Malerei!</p>
          </div>
        </div>
      </section>

      <section className="px-4 pb-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-zinc-600">
              Neues aus dem ArtBlog
            </span>
            <h2 className="mt-4 text-3xl font-light tracking-tight text-white sm:text-4xl">
              Inspiration und neue Werke
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {latestPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="rounded-2xl border border-zinc-900 bg-zinc-950/70 p-6"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                  {post.date}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-white">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm text-zinc-500 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-flex items-center text-sm text-white hover:text-zinc-300"
                >
                  Weiterlesen →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-32">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-zinc-900 bg-zinc-950/70 p-10 text-center">
            <h2 className="text-3xl font-light tracking-tight text-white">
              Kunstbilder und Karten im Shop
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
              Alle Karten sind Drucke von selbstgemalten Bildern. Originalbilder
              folgen bald.
            </p>
            <Link
              href="/shop"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
            >
              Zum Shop
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 pb-32">
        <div className="mx-auto max-w-5xl rounded-3xl border border-zinc-900 bg-zinc-950/70 p-10">
          <div className="text-center">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-zinc-600">
              Anmeldung Newsletter
            </span>
            <h2 className="mt-4 text-3xl font-light tracking-tight text-white">
              Bleib auf dem Laufenden
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
              Kein Spam, aber viel Herzlichkeit. Trag dich in meine Freundesliste ein,
              um nichts zu verpassen.
            </p>
          </div>
          <form className="mt-8 grid gap-4 md:grid-cols-[1fr_1fr_auto]">
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
          <p className="mt-4 text-xs text-zinc-600">
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
      </section>
    </div>
  );
}
