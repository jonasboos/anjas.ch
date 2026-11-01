import { Metadata } from "next";
import HomePage from "@/app/components/pages/HomePage";

export const metadata: Metadata = {
  description:
    "Entdecken Sie die Werke der Schweizer Künstlerin Anja Boos. Acrylmalerei inspiriert von Natur, Landschaften und Gefühlen.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Anja Boos | Acrylmalerei & Kunst aus der Schweiz",
    description: "Acrylmalerei inspiriert von Natur, Landschaften und Gefühlen.",
    url: "/",
  },
};

export default function Home() {
  return <HomePage />;
}
