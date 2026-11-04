import type { Metadata } from "next";
import { site } from "@/lib/site";

export const seoDefaults = {
  siteName: "Anja Boos",
  locale: "de_CH",
  language: "de-CH",
} as const;

type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  image?: {
    url: string;
    width: number;
    height: number;
    alt: string;
  };
  type?: "website" | "article";
};

export function buildPageMetadata({
  title,
  description,
  path,
  image,
  type = "website",
}: PageSeoInput): Metadata {
  const url = path === "/" ? site.url : `${site.url}${path}`;
  const ogImage = image ?? {
    url: "/opengraph-image",
    width: 1200,
    height: 630,
    alt: "Anja Boos, Künstlerin aus der Region Bern",
  };

  const branded = `${title} | Anja Boos`;
  return {
    title: path === "/" ? { absolute: branded } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      locale: seoDefaults.locale,
      siteName: seoDefaults.siteName,
      title: branded,
      description,
      url,
      images: [
        {
          url: ogImage.url,
          width: ogImage.width,
          height: ogImage.height,
          alt: ogImage.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: branded,
      description,
      images: [ogImage.url],
    },
  };
}

export const pageSeo = {
  home: {
    title: "Künstlerin in Bern – Acrylbilder, Mandala und Grusskarten",
    description:
      "Anja Boos malt Acrylbilder, Mandalas und Grusskarten in der Region Bern und Belp. Entdecken Sie Originalkunst und Karten zum Kaufen – inspiriert von Natur und Landschaft.",
    path: "/",
    image: {
      url: "/images/gallery/bietschhorn-herbst.jpg",
      width: 1755,
      height: 1327,
      alt: "Bietschhorn im Herbst, Acrylbild von Anja Boos aus der Region Bern",
    },
  },
  gallery: {
    title: "Galerie – Acrylbilder und Kunst aus Bern und Belp",
    description:
      "Galerie von Anja Boos: Acrylbilder auf Malkarton und Leinwand, Werke auf Papier sowie Mandalas. Kunst aus Belp und der Region Bern – jedes Bild einzeln gezeigt.",
    path: "/gallery",
    image: {
      url: "/images/gallery/adelboden-berge.jpg",
      width: 1024,
      height: 1028,
      alt: "Berge Adelboden, Acrylbild von Anja Boos",
    },
  },
  shop: {
    title: "Shop – Grusskarten und Bilder kaufen aus der Region Bern",
    description:
      "Grusskarten und Originalbilder von Anja Boos kaufen: Acrylbilder, Mandalas und Karten aus Belp und Bern. Bestellung per E-Mail, Preis auf Anfrage bei Originalen.",
    path: "/shop",
    image: {
      url: "/images/shop/karte-adelboden.jpg",
      width: 1600,
      height: 1600,
      alt: "Grusskarte Adelboden von Anja Boos",
    },
  },
  about: {
    title: "Über die Künstlerin Anja Boos aus Belp und Bern",
    description:
      "Anja Boos ist Künstlerin aus der Region Bern und Belp. Erfahren Sie mehr über ihre Acrylmalerei, Mandalas und den Weg von der Natur zum Bild.",
    path: "/about",
    image: {
      url: "/images/about/anja-boos-portrait.jpg",
      width: 960,
      height: 1280,
      alt: "Porträt der Künstlerin Anja Boos",
    },
  },
  blog: {
    title: "Art Blog – Einblicke in Kunst aus Bern",
    description:
      "Art Blog von Anja Boos: Gedanken zu Acrylbildern, Mandalas und Motiven aus Belpberg und der Region Bern. Einblicke in den Entstehungsprozess.",
    path: "/blog",
    image: {
      url: "/images/blog/mohnblumen-belpberg.jpg",
      width: 1521,
      height: 1920,
      alt: "Mohnblumen am Belpberg, Kunstblog von Anja Boos",
    },
  },
  videos: {
    title: "Videos – Malprozess und Acryltechnik",
    description:
      "Videos zum Malprozess von Anja Boos: Acryltechnik, Landschaften und Inspiration aus der Region Bern. Schauen Sie der Künstlerin beim Arbeiten zu.",
    path: "/videos",
    image: {
      url: "/images/gallery/bergsee-regnerisch.jpg",
      width: 1275,
      height: 1020,
      alt: "Bergsee, Motiv aus dem Atelier von Anja Boos",
    },
  },
  datenschutz: {
    title: "Datenschutzerklärung",
    description:
      "Datenschutzerklärung von anjas.ch, der Website der Künstlerin Anja Boos aus der Region Bern: welche Daten beim Besuch, bei E-Mail-Kontakt und Bestellungen bearbeitet werden.",
    path: "/datenschutz",
  },
  contact: {
    title: "Kontakt – Atelier in Bern, Region Belp",
    description:
      "Kontaktieren Sie die Künstlerin Anja Boos in Bern: Anfragen zu Acrylbildern, Grusskarten und Aufträgen. Atelier an der Wankdorffeldstrasse, Region Belp und Bern.",
    path: "/contact",
    image: {
      url: "/images/about/anja-boos-portrait.jpg",
      width: 960,
      height: 1280,
      alt: "Kontakt zur Künstlerin Anja Boos in Bern",
    },
  },
} as const;
