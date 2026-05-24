import { useState } from "react";
import { Link } from "react-router";
import { GUIDES } from "../mockData";
import { Search, Filter, BookOpen, Eye, Heart, ArrowRight } from "lucide-react";
import {
  FAQSection,
  Seo,
  absoluteUrl,
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildWebPageJsonLd,
} from "../seo";

const guideFaqs = [
  {
    question: "What should I read before a first China trip?",
    answer:
      "Start with practical articles on mobile payments, travel apps, connectivity, trains, cultural norms, and a first-time itinerary.",
  },
  {
    question: "Are China travel apps important for visitors?",
    answer:
      "Yes. Payments, ride-hailing, translation, maps, and some attraction services are app-based, so setup before arrival saves time.",
  },
  {
    question: "How do these guides help with trip planning?",
    answer:
      "They turn common pre-trip questions into direct answers, checklists, and route ideas for international travelers.",
  },
];

export function GuidesHub() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const allTags = ["All", ...Array.from(new Set(GUIDES.flatMap(g => g.tags)))];

  const filteredGuides = GUIDES.filter((guide) => {
    const matchesSearch = guide.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === "All" || guide.tags.includes(activeFilter);
    return matchesSearch && matchesFilter;
  });

  const pageDescription =
    "Read practical China travel tips for international visitors, including apps, payments, food, cultural basics, and first-time itinerary planning.";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "China Travel Tips & Guides",
    "description": pageDescription,
    "itemListElement": GUIDES.map((guide, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "item": {
        "@type": "Article",
        "headline": guide.title,
        "image": guide.image,
        "url": absoluteUrl(`/guide/${guide.id}`)
      }
    }))
  };

  return (
    <div className="w-full bg-background min-h-screen">
      <Seo
        title="China Travel Tips and Guides"
        description={pageDescription}
        path="/guides"
        keywords={["China travel tips", "China travel apps", "China first time guide"]}
        jsonLd={[
          buildWebPageJsonLd({
            path: "/guides",
            name: "China Travel Tips and Guides",
            description: pageDescription,
            type: "CollectionPage",
          }),
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Guides", path: "/guides" },
          ]),
          jsonLd,
          buildFaqJsonLd(guideFaqs),
        ]}
      />

      {/* Hero Section */}
      <div className="bg-primary text-primary-foreground py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="currentColor" strokeWidth="2" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pattern)" />
          </svg>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <BookOpen className="w-12 h-12 mx-auto mb-6 opacity-90" />
          <h1 className="mb-6">Travel Tips & Guides</h1>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Everything you need to know before you go. From navigating the Great Firewall to mastering chopsticks, read advice from travelers who have been there.
          </p>

          <div className="bg-card p-2 rounded-xl flex items-center shadow-lg max-w-2xl mx-auto border border-border">
            <Search className="w-6 h-6 text-muted-foreground ml-4 mr-2 shrink-0" />
            <input 
              type="text" 
              placeholder="Search articles, e.g., 'Alipay', 'High-speed train'..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 outline-none text-card-foreground py-3 bg-transparent placeholder:text-muted-foreground"
            />
            <button className="bg-destructive hover:opacity-90 text-destructive-foreground px-8 py-3 rounded-lg transition-colors">
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide">
          <div className="flex items-center gap-2 text-muted-foreground mr-2 shrink-0">
            <Filter className="w-5 h-5" /> Topics:
          </div>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`whitespace-nowrap px-5 py-2 rounded-full transition-colors ${
                activeFilter === tag 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-card text-card-foreground hover:bg-secondary border border-border"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Article Grid */}
        {filteredGuides.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGuides.map(guide => (
              <Link key={guide.id} to={`/guide/${guide.id}`} className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-xl hover:border-border/80 transition-all duration-300 flex flex-col group">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img 
                    src={guide.image} 
                    alt={guide.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                    {guide.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="mb-4 line-clamp-3 group-hover:text-primary transition-colors text-card-foreground">
                    {guide.title}
                  </h3>
                  
                  <div className="mt-auto pt-6 border-t border-border flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img src={guide.author.avatar} alt={guide.author.name} className="w-10 h-10 rounded-full object-cover border-2 border-border shadow-sm" />
                      <div className="text-sm font-medium text-foreground">{guide.author.name}</div>
                    </div>
                    
                    <div className="flex items-center gap-3 text-muted-foreground text-sm font-medium">
                      <span className="flex items-center gap-1"><Eye className="w-4 h-4"/> {guide.views}</span>
                      <span className="flex items-center gap-1"><Heart className="w-4 h-4 text-destructive"/> {guide.likes}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-card rounded-xl border border-border">
            <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-medium text-card-foreground mb-2">No Guides Found</h3>
            <p className="text-muted-foreground mb-6">We couldn't find any articles matching your search.</p>
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

        <FAQSection title="China Travel Guide Questions" faqs={guideFaqs} />
      </div>
    </div>
  );
}
