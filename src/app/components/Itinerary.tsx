import { useState } from "react";
import { useParams, Link } from "react-router";
import { ITINERARIES } from "../mockData";
import { Clock, Map, Star, Download, Share2, Footprints, AlertCircle, ArrowRight, ChevronRight, X, ZoomIn } from "lucide-react";
import {
  FAQSection,
  Seo,
  absoluteUrl,
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildWebPageJsonLd,
  truncateDescription,
} from "../seo";

export function Itinerary() {
  const { id } = useParams();
  const itinerary = ITINERARIES.find(i => i.id === id);
  const [isMapExpanded, setIsMapExpanded] = useState(false);

  if (!itinerary) {
    return (
      <div className="w-full min-h-screen bg-slate-50 flex flex-col items-center justify-center p-8">
        <Seo
          title="Itinerary Not Found"
          description="This China travel itinerary could not be found."
          path={`/itinerary/${id || ""}`}
          noindex
        />
        <h1 className="text-2xl font-semibold text-slate-900 mb-4">Itinerary not found</h1>
        <Link to="/itineraries" className="text-red-600 hover:underline">
          Return to Itineraries
        </Link>
      </div>
    );
  }

  const itineraryPath = `/itinerary/${itinerary.id}`;
  const pageDescription = truncateDescription(
    `${itinerary.duration} ${itinerary.theme} China itinerary: ${itinerary.description}`,
  );
  const itineraryFaqs = [
    {
      question: `How long is ${itinerary.title}?`,
      answer: `${itinerary.title} is planned as a ${itinerary.duration} itinerary.`,
    },
    {
      question: "Which destinations does this route include?",
      answer: `This route includes ${itinerary.destinations.join(", ")}.`,
    },
    {
      question: "What travel pace is this itinerary?",
      answer: `This itinerary has a ${itinerary.pace.toLowerCase()} pace and is best for travelers interested in ${itinerary.theme.toLowerCase()} travel.`,
    },
    {
      question: "What is the best way to use this itinerary?",
      answer:
        "Use it as a day-by-day planning framework, then adjust hotel nights, transfer times, and attraction bookings around your arrival city and season.",
    },
  ];

  // Generate JSON-LD for the itinerary (ItemPage / Trip)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemPage",
    "@id": `${absoluteUrl(itineraryPath)}#itinerary-page`,
    "url": absoluteUrl(itineraryPath),
    "name": itinerary.title,
    "description": itinerary.description,
    "image": itinerary.image,
    "about": {
      "@type": "Trip",
      "name": itinerary.title,
      "description": itinerary.description,
      "itinerary": {
        "@type": "ItemList",
        "itemListElement": itinerary.days.map((day, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "item": {
            "@type": "TouristDestination",
            "name": day.location,
            "description": day.description,
            "image": day.image
          }
        }))
      }
    }
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-20">
      <Seo
        title={`${itinerary.title} Itinerary`}
        description={pageDescription}
        path={itineraryPath}
        image={itinerary.image}
        keywords={[`${itinerary.duration} China itinerary`, itinerary.theme, ...itinerary.destinations]}
        jsonLd={[
          buildWebPageJsonLd({
            path: itineraryPath,
            name: `${itinerary.title} Itinerary`,
            description: pageDescription,
            image: itinerary.image,
          }),
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Itineraries", path: "/itineraries" },
            { name: itinerary.title, path: itineraryPath },
          ]),
          jsonLd,
          buildFaqJsonLd(itineraryFaqs),
        ]}
      />

      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] w-full">
        <img 
          src={itinerary.image} 
          alt={itinerary.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-8 max-w-7xl mx-auto xl:px-8">
          <div className="mb-4 flex flex-wrap gap-3">
            <span className="bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
              {itinerary.theme} Route
            </span>
            <span className="bg-black/40 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/20">
              <Clock className="w-3.5 h-3.5" /> {itinerary.duration}
            </span>
            <span className="bg-black/40 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/20">
              <Footprints className="w-3.5 h-3.5" /> {itinerary.pace} Pace
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight max-w-4xl">
            {itinerary.title}
          </h1>
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {itinerary.destinations.map((dest, idx) => (
                  <div key={dest} className="w-10 h-10 rounded-full bg-slate-800 border-2 border-white flex items-center justify-center text-xs font-bold text-white z-10" style={{ zIndex: 10 - idx }}>
                    {dest.charAt(0)}
                  </div>
                ))}
              </div>
              <div className="text-slate-300 text-sm">
                <div className="font-medium text-white">{itinerary.destinations.join(" -> ")}</div>
                <div>{itinerary.destinations.length} Cities</div>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-5 py-2.5 rounded-xl font-medium transition-colors border border-white/10">
                <Download className="w-4 h-4"/> <span>PDF</span>
              </button>
              <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-5 py-2.5 rounded-xl font-medium transition-colors border border-white/10">
                <Share2 className="w-4 h-4"/> <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content: Timeline */}
        <div className="lg:col-span-2 space-y-12">
          
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Trip Overview</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              {itinerary.description}
            </p>
          </div>

          {(itinerary as any).mapImage && (
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Map className="w-6 h-6 text-red-600"/> Route Map
              </h2>
              <div 
                className="w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 relative group cursor-pointer"
                onClick={() => setIsMapExpanded(true)}
              >
                <img 
                  src={(itinerary as any).mapImage} 
                  alt={`${itinerary.title} Route Map`} 
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm text-slate-900 font-medium px-4 py-2 rounded-full flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg transform translate-y-4 group-hover:translate-y-0">
                    <ZoomIn className="w-4 h-4" /> Click to enlarge
                  </div>
                </div>
              </div>
            </div>
          )}

          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              <Map className="w-8 h-8 text-red-600"/> Day-by-Day Plan
            </h2>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
              
              {itinerary.days.map((day, idx) => (
                <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  
                  {/* Timeline Dot */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-50 bg-red-600 text-slate-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10">
                    <span className="font-bold text-sm">{idx + 1}</span>
                  </div>
                  
                  {/* Card */}
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4">
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="text-red-600 font-bold text-sm mb-1">{day.day}</div>
                      <h3 className="text-xl font-bold text-slate-900 mb-4">{day.location}</h3>
                      
                      <div className="w-full h-40 mb-4 rounded-xl overflow-hidden">
                        <img src={day.image} alt={day.location} className="w-full h-full object-cover" />
                      </div>
                      
                      <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                        {day.description}
                      </p>
                      
                      <div className="bg-amber-50 rounded-xl p-3 flex items-start gap-2 border border-amber-100">
                        <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                        <span className="text-sm text-amber-800">{day.tips}</span>
                      </div>
                    </div>
                  </div>
                  
                </div>
              ))}
              
            </div>
          </div>

          <FAQSection title="Itinerary Questions" faqs={itineraryFaqs} />
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div className="bg-slate-900 p-8 rounded-3xl text-white sticky top-24">
            <h3 className="text-2xl font-bold mb-2">Ready to Go?</h3>
            <p className="text-slate-400 text-sm mb-8">Save this itinerary to your profile or use it to start booking your flights and hotels.</p>
            
            <div className="flex items-center justify-between p-4 bg-slate-800 rounded-xl mb-6 border border-slate-700">
              <div>
                <div className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">Travelers Rating</div>
                <div className="flex items-center gap-1.5">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-xl font-bold">{itinerary.rating}</span>
                  <span className="text-slate-400 text-sm">({itinerary.reviews})</span>
                </div>
              </div>
            </div>

            <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-colors mb-4 flex items-center justify-center gap-2">
              Save to My Trip <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full bg-transparent hover:bg-slate-800 border border-slate-600 text-white font-medium py-3.5 rounded-xl transition-colors">
              Customize this route
            </button>

            <hr className="border-slate-700 my-8" />

            <div className="space-y-4">
              <h4 className="font-bold text-sm text-slate-300 uppercase tracking-wider">Destinations on this route</h4>
              {itinerary.destinations.map(dest => (
                <div key={dest} className="flex items-center justify-between group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-slate-600 group-hover:bg-red-500 transition-colors"></div>
                    <span className="text-slate-300 group-hover:text-white transition-colors">{dest}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-red-500 transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Map Modal */}
      {isMapExpanded && (itinerary as any).mapImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/90 backdrop-blur-sm p-4 md:p-8" 
          onClick={() => setIsMapExpanded(false)}
        >
          <button 
            onClick={(e) => { e.stopPropagation(); setIsMapExpanded(false); }}
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white hover:text-red-500 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-2.5 transition-colors z-50"
          >
            <X className="w-6 h-6" />
          </button>
          <div 
            className="relative max-w-5xl w-full max-h-[90vh] overflow-auto rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={(itinerary as any).mapImage} 
              alt={`${itinerary.title} Route Map Full`} 
              className="w-full h-auto block"
            />
          </div>
        </div>
      )}
    </div>
  );
}
