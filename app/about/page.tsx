import { Metadata } from "next";
import AboutPage from "@/app/components/pages/AboutPage";
import { JsonLdScript } from "@/app/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/json-ld";
import { buildPageMetadata, pageSeo } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(pageSeo.about);

export default function Page() {
  return (
    <>
      <AboutPage />
      <JsonLdScript
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Über mich", path: "/about" },
        ])}
      />
    </>
  );
}
