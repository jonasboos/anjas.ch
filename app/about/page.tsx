import { Metadata } from "next";
import AboutPage from "@/app/components/pages/AboutPage";

export const metadata: Metadata = {
  title: "Über mich",
  description:
    "Erfahren Sie mehr über die Künstlerin Anja Boos, ihre Inspiration aus der Natur und ihren kreativen Prozess.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "Über mich | Anja Boos",
    description: "Die Geschichte und der kreative Prozess der Künstlerin Anja Boos.",
    url: "/about",
  },
};

export default function Page() {
  return <AboutPage />;
}
