import { Link } from "react-router";
import {
  BadgeCheck,
  BookOpen,
  CalendarDays,
  ChevronRight,
  CircleDollarSign,
  Clock,
  Compass,
  Landmark,
  MapPin,
  Plane,
  Route,
  ShieldCheck,
  Star,
  Train,
  Utensils,
  WalletCards,
  Wifi,
} from "lucide-react";
import { DESTINATIONS, GUIDES, ITINERARIES } from "../mockData";
import { AdUnit } from "./AdUnit";
import {
  FAQSection,
  Seo,
  absoluteUrl,
  buildFaqJsonLd,
  buildOrganizationJsonLd,
  buildWebPageJsonLd,
  buildWebSiteJsonLd,
} from "../seo";

const homeFaqs = [
  {
    question: "What is the best first trip route for China?",
    answer:
      "A practical first route is Beijing, Xi'an, Chengdu, and Shanghai over 12 to 14 days because it combines history, food, pandas, and a convenient international gateway.",
  },
  {
    question: "What should international visitors prepare before going to China?",
    answer:
      "Set up mobile payments, translation, maps, transport apps, passport-based bookings, and a connectivity plan before departure.",
  },
  {
    question: "Which China destinations are best for food travelers?",
    answer:
      "Chengdu, Guangzhou, Xi'an, Shanghai, Hangzhou, and Hong Kong are strong food stops because each has distinct regional dishes and accessible restaurant scenes.",
  },
  {
    question: "Does Roam China cover practical travel planning?",
    answer:
      "Yes. The site covers destination selection, day-by-day routes, local cuisine, Chinese travel apps, payments, transport, and first-time visitor advice.",
  },
];

const featuredDestinationIds = ["beijing", "shanghai", "chengdu", "guilin"];

const featuredDestinations = featuredDestinationIds.flatMap((id) =>
  DESTINATIONS.filter((destination) => destination.id === id).slice(0, 1),
);

const destinationAngles: Record<
  string,
  {
    hook: string;
    planningAngle: string;
    planningDepth: string;
  }
> = {
  beijing: {
    hook: "Imperial icons, Great Wall day trips, hutong food walks",
    planningAngle: "Best for first-time history routes",
    planningDepth: "4 to 5 day plan",
  },
  shanghai: {
    hook: "Bund skyline, French Concession walks, museum and river nights",
    planningAngle: "Best for arrivals and city breaks",
    planningDepth: "3 to 4 day plan",
  },
  chengdu: {
    hook: "Pandas, teahouses, hot pot, Leshan or Dujiangyan day trips",
    planningAngle: "Best for food and slow travel",
    planningDepth: "3 to 4 day plan",
  },
  guilin: {
    hook: "Li River cruise, Yangshuo cycling, Longji rice terraces",
    planningAngle: "Best for scenery and photography",
    planningDepth: "4 day plan",
  },
};

const planningTopics = [
  {
    title: "Payments and apps",
    summary: "Mobile payment setup, translation, maps, ride hailing, and train booking basics.",
    href: "/guides",
    icon: WalletCards,
  },
  {
    title: "Train-first routing",
    summary: "Build city pairs around high-speed rail when it saves airport transfer time.",
    href: "/itineraries",
    icon: Train,
  },
  {
    title: "Food-led city picks",
    summary: "Use cuisine depth to choose where extra nights are worth the schedule cost.",
    href: "/cuisines",
    icon: Utensils,
  },
  {
    title: "Ticket friction",
    summary: "Spot attractions that require passport booking, time slots, or official channels.",
    href: "/destinations",
    icon: ShieldCheck,
  },
  {
    title: "Connectivity stack",
    summary: "Plan eSIM, hotel Wi-Fi, backup translation, and offline screenshots before landing.",
    href: "/guides",
    icon: Wifi,
  },
  {
    title: "Realistic budgets",
    summary: "Compare city costs, attraction fees, meal styles, and transport tradeoffs.",
    href: "/itineraries",
    icon: CircleDollarSign,
  },
];

const seasonalGuides = [
  {
    season: "Spring",
    title: "Gardens, tea country, and lighter city walking",
    cities: "Hangzhou, Shanghai, Beijing",
  },
  {
    season: "Summer",
    title: "River landscapes, mountain air, and late-night food streets",
    cities: "Guilin, Zhangjiajie, Chengdu",
  },
  {
    season: "Autumn",
    title: "Clear skies, Great Wall views, and golden city parks",
    cities: "Beijing, Xi'an, Shanghai",
  },
  {
    season: "Winter",
    title: "Hot pot, museums, northern history, and lower crowd pressure",
    cities: "Chengdu, Beijing, Guangzhou",
  },
];

const editorialStandards = [
  "City guides separate official ticket sources from opinionated route advice.",
  "Itineraries are written for international visitors using passports, mobile payments, and public transport.",
  "Food coverage links regional cuisines to practical neighborhoods and realistic trip pacing.",
];

export function Home() {
  const pageDescription =
    "Plan a China trip with research-backed itineraries, destination playbooks, food routes, transport setup, ticket advice, and first-time visitor checklists.";

  const primaryItinerary = ITINERARIES[0];
  const routeCards = ITINERARIES.slice(0, 3);
  const guideCards = GUIDES.slice(0, 3);

  const jsonLd = [
    buildOrganizationJsonLd(),
    buildWebSiteJsonLd(),
    buildWebPageJsonLd({
      path: "/",
      name: "China Travel Planner for International Visitors",
      description: pageDescription,
      image: primaryItinerary?.image,
      dateModified: "2026-06-05",
    }),
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "High-value China destination playbooks",
      itemListElement: featuredDestinations.map((destination, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "TouristDestination",
          name: destination.name,
          description: destination.description,
          url: absoluteUrl(`/destination/${destination.id}`),
          image: destination.image,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "China itinerary planning routes",
      itemListElement: routeCards.map((itinerary, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Trip",
          name: itinerary.title,
          description: itinerary.description,
          url: absoluteUrl(`/itinerary/${itinerary.id}`),
        },
      })),
    },
    buildFaqJsonLd(homeFaqs),
  ];

  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-[#f7f7f2] text-slate-950">
      <Seo
        title="China Travel Planner for First-Time Visitors"
        description={pageDescription}
        path="/"
        keywords={[
          "China travel planner",
          "China itinerary",
          "China travel guide",
          "first time China trip",
          "China destination guide",
        ]}
        image={primaryItinerary?.image}
        jsonLd={jsonLd}
      />

      <section className="relative min-h-[620px] overflow-hidden bg-slate-950 text-white">
        <img
          src={primaryItinerary?.image}
          alt="Great Wall route inspiration for a first China trip"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-slate-950/65" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[620px] max-w-7xl flex-col justify-end px-4 pb-14 pt-28 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded border border-white/25 bg-white/10 px-3 py-2 text-sm text-white backdrop-blur">
              <BadgeCheck className="h-4 w-4 text-emerald-300" />
              Updated for 2026 China trip planning
            </div>
            <h1 className="max-w-3xl break-words text-3xl font-semibold leading-[1.08] text-white sm:text-5xl md:text-7xl">
              China travel planner for first-time visitors.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100 md:text-xl">
              Built for international travelers who need practical routes, official ticket
              checkpoints, payment setup, food priorities, and realistic day-by-day pacing before
              they land.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/itinerary/classic-14-days"
                className="inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-lg bg-[#f4c542] px-4 py-4 text-center font-semibold text-slate-950 transition hover:bg-[#ffd765] sm:w-auto sm:px-6"
              >
                <span className="min-w-0">Start with the 14-day classic route</span>
                <ChevronRight className="h-5 w-5 shrink-0" />
              </Link>
              <Link
                to="/destinations"
                className="inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-lg border border-white/35 px-4 py-4 text-center font-semibold text-white transition hover:bg-white hover:text-slate-950 sm:w-auto sm:px-6"
              >
                <span className="min-w-0">Compare destinations</span>
                <Compass className="h-5 w-5 shrink-0" />
              </Link>
            </div>
          </div>

          <div className="mt-12 grid max-w-5xl grid-cols-1 gap-3 md:grid-cols-3">
            {[
              { label: "Best first route", value: "Beijing -> Xi'an -> Chengdu -> Shanghai" },
              { label: "Planning depth", value: "Tickets, transit, food, stay areas" },
              { label: "Core audience", value: "First-time international visitors" },
            ].map((item) => (
              <div key={item.label} className="rounded-lg border border-white/15 bg-white/10 p-4 backdrop-blur">
                <p className="text-sm text-slate-300">{item.label}</p>
                <p className="mt-2 break-words font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AdUnit slotKey="homeLeaderboard" minHeight={96} />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase text-[#0f766e]">
                Trip decision desk
              </p>
              <h2 className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
                Choose a route by outcome, not by postcard.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
                The highest-value travel searches are practical: how many days, which city order,
                what to book, where to stay, and what can go wrong. Roam China makes those answers
                easy to scan and sends readers deeper into destination and itinerary pages.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {routeCards.map((itinerary, index) => (
                <Link
                  key={itinerary.id}
                  to={`/itinerary/${itinerary.id}`}
                  className="group grid grid-cols-1 overflow-hidden rounded-lg border border-slate-200 bg-[#f7f7f2] transition hover:border-[#0f766e] md:grid-cols-[180px_1fr]"
                >
                  <div className="relative min-h-[180px] overflow-hidden">
                    <img
                      src={itinerary.image}
                      alt={itinerary.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="absolute left-3 top-3 rounded bg-slate-950 px-3 py-1 text-sm font-semibold text-white">
                      0{index + 1}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="mb-3 flex flex-wrap items-center gap-3 text-sm text-slate-600">
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-4 w-4 text-[#b91c1c]" />
                        {itinerary.duration}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Route className="h-4 w-4 text-[#0f766e]" />
                        {itinerary.theme}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Star className="h-4 w-4 fill-[#f4c542] text-[#f4c542]" />
                        {itinerary.rating}
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-950 group-hover:text-[#0f766e]">
                      {itinerary.title}
                    </h3>
                    <p className="mt-3 leading-7 text-slate-600">{itinerary.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {itinerary.destinations.map((destination) => (
                        <span
                          key={destination}
                          className="rounded border border-slate-200 bg-white px-2.5 py-1 text-sm text-slate-700"
                        >
                          {destination}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#132d2f] py-16 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_320px] lg:px-8">
          <div>
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase text-[#f4c542]">
                  Destination playbooks
                </p>
                <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
                  Four entry cities with complete planning depth.
                </h2>
              </div>
              <Link
                to="/destinations"
                className="hidden rounded-lg border border-white/30 px-5 py-3 font-semibold text-white transition hover:bg-white hover:text-slate-950 sm:inline-flex"
              >
                View all cities
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {featuredDestinations.map((destination) => {
                const angle = destinationAngles[destination.id];

                return (
                  <Link
                    key={destination.id}
                    to={`/destination/${destination.id}`}
                    className="group overflow-hidden rounded-lg border border-white/15 bg-white/8 transition hover:border-[#f4c542]"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img
                        src={destination.image}
                        alt={`${destination.name} travel guide`}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 to-transparent" />
                      <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white">
                        <MapPin className="h-4 w-4" />
                        <span className="font-semibold">{destination.name}</span>
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="text-sm font-semibold text-[#f4c542]">
                        {angle?.planningAngle}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold text-white">{angle?.hook}</h3>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="rounded border border-white/15 px-2.5 py-1 text-sm text-slate-200">
                          {angle?.planningDepth}
                        </span>
                        <span className="rounded border border-white/15 px-2.5 py-1 text-sm text-slate-200">
                          {destination.practicalInfo.bestTime}
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="space-y-5">
            <AdUnit
              slotKey="homeSidebar"
              minHeight={360}
              className="border-white/25 bg-white/10 text-slate-200"
            />
            <div className="rounded-lg border border-white/15 bg-white/8 p-5">
              <h3 className="text-xl font-semibold text-white">Editorial trust signals</h3>
              <ul className="mt-4 space-y-3">
                {editorialStandards.map((standard) => (
                  <li key={standard} className="flex gap-3 text-sm leading-6 text-slate-200">
                    <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#f4c542]" />
                    <span>{standard}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f2] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase text-[#b91c1c]">
                Practical search intent
              </p>
              <h2 className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
                Cover the questions travelers search before spending.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                A travel site earns better attention when it answers the buying-stage questions:
                where to stay, what to book, how to move, what to eat, and what setup prevents trip
                friction.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {planningTopics.map((topic) => {
                const Icon = topic.icon;

                return (
                  <Link
                    key={topic.title}
                    to={topic.href}
                    className="group rounded-lg border border-slate-200 bg-white p-5 transition hover:border-[#b91c1c]"
                  >
                    <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-slate-950 text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-950 group-hover:text-[#b91c1c]">
                      {topic.title}
                    </h3>
                    <p className="mt-3 leading-7 text-slate-600">{topic.summary}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AdUnit slotKey="homeInArticle" minHeight={140} />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase text-[#0f766e]">
                Seasonal planning
              </p>
              <h2 className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
                Match each month to the right region.
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-600">
              Weather, crowds, and food scenes change the value of a destination. Seasonal routing
              keeps readers engaged beyond a single city page and creates natural internal links to
              routes, cuisines, and practical guides.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {seasonalGuides.map((guide) => (
              <article key={guide.season} className="rounded-lg border border-slate-200 bg-[#f7f7f2] p-5">
                <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white text-[#0f766e]">
                  <CalendarDays className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-slate-950">{guide.season}</h3>
                <p className="mt-3 leading-7 text-slate-600">{guide.title}</p>
                <p className="mt-4 text-sm font-semibold text-slate-950">{guide.cities}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase text-[#f4c542]">
                Deep-dive guides
              </p>
              <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
                Guides that keep planning sessions going.
              </h2>
            </div>
            <Link
              to="/guides"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-5 py-3 font-semibold text-white transition hover:bg-white hover:text-slate-950"
            >
              More guides
              <BookOpen className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {guideCards.map((guide) => (
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
                      <span key={tag} className="rounded border border-white/15 px-2.5 py-1 text-sm text-slate-200">
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

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_320px] lg:px-8">
          <div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {[
                {
                  icon: Plane,
                  title: "Arrival ready",
                  text: "Airport choices, payment setup, transport apps, and first-night neighborhoods.",
                },
                {
                  icon: Landmark,
                  title: "Official-source aware",
                  text: "City pages call out attractions and transport systems that require extra booking care.",
                },
                {
                  icon: MapPin,
                  title: "Route linked",
                  text: "Every major destination links back to itineraries, food, transport, and FAQ content.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <article key={item.title} className="rounded-lg border border-slate-200 bg-[#f7f7f2] p-5">
                    <Icon className="mb-5 h-7 w-7 text-[#b91c1c]" />
                    <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                  </article>
                );
              })}
            </div>

            <FAQSection title="China Travel Planning Questions" faqs={homeFaqs} />
          </div>

          <AdUnit slotKey="homeFaqRail" minHeight={320} />
        </div>
      </section>
    </div>
  );
}
