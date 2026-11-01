import { Metadata } from "next";
import ShopPage from "@/app/components/pages/ShopPage";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Grusskarten und Originalbilder von Anja Boos. Bestellung per E-Mail, Zahlung mit Paypal, Banküberweisung oder Twint.",
  alternates: { canonical: "/shop" },
  openGraph: {
    title: "Shop | Anja Boos",
    description: "Grusskarten und Originalbilder zum Verkauf.",
    url: "/shop",
  },
};

export default function Shop() {
  return <ShopPage />;
}
