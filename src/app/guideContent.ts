import type { FaqItem } from "./seo";

export type GuideSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  image?: {
    src: string;
    alt: string;
  };
  note?: string;
};

export type GuideArticle = {
  description: string;
  lead: string;
  updatedLabel: string;
  datePublished: string;
  dateModified: string;
  readTime: string;
  sections: GuideSection[];
  sourceLinks?: Array<{
    label: string;
    href: string;
  }>;
  faqs: FaqItem[];
};

export const GUIDE_ARTICLES: Record<string, GuideArticle> = {
  g1: {
    description:
      "A practical 14-day first-time China itinerary covering Beijing, Xi'an, Chengdu, and Shanghai with transport, timing, and food tips.",
    lead:
      "This two-week China route is built for a first visit: imperial Beijing, ancient Xi'an, relaxed Chengdu, and modern Shanghai. It balances major sights with enough recovery time for jet lag, train transfers, and food discoveries.",
    updatedLabel: "Updated May 2026",
    datePublished: "2026-05-24",
    dateModified: "2026-05-24",
    readTime: "9 min read",
    sections: [
      {
        heading: "Best route order",
        paragraphs: [
          "Start in Beijing for four days, continue by high-speed train to Xi'an for three days, fly or take the train to Chengdu for three days, then finish in Shanghai for four days. This order keeps long transfers manageable and gives you an easy international departure city at the end.",
          "Book headline attractions first: Forbidden City tickets in Beijing, Terracotta Warriors transport from Xi'an, and a morning slot at the Chengdu panda base.",
        ],
        bullets: [
          "Days 1-4: Beijing for the Forbidden City, Great Wall, hutongs, and Peking duck.",
          "Days 5-7: Xi'an for the Terracotta Warriors, city wall, and Muslim Quarter.",
          "Days 8-10: Chengdu for pandas, teahouses, Sichuan hot pot, and relaxed neighborhoods.",
          "Days 11-14: Shanghai for the Bund, Lujiazui, Yu Garden, and day-trip options.",
        ],
      },
      {
        heading: "Transport plan",
        paragraphs: [
          "Use high-speed rail for Beijing to Xi'an because it avoids airport transfers and is straightforward for first-time visitors. Chengdu to Shanghai is usually better by flight unless you prefer a long rail day.",
          "Keep passport names consistent across train, flight, hotel, and attraction bookings. Most ticket checks use your passport as the primary identity document.",
        ],
        note:
          "Download your hotel addresses in Chinese before travel. Taxi drivers, station staff, and local maps work better with Chinese names.",
      },
      {
        heading: "Food and culture stops",
        paragraphs: [
          "Treat food as part of the itinerary, not an afterthought. Try Peking duck in Beijing, biangbiang noodles in Xi'an, hot pot in Chengdu, and xiaolongbao in Shanghai.",
          "Leave one flexible evening in each city. It gives you room for weather changes, sold-out tickets, or a neighborhood you unexpectedly want to explore longer.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is 14 days enough for a first China trip?",
        answer:
          "Yes. Four major stops in 14 days gives enough variety without turning the trip into constant transit.",
      },
      {
        question: "Should first-time visitors use trains or flights?",
        answer:
          "Use high-speed trains for shorter city pairs such as Beijing to Xi'an, and flights for very long jumps such as Chengdu to Shanghai.",
      },
      {
        question: "Which city should I skip if I only have 10 days?",
        answer:
          "Keep Beijing, Xi'an, and Shanghai for the classic history-to-modern-China route. Add Chengdu when you have more time or care most about food and pandas.",
      },
    ],
  },
  g2: {
    description:
      "A step-by-step guide to the Chinese travel apps international visitors need: Alipay, WeChat, Didi, maps, translation, and train booking.",
    lead:
      "China is easy to travel once your phone is ready. The critical setup is payment, ride-hailing, translation, maps, and ticket access before you arrive.",
    updatedLabel: "Updated May 2026",
    datePublished: "2026-05-24",
    dateModified: "2026-05-24",
    readTime: "8 min read",
    sections: [
      {
        heading: "Payment apps to set up first",
        paragraphs: [
          "Install Alipay and WeChat before departure, bind an international bank card where supported, and complete identity verification with your passport. Many daily payments are QR based, from metro rides to small restaurants.",
          "Carry a small amount of cash as backup, but expect mobile payment to be the normal method in cities.",
        ],
        bullets: [
          "Alipay: useful for payments, transit, mini programs, and some hotel or attraction services.",
          "WeChat: useful for messaging, payments, restaurant mini programs, and local service access.",
          "Bank card backup: keep a Visa or Mastercard for hotels and larger merchants.",
        ],
      },
      {
        heading: "Transport and navigation apps",
        paragraphs: [
          "Use Didi for ride-hailing in cities and a train-booking app or official rail channel for intercity travel. English support varies by app version, so save key addresses in Chinese.",
          "For maps, prepare a local option as well as your preferred international map app. Local map data is often better for metro exits, malls, and small restaurants.",
        ],
        image: {
          src: "https://images.unsplash.com/photo-1509017174183-0b7e0278f1ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
          alt: "Phone payment and travel apps for China",
        },
      },
      {
        heading: "Translation and connectivity",
        paragraphs: [
          "Install offline translation packs and a camera-translation tool before your flight. Menus, signs, and attraction instructions are much easier when image translation is ready.",
          "Check whether your roaming plan or eSIM gives access to the services you rely on. Some visitors use roaming data because it can keep familiar apps reachable without extra setup.",
        ],
        note:
          "Do all account verification before landing. App stores, SMS delivery, and identity checks can be harder to fix once you are already moving between cities.",
      },
    ],
    faqs: [
      {
        question: "Can foreigners use Alipay and WeChat Pay in China?",
        answer:
          "Many international visitors can link supported foreign cards and complete passport verification, but setup should be done before travel because requirements can vary.",
      },
      {
        question: "Is Didi useful if I do not speak Chinese?",
        answer:
          "Yes. Didi reduces language friction because pickup points, destinations, prices, and driver messages are handled inside the app.",
      },
      {
        question: "Do I still need cash in China?",
        answer:
          "Carry a small backup amount, but mobile payment is the default in most urban travel situations.",
      },
    ],
  },
  g3: {
    description:
      "A food-focused China travel guide explaining regional cuisines, must-try dishes, dining etiquette, and how to order confidently.",
    lead:
      "Chinese food is regional, seasonal, and far broader than the dishes common overseas. The best food trip starts by matching each city with its local cooking style.",
    updatedLabel: "Updated May 2026",
    datePublished: "2026-05-24",
    dateModified: "2026-05-24",
    readTime: "7 min read",
    sections: [
      {
        heading: "Think by region, not by one cuisine",
        paragraphs: [
          "Sichuan and Hunan are famous for heat, but they taste different: Sichuan often brings numbing peppercorns while Hunan leans toward direct chili and sour-spicy flavors.",
          "Cantonese cooking is lighter and ingredient-focused, Jiangsu cooking is refined and often gently sweet, and Shaanxi or Xinjiang routes bring wheat noodles, lamb, breads, and spices.",
        ],
        bullets: [
          "Beijing: Peking duck, hot pot, imperial snacks, and hutong breakfast foods.",
          "Xi'an: biangbiang noodles, roujiamo, lamb soup, and Muslim Quarter snacks.",
          "Chengdu: hot pot, mapo tofu, dan dan noodles, and teahouse snacks.",
          "Shanghai and Hangzhou: xiaolongbao, red-braised dishes, river fish, and seasonal greens.",
        ],
      },
      {
        heading: "How to order with confidence",
        paragraphs: [
          "Look for busy local restaurants, translated menus with photos, or dishes repeatedly ordered by nearby tables. Pointing at a dish is normal when language is limited.",
          "Ask for spice level before ordering in Sichuan, Hunan, Guizhou, and Chongqing. Mild still may be spicy if the restaurant specializes in local heat.",
        ],
        image: {
          src: "https://images.unsplash.com/flagged/photo-1556742524-750f2ab99913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
          alt: "Chinese dining table with shared dishes",
        },
      },
      {
        heading: "Dining etiquette basics",
        paragraphs: [
          "Meals are often shared family-style. Order a mix of vegetables, protein, soup, rice or noodles, and one local specialty instead of one dish per person.",
          "Tea, hot water, and small plates may arrive automatically. Some restaurants expect you to scan a QR code to order and pay from your table.",
        ],
        note:
          "Food safety is mostly about choosing high-turnover places. Busy restaurants and freshly cooked dishes are better signals than fancy decor.",
      },
    ],
    faqs: [
      {
        question: "What should food travelers try first in China?",
        answer:
          "Start with the local signature dish in each city, then add one street snack, one noodle or rice dish, and one vegetable dish.",
      },
      {
        question: "Is Chinese food always spicy?",
        answer:
          "No. Sichuan, Hunan, Guizhou, and Chongqing are known for heat, while Cantonese, Jiangsu, Zhejiang, and many northern dishes can be mild.",
      },
      {
        question: "How can I order if there is no English menu?",
        answer:
          "Use camera translation, point to photos or nearby dishes, and save Chinese names of foods you want to try before you go.",
      },
    ],
  },
  g4: {
    description:
      "A practical China high-speed rail guide for international visitors covering 12306 booking, passport checks, station choice, seat classes, transfers, and boarding timing.",
    lead:
      "China's high-speed rail network is often the easiest way to move between major cities, but first-time visitors lose time when they book the wrong station, ignore passport-name matching, or arrive too late for security and platform checks.",
    updatedLabel: "Updated June 2026",
    datePublished: "2026-06-06",
    dateModified: "2026-06-06",
    readTime: "8 min read",
    sections: [
      {
        heading: "Book with passport details",
        paragraphs: [
          "For international visitors, train tickets should be booked with the same passport details used for travel. Your name, document number, and document type need to match the passport you will carry at the station.",
          "Use an official rail channel where possible, such as the 12306 website or app, or a reputable ticketing service that clearly explains identity-document rules, refund rules, and ticket pickup or e-ticket handling.",
        ],
        bullets: [
          "Check every passenger name before payment, especially middle names and passport order.",
          "Keep the passport used for booking with you on travel day; screenshots alone are not enough for identity checks.",
          "Save the train number, departure station, arrival station, and seat class in both English and Chinese.",
        ],
      },
      {
        heading: "Choose the right station and seat",
        paragraphs: [
          "Large Chinese cities often have several rail stations. Beijing South, Beijing West, Shanghai Hongqiao, Shanghai Station, Chengdu East, and Xi'an North are not interchangeable, so plan the metro or taxi leg around the exact station name.",
          "Second class is usually enough for budget-conscious travelers. First class gives more space, and business class is useful when comfort, luggage room, or a long work session matters more than price.",
        ],
        image: {
          src: "https://images.unsplash.com/photo-1564632570063-9ce5e7bd724e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
          alt: "High-speed train platform in China",
        },
      },
      {
        heading: "Boarding and transfer timing",
        paragraphs: [
          "Arrive earlier than you would for a small regional train. You may need time for station entry, security screening, navigation to the waiting hall, platform boarding, and finding the correct carriage.",
          "For same-day transfers, protect the itinerary with realistic buffers. Weather, station size, taxi queues, luggage, and metro changes can turn a tight connection into a stressful start to the day.",
        ],
        bullets: [
          "City-to-city day routes work best when the rail leg is under six hours and the arrival station is near your hotel area.",
          "Avoid booking the last train of the day when you still need a long taxi or metro transfer afterward.",
          "For airport-to-train transfers, leave extra time for immigration, baggage, and city transport before the rail departure.",
        ],
        note:
          "Rail schedules, station rules, and ticket policies can change. Confirm your final departure details in the official 12306 channel close to travel day.",
      },
    ],
    sourceLinks: [
      {
        label: "China Railway 12306",
        href: "https://www.12306.cn/en/index.html",
      },
    ],
    faqs: [
      {
        question: "Can foreigners book China train tickets online?",
        answer:
          "Yes, many international visitors can book online through official or reputable channels, but passport details must be entered accurately and verified against the travel document used at the station.",
      },
      {
        question: "Do train stations check passports?",
        answer:
          "Expect identity checks at station entry, ticket gates, or boarding points. Carry the same passport used for booking and do not rely only on screenshots.",
      },
      {
        question: "How early should I arrive for a China high-speed train?",
        answer:
          "For major stations, arrive with enough time for security and wayfinding. First-time visitors should use a larger buffer than locals, especially with luggage or unfamiliar station names.",
      },
    ],
  },
  g5: {
    description:
      "A first-time China entry checklist for passports, visa-free transit eligibility checks, official source verification, arrival cards, payments, connectivity, and first-night logistics.",
    lead:
      "Entry preparation is where China trip planning needs the most caution. Eligibility depends on nationality, route, port, travel purpose, stay length, and current official rules, so treat this page as a checklist and verify your own case with official sources before departure.",
    updatedLabel: "Updated June 2026",
    datePublished: "2026-06-06",
    dateModified: "2026-06-06",
    readTime: "9 min read",
    sections: [
      {
        heading: "Start with official eligibility",
        paragraphs: [
          "Do not assume a visa-free policy applies just because another traveler used it. Check the latest official information from China's National Immigration Administration, a Chinese embassy or consulate, or the official port guidance relevant to your route.",
          "Visa-free transit and visa-free entry rules can depend on passport nationality, inbound city, outbound country or region, permitted travel area, airline routing, and whether the trip purpose fits the policy.",
        ],
        bullets: [
          "Confirm passport validity and blank-page requirements before booking nonrefundable travel.",
          "Verify whether your itinerary is entry, transit, or a longer stay that requires a visa.",
          "Keep official confirmation links or screenshots with your trip documents in case airline staff ask before boarding.",
        ],
      },
      {
        heading: "Documents and arrival setup",
        paragraphs: [
          "Prepare a compact document set: passport, visa or eligibility basis, confirmed onward travel when relevant, hotel address in Chinese and English, emergency contact, travel insurance details, and key booking references.",
          "Your first hour after landing is easier when the basics are ready: mobile data, payment setup, a Chinese hotel address, airport transport plan, and a backup way to show your destination to a driver or station staff.",
        ],
        image: {
          src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
          alt: "Passport and travel documents for an international flight",
        },
      },
      {
        heading: "Before departure checklist",
        paragraphs: [
          "Run the checklist again 72 hours before travel because official notices, airline enforcement, and route eligibility can change. This is especially important for multi-country itineraries, open-jaw flights, cruise arrivals, and airport transfers.",
          "If anything is unclear, contact the airline and the relevant Chinese embassy or consulate before departure. Airline boarding staff may ask for proof that your documents match the route they are checking.",
        ],
        bullets: [
          "Passport, visa or verified eligibility basis, and onward ticket when required.",
          "Hotel address, local contact details, and arrival transport plan saved offline.",
          "Alipay or WeChat setup, backup bank card, and a small cash fallback.",
          "eSIM, roaming, or local SIM plan plus offline translation screenshots.",
        ],
        note:
          "This guide is not legal advice. Entry rules are official-policy matters, so final decisions should be based on current government and consular sources for your nationality and route.",
      },
    ],
    sourceLinks: [
      {
        label: "National Immigration Administration",
        href: "https://en.nia.gov.cn/",
      },
      {
        label: "China Visa Application Service Center",
        href: "https://www.visaforchina.cn/",
      },
    ],
    faqs: [
      {
        question: "Can I rely on visa-free transit for any China itinerary?",
        answer:
          "No. Eligibility depends on nationality, route, port, onward travel, permitted area, travel purpose, and current rules. Verify your exact itinerary with official sources before booking or boarding.",
      },
      {
        question: "What should I prepare before arriving in China?",
        answer:
          "Prepare your passport, visa or eligibility basis, onward travel if relevant, hotel address, mobile data plan, payment setup, translation backup, and first-night transport plan.",
      },
      {
        question: "Where should I check current China entry rules?",
        answer:
          "Use China's National Immigration Administration, Chinese embassy or consulate websites, and official port or airline guidance. Avoid relying only on social media summaries or outdated travel blogs.",
      },
    ],
  },
  g6: {
    description:
      "A practical China connectivity guide covering eSIMs, roaming, hotel Wi-Fi, map access, translation backups, and mobile data planning for international visitors.",
    lead:
      "Connectivity is one of the highest-impact setup decisions for a China trip. The right plan is not just the cheapest eSIM; it is the combination of mobile data, Wi-Fi, translation, maps, payments, and backup access that still works when you are tired after landing.",
    updatedLabel: "Updated June 2026",
    datePublished: "2026-06-06",
    dateModified: "2026-06-06",
    readTime: "8 min read",
    sections: [
      {
        heading: "Choose your primary data option",
        paragraphs: [
          "Most visitors compare three options: international roaming from their home carrier, a travel eSIM, or a local SIM. The best choice depends on phone compatibility, trip length, data needs, price, and whether you need calls or only mobile data.",
          "Before buying, confirm that your phone is unlocked, supports the network bands or eSIM profile you plan to use, and can keep your normal phone number active for bank or app verification messages.",
        ],
        bullets: [
          "Roaming: easiest if your carrier price is acceptable and you need familiar account access.",
          "Travel eSIM: useful for data-heavy travelers who want setup before landing.",
          "Local SIM: can be economical for longer stays, but may require extra in-person setup.",
        ],
      },
      {
        heading: "Prepare maps, translation, and payments offline",
        paragraphs: [
          "A data plan does not replace offline preparation. Save your hotel names, metro exits, airport transfer details, and key food or attraction names in both English and Chinese before you fly.",
          "Download offline translation packs, screenshot your first-night address, and keep a backup payment method. Connectivity problems usually appear at the worst moment: airport arrival, late-night taxi queues, or station transfers.",
        ],
        image: {
          src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
          alt: "Laptop and phone used for travel connectivity planning",
        },
      },
      {
        heading: "Build a backup access plan",
        paragraphs: [
          "Hotel Wi-Fi, cafe Wi-Fi, roaming, and eSIM data can all behave differently by city, building, provider, and device. Build redundancy instead of depending on one perfect setup.",
          "If you rely on work, school, banking, or messaging services while abroad, verify the provider's China guidance before departure. Requirements can differ by account, device, employer policy, and security settings.",
        ],
        bullets: [
          "Keep your eSIM QR code or installation instructions available offline.",
          "Carry the card linked to Alipay or WeChat Pay as a payment fallback.",
          "Save key booking confirmations and addresses as screenshots, not only cloud files.",
          "Test translation, maps, and payment apps before leaving the airport area.",
        ],
        note:
          "Internet access conditions and provider behavior can change. Verify current terms with your carrier, eSIM provider, employer, and critical app providers before travel.",
      },
    ],
    faqs: [
      {
        question: "Should I use roaming, eSIM, or a local SIM in China?",
        answer:
          "For short trips, roaming or a travel eSIM is usually the easiest setup. For longer stays, a local SIM may be worth the extra setup if you need lower data costs or a local number.",
      },
      {
        question: "Do I need offline translation in China?",
        answer:
          "Yes. Offline translation and saved Chinese addresses are important backups for hotels, taxis, restaurants, and station transfers.",
      },
      {
        question: "What should I test after landing?",
        answer:
          "Test mobile data, maps, translation, payment apps, hotel address screenshots, and your ride-hailing or metro plan before leaving the airport or rail station.",
      },
    ],
  },
  g7: {
    description:
      "A practical China travel budget guide for international visitors covering hotels, transport, food, attractions, payments, and where trip costs usually rise.",
    lead:
      "A good China budget is built around decisions, not generic daily averages. Hotels, intercity transport, attraction tickets, food style, and city order matter more than a single number copied from another traveler's trip.",
    updatedLabel: "Updated June 2026",
    datePublished: "2026-06-06",
    dateModified: "2026-06-06",
    readTime: "8 min read",
    sections: [
      {
        heading: "Separate fixed costs from daily costs",
        paragraphs: [
          "Start with fixed costs: international flights, visa or entry preparation, travel insurance, eSIM or roaming, and long-distance trains or flights. These decisions shape the budget before you choose restaurants or museums.",
          "Then estimate daily costs by city. Beijing and Shanghai often push hotel and attraction planning higher, while Chengdu and Guilin can give better value if you choose stay areas carefully.",
        ],
        bullets: [
          "Fixed costs: flights, entry documents, insurance, connectivity, and intercity transport.",
          "Daily costs: hotel, meals, metro or taxis, attraction tickets, snacks, and local experiences.",
          "Buffer costs: luggage storage, weather changes, missed trains, laundry, and app/payment backups.",
        ],
      },
      {
        heading: "Know where spending usually rises",
        paragraphs: [
          "The biggest budget surprises are rarely basic meals. They are hotel location upgrades, peak-season rooms, same-day transport changes, guided day trips, premium rail seats, and ticketed evening experiences.",
          "Plan one premium experience per city instead of upgrading everything. A Great Wall car transfer, a Li River cruise, a panda-focused morning, or a Shanghai river night can be worth more than constant taxis or luxury meals.",
        ],
        image: {
          src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
          alt: "Travel budget planning with cards and notes",
        },
      },
      {
        heading: "Use payment backups",
        paragraphs: [
          "Mobile payments are normal in Chinese cities, but visitors should not treat one app as the entire financial plan. Link cards before departure, carry a backup bank card, and keep a small cash fallback for edge cases.",
          "Track categories instead of every small item. Hotels, intercity transport, ticketed sights, and paid day trips are where budget control has the biggest impact.",
        ],
        bullets: [
          "Book headline transport and hotels before locking the final route.",
          "Use metro and high-speed rail for predictable costs where practical.",
          "Leave a daily buffer for snacks, taxis, luggage, and schedule changes.",
          "Keep one backup card separate from your main wallet or phone case.",
        ],
      },
    ],
    faqs: [
      {
        question: "What makes a China trip expensive?",
        answer:
          "Hotels in prime areas, peak-season timing, intercity transport changes, private transfers, premium experiences, and last-minute tickets usually raise costs more than everyday meals.",
      },
      {
        question: "Can budget travelers visit China comfortably?",
        answer:
          "Yes. Use public transport, choose practical hotel areas, book trains early, mix local restaurants with a few premium meals, and avoid unnecessary same-day route changes.",
      },
      {
        question: "Should I carry cash in China?",
        answer:
          "Carry a small backup amount, but set up mobile payments and keep a bank card available because urban travel is mostly app and card based for visitors.",
      },
    ],
  },
  g8: {
    description:
      "A city-by-city guide to where international visitors should stay in Beijing, Shanghai, Chengdu, and Guilin based on transport, sightseeing, food, and first-night logistics.",
    lead:
      "The best hotel area in China is not always the prettiest neighborhood. For first-time visitors, the highest-value stay areas reduce station transfers, keep dinner easy, and make the first morning of sightseeing simple.",
    updatedLabel: "Updated June 2026",
    datePublished: "2026-06-06",
    dateModified: "2026-06-06",
    readTime: "9 min read",
    sections: [
      {
        heading: "Choose areas by friction, not distance alone",
        paragraphs: [
          "A hotel that looks close on a map can still be inconvenient if it is far from the metro, hard for taxis to reach, or across town from your train station. Prioritize metro access, airport or rail transfers, evening food, and the first attraction of the next morning.",
          "For short city stays, pay more attention to the first night and departure morning. A smooth arrival and an easy exit can be worth more than saving a little on a remote hotel.",
        ],
        bullets: [
          "Beijing: stay near central metro lines if you are balancing Forbidden City, hutongs, and station transfers.",
          "Shanghai: choose between Bund/Lujiazui views, French Concession walks, or Hongqiao rail convenience.",
          "Chengdu: stay around central dining and metro access if pandas, teahouses, and hot pot are priorities.",
          "Guilin/Yangshuo: split stays if you want both city logistics and countryside scenery.",
        ],
      },
      {
        heading: "Match hotel area to trip style",
        paragraphs: [
          "First-timers usually benefit from central, transport-friendly areas. Food travelers can trade a little sightseeing proximity for better evening restaurant access. Families and photographers may prefer calmer neighborhoods with easier taxi pickup.",
          "If your itinerary has early trains, flights, cruises, or day trips, choose the stay area around that departure point instead of forcing a scenic neighborhood into every night.",
        ],
        image: {
          src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
          alt: "Hotel room prepared for a city trip",
        },
      },
      {
        heading: "Check visitor-ready details before booking",
        paragraphs: [
          "Before booking, confirm the hotel accepts international guests, can register foreign passports, has the address available in Chinese, and is not confused with another branch of the same brand.",
          "Save the hotel name, address, phone number, and nearest metro station offline. This makes taxi rides, delivery, translation, and emergency contact much easier.",
        ],
        bullets: [
          "Check distance to metro or reliable taxi pickup, not just straight-line map distance.",
          "Confirm the exact branch name when a hotel brand has multiple locations.",
          "Save the Chinese address and phone number before landing.",
          "Keep departure-day transport in mind when choosing the final hotel night.",
        ],
        note:
          "Hotel rules, passport registration, and guest acceptance can vary by property. Confirm details directly with the hotel or booking platform before arrival.",
      },
    ],
    faqs: [
      {
        question: "Should I stay near attractions or train stations in China?",
        answer:
          "For one-night stays or early departures, station convenience can matter more. For two or more sightseeing days, a central metro-connected area is usually better.",
      },
      {
        question: "Do hotels in China accept foreign passports?",
        answer:
          "Many hotels do, but visitors should confirm before booking, especially with small local properties, apartments, or rural stays.",
      },
      {
        question: "Is it worth changing hotels inside one city?",
        answer:
          "Usually no for short city stays. It can be worth it only when a city-plus-countryside split, such as Guilin and Yangshuo, saves meaningful transfer time.",
      },
    ],
  },
};
