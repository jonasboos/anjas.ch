import { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog-data";
import BlogPostPage from "@/app/components/pages/BlogPostPage";
import { JsonLdScript } from "@/app/components/JsonLd";
import { blogPostingJsonLd, breadcrumbJsonLd } from "@/lib/json-ld";
import { site } from "@/lib/site";

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

  const description = `${post.excerpt} Kunstblog von Anja Boos, Künstlerin aus der Region Bern und Belp.`;
  const title = `${post.title} – Art Blog`;

  return {
    title,
    description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: `${title} | Anja Boos`,
      description,
      url: `${site.url}/blog/${post.slug}`,
      type: "article",
      locale: "de_CH",
      images: [
        {
          url: post.imageUrl,
          width: post.width,
          height: post.height,
          alt: `${post.title}, Kunstblog von Anja Boos`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Anja Boos`,
      description,
      images: [post.imageUrl],
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

  const posting = blogPostingJsonLd(post.slug);

  return (
    <>
      <BlogPostPage post={post} />
      <JsonLdScript
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
          ...(posting ? [posting] : []),
        ]}
      />
    </>
  );
}
