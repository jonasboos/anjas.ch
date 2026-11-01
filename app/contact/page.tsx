import { Metadata } from "next";
import { Suspense } from "react";
import ContactPage from "@/app/components/pages/ContactPage";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktieren Sie Anja Boos für Anfragen zu Kunstwerken, Auftragsarbeiten oder Kooperationen. Atelier in Bern.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Kontakt | Anja Boos",
    description: "Atelier in Bern. Anfragen an anja@anjas.ch.",
    url: "/contact",
  },
};

export default function Contact() {
  return (
    <Suspense>
      <ContactPage />
    </Suspense>
  );
}
