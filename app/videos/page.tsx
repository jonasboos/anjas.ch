import { Metadata } from "next";
import VideosPage from "@/app/components/pages/VideosPage";

export const metadata: Metadata = {
  title: "Videos",
  description:
    "Videos über den Entstehungsprozess der Kunstwerke von Anja Boos. Malen, Techniken und Inspiration.",
  alternates: { canonical: "/videos" },
  openGraph: {
    title: "Videos | Anja Boos",
    description: "Der kreative Prozess in bewegten Bildern.",
    url: "/videos",
  },
};

export default function Page() {
  return <VideosPage />;
}
