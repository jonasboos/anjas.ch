import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/lib/blog-data";
import { shell } from "@/lib/site";

export default function BlogPostPage({ post }: { post: BlogPost }) {
  return (
    <article className="py-14 md:py-20">
      <div className={`${shell} max-w-3xl`}>
        <Link
          href="/blog"
          className="text-[0.72rem] uppercase tracking-[0.18em] text-muted hover:text-ink"
        >
          Zurück zur Übersicht
        </Link>
        <header className="mt-8">
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-muted">{post.date}</p>
          <h1 className="mt-3 font-serif text-5xl leading-[0.95] text-ink sm:text-6xl">
            {post.title}
          </h1>
        </header>
        <figure className="mt-10 bg-mat p-2 ring-1 ring-ink/8 sm:p-3">
          <Image
            src={post.imageUrl}
            alt={`${post.title}, Kunstwerk von Anja Boos`}
            width={post.width}
            height={post.height}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            className="h-auto w-full"
          />
        </figure>
        <div
          className="article mt-10"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <div className="mt-16 border-t border-line pt-10">
          <h2 className="font-serif text-3xl text-ink">Gefällt Ihnen dieser Beitrag?</h2>
          <Link
            href="/contact"
            className="mt-6 inline-flex bg-ink px-7 py-3 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-paper hover:bg-spruce"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </div>
    </article>
  );
}
