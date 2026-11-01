import { Metadata } from "next";
import BlogPage from "@/app/components/pages/BlogPage";
import { JsonLdScript } from "@/app/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/json-ld";
import { buildPageMetadata, pageSeo } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(pageSeo.blog);

export default function Page() {
  return (
    <>
      <BlogPage />
      <JsonLdScript
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
    </>
  );
}
