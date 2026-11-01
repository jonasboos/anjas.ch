import { Metadata } from "next";
import GalleryPage from "@/app/components/pages/GalleryPage";

export const metadata: Metadata = {
  title: "Galerie",
  description:
    "Bildergalerie von Anja Boos: Landschaften, Pflanzen, Tiere und Mandalas. Einzigartige Acrylmalerei.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Galerie | Anja Boos",
    description: "Landschaften, Pflanzen, Tiere und Mandalas.",
    url: "/gallery",
  },
};

export default function Page() {
  return <GalleryPage />;
}
