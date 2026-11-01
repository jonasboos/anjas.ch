import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { JsonLdScript } from "./components/JsonLd";
import { personAndGalleryJsonLd } from "@/lib/json-ld";
import { pageSeo } from "@/lib/seo";
import { site } from "@/lib/site";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${pageSeo.home.title} | Anja Boos`,
    template: "%s | Anja Boos",
  },
  description: pageSeo.home.description,
  applicationName: "Anja Boos",
  authors: [{ name: "Anja Boos", url: site.url }],
  creator: "Anja Boos",
  keywords: [
    "Anja Boos",
    "Künstlerin Bern",
    "Kunst Belp",
    "Acrylbilder",
    "Bilder kaufen Bern",
    "Grusskarten",
    "Mandala",
    "Region Bern",
  ],
  openGraph: {
    type: "website",
    locale: "de_CH",
    siteName: "Anja Boos",
    title: `${pageSeo.home.title} | Anja Boos`,
    description: pageSeo.home.description,
    url: site.url,
    images: [
      {
        url: pageSeo.home.image.url,
        width: pageSeo.home.image.width,
        height: pageSeo.home.image.height,
        alt: pageSeo.home.image.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${pageSeo.home.title} | Anja Boos`,
    description: pageSeo.home.description,
    images: [pageSeo.home.image.url],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de-CH" className={`${outfit.variable} ${cormorant.variable}`}>
      <body className="flex min-h-screen flex-col bg-paper font-sans text-ink antialiased">
        <a href="#inhalt" className="skip-link">
          Zum Inhalt springen
        </a>
        <Navbar />
        <main id="inhalt" className="flex-1">
          {children}
        </main>
        <Footer />
        <JsonLdScript data={personAndGalleryJsonLd()} />
      </body>
    </html>
  );
}
