import { profile } from "@/data/profile";

// AdMob verifies app ownership by fetching /app-ads.txt from the developer website
// listed on the Play Store / App Store page.
export function GET() {
  const id = profile.admobPublisherId.trim();
  if (!id) return new Response("Not found", { status: 404 });
  return new Response(`google.com, ${id}, DIRECT, f08c47fec0942fa0\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
