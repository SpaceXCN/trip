import type { ReactNode } from "react";
import { Helmet } from "react-helmet-async";

export type FaqItem = {
  question: string;
  answer: string;
};

export const PRODUCTION_SITE_URL = "https://cntripaimap.online";

type JsonLd = Record<string, unknown> | false | null | undefined;

type SeoProps = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  keywords?: string[];
  jsonLd?: JsonLd | JsonLd[];
  noindex?: boolean;
};

export const SITE = {
  name: "Roam China",
  legalName: "Roam China Travel Guide",
  url: PRODUCTION_SITE_URL,
  description:
    "A practical China travel guide for international visitors, covering destinations, itineraries, local food, apps, payments, and cultural tips.",
  defaultImage:
    "https://images.unsplash.com/photo-1513781050488-6dd358209a1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1200",
  locale: "en_US",
  twitterHandle: "",
  sameAs: [] as string[],
};

const DEFAULT_ROBOTS = "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1";

export function getSiteUrl() {
  const configured = (import.meta as unknown as { env?: Record<string, string | undefined> }).env
    ?.VITE_SITE_URL;

  if (configured) {
    return configured.replace(/\/+$/, "");
  }

  return SITE.url;
}

export function absoluteUrl(path = "/") {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  const siteUrl = getSiteUrl();
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return siteUrl ? `${siteUrl}${normalizedPath}` : normalizedPath;
}

export function pageTitle(title: string) {
  return title.includes(SITE.name) ? title : `${title} | ${SITE.name}`;
}

export function truncateDescription(value: string, maxLength = 158) {
  if (value.length <= maxLength) {
    return value;
  }

  return `${value.slice(0, maxLength - 1).replace(/\s+\S*$/, "")}...`;
}

export function buildOrganizationJsonLd() {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": absoluteUrl("/#organization"),
    name: SITE.name,
    legalName: SITE.legalName,
    url: siteUrl || absoluteUrl("/"),
    description: SITE.description,
    image: SITE.defaultImage,
    sameAs: SITE.sameAs.length > 0 ? SITE.sameAs : undefined,
    areaServed: {
      "@type": "Country",
      name: "China",
    },
    audience: {
      "@type": "Audience",
      audienceType: "International travelers visiting China",
    },
  };
}

export function buildWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: SITE.name,
    url: absoluteUrl("/"),
    description: SITE.description,
    inLanguage: "en",
    publisher: {
      "@id": absoluteUrl("/#organization"),
    },
  };
}

export function buildWebPageJsonLd({
  path,
  name,
  description,
  image,
  type = "WebPage",
  dateModified = "2026-05-24",
}: {
  path: string;
  name: string;
  description: string;
  image?: string;
  type?: "WebPage" | "CollectionPage" | "AboutPage" | "Article";
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    inLanguage: "en",
    isPartOf: {
      "@id": absoluteUrl("/#website"),
    },
    publisher: {
      "@id": absoluteUrl("/#organization"),
    },
    primaryImageOfPage: image
      ? {
          "@type": "ImageObject",
          url: absoluteUrl(image),
        }
      : undefined,
    dateModified,
  };
}

export function buildBreadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildFaqJsonLd(faqs: FaqItem[]) {
  if (faqs.length === 0) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

function normalizeJsonLd(jsonLd: SeoProps["jsonLd"]) {
  const blocks = (Array.isArray(jsonLd) ? jsonLd : [jsonLd]).filter(Boolean) as Record<
    string,
    unknown
  >[];

  if (blocks.length === 0) {
    return null;
  }

  if (blocks.length === 1) {
    return blocks[0];
  }

  return {
    "@context": "https://schema.org",
    "@graph": blocks.map((block) => {
      const { "@context": _context, ...rest } = block;
      return rest;
    }),
  };
}

export function Seo({
  title,
  description,
  path,
  image = SITE.defaultImage,
  type = "website",
  keywords = [],
  jsonLd,
  noindex = false,
}: SeoProps) {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);
  const fullTitle = pageTitle(title);
  const robots = noindex ? "noindex,nofollow" : DEFAULT_ROBOTS;
  const normalizedJsonLd = normalizeJsonLd(jsonLd);

  return (
    <Helmet prioritizeSeoTags>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(", ")} />}
      <link rel="canonical" href={url} />

      <meta property="og:locale" content={SITE.locale} />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      {SITE.twitterHandle && <meta name="twitter:site" content={SITE.twitterHandle} />}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {normalizedJsonLd && (
        <script type="application/ld+json">{JSON.stringify(normalizedJsonLd)}</script>
      )}
    </Helmet>
  );
}

export function FAQSection({
  title = "Frequently Asked Questions",
  faqs,
  icon,
}: {
  title?: string;
  faqs: FaqItem[];
  icon?: ReactNode;
}) {
  if (faqs.length === 0) {
    return null;
  }

  return (
    <section className="mt-16">
      <h2 className="mb-8 flex items-center gap-3 text-foreground">
        {icon}
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq) => (
          <article key={faq.question} className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-lg font-semibold text-card-foreground mb-3">{faq.question}</h3>
            <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
