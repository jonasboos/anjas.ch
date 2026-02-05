"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { blogPosts } from "@/lib/blog-data";

export default function BlogPage() {
  return (
    <div className="min-h-screen px-4 py-32">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.3em] text-zinc-600">
            Neuigkeiten
          </span>
          <h1 className="text-4xl font-light tracking-tight text-white sm:text-5xl">
            Art Blog
          </h1>
          <p className="mx-auto mt-4 max-w-md text-zinc-500">
            Gedanken, Prozesse und neue Werke
          </p>
        </motion.div>

        {/* Blog Grid - Masonry Layout */}
        <div className="columns-1 gap-8 md:columns-2 space-y-8">
          {blogPosts.map((post, index) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="block break-inside-avoid">
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group cursor-pointer"
              >
                {/* Image - Natural Aspect Ratio */}
                <div className="relative overflow-hidden rounded-lg bg-zinc-900">
                  <Image
                    src={post.imageUrl}
                    alt={`${post.title} - Acrylmalerei von Anja Boos`}
                    width={800}
                    height={600}
                    className="h-auto w-full object-cover transition-all duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/20" />
                </div>

                {/* Content */}
                <div className="mt-4">
                  <span className="text-xs text-zinc-600">{post.date}</span>
                  <h2 className="mt-1 text-xl font-medium text-white transition-colors group-hover:text-zinc-300">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="mt-2 text-sm text-zinc-500 line-clamp-2">
                      {post.excerpt}
                    </p>
                  )}
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
