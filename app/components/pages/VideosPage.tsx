"use client";

import { motion } from "framer-motion";

const videos = [
  {
    id: "1",
    title: "Farbstudie",
    embedUrl: "https://www.youtube-nocookie.com/embed/DEQsFRUUgjg",
  },
  {
    id: "2",
    title: "Schwarzsee with Acrylic",
    embedUrl: "https://www.youtube-nocookie.com/embed/ZYwDMhZzW6w",
  },
  {
    id: "3",
    title: "Acrylic Beaver Painting",
    embedUrl: "https://www.youtube-nocookie.com/embed/xnaSdcrLOI8",
  },
  {
    id: "4",
    title: "Acrylic Fox Painting",
    embedUrl: "https://www.youtube-nocookie.com/embed/q8G0GXcY5bM",
  },
];

export default function VideosPage() {
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
            Einblicke
          </span>
          <h1 className="text-4xl font-light tracking-tight text-white sm:text-5xl">
            Videos
          </h1>
          <p className="mx-auto mt-4 max-w-md text-zinc-500">
            Begleiten Sie mich bei der Entstehung meiner Werke
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="relative aspect-video overflow-hidden rounded-lg bg-zinc-900">
                <iframe
                  src={video.embedUrl}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
              <h3 className="mt-4 text-lg font-medium text-white">
                {video.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
