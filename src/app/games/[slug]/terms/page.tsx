import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import PageFallback from "@/components/PageFallback";
import StorePageShell, { PolicyArticle } from "@/components/StorePageShell";
import { getProduct } from "@/data/products";
import { getStorePages, storePages } from "@/data/storePages";

export function generateStaticParams() {
  return Object.entries(storePages)
    .filter(([slug, pages]) => pages.terms && getProduct("game", slug))
    .map(([slug]) => ({ slug }));
}

export async function generateMetadata(props: PageProps<"/games/[slug]/terms">): Promise<Metadata> {
  const { slug } = await props.params;
  const product = getProduct("game", slug);
  return product ? { title: `${product.name} Terms of Service`, description: `Terms of service for the ${product.name} app.` } : {};
}

// params is URL data: read it inside Suspense so the shared App Shell stays URL-independent.
async function TermsContent({ params }: Pick<PageProps<"/games/[slug]/terms">, "params">) {
  const { slug } = await params;
  const product = getProduct("game", slug);
  const pages = getStorePages(slug);
  if (!product || !pages?.terms) notFound();

  return (
    <StorePageShell
      product={product}
      title="Terms of Service"
      subtitle={`${product.name} · Last updated ${pages.termsLastUpdated ?? pages.lastUpdated}`}
    >
      <PolicyArticle
        product={product}
        sections={pages.terms}
        contactEmail={pages.contactEmail}
        contactPrompt="Questions about these terms?"
      />
    </StorePageShell>
  );
}

export default function TermsPage(props: PageProps<"/games/[slug]/terms">) {
  return (
    <Suspense fallback={<PageFallback />}>
      <TermsContent params={props.params} />
    </Suspense>
  );
}
