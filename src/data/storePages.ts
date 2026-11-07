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
  /** Optional Terms of Service; when present, /games/<slug>/terms is generated. */
  terms?: PolicySection[];
  termsLastUpdated?: string;
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
    termsLastUpdated: "7 November 2026",
    terms: [
      {
        heading: "Agreement",
        paragraphs: [
          "These terms apply to your use of the Poof mobile game (\"Poof\", \"the app\") on Android and iOS. By downloading or playing Poof, you agree to them. If you don't agree, please don't use the app.",
          "If you downloaded Poof from the Apple App Store, Apple's Standard Licensed Application End User License Agreement also applies, and Apple is not responsible for the app or its support. If you downloaded it from Google Play, Google Play's Terms of Service also apply.",
        ],
      },
      {
        heading: "Using Poof",
        paragraphs: [
          "Poof is free to download and play. We give you a personal, non-exclusive, non-transferable licence to use the app on devices you own or control, for your own entertainment.",
        ],
        bullets: [
          "Poof has no accounts and no in-app purchases.",
          "Online rooms need an internet connection. Play vs CPU works offline.",
          "You must be at least 13 years old to use Poof.",
        ],
      },
      {
        heading: "Fair play and nicknames",
        paragraphs: ["Poof is a party game, so keep it fun for everyone. When you play, you agree not to:"],
        bullets: [
          "Use a nickname that is offensive, hateful, sexual, or pretends to be someone else.",
          "Cheat, use bots or modified clients in online rooms, or interfere with other players' games.",
          "Attack, overload, reverse-engineer or try to gain unauthorised access to the Poof server or app, except where the law allows it.",
          "Use Poof for anything illegal.",
        ],
      },
      {
        heading: "Ads",
        paragraphs: [
          "Poof is supported by ads from Google AdMob. Ads are provided by third parties, and we don't control or endorse the products or services they promote. How ad data is handled is explained in the Privacy Policy.",
        ],
      },
      {
        heading: "Ownership",
        paragraphs: [
          "Poof, including its name, design, code, graphics and sounds, belongs to its developer and is protected by intellectual property laws. These terms don't give you any right to copy, modify, distribute or sell any part of the app.",
        ],
      },
      {
        heading: "Availability and changes",
        paragraphs: [
          "We may update, change or stop any part of Poof at any time, including the online game server, without notice. Online rooms may sometimes be unavailable, for example during maintenance or outages. We may block access to online play for anyone who breaks these terms.",
        ],
      },
      {
        heading: "Disclaimer",
        paragraphs: [
          "Poof is provided \"as is\" and \"as available\", without warranties of any kind, to the fullest extent permitted by law. We don't promise that the app will be uninterrupted, error-free or free of harmful components. Play responsibly and stay aware of your surroundings when flinging the bomb, especially when moving around with your phone.",
        ],
      },
      {
        heading: "Limitation of liability",
        paragraphs: [
          "To the fullest extent permitted by law, the developer of Poof is not liable for any indirect, incidental, special or consequential damages, or for any loss of data, device damage or interruption, arising from your use of or inability to use the app. Nothing in these terms limits any rights you have under consumer protection laws that can't be excluded.",
        ],
      },
      {
        heading: "Privacy",
        paragraphs: [
          "Our Privacy Policy explains what information Poof handles and why. You can read it at https://www.raksash.com/games/poof/privacy.",
        ],
      },
      {
        heading: "Changes to these terms",
        paragraphs: [
          "We may update these terms from time to time. When we do, we'll change the \"Last updated\" date above. If you keep using Poof after an update, you accept the new terms.",
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
