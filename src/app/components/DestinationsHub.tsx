import { useState } from "react";
import { Link } from "react-router";
import { DESTINATIONS } from "../mockData";
import { Search, MapPin, Star, Filter, Navigation } from "lucide-react";
import {
  FAQSection,
  Seo,
  absoluteUrl,
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildWebPageJsonLd,
} from "../seo";

const destinationFaqs = [
  {
    question: "Which China destinations are best for a first visit?",
    answer:
      "Beijing, Xi'an, Chengdu, and Shanghai make a strong first route because they cover imperial history, ancient sites, Sichuan food, pandas, and modern city life.",
  },
  {
    question: "Which China destinations are best for nature?",
    answer:
      "Guilin, Yangshuo, Zhangjiajie, and Hangzhou are good nature-focused choices with river landscapes, karst scenery, mountains, lakes, and hiking options.",
  },
  {
    question: "How should I choose cities for a China trip?",
    answer:
      "Choose by travel theme, route efficiency, and season. Combine nearby cities by high-speed rail and avoid adding too many long-distance transfers.",
  },
];

export function DestinationsHub() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "History", "Nature", "Modern", "Culture", "Food"];

  const filteredDestinations = DESTINATIONS.filter((dest) => {
    const matchesSearch = dest.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          dest.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === "All" || dest.tags.includes(activeFilter);
    return matchesSearch && matchesFilter;
  });

  const pageDescription =
    "Compare the best places to visit in China, including Beijing, Shanghai, Xi'an, Chengdu, Guilin, Hangzhou, Hong Kong, and Zhangjiajie.";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Top Destinations in China",
    "description": pageDescription,
    "itemListElement": DESTINATIONS.map((dest, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "item": {
        "@type": "TouristDestination",
        "name": dest.name,
        "description": dest.description,
        "image": dest.image,
        "url": absoluteUrl(`/destination/${dest.id}`)
      }
    }))
  };

  return (
    <div className="w-full bg-background min-h-screen">
      <Seo
        title="Best Places to Visit in China"
        description={pageDescription}
        path="/destinations"
        keywords={["best places to visit in China", "China destinations", "China city guide"]}
        jsonLd={[
          buildWebPageJsonLd({
            path: "/destinations",
            name: "Best Places to Visit in China",
            description: pageDescription,
            type: "CollectionPage",
          }),
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Destinations", path: "/destinations" },
          ]),
          jsonLd,
          buildFaqJsonLd(destinationFaqs),
        ]}
      />

      {/* Hero Section */}
      <div className="relative bg-primary text-primary-foreground overflow-hidden py-24">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1584441407759-073f2344cdef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluYSUyMG1hcCUyMHRyYXZlbHxlbnwxfHx8fDE3NzkyMDIzMzd8MA&ixlib=rb-4.1.0&q=80&w=1080" 
            alt="Map for planning China destinations" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/80 to-primary"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Navigation className="w-12 h-12 text-destructive mx-auto mb-6" />
          <h1 className="mb-6 tracking-tight">
            Explore All Destinations
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-90">
            From the bustling megacities on the coast to the mystical mountains in the west, discover the incredible diversity of China.
          </p>

          <div className="bg-background/10 backdrop-blur-md p-2 rounded-xl border border-border/20 flex items-center max-w-3xl mx-auto shadow-2xl focus-within:bg-background/20 transition-colors">
            <Search className="w-6 h-6 opacity-70 ml-4 mr-2" />
            <input 
              type="text" 
              placeholder="Search destinations by name or keyword..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 outline-none bg-transparent text-primary-foreground placeholder:text-primary-foreground/50 py-3"
            />
            <button className="bg-destructive hover:opacity-90 text-destructive-foreground px-8 py-3 rounded-lg transition-colors">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Filters */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h2 className="text-foreground">
              {filteredDestinations.length} {filteredDestinations.length === 1 ? 'Destination' : 'Destinations'} Found
            </h2>
          </div>
          
          <div className="flex items-center gap-2 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
            <div className="flex items-center gap-2 text-muted-foreground mr-2">
              <Filter className="w-5 h-5" /> Filter by:
            </div>
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`whitespace-nowrap px-5 py-2 rounded-full transition-colors ${
                  activeFilter === filter 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-card text-card-foreground hover:bg-secondary border border-border"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {filteredDestinations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map(dest => (
              <Link key={dest.id} to={`/destination/${dest.id}`} className="group flex flex-col bg-card rounded-xl overflow-hidden border border-border hover:shadow-xl hover:border-border/80 transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={dest.image} 
                    alt={dest.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                  
                  <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
                    {dest.tags.map((tag, idx) => (
                      <span key={idx} className="bg-background/90 backdrop-blur-sm text-foreground text-xs px-3 py-1 rounded-full shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="mb-1 flex items-center gap-2 text-white">
                      {dest.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1 text-sm font-medium">
                        <MapPin className="w-4 h-4 text-destructive" /> China
                      </span>
                      <span className="flex items-center gap-1 text-sm bg-black/40 px-2 py-1 rounded-lg">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" /> {dest.rating}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-1 bg-card text-card-foreground">
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-1">
                    {dest.description}
                  </p>
                  
                  {dest.foods && dest.foods.length > 0 && (
                    <div className="mb-6">
                      <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Must Try Cuisines</div>
                      <div className="flex flex-wrap gap-2">
                        {dest.foods.slice(0, 2).map((food, idx) => (
                          <span key={idx} className="bg-secondary text-secondary-foreground text-xs px-2.5 py-1 rounded-md border border-border">
                            {food.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between border-t border-border pt-4 mt-auto">
                    <div className="text-sm font-medium text-muted-foreground">
                      {dest.reviews} Reviews
                    </div>
                    <div className="text-primary font-medium text-sm group-hover:underline">
                      Explore Destination →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-card rounded-xl border border-border">
            <Navigation className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-medium text-card-foreground mb-2">No Destinations Found</h3>
            <p className="text-muted-foreground mb-6">We couldn't find any destinations matching your criteria.</p>
            <button 
              onClick={() => {
                setSearchTerm("");
                setActiveFilter("All");
              }}
              className="bg-primary hover:opacity-90 text-primary-foreground px-6 py-2.5 rounded-lg transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        <FAQSection title="China Destination Questions" faqs={destinationFaqs} />
      </div>
    </div>
  );
}
