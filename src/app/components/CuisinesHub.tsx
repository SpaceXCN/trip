import { Link } from "react-router";
import { Utensils, Flame, Info, CheckCircle2 } from "lucide-react";
import { CUISINES } from "../mockData";
import {
  FAQSection,
  Seo,
  absoluteUrl,
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildWebPageJsonLd,
} from "../seo";

const cuisineFaqs = [
  {
    question: "What are the major regional cuisines in China?",
    answer:
      "China's major culinary traditions include Sichuan, Shandong, Cantonese, Jiangsu, Fujian, Zhejiang, Hunan, and Anhui, with each shaped by local climate, ingredients, and history.",
  },
  {
    question: "Which Chinese cuisines are spicy?",
    answer:
      "Sichuan and Hunan are the most famous spicy cuisines, while Cantonese, Jiangsu, Zhejiang, and Shandong are often milder.",
  },
  {
    question: "How should travelers choose food destinations in China?",
    answer:
      "Choose destinations by the dishes you want to try: Chengdu for Sichuan food, Guangzhou or Hong Kong for Cantonese food, Xi'an for noodles and snacks, and Hangzhou or Shanghai for Jiangnan flavors.",
  },
];

export function CuisinesHub() {
  const pageDescription =
    "Explore China's regional cuisines, signature dishes, spice levels, and where travelers can experience authentic local food.";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Regional Chinese Cuisines",
    description: pageDescription,
    itemListElement: CUISINES.map((cuisine, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "DefinedTerm",
        name: cuisine.name,
        description: cuisine.description,
        url: absoluteUrl(`/cuisine/${cuisine.id}`),
      },
    })),
  };

  return (
    <div className="w-full bg-background min-h-screen">
      <Seo
        title="Regional Chinese Cuisines and Signature Dishes"
        description={pageDescription}
        path="/cuisines"
        keywords={["Chinese cuisines", "regional Chinese food", "China food guide"]}
        jsonLd={[
          buildWebPageJsonLd({
            path: "/cuisines",
            name: "Regional Chinese Cuisines and Signature Dishes",
            description: pageDescription,
            type: "CollectionPage",
          }),
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Cuisines", path: "/cuisines" },
          ]),
          jsonLd,
          buildFaqJsonLd(cuisineFaqs),
        ]}
      />

      {/* Hero Section */}
      <div className="bg-primary text-primary-foreground py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="pattern-food" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="2" fill="currentColor" />
                <path d="M15 30Q30 15 45 30T15 30" stroke="currentColor" fill="none" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pattern-food)" />
          </svg>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Utensils className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h1 className="mb-6 text-primary-foreground">Discover Chinese Cuisines</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            China's food landscape is incredibly diverse. From the fiery spice of Sichuan to the delicate dim sum of Canton, explore the major culinary regions that define authentic Chinese food.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h2 className="mb-4 text-foreground">The Eight Great Cuisines of China</h2>
          <p className="text-muted-foreground text-lg">
            China's culinary heritage is defined by the Eight Great Traditions. Each offers a distinct window into the region's climate, history, and local ingredients.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {CUISINES.map((cuisine) => (
            <Link key={cuisine.id} to={`/cuisine/${cuisine.id}`} className="bg-card rounded-xl overflow-hidden border border-border flex flex-col hover:shadow-xl hover:border-border/80 transition-all duration-300 group">
              <div className="relative h-64 sm:h-72 w-full">
                <img 
                  src={cuisine.image} 
                  alt={cuisine.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm text-foreground">
                  <Flame className={`w-4 h-4 ${cuisine.spicyLevel > 3 ? 'text-destructive' : 'text-orange-500'}`} />
                  <span className="text-sm font-medium">Spicy: {cuisine.spicyLevel}/5</span>
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-card-foreground group-hover:text-primary transition-colors">{cuisine.name}</h3>
                    <div className="text-primary font-medium">{cuisine.chineseName}</div>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {cuisine.description}
                </p>
                
                <div className="mt-auto space-y-4">
                  <div>
                    <div className="text-sm font-medium text-foreground mb-2 uppercase tracking-wide">Must-Try Dishes:</div>
                    <ul className="flex flex-wrap gap-2">
                      {cuisine.signatureDishes.map(dish => (
                        <li key={dish} className="bg-secondary text-secondary-foreground px-3 py-1 rounded-md text-sm flex items-center gap-1.5 border border-border">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary" /> {dish}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t border-border flex items-center justify-between">
                    <span className="text-sm text-muted-foreground flex items-center gap-1.5">
                      <Info className="w-4 h-4" /> Best in: {cuisine.region}
                    </span>
                    <span className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                      View Menu &rarr;
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <FAQSection title="Chinese Cuisine Questions" faqs={cuisineFaqs} />
      </div>
    </div>
  );
}
