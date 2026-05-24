import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { DESTINATIONS } from "../mockData";
import { MapPin, Star, Share2, Calendar, Compass, Info, Plane, Facebook, Twitter, Instagram, Link2, ArrowRight, X, ZoomIn } from "lucide-react";
import {
  FAQSection,
  Seo,
  absoluteUrl,
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildWebPageJsonLd,
  truncateDescription,
} from "../seo";

function BeijingIntroIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      role="img"
      aria-label="Beijing city guide"
      className={className}
    >
      <circle cx="24" cy="24" r="22" fill="#fff7ed" />
      <path
        d="M10 23.5h28l-4.2-6.3H14.2L10 23.5Z"
        fill="#dc2626"
        stroke="#991b1b"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M15 16.8h18l-3.2-5H18.2l-3.2 5Z"
        fill="#f97316"
        stroke="#991b1b"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 23.5h19v13h-19v-13Z"
        fill="#b91c1c"
        stroke="#7f1d1d"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M18 27h3.5v9.5H18V27Zm8.5 0H30v9.5h-3.5V27Z" fill="#fef3c7" />
      <path
        d="M21.1 36.5v-5.2a2.9 2.9 0 1 1 5.8 0v5.2h-5.8Z"
        fill="#450a0a"
      />
      <path
        d="M8 38h32M13 23.5h22M17 16.8h14"
        fill="none"
        stroke="#7f1d1d"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="36.5" cy="11.5" r="3.1" fill="#facc15" />
    </svg>
  );
}

function TravelMapIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={className}>
      <circle cx="24" cy="24" r="22" fill="#fff7ed" />
      <path
        d="M10 13.5 19 10l10 4 9-3.5v24l-9 3.5-10-4-9 3.5v-24Z"
        fill="#fef3c7"
        stroke="#92400e"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M19 10v24M29 14v24" stroke="#d97706" strokeWidth="1.4" strokeLinecap="round" />
      <path
        d="M14 30c4-8 9 2 13-6 3.3-6.6 7.2-2.3 8-7"
        fill="none"
        stroke="#dc2626"
        strokeWidth="2"
        strokeDasharray="3 3"
        strokeLinecap="round"
      />
      <path
        d="M31 15.2c0-3.2 2.5-5.7 5.6-5.7s5.6 2.5 5.6 5.7c0 4.2-5.6 9.4-5.6 9.4S31 19.4 31 15.2Z"
        fill="#dc2626"
        stroke="#7f1d1d"
        strokeWidth="1.5"
      />
      <circle cx="36.6" cy="15.2" r="2" fill="#fef3c7" />
    </svg>
  );
}

function AttractionsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={className}>
      <circle cx="24" cy="24" r="22" fill="#fff7ed" />
      <path
        d="M9 29.5h30l-4.4-7H13.4l-4.4 7Z"
        fill="#dc2626"
        stroke="#991b1b"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 22.5h19l-3.5-5.6H18l-3.5 5.6Z"
        fill="#f97316"
        stroke="#991b1b"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M14 29.5h20v8H14v-8Z"
        fill="#7f1d1d"
        stroke="#450a0a"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M18 33h4M26 33h4" stroke="#fef3c7" strokeWidth="1.6" strokeLinecap="round" />
      <path
        d="m36.2 10.2 1.6 3.2 3.5.5-2.6 2.5.6 3.5-3.1-1.6-3.1 1.6.6-3.5-2.6-2.5 3.5-.5 1.6-3.2Z"
        fill="#facc15"
        stroke="#92400e"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path d="M10 38h28M12 29.5h24" stroke="#7f1d1d" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function CuisineIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={className}>
      <circle cx="24" cy="24" r="22" fill="#fff7ed" />
      <path d="M13 26h22c0 7-4.6 11-11 11s-11-4-11-11Z" fill="#dc2626" />
      <path
        d="M12 26h24M16 37h16"
        stroke="#7f1d1d"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M16.5 20.5c0-2.4 2.4-2.4 2.4-4.7M23.5 20.5c0-2.4 2.4-2.4 2.4-4.7M30.5 20.5c0-2.4 2.4-2.4 2.4-4.7"
        fill="none"
        stroke="#f97316"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path d="M15 13.5 35 25M19 10.5 39 22" stroke="#92400e" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M18 29h12" stroke="#fef3c7" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function TravelQuestionsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={className}>
      <circle cx="24" cy="24" r="22" fill="#fff7ed" />
      <path
        d="M11 14.5h25.5a5 5 0 0 1 5 5v8.8a5 5 0 0 1-5 5H24.4L17 39v-5.7h-6a5 5 0 0 1-5-5v-8.8a5 5 0 0 1 5-5Z"
        fill="#fef3c7"
        stroke="#92400e"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M20.2 22.2a5.1 5.1 0 0 1 10.1.6c0 4.2-5.1 4.1-5.1 7"
        fill="none"
        stroke="#dc2626"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <circle cx="25.2" cy="34.2" r="1.7" fill="#dc2626" />
      <path
        d="M12.8 18.8h5.5M12.8 24.2h4"
        stroke="#f97316"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Destination() {
  const { id } = useParams();
  const destination = DESTINATIONS.find(d => d.id === id);
  const [isMapOpen, setIsMapOpen] = useState(false);

  useEffect(() => {
    if (!isMapOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMapOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMapOpen]);

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
  const destinationMap = (destination as {
    mapImage?: string;
    mapTitle?: string;
    mapDescription?: string;
  });
  const destinationImages = destinationMap.mapImage
    ? [destination.image, destinationMap.mapImage]
    : destination.image;
  const aboutIcon =
    destination.id === "beijing" ? (
      <BeijingIntroIcon className="w-8 h-8 shrink-0" />
    ) : (
      <Info className="w-8 h-8 shrink-0 text-primary" />
    );
  const mapIcon = <TravelMapIcon className="w-8 h-8 shrink-0" />;
  const attractionsIcon = <AttractionsIcon className="w-8 h-8 shrink-0" />;
  const cuisineIcon = <CuisineIcon className="w-8 h-8 shrink-0" />;
  const questionsIcon = <TravelQuestionsIcon className="w-8 h-8 shrink-0" />;
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
    "image": destinationImages,
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

  const handleShare = async (platform: string) => {
    const url = window.location.href;
    const platformName =
      platform === "twitter" ? "X (Twitter)" : platform.charAt(0).toUpperCase() + platform.slice(1);

    const copyMessage =
      platform === "copy"
        ? "Link copied to clipboard!"
        : `Link copied! You can now paste it in ${platformName}.`;

    switch (platform) {
      case 'facebook':
      case 'twitter':
      case 'instagram':
      case 'copy':
        try {
          await navigator.clipboard.writeText(url);
          alert(copyMessage);
        } catch {
          window.prompt("Copy this link:", url);
        }
        break;
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
              {aboutIcon} About {destination.name}
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

          {destinationMap.mapImage && (
            <section>
              <h2 className="mb-6 flex items-center gap-3 text-foreground">
                {mapIcon} {destinationMap.mapTitle || `${destination.name} Travel Map`}
              </h2>
              {destinationMap.mapDescription && (
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {destinationMap.mapDescription}
                </p>
              )}
              <button
                type="button"
                onClick={() => setIsMapOpen(true)}
                aria-label={`Open ${destinationMap.mapTitle || `${destination.name} travel guide map`}`}
                className="group relative block w-full overflow-hidden rounded-xl border border-border bg-card text-left cursor-zoom-in transition-shadow hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <img
                  src={destinationMap.mapImage}
                  alt={destinationMap.mapTitle || `${destination.name} travel guide map`}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.015]"
                  loading="lazy"
                />
                <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white opacity-0 shadow-lg backdrop-blur-sm transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                  <ZoomIn className="h-5 w-5" aria-hidden="true" />
                </span>
              </button>
            </section>
          )}

          {/* Top Sights */}
          {destination.sights && destination.sights.length > 0 && (
            <section>
              <h2 className="mb-8 flex items-center gap-3 text-foreground">
                {attractionsIcon} Must-See Attractions
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
                {cuisineIcon} Local Cuisine to Try
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

          <FAQSection title={`${destination.name} Travel Questions`} faqs={destinationFaqs} icon={questionsIcon} />
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

      {isMapOpen && destinationMap.mapImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label={destinationMap.mapTitle || `${destination.name} travel guide map`}
          onClick={() => setIsMapOpen(false)}
        >
          <button
            type="button"
            onClick={() => setIsMapOpen(false)}
            aria-label="Close image preview"
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white shadow-lg backdrop-blur-md transition-colors hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
          <div
            className="max-h-[92vh] max-w-[96vw] overflow-hidden rounded-xl shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={destinationMap.mapImage}
              alt={destinationMap.mapTitle || `${destination.name} travel guide map`}
              className="max-h-[92vh] max-w-[96vw] bg-black object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
