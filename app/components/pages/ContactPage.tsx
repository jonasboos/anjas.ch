"use client";

import { FormEvent, useState } from "react";
import { useSearchParams } from "next/navigation";
import { shell, site } from "@/lib/site";

export default function ContactPage() {
  const searchParams = useSearchParams();
  const prefill = searchParams.get("message") ?? "";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(prefill);
  const [seenPrefill, setSeenPrefill] = useState(prefill);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  if (prefill !== seenPrefill) {
    setSeenPrefill(prefill);
    setMessage(prefill);
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Bitte die mit * gekennzeichneten Felder ausfüllen.");
      setSent(false);
      return;
    }
    const body = encodeURIComponent(`Name: ${name.trim()}\nE-Mail: ${email.trim()}\n\n${message.trim()}`);
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Nachricht von anjas.ch")}&body=${body}`;
    setError("");
    setSent(true);
  };

  return (
    <div className="py-14 md:py-20">
      <div className={shell}>
        <header className="max-w-2xl">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-muted">Atelier</p>
          <h1 className="mt-3 font-serif text-5xl text-ink sm:text-7xl">Kontakt</h1>
          <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
            Ich freue mich, von dir zu hören! Ob du Fragen zu meinen Kunstwerken hast,
            an einer Auftragsarbeit interessiert bist oder einfach mehr über meine
            Projekte erfahren möchtest – melde dich jederzeit.
          </p>
        </header>

        <div className="mt-14 grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="space-y-10">
            <div>
              <h2 className="font-serif text-3xl text-ink">Erreichen Sie mich</h2>
              <div className="mt-5 space-y-3 text-sm leading-relaxed text-muted">
                <a className="block w-fit text-ink hover:text-spruce" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
                <p>{site.studio}</p>
                <p>
                  Besuch im Atelier nach Terminabsprache. Kontaktiere mich gerne für
                  eine Terminvereinbarung.
                </p>
              </div>
            </div>
            <div>
              <h2 className="font-serif text-3xl text-ink">Social Media</h2>
              <div className="mt-5 flex flex-wrap gap-4 text-[0.72rem] uppercase tracking-[0.18em]">
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-line px-4 py-2 hover:border-ink"
                >
                  Instagram
                  <span className="sr-only"> (öffnet in neuem Tab)</span>
                </a>
                <a
                  href={site.saatchi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-line px-4 py-2 hover:border-ink"
                >
                  Saatchi Art
                  <span className="sr-only"> (öffnet in neuem Tab)</span>
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} noValidate className="bg-mat p-6 ring-1 ring-ink/8 sm:p-10">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="text-[0.68rem] uppercase tracking-[0.18em] text-muted">
                  Name*
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                  className="mt-2 w-full border-b border-line bg-transparent py-3 text-ink"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-[0.68rem] uppercase tracking-[0.18em] text-muted">
                  E-Mail*
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  className="mt-2 w-full border-b border-line bg-transparent py-3 text-ink"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-[0.68rem] uppercase tracking-[0.18em] text-muted">
                  Nachricht*
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  required
                  className="mt-2 w-full border-b border-line bg-transparent py-3 text-ink"
                />
              </div>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-muted">
              Es gilt unsere{" "}
              <a
                href={site.privacy}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                Datenschutzerklärung
                <span className="sr-only"> (öffnet in neuem Tab)</span>
              </a>
              . Bitte die mit * gekennzeichneten Felder ausfüllen.
            </p>
            {error ? (
              <p role="alert" className="mt-4 text-sm text-danger">
                {error}
              </p>
            ) : null}
            {sent ? (
              <p role="status" className="mt-4 text-sm text-muted">
                Ihr E-Mail-Programm öffnet sich mit der Nachricht. Falls nicht, schreiben Sie an {site.email}.
              </p>
            ) : null}
            <button
              type="submit"
              className="mt-8 bg-ink px-7 py-3 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-paper hover:bg-spruce"
            >
              Nachricht senden
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
