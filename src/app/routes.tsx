import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { Destination } from "./components/Destination";
import { DestinationsHub } from "./components/DestinationsHub";
import { ItinerariesHub } from "./components/ItinerariesHub";
import { Itinerary } from "./components/Itinerary";
import { GuidesHub } from "./components/GuidesHub";
import { Guide } from "./components/Guide";
import { CuisinesHub } from "./components/CuisinesHub";
import { FoodMenu } from "./components/FoodMenu";
import { CuisineMenu } from "./components/CuisineMenu";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "destinations", Component: DestinationsHub },
      { path: "destination/:id", Component: Destination },
      { path: "itineraries", Component: ItinerariesHub },
      { path: "itinerary/:id", Component: Itinerary },
      { path: "cuisines", Component: CuisinesHub },
      { path: "cuisine/:cuisineId", Component: CuisineMenu },
      { path: "food/:foodId", Component: FoodMenu },
      { path: "guides", Component: GuidesHub },
      { path: "guide/:id", Component: Guide },
    ],
  },
]);