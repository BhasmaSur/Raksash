import Link from "next/link";
import GradientBlobs from "@/components/GradientBlobs";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import { getApps, getGames, products } from "@/data/products";
import { journey, profile, skills } from "@/data/profile";

const domains = ["Payments", "Microservices", "Bookings", "Online safety", "Mobile apps", "Games"];

const stats = [
  { value: "9+", label: "Years of experience", color: "from-pink-400 to-fuchsia-400" },
  { value: "12+", label: "Microservices shipped", color: "from-cyan-300 to-emerald-300" },
  { value: `${getApps().length}`, label: "Apps", color: "from-violet-300 to-indigo-400" },
  { value: `${getGames().length}`, label: "Games", color: "from-amber-300 to-orange-400" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <GradientBlobs />
        <div className="mx-auto flex max-w-6xl flex-col items-center px-4 pb-24 pt-20 text-center sm:px-6 sm:pt-28">
          <span className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white/80 backdrop-blur">
            👋 Hi, I&apos;m {profile.name}
          </span>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-7xl">
            <span className="animate-gradient bg-gradient-to-r from-pink-400 via-violet-400 to-cyan-300 bg-[length:200%_auto] bg-clip-text text-transparent">
              {profile.role}
            </span>
            <br />
            building apps &amp; games.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">{profile.intro}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="#products"
              className="rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-500 px-7 py-3 font-semibold text-white shadow-xl shadow-fuchsia-500/30 transition hover:brightness-110"
            >
              See my products
            </Link>
            <Link
              href="#contact"
              className="rounded-full border border-white/20 bg-white/5 px-7 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              Get in touch
            </Link>
          </div>
          <div className="mt-14 flex flex-wrap justify-center gap-2">
            {domains.map((d) => (
              <span key={d} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-sm text-white/60">
                {d}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className={`bg-gradient-to-r ${s.color} bg-clip-text font-display text-4xl font-bold text-transparent`}>{s.value}</p>
              <p className="mt-1 text-sm text-white/60">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Journey */}
      <section id="journey" className="mx-auto max-w-4xl scroll-mt-24 px-4 pt-28 sm:px-6">
        <SectionHeading
          eyebrow="My journey"
          title="9+ years of building at scale"
          subtitle="From media advertising and platform engineering to cross-border payments, plus my own apps and games."
        />
        <ol className="relative ml-3 border-l border-white/10">
          {journey.map((j) => (
            <li key={j.title} className="mb-10 ml-8 last:mb-0">
              <span className={`absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full bg-gradient-to-br ${j.color} ring-4 ring-[#05030f]`} />
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.05]">
                <p className={`bg-gradient-to-r ${j.color} bg-clip-text text-xs font-semibold uppercase tracking-widest text-transparent`}>
                  {j.period}
                </p>
                <h3 className="mt-2 font-display text-xl font-bold text-white">{j.title}</h3>
                <p className="mt-2 text-white/65">{j.text}</p>
                {j.highlights && j.highlights.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {j.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-sm text-white/70">
                        <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r ${j.color}`} />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Products */}
      <section id="products" className="mx-auto max-w-6xl scroll-mt-24 px-4 pt-28 sm:px-6">
        <SectionHeading
          eyebrow="Products"
          title="Things I've built"
          subtitle="A mix of useful apps and playful games — each one designed, built and shipped end to end."
          gradient="from-amber-300 via-pink-400 to-violet-400"
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl scroll-mt-24 px-4 pt-28 sm:px-6">
        <SectionHeading
          eyebrow="Toolbox"
          title="Skills & tech stack"
          gradient="from-cyan-300 via-violet-400 to-pink-400"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <div key={s.group} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <div className={`h-1.5 w-12 rounded-full bg-gradient-to-r ${s.color}`} />
              <h3 className="mt-4 font-display text-lg font-bold text-white">{s.group}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <li key={i} className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-white/75">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-4 pt-28 sm:px-6">
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-gradient-to-br from-pink-500 via-violet-600 to-cyan-500 p-px">
          <div className="relative rounded-[calc(2rem-1px)] bg-[#0b0818]/90 px-6 py-16 text-center sm:px-12">
            <div aria-hidden className="absolute -top-20 left-1/2 -z-10 h-60 w-60 -translate-x-1/2 rounded-full bg-fuchsia-500/40 blur-3xl" />
            <h2 className="font-display text-3xl font-bold text-white sm:text-5xl">Have an idea? Let&apos;s build it.</h2>
            <p className="mx-auto mt-4 max-w-xl text-white/70">
              Open to freelance work, collaborations and full-time roles. Drop a message and I&apos;ll get back to you.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-8 inline-block rounded-full bg-white px-7 py-3 font-semibold text-[#0b0818] transition hover:scale-105"
            >
              {profile.email}
            </a>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {profile.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
