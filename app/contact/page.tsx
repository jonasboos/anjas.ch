import { Metadata } from "next";
import { Suspense } from "react";
import ContactPage from "@/app/components/pages/ContactPage";
import { JsonLdScript } from "@/app/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/json-ld";
import { buildPageMetadata, pageSeo } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(pageSeo.contact);

export default function Contact() {
  return (
    <>
      <Suspense>
        <ContactPage />
      </Suspense>
      <JsonLdScript
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Kontakt", path: "/contact" },
        ])}
      />
    </>
  );
}
