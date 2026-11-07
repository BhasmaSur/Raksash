import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import PageFallback from "@/components/PageFallback";
import ProductDetail from "@/components/ProductDetail";
import { getGames, getProduct } from "@/data/products";

export function generateStaticParams() {
  return getGames().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/games/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const product = getProduct("game", slug);
  return product ? { title: product.name, description: product.tagline } : {};
}

// params is URL data: read it inside Suspense so the shared App Shell stays URL-independent.
async function GameDetail({ params }: Pick<PageProps<"/games/[slug]">, "params">) {
  const { slug } = await params;
  const product = getProduct("game", slug);
  if (!product) notFound();
  return <ProductDetail product={product} />;
}

export default function GameDetailPage(props: PageProps<"/games/[slug]">) {
  return (
    <Suspense fallback={<PageFallback />}>
      <GameDetail params={props.params} />
    </Suspense>
  );
}
