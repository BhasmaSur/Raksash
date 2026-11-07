"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { getApps, getGames, type Product, productHref } from "@/data/products";
import { homeSections, profile } from "@/data/profile";
import ProductIcon from "./ProductIcon";

type MenuLink = { label: string; href: string; product?: Product; hint?: string };
type MenuItem = { label: string; href: string; color: string; links: MenuLink[] };

const menu: MenuItem[] = [
  {
    label: "Home",
    href: "/",
    color: "from-pink-500 to-fuchsia-500",
    links: homeSections.map((s) => ({ label: s.label, href: `/#${s.id}` })),
  },
  {
    label: "Games",
    href: "/games",
    color: "from-amber-400 to-orange-500",
    links: [
      ...getGames().map((g) => ({ label: g.name, href: productHref(g), product: g, hint: g.tagline })),
      { label: "All games →", href: "/games" },
    ],
  },
  {
    label: "Apps",
    href: "/apps",
    color: "from-cyan-400 to-emerald-400",
    links: [
      ...getApps().map((a) => ({ label: a.name, href: productHref(a), product: a, hint: a.tagline })),
      { label: "All apps →", href: "/apps" },
    ],
  },
];

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
      className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
    >
      <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [openDesktop, setOpenDesktop] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  // Close menus on route change
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpenDesktop(null);
    setMobileOpen(false);
  }

  // Close desktop dropdown on outside click / Escape
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenDesktop(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenDesktop(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const close = () => {
    setOpenDesktop(null);
    setMobileOpen(false);
  };

  return (
    <header ref={navRef} className="sticky top-0 z-50 border-b border-white/10 bg-[#05030f]/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="group flex items-center gap-2" onClick={close}>
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-pink-500 via-violet-500 to-cyan-400 font-display text-lg font-bold text-white shadow-lg shadow-fuchsia-500/30 transition-transform group-hover:rotate-6">
            R
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-white">{profile.name}</span>
        </Link>

        {/* Desktop */}
        <ul className="hidden items-center gap-1 md:flex">
          {menu.map((item) => {
            const open = openDesktop === item.label;
            return (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDesktop(item.label)}
                onMouseLeave={() => setOpenDesktop(null)}
              >
                <button
                  type="button"
                  aria-expanded={open}
                  aria-haspopup="true"
                  onClick={() => setOpenDesktop(open ? null : item.label)}
                  className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive(item.href) ? "bg-white/10 text-white" : "text-white/70 hover:text-white"
                  }`}
                >
                  {item.label}
                  <Chevron open={open} />
                </button>

                <div
                  className={`absolute right-0 top-full pt-2 transition-all duration-200 ${
                    open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
                  }`}
                >
                  <div className="w-72 overflow-hidden rounded-2xl border border-white/10 bg-[#0d0a1f]/95 p-2 shadow-2xl shadow-black/50 backdrop-blur-xl">
                    <div className={`mb-2 h-1 rounded-full bg-gradient-to-r ${item.color}`} />
                    <Link
                      href={item.href}
                      onClick={close}
                      className="block rounded-xl px-3 py-2 text-xs font-semibold uppercase tracking-widest text-white/50 hover:text-white"
                    >
                      {item.label}
                    </Link>
                    {item.links.map((l) => (
                      <Link
                        key={l.href + l.label}
                        href={l.href}
                        onClick={close}
                        className="flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-white/5"
                      >
                        {l.product && <ProductIcon product={l.product} px={32} className="mt-0.5 h-8 w-8 rounded-lg text-lg" />}
                        <span>
                          <span className="block text-sm font-medium text-white">{l.label}</span>
                          {l.hint && <span className="block text-xs text-white/50">{l.hint}</span>}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </li>
            );
          })}
          <li>
            <Link
              href="/#contact"
              className="ml-2 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/25 transition hover:brightness-110"
            >
              Let&apos;s talk
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-white md:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="relative block h-3.5 w-5">
            <span className={`absolute left-0 h-0.5 w-5 rounded bg-current transition-all ${mobileOpen ? "top-1.5 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-1.5 h-0.5 w-5 rounded bg-current transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 h-0.5 w-5 rounded bg-current transition-all ${mobileOpen ? "top-1.5 -rotate-45" : "top-3"}`} />
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#05030f]/95 px-4 pb-6 pt-2 md:hidden">
          {menu.map((item) => {
            const open = mobileSection === item.label;
            return (
              <div key={item.label} className="border-b border-white/5">
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setMobileSection(open ? null : item.label)}
                  className="flex w-full items-center justify-between py-3 text-left font-display text-lg font-semibold text-white"
                >
                  <span className="flex items-center gap-3">
                    <span className={`h-2.5 w-2.5 rounded-full bg-gradient-to-r ${item.color}`} />
                    {item.label}
                  </span>
                  <Chevron open={open} />
                </button>
                {open && (
                  <div className="pb-3 pl-5">
                    {item.links.map((l) => (
                      <Link
                        key={l.href + l.label}
                        href={l.href}
                        onClick={close}
                        className="flex items-center gap-3 rounded-lg px-2 py-2 text-white/80 hover:bg-white/5 hover:text-white"
                      >
                        {l.product && <ProductIcon product={l.product} px={24} className="h-6 w-6 rounded-md text-sm" />}
                        {l.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          <Link
            href="/#contact"
            onClick={close}
            className="mt-4 block rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-500 px-4 py-3 text-center font-semibold text-white"
          >
            Let&apos;s talk
          </Link>
        </div>
      )}
    </header>
  );
}
