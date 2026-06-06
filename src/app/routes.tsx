import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";

const lazyHome = async () => ({ Component: (await import("./components/Home")).Home });
const lazyDestinationsHub = async () => ({
  Component: (await import("./components/DestinationsHub")).DestinationsHub,
});
const lazyDestination = async () => ({
  Component: (await import("./components/Destination")).Destination,
});
const lazyItinerariesHub = async () => ({
  Component: (await import("./components/ItinerariesHub")).ItinerariesHub,
});
const lazyItinerary = async () => ({
  Component: (await import("./components/Itinerary")).Itinerary,
});
const lazyCuisinesHub = async () => ({
  Component: (await import("./components/CuisinesHub")).CuisinesHub,
});
const lazyCuisineMenu = async () => ({
  Component: (await import("./components/CuisineMenu")).CuisineMenu,
});
const lazyFoodMenu = async () => ({
  Component: (await import("./components/FoodMenu")).FoodMenu,
});
const lazyGuidesHub = async () => ({
  Component: (await import("./components/GuidesHub")).GuidesHub,
});
const lazyGuide = async () => ({ Component: (await import("./components/Guide")).Guide });
const lazyTravelTools = async () => ({
  Component: (await import("./components/TravelTools")).TravelTools,
});
const lazyAbout = async () => ({
  Component: (await import("./components/TrustPage")).AboutPage,
});
const lazyContact = async () => ({
  Component: (await import("./components/TrustPage")).ContactPage,
});
const lazyPrivacyPolicy = async () => ({
  Component: (await import("./components/TrustPage")).PrivacyPolicyPage,
});
const lazyAdvertisingPolicy = async () => ({
  Component: (await import("./components/TrustPage")).AdvertisingPolicyPage,
});

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, lazy: lazyHome },
      { path: "destinations", lazy: lazyDestinationsHub },
      { path: "destination/:id", lazy: lazyDestination },
      { path: "itineraries", lazy: lazyItinerariesHub },
      { path: "itinerary/:id", lazy: lazyItinerary },
      { path: "cuisines", lazy: lazyCuisinesHub },
      { path: "cuisine/:cuisineId", lazy: lazyCuisineMenu },
      { path: "food/:foodId", lazy: lazyFoodMenu },
      { path: "guides", lazy: lazyGuidesHub },
      { path: "guide/:id", lazy: lazyGuide },
      { path: "travel-tools", lazy: lazyTravelTools },
      { path: "about", lazy: lazyAbout },
      { path: "contact", lazy: lazyContact },
      { path: "privacy-policy", lazy: lazyPrivacyPolicy },
      { path: "advertising-policy", lazy: lazyAdvertisingPolicy },
    ],
  },
]);
