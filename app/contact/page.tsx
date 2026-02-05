import { Metadata } from "next";
import ContactPage from "@/app/components/pages/ContactPage";

export const metadata: Metadata = {
  title: "Kontakt | Anja Boos Art",
  description: "Kontaktieren Sie Anja Boos für Anfragen, Kunstkäufe oder Kooperationen.",
  openGraph: {
    title: "Kontakt | Anja Boos Art",
    description: "Kontaktieren Sie Anja Boos.",
  },
};

export default function Page() {
  return <ContactPage />;
}
