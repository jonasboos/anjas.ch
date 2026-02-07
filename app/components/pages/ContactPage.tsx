"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Mail, MapPin, Instagram, ExternalLink } from "lucide-react";

export default function ContactPage() {
  const searchParams = useSearchParams();
  const [message, setMessage] = useState("");

  useEffect(() => {
    const prefill = searchParams.get("message");
    if (prefill) {
      setMessage(prefill);
    }
  }, [searchParams]);

  return (
    <div className="container mx-auto min-h-screen px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
        >
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Kontakt</h1>
          <p className="text-zinc-400">
            Ich freue mich, von dir zu hoeren! Ob du Fragen zu meinen Kunstwerken hast,
            an einer Auftragsarbeit interessiert bist oder einfach mehr ueber meine
            Projekte erfahren moechtest – melde dich jederzeit.
          </p>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="mb-4 text-xl font-semibold">Erreichen Sie mich</h3>
              <div className="space-y-4">
                <a href="mailto:anja@anjas.ch" className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span>anja@anjas.ch</span>
                </a>
                <div className="flex items-center gap-3 text-zinc-400">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <span>Wankdorffeldstrasse 90 | 3014 Bern | Raum 305</span>
                </div>
                <p className="text-sm text-zinc-500">
                  Besuch im Atelier nach Terminabsprache. Kontaktiere mich gerne fuer
                  eine Terminvereinbarung.
                </p>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-semibold">Social Media</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/anjas_ch/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-zinc-800 px-4 py-2 text-sm text-zinc-400 hover:bg-zinc-900 hover:text-white transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                  Instagram
                </a>
                <a
                  href="https://www.saatchiart.com/AnjaBoos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-zinc-800 px-4 py-2 text-sm text-zinc-400 hover:bg-zinc-900 hover:text-white transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  Saatchi Art
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6, delay: 0.4 }}
             className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8"
          >
            <form className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-zinc-300">Name*</label>
                <input 
                  type="text" 
                  id="name"
                  className="w-full rounded-md border border-zinc-800 bg-black/50 px-4 py-3 text-white placeholder-zinc-600 focus:border-white focus:outline-none focus:ring-0"
                  placeholder="Ihr Name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-zinc-300">E-Mail*</label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full rounded-md border border-zinc-800 bg-black/50 px-4 py-3 text-white placeholder-zinc-600 focus:border-white focus:outline-none focus:ring-0"
                  placeholder="ihre.email@beispiel.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-zinc-300">Nachricht*</label>
                <textarea 
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  className="w-full rounded-md border border-zinc-800 bg-black/50 px-4 py-3 text-white placeholder-zinc-600 focus:border-white focus:outline-none focus:ring-0"
                  placeholder="Ihre Nachricht an mich..."
                />
              </div>
              <p className="text-xs text-zinc-500">
                Es gilt unsere{" "}
                <a
                  href="https://anjas1.jimdoweb.com/j/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline"
                >
                  Datenschutzerklaerung
                </a>
                . Bitte die mit * gekennzeichneten Felder ausfuellen.
              </p>
              <button 
                type="button"
                className="w-full rounded-full bg-white py-3 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
              >
                Nachricht senden
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
