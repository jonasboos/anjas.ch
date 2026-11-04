import { Metadata } from "next";
import { JsonLdScript } from "@/app/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/json-ld";
import { buildPageMetadata, pageSeo } from "@/lib/seo";
import { shell, site } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata(pageSeo.datenschutz);

const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: "1. Verantwortliche Stelle",
    body: (
      <>
        <p>Verantwortlich für die Bearbeitung von Personendaten auf dieser Website ist:</p>
        <p>
          Anja Boos
          <br />
          {site.studio}
          <br />
          E-Mail:{" "}
          <a href={`mailto:${site.email}`} className="underline underline-offset-4">
            {site.email}
          </a>
        </p>
        <p>
          Diese Datenschutzerklärung richtet sich nach dem Schweizer Bundesgesetz über den
          Datenschutz (DSG, in Kraft seit 1. September 2023). Soweit Besucherinnen und Besucher
          aus der EU betroffen sind, wird zusätzlich die Datenschutz-Grundverordnung (DSGVO)
          berücksichtigt.
        </p>
      </>
    ),
  },
  {
    title: "2. Welche Daten bearbeitet werden",
    body: (
      <>
        <p>Diese Website kommt mit sehr wenigen Daten aus:</p>
        <ul>
          <li>
            <strong>Technische Daten beim Besuch:</strong> IP-Adresse, Datum und Uhrzeit,
            aufgerufene Seite, Browser und Betriebssystem. Diese Daten fallen beim Hosting
            automatisch an (Server-Logfiles).
          </li>
          <li>
            <strong>Daten, die Sie selbst senden:</strong> Name, E-Mail-Adresse, Nachricht und
            bei Bestellungen allenfalls Ihre Adresse – nur wenn Sie mir eine E-Mail schreiben.
          </li>
        </ul>
        <p>
          Es gibt kein Kundenkonto, keine Online-Zahlung auf der Website, kein Tracking und keine
          Analyse-Tools.
        </p>
      </>
    ),
  },
  {
    title: "3. Zweck der Bearbeitung",
    body: (
      <ul>
        <li>Bereitstellung und Sicherheit der Website</li>
        <li>Beantwortung Ihrer Anfragen und Nachrichten</li>
        <li>Abwicklung von Bestellungen von Grusskarten und Anfragen zu Originalbildern</li>
        <li>Versand von Neuigkeiten, wenn Sie sich dafür angemeldet haben</li>
      </ul>
    ),
  },
  {
    title: "4. Hosting und Datenübermittlung ins Ausland",
    body: (
      <>
        <p>
          Diese Website wird bei Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA,
          gehostet. Beim Aufruf der Website werden die oben genannten technischen Daten durch
          Vercel bearbeitet und kurzzeitig in Server-Logfiles gespeichert. Vercel stellt die
          Inhalte über ein weltweites Netzwerk bereit; dabei können Daten auch in den USA
          bearbeitet werden.
        </p>
        <p>
          Die USA gelten nicht in jedem Fall als Land mit angemessenem Datenschutz. Vercel ist
          unter dem Swiss-U.S. bzw. EU-U.S. Data Privacy Framework zertifiziert und verwendet
          zusätzlich Standardvertragsklauseln. Mehr dazu:{" "}
          <a
            href="https://vercel.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            Datenschutzerklärung von Vercel
          </a>
          .
        </p>
        <p>
          Die Schriften dieser Website werden direkt von anjas.ch geladen; es findet keine
          Verbindung zu Google Fonts statt.
        </p>
      </>
    ),
  },
  {
    title: "5. Kontakt, Bestellung und Neuigkeiten per E-Mail",
    body: (
      <>
        <p>
          Das Kontaktformular, die Bestellung im Shop und die Anmeldung für Neuigkeiten senden
          keine Daten an einen Server. Beim Absenden öffnet sich Ihr eigenes E-Mail-Programm mit
          einer vorbereiteten Nachricht. Erst wenn Sie diese E-Mail selbst abschicken, erhalte ich
          Ihre Angaben.
        </p>
        <p>
          Ihre E-Mail wird von meinem E-Mail-Anbieter empfangen und gespeichert. Ich verwende Ihre
          Angaben nur, um Ihre Anfrage oder Bestellung zu bearbeiten oder Ihnen – falls gewünscht –
          Neuigkeiten zu senden. Für Neuigkeiten wird kein Newsletter-Dienst eingesetzt; Sie können
          sich jederzeit mit einer kurzen E-Mail abmelden.
        </p>
        <p>
          Bezahlt wird nach Absprache per Twint, PayPal oder Banküberweisung. Dabei gelten die
          Datenschutzbestimmungen des jeweiligen Anbieters.
        </p>
      </>
    ),
  },
  {
    title: "6. Cookies, Analyse und eingebettete Inhalte",
    body: (
      <>
        <p>
          Diese Website setzt keine Cookies und verwendet keine Analyse- oder Tracking-Dienste.
        </p>
        <p>
          Auf der Seite «Videos» werden Videos von YouTube eingebunden. Die Vorschaubilder werden
          über anjas.ch geladen. Erst wenn Sie ein Video anklicken, wird eine Verbindung zu
          YouTube (Google Ireland Ltd. bzw. Google LLC, USA) im erweiterten Datenschutzmodus
          (youtube-nocookie.com) aufgebaut. Dabei können Daten wie Ihre IP-Adresse an Google
          übermittelt werden.
        </p>
        <p>
          Links zu Instagram und Saatchi Art führen auf externe Seiten. Dort gelten deren
          Datenschutzbestimmungen.
        </p>
      </>
    ),
  },
  {
    title: "7. Aufbewahrung",
    body: (
      <p>
        Server-Logfiles werden vom Hosting-Anbieter nur kurzzeitig gespeichert. E-Mails bewahre
        ich so lange auf, wie es für die Bearbeitung Ihrer Anfrage nötig ist oder gesetzliche
        Aufbewahrungspflichten (z. B. für Buchhaltungsunterlagen) bestehen. Für Neuigkeiten
        speichere ich Ihre E-Mail-Adresse, bis Sie sich abmelden.
      </p>
    ),
  },
  {
    title: "8. Ihre Rechte",
    body: (
      <>
        <p>Sie haben jederzeit das Recht,</p>
        <ul>
          <li>Auskunft über Ihre bei mir gespeicherten Personendaten zu verlangen,</li>
          <li>unrichtige Daten berichtigen zu lassen,</li>
          <li>die Löschung Ihrer Daten zu verlangen,</li>
          <li>einer Bearbeitung zu widersprechen und eine Einwilligung zu widerrufen,</li>
          <li>Ihre Daten in einem gängigen Format zu erhalten.</li>
        </ul>
        <p>
          Schreiben Sie dazu einfach an{" "}
          <a href={`mailto:${site.email}`} className="underline underline-offset-4">
            {site.email}
          </a>
          . Sie können sich zudem beim Eidgenössischen Datenschutz- und
          Öffentlichkeitsbeauftragten (EDÖB) beschweren; Personen in der EU bei der
          Aufsichtsbehörde ihres Landes.
        </p>
      </>
    ),
  },
  {
    title: "9. Änderungen",
    body: (
      <p>
        Diese Datenschutzerklärung kann angepasst werden, wenn sich die Website oder die
        rechtlichen Vorgaben ändern. Es gilt die jeweils hier veröffentlichte Fassung.
      </p>
    ),
  },
];

export default function Page() {
  return (
    <>
      <article className="py-14 md:py-20">
        <div className={`${shell} max-w-3xl`}>
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-muted">
            Rechtliches
          </p>
          <h1 className="mt-3 font-serif text-5xl leading-[0.95] text-ink sm:text-7xl">
            Datenschutz
          </h1>
          <p className="mt-5 text-lg text-muted">
            Ihre Privatsphäre ist mir wichtig. Hier erfahren Sie, welche Daten beim Besuch von
            anjas.ch anfallen und was damit geschieht.
          </p>
          <div className="mt-12 space-y-12">
            {sections.map((section) => (
              <section key={section.title} className="border-t border-line pt-8">
                <h2 className="font-serif text-3xl text-ink sm:text-4xl">{section.title}</h2>
                <div className="mt-4 space-y-4 leading-relaxed text-muted [&_a]:text-ink [&_li]:mt-1 [&_strong]:text-ink [&_ul]:list-disc [&_ul]:pl-5">
                  {section.body}
                </div>
              </section>
            ))}
          </div>
          <p className="mt-14 border-t border-line pt-6 text-sm text-muted">Stand: November 2026</p>
        </div>
      </article>
      <JsonLdScript
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Datenschutz", path: "/datenschutz" },
        ])}
      />
    </>
  );
}
