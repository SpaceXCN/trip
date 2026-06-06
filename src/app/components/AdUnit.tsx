import { useEffect } from "react";

const DEFAULT_ADSENSE_CLIENT = "ca-pub-6996532981042566";

const env = ((import.meta as unknown as { env?: Record<string, string | undefined> }).env || {});

export const ADSENSE_CLIENT = env.VITE_ADSENSE_CLIENT || DEFAULT_ADSENSE_CLIENT;

const AD_SLOT_ENV = {
  homeLeaderboard: "VITE_ADSENSE_HOME_LEADERBOARD_SLOT",
  homeSidebar: "VITE_ADSENSE_HOME_SIDEBAR_SLOT",
  homeInArticle: "VITE_ADSENSE_HOME_IN_ARTICLE_SLOT",
  homeFaqRail: "VITE_ADSENSE_HOME_FAQ_RAIL_SLOT",
  hubLeaderboard: "VITE_ADSENSE_HUB_LEADERBOARD_SLOT",
  hubInArticle: "VITE_ADSENSE_HUB_IN_ARTICLE_SLOT",
  destinationInArticle: "VITE_ADSENSE_DESTINATION_IN_ARTICLE_SLOT",
  destinationSidebar: "VITE_ADSENSE_DESTINATION_SIDEBAR_SLOT",
  guideInArticle: "VITE_ADSENSE_GUIDE_IN_ARTICLE_SLOT",
  guideSidebar: "VITE_ADSENSE_GUIDE_SIDEBAR_SLOT",
  itineraryInArticle: "VITE_ADSENSE_ITINERARY_IN_ARTICLE_SLOT",
  itinerarySidebar: "VITE_ADSENSE_ITINERARY_SIDEBAR_SLOT",
  menuInArticle: "VITE_ADSENSE_MENU_IN_ARTICLE_SLOT",
} as const;

export type AdSlotKey = keyof typeof AD_SLOT_ENV;

type AdUnitProps = {
  slotKey: AdSlotKey;
  className?: string;
  minHeight?: number | string;
  format?: "auto" | "fluid" | "rectangle" | "horizontal" | "vertical";
  fullWidthResponsive?: boolean;
};

function getAdSlot(slotKey: AdSlotKey) {
  return env[AD_SLOT_ENV[slotKey]] || "";
}

function pushAd(slotId: string) {
  if (!slotId || typeof window === "undefined") {
    return;
  }

  try {
    const adWindow = window as Window & { adsbygoogle?: unknown[] };
    adWindow.adsbygoogle = adWindow.adsbygoogle || [];
    adWindow.adsbygoogle.push({});
  } catch {
    // AdSense can throw in dev, under ad blockers, or before approval. Keep the page usable.
  }
}

export function AdUnit({
  slotKey,
  className = "",
  minHeight = 120,
  format = "auto",
  fullWidthResponsive = true,
}: AdUnitProps) {
  const slotId = getAdSlot(slotKey);
  const minHeightValue = typeof minHeight === "number" ? `${minHeight}px` : minHeight;

  useEffect(() => {
    pushAd(slotId);
  }, [slotId]);

  return (
    <aside
      aria-label="Advertisements"
      data-ad-placement={slotKey}
      className={`not-prose relative flex items-center justify-center overflow-hidden rounded-lg border border-dashed border-slate-300 bg-slate-100/80 px-4 text-slate-500 ${className}`}
      style={{ minHeight: minHeightValue }}
    >
      <span className="absolute left-3 top-2 text-[11px] uppercase tracking-wide text-slate-400">
        Advertisements
      </span>
      {slotId ? (
        <ins
          className="adsbygoogle block w-full"
          style={{ display: "block", minHeight: minHeightValue }}
          data-ad-client={ADSENSE_CLIENT}
          data-ad-slot={slotId}
          data-ad-format={format}
          data-full-width-responsive={fullWidthResponsive ? "true" : "false"}
        />
      ) : (
        <div className="text-center text-sm leading-6">
          <div>Responsive display placement</div>
          <div className="text-xs text-slate-400">{AD_SLOT_ENV[slotKey]}</div>
        </div>
      )}
    </aside>
  );
}
