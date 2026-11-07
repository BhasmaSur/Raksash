import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";
import { getApps } from "@/data/products";

export const metadata: Metadata = { title: "Apps", description: "Apps built by Raksash." };

export default function AppsPage() {
  return (
    <CategoryPage
      eyebrow="Apps"
      title="Useful things, well built"
      subtitle="Full stack products solving real problems — from planning trips to staying safe from scams."
      gradient="from-cyan-300 via-emerald-300 to-teal-300"
      items={getApps()}
    />
  );
}
