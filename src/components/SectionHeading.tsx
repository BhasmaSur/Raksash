export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  gradient = "from-pink-400 via-fuchsia-400 to-cyan-300",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  gradient?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className={`bg-gradient-to-r ${gradient} bg-clip-text text-sm font-semibold uppercase tracking-[0.25em] text-transparent`}>
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-white/60">{subtitle}</p>}
    </div>
  );
}
