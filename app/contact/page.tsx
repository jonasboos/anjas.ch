import { Metadata } from "next";
import ContactPage from "@/app/components/pages/ContactPage";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Anja Boos | Kontakt",
  description: "Kontaktieren Sie Anja Boos für Anfragen zu Kunstwerken, Auftragsarbeiten oder Kooperationen.",
};

export default function Contact() {
  return (
    <Suspense>
      <ContactPage />
    </Suspense>
  );
}
