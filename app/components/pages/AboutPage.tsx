import Image from "next/image";
import Link from "next/link";
import { shell, site } from "@/lib/site";
import { NewsletterForm } from "../NewsletterForm";

export default function AboutPage() {
  return (
    <div className="py-14 md:py-20">
      <div className={`${shell} grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20`}>
        <figure>
          <div className="bg-mat p-3 ring-1 ring-ink/8">
            <Image
              src="/images/about/anja-boos-portrait.jpg"
              alt="Anja Boos, Künstlerin aus der Region Bern, beim Malen"
              width={960}
              height={1280}
              priority
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="h-auto w-full"
            />
          </div>
        </figure>

        <div className="lg:pt-6">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-muted">
            Über mich
          </p>
          <h1 className="mt-3 font-serif text-6xl text-ink sm:text-7xl">Anja Boos</h1>

          <div className="mt-8 max-w-xl space-y-5 text-base leading-relaxed text-muted md:text-[1.05rem]">
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

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex w-fit items-center justify-center bg-ink px-6 py-3 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-paper hover:bg-spruce"
            >
              Kontakt aufnehmen
            </Link>
            <a href={`mailto:${site.email}`} className="text-sm text-muted hover:text-ink">
              {site.email}
            </a>
          </div>

          <div className="mt-16 max-w-xl border-t border-line pt-10">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-muted">
              Anmeldung Freundesliste / Newsletter
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Bleib auf dem Laufenden über neue Kunstwerke und exklusive Angebote aus
              meinem Atelier! Kein Spam, aber viel Herzlichkeit.
            </p>
            <NewsletterForm tone="plain" />
          </div>
        </div>
      </div>
    </div>
  );
}
