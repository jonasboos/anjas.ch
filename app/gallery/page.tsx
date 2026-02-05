import { Metadata } from "next";
import GalleryPage from "@/app/components/pages/GalleryPage";

export const metadata: Metadata = {
  title: "Galerie | Anja Boos Art",
  description: "Durchstöbern Sie die Galerie meiner Werke: Landschaften, Pflanzen, Tiere und Mandalas. Einzigartige Acrylmalerei.",
  openGraph: {
    title: "Galerie | Anja Boos Art",
    description: "Durchstöbern Sie die Galerie meiner Werke.",
  },
};

export default function Page() {
  return <GalleryPage />;
}
