import Link from "next/link";
import { getApps, getGames, productHref } from "@/data/products";
import { profile } from "@/data/profile";

async function currentYear() {
  "use cache";
  return new Date().getFullYear();
}

export default async function Footer() {
  const year = await currentYear();
  const cols = [
    { title: "Games", items: getGames().map((g) => ({ label: g.name, href: productHref(g) })) },
    { title: "Apps", items: getApps().map((a) => ({ label: a.name, href: productHref(a) })) },
    { title: "Elsewhere", items: profile.socials.map((s) => ({ label: s.label, href: s.href })) },
  ];
  return (
    <footer className="relative mt-24 border-t border-white/10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-400" />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div>
          <p className="font-display text-xl font-bold text-white">{profile.name}</p>
          <p className="mt-2 text-sm text-white/60">{profile.role} building apps &amp; games.</p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40">{c.title}</p>
            <ul className="mt-3 space-y-2">
              {c.items.map((i) => (
                <li key={i.label}>
                  <Link href={i.href} className="text-sm text-white/70 transition-colors hover:text-white">
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="pb-8 text-center text-xs text-white/40">
        © {year} {profile.name}. Crafted with Next.js &amp; Tailwind.
      </p>
    </footer>
  );
}
