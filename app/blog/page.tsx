import { Metadata } from "next";
import BlogPage from "@/app/components/pages/BlogPage";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Lesen Sie den Art Blog von Anja Boos. Neuigkeiten, Gedanken und Einblicke in aktuelle Projekte.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Anja Boos",
    description: "Neuigkeiten, Gedanken und Einblicke in aktuelle Projekte.",
    url: "/blog",
  },
};

export default function Page() {
  return <BlogPage />;
}
