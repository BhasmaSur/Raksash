import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import PageFallback from "@/components/PageFallback";
import StorePageShell, { Linkify } from "@/components/StorePageShell";
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
      <article className="space-y-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-10">
        {pages.privacy.map((s) => (
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
            Questions about this policy or your data? Email{" "}
            <a href={`mailto:${pages.contactEmail}`} className="text-white underline decoration-white/30 underline-offset-2">
              {pages.contactEmail}
            </a>
            .
          </p>
        </section>
      </article>
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
