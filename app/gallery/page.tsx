import { Metadata } from "next";
import GalleryPage from "@/app/components/pages/GalleryPage";
import { JsonLdScript } from "@/app/components/JsonLd";
import { galleryPageJsonLd } from "@/lib/json-ld";
import { buildPageMetadata, pageSeo } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(pageSeo.gallery);

export default function Page() {
  return (
    <>
      <GalleryPage />
      <JsonLdScript data={galleryPageJsonLd()} />
    </>
  );
}
