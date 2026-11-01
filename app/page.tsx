import { Metadata } from "next";
import HomePage from "@/app/components/pages/HomePage";
import { JsonLdScript } from "@/app/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/json-ld";
import { buildPageMetadata, pageSeo } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(pageSeo.home);

export default function Home() {
  return (
    <>
      <HomePage />
      <JsonLdScript
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
        ])}
      />
    </>
  );
}
