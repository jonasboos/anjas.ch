import { Metadata } from "next";
import HomePage from "@/app/components/pages/HomePage";

export const metadata: Metadata = {
  title: "Anja Boos | Acrylmalerei & Kunst aus der Schweiz",
  description: "Entdecken Sie die Werke der Schweizer Künstlerin Anja Boos. Acrylmalerei inspiriert von Natur, Landschaften und Gefühlen.",
  openGraph: {
    title: "Anja Boos | Kunst",
    description: "Acrylmalerei inspiriert von Natur und Landschaften.",
    url: "https://anjas.ch",
    siteName: "Anja Boos Art",
    locale: "de_CH",
    type: "website",
  },
};

export default function Home() {
  return <HomePage />;
}
