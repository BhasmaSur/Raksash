import type { Product } from "@/data/products";
import GradientBlobs from "./GradientBlobs";
import ProductCard from "./ProductCard";

export default function CategoryPage({
  eyebrow,
  title,
  subtitle,
  gradient,
  items,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  gradient: string;
  items: Product[];
}) {
  return (
    <div className="relative isolate">
      <GradientBlobs className="h-[28rem]" />
      <section className="mx-auto max-w-6xl px-4 pb-10 pt-20 text-center sm:px-6">
        <p className={`bg-gradient-to-r ${gradient} bg-clip-text text-sm font-semibold uppercase tracking-[0.25em] text-transparent`}>
          {eyebrow}
        </p>
        <h1 className="mt-3 font-display text-5xl font-bold tracking-tight text-white sm:text-6xl">{title}</h1>
        <p className="mx-auto mt-4 max-w-xl text-white/60">{subtitle}</p>
      </section>
      <section className="mx-auto grid max-w-4xl gap-6 px-4 sm:grid-cols-2 sm:px-6">
        {items.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </section>
    </div>
  );
}
