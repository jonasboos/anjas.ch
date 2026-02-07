"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { shopProducts } from "@/lib/shop-data";
import { cn } from "@/lib/utils";

const categories = ["Alle", "Blumen", "Mandala", "Landschaft", "Tier"] as const;
const paymentOptions = ["Paypal", "Bankueberweisung", "Twint", "Abholung"] as const;

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

const formatCHF = (value: number) =>
  new Intl.NumberFormat("de-CH", {
    style: "currency",
    currency: "CHF",
    minimumFractionDigits: 2,
  }).format(value);

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>(
    "Alle"
  );
  const [cart, setCart] = useState<CartState>({});
  const [form, setForm] = useState<OrderForm>({
    name: "",
    email: "",
    address: "",
    note: "",
    payment: "Paypal",
    pickup: false,
  });

  const filteredProducts = useMemo(() => {
    if (activeCategory === "Alle") {
      return shopProducts;
    }
    return shopProducts.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  const cartItems = useMemo(() => {
    return Object.entries(cart)
      .map(([productId, quantity]) => {
        const product = shopProducts.find((item) => item.id === productId);
        if (!product) {
          return null;
        }
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
    setCart((prev) => ({
      ...prev,
      [productId]: (prev[productId] ?? 0) + 1,
    }));
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
    if (cartItems.length === 0) {
      return "";
    }

    const lines = [
      "Bestellung von anjas.ch",
      "",
      "Artikel:",
      ...cartItems.map((item) =>
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

  const messageLink = useMemo(() => {
    if (!orderMessage) {
      return "";
    }
    const subject = encodeURIComponent("Bestellung anjas.ch");
    const body = encodeURIComponent(orderMessage);
    return `mailto:mail@anjas.ch?subject=${subject}&body=${body}`;
  }, [orderMessage]);

  return (
    <div className="min-h-screen px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.3em] text-zinc-600">
            Shop
          </span>
          <h1 className="text-4xl font-light tracking-tight text-white sm:text-5xl">
            Kunstbilder und Karten
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-500">
            Originalbilder folgen bald. Aktuell sind Grusskarten als hochwertige Drucke
            meiner selbstgemalten Bilder verfuegbar.
          </p>
        </motion.div>

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                activeCategory === category
                  ? "bg-white text-black"
                  : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
          <div className="grid gap-8 sm:grid-cols-2">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950/70"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="space-y-4 p-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                      {product.category}
                    </p>
                    <h2 className="mt-2 text-lg font-semibold text-white">
                      {product.name}
                    </h2>
                    <p className="mt-2 text-sm text-zinc-500">
                      {formatCHF(product.price)} · Lieferzeit {product.deliveryTime}
                    </p>
                  </div>
                  <ul className="space-y-1 text-sm text-zinc-400">
                    {product.description.map((item) => (
                      <li key={item}>- {item}</li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={() => addToCart(product.id)}
                    className="w-full rounded-full bg-white py-2 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
                  >
                    In den Warenkorb
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <aside className="rounded-2xl border border-zinc-900 bg-zinc-950/70 p-6">
            <h2 className="text-lg font-semibold text-white">Warenkorb</h2>
            <p className="mt-2 text-sm text-zinc-500">
              Versandkosten: 2.00 CHF pro Bestellung in die Schweiz, versandkostenfrei
              ab 35.00 CHF.
            </p>

            <div className="mt-6 space-y-4">
              {cartItems.length === 0 ? (
                <p className="text-sm text-zinc-500">
                  Dein Warenkorb ist noch leer.
                </p>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.product.id}
                    className="rounded-xl border border-zinc-900 bg-black/40 p-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-medium text-white">
                          {item.product.name}
                        </p>
                        <p className="text-xs text-zinc-500">
                          {formatCHF(item.product.price)}
                        </p>
                      </div>
                      <div className="text-sm font-medium text-white">
                        {formatCHF(item.total)}
                      </div>
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="h-8 w-8 rounded-full border border-zinc-800 text-sm text-zinc-400 hover:text-white"
                      >
                        -
                      </button>
                      <span className="text-sm text-white">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="h-8 w-8 rounded-full border border-zinc-800 text-sm text-zinc-400 hover:text-white"
                      >
                        +
                      </button>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.product.id, 0)}
                        className="ml-auto text-xs text-zinc-500 hover:text-white"
                      >
                        Entfernen
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="mt-6 space-y-2 text-sm text-zinc-400">
              <div className="flex items-center justify-between">
                <span>Zwischensumme</span>
                <span className="text-white">{formatCHF(subtotal)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Versand</span>
                <span className="text-white">{formatCHF(shipping)}</span>
              </div>
              <div className="flex items-center justify-between border-t border-zinc-900 pt-3 text-base font-semibold text-white">
                <span>Total</span>
                <span>{formatCHF(total)}</span>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                  Bestelldaten
                </label>
                <div className="mt-3 space-y-3">
                  <input
                    type="text"
                    placeholder="Name"
                    value={form.name}
                    onChange={(event) => setForm({ ...form, name: event.target.value })}
                    className="w-full rounded-md border border-zinc-800 bg-black/50 px-3 py-2 text-sm text-white"
                  />
                  <input
                    type="email"
                    placeholder="E-Mail"
                    value={form.email}
                    onChange={(event) => setForm({ ...form, email: event.target.value })}
                    className="w-full rounded-md border border-zinc-800 bg-black/50 px-3 py-2 text-sm text-white"
                  />
                  <textarea
                    rows={3}
                    placeholder="Adresse"
                    value={form.address}
                    onChange={(event) => setForm({ ...form, address: event.target.value })}
                    className="w-full rounded-md border border-zinc-800 bg-black/50 px-3 py-2 text-sm text-white"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                  Zahlungsart
                </label>
                <div className="mt-3 grid gap-2">
                  {paymentOptions.map((option) => (
                    <label
                      key={option}
                      className={cn(
                        "flex cursor-pointer items-center justify-between rounded-md border px-3 py-2 text-sm",
                        form.payment === option
                          ? "border-white text-white"
                          : "border-zinc-800 text-zinc-400 hover:text-white"
                      )}
                    >
                      <span>{option}</span>
                      <input
                        type="radio"
                        name="payment"
                        value={option}
                        checked={form.payment === option}
                        onChange={() => setForm({ ...form, payment: option })}
                        className="h-3 w-3"
                      />
                    </label>
                  ))}
                </div>
              </div>

              <label className="flex items-center gap-2 text-sm text-zinc-400">
                <input
                  type="checkbox"
                  checked={form.pickup}
                  onChange={(event) =>
                    setForm({ ...form, pickup: event.target.checked })
                  }
                  className="h-4 w-4"
                />
                Abholung in Belp oder Bern
              </label>

              <textarea
                rows={3}
                placeholder="Notiz"
                value={form.note}
                onChange={(event) => setForm({ ...form, note: event.target.value })}
                className="w-full rounded-md border border-zinc-800 bg-black/50 px-3 py-2 text-sm text-white"
              />
            </div>

            <div className="mt-8">
              <label className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                Nachricht fuer das Kontaktformular
              </label>
              <textarea
                rows={8}
                value={orderMessage}
                readOnly
                className="mt-3 w-full rounded-md border border-zinc-800 bg-black/60 px-3 py-2 text-xs text-zinc-200"
                placeholder="Fuelle den Warenkorb, um eine Nachricht zu erstellen."
              />
              <a
                href={orderMessage ? messageLink : "#"}
                className={cn(
                  "mt-4 inline-flex w-full items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  orderMessage
                    ? "bg-white text-black hover:bg-zinc-200"
                    : "pointer-events-none bg-zinc-800 text-zinc-500"
                )}
                aria-disabled={!orderMessage}
              >
                Bestellung per E-Mail senden
              </a>
            </div>
          </aside>
        </div>

        <div className="mt-16 rounded-2xl border border-zinc-900 bg-zinc-950/70 p-8 text-sm text-zinc-400">
          <p>
            Alle Artikel koennen mit Paypal, Bankueberweisung oder Twint bezahlt
            werden. Ausserdem ist eine Abholung in Belp oder Bern moeglich. Bei Fragen
            kontaktiere mich gerne ueber das Kontaktformular!
          </p>
          <p className="mt-4">
            Weiter Originalbilder zu verkaufen auf Saatchi Art: {" "}
            <a
              href="https://www.saatchiart.com/AnjaBoos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline"
            >
              Link zu Saatchi Art
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
