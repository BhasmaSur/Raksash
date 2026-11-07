import Link from "next/link";
import type { ReactNode } from "react";
import { type Product, productHref } from "@/data/products";
import { getStorePages, type PolicySection } from "@/data/storePages";
import ProductIcon from "./ProductIcon";

/** Shared layout for store-required pages (privacy policy, support) of a product. */
export default function StorePageShell({
  product,
  title,
  subtitle,
  children,
}: {
  product: Product;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  const base = productHref(product);
  return (
    <div>
      <section className="relative isolate overflow-hidden">
        <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${product.gradient} opacity-20`} />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-[#05030f]" />
        <div className="mx-auto max-w-3xl px-4 pb-12 pt-14 sm:px-6 sm:pt-20">
          <Link href={base} className="text-sm text-white/60 hover:text-white">
            ← {product.name}
          </Link>
          <div className="mt-6 flex items-center gap-4">
            <ProductIcon product={product} px={56} className="h-14 w-14 rounded-2xl text-3xl" />
            <div>
              <h1 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h1>
              {subtitle && <p className="mt-1 text-sm text-white/60">{subtitle}</p>}
            </div>
          </div>
          <nav className="mt-8 flex flex-wrap gap-2 text-sm">
            {[
              { label: "About", href: base },
              { label: "Support", href: `${base}/support` },
              { label: "Privacy policy", href: `${base}/privacy` },
              ...(getStorePages(product.slug)?.terms ? [{ label: "Terms of service", href: `${base}/terms` }] : []),
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-white/80 hover:bg-white/10 hover:text-white"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </section>
      <div className="mx-auto max-w-3xl px-4 sm:px-6">{children}</div>
    </div>
  );
}

/** A legal document (privacy policy, terms) made of headed sections, ending with a contact line. */
export function PolicyArticle({
  product,
  sections,
  contactEmail,
  contactPrompt,
}: {
  product: Product;
  sections: PolicySection[];
  contactEmail: string;
  contactPrompt: string;
}) {
  return (
    <article className="space-y-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-10">
      {sections.map((s) => (
        <section key={s.heading}>
          <h2 className="font-display text-xl font-bold text-white">{s.heading}</h2>
          {s.paragraphs?.map((p) => (
            <p key={p} className="mt-3 leading-relaxed text-white/70">
              <Linkify text={p} />
            </p>
          ))}
          {s.bullets && (
            <ul className="mt-3 space-y-2">
              {s.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 leading-relaxed text-white/70">
                  <span className={`mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r ${product.gradient}`} />
                  <span>
                    <Linkify text={b} />
                  </span>
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
      <section>
        <h2 className="font-display text-xl font-bold text-white">Contact</h2>
        <p className="mt-3 leading-relaxed text-white/70">
          {contactPrompt} Email{" "}
          <a href={`mailto:${contactEmail}`} className="text-white underline decoration-white/30 underline-offset-2">
            {contactEmail}
          </a>
          .
        </p>
      </section>
    </article>
  );
}

/** Turns bare https:// URLs inside plain text into links. */
export function Linkify({ text }: { text: string }) {
  const parts = text.split(/(https:\/\/[^\s]+)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("https://") ? (
          <a key={i} href={part} target="_blank" rel="noreferrer" className="break-all text-white underline decoration-white/30 underline-offset-2 hover:decoration-white">
            {part}
          </a>
        ) : (
          part
        ),
      )}
    </>
  );
}
