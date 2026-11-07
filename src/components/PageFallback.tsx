/** Suspense fallback for pages whose content depends on the URL (params). */
export default function PageFallback() {
  return (
    <div aria-hidden className="mx-auto max-w-6xl animate-pulse px-4 pt-20 sm:px-6">
      <div className="h-4 w-24 rounded-full bg-white/10" />
      <div className="mt-8 flex items-center gap-6">
        <div className="h-28 w-28 rounded-3xl bg-white/10" />
        <div className="space-y-3">
          <div className="h-10 w-64 rounded-xl bg-white/10" />
          <div className="h-5 w-80 max-w-full rounded-full bg-white/5" />
        </div>
      </div>
      <div className="mt-16 h-80 rounded-3xl bg-white/[0.03]" />
    </div>
  );
}
