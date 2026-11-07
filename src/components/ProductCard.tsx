import Link from "next/link";
import { type Product, productHref } from "@/data/products";
import ProductIcon from "./ProductIcon";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={productHref(product)}
      className={`group relative block rounded-3xl bg-gradient-to-br ${product.gradient} p-px transition-transform duration-300 hover:-translate-y-1.5`}
    >
      <div className={`absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br ${product.gradient} opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-40`} />
      <div className="flex h-full flex-col rounded-[calc(1.5rem-1px)] bg-[#0b0818]/95 p-6">
        <div className="flex items-start justify-between">
          <ProductIcon product={product} px={56} className="h-14 w-14 rounded-2xl text-3xl shadow-lg" />
          <span className="rounded-full border border-white/15 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/70">
            {product.category === "app" ? "App" : "Game"}
          </span>
        </div>
        <h3 className="mt-5 font-display text-2xl font-bold text-white">{product.name}</h3>
        <p className={`mt-1 bg-gradient-to-r ${product.gradient} bg-clip-text text-sm font-medium text-transparent`}>
          {product.tagline}
        </p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">{product.description}</p>
        <div className="mt-5 flex items-center justify-between">
          <span className="flex items-center gap-2 text-xs text-white/50">
            <span className={`h-2 w-2 rounded-full ${product.status === "Live" ? "bg-emerald-400" : product.status === "Beta" ? "bg-amber-400" : "bg-sky-400"}`} />
            {product.status}
          </span>
          <span className="text-sm font-semibold text-white transition-transform group-hover:translate-x-1">Explore →</span>
        </div>
      </div>
    </Link>
  );
}
