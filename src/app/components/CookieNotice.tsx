import { useEffect, useState } from "react";
import { Link } from "react-router";
import { ShieldCheck, X } from "lucide-react";

const storageKey = "roam-china-cookie-notice-dismissed";

export function CookieNotice() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      setIsVisible(localStorage.getItem(storageKey) !== "true");
    } catch {
      setIsVisible(false);
    }
  }, []);

  const dismissNotice = () => {
    try {
      localStorage.setItem(storageKey, "true");
    } catch {
      // Storage can be unavailable in restricted browser contexts.
    }
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <aside
      aria-label="Advertising and cookie notice"
      className="fixed inset-x-3 bottom-3 z-[80] rounded-lg border border-slate-200 bg-white p-4 text-slate-700 shadow-2xl sm:inset-x-auto sm:right-4 sm:max-w-xl"
    >
      <div className="flex gap-3">
        <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0f766e] text-white sm:flex">
          <ShieldCheck className="h-5 w-5" />
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="text-sm font-semibold text-slate-950">Ads and privacy notice</h2>
          <p className="mt-1 text-sm leading-6">
            Roam China may use Google advertising, analytics, cookies, and similar technologies to
            show ads, measure performance, and protect against fraud.
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-3 text-sm font-semibold">
            <Link to="/privacy-policy" className="text-[#0f766e] hover:text-[#115e59]">
              Privacy Policy
            </Link>
            <Link to="/advertising-policy" className="text-[#0f766e] hover:text-[#115e59]">
              Advertising Policy
            </Link>
          </div>
        </div>
        <button
          type="button"
          onClick={dismissNotice}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-slate-300 hover:text-slate-900"
          aria-label="Dismiss advertising and cookie notice"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </aside>
  );
}
