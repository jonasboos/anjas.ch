"use client";

import Image from "next/image";
import { FormEvent, useMemo, useState } from "react";
import { shopProducts } from "@/lib/shop-data";
import { shell, site } from "@/lib/site";
import { cn, formatCHF } from "@/lib/utils";

const categories = ["Alle", "Blumen", "Mandala", "Landschaft", "Tier"] as const;
const paymentOptions = ["Paypal", "Banküberweisung", "Twint", "Abholung"] as const;

type CartState = Record<string, number>;
type PaymentOption = (typeof paymentOptions)[number];

type OrderForm = {
  name: string;
  email: string;
  address: string;
  note: string;
  payment: PaymentOption;
  pickup: boolean;
};

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("Alle");
  const [cart, setCart] = useState<CartState>({});
  const [orderError, setOrderError] = useState("");
  const [form, setForm] = useState<OrderForm>({
    name: "",
    email: "",
    address: "",
    note: "",
    payment: "Paypal",
    pickup: false,
  });

  const filteredProducts = useMemo(() => {
    if (activeCategory === "Alle") return shopProducts;
    return shopProducts.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  const cartItems = useMemo(() => {
    return Object.entries(cart)
      .map(([productId, quantity]) => {
        const product = shopProducts.find((item) => item.id === productId);
        if (!product) return null;
        return { product, quantity, total: product.price * quantity };
      })
      .filter(Boolean) as Array<{
      product: (typeof shopProducts)[number];
      quantity: number;
      total: number;
    }>;
  }, [cart]);

  const subtotal = cartItems.reduce((sum, item) => sum + item.total, 0);
  const shipping = form.pickup || subtotal === 0 ? 0 : subtotal >= 35 ? 0 : 2;
  const total = subtotal + shipping;

  const addToCart = (productId: string) => {
    setCart((prev) => ({ ...prev, [productId]: (prev[productId] ?? 0) + 1 }));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    setCart((prev) => {
      if (quantity <= 0) {
        const next = { ...prev };
        delete next[productId];
        return next;
      }
      return { ...prev, [productId]: quantity };
    });
  };

  const orderMessage = useMemo(() => {
    if (cartItems.length === 0) return "";
    const lines = [
      "Bestellung von anjas.ch",
      "",
      "Artikel:",
      ...cartItems.map(
        (item) =>
          `- ${item.quantity}x ${item.product.name} (${formatCHF(item.product.price)}) = ${formatCHF(item.total)}`
      ),
      "",
      `Zwischensumme: ${formatCHF(subtotal)}`,
      `Versand: ${formatCHF(shipping)}`,
      `Total: ${formatCHF(total)}`,
      "",
      `Zahlungsart: ${form.payment}`,
      form.pickup ? "Abholung: Ja (Belp oder Bern)" : "Abholung: Nein",
      "",
      `Name: ${form.name || ""}`,
      `E-Mail: ${form.email || ""}`,
      `Adresse: ${form.address || ""}`,
      form.note ? `Notiz: ${form.note}` : "",
    ];
    return lines.join("\n").replace(/\n{3,}/g, "\n\n").trim();
  }, [cartItems, form, shipping, subtotal, total]);

  const sendOrder = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (cartItems.length === 0) {
      setOrderError("Der Warenkorb ist noch leer.");
      return;
    }
    if (!form.name.trim() || !form.email.trim()) {
      setOrderError("Bitte Name und E-Mail ausfüllen.");
      return;
    }
    const subject = encodeURIComponent("Bestellung anjas.ch");
    const body = encodeURIComponent(orderMessage);
    window.location.href = `mailto:${site.orderEmail}?subject=${subject}&body=${body}`;
    setOrderError("");
  };

  return (
    <div className="py-14 md:py-20">
      <div className={shell}>
        <header className="max-w-2xl">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-muted">Shop</p>
          <h1 className="mt-3 font-serif text-5xl text-ink sm:text-7xl">Kunstbilder und Karten</h1>
          <p className="mt-5 text-lg text-muted">
            Originalbilder folgen bald. Aktuell sind Grusskarten als hochwertige Drucke
            meiner selbstgemalten Bilder verfügbar.
          </p>
        </header>

        <div className="mt-10 flex flex-wrap gap-x-5 gap-y-3 border-y border-line py-4" role="toolbar" aria-label="Kategorien">
          {categories.map((category) => {
            const selected = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                aria-pressed={selected}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "text-[0.72rem] uppercase tracking-[0.2em]",
                  selected ? "text-ink" : "text-muted hover:text-ink"
                )}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="mt-12 grid gap-14 lg:grid-cols-[minmax(0,1.6fr)_minmax(280px,0.8fr)]">
          <ul className="grid gap-10 sm:grid-cols-2">
            {filteredProducts.map((product) => (
              <li key={product.id} className="flex flex-col">
                <div className="bg-mat p-3 ring-1 ring-ink/8">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={product.width}
                    height={product.height}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 40vw, 28vw"
                    className="h-auto w-full"
                  />
                </div>
                <p className="mt-4 text-[0.68rem] uppercase tracking-[0.2em] text-muted">
                  {product.category}
                </p>
                <h2 className="mt-1 font-serif text-3xl text-ink">{product.name}</h2>
                <p className="mt-2 text-sm text-muted">
                  {formatCHF(product.price)} · Lieferzeit {product.deliveryTime}
                </p>
                <ul className="mt-3 space-y-1 text-sm text-muted">
                  {product.description.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => addToCart(product.id)}
                  className="mt-5 w-fit bg-ink px-5 py-2.5 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-paper hover:bg-spruce"
                >
                  In den Warenkorb
                </button>
              </li>
            ))}
          </ul>

          <aside className="h-fit bg-mat p-6 ring-1 ring-ink/8 lg:sticky lg:top-24">
            <h2 className="font-serif text-3xl text-ink">Warenkorb</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Versandkosten: CHF 2.00 pro Bestellung in die Schweiz, versandkostenfrei
              ab CHF 35.00.
            </p>

            <div className="mt-6 space-y-4" aria-live="polite">
              {cartItems.length === 0 ? (
                <p className="text-sm text-muted">Dein Warenkorb ist noch leer.</p>
              ) : (
                cartItems.map((item) => (
                  <div key={item.product.id} className="border-b border-line pb-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm text-ink">{item.product.name}</p>
                        <p className="text-xs text-muted">{formatCHF(item.product.price)}</p>
                      </div>
                      <p className="text-sm text-ink">{formatCHF(item.total)}</p>
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <button
                        type="button"
                        aria-label={`${item.product.name} verringern`}
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="h-8 w-8 border border-line text-ink hover:border-ink"
                      >
                        −
                      </button>
                      <span className="min-w-6 text-center text-sm">{item.quantity}</span>
                      <button
                        type="button"
                        aria-label={`${item.product.name} erhöhen`}
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="h-8 w-8 border border-line text-ink hover:border-ink"
                      >
                        +
                      </button>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.product.id, 0)}
                        className="ml-auto text-xs uppercase tracking-[0.14em] text-muted hover:text-ink"
                      >
                        Entfernen
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            <dl className="mt-6 space-y-2 text-sm text-muted">
              <div className="flex justify-between">
                <dt>Zwischensumme</dt>
                <dd className="text-ink">{formatCHF(subtotal)}</dd>
              </div>
              <div className="flex justify-between">
                <dt>Versand</dt>
                <dd className="text-ink">{formatCHF(shipping)}</dd>
              </div>
              <div className="flex justify-between border-t border-line pt-3 text-base text-ink">
                <dt>Total</dt>
                <dd>{formatCHF(total)}</dd>
              </div>
            </dl>

            <form onSubmit={sendOrder} className="mt-8 space-y-4" noValidate>
              <fieldset className="space-y-3">
                <legend className="text-[0.68rem] uppercase tracking-[0.18em] text-muted">
                  Bestelldaten
                </legend>
                <div>
                  <label htmlFor="order-name" className="sr-only">Name</label>
                  <input
                    id="order-name"
                    type="text"
                    autoComplete="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={(event) => setForm({ ...form, name: event.target.value })}
                    className="w-full border-b border-line bg-transparent py-2 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="order-email" className="sr-only">E-Mail</label>
                  <input
                    id="order-email"
                    type="email"
                    autoComplete="email"
                    placeholder="E-Mail"
                    value={form.email}
                    onChange={(event) => setForm({ ...form, email: event.target.value })}
                    className="w-full border-b border-line bg-transparent py-2 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="order-address" className="sr-only">Adresse</label>
                  <textarea
                    id="order-address"
                    rows={3}
                    autoComplete="street-address"
                    placeholder="Adresse"
                    value={form.address}
                    onChange={(event) => setForm({ ...form, address: event.target.value })}
                    className="w-full border-b border-line bg-transparent py-2 text-sm"
                  />
                </div>
              </fieldset>

              <fieldset>
                <legend className="text-[0.68rem] uppercase tracking-[0.18em] text-muted">
                  Zahlungsart
                </legend>
                <div className="mt-3 grid gap-2">
                  {paymentOptions.map((option) => (
                    <label
                      key={option}
                      className={cn(
                        "flex cursor-pointer items-center justify-between border px-3 py-2 text-sm",
                        form.payment === option ? "border-ink text-ink" : "border-line text-muted"
                      )}
                    >
                      <span>{option}</span>
                      <input
                        type="radio"
                        name="payment"
                        value={option}
                        checked={form.payment === option}
                        onChange={() => setForm({ ...form, payment: option })}
                      />
                    </label>
                  ))}
                </div>
              </fieldset>

              <label className="flex items-center gap-2 text-sm text-muted">
                <input
                  type="checkbox"
                  checked={form.pickup}
                  onChange={(event) => setForm({ ...form, pickup: event.target.checked })}
                />
                Abholung in Belp oder Bern
              </label>

              <div>
                <label htmlFor="order-note" className="sr-only">Notiz</label>
                <textarea
                  id="order-note"
                  rows={3}
                  placeholder="Notiz"
                  value={form.note}
                  onChange={(event) => setForm({ ...form, note: event.target.value })}
                  className="w-full border-b border-line bg-transparent py-2 text-sm"
                />
              </div>

              {orderError ? (
                <p role="alert" className="text-sm text-danger">
                  {orderError}
                </p>
              ) : null}

              <button
                type="submit"
                className="w-full bg-ink px-4 py-3 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-paper hover:bg-spruce disabled:cursor-not-allowed disabled:bg-paper-deep disabled:text-muted"
                disabled={!orderMessage}
              >
                Bestellung per E-Mail senden
              </button>
            </form>
          </aside>
        </div>

        <div className="mt-16 max-w-3xl space-y-4 text-sm leading-relaxed text-muted">
          <p>
            Alle Artikel können mit Paypal, Banküberweisung oder Twint bezahlt
            werden. Ausserdem ist eine Abholung in Belp oder Bern möglich. Bei Fragen
            kontaktiere mich gerne über das Kontaktformular!
          </p>
          <p>
            Weitere Originalbilder zu verkaufen auf Saatchi Art:{" "}
            <a
              href={site.saatchi}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              Link zu Saatchi Art
              <span className="sr-only"> (öffnet in neuem Tab)</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
