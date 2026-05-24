import { useState } from "react";
import { Link } from "react-router";
import { ITINERARIES } from "../mockData";
import { Map, Clock, Star, Footprints, ChevronRight, Train } from "lucide-react";
import {
  FAQSection,
  Seo,
  absoluteUrl,
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildWebPageJsonLd,
} from "../seo";

const itineraryFaqs = [
  {
    question: "Which China itinerary is best for first-time visitors?",
    answer:
      "The classic 14-day route through Beijing, Xi'an, Chengdu, and Shanghai is the best starting point for most first-time visitors.",
  },
  {
    question: "How many days do I need for China?",
    answer:
      "Ten days works for two or three cities, while 14 to 16 days gives enough time for a broader route with less pressure.",
  },
  {
    question: "Should I plan China by city or theme?",
    answer:
      "Use both. Pick a theme such as classic history, food, nature, or Silk Road travel, then choose cities that connect efficiently by train or flight.",
  },
];

export function ItinerariesHub() {
  const [activeTheme, setActiveTheme] = useState("All");
  const themes = ["All", "Classic", "Nature", "Adventure", "Culture"];

  const filteredItineraries = ITINERARIES.filter((itinerary) => {
    return activeTheme === "All" || itinerary.theme === activeTheme;
  });

  const pageDescription =
    "Choose curated China travel itineraries for first-time visitors, nature trips, Silk Road adventures, and food-focused city routes.";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Curated Travel Itineraries for China",
    "description": pageDescription,
    "itemListElement": ITINERARIES.map((itinerary, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "item": {
        "@type": "Trip",
        "name": itinerary.title,
        "description": itinerary.description,
        "url": absoluteUrl(`/itinerary/${itinerary.id}`)
      }
    }))
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      <Seo
        title="China Travel Itineraries and Routes"
        description={pageDescription}
        path="/itineraries"
        keywords={["China itinerary", "China travel route", "14 day China itinerary"]}
        jsonLd={[
          buildWebPageJsonLd({
            path: "/itineraries",
            name: "China Travel Itineraries and Routes",
            description: pageDescription,
            type: "CollectionPage",
          }),
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Itineraries", path: "/itineraries" },
          ]),
          jsonLd,
          buildFaqJsonLd(itineraryFaqs),
        ]}
      />

      {/* Hero Section */}
      <div className="relative bg-slate-900 text-white overflow-hidden py-24">
        <div className="absolute inset-0 z-0 opacity-50">
          <img 
            src="https://images.unsplash.com/photo-1564632570063-9ce5e7bd724e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluYSUyMGJ1bGxldCUyMHRyYWlufGVufDF8fHx8MTc3OTIwMjU3Mnww&ixlib=rb-4.1.0&q=80&w=1080" 
            alt="China high-speed train for itinerary planning" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Train className="w-12 h-12 text-red-500 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
            Curated Itineraries
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            Expertly crafted travel plans designed specifically for international visitors. Skip the planning stress and discover the best of China.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {themes.map(theme => (
              <button
                key={theme}
                onClick={() => setActiveTheme(theme)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                  activeTheme === theme 
                    ? "bg-red-600 text-white shadow-lg shadow-red-600/30" 
                    : "bg-white/10 text-slate-200 hover:bg-white/20 backdrop-blur-md"
                }`}
              >
                {theme}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900">
            {filteredItineraries.length} {filteredItineraries.length === 1 ? 'Route' : 'Routes'} Available
          </h2>
        </div>

        <div className="flex flex-col gap-10">
          {filteredItineraries.map(itinerary => (
            <div key={itinerary.id} className="bg-white rounded-3xl overflow-hidden border border-slate-200 hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col lg:flex-row group">
              {/* Image Side */}
              <div className="relative lg:w-2/5 h-72 lg:h-auto overflow-hidden">
                <img 
                  src={itinerary.image} 
                  alt={itinerary.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md text-slate-900 font-bold px-4 py-1.5 rounded-full text-sm shadow-sm flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-red-600"/> {itinerary.duration}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                  {itinerary.destinations.map(dest => (
                    <span key={dest} className="bg-black/60 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-md border border-white/10">
                      {dest}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content Side */}
              <div className="p-8 lg:w-3/5 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-3xl font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                      {itinerary.title}
                    </h3>
                    <div className="flex items-center gap-1 bg-yellow-50 text-yellow-700 px-2 py-1 rounded-lg shrink-0">
                      <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                      <span className="font-bold text-sm">{itinerary.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                    {itinerary.description}
                  </p>

                  <div className="flex items-center gap-6 mb-8 text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                      <div className="bg-slate-100 p-2 rounded-full"><Footprints className="w-4 h-4 text-slate-700"/></div>
                      <span>Pace: <span className="font-medium text-slate-900">{itinerary.pace}</span></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-slate-100 p-2 rounded-full"><Map className="w-4 h-4 text-slate-700"/></div>
                      <span>Theme: <span className="font-medium text-slate-900">{itinerary.theme}</span></span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                  <span className="text-slate-500 text-sm">
                    {itinerary.reviews} reviews from travelers
                  </span>
                  <Link 
                    to={`/itinerary/${itinerary.id}`} 
                    className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-red-600 transition-colors"
                  >
                    View Day-by-Day Plan <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <FAQSection title="China Itinerary Questions" faqs={itineraryFaqs} />
      </div>
    </div>
  );
}
