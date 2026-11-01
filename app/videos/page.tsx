import { Metadata } from "next";
import VideosPage from "@/app/components/pages/VideosPage";
import { JsonLdScript } from "@/app/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/json-ld";
import { buildPageMetadata, pageSeo } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(pageSeo.videos);

export default function Page() {
  return (
    <>
      <VideosPage />
      <JsonLdScript
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Videos", path: "/videos" },
        ])}
      />
    </>
  );
}
