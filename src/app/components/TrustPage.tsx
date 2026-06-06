import { Link } from "react-router";
import { Mail, ShieldCheck, BadgeCheck, BookOpen, Megaphone, ExternalLink } from "lucide-react";
import {
  Seo,
  buildBreadcrumbJsonLd,
  buildOrganizationJsonLd,
  buildWebPageJsonLd,
} from "../seo";

type TrustPageConfig = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  icon: typeof ShieldCheck;
  updated: string;
  sections: Array<{
    heading: string;
    body: string[];
    bullets?: string[];
    links?: Array<{ label: string; href: string }>;
  }>;
};

const pages: Record<string, TrustPageConfig> = {
  about: {
    slug: "about",
    title: "About Roam China",
    eyebrow: "Editorial mission",
    description:
      "Roam China is a practical China travel planner for international visitors, focused on destination playbooks, itineraries, food routes, ticket friction, and transport setup.",
    icon: BookOpen,
    updated: "June 6, 2026",
    sections: [
      {
        heading: "What we publish",
        body: [
          "Roam China helps international visitors make practical trip decisions before they arrive in China. The site is organized around city guides, day-by-day routes, food planning, transport setup, official ticket checkpoints, and first-time visitor questions.",
          "The goal is to turn broad travel inspiration into specific planning decisions: where to go, how many days to spend, what to book early, where to stay, and what friction to prepare for.",
        ],
      },
      {
        heading: "Editorial standards",
        body: [
          "We separate official-source facts from opinionated route advice. When ticketing, transit, or visitor requirements may affect a trip, pages should point readers toward official sources and explain why the detail matters.",
        ],
        bullets: [
          "Destination pages include practical stay areas, transport notes, mistakes to avoid, official sources, and FAQs.",
          "Itineraries are written for passport-based bookings, mobile payment setup, and realistic transfer time.",
          "Food content connects regional cuisines to actual trip pacing instead of generic dish lists.",
          "Advertising is labeled and kept visually separate from navigation, booking, sharing, and download controls.",
        ],
      },
      {
        heading: "How this site earns revenue",
        body: [
          "Roam China may show Google display advertisements. Ads help support writing, design, hosting, and ongoing updates. Advertising does not determine our destination recommendations, route order, official-source links, or editorial conclusions.",
        ],
      },
    ],
  },
  contact: {
    slug: "contact",
    title: "Contact Roam China",
    eyebrow: "Corrections and partnerships",
    description:
      "Contact Roam China for corrections, source updates, travel guide feedback, advertising questions, and partnership inquiries.",
    icon: Mail,
    updated: "June 6, 2026",
    sections: [
      {
        heading: "General contact",
        body: [
          "For corrections, source updates, advertising questions, or partnership inquiries, email the editorial team. Include the page URL, the city or topic, and the specific detail that needs review.",
        ],
        bullets: [
          "Editorial corrections: editorial@cntripaimap.online",
          "Advertising and partnerships: ads@cntripaimap.online",
          "General site feedback: hello@cntripaimap.online",
        ],
      },
      {
        heading: "Correction requests",
        body: [
          "Travel information can change quickly. If an official source updates ticketing, transport, opening hours, payment requirements, or visitor rules, send the source URL and the affected page so we can review it.",
        ],
      },
      {
        heading: "Advertising inquiries",
        body: [
          "Roam China currently prioritizes clearly labeled display advertising and content-safe placements. We do not place ads in ways that hide the label, imitate navigation, or encourage accidental clicks.",
        ],
      },
    ],
  },
  "privacy-policy": {
    slug: "privacy-policy",
    title: "Privacy Policy",
    eyebrow: "Data, cookies, and ads",
    description:
      "Roam China privacy policy covering analytics, advertising, cookies, Google display ads, contact information, and visitor choices.",
    icon: ShieldCheck,
    updated: "June 6, 2026",
    sections: [
      {
        heading: "Information we collect",
        body: [
          "Roam China is a travel information website. We may receive basic technical information from browsers, hosting systems, analytics tools, and advertising systems, including pages viewed, approximate device or browser information, referral sources, and interaction events.",
          "If you contact us by email, we receive the information you choose to send, such as your email address, message, page URL, and correction details.",
        ],
      },
      {
        heading: "Google advertising and cookies",
        body: [
          "This site may use Google AdSense or related Google advertising products. Google and its partners may use cookies, web beacons, IP addresses, and similar technologies to serve ads, limit ad repetition, measure ad performance, and support fraud prevention.",
          "Google may use advertising cookies to serve ads based on a visitor's prior visits to this site or other websites. Visitors can manage personalized advertising choices through Google ad settings.",
        ],
        links: [
          {
            label: "Google Advertising Policies",
            href: "https://policies.google.com/technologies/ads",
          },
          {
            label: "Google Privacy Policy",
            href: "https://policies.google.com/privacy",
          },
        ],
      },
      {
        heading: "Analytics and performance",
        body: [
          "The site may use privacy-conscious analytics and hosting diagnostics to understand page performance, popular content, broken navigation, and technical errors. These tools help improve trip planning content and user experience.",
        ],
      },
      {
        heading: "Your choices",
        body: [
          "You can block or delete cookies through your browser settings. You can also use Google ad settings to manage personalized advertising preferences. Some site or advertising features may work differently if cookies are disabled.",
        ],
      },
      {
        heading: "Contact",
        body: [
          "For privacy questions or correction requests, contact privacy@cntripaimap.online. Include the relevant page URL and a short description of the request.",
        ],
      },
    ],
  },
  "advertising-policy": {
    slug: "advertising-policy",
    title: "Advertising Policy",
    eyebrow: "Ad labeling and separation",
    description:
      "Roam China advertising policy explaining display ad labeling, editorial independence, placement rules, and reader safety.",
    icon: Megaphone,
    updated: "June 6, 2026",
    sections: [
      {
        heading: "How ads appear",
        body: [
          "Roam China may display Google advertising units on the homepage, destination guides, itinerary pages, and long-form articles. Ad containers are labeled as Advertisements and are visually separated from editorial content.",
        ],
      },
      {
        heading: "Editorial independence",
        body: [
          "Display ads do not influence city rankings, itinerary order, ticket advice, official-source links, or food recommendations. Editorial pages are written to answer traveler questions first.",
        ],
      },
      {
        heading: "Placement standards",
        body: [
          "Ads should not imitate navigation, booking buttons, download buttons, share controls, or article actions. Placements should preserve spacing so readers can distinguish advertising from travel planning content.",
        ],
        bullets: [
          "Homepage ads sit between content sections or in a clearly labeled side rail.",
          "Destination and itinerary ads are placed after substantial planning content, not before the page has useful information.",
          "Article ads are labeled and separated from author, share, save, and feedback controls.",
        ],
      },
      {
        heading: "Sponsored content",
        body: [
          "If Roam China publishes sponsored content in the future, it should be clearly labeled and separated from independent editorial guides. Sponsored content should not override safety, official-source, or first-time visitor guidance.",
        ],
      },
    ],
  },
};

function TrustLayout({ page }: { page: TrustPageConfig }) {
  const Icon = page.icon;
  const path = `/${page.slug}`;

  return (
    <div className="min-h-screen bg-[#f7f7f2] text-slate-950">
      <Seo
        title={page.title}
        description={page.description}
        path={path}
        keywords={["Roam China", page.title, "China travel planning"]}
        jsonLd={[
          buildOrganizationJsonLd(),
          buildWebPageJsonLd({
            path,
            name: page.title,
            description: page.description,
            dateModified: "2026-06-06",
          }),
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: page.title, path },
          ]),
        ]}
      />

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold uppercase text-[#0f766e]">
            <Icon className="h-4 w-4" />
            {page.eyebrow}
          </div>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-slate-950 md:text-6xl">
            {page.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{page.description}</p>
          <p className="mt-4 text-sm font-medium text-slate-500">Last updated: {page.updated}</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6">
          {page.sections.map((section) => (
            <article key={section.heading} className="rounded-lg border border-slate-200 bg-white p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-slate-950">{section.heading}</h2>
              <div className="mt-5 space-y-4 text-base leading-8 text-slate-600">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {section.bullets && (
                <ul className="mt-5 space-y-3 text-slate-600">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 leading-7">
                      <BadgeCheck className="mt-1 h-4 w-4 shrink-0 text-[#0f766e]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
              {section.links && (
                <div className="mt-5 flex flex-wrap gap-3">
                  {section.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-[#0f766e] transition hover:border-[#0f766e]"
                    >
                      {link.label}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-lg border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-950">Continue planning</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link to="/destinations" className="rounded-lg bg-slate-950 px-4 py-2 text-sm font-semibold text-white">
              Destination playbooks
            </Link>
            <Link to="/itineraries" className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700">
              Itineraries
            </Link>
            <Link to="/guides" className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700">
              Practical guides
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export function AboutPage() {
  return <TrustLayout page={pages.about} />;
}

export function ContactPage() {
  return <TrustLayout page={pages.contact} />;
}

export function PrivacyPolicyPage() {
  return <TrustLayout page={pages["privacy-policy"]} />;
}

export function AdvertisingPolicyPage() {
  return <TrustLayout page={pages["advertising-policy"]} />;
}
