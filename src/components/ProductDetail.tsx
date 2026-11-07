import Link from "next/link";
import { type Product, products, productHref } from "@/data/products";
import { getStorePages } from "@/data/storePages";
import ProductCard from "./ProductCard";
import ProductIcon from "./ProductIcon";

export default function ProductDetail({ product }: { product: Product }) {
  const backHref = product.category === "app" ? "/apps" : "/games";
  const others = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <div>
      <section className="relative isolate overflow-hidden">
        <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${product.gradient} opacity-25`} />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-[#05030f]" />
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 sm:pt-20">
          <Link href={backHref} className="text-sm text-white/60 hover:text-white">
            ← All {product.category === "app" ? "apps" : "games"}
          </Link>
          <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-center">
            <ProductIcon product={product} px={112} className="h-28 w-28 animate-float rounded-3xl text-6xl shadow-2xl" />
            <div>
              <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/80">
                {product.category === "app" ? "App" : "Game"} · {product.status}
              </span>
              <h1 className="mt-4 font-display text-5xl font-bold tracking-tight text-white sm:text-6xl">{product.name}</h1>
              <p className={`mt-3 text-xl font-medium ${product.accent}`}>{product.tagline}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <h2 className="font-display text-2xl font-bold text-white">About</h2>
          <p className="mt-4 leading-relaxed text-white/70">{product.overview ?? product.description}</p>
          {product.platforms && product.platforms.length > 0 && (
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-white/40">Platforms</span>
              {product.platforms.map((p) => (
                <span key={p} className={`rounded-full bg-white/5 px-3 py-1 text-xs font-medium ${product.accent}`}>
                  {p}
                </span>
              ))}
            </div>
          )}
          <h3 className="mt-8 font-display text-xl font-bold text-white">Highlights</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {product.features.map((f) => (
              <li key={f} className="flex items-start gap-3 rounded-2xl bg-white/[0.04] p-4 text-sm text-white/80">
                <span className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-r ${product.gradient}`} />
                {f}
              </li>
            ))}
          </ul>
          {product.howItWorks && product.howItWorks.length > 0 && (
            <>
              <h3 className="mt-10 font-display text-xl font-bold text-white">How it works</h3>
              <ol className="mt-4 space-y-3">
                {product.howItWorks.map((step, i) => (
                  <li key={step} className="flex gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-4 text-sm leading-relaxed text-white/75">
                    <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gradient-to-br ${product.gradient} text-xs font-bold text-white`}>
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </>
          )}
          {product.why && (
            <>
              <h3 className="mt-10 font-display text-xl font-bold text-white">Why it matters</h3>
              <p className="mt-4 leading-relaxed text-white/70">{product.why}</p>
            </>
          )}
        </div>
        <aside className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <h2 className="font-display text-xl font-bold text-white">Built with</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {product.tech.map((t) => (
              <span key={t} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/80">
                {t}
              </span>
            ))}
          </div>
          {product.links && product.links.length > 0 && (
            <div className="mt-8 flex flex-col gap-3">
              {product.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`rounded-full bg-gradient-to-r ${product.gradient} px-5 py-3 text-center font-semibold text-white`}
                >
                  {l.label}
                </a>
              ))}
            </div>
          )}
          {getStorePages(product.slug) && product.category === "game" && (
            <div className="mt-8 flex flex-col gap-2 text-sm">
              <Link href={`${productHref(product)}/support`} className="text-white/70 underline-offset-4 hover:text-white hover:underline">
                Support &amp; FAQ →
              </Link>
              <Link href={`${productHref(product)}/privacy`} className="text-white/70 underline-offset-4 hover:text-white hover:underline">
                Privacy policy →
              </Link>
            </div>
          )}
          <Link href="/#contact" className="mt-8 block rounded-full border border-white/20 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-white/5">
            Ask me about {product.name}
          </Link>
        </aside>
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-2xl font-bold text-white">More from Raksash</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((p) => (
            <ProductCard key={productHref(p)} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
