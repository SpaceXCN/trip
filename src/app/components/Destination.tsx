import { useParams, Link } from "react-router";
import { DESTINATIONS } from "../mockData";
import { MapPin, Star, Share2, Calendar, Compass, Info, Image as ImageIcon, Utensils, Plane, Facebook, Twitter, Instagram, Link2, ArrowRight } from "lucide-react";
import {
  FAQSection,
  Seo,
  absoluteUrl,
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildWebPageJsonLd,
  truncateDescription,
} from "../seo";

export function Destination() {
  const { id } = useParams();
  const destination = DESTINATIONS.find(d => d.id === id);

  if (!destination) {
    return (
      <div className="w-full min-h-screen bg-background flex flex-col items-center justify-center p-8">
        <Seo
          title="Destination Not Found"
          description="This China destination guide could not be found."
          path={`/destination/${id || ""}`}
          noindex
        />
        <h1 className="text-2xl font-semibold text-foreground mb-4">Destination not found</h1>
        <Link to="/destinations" className="text-primary hover:underline">
          Return to Destinations
        </Link>
      </div>
    );
  }

  const destinationPath = `/destination/${destination.id}`;
  const pageDescription = truncateDescription(
    `Discover ${destination.name}: ${destination.description}`,
  );
  const destinationFaqs = [
    {
      question: `What is ${destination.name} best known for?`,
      answer: destination.description,
    },
    {
      question: `How long should I spend in ${destination.name}?`,
      answer: destination.practicalInfo?.duration
        ? `Plan around ${destination.practicalInfo.duration} for a focused visit to ${destination.name}.`
        : `${destination.name} works best as part of a route planned around your travel theme and pace.`,
    },
    {
      question: `When is the best time to visit ${destination.name}?`,
      answer: destination.practicalInfo?.bestTime
        ? `The best time to visit ${destination.name} is ${destination.practicalInfo.bestTime}.`
        : `Check local weather and holiday calendars before choosing dates for ${destination.name}.`,
    },
    {
      question: `What local food should I try in ${destination.name}?`,
      answer:
        destination.foods && destination.foods.length > 0
          ? `Try ${destination.foods.map((food) => food.name).join(", ")} while visiting ${destination.name}.`
          : `${destination.name} has regional dishes worth checking at busy local restaurants and markets.`,
    },
  ];

  // Generate JSON-LD for the destination
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "@id": `${absoluteUrl(destinationPath)}#destination`,
    "name": destination.name,
    "description": destination.description,
    "image": destination.image,
    "url": absoluteUrl(destinationPath),
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CN"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": destination.rating,
      "reviewCount": destination.reviews
    }
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = `Check out ${destination.name} - Travel Guide on Roam China!`;
    
    let shareUrl = '';
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
        return;
      case 'instagram':
        // Instagram doesn't have a direct web share intent like FB/Twitter
        navigator.clipboard.writeText(url);
        alert('Link copied! You can now paste it in Instagram.');
        return;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  return (
    <div className="w-full pb-20 bg-background min-h-screen">
      <Seo
        title={`${destination.name} Travel Guide`}
        description={pageDescription}
        path={destinationPath}
        image={destination.image}
        keywords={[`${destination.name} travel guide`, `${destination.name} China`, "China destination guide"]}
        jsonLd={[
          buildWebPageJsonLd({
            path: destinationPath,
            name: `${destination.name} Travel Guide`,
            description: pageDescription,
            image: destination.image,
          }),
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Destinations", path: "/destinations" },
            { name: destination.name, path: destinationPath },
          ]),
          jsonLd,
          buildFaqJsonLd(destinationFaqs),
        ]}
      />

      {/* Destination Hero */}
      <div className="relative h-[500px] w-full">
        <img 
          src={destination.image} 
          alt={destination.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 max-w-7xl mx-auto xl:px-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6">
            <div className="text-white">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="bg-destructive text-destructive-foreground text-xs px-3 py-1.5 rounded-full uppercase tracking-wider">Top Pick</span>
                {destination.tags.map(tag => (
                  <span key={tag} className="bg-white/20 backdrop-blur-md text-xs px-3 py-1.5 rounded-full">{tag}</span>
                ))}
              </div>
              <h1 className="mb-4 text-white">{destination.name}</h1>
              <div className="flex flex-wrap items-center gap-6 text-sm opacity-90">
                <span className="flex items-center gap-1.5 text-lg"><MapPin className="w-5 h-5"/> China / {destination.name}</span>
                <span className="flex items-center gap-1.5 text-lg bg-black/30 px-3 py-1 rounded-lg">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400"/> 
                  <span className="font-bold">{destination.rating}</span> 
                  <span className="opacity-80">({destination.reviews} reviews)</span>
                </span>
              </div>
            </div>
            <div className="flex gap-3 group relative">
              <button className="flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white px-6 py-3 rounded-lg transition-all">
                <Share2 className="w-5 h-5"/> <span>Share</span>
              </button>
              
              <div className="absolute top-full right-0 mt-2 bg-card rounded-lg shadow-xl p-2 flex flex-col gap-1 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 z-50 min-w-[160px] translate-y-[-10px] group-hover:translate-y-0 border border-border">
                <button 
                  onClick={() => handleShare('facebook')}
                  className="flex items-center gap-3 w-full px-4 py-2.5 text-left text-card-foreground hover:bg-secondary rounded-lg transition-colors group/btn"
                >
                  <Facebook className="w-4 h-4 group-hover/btn:scale-110 transition-transform" /> <span>Facebook</span>
                </button>
                <button 
                  onClick={() => handleShare('twitter')}
                  className="flex items-center gap-3 w-full px-4 py-2.5 text-left text-card-foreground hover:bg-secondary rounded-lg transition-colors group/btn"
                >
                  <Twitter className="w-4 h-4 group-hover/btn:scale-110 transition-transform" /> <span>X (Twitter)</span>
                </button>
                <button 
                  onClick={() => handleShare('instagram')}
                  className="flex items-center gap-3 w-full px-4 py-2.5 text-left text-card-foreground hover:bg-secondary rounded-lg transition-colors group/btn"
                >
                  <Instagram className="w-4 h-4 group-hover/btn:scale-110 transition-transform" /> <span>Instagram</span>
                </button>
                <div className="h-px bg-border my-1 mx-2"></div>
                <button 
                  onClick={() => handleShare('copy')}
                  className="flex items-center gap-3 w-full px-4 py-2.5 text-left text-card-foreground hover:bg-secondary rounded-lg transition-colors group/btn"
                >
                  <Link2 className="w-4 h-4 group-hover/btn:scale-110 transition-transform" /> <span>Copy Link</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-16">
          {/* About */}
          <section>
            <h2 className="mb-6 flex items-center gap-3 text-foreground">
              <Info className="w-8 h-8 text-primary"/> About {destination.name}
            </h2>
            <div className="prose prose-lg text-muted-foreground">
              <p className="leading-relaxed">
                {destination.description}
              </p>
              <p className="leading-relaxed mt-4">
                Whether you are looking to explore historical landmarks, taste authentic local cuisine, or simply wander through bustling streets, {destination.name} has something to offer for every international traveler looking to experience the real China.
              </p>
            </div>
          </section>

          {/* Top Sights */}
          {destination.sights && destination.sights.length > 0 && (
            <section>
              <h2 className="mb-8 flex items-center gap-3 text-foreground">
                <ImageIcon className="w-8 h-8 text-primary"/> Must-See Attractions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {destination.sights.map((sight, idx) => (
                  <div key={idx} className="group rounded-xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 bg-card flex flex-col">
                    <div className="h-48 overflow-hidden relative">
                      <img 
                        src={sight.image} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                        alt={sight.name} 
                      />
                      <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1 text-xs font-medium text-foreground shadow-sm">
                        <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" /> {sight.rating}
                      </div>
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="mb-2 text-card-foreground">{sight.name}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-1">
                        {sight.description}
                      </p>
                      <button className="text-primary font-medium text-sm self-start hover:underline">
                        Read more
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Local Food */}
          {destination.foods && destination.foods.length > 0 && (
            <section>
              <h2 className="mb-8 flex items-center gap-3 text-foreground">
                <Utensils className="w-8 h-8 text-primary"/> Local Cuisine to Try
              </h2>
              <div className="space-y-6">
                {destination.foods.map((food, idx) => (
                  <Link key={idx} to={`/food/${food.id}`} className="group flex flex-col sm:flex-row gap-6 p-4 rounded-xl bg-card border border-border items-center hover:border-primary/50 hover:shadow-md transition-all">
                    <div className="overflow-hidden rounded-lg shrink-0">
                      <img src={food.image} className="w-full sm:w-40 h-40 sm:h-32 object-cover group-hover:scale-105 transition-transform duration-500" alt={food.name} />
                    </div>
                    <div className="flex-1 w-full">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-card-foreground group-hover:text-primary transition-colors m-0">{food.name}</h3>
                        <span className="text-primary text-sm font-medium flex items-center gap-1">
                          View Menu <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                      <p className="text-muted-foreground">{food.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <FAQSection title={`${destination.name} Travel Questions`} faqs={destinationFaqs} />
        </div>

        {/* Sidebar */}
        <div className="space-y-8 sticky top-24 self-start z-10 transition-transform duration-300">
          {/* Practical Info Card */}
          <div className="bg-card p-8 rounded-xl border border-border shadow-sm">
            <h3 className="mb-6 text-card-foreground border-b border-border pb-4">Practical Info</h3>
            
            <ul className="space-y-6">
              {destination.practicalInfo?.bestTime && (
                <li className="flex items-start gap-4">
                  <div className="bg-secondary p-2.5 rounded-lg text-secondary-foreground">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-medium text-card-foreground">Best Time to Visit</div>
                    <div className="text-muted-foreground mt-1">{destination.practicalInfo.bestTime}</div>
                  </div>
                </li>
              )}
              
              {destination.practicalInfo?.duration && (
                <li className="flex items-start gap-4">
                  <div className="bg-secondary p-2.5 rounded-lg text-secondary-foreground">
                    <Compass className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-medium text-card-foreground">Suggested Duration</div>
                    <div className="text-muted-foreground mt-1">{destination.practicalInfo.duration}</div>
                  </div>
                </li>
              )}

              {destination.practicalInfo?.airport && (
                <li className="flex items-start gap-4">
                  <div className="bg-secondary p-2.5 rounded-lg text-secondary-foreground">
                    <Plane className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-medium text-card-foreground">Main Airport</div>
                    <div className="text-muted-foreground mt-1">{destination.practicalInfo.airport}</div>
                  </div>
                </li>
              )}
            </ul>
          </div>

          <div className="bg-primary p-8 rounded-xl text-primary-foreground border border-border">
            <h3 className="mb-3 text-primary-foreground">Related Guides</h3>
            <p className="text-sm opacity-80 mb-6">See how other foreign travelers experienced {destination.name}</p>
            <div className="space-y-4">
              <Link to="/guide/g1" className="block p-4 bg-background/10 rounded-lg hover:bg-background/20 transition-colors border border-border/20">
                <div className="font-medium text-sm line-clamp-2 mb-2 leading-relaxed">
                  First Time in China? The Ultimate 14-Day Itinerary
                </div>
                <div className="text-xs opacity-70 flex items-center gap-2">
                  <img src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMGZlbWFsZSUyMHNtaWxlfGVufDF8fHx8MTc3OTIwMDY4N3ww&ixlib=rb-4.1.0&q=80&w=1080" className="w-5 h-5 rounded-full object-cover" alt="Sarah Traveler author avatar" />
                  By Sarah Traveler
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
