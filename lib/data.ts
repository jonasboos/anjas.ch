export type Artwork = {
  id: string;
  title: string;
  category: "Landschaft" | "Pflanzen" | "Tiere" | "Mandala" | "Andere";
  src: string;
};

export const artworks: Artwork[] = [
  {
    id: "1",
    title: "Blume Staude Dost (Blau Grün)",
    category: "Pflanzen",
    src: "/images/gallery/blume-staude-dost.png",
  },
  {
    id: "2",
    title: "Blume Staude Kattunaster (Grün Rot)",
    category: "Pflanzen",
    src: "/images/gallery/blume-staude-kattunaster.jpg",
  },
  {
    id: "3",
    title: "Rosa Pilze auf Waldboden",
    category: "Pflanzen",
    src: "/images/gallery/rosa-pilze.jpg",
  },
  {
    id: "4",
    title: "Frühlingsblumen (Öl in Violett)",
    category: "Pflanzen",
    src: "/images/gallery/fruehlingsblumen.jpg",
  },
  {
    id: "5",
    title: "Schneeberge im Haslital",
    category: "Landschaft",
    src: "/images/gallery/schneeberge-haslital.jpg",
  },
  {
    id: "6",
    title: "Bergsee an einem regnerischen Tag",
    category: "Landschaft",
    src: "/images/gallery/bergsee-regnerisch.jpg",
  },
  {
    id: "7",
    title: "Bietschhorn (Herbst)",
    category: "Landschaft",
    src: "/images/gallery/bietschhorn-herbst.jpg",
  },
  {
    id: "8",
    title: "Adelboden Berge im Schnee",
    category: "Landschaft",
    src: "/images/gallery/adelboden-berge.jpg",
  },
  {
    id: "9",
    title: "Mandala (Violet Blau Rosa)",
    category: "Mandala",
    src: "/images/gallery/mandala-violett.jpg",
  },
  {
    id: "10",
    title: "Buntes Mandala",
    category: "Mandala",
    src: "/images/gallery/mandala-bunt.jpg",
  },
  {
    id: "11",
    title: "Mandala (Tuschestift Rot)",
    category: "Mandala",
    src: "/images/gallery/mandala-rot.jpg",
  },
];
