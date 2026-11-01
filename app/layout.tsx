import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
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

const description =
  "Portfolio der Schweizer Künstlerin Anja Boos. Acrylmalerei, inspiriert von Natur, Landschaften und Gefühlen.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Anja Boos | Acrylmalerei & Kunst aus der Schweiz",
    template: "%s | Anja Boos",
  },
  description,
  applicationName: "Anja Boos",
  authors: [{ name: "Anja Boos", url: site.url }],
  creator: "Anja Boos",
  openGraph: {
    type: "website",
    locale: "de_CH",
    siteName: "Anja Boos",
    title: "Anja Boos | Acrylmalerei & Kunst aus der Schweiz",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Anja Boos | Acrylmalerei",
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Anja Boos",
  jobTitle: "Künstlerin",
  email: site.email,
  url: site.url,
  image: `${site.url}/images/about/anja-boos-portrait.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Wankdorffeldstrasse 90, Raum 305",
    postalCode: "3014",
    addressLocality: "Bern",
    addressCountry: "CH",
  },
  sameAs: [site.instagram, site.saatchi],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
