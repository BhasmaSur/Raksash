import Link from "next/link";
import GradientBlobs from "@/components/GradientBlobs";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <GradientBlobs />
      <p className="bg-gradient-to-r from-pink-400 via-violet-400 to-cyan-300 bg-clip-text font-display text-8xl font-bold text-transparent">404</p>
      <h1 className="mt-4 font-display text-2xl font-bold text-white">Poof — this page vanished.</h1>
      <Link href="/" className="mt-8 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 px-6 py-3 font-semibold text-white">
        Back home
      </Link>
    </section>
  );
}
