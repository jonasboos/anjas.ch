import { blogPosts } from "@/lib/blog-data";
import { galleryArtworks } from "@/lib/data";
import { greetingCards, originalBilder } from "@/lib/shop-data";
import { site } from "@/lib/site";

export type JsonLd = Record<string, unknown> | Array<Record<string, unknown>>;

export function absoluteUrl(path: string) {
  if (path.startsWith("http")) return path;
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function personAndGalleryJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${site.url}/#person`,
        name: "Anja Boos",
        jobTitle: "Künstlerin",
        email: site.email,
        url: site.url,
        image: absoluteUrl("/images/about/anja-boos-portrait.jpg"),
        address: {
          "@type": "PostalAddress",
          streetAddress: "Wankdorffeldstrasse 90 | Raum 305",
          postalCode: "3014",
          addressLocality: "Bern",
          addressRegion: "Bern",
          addressCountry: "CH",
        },
        sameAs: [site.instagram, site.saatchi],
      },
      {
        "@type": ["ArtGallery", "Store"],
        "@id": `${site.url}/#gallery`,
        name: "Anja Boos Art",
        url: site.url,
        image: absoluteUrl("/images/about/anja-boos-portrait.jpg"),
        email: site.email,
        description:
          "Kunst von Anja Boos aus der Region Bern und Belp: Acrylbilder, Mandalas und Grusskarten.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Wankdorffeldstrasse 90 | Raum 305",
          postalCode: "3014",
          addressLocality: "Bern",
          addressRegion: "Bern",
          addressCountry: "CH",
        },
        areaServed: [
          { "@type": "City", name: "Bern" },
          { "@type": "City", name: "Belp" },
          { "@type": "AdministrativeArea", name: "Region Bern" },
        ],
        founder: { "@id": `${site.url}/#person` },
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: "Anja Boos",
        description:
          "Portfolio und Shop der Künstlerin Anja Boos aus der Region Bern.",
        inLanguage: "de-CH",
        publisher: { "@id": `${site.url}/#person` },
      },
    ],
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function greetingCardProductsJsonLd() {
  return greetingCards.map((product) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description.join(". "),
    image: absoluteUrl(product.imageUrl),
    sku: product.id,
    brand: { "@type": "Brand", name: "Anja Boos" },
    category: "Grusskarten",
    offers: {
      "@type": "Offer",
      url: absoluteUrl("/shop"),
      priceCurrency: "CHF",
      price: product.price!.toFixed(2),
      availability:
        product.stock && product.stock > 0
          ? "https://schema.org/InStock"
          : "https://schema.org/OutOfStock",
      itemCondition: "https://schema.org/NewCondition",
    },
  }));
}

export function visualArtworksJsonLd() {
  return galleryArtworks.map((art) => ({
    "@context": "https://schema.org",
    "@type": "VisualArtwork",
    name: art.title,
    image: absoluteUrl(art.src),
    artMedium: art.mediumLabel || art.medium,
    creator: {
      "@type": "Person",
      name: "Anja Boos",
      url: site.url,
    },
    description: art.alt,
    ...(art.size ? { size: art.size } : {}),
  }));
}

export function blogPostingJsonLd(slug: string) {
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return null;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: absoluteUrl(post.imageUrl),
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Anja Boos",
      url: site.url,
    },
    publisher: {
      "@type": "Person",
      name: "Anja Boos",
      url: site.url,
    },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    inLanguage: "de-CH",
  };
}

export function shopPageJsonLd() {
  return [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Shop", path: "/shop" },
    ]),
    ...greetingCardProductsJsonLd(),
    ...originalBilder.map((art) => ({
      "@context": "https://schema.org",
      "@type": "VisualArtwork",
      name: art.name,
      image: absoluteUrl(art.imageUrl),
      artMedium: art.medium || art.category,
      creator: { "@type": "Person", name: "Anja Boos", url: site.url },
      description: [art.name, art.medium, art.size].filter(Boolean).join(" | "),
      ...(art.size ? { size: art.size } : {}),
    })),
  ];
}

export function galleryPageJsonLd() {
  return [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Galerie", path: "/gallery" },
    ]),
    ...visualArtworksJsonLd(),
  ];
}
