import Image from "next/image";
import type { Product } from "@/data/products";

/**
 * A product's real app icon, falling back to its emoji on the gradient tile.
 * `className` sets size, rounding and (for the emoji) text size; `px` is the rendered width for image sizing.
 */
export default function ProductIcon({
  product,
  className = "",
  px,
}: {
  product: Pick<Product, "name" | "emoji" | "gradient" | "icon">;
  className?: string;
  px: number;
}) {
  if (!product.icon) {
    return (
      <span className={`grid shrink-0 place-items-center bg-gradient-to-br ${product.gradient} ${className}`}>
        {product.emoji}
      </span>
    );
  }
  const contain = product.icon.fit === "contain";
  return (
    <span className={`relative block shrink-0 overflow-hidden ${contain ? "bg-white/[0.06] ring-1 ring-white/10" : ""} ${className}`}>
      <Image
        src={product.icon.src}
        alt={`${product.name} icon`}
        fill
        sizes={`${px}px`}
        className={contain ? "object-contain p-[12%]" : "object-cover"}
      />
    </span>
  );
}
