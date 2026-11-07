import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import PageFallback from "@/components/PageFallback";
import ProductDetail from "@/components/ProductDetail";
import { getApps, getProduct } from "@/data/products";

export function generateStaticParams() {
  return getApps().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/apps/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const product = getProduct("app", slug);
  return product ? { title: product.name, description: product.tagline } : {};
}

// params is URL data: read it inside Suspense so the shared App Shell stays URL-independent.
async function AppDetail({ params }: Pick<PageProps<"/apps/[slug]">, "params">) {
  const { slug } = await params;
  const product = getProduct("app", slug);
  if (!product) notFound();
  return <ProductDetail product={product} />;
}

export default function AppDetailPage(props: PageProps<"/apps/[slug]">) {
  return (
    <Suspense fallback={<PageFallback />}>
      <AppDetail params={props.params} />
    </Suspense>
  );
}
