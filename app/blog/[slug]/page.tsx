import { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog-data";
import BlogPostPage from "@/app/components/pages/BlogPostPage";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Artikel nicht gefunden",
    };
  }

  return {
    title: `${post.title} | Anja Boos Art Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://anjas.ch/blog/${post.slug}`,
      siteName: "Anja Boos Art",
      images: [
        {
          url: post.imageUrl,
          width: 1200,
          height: 630,
          alt: `${post.title} - Acrylmalerei`,
        },
      ],
      type: "article",
      publishedTime: "2024-01-01", // Placeholder year, ideally from post.date
      authors: ["Anja Boos"],
    },
    alternates: {
      canonical: `https://anjas.ch/blog/${post.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return <BlogPostPage post={post} />;
}
