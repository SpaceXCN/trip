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
};
