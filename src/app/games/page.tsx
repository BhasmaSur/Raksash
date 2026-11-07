import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";
import { getGames } from "@/data/products";

export const metadata: Metadata = { title: "Games", description: "Games built by Raksash." };

export default function GamesPage() {
  return (
    <CategoryPage
      eyebrow="Games"
      title="Made for fun"
      subtitle="Fast, colorful, bite-sized games built from scratch — game loops, physics and plenty of particles."
      gradient="from-yellow-300 via-orange-400 to-pink-400"
      items={getGames()}
    />
  );
}
