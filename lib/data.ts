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
    src: "https://image.jimcdn.com/cdn-cgi/image/width=451%2Cheight=10000%2Cfit=contain%2Cformat=png%2C/app/cms/storage/image/path/s6a5681fc1957b232/image/i9eade6e996d14a60/version/1682425644/acrylbild-blume-staude-dost-blau-gr%C3%BCn.png",
  },
  {
    id: "2",
    title: "Blume Staude Kattunaster (Grün Rot)",
    category: "Pflanzen",
    src: "https://image.jimcdn.com/cdn-cgi/image/width=451%2Cheight=10000%2Cfit=contain%2Cformat=jpg%2C/app/cms/storage/image/path/s6a5681fc1957b232/image/i25078fd65e9f7c1b/version/1682425678/acrylbild-blume-staude-kattunaster-gr%C3%BCn-rot.jpg",
  },
  {
    id: "3",
    title: "Rosa Pilze auf Waldboden",
    category: "Pflanzen",
    src: "https://image.jimcdn.com/cdn-cgi/image/width=600%2Cheight=10000%2Cfit=contain%2Cformat=jpg%2C/app/cms/storage/image/path/s6a5681fc1957b232/image/ib244f61ff18fbdf5/version/1683107701/acrylbild-rosa-pilze-auf-waldboden.jpg",
  },
  {
    id: "4",
    title: "Frühlingsblumen (Öl in Violett)",
    category: "Pflanzen",
    src: "https://image.jimcdn.com/cdn-cgi/image/width=449%2Cheight=10000%2Cfit=contain%2Cformat=jpg%2C/app/cms/storage/image/path/s6a5681fc1957b232/image/i17e1bf72bbc5ede4/version/1683107552/acrylbild-fr%C3%BChlingsblumen-%C3%B6l-in-violett.jpg",
  },
  {
    id: "5",
    title: "Schneeberge im Haslital",
    category: "Landschaft",
    src: "https://image.jimcdn.com/cdn-cgi/image/width=597%2Cheight=10000%2Cfit=contain%2Cformat=jpg%2C/app/cms/storage/image/path/s6a5681fc1957b232/image/i8b69f58a9e27632c/version/1741336943/schneeberge-im-haslital-gemalt-in-acryl.jpg",
  },
  {
    id: "6",
    title: "Bergsee an einem regnerischen Tag",
    category: "Landschaft",
    src: "https://image.jimcdn.com/cdn-cgi/image/width=597%2Cheight=10000%2Cfit=contain%2Cformat=jpg%2C/app/cms/storage/image/path/s6a5681fc1957b232/image/ic9ae2213509b1305/version/1749893517/bergsee-an-einem-regnerischen-tag-gemalt-in-acryl.jpg",
  },
  {
    id: "7",
    title: "Bietschhorn (Herbst)",
    category: "Landschaft",
    src: "https://image.jimcdn.com/cdn-cgi/image/width=546%2Cheight=10000%2Cfit=contain%2Cformat=jpg%2C/app/cms/storage/image/path/s6a5681fc1957b232/image/ib0c7751a06a69802/version/1704262063/bietschhorn-acryl-leinwand-60x80-cm-herbst.jpg",
  },
  {
    id: "8",
    title: "Adelboden Berge im Schnee",
    category: "Landschaft",
    src: "https://image.jimcdn.com/cdn-cgi/image/width=539%2Cheight=10000%2Cfit=contain%2Cformat=jpg%2C/app/cms/storage/image/path/s6a5681fc1957b232/image/i31f655362a9fd239/version/1683107085/adelboden-berge-im-schnee-bild-acryl-auf-malpappe-blau-gelb.jpg",
  },
  {
    id: "9",
    title: "Mandala (Violet Blau Rosa)",
    category: "Mandala",
    src: "https://image.jimcdn.com/cdn-cgi/image/width=627%2Cheight=10000%2Cfit=contain%2Cformat=jpg%2C/app/cms/storage/image/path/s6a5681fc1957b232/image/i1ebeccd8d88c2471/version/1682437858/mandala-februar-farbstifte-violet-blau-rosa-zentangle.jpg",
  },
  {
    id: "10",
    title: "Buntes Mandala",
    category: "Mandala",
    src: "https://image.jimcdn.com/cdn-cgi/image/width=444%2Cheight=10000%2Cfit=contain%2Cformat=jpg%2C/app/cms/storage/image/path/s6a5681fc1957b232/image/i4142eb85475c2379/version/1682438459/mandala-farbstifte-bunt-zentangle.jpg",
  },
  {
    id: "11",
    title: "Mandala (Tuschestift Rot)",
    category: "Mandala",
    src: "https://image.jimcdn.com/cdn-cgi/image/width=425%2Cheight=10000%2Cfit=contain%2Cformat=jpg%2C/app/cms/storage/image/path/s6a5681fc1957b232/image/i82894369d85012bd/version/1682438873/mandala-tuschestift-rot-zentangle-anja-boos.jpg",
  },
];
