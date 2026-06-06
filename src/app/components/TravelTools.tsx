import { Link } from "react-router";
import {
  ArrowRight,
  BadgeCheck,
  BedDouble,
  CircleDollarSign,
  ClipboardCheck,
  Plane,
  ShieldCheck,
  Train,
  WalletCards,
  Wifi,
} from "lucide-react";
import { GUIDES } from "../mockData";
import { AdUnit } from "./AdUnit";
import {
  FAQSection,
  Seo,
  absoluteUrl,
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildOrganizationJsonLd,
  buildWebPageJsonLd,
} from "../seo";

const toolGuideIds = ["g5", "g6", "g2", "g4", "g7", "g8"];

const toolGuides = toolGuideIds.flatMap((id) =>
  GUIDES.filter((guide) => guide.id === id).slice(0, 1),
);

const decisionRows = [
  {
    trigger: "Your route enters China by air or transit",
    action: "Verify entry documents before booking nonrefundable travel.",
    href: "/guide/g5",
    label: "Entry checklist",
    icon: ShieldCheck,
  },
  {
    trigger: "You need maps, translation, payments, or work access",
    action: "Choose roaming, eSIM, or local SIM with an offline backup.",
    href: "/guide/g6",
    label: "Internet setup",
    icon: Wifi,
  },
  {
    trigger: "You will use QR payments, taxis, or mini programs",
    action: "Set up Alipay, WeChat, Didi, maps, and translation before landing.",
    href: "/guide/g2",
    label: "Apps and payments",
    icon: WalletCards,
  },
  {
    trigger: "Your route includes Beijing, Xi'an, Shanghai, Chengdu, or Guilin",
    action: "Compare rail stations, seat classes, and buffer time before ticketing.",
    href: "/guide/g4",
    label: "Rail planning",
    icon: Train,
  },
  {
    trigger: "Your budget depends on hotels, transport, and ticketed sights",
    action: "Separate fixed costs from daily costs and keep a payment fallback.",
    href: "/guide/g7",
    label: "Budget guide",
    icon: CircleDollarSign,
  },
  {
    trigger: "You are choosing the first night or final night hotel",
    action: "Prioritize station transfers, metro access, food, and passport registration.",
    href: "/guide/g8",
    label: "Stay areas",
    icon: BedDouble,
  },
];

const preTripChecks = [
  "Passport, visa or verified entry basis, and onward travel where relevant.",
  "Mobile data plan, offline translation, Chinese hotel address, and first transfer route.",
  "Alipay or WeChat setup, backup bank card, and a small cash fallback.",
  "Rail station names, attraction booking windows, and hotel branch details saved offline.",
];

const toolsFaqs = [
  {
    question: "What should I prepare first for a China trip?",
    answer:
      "Start with entry eligibility, mobile data, payment apps, hotel address, and first-night transfer details before refining sightseeing plans.",
  },
  {
    question: "Are these tools only for first-time visitors?",
    answer:
      "They are built for first-time international visitors, but repeat travelers can use them to check documents, hotels, trains, and app setup before each trip.",
  },
  {
    question: "Why group entry, payments, trains, hotels, and budgets together?",
    answer:
      "These decisions affect each other. A hotel area changes transfer costs, train station choice affects timing, and connectivity affects payments and navigation.",
  },
];

export function TravelTools() {
  const pageDescription =
    "Use practical China travel planning tools for entry checks, eSIM setup, payments, high-speed rail, budgets, and hotel areas before departure.";

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "China travel planning tools",
    description: pageDescription,
    itemListElement: toolGuides.map((guide, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Article",
        headline: guide.title,
        image: guide.image,
        url: absoluteUrl(`/guide/${guide.id}`),
      },
    })),
  };

  return (
    <div className="min-h-screen bg-[#f7f7f2] text-slate-950">
      <Seo
        title="China Travel Tools for First-Time Visitors"
        description={pageDescription}
        path="/travel-tools"
        keywords={[
          "China travel tools",
          "China trip checklist",
          "China travel budget",
          "China eSIM guide",
          "China hotel areas",
        ]}
        jsonLd={[
          buildOrganizationJsonLd(),
          buildWebPageJsonLd({
            path: "/travel-tools",
            name: "China Travel Tools for First-Time Visitors",
            description: pageDescription,
            type: "CollectionPage",
            dateModified: "2026-06-06",
          }),
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Travel Tools", path: "/travel-tools" },
          ]),
          itemListJsonLd,
          buildFaqJsonLd(toolsFaqs),
        ]}
      />

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold uppercase text-[#0f766e]">
              <ClipboardCheck className="h-4 w-4" />
              Pre-trip decision desk
            </div>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-slate-950 md:text-6xl">
              China travel tools before you book.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Start with the practical decisions that change the cost and friction of the trip:
              entry, internet, payments, trains, hotel areas, and daily budget.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/guide/g5"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 py-3 font-semibold text-white transition hover:bg-slate-800"
              >
                Start with entry checks
                <Plane className="h-4 w-4" />
              </Link>
              <Link
                to="/guides"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-5 py-3 font-semibold text-slate-700 transition hover:border-[#0f766e] hover:text-[#0f766e]"
              >
                Browse all guides
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="lg:pt-8">
            <h2 className="text-2xl font-semibold text-slate-950">Departure-ready checklist</h2>
            <div className="mt-5 grid grid-cols-1 gap-3">
              {preTripChecks.map((item) => (
                <div key={item} className="flex gap-3 rounded-lg border border-slate-200 bg-white p-4">
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#0f766e]" />
                  <p className="leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AdUnit slotKey="hubLeaderboard" minHeight={96} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase text-[#b91c1c]">Decision paths</p>
          <h2 className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
            Match each planning problem to the right guide.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {decisionRows.map((row) => {
            const Icon = row.icon;

            return (
              <Link
                key={row.label}
                to={row.href}
                className="group rounded-lg border border-slate-200 bg-white p-5 transition hover:border-[#b91c1c]"
              >
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-slate-950 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase text-[#b91c1c]">{row.label}</p>
                    <h3 className="mt-2 text-xl font-semibold text-slate-950 group-hover:text-[#b91c1c]">
                      {row.trigger}
                    </h3>
                    <p className="mt-3 leading-7 text-slate-600">{row.action}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <AdUnit slotKey="hubInArticle" minHeight={140} className="mt-12" />
      </section>

      <section className="bg-slate-950 py-14 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase text-[#f4c542]">
                Tool library
              </p>
              <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
                High-friction decisions in one place.
              </h2>
            </div>
            <Link
              to="/guides"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-5 py-3 font-semibold text-white transition hover:bg-white hover:text-slate-950"
            >
              More practical guides
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {toolGuides.map((guide) => (
              <Link
                key={guide.id}
                to={`/guide/${guide.id}`}
                className="group overflow-hidden rounded-lg border border-white/15 bg-white/8 transition hover:border-[#f4c542]"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-5">
                  <div className="mb-3 flex flex-wrap gap-2">
                    {guide.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-white/15 px-2.5 py-1 text-sm text-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-[#f4c542]">
                    {guide.title}
                  </h3>
                  <p className="mt-4 text-sm text-slate-300">
                    By {guide.author.name} - {guide.views} views
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <FAQSection title="Travel Tool Questions" faqs={toolsFaqs} />
      </section>
    </div>
  );
}
