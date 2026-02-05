import { Metadata } from "next";
import VideosPage from "@/app/components/pages/VideosPage";

export const metadata: Metadata = {
  title: "Videos | Anja Boos Art",
  description: "Sehen Sie Videos über den Entstehungsprozess der Kunstwerke von Anja Boos. Malen, Techniken und Inspiration.",
  openGraph: {
    title: "Videos | Anja Boos Art",
    description: "Der kreative Prozess in bewegten Bildern.",
  },
};

export default function Page() {
  return <VideosPage />;
}
