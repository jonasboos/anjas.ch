"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function NewsletterForm({ tone = "inverse" }: { tone?: "inverse" | "plain" }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const inverse = tone === "inverse";

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError("Bitte die mit * gekennzeichneten Felder ausfüllen.");
      setSent(false);
      return;
    }
    const body = encodeURIComponent(
      `Name: ${name.trim()}\nE-Mail: ${email.trim()}\n\nBitte in die Freundesliste aufnehmen.`
    );
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Anmeldung Freundesliste")}&body=${body}`;
    setError("");
    setSent(true);
  };

  return (
    <form onSubmit={onSubmit} className="mt-8 grid gap-4" noValidate>
      <div className={inverse ? "grid gap-4 md:grid-cols-[1fr_1fr_auto] md:items-end" : "grid gap-4"}>
        <div>
          <label
            htmlFor={inverse ? "newsletter-name" : "about-newsletter-name"}
            className={cn(
              "text-[0.68rem] uppercase tracking-[0.18em]",
              inverse ? "text-paper/70" : "text-muted"
            )}
          >
            Name*
          </label>
          <input
            id={inverse ? "newsletter-name" : "about-newsletter-name"}
            name="name"
            type="text"
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            className={cn(
              "mt-2 w-full border-b bg-transparent py-2 text-sm",
              inverse ? "border-paper/30 text-paper" : "border-line text-ink"
            )}
          />
        </div>
        <div>
          <label
            htmlFor={inverse ? "newsletter-email" : "about-newsletter-email"}
            className={cn(
              "text-[0.68rem] uppercase tracking-[0.18em]",
              inverse ? "text-paper/70" : "text-muted"
            )}
          >
            E-Mail*
          </label>
          <input
            id={inverse ? "newsletter-email" : "about-newsletter-email"}
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            className={cn(
              "mt-2 w-full border-b bg-transparent py-2 text-sm",
              inverse ? "border-paper/30 text-paper" : "border-line text-ink"
            )}
          />
        </div>
        <button
          type="submit"
          className={cn(
            "px-6 py-3 text-[0.72rem] font-medium uppercase tracking-[0.18em]",
            inverse ? "bg-paper text-ink hover:bg-mat" : "bg-ink text-paper hover:bg-spruce"
          )}
        >
          Absenden
        </button>
      </div>
      {error ? (
        <p role="alert" className={inverse ? "text-sm text-[#f0c9c4]" : "text-sm text-danger"}>
          {error}
        </p>
      ) : null}
      {sent ? (
        <p role="status" className={inverse ? "text-sm text-paper/80" : "text-sm text-muted"}>
          Ihr E-Mail-Programm öffnet sich mit der Anmeldung. Falls nicht, schreiben Sie an {site.email}.
        </p>
      ) : null}
      <p className={cn("text-xs leading-relaxed", inverse ? "text-paper/65" : "text-muted")}>
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
    </form>
  );
}
