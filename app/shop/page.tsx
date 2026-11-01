import { Metadata } from "next";
import ShopPage from "@/app/components/pages/ShopPage";
import { JsonLdScript } from "@/app/components/JsonLd";
import { shopPageJsonLd } from "@/lib/json-ld";
import { buildPageMetadata, pageSeo } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(pageSeo.shop);

export default function Shop() {
  return (
    <>
      <ShopPage />
      <JsonLdScript data={shopPageJsonLd()} />
    </>
  );
}
