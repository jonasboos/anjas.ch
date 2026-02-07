import { Metadata } from "next";
import ShopPage from "@/app/components/pages/ShopPage";

export const metadata: Metadata = {
  title: "Anja Boos | Shop",
  description: "Grusskarten und Kunstprints von Anja Boos. Bestellung als Nachricht gebuendelt.",
};

export default function Shop() {
  return <ShopPage />;
}
