export const site = {
  name: "Anja Boos",
  url: "https://www.anjas.ch",
  email: "anja@anjas.ch",
  orderEmail: "mail@anjas.ch",
  instagram: "https://www.instagram.com/anjas_ch/",
  saatchi: "https://www.saatchiart.com/AnjaBoos",
  privacy: "/datenschutz",
  studio: "Wankdorffeldstrasse 90 | 3014 Bern | Raum 305",
} as const;

export const navLinks = [
  { href: "/gallery", label: "Galerie" },
  { href: "/shop", label: "Shop" },
  { href: "/blog", label: "Blog" },
  { href: "/videos", label: "Videos" },
  { href: "/about", label: "Über" },
  { href: "/contact", label: "Kontakt" },
] as const;

export const shell = "mx-auto w-full max-w-[1440px] px-5 md:px-10";
