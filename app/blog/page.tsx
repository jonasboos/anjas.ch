import { Metadata } from "next";
import BlogPage from "@/app/components/pages/BlogPage";

export const metadata: Metadata = {
  title: "Blog | Anja Boos Art",
  description: "Lesen Sie den Art Blog von Anja Boos. Neuigkeiten, Gedanke und Einblicke in aktuelle Projekte.",
  openGraph: {
    title: "Blog | Anja Boos Art",
    description: "Neuigkeiten und Gedanken der Künstlerin.",
  },
};

export default function Page() {
  return <BlogPage />;
}
