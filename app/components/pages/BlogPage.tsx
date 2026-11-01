import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";
import { shell } from "@/lib/site";

export default function BlogPage() {
  return (
    <div className="py-14 md:py-20">
      <div className={shell}>
        <header className="max-w-2xl">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-muted">
            Mein Art Blog
          </p>
          <h1 className="mt-3 font-serif text-5xl text-ink sm:text-7xl">Art Blog</h1>
          <p className="mt-5 text-lg text-muted">
            Gedanken, Prozesse und neue Werke aus dem Atelier
          </p>
        </header>

        <ul className="mt-14 divide-y divide-line border-y border-line">
          {blogPosts.map((post) => (
            <li key={post.id}>
              <article>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group grid gap-6 py-10 md:grid-cols-[minmax(0,280px)_1fr] md:items-center md:gap-12"
                >
                  <span className="block overflow-hidden bg-mat ring-1 ring-ink/8">
                    <Image
                      src={post.imageUrl}
                      alt={`${post.title}, Art Blog von Anja Boos`}
                      width={post.width}
                      height={post.height}
                      sizes="(max-width: 768px) 100vw, 280px"
                      className="h-auto max-h-80 w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </span>
                  <span>
                    <span className="text-[0.68rem] uppercase tracking-[0.2em] text-muted">
                      {post.date}
                    </span>
                    <h2 className="mt-2 font-serif text-4xl text-ink group-hover:text-spruce">
                      {post.title}
                    </h2>
                    <span className="mt-3 block max-w-xl text-sm leading-relaxed text-muted">
                      {post.excerpt}
                    </span>
                    <span className="mt-5 inline-flex text-[0.72rem] uppercase tracking-[0.18em] text-ink">
                      Weiterlesen
                    </span>
                  </span>
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
