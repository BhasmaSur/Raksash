import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import PageFallback from "@/components/PageFallback";
import StorePageShell from "@/components/StorePageShell";
import { getProduct, productHref } from "@/data/products";
import { getStorePages, storePages } from "@/data/storePages";

export function generateStaticParams() {
  return Object.keys(storePages)
    .filter((slug) => getProduct("game", slug))
    .map((slug) => ({ slug }));
}

export async function generateMetadata(props: PageProps<"/games/[slug]/support">): Promise<Metadata> {
  const { slug } = await props.params;
  const product = getProduct("game", slug);
  return product ? { title: `${product.name} Support`, description: `Help, FAQ and contact for ${product.name}.` } : {};
}

// params is URL data: read it inside Suspense so the shared App Shell stays URL-independent.
async function SupportContent({ params }: Pick<PageProps<"/games/[slug]/support">, "params">) {
  const { slug } = await params;
  const product = getProduct("game", slug);
  const pages = getStorePages(slug);
  if (!product || !pages) notFound();

  return (
    <StorePageShell product={product} title="Support" subtitle={`Help and answers for ${product.name}`}>
      <div className={`rounded-3xl bg-gradient-to-br ${product.gradient} p-px`}>
        <div className="flex flex-col gap-4 rounded-[calc(1.5rem-1px)] bg-[#0b0818]/95 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <h2 className="font-display text-xl font-bold text-white">Need help?</h2>
            <p className="mt-1 text-sm text-white/70">
              Bug reports, feedback and questions are welcome. Include your phone model and app version if something isn&apos;t working.
            </p>
          </div>
          <a
            href={`mailto:${pages.contactEmail}?subject=${encodeURIComponent(`${product.name} support`)}`}
            className={`shrink-0 rounded-full bg-gradient-to-r ${product.gradient} px-6 py-3 text-center font-semibold text-white`}
          >
            Email support
          </a>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="font-display text-2xl font-bold text-white">Frequently asked questions</h2>
        <div className="mt-5 space-y-3">
          {pages.faq.map((f) => (
            <details key={f.q} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 open:bg-white/[0.05]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-white">
                {f.q}
                <span className="text-white/50 transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 leading-relaxed text-white/70">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <p className="mt-10 text-sm text-white/50">
        Contact: <a href={`mailto:${pages.contactEmail}`} className="text-white/80 underline">{pages.contactEmail}</a> ·{" "}
        <Link href={`${productHref(product)}/privacy`} className="text-white/80 underline">
          Privacy policy
        </Link>
        {pages.terms && (
          <>
            {" · "}
            <Link href={`${productHref(product)}/terms`} className="text-white/80 underline">
              Terms of service
            </Link>
          </>
        )}
      </p>
    </StorePageShell>
  );
}

export default function SupportPage(props: PageProps<"/games/[slug]/support">) {
  return (
    <Suspense fallback={<PageFallback />}>
      <SupportContent params={props.params} />
    </Suspense>
  );
}
