import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";
export const ogAlt = "Anja Boos, Künstlerin aus der Region Bern – Acrylmalerei";

export async function renderOgImage() {
  const image = await readFile(
    join(process.cwd(), "public/images/gallery/bietschhorn-herbst.jpg")
  );
  const src = `data:image/jpeg;base64,${image.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#f3efe7",
          color: "#1b1916",
        }}
      >
        <div
          style={{
            width: "48%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "64px",
          }}
        >
          <div
            style={{
              fontSize: 18,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#4e4840",
            }}
          >
            Acrylmalerei · Schweiz
          </div>
          <div style={{ fontSize: 88, lineHeight: 0.92, marginTop: 24 }}>
            Anja Boos
          </div>
          <div style={{ fontSize: 28, marginTop: 28, color: "#4e4840" }}>
            Natur, Landschaften und Gefühle
          </div>
        </div>
        <div style={{ width: "52%", height: "100%", display: "flex" }}>
          {/* satori only renders a plain img element */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt=""
            width={624}
            height={630}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    ),
    { ...ogSize }
  );
}
