export type Artwork = {
  id: string;
  title: string;
  category: "Landschaft" | "Pflanzen" | "Tiere" | "Mandala" | "Andere";
  src: string;
  width: number;
  height: number;
};

export const artworks: Artwork[] = [
  {
    id: "1",
    title: "Blume Staude Dost (Blau Grün)",
    category: "Pflanzen",
    src: "/images/gallery/blume-staude-dost.png",
    width: 566,
    height: 557,
  },
  {
    id: "2",
    title: "Blume Staude Kattunaster (Grün Rot)",
    category: "Pflanzen",
    src: "/images/gallery/blume-staude-kattunaster.jpg",
    width: 574,
    height: 576,
  },
  {
    id: "3",
    title: "Rosa Pilze auf Waldboden",
    category: "Pflanzen",
    src: "/images/gallery/rosa-pilze.jpg",
    width: 1280,
    height: 960,
  },
  {
    id: "4",
    title: "Frühlingsblumen (Öl in Violett)",
    category: "Pflanzen",
    src: "/images/gallery/fruehlingsblumen.jpg",
    width: 936,
    height: 1280,
  },
  {
    id: "5",
    title: "Schneeberge im Haslital",
    category: "Landschaft",
    src: "/images/gallery/schneeberge-haslital.jpg",
    width: 1153,
    height: 1200,
  },
  {
    id: "6",
    title: "Bergsee an einem regnerischen Tag",
    category: "Landschaft",
    src: "/images/gallery/bergsee-regnerisch.jpg",
    width: 1275,
    height: 1020,
  },
  {
    id: "7",
    title: "Bietschhorn (Herbst)",
    category: "Landschaft",
    src: "/images/gallery/bietschhorn-herbst.jpg",
    width: 1755,
    height: 1327,
  },
  {
    id: "8",
    title: "Adelboden Berge im Schnee",
    category: "Landschaft",
    src: "/images/gallery/adelboden-berge.jpg",
    width: 1024,
    height: 1028,
  },
  {
    id: "9",
    title: "Mandala (Violet Blau Rosa)",
    category: "Mandala",
    src: "/images/gallery/mandala-violett.jpg",
    width: 791,
    height: 565,
  },
  {
    id: "10",
    title: "Buntes Mandala",
    category: "Mandala",
    src: "/images/gallery/mandala-bunt.jpg",
    width: 572,
    height: 569,
  },
  {
    id: "11",
    title: "Mandala (Tuschestift Rot)",
    category: "Mandala",
    src: "/images/gallery/mandala-rot.jpg",
    width: 558,
    height: 563,
  },
];

export const catalogue = [
  {
    title: "Malkarton",
    items: [
      "Berge Adelboden | Acryl auf Malkarton | 30x30cm",
      "Bettmeralp | Acryl auf Malkarton | 24x30cm",
      "Wintersonne | Acryl auf Malkarton | 30x30cm",
      "Bergbach | Acryl auf Malkarton | 40x50cm",
      "Herbstspaziergang | Acryl auf Malkarton | 40x50cm",
      "Sommerliche Gipfel | Acryl auf Malkarton | 40x50cm",
      "Haus im Winter | Acryl auf Malkarton | 40x50cm",
      "Winterberg | Acryl auf Malkarton | 40x50cm",
      "Winterbaum | Acryl auf Malkarton | 24x30cm",
      "Schwarzsee 2 | Acryl auf Malkarton | 24x30cm",
    ],
  },
  {
    title: "Leinwand",
    items: [
      "Bietschhorn im Herbst | Acryl auf Leinwand | 60x80cm",
      "Schwarzsee im Herbst | Acryl auf Leinwand | 40x50cm",
      "Blauer Bergsee | Öl auf Leinwand | 23.5x30cm",
    ],
  },
  {
    title: "Papier",
    items: [
      "Porträt | Öl auf Papier | 21x29cm",
      "Rotmilan | Tusche auf Papier | 30x42cm",
      "Ente | Tusche auf Papier | 30x42cm",
    ],
  },
] as const;
