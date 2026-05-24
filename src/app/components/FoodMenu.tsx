import { useParams, Link } from "react-router";
import { DESTINATIONS } from "../mockData";
import { ArrowLeft, Utensils, Info, X } from "lucide-react";
import { useState } from "react";
import {
  FAQSection,
  Seo,
  absoluteUrl,
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildWebPageJsonLd,
  truncateDescription,
} from "../seo";

export function FoodMenu() {
  const { foodId } = useParams();
  const [selectedItem, setSelectedItem] = useState<any>(null);

  // Find the food and its parent destination
  let foodItem = null;
  let parentDestination = null;

  for (const dest of DESTINATIONS) {
    const found = dest.foods?.find(f => f.id === foodId);
    if (found) {
      foodItem = found;
      parentDestination = dest;
      break;
    }
  }

  if (!foodItem || !parentDestination) {
    return (
      <div className="w-full min-h-screen bg-background flex flex-col items-center justify-center p-8">
        <Seo
          title="Food Guide Not Found"
          description="This local food guide could not be found."
          path={`/food/${foodId || ""}`}
          noindex
        />
        <h2 className="text-xl font-medium text-foreground mb-4">Cuisine not found</h2>
        <Link to="/destinations" className="text-primary hover:underline">
          Return to Destinations
        </Link>
      </div>
    );
  }

  const foodPath = `/food/${foodItem.id}`;
  const pageDescription = truncateDescription(
    `Explore ${foodItem.name} in ${parentDestination.name}: ${foodItem.description}`,
  );
  const foodFaqs = [
    {
      question: `What is ${foodItem.name}?`,
      answer: foodItem.description,
    },
    {
      question: `Where should I try ${foodItem.name}?`,
      answer: `${foodItem.name} is featured as a local specialty in ${parentDestination.name}.`,
    },
    {
      question: `Which dishes are part of ${foodItem.name}?`,
      answer:
        foodItem.menuItems && foodItem.menuItems.length > 0
          ? `Representative dishes include ${foodItem.menuItems.map((item) => item.name).join(", ")}.`
          : `Look for busy local restaurants in ${parentDestination.name} that specialize in this dish.`,
    },
  ];
  const menuJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${foodItem.name} Menu`,
    description: pageDescription,
    itemListElement: (foodItem.menuItems || []).map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "MenuItem",
        name: item.name,
        description: item.description,
        image: item.image,
        url: absoluteUrl(foodPath),
      },
    })),
  };

  return (
    <div className="w-full pb-20 bg-background min-h-screen">
      <Seo
        title={`${foodItem.name} in ${parentDestination.name}`}
        description={pageDescription}
        path={foodPath}
        image={foodItem.image}
        keywords={[foodItem.name, parentDestination.name, "China food guide"]}
        jsonLd={[
          buildWebPageJsonLd({
            path: foodPath,
            name: `${foodItem.name} in ${parentDestination.name}`,
            description: pageDescription,
            image: foodItem.image,
          }),
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Destinations", path: "/destinations" },
            { name: parentDestination.name, path: `/destination/${parentDestination.id}` },
            { name: foodItem.name, path: foodPath },
          ]),
          menuJsonLd,
          buildFaqJsonLd(foodFaqs),
        ]}
      />

      {/* Hero Header */}
      <div className="relative h-[400px] w-full">
        <img 
          src={foodItem.image} 
          alt={foodItem.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute top-8 left-8 z-10">
          <Link to={`/destination/${parentDestination.id}`} className="bg-background/20 hover:bg-background/40 backdrop-blur-md text-white p-3 rounded-full flex items-center justify-center transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </Link>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full p-8 max-w-4xl mx-auto">
          <div className="text-white">
            <span className="bg-primary text-primary-foreground text-xs px-3 py-1.5 rounded-full uppercase tracking-wider mb-4 inline-block shadow-sm">
              {parentDestination.name} Specialty
            </span>
            <h1 className="mb-4 text-white drop-shadow-md">{foodItem.name}</h1>
            <p className="text-lg opacity-90 max-w-2xl">
              {foodItem.description}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 md:p-8 border-b border-border bg-muted/30">
            <h2 className="flex items-center gap-3 text-foreground m-0">
              <Utensils className="w-6 h-6 text-primary"/> 
              Classic Dishes
            </h2>
            <p className="text-muted-foreground mt-2 text-sm flex items-center gap-2">
              <Info className="w-4 h-4"/> Essential dishes you must try to fully experience this cuisine.
            </p>
          </div>
          
          <div className="divide-y divide-border">
            {foodItem.menuItems && foodItem.menuItems.length > 0 ? (
              foodItem.menuItems.map((item, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setSelectedItem(item)}
                  className="group p-6 md:p-8 hover:bg-muted/10 transition-colors flex flex-col md:flex-row gap-6 items-start md:items-center cursor-pointer"
                >
                  {item.image && (
                    <div className="w-full md:w-32 h-48 md:h-32 shrink-0 rounded-lg overflow-hidden bg-muted">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-card-foreground mb-2 group-hover:text-primary transition-colors">{item.name}</h3>
                    <p className="text-muted-foreground leading-relaxed line-clamp-2">{item.description}</p>
                    <div className="mt-3 flex items-center text-primary text-sm font-medium opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <span>View Details</span>
                      <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-muted-foreground">
                No specific menu items listed for this cuisine yet. Check local restaurants in {parentDestination.name} for their offerings!
              </div>
            )}
          </div>
        </div>
        
        {/* Call to action */}
        <div className="mt-12 text-center">
          <Link to={`/destination/${parentDestination.id}`} className="inline-flex items-center gap-2 bg-primary hover:opacity-90 text-primary-foreground px-8 py-3 rounded-lg transition-colors font-medium">
            Explore more in {parentDestination.name} <ArrowLeft className="w-4 h-4 rotate-180" />
          </Link>
        </div>

        <FAQSection title={`${foodItem.name} Questions`} faqs={foodFaqs} />
      </div>

      {/* Article Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedItem(null)}
          ></div>
          <div className="relative w-full max-w-3xl bg-background rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300 max-h-[90vh] flex flex-col">
            <button 
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full transition-colors backdrop-blur-md"
            >
              <X className="w-5 h-5" />
            </button>
            
            {/* Modal Image */}
            <div className="w-full h-64 sm:h-80 shrink-0 relative">
              <img 
                src={selectedItem.image} 
                alt={selectedItem.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wider text-primary-foreground bg-primary rounded-full uppercase shadow-sm">
                  {parentDestination.name} Specialty
                </span>
                <h2 className="text-3xl sm:text-4xl font-semibold text-white drop-shadow-md m-0">
                  {selectedItem.name}
                </h2>
              </div>
            </div>
            
            {/* Modal Article Content */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 md:p-10 bg-card">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg md:text-xl text-card-foreground leading-loose md:leading-loose font-serif first-letter:float-left first-letter:text-6xl first-letter:pr-3 first-letter:font-bold first-letter:text-primary">
                  {selectedItem.description}
                </p>
                <div className="mt-8 pt-8 border-t border-border flex items-center gap-4 text-muted-foreground italic">
                  <div className="w-10 h-1 bg-primary/40 rounded"></div>
                  <p className="m-0 text-sm">A culinary treasure from {parentDestination.name}.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
