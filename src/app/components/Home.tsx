import { Link } from "react-router";
import { Search, MapPin, Star, Heart, Eye } from "lucide-react";
import { DESTINATIONS, GUIDES } from "../mockData";
import {
  FAQSection,
  Seo,
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

export function Home() {
  const pageDescription =
    "Plan a China trip with practical destination guides, day-by-day itineraries, local cuisine guides, travel app setup, and first-time visitor tips.";
  const jsonLd = [
    buildOrganizationJsonLd(),
    buildWebSiteJsonLd(),
    buildWebPageJsonLd({
      path: "/",
      name: "Roam China Travel Guide",
      description: pageDescription,
    }),
    buildFaqJsonLd(homeFaqs),
  ];

  return (
    <div className="w-full bg-background min-h-screen">
      <Seo
        title="China Travel Guide for International Tourists"
        description={pageDescription}
        path="/"
        keywords={["China travel guide", "China itinerary", "Chinese cuisine", "travel China"]}
        jsonLd={jsonLd}
      />

      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center bg-primary">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1513781050488-6dd358209a1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGNoaW5lc2UlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc5MjAwOTA0fDA&ixlib=rb-4.1.0&q=80&w=1080" 
            alt="Traditional Chinese architecture for a China travel guide" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-primary/60"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-4xl px-4 text-center">
          <h1 className="text-white mb-6 drop-shadow-md">
            Discover the Real China
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 drop-shadow-sm">
            Your essential guide to navigating, exploring, and experiencing the Middle Kingdom.
          </p>
          
          <div className="bg-card p-2 rounded-xl shadow-xl flex items-center max-w-2xl mx-auto border border-border">
            <div className="pl-4 pr-2 text-muted-foreground">
              <Search className="w-6 h-6" />
            </div>
            <input 
              type="text" 
              placeholder="Where to? (e.g. Beijing, Shanghai)" 
              className="flex-1 outline-none bg-transparent text-card-foreground placeholder:text-muted-foreground py-3"
            />
            <button className="bg-destructive hover:opacity-90 text-destructive-foreground px-8 py-3 rounded-lg transition-colors">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="mb-2 text-foreground">Top Destinations</h2>
            <p className="text-muted-foreground">Most popular cities and regions among international travelers</p>
          </div>
          <Link to="/destinations" className="text-primary font-medium hover:underline hidden sm:block">
            View All
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DESTINATIONS.slice(0, 4).map((dest) => (
            <Link key={dest.id} to={`/destination/${dest.id}`} className="group cursor-pointer block">
              <div className="relative rounded-xl overflow-hidden aspect-[4/5] mb-4 border border-border">
                <img 
                  src={dest.image} 
                  alt={dest.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center gap-1 font-medium text-lg mb-1 text-white">
                    <MapPin className="w-4 h-4" />
                    {dest.name}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-white/80">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{dest.rating}</span>
                    <span className="ml-1">({dest.reviews} reviews)</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Itinerary CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-primary rounded-xl overflow-hidden shadow-2xl relative border border-border">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1564632570063-9ce5e7bd724e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluYSUyMGJ1bGxldCUyMHRyYWlufGVufDF8fHx8MTc3OTIwMjU3Mnww&ixlib=rb-4.1.0&q=80&w=1080" 
              alt="China high-speed train itinerary planning" 
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="relative z-10 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-primary-foreground max-w-2xl text-center md:text-left">
              <h2 className="mb-4 text-primary-foreground">Don't want to plan? Follow our routes.</h2>
              <p className="text-lg opacity-80">
                Discover our expertly crafted itineraries. From the classic Golden Triangle to deep dives into the ancient Silk Road, we have a route for every travel style.
              </p>
            </div>
            <Link to="/itineraries" className="bg-destructive hover:opacity-90 text-destructive-foreground px-8 py-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 whitespace-nowrap shrink-0">
              Explore Itineraries
            </Link>
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="mb-2 text-foreground">Essential Guides</h2>
              <p className="text-muted-foreground">Practical tips and itineraries from Chinese locals and travelers</p>
            </div>
            <Link to="/guides" className="text-primary font-medium hover:underline hidden sm:block">
              More Guides
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {GUIDES.map((guide) => (
              <Link key={guide.id} to={`/guide/${guide.id}`} className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 block group border border-border">
                <div className="aspect-[16/9] overflow-hidden">
                  <img 
                    src={guide.image} 
                    alt={guide.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex gap-2 mb-3">
                    {guide.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium text-destructive bg-destructive/10 px-2 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="mb-4 line-clamp-2 group-hover:text-primary transition-colors text-card-foreground">
                    {guide.title}
                  </h3>
                  
                  <div className="flex items-center justify-between border-t border-border pt-4 mt-auto">
                    <div className="flex items-center gap-3">
                      <img src={guide.author.avatar} alt={guide.author.name} className="w-8 h-8 rounded-full object-cover" />
                      <span className="text-sm font-medium text-card-foreground">{guide.author.name}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground text-sm">
                      <span className="flex items-center gap-1"><Eye className="w-4 h-4"/> {guide.views}</span>
                      <span className="flex items-center gap-1"><Heart className="w-4 h-4"/> {guide.likes}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <FAQSection title="China Travel Planning Questions" faqs={homeFaqs} />
      </section>
    </div>
  );
}
