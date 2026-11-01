import { shell } from "@/lib/site";
import { VideoCard } from "../VideoCard";

const videos = [
  { id: "DEQsFRUUgjg", title: "Farbstudie" },
  { id: "ZYwDMhZzW6w", title: "Schwarzsee with Acrylic" },
  { id: "xnaSdcrLOI8", title: "Acrylic Beaver Painting" },
  { id: "q8G0GXcY5bM", title: "Acrylic Fox Painting" },
];

export default function VideosPage() {
  return (
    <div className="py-14 md:py-20">
      <div className={shell}>
        <header className="max-w-2xl">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-muted">
            Videos auf YouTube
          </p>
          <h1 className="mt-3 font-serif text-5xl text-ink sm:text-7xl">Videos</h1>
          <p className="mt-5 max-w-xl text-lg text-muted">
            Begleiten Sie mich bei der Entstehung meiner Werke und entdecken Sie neue Einblicke.
          </p>
        </header>
        <div className="mt-14 grid gap-12 md:grid-cols-2">
          {videos.map((video) => (
            <VideoCard key={video.id} id={video.id} title={video.title} />
          ))}
        </div>
      </div>
    </div>
  );
}
