import Image from "next/image";
import Link from "next/link";
import { artworks } from "@/lib/data";
import { blogPosts } from "@/lib/blog-data";
import { shell } from "@/lib/site";
import { ArtworkGrid } from "../ArtworkGrid";
import { NewsletterForm } from "../NewsletterForm";
import { ZoomableArtwork } from "../ZoomableArtwork";

export default function HomePage() {
  const hero = artworks.find((art) => art.id === "7") ?? artworks[0];
  const featured = artworks.filter((art) => art.id !== hero.id).slice(0, 6);
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <div>
      <section className="relative overflow-hidden pb-20 pt-12 md:pb-28 md:pt-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 85% 0%, rgba(30,58,52,0.07), transparent 46%), radial-gradient(ellipse at 0% 100%, rgba(120,78,48,0.06), transparent 42%)",
          }}
        />
        <div className={`${shell} relative grid items-end gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16`}>
          <div className="rise">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-muted">
              Künstlerin · Schweiz
            </p>
            <h1 className="mt-5 font-serif text-6xl leading-[0.88] text-ink sm:text-8xl lg:text-[6.5rem]">
              Anja Boos
            </h1>
            <p className="mt-6 max-w-sm text-lg leading-relaxed text-muted">
              Acrylmalerei inspiriert von der Natur
            </p>
            <Link
              href="/gallery"
              className="mt-8 inline-flex items-center gap-3 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-ink"
            >
              Werke entdecken
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <figure className="rise rise-2">
            <ZoomableArtwork
              art={hero}
              priority
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
            <figcaption className="mt-4 flex items-baseline justify-between gap-4">
              <span className="font-serif text-2xl text-ink">{hero.title}</span>
              <span className="text-[0.68rem] uppercase tracking-[0.22em] text-muted">
                {hero.category}
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="border-t border-line py-20 md:py-28" aria-labelledby="ausgewaehlte-werke">
        <div className={shell}>
          <div className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-muted">
                Ausgewählte Werke
              </p>
              <h2 id="ausgewaehlte-werke" className="mt-3 font-serif text-4xl text-ink sm:text-5xl">
                Aktuelle Arbeiten
              </h2>
            </div>
            <Link
              href="/gallery"
              className="text-[0.72rem] font-medium uppercase tracking-[0.2em] text-ink"
            >
              Alle Werke ansehen
            </Link>
          </div>
          <ArtworkGrid artworks={featured} />
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className={`${shell} max-w-3xl`}>
          <h2 className="font-serif text-4xl leading-tight text-ink sm:text-5xl">
            Herzlich willkommen in meiner Welt der Malerei
          </h2>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-muted md:text-lg">
            <p>
              Tauchen Sie ein in meine Kunstgalerie, wo jedes Bild eine Geschichte
              erzählt und meine Verbundenheit zur Natur widerspiegelt. Ich lade Sie
              ein, die Welt durch meine Augen zu erleben und meine künstlerische
              Reise zu begleiten.
            </p>
            <p>
              Ich hoffe, dass meine Kunstwerke Sie inspirieren und Freude in Ihr
              Leben bringen werden. Falls Sie an einem meiner Werke interessiert sind
              oder eine spezielle Anfrage haben, stehe ich Ihnen gerne zur Verfügung.
            </p>
            <p>Herzlich willkommen in meiner Welt der Malerei!</p>
          </div>
        </div>
      </section>

      <section className="border-t border-line py-20 md:py-28" aria-labelledby="artblog">
        <div className={shell}>
          <div className="mb-12">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-muted">
              Neues aus dem ArtBlog
            </p>
            <h2 id="artblog" className="mt-3 font-serif text-4xl text-ink sm:text-5xl">
              Inspiration und neue Werke
            </h2>
          </div>
          <ul className="grid gap-12 md:grid-cols-3 md:gap-8">
            {latestPosts.map((post) => (
              <li key={post.id}>
                <article>
                  <Link href={`/blog/${post.slug}`} className="group block">
                    <span className="block overflow-hidden bg-mat ring-1 ring-ink/8">
                      <Image
                        src={post.imageUrl}
                        alt=""
                        width={post.width}
                        height={post.height}
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    </span>
                    <p className="mt-4 text-[0.68rem] uppercase tracking-[0.2em] text-muted">
                      {post.date}
                    </p>
                    <h3 className="mt-2 font-serif text-3xl text-ink group-hover:text-spruce">
                      {post.title}
                    </h3>
                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">
                      {post.excerpt}
                    </p>
                    <span className="mt-4 inline-flex text-[0.72rem] uppercase tracking-[0.18em] text-ink">
                      Weiterlesen
                    </span>
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className={shell}>
          <div className="grid items-center gap-8 border border-line bg-mat px-6 py-12 md:grid-cols-[1.4fr_auto] md:px-12">
            <div>
              <h2 className="font-serif text-4xl text-ink sm:text-5xl">
                Kunstbilder und Karten im Shop
              </h2>
              <p className="mt-4 max-w-xl text-muted">
                Alle Karten sind Drucke von selbstgemalten Bildern. Originalbilder
                folgen bald.
              </p>
            </div>
            <Link
              href="/shop"
              className="inline-flex w-fit items-center justify-center bg-ink px-7 py-3 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-paper hover:bg-spruce"
            >
              Zum Shop
            </Link>
          </div>
        </div>
      </section>

      <section className="tone-inverse bg-ink text-paper" aria-labelledby="newsletter">
        <div className={`${shell} py-16 md:py-20`}>
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-paper/60">
            Anmeldung Newsletter
          </p>
          <h2 id="newsletter" className="mt-3 max-w-xl font-serif text-4xl text-paper sm:text-5xl">
            Bleib auf dem Laufenden
          </h2>
          <p className="mt-4 max-w-xl text-paper/75">
            Kein Spam, aber viel Herzlichkeit. Trag dich in meine Freundesliste ein,
            um nichts zu verpassen.
          </p>
          <div className="max-w-3xl">
            <NewsletterForm />
          </div>
        </div>
      </section>
    </div>
  );
}
