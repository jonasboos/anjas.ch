import { Metadata } from "next";
import AboutPage from "@/app/components/pages/AboutPage";

export const metadata: Metadata = {
  title: "Über Mich | Anja Boos Art",
  description: "Erfahren Sie mehr über die Künstlerin Anja Boos, ihre Inspiration aus der Natur und ihren kreativen Prozess.",
  openGraph: {
    title: "Über Mich | Anja Boos Art",
    description: "Die Geschichte und Philosophie der Künstlerin Anja Boos.",
  },
};

export default function Page() {
  return <AboutPage />;
}
