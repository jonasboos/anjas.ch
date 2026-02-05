"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Sample of blog posts from the Jimdo site
const blogPosts = [
  {
    id: "1",
    title: "Mohnblumen Aquarell",
    date: "19 Jun",
    excerpt: "",
    imageUrl: "https://image.jimcdn.com/cdn-cgi/image/width=600%2Cheight=400%2Cfit=cover%2Cformat=jpg%2C/app/cms/storage/image/path/s6a5681fc1957b232/image/i81176fc4594f2f91/version/1750342960/image.jpg",
  },
  {
    id: "2",
    title: "Mohnblumen am Belpberg",
    date: "14 Jun",
    excerpt: "",
    imageUrl: "https://image.jimcdn.com/cdn-cgi/image/width=600%2Cheight=400%2Cfit=cover%2Cformat=jpg%2C/app/cms/storage/image/path/s6a5681fc1957b232/image/i61e98d5219137033/version/1749893747/image.jpg",
  },
  {
    id: "3",
    title: "Schneeberge",
    date: "07 März",
    excerpt: "",
    imageUrl: "https://image.jimcdn.com/cdn-cgi/image/width=600%2Cheight=400%2Cfit=cover%2Cformat=jpg%2C/app/cms/storage/image/path/s6a5681fc1957b232/image/i04417b35a50945f5/version/1741340354/image.jpg",
  },
  {
    id: "4",
    title: "Sonnenuntergang am Meer",
    date: "26 Sep",
    excerpt: "",
    imageUrl: "https://image.jimcdn.com/cdn-cgi/image/width=600%2Cheight=400%2Cfit=cover%2Cformat=jpg%2C/app/cms/storage/image/path/s6a5681fc1957b232/image/iae4a820fc06d7971/version/1727365539/image.jpg",
  },
  {
    id: "5",
    title: "Waldstimmung",
    date: "18 Sep",
    excerpt: "Zwillingsbaum in Öl",
    imageUrl: "https://image.jimcdn.com/cdn-cgi/image/width=600%2Cheight=400%2Cfit=cover%2Cformat=jpg%2C/app/cms/storage/image/path/s6a5681fc1957b232/image/i6058ebe365124b24/version/1726673666/waldstimmung-gemalt-in-%C3%B6l.jpg",
  },
  {
    id: "6",
    title: "Bergsee Lag Tuleritg Flims",
    date: "24 Mai",
    excerpt: "Kleiner Bergsee neben dem Caumasee in Flims",
    imageUrl: "https://image.jimcdn.com/cdn-cgi/image/width=600%2Cheight=400%2Cfit=cover%2Cformat=jpg%2C/app/cms/storage/image/path/s6a5681fc1957b232/image/if7f40ae390832227/version/1716537740/bergsee-gemalt-in-gr%C3%BCn.jpg",
  },
  {
    id: "7",
    title: "10 Versionen der gleichen Strasse",
    date: "05 Jul",
    excerpt: "Eine faszinierende Reise durch eine Straße mit unterschiedlichen Materialien und Papiergrößen.",
    imageUrl: "https://image.jimcdn.com/cdn-cgi/image/width=600%2Cheight=400%2Cfit=cover%2Cformat=jpg%2C/app/cms/storage/image/path/s6a5681fc1957b232/image/i8b50e9ba60e223e7/version/1688571347/4-bilder-der-serie-einer-strasse.jpg",
  },
  {
    id: "8",
    title: "Bergdohle auf dem Schindeldach",
    date: "23 Apr",
    excerpt: "Bergdohle Acryl auf Malkarton 40x40cm",
    imageUrl: "https://image.jimcdn.com/cdn-cgi/image/width=600%2Cheight=400%2Cfit=cover%2Cformat=jpg%2C/app/cms/storage/image/path/s6a5681fc1957b232/image/iaa210b29d86110ee/version/1682255447/bergdohle-oder-alpendohle-in-acryl-auf-schindeldach.jpg",
  },
];

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

        {/* Blog Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-zinc-900">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-105"
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
          ))}
        </div>
      </div>
    </div>
  );
}
