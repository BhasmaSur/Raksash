export default function GradientBlobs({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}>
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute -left-24 top-10 h-80 w-80 animate-blob rounded-full bg-pink-500/40 blur-3xl" />
      <div className="absolute right-0 top-0 h-96 w-96 animate-blob rounded-full bg-violet-600/40 blur-3xl [animation-delay:-4s]" />
      <div className="absolute bottom-0 left-1/3 h-80 w-80 animate-blob rounded-full bg-cyan-400/30 blur-3xl [animation-delay:-8s]" />
    </div>
  );
}
