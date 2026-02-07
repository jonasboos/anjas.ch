export type ShopProduct = {
  id: string;
  name: string;
  category: "Blumen" | "Mandala" | "Landschaft" | "Tier" | "Set";
  price: number;
  description: string[];
  imageUrl: string;
  availability: "verfuegbar" | "folgt";
  deliveryTime: string;
};

export const shopProducts: ShopProduct[] = [
  {
    id: "kartenset-blumen-1",
    name: "Kartenset Blumen Nr. 1",
    category: "Blumen",
    price: 13.2,
    description: [
      "3 Falt-Grusskarte quadratisch",
      "Innenseite leer",
      "Hochwertiger Druck auf 300g Papier glaenzend",
      "Zu jeder Grusskarte wird ein passendes weisses Kuvert gratis mitgeliefert",
      "Masse: 14.3 x 14.3 cm",
    ],
    imageUrl:
      "https://image.jimcdn.com/cdn-cgi/image//app/cms/storage/image/path/s6a5681fc1957b232/image/if81043a9ee58f373/version/1701098088/image.jpg",
    availability: "verfuegbar",
    deliveryTime: "3 - 5 Tage",
  },
  {
    id: "kartenset-blumen-2",
    name: "Kartenset Blumen Nr. 2",
    category: "Blumen",
    price: 13.2,
    description: [
      "3 Falt-Grusskarte quadratisch",
      "Innenseite leer",
      "Hochwertiger Druck auf 300g Papier glaenzend",
      "Zu jeder Grusskarte wird ein passendes weisses Kuvert gratis mitgeliefert",
      "Masse: 14.3 x 14.3 cm",
    ],
    imageUrl:
      "https://image.jimcdn.com/cdn-cgi/image//app/cms/storage/image/path/s6a5681fc1957b232/image/ic7d711eaac88bbf5/version/1701098432/image.jpg",
    availability: "verfuegbar",
    deliveryTime: "3 - 5 Tage",
  },
  {
    id: "kartenset-winter",
    name: "Kartenset Winter",
    category: "Landschaft",
    price: 13.2,
    description: [
      "3 Falt-Grusskarte quadratisch",
      "Innenseite leer",
      "Hochwertiger Druck auf 300g Papier glaenzend",
      "Zu jeder Grusskarte wird ein passendes weisses Kuvert gratis mitgeliefert",
      "Masse: 14.3 x 14.3 cm",
    ],
    imageUrl:
      "https://image.jimcdn.com/cdn-cgi/image//app/cms/storage/image/path/s6a5681fc1957b232/image/ibef0f75b6498deb5/version/1704262660/image.jpg",
    availability: "verfuegbar",
    deliveryTime: "1 - 3 Tage",
  },
  {
    id: "karte-schwarzsee-herbst",
    name: "Karte Schwarzsee Herbst",
    category: "Landschaft",
    price: 4.5,
    description: [
      "Falt-Grusskarte quadratisch",
      "Innenseite leer",
      "Hochwertiger Druck auf 300g Papier glaenzend",
      "Zu jeder Grusskarte wird ein passendes weisses Kuvert gratis mitgeliefert",
      "Masse: 14.3 x 14.3 cm",
    ],
    imageUrl:
      "https://image.jimcdn.com/cdn-cgi/image//app/cms/storage/image/path/s6a5681fc1957b232/image/id6481d2e89f6585d/version/1701355166/image.jpg",
    availability: "verfuegbar",
    deliveryTime: "1 - 3 Tage",
  },
  {
    id: "karte-moewe",
    name: "Karte Moewe",
    category: "Landschaft",
    price: 4.5,
    description: [
      "Falt-Grusskarte quadratisch",
      "Innenseite leer",
      "Hochwertiger Druck auf 300g Papier glaenzend",
      "Zu jeder Grusskarte wird ein passendes weisses Kuvert gratis mitgeliefert",
      "Masse: 14.3 x 14.3 cm",
    ],
    imageUrl:
      "https://image.jimcdn.com/cdn-cgi/image//app/cms/storage/image/path/s6a5681fc1957b232/image/iba3202386684dc27/version/1701355409/image.jpg",
    availability: "verfuegbar",
    deliveryTime: "1 - 3 Tage",
  },
  {
    id: "tierkartenset-2",
    name: "Tierkartenset mit 2 Karten",
    category: "Tier",
    price: 8,
    description: [
      "2 Falt-Grusskarten rechteckig",
      "Innenseite leer",
      "Hochwertiger Druck auf 300g Papier glaenzend",
      "Zu jeder Grusskarte wird ein passendes weisses Kuvert gratis mitgeliefert",
      "Masse: 10 x 14.3 cm",
    ],
    imageUrl:
      "https://image.jimcdn.com/cdn-cgi/image//app/cms/storage/image/path/s6a5681fc1957b232/image/i3e170329bb618aa4/version/1702024002/image.jpg",
    availability: "verfuegbar",
    deliveryTime: "1 - 3 Tage",
  },
  {
    id: "karte-mandala-januar",
    name: "Karte Mandala Januar",
    category: "Mandala",
    price: 4.5,
    description: [
      "Falt-Grusskarte quadratisch",
      "Innenseite leer",
      "Hochwertiger Druck auf 300g Papier glaenzend",
      "Zu jeder Grusskarte wird ein passendes weisses Kuvert gratis mitgeliefert",
      "Masse: 14.3 x 14.3 cm",
    ],
    imageUrl:
      "https://image.jimcdn.com/cdn-cgi/image/width=1820%2Cheight=1280%2Cfit=contain%2Cformat=jpg%2C/app/cms/storage/image/path/s6a5681fc1957b232/image/i1b2fec48cbc1ad7d/version/1700925205/image.jpg",
    availability: "verfuegbar",
    deliveryTime: "3 - 5 Tage",
  },
  {
    id: "kartenset-mandala-1",
    name: "Kartenset Mandala Nr. 1",
    category: "Mandala",
    price: 13.2,
    description: [
      "3 Falt-Grusskarte quadratisch",
      "Innenseite leer",
      "Hochwertiger Druck auf 300g Papier glaenzend",
      "Zu jeder Grusskarte wird ein passendes weisses Kuvert gratis mitgeliefert",
      "Masse: 14.3 x 14.3 cm",
    ],
    imageUrl:
      "https://image.jimcdn.com/cdn-cgi/image//app/cms/storage/image/path/s6a5681fc1957b232/image/i0a152a77c0e8eac8/version/1701361139/image.jpg",
    availability: "verfuegbar",
    deliveryTime: "3 - 5 Tage",
  },
  {
    id: "kartenset-mandala-2",
    name: "Kartenset Mandala Nr. 2",
    category: "Mandala",
    price: 13.2,
    description: [
      "3 Falt-Grusskarte quadratisch",
      "Innenseite leer",
      "Hochwertiger Druck auf 300g Papier glaenzend",
      "Zu jeder Grusskarte wird ein passendes weisses Kuvert gratis mitgeliefert",
      "Masse: 14.3 x 14.3 cm",
    ],
    imageUrl:
      "https://image.jimcdn.com/cdn-cgi/image//app/cms/storage/image/path/s6a5681fc1957b232/image/idd7abd5fa8566401/version/1704262614/image.jpg",
    availability: "verfuegbar",
    deliveryTime: "3 - 5 Tage",
  },
  {
    id: "kartenset-mandala-3",
    name: "Kartenset Mandala Nr. 3",
    category: "Mandala",
    price: 13.2,
    description: [
      "3 Falt-Grusskarte quadratisch",
      "Innenseite leer",
      "Hochwertiger Druck auf 300g Papier glaenzend",
      "Zu jeder Grusskarte wird ein passendes weisses Kuvert gratis mitgeliefert",
      "Masse: 14.3 x 14.3 cm",
    ],
    imageUrl:
      "https://image.jimcdn.com/cdn-cgi/image//app/cms/storage/image/path/s6a5681fc1957b232/image/i7d88e1d5e9125430/version/1701421070/image.jpg",
    availability: "verfuegbar",
    deliveryTime: "3 - 5 Tage",
  },
];
