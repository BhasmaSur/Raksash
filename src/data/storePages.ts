/**
 * Content for the pages app stores ask for (privacy policy, support).
 * A product gets /games/<slug>/privacy and /games/<slug>/support only if it has an entry here.
 */
import { profile } from "./profile";

export type PolicySection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type Faq = { q: string; a: string };

export type StorePages = {
  /** Shown as "Last updated" on the privacy policy. Update it whenever the policy changes. */
  lastUpdated: string;
  contactEmail: string;
  privacy: PolicySection[];
  faq: Faq[];
};

const poofEmail = profile.email;

export const storePages: Record<string, StorePages> = {
  poof: {
    lastUpdated: "7 November 2026",
    contactEmail: poofEmail,
    privacy: [
      {
        heading: "Overview",
        paragraphs: [
          "This privacy policy explains what information the Poof mobile game (\"Poof\", \"the app\") handles on Android and iOS, why, and the choices you have. Poof has no accounts, no sign-up and no login.",
        ],
      },
      {
        heading: "Information we handle",
        bullets: [
          "Nickname: the name you type to show other players in a room (up to 16 characters). Don't use your real name if you'd rather not. It's saved only on your device so you don't need to type it again.",
          "Gameplay messages: when you play online, the app sends your nickname, the room code, and your taps and throws to the Poof game server so the round can be played. These are kept only in the server's memory while the room is open, and are discarded when everyone leaves. We don't store them in a database or use them to identify you.",
          "Technical connection data: like any internet service, our server host (Render) may briefly keep standard connection logs such as IP addresses for security and reliability.",
          "Playing vs CPU happens entirely on your device, and no gameplay data is sent anywhere.",
        ],
      },
      {
        heading: "Advertising",
        paragraphs: [
          "Poof is free and shows ads through Google AdMob. To show and measure ads, Google may collect information from your device, such as its advertising ID, IP address, device and app information, and how you interact with ads. Google handles this information under its own privacy policy.",
          "If you are in the European Economic Area, the United Kingdom or Switzerland, the app asks for your consent before personalised ads are shown, using Google's consent tool. If you don't consent, you may still see non-personalised ads.",
        ],
        bullets: [
          "Google Privacy Policy: https://policies.google.com/privacy",
          "How Google uses data from apps that use its services: https://policies.google.com/technologies/partner-sites",
          "You can reset or limit your advertising ID in your device settings (Android: Settings → Google → Ads; iOS: Settings → Privacy & Security → Tracking / Apple Advertising).",
        ],
      },
      {
        heading: "What we don't do",
        bullets: [
          "We don't ask for your location, contacts, camera, microphone or photos.",
          "We don't sell your personal information.",
          "We don't build profiles of players or link your nickname to your identity.",
        ],
      },
      {
        heading: "Children",
        paragraphs: [
          "Poof is not directed at children under 13, and we don't knowingly collect personal information from them. If you believe a child has provided personal information through the app, contact us and we will help remove it.",
        ],
      },
      {
        heading: "Keeping and deleting your data",
        paragraphs: [
          "Your nickname stays on your device until you change it, clear the app's data or uninstall the app. Online game data is deleted from the server automatically when a room closes. Because we don't keep accounts or player records, there is nothing else for us to delete. You can still email us with any request about your data and we'll respond.",
        ],
      },
      {
        heading: "Security",
        paragraphs: [
          "The server controls the game rules, and the app sends only the minimum needed to play. No method of transmission over the internet is completely secure, but we keep the data we handle as limited and short-lived as possible.",
        ],
      },
      {
        heading: "Changes to this policy",
        paragraphs: [
          "If we change how Poof handles information, we'll update this page and the \"Last updated\" date above.",
        ],
      },
    ],
    faq: [
      {
        q: "How do I play with friends?",
        a: "One player taps Create to get a 4-letter room code. Everyone else taps Join and enters that code. Rooms take 2 to 12 players. Once everyone is in, the host starts the round.",
      },
      {
        q: "How do I pass the bomb?",
        a: "Tap the bomb to add time to the hidden fuse, then fling it off any edge of your screen. Your screen edge is split into secret slices, one per player, so the direction you swipe decides who gets it. When the fuse runs out, whoever is holding the bomb is out.",
      },
      {
        q: "Can I play without internet?",
        a: "Yes. Play vs CPU works fully offline against 1–11 bots, with a difficulty setting.",
      },
      {
        q: "I can't join a room. What should I do?",
        a: "Check that the code is typed correctly and that the room hasn't already started or emptied. Rooms close when everyone leaves. Make sure you have a stable internet connection, then try creating a new room.",
      },
      {
        q: "Why do I see ads?",
        a: "Ads keep Poof free. They appear only at natural breaks, such as when you create a room or between games, never while the bomb is in play.",
      },
      {
        q: "How do I delete my data?",
        a: "Poof has no accounts. Your nickname is stored only on your phone, so uninstalling the app or clearing its data removes it. Online game data is deleted automatically when a room closes. See the privacy policy for details.",
      },
    ],
  },
};

export const getStorePages = (slug: string) => storePages[slug];
