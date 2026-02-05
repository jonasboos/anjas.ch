export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string; // HTML or Markdown content
  imageUrl: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "mohnblumen-aquarell",
    title: "Mohnblumen Aquarell",
    date: "19. Juni",
    excerpt: "Die Leichtigkeit des Sommers eingefangen in transparenten Aquarellfarben.",
    imageUrl: "/images/blog/mohnblumen-aquarell.jpg",
    content: `
      <p>Mohnblumen sind für mich der Inbegriff des Sommers. Ihre leuchtend roten Blütenblätter, die so zart und doch so kraftvoll wirken, faszinieren mich immer wieder aufs Neue. In diesem Aquarell wollte ich genau diese Transparenz und Leichtigkeit einfangen.</p>
      <p>Die Herausforderung bei Aquarellfarben liegt darin, den Moment zu nutzen, in dem die Farbe noch nass ist, und sie fließen zu lassen, ohne die Kontrolle vollständig zu verlieren. Es ist ein Tanz zwischen Zufall und Absicht.</p>
      <p>Für dieses Bild habe ich mich auf wenige Farbtöne beschränkt, um die Leuchtkraft des Rots nicht zu übertönen. Der Hintergrund ist bewusst unscharf gehalten, um den Fokus ganz auf die Blüten zu lenken, die sich sanft im Sommerwind zu wiegen scheinen.</p>
    `,
  },
  {
    id: "2",
    slug: "mohnblumen-am-belpberg",
    title: "Mohnblumen am Belpberg",
    date: "14. Juni",
    excerpt: "Eine malerische Wanderung am Belpberg, inspiriert von der roten Pracht am Wegesrand.",
    imageUrl: "/images/blog/mohnblumen-belpberg.jpg",
    content: `
      <p>Der Belpberg bietet zu jeder Jahreszeit wunderbare Motive, aber wenn im Juni die Mohnblumen blühen, verwandelt sich die Landschaft in ein rotes Meer. Dieses Bild entstand nach einem langen Spaziergang an einem warmen Nachmittag.</p>
      <p>Ich habe versucht, nicht nur die Blumen selbst zu malen, sondern die gesamte Atmosphäre dieses Ortes einzufangen: das warme Licht der Sonne, das satte Grün der Wiesen und den Kontrast zum blauen Himmel.</p>
      <p>Es ist immer wieder erstaunlich, wie die Natur ihre Farben komponiert. Als Künstlerin versuche ich, diese Harmonie auf die Leinwand zu übertragen und dem Betrachter das Gefühl zu geben, selbst dort zu stehen.</p>
    `,
  },
  {
    id: "3",
    slug: "schneeberge",
    title: "Schneeberge",
    date: "07. März",
    excerpt: "Die stille Majestät der Alpen im Winter, festgehalten in kühlen Blautönen.",
    imageUrl: "/images/blog/schneeberge-blog.jpg",
    content: `
      <p>Schnee ist nicht einfach nur weiß. Wenn man genau hinsieht, entdeckt man eine Vielzahl von Farben: das kühle Blau der Schatten, das warme Gold der von der Sonne beschienenen Gipfel und das sanfte Grau der Felsen.</p>
      <p>In diesem Werk wollte ich die stille Majestät der Berge ausdrücken. Die monumentale Ruhe, die sie ausstrahlen, besonders im Winter, wenn der Schnee alles dämpft. Die Strukturen der Felsen bilden einen spannenden Kontrast zu den weichen Schneeflächen.</p>
      <p>Das Malen von Schneebergen erfordert ein genaues Studium von Licht und Schatten. Es ist ein Spiel mit Nuancen, um die Kälte und gleichzeitig die Schönheit dieser rauen Landschaft spürbar zu machen.</p>
    `,
  },
  {
    id: "4",
    slug: "sonnenuntergang-am-meer",
    title: "Sonnenuntergang am Meer",
    date: "26. September",
    excerpt: "Das Spiel der Farben, wenn der Tag im Meer versinkt. Wärme, Ruhe und Weite.",
    imageUrl: "/images/blog/sonnenuntergang-meer.jpg",
    content: `
      <p>Es gibt kaum etwas Beruhigenderes als einen Sonnenuntergang am Meer. Die Art und Weise, wie sich der Himmel im Wasser spiegelt und die Grenzen zwischen Oben und Unten verschwimmen, hat etwas fast Magisches.</p>
      <p>Für dieses Bild habe ich warme Orange- und Gelbtöne verwendet, die langsam in das kühle Blau des Wassers übergehen. Die Textur der Wellen und das Glitzern des letzten Lichts waren mir besonders wichtig.</p>
      <p>Dieses Werk soll Wärme und Ruhe ausstrahlen. Ein Moment des Innehaltens, bevor die Nacht hereinbricht. Ein Erinnerung an laue Sommerabende und das Rauschen der Brandung.</p>
    `,
  },
  {
    id: "5",
    slug: "waldstimmung",
    title: "Waldstimmung",
    date: "18. September",
    excerpt: "Zwillingsbaum in Öl. Das Lichtspiel im dichten Grün des Waldes.",
    imageUrl: "/images/blog/waldstimmung.jpg",
    content: `
      <p>Der Wald ist für mich ein Ort der Kraft und der Inspiration. Besonders fasziniert mich das Lichtspiel, wenn die Sonnenstrahlen durch das Blätterdach brechen und tanzende Muster auf den Waldboden zaubern.</p>
      <p>In diesem Ölgemälde steht ein "Zwillingsbaum" im Mittelpunkt – zwei Stämme, die eng umschlungen in den Himmel wachsen. Sie symbolisieren für mich Verbundenheit und Wachstum.</p>
      <p>Ich habe viele verschiedene Grüntöne gemischt, um die Tiefe des Waldes darzustellen. Von dunklem Tannengrün bis zu leuchtendem Maigrün. Ölfarben eignen sich wunderbar, um diese organischen Strukturen und weichen Übergänge zu schaffen.</p>
    `,
  },
  {
    id: "6",
    slug: "bergsee-lag-tuleritg-flims",
    title: "Bergsee Lag Tuleritg Flims",
    date: "24. Mai",
    excerpt: "Ein verborgenes Juwel in Flims. Das türkise Wasser und die Spiegelungen der Bäume.",
    imageUrl: "/images/blog/bergsee-flims.jpg",
    content: `
      <p>Neben dem bekannten Caumasee liegt der kleine, oft übersehene Lag Tuleritg. Seine Farbe ist weniger spektakulär türkis, dafür geheimnisvoller, tiefer und grüner. Ein wunderbar stiller Ort.</p>
      <p>Die Spiegelungen der Tannen im ruhigen Wasser waren das Hauptthema dieses Bildes. Es ist faszinierend zu malen, wie sich die reale Welt im Wasser bricht und verzerrt.</p>
      <p>Ich wollte die Kühle und Frische dieses Bergsees einfangen. Ein Ort, an dem man die Seele baumeln lassen kann und der Hektik des Alltags entflieht.</p>
    `,
  },
  {
    id: "7",
    slug: "10-versionen-strasse",
    title: "10 Versionen der gleichen Strasse",
    date: "05. Juli",
    excerpt: "Ein künstlerisches Experiment: Ein Motiv, zehn verschiedene Techniken und Stimmungen.",
    imageUrl: "/images/blog/strasse-serie.jpg",
    content: `
      <p>Wie sehr verändert sich ein Motiv, wenn man die Technik ändert? Oder das Format? Oder die Farbpalette? Dieser Frage bin ich in meiner Serie "10 Versionen einer Strasse" nachgegangen.</p>
      <p>Es war eine unglaublich lehrreiche Erfahrung. Mal habe ich mit groben Pinselstrichen gearbeitet, mal detailliert mit Farbstiften, mal reduziert abstrakt. Jedes Bild erzählt die Geschichte derselben Straße, aber jedes Mal mit einer völlig anderen Emotion.</p>
      <p>Kreativität bedeutet für mich oft, Grenzen auszutesten und Gewohnheiten zu durchbrechen. Dieses Projekt hat mir gezeigt, wie unendlich viele Möglichkeiten in einem einzigen, scheinbar simplen Motiv stecken.</p>
    `,
  },
  {
    id: "8",
    slug: "bergdohle-auf-schindeldach",
    title: "Bergdohle auf dem Schindeldach",
    date: "23. April",
    excerpt: "Ein neugieriger Beobachter in den Bergen. Acryl auf Malkarton.",
    imageUrl: "/images/blog/bergdohle.jpg",
    content: `
      <p>Wer in den Bergen unterwegs ist, kennt sie: die frechen, intelligenten Bergdohlen. Mit ihrem glänzend schwarzen Gefieder und dem gelben Schnabel sind sie wunderbare Motive.</p>
      <p>In diesem Bild sitzt eine Dohle auf einem alten, verwitterten Schindeldach. Die Struktur des grauen Holzes hat mich besonders gereizt. Es bildet einen tollen Kontrast zum glatten Gefieder des Vogels.</p>
      <p>Ich mag es, Tieren in meinen Bildern einen Charakter zu geben. Diese Dohle wirkt, als würde sie genau beobachten, was um sie herum geschieht – vielleicht wartet sie auf einen Krümel vom Picknick eines Wanderers?</p>
    `,
  },
];
