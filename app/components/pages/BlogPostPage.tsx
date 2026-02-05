"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { BlogPost } from "@/lib/blog-data";

export default function BlogPostPage({ post }: { post: BlogPost }) {
  return (
    <article className="min-h-screen px-4 py-32">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl"
      >
        {/* Back Link */}
        <Link 
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Zurück zur Übersicht
        </Link>

        {/* Header */}
        <header className="mb-12 text-center">
          <span className="mb-4 block text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            {post.date}
          </span>
          <h1 className="mb-8 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            {post.title}
          </h1>
        </header>

        {/* Hero Image - Full Display */}
        <div className="relative mb-16 overflow-hidden rounded-2xl bg-zinc-900 shadow-2xl">
          <Image
            src={post.imageUrl}
            alt={`${post.title} - Kunstwerk von Anja Boos`}
            width={1200}
            height={800}
            className="h-auto w-full object-contain"
            priority
            sizes="(max-width: 1024px) 100vw, 800px"
          />
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg mx-auto">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {/* Navigation Footer */}
        <div className="mt-24 border-t border-zinc-900 pt-12 text-center">
          <h3 className="mb-6 text-lg font-medium text-white">Gefällt Ihnen dieser Beitrag?</h3>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-medium text-black transition-transform hover:scale-105"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </motion.div>
    </article>
  );
}
