import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import PageFallback from "@/components/PageFallback";
import StorePageShell, { PolicyArticle } from "@/components/StorePageShell";
import { getProduct } from "@/data/products";
import { getStorePages, storePages } from "@/data/storePages";

export function generateStaticParams() {
  return Object.keys(storePages)
    .filter((slug) => getProduct("game", slug))
    .map((slug) => ({ slug }));
}

export async function generateMetadata(props: PageProps<"/games/[slug]/privacy">): Promise<Metadata> {
  const { slug } = await props.params;
  const product = getProduct("game", slug);
  return product ? { title: `${product.name} Privacy Policy`, description: `Privacy policy for the ${product.name} app.` } : {};
}

// params is URL data: read it inside Suspense so the shared App Shell stays URL-independent.
async function PrivacyContent({ params }: Pick<PageProps<"/games/[slug]/privacy">, "params">) {
  const { slug } = await params;
  const product = getProduct("game", slug);
  const pages = getStorePages(slug);
  if (!product || !pages) notFound();

  return (
    <StorePageShell product={product} title="Privacy Policy" subtitle={`${product.name} · Last updated ${pages.lastUpdated}`}>
      <PolicyArticle
        product={product}
        sections={pages.privacy}
        contactEmail={pages.contactEmail}
        contactPrompt="Questions about this policy or your data?"
      />
    </StorePageShell>
  );
}

export default function PrivacyPage(props: PageProps<"/games/[slug]/privacy">) {
  return (
    <Suspense fallback={<PageFallback />}>
      <PrivacyContent params={props.params} />
    </Suspense>
  );
}
