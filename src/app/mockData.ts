import guangzhouMap from "../imports/ChatGPT_Image_2026_5_20__21_21_11.png";
import beijingTravelGuideMap from "../imports/beijin-jingdiantu.png";
import beijingPekingDuck from "../imports/beijing-peking-duck.png";

export const CUISINES = [
  {
    id: "sichuan",
    name: "Sichuan Cuisine",
    chineseName: "川菜 (Chuān Cài)",
    image: "https://images.unsplash.com/photo-1611345157614-26d3bdd10c93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWNodWFuJTIwZm9vZCUyMHNwaWN5fGVufDF8fHx8MTc3OTIwNDM3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Famous for its bold flavors, pungency, and spiciness resulting from liberal use of garlic and chili peppers, as well as the unique numbing flavor of Sichuan pepper.",
    signatureDishes: ["Kung Pao Chicken", "Mapo Tofu", "Sichuan Hot Pot"],
    spicyLevel: 5,
    region: "Southwest China (Sichuan, Chongqing)",
    menuItems: [
      { name: "Mapo Tofu", image: "https://images.unsplash.com/photo-1769065647078-f067eb768035?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwZm9vZCUyMG1hcG8lMjB0b2Z1fGVufDF8fHx8MTc3OTU4NjU3Nnww&ixlib=rb-4.1.0&q=80&w=1080", description: "This world-renowned Sichuan classic features silken tofu set in a fiery, bright red chili-bean sauce (doubanjiang). The rich umami flavor is deepened by fermented black beans and savory minced pork, while a generous dusting of ground Sichuan peppercorns provides an unforgettable, electrifying numbing sensation on the palate." },
      { name: "Kung Pao Chicken", image: "https://images.unsplash.com/photo-1776729851079-686daa8ff9aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrdW5nJTIwcGFvJTIwY2hpY2tlbnxlbnwxfHx8fDE3Nzk1ODY1Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080", description: "A perfect harmony of sweet, sour, and spicy notes, this dish consists of tender, marinated chicken cubes stir-fried at high heat. It is tossed with roasted peanuts, vibrant scallions, and dried chilies, creating a mouthwatering textural contrast that has made it a global favorite." },
      { name: "Water-boiled Beef", image: "https://images.unsplash.com/photo-1702705487239-10a1ca715454?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwZm9vZCUyMGJlZWYlMjB0cmlwZXxlbnwxfHx8fDE3Nzk1ODY2Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080", description: "Contrary to its mild-sounding name, this dish is a powerhouse of heat. Extra-tender slices of beef are briefly poached before being submerged in a bubbling, intensely fragrant broth of chili oil, garlic, and Sichuan peppercorns, typically served over a bed of crisp cabbage or bean sprouts." },
      { name: "Dan Dan Noodles", image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwZm9vZCUyMHNwaWN5JTIwbm9vZGxlc3xlbnwxfHx8fDE3Nzk1ODY1ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080", description: "A beloved street food staple, these fresh, chewy noodles are served in a complex, multi-layered sauce. The base features sesame paste, chili oil, and black vinegar, crowned with a savory, crispy pork topping and preserved mustard greens that must be vigorously mixed before eating." }
    ]
  },
  {
    id: "shandong",
    name: "Shandong (Lu) Cuisine",
    chineseName: "鲁菜 (Lǔ Cài)",
    image: "https://images.unsplash.com/photo-1597490101653-8db754021a89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwd2hvbGUlMjBmaXNofGVufDF8fHx8MTc3OTIwNDY1NHww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "The foundation of many Northern Chinese culinary styles. Renowned for its wide selection of ingredients, emphasis on seafood, and mastery of quick-frying and roasting.",
    signatureDishes: ["Sweet and Sour Carp", "Braised Sea Cucumber", "Dezhou Braised Chicken"],
    spicyLevel: 1,
    region: "North/East China (Shandong Peninsula)",
    menuItems: [
      { name: "Sweet and Sour Carp", image: "https://images.unsplash.com/photo-1623689046286-01d812cc8bad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwZm9vZCUyMHN3ZWV0JTIwYW5kJTIwc291ciUyMHBvcmt8ZW58MXx8fHwxNzc5NTg2NTg2fDA&ixlib=rb-4.1.0&q=80&w=1080", description: "A dramatic centerpiece of Shandong banquets, this whole Yellow River carp is skillfully scored, battered, and deep-fried so its head and tail point upwards. It is then smothered in a bubbling, deeply sweet-and-sour glossy glaze, resulting in crackling skin and juicy meat." },
      { name: "Braised Sea Cucumber", image: "https://images.unsplash.com/photo-1624067046879-cca70a7cf79c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwZm9vZCUyMHNvdXB8ZW58MXx8fHwxNzc5NTg2NjIxfDA&ixlib=rb-4.1.0&q=80&w=1080", description: "A highly prized luxury dish demonstrating the region's mastery over premium seafood. Premium sea cucumbers are meticulously rehydrated and braised in an intensely savory, gelatinous brown sauce infused with the deep aroma of charred Shandong scallions." },
      { name: "Dezhou Braised Chicken", image: "https://images.unsplash.com/photo-1609183480237-ccbb2d7c5772?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwYnJhaXNlZCUyMGNoaWNrZW58ZW58MXx8fHwxNzc5NTg2NjYwfDA&ixlib=rb-4.1.0&q=80&w=1080", description: "This famous heritage dish features a whole chicken that is deep-fried to set the skin, then slow-simmered in a dark soy and multi-spice master stock. The result is an incredibly tender bird that literally falls apart at the touch of chopsticks, packed with aromatic flavors." },
      { name: "Stir-fried Pig's Kidney", image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwZm9vZHxlbnwxfHx8fDE3Nzk1ODY4MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080", description: "An elite test of a chef's knife skills and fire control (wok hei). The kidneys are masterfully cross-hatched, blanched, and flash-fried in mere seconds with wood ear mushrooms and bamboo shoots to achieve a uniquely crisp texture and a clean, savory-vinegar finish." }
    ]
  },
  {
    id: "cantonese",
    name: "Cantonese (Yue) Cuisine",
    chineseName: "粤菜 (Yuè Cài)",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW50b25lc2UlMjBkaW0lMjBzdW18ZW58MXx8fHwxNzc5MjA0MzcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Known worldwide. Emphasizes mild, fresh, and natural flavors. Steaming and stir-frying are the most favored cooking methods to preserve the ingredients' original taste.",
    signatureDishes: ["Dim Sum", "Roast Goose", "Steamed Sea Bass"],
    spicyLevel: 1,
    region: "South China (Guangdong, Hong Kong)",
    menuItems: [
      { name: "Crispy Roast Goose", image: "https://images.unsplash.com/photo-1614926994586-d0a318165f26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwcm9hc3RlZCUyMGR1Y2t8ZW58MXx8fHwxNzc5NTg2NjEyfDA&ixlib=rb-4.1.0&q=80&w=1080", description: "The crown jewel of Cantonese roasting (siu mei). Specially bred geese are marinated with five-spice and plum sauce inside out, then expertly roasted to yield impossibly thin, crackling skin and drippingly succulent meat. Traditionally served with a sweet-tart plum dipping sauce." },
      { name: "Steamed Sea Bass", image: "https://images.unsplash.com/photo-1597490101653-8db754021a89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwc3RlYW1lZCUyMGZpc2h8ZW58MXx8fHwxNzc5NTg2NTk4fDA&ixlib=rb-4.1.0&q=80&w=1080", description: "A testament to the Cantonese philosophy of emphasizing the ingredient's natural sweetness. A live sea bass is steamed to the precise second of perfect tenderness, then topped with julienned ginger and scallions before smoking-hot oil is poured over to release their aromatics, finished with premium seasoned soy sauce." },
      { name: "Beef Chow Fun", image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwZm9vZCUyMHNwaWN5JTIwbm9vZGxlc3xlbnwxfHx8fDE3Nzk1ODY1ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080", description: "The ultimate benchmark for Cantonese wok mastery (wok hei). This dry-fried dish features silky, wide rice noodles tossed flawlessly with marinated velveted beef slices, crisp bean sprouts, and dark soy sauce, achieved without breaking the delicate noodles or leaving excess oil on the plate." },
      { name: "Char Siu (BBQ Pork)", image: "https://images.unsplash.com/photo-1445979323117-80453f573b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwZm9vZCUyMGJyYWlzZWQlMjBwb3JrfGVufDF8fHx8MTc3OTU4NjU4OXww&ixlib=rb-4.1.0&q=80&w=1080", description: "Strips of premium pork shoulder or belly are marinated in a complex blend of hoisin sauce, honey, soy, and five-spice, then roasted on forks over an open fire. The resulting delicacy is instantly recognizable by its sweet, sticky, caramelized red crust and exceptionally juicy interior." }
    ]
  },
  {
    id: "jiangsu",
    name: "Jiangsu (Su) Cuisine",
    chineseName: "苏菜 (Sū Cài)",
    image: "https://images.unsplash.com/photo-1694834589398-27b369c6f7a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGFuZ2hhaSUyMGR1bXBsaW5ncyUyMHhpYW9sb25nYmFvfGVufDF8fHx8MTc3OTIwNDM3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Characterized by soft, melt-in-the-mouth textures, matching colors, and sweet-and-savory flavor profiles. Known for precise cooking techniques and exquisite presentation.",
    signatureDishes: ["Sweet and Sour Mandarin Fish", "Lion's Head Meatballs", "Salted Duck"],
    spicyLevel: 1,
    region: "East China (Jiangsu Province)",
    menuItems: [
      { name: "Lion's Head Meatballs", image: "https://images.unsplash.com/photo-1572141619956-3af324e62ddc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwZm9vZCUyMG1lYXRiYWxsc3xlbnwxfHx8fDE3Nzk1ODY2MDF8MA&ixlib=rb-4.1.0&q=80&w=1080", description: "These magnificent, oversized pork meatballs are delicately hand-chopped rather than ground, ensuring an incredibly light, fluffy, and melt-in-the-mouth texture. Braised for hours in a supreme broth alongside tender baby bok choy, they resemble a lion's head wrapped in a green mane." },
      { name: "Squirrel-shaped Mandarin Fish", image: "https://images.unsplash.com/photo-1597490101653-8db754021a89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwc3RlYW1lZCUyMGZpc2h8ZW58MXx8fHwxNzc5NTg2NTk4fDA&ixlib=rb-4.1.0&q=80&w=1080", description: "A dazzling showcase of Jiangsu knife work originating from Suzhou. A premium mandarin fish is meticulously deboned and scored in a crosshatch pattern, deep-fried until the flesh puffs outward to resemble a squirrel's tail, and finally bathed in a vibrant, citrusy sweet-and-sour sauce." },
      { name: "Nanjing Salted Duck", image: "https://images.unsplash.com/photo-1614926994586-d0a318165f26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwcm9hc3RlZCUyMGR1Y2t8ZW58MXx8fHwxNzc5NTg2NjEyfDA&ixlib=rb-4.1.0&q=80&w=1080", description: "Nanjing's most iconic export relies on a complex brining and low-temperature poaching technique rather than roasting. The result is elegantly pale, exceptionally tender duck meat with a subtle, fragrant saltiness that enhances rather than masks the bird's natural flavor." },
      { name: "Yangzhou Fried Rice", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwZm9vZCUyMGZyaWVkJTIwcmljZXxlbnwxfHx8fDE3Nzk1ODY2MDR8MA&ixlib=rb-4.1.0&q=80&w=1080", description: "The gold standard of fried rice worldwide. Authentic Yangzhou style requires individually separated grains of day-old rice impeccably coated in egg, wok-tossed with a colorful mosaic of premium ingredients including sea cucumber, shrimp, Jinhua ham, and delicate bamboo shoots." }
    ]
  },
  {
    id: "fujian",
    name: "Fujian (Min) Cuisine",
    chineseName: "闽菜 (Mǐn Cài)",
    image: "https://images.unsplash.com/photo-1566749006386-4cfc0d44f733?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwc2VhZm9vZCUyMGZ1amlhbnxlbnwxfHx8fDE3NzkyMDQ1NTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Famous for its light but flavorful profile, utilizing woodland delicacies and a heavy emphasis on seafood. Renowned for its rich broths and soups.",
    signatureDishes: ["Buddha Jumps Over the Wall", "Oyster Omelet", "Lychee Pork"],
    spicyLevel: 1,
    region: "Southeast China (Fujian Province)",
    menuItems: [
      { name: "Buddha Jumps Over the Wall", image: "https://images.unsplash.com/photo-1624067046879-cca70a7cf79c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwZm9vZCUyMHNvdXB8ZW58MXx8fHwxNzc5NTg2NjIxfDA&ixlib=rb-4.1.0&q=80&w=1080", description: "Arguably China's most complex and luxurious soup. It unites over 30 premium ingredients—including abalone, sea cucumber, scallops, and quail eggs—simmered in a sealed Shaoxing wine jar for up to three days. The resulting broth is incredibly rich, gelatinous, and profoundly aromatic." },
      { name: "Lychee Pork", image: "https://images.unsplash.com/photo-1623689046286-01d812cc8bad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwZm9vZCUyMHN3ZWV0JTIwYW5kJTIwc291ciUyMHBvcmt8ZW58MXx8fHwxNzc5NTg2NTg2fDA&ixlib=rb-4.1.0&q=80&w=1080", description: "A visual and culinary delight from Fuzhou. Lean pork is intricately scored and deep-fried so it curls into spheres resembling lychee fruit. It is then coated in a vibrant, crimson sweet-and-sour glaze made from red yeast rice, offering a perfect balance of crunch and tang." },
      { name: "Oyster Omelet", image: "https://images.unsplash.com/photo-1664774367243-18caa521fb96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwb3lzdGVyJTIwb21lbGV0dGV8ZW58MXx8fHwxNzc5NTg2NjA5fDA&ixlib=rb-4.1.0&q=80&w=1080", description: "A beloved coastal street food that celebrates Fujian's abundant seafood. Plump, briny oysters are pan-fried in a batter of eggs and sweet potato starch, creating a uniquely satisfying texture that is simultaneously crispy on the edges and delightfully gooey in the center." },
      { name: "Fuzhou Fish Balls", image: "https://images.unsplash.com/photo-1572141619956-3af324e62ddc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwZm9vZCUyMG1lYXRiYWxsc3xlbnwxfHx8fDE3Nzk1ODY2MDF8MA&ixlib=rb-4.1.0&q=80&w=1080", description: "These are not ordinary fish balls. The exterior is made from vigorously pounded eel or mackerel paste, yielding a supremely bouncy, springy texture. Biting into one reveals a hidden, savory core of juicy minced pork, creating a brilliant surf-and-turf contrast." }
    ]
  },
  {
    id: "zhejiang",
    name: "Zhejiang (Zhe) Cuisine",
    chineseName: "浙菜 (Zhè Cài)",
    image: "https://images.unsplash.com/photo-1623130161074-1ec8ec4abaa0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwYnJhaXNlZCUyMHBvcmt8ZW58MXx8fHwxNzc5MjA0NTU4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Noted for its fresh, crisp, tender, and non-greasy dishes. It often incorporates local ingredients like bamboo shoots, freshwater fish, and Longjing tea.",
    signatureDishes: ["Dongpo Pork", "Beggar's Chicken", "West Lake Fish in Vinegar"],
    spicyLevel: 1,
    region: "East China (Zhejiang Province)",
    menuItems: [
      { name: "Dongpo Pork", image: "https://images.unsplash.com/photo-1445979323117-80453f573b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwZm9vZCUyMGJyYWlzZWQlMjBwb3JrfGVufDF8fHx8MTc3OTU4NjU4OXww&ixlib=rb-4.1.0&q=80&w=1080", description: "Named after the Song Dynasty poet Su Dongpo, this dish transforms thick squares of pork belly into a gelatinous masterpiece. The pork is pan-fried, then red-braised for hours in soy sauce and yellow wine until the fat melts effortlessly on the tongue without feeling greasy." },
      { name: "Beggar's Chicken", image: "https://images.unsplash.com/photo-1609183480237-ccbb2d7c5772?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwYnJhaXNlZCUyMGNoaWNrZW58ZW58MXx8fHwxNzc5NTg2NjYwfDA&ixlib=rb-4.1.0&q=80&w=1080", description: "A dish steeped in folklore, preparing it is an elaborate ritual. A whole chicken is stuffed with mushrooms and pork, wrapped tightly in lotus leaves, encased in non-toxic clay, and slow-baked. When cracked open at the table, it releases an intoxicating, earthy aroma and impossibly tender meat." },
      { name: "Longjing Shrimp", image: "https://images.unsplash.com/photo-1563372522-8e97eac82f62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwZm9vZCUyMHNocmltcHxlbnwxfHx8fDE3Nzk1ODY2Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080", description: "A prime example of Hangzhou's refined culinary aesthetics. Sweet, delicate river shrimp are coated in a gossamer-thin starch velvet and quickly stir-fried with freshly brewed Longjing (Dragon Well) green tea leaves, resulting in a dish that is visually pristine and subtly fragrant." },
      { name: "West Lake Fish in Vinegar", image: "https://images.unsplash.com/photo-1597490101653-8db754021a89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwc3RlYW1lZCUyMGZpc2h8ZW58MXx8fHwxNzc5NTg2NTk4fDA&ixlib=rb-4.1.0&q=80&w=1080", description: "This iconic dish requires a grass carp to be starved for two days to purge muddy flavors. It is then gently poached and cloaked in a distinctive, glossy black sauce made from Chinkiang vinegar and sugar, achieving a complex sweet-and-sour profile completely free of oil." }
    ]
  },
  {
    id: "hunan",
    name: "Hunan (Xiang) Cuisine",
    chineseName: "湘菜 (Xiāng Cài)",
    image: "https://images.unsplash.com/photo-1623689048105-a17b1e1936b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGljeSUyMGh1bmFuJTIwZm9vZHxlbnwxfHx8fDE3NzkyMDQ1NTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Known for its 'dry spicy' (gan la) flavor profile, utilizing pure chili heat without the numbing peppercorns of Sichuan. Features bright colors and rich, sour-spicy tastes.",
    signatureDishes: ["Steamed Fish Head with Diced Hot Red Peppers", "Mao's Braised Pork", "Stir-fried Pork with Peppers"],
    spicyLevel: 5,
    region: "South Central China (Hunan Province)",
    menuItems: [
      { name: "Steamed Fish Head with Diced Red Peppers", image: "https://images.unsplash.com/photo-1597490101653-8db754021a89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwc3RlYW1lZCUyMGZpc2h8ZW58MXx8fHwxNzc5NTg2NTk4fDA&ixlib=rb-4.1.0&q=80&w=1080", description: "The undisputed king of Hunan banquets. A massive, succulent bighead carp head is split open, smothered in vibrant, house-fermented chopped red chilies, garlic, and ginger, then steamed. The resulting broth is so deeply flavorful and spicy that diners always order a side of noodles to soak it up." },
      { name: "Mao's Braised Pork", image: "https://images.unsplash.com/photo-1445979323117-80453f573b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwZm9vZCUyMGJyYWlzZWQlMjBwb3JrfGVufDF8fHx8MTc3OTU4NjU4OXww&ixlib=rb-4.1.0&q=80&w=1080", description: "Famous for being Chairman Mao's favorite dish, this Hunan red-braised pork belly omits soy sauce entirely. Instead, the meat gets its glorious ruby-red sheen and caramelized sweetness from caramelized sugar, offset by a subtle kick of dried Hunan chilies and star anise." },
      { name: "Stir-fried Pork with Peppers", image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwZm9vZHxlbnwxfHx8fDE3Nzk1ODY4MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080", description: "The ultimate Hunan home-style comfort food. Wafer-thin slices of pork belly are fiercely wok-tossed with pungent green horn peppers and fermented black beans until the pork edges crisp up and the peppers blister, creating an incredibly appetizing, rice-demanding dish." },
      { name: "Spicy Smoked Bacon", image: "https://images.unsplash.com/photo-1566749006386-4cfc0d44f733?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwZm9vZCUyMGJhY29ufGVufDF8fHx8MTc3OTU4NjY0MXww&ixlib=rb-4.1.0&q=80&w=1080", description: "In rural Hunan, pork is traditionally cured over pine wood and orange peel fires during winter. This intensely smoky, deeply savory bacon is sliced and quickly wok-fried with crisp garlic shoots and fiery dried chilies, delivering an explosion of rustic flavor." }
    ]
  },
  {
    id: "anhui",
    name: "Anhui (Hui) Cuisine",
    chineseName: "徽菜 (Huī Cài)",
    image: "https://images.unsplash.com/photo-1616656899767-e11ba3872176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwc3RldyUyMGh1aSUyMGZvb2R8ZW58MXx8fHwxNzc5MjA0NTUzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Originating from the Yellow Mountain region. Distinct for its hearty, robust dishes focusing on wild herbs, mountain delicacies, braising, and stewing techniques.",
    signatureDishes: ["Stinky Tofu (Anhui style)", "Li Hongzhang Hodgepodge", "Bamboo Shoots with Sausage"],
    spicyLevel: 2,
    region: "East China (Anhui Province)",
    menuItems: [
      { name: "Anhui Stinky Tofu", image: "https://images.unsplash.com/photo-1707967933821-809de732e50f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwdG9mdXxlbnwxfHx8fDE3Nzk1ODY2NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080", description: "Not for the faint of heart, this local delicacy features tofu fermented in a special brine until a fuzzy mold develops. It is lightly pan-fried to a crisp exterior while the interior turns creamy and cheese-like, served with a sharp chili and garlic sauce." },
      { name: "Li Hongzhang Hodgepodge", image: "https://images.unsplash.com/photo-1624067046879-cca70a7cf79c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwZm9vZCUyMHNvdXB8ZW58MXx8fHwxNzc5NTg2NjIxfDA&ixlib=rb-4.1.0&q=80&w=1080", description: "Named after a famous Qing Dynasty official, this complex stew is a masterclass in blending ingredients. It unites over a dozen premium items, including squid, sea cucumber, chicken, ham, and winter bamboo shoots, slowly simmered to create a deeply harmonious, savory broth." },
      { name: "Bamboo Shoots with Sausage", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwZm9vZCUyMGJhbWJvb3xlbnwxfHx8fDE3Nzk1ODY2MjR8MA&ixlib=rb-4.1.0&q=80&w=1080", description: "Showcasing Anhui's mountainous terroir, freshly foraged bamboo shoots from the Huangshan mountains provide a crisp, clean bite. They are stir-fried with rich, sweet-savory air-cured Anhui sausage, allowing the bamboo to absorb the flavorful rendered fat." },
      { name: "Stewed Soft Shell Turtle", image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwZm9vZCUyMHNwaWN5JTIwbm9vZGxlc3xlbnwxfHx8fDE3Nzk1ODY1ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080", description: "A highly esteemed medicinal and nutritional delicacy in traditional Anhui cuisine. The soft-shell turtle is stewed low and slow in a clear broth alongside Jinhua ham and bamboo shoots, producing an exceptionally nourishing soup and fall-apart tender meat." }
    ]
  }
];

export const DESTINATIONS = [
  {
    id: "beijing",
    name: "Beijing",
    image: "https://images.unsplash.com/photo-1603120527222-33f28c2ce89e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3JiaWRkZW4lMjBjaXR5JTIwYmVpamluZ3xlbnwxfHx8fDE3NzkxNjkyNTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    mapImage: beijingTravelGuideMap,
    mapTitle: "Beijing Travel Guide Map",
    mapDescription: "A visual route map highlighting Beijing's top attractions, travel tips, and must-try local foods for first-time visitors.",
    description: "Beijing is the best first stop for understanding China: imperial palaces, grand ritual temples, restored Great Wall sections, hutong neighborhoods, serious museums, and northern Chinese food traditions all sit within one highly connected capital city.",
    rating: 4.9,
    reviews: 5205,
    tags: ["History", "Culture", "Iconic"],
    practicalInfo: {
      bestTime: "Sep - Nov (Autumn)",
      duration: "4 - 5 Days",
      airport: "Beijing Capital (PEK) / Daxing (PKX)"
    },
    sights: [
      {
        name: "Mutianyu Great Wall",
        image: "https://images.unsplash.com/photo-1608037521277-154cd1b89191?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVhdCUyMHdhbGwlMjBjaGluYXxlbnwxfHx8fDE3NzkxODc4MzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
        rating: 4.9,
        description: "A restored, scenic Great Wall section that works well for first-time visitors who want strong views, easier logistics, and cable car options."
      },
      {
        name: "Forbidden City",
        image: "https://images.unsplash.com/photo-1603120527222-33f28c2ce89e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3JiaWRkZW4lMjBjaXR5JTIwYmVpamluZ3xlbnwxfHx8fDE3NzkxNjkyNTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
        rating: 4.8,
        description: "The core imperial palace of the Ming and Qing dynasties. Reserve in advance because the Palace Museum does not sell same-day tickets."
      },
      {
        name: "Temple of Heaven",
        image: "https://images.unsplash.com/photo-1584872589930-e99fe5bf4408?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW1wbGUlMjBvZiUyMGhlYXZlbiUyMGJlaWppbmd8ZW58MXx8fHwxNzc5MjAxMTcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
        rating: 4.7,
        description: "A Ming and Qing imperial ritual complex with the Hall of Prayer for Good Harvests, Echo Wall, Circular Mound Altar, and a lively local park scene."
      },
      {
        name: "Summer Palace",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/db/Longevity_Hill_of_the_Summer_Palace.jpg",
        rating: 4.7,
        description: "A lakeside imperial garden with Kunming Lake, Long Corridor, Longevity Hill, pavilions, bridges, and a slower half-day rhythm after palace sightseeing."
      },
      {
        name: "Tiananmen Square",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/83/North_end_of_Tiananmen_Square_and_Tiananmen_Gate.jpg",
        rating: 4.6,
        description: "The symbolic heart of modern Beijing, best paired with the Forbidden City and checked carefully for current reservation and security requirements."
      },
      {
        name: "Hutong and Shichahai",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Beijing_Shichahai_1.jpg",
        rating: 4.6,
        description: "Historic alleyways, courtyard homes, lakeside lanes, cafes, snack shops, and evening walks that show a more intimate side of Beijing."
      }
    ],
    foods: [
      {
        id: "peking-duck",
        name: "Peking Duck",
        image: beijingPekingDuck,
        description: "The legendary crispy roast duck served with thin pancakes, sweet bean sauce, and scallions.",
        menuItems: [
          { name: "Whole Roast Duck", image: "https://images.unsplash.com/photo-1614926994586-d0a318165f26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwcm9hc3RlZCUyMGR1Y2t8ZW58MXx8fHwxNzc5NTg2NjEyfDA&ixlib=rb-4.1.0&q=80&w=1080", description: "The definitive Beijing experience. The duck is roasted over fruitwood fires until the skin is glass-like and shattered-crisp. A master chef expertly carves it table-side into exactly 108 slices, meant to be wrapped in paper-thin wheat pancakes with sweet bean sauce, cucumber, and scallions." },
          { name: "Duck Bone Soup", image: "https://images.unsplash.com/photo-1624067046879-cca70a7cf79c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwZm9vZCUyMHNvdXB8ZW58MXx8fHwxNzc5NTg2NjIxfDA&ixlib=rb-4.1.0&q=80&w=1080", description: "After the prime cuts are carved, the remaining duck frame is slow-boiled for hours with Napa cabbage and soft tofu. This process yields a comforting, milky-white broth that serves as a perfect, palate-cleansing finale to the rich roast duck meal." },
          { name: "Sautéed Duck Heart", image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwZm9vZHxlbnwxfHx8fDE3Nzk1ODY4MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080", description: "A classic example of Chinese nose-to-tail culinary philosophy. Fresh duck hearts are meticulously cleaned, scored, and wok-seared over maximum heat with garlic and chili, arriving at the table with a distinctive, deeply savory snap and chew." }
        ]
      },
      {
        id: "zhajiangmian",
        name: "Zhajiangmian",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Zhajiangmian_after_stirring_at_Fangzhuanchang_%2820210115131416%29.jpg",
        description: "Beijing-style wheat noodles mixed with a salty-sweet fermented soybean paste, minced pork, cucumber, radish, and bean sprouts.",
        menuItems: [
          { name: "Classic Zhajiangmian", image: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Zhajiangmian_after_stirring_at_Fangzhuanchang_%2820210115131416%29.jpg", description: "Thick wheat noodles are tossed with dark soybean paste, diced pork, and crisp vegetable toppings. The pleasure is in mixing every strand until the sauce coats the bowl evenly." },
          { name: "Old Beijing Noodle Set", image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", description: "Many traditional shops serve the noodles with several small vegetable plates, letting you adjust crunch, freshness, and saltiness as you eat." },
          { name: "Vegetable Zhajiangmian", image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", description: "A lighter version built around noodles, bean paste, and seasonal vegetables. It is useful for travelers who want Beijing flavor without a heavy roast-duck meal." }
        ]
      },
      {
        id: "jianbing",
        name: "Jianbing",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Jianbing_Guozi_20170610.jpg",
        description: "A fast breakfast crepe with egg, savory sauce, herbs, and a crisp cracker folded inside for crunch.",
        menuItems: [
          { name: "Classic Breakfast Jianbing", image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Jianbing_Guozi_20170610.jpg", description: "A thin batter crepe is spread on a hot griddle, brushed with sauce, filled with egg and herbs, then folded around a crisp cracker for a portable morning meal." },
          { name: "Jianbing with Sausage", image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Jianbing_Guozi_20180623.jpg", description: "A fuller street-food version adds sausage or extra egg, making it more filling before a long palace or museum day." },
          { name: "Spicy Jianbing", image: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Jianbing_being_prepared.jpg", description: "Ask for chili sauce if you want a sharper version. It is still quick, affordable, and easy to eat near subway stations and morning markets." }
        ]
      },
      {
        id: "mutton-hot-pot",
        name: "Mutton Hot Pot",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/15/Instant-boiled_mutton_of_Beijing.jpg",
        description: "A northern Beijing winter favorite built around thin-sliced lamb, a copper pot, clear broth, sesame dipping sauce, and vegetables.",
        menuItems: [
          { name: "Hand-Sliced Mutton", image: "https://upload.wikimedia.org/wikipedia/commons/1/15/Instant-boiled_mutton_of_Beijing.jpg", description: "Thin slices of mutton are swished briefly in a clear copper-pot broth, then dipped into sesame paste, fermented tofu, chive flower sauce, and chili oil." },
          { name: "Vegetable and Tofu Platter", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", description: "Leafy greens, mushrooms, tofu, and vermicelli balance the lamb and soak up the clean broth after several rounds of cooking." },
          { name: "Sesame Sauce Dip", image: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Instant-boiled_mutton_with_sesame_sauce.jpg", description: "The dipping sauce is the signature: nutty sesame paste loosened with condiments and aromatics until it clings to every slice of lamb." }
        ]
      },
      {
        id: "beijing-yogurt",
        name: "Beijing Yogurt",
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
        description: "A nostalgic ceramic-jar yogurt snack sold near hutongs, parks, and old-style snack shops.",
        menuItems: [
          { name: "Ceramic Jar Yogurt", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", description: "Cool, lightly sweet yogurt served in a small jar. It is a simple break between dense sightseeing stops and is easy to find around older neighborhoods." },
          { name: "Hutong Snack Stop", image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", description: "Pair yogurt with sesame buns, candied fruit, or other light snacks while walking around Shichahai or Nanluoguxiang." },
          { name: "Cold Summer Yogurt", image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", description: "In hot months, this is one of the easiest small treats to recommend to travelers who want something local but not heavy." }
        ]
      }
    ],
    guide: {
      seoTitle: "Beijing Travel Guide: 4-5 Day Itinerary for First-Time Visitors",
      seoDescription: "Plan a first Beijing trip with a practical 4-5 day itinerary, top things to do, ticket booking tips, subway advice, where to stay, local food, and common mistakes.",
      seoKeywords: [
        "Beijing travel guide",
        "Beijing itinerary 4 days",
        "things to do in Beijing",
        "Beijing first time visitor",
        "where to stay in Beijing",
        "Beijing food guide"
      ],
      intro: "For most first-time visitors, Beijing works best as a 4-5 day base: one day for the Forbidden City and Tiananmen area, one day for the Temple of Heaven and hutongs, one full day for the Great Wall, one day for the Summer Palace and museums, and an optional fifth day for slower food, shopping, or a backup weather day.",
      itinerary: [
        {
          day: "Day 1",
          title: "Forbidden City, Tiananmen Area, Jingshan and Peking Duck",
          summary: "Start with Beijing's imperial axis. Visit Tiananmen Square if current reservation rules allow, enter the Forbidden City with a pre-booked ticket, then climb Jingshan Park for the classic palace roof view.",
          stops: ["Tiananmen Square", "Forbidden City", "Jingshan Park", "Peking Duck dinner"],
          tip: "Book the Palace Museum first; build the rest of the day around the time slot you secure."
        },
        {
          day: "Day 2",
          title: "Temple of Heaven, Qianmen and Hutong Walks",
          summary: "Go early to Temple of Heaven to see both the architecture and local morning life. Spend the afternoon around Qianmen or Dashilar, then walk hutong lanes near Shichahai in the evening.",
          stops: ["Temple of Heaven", "Qianmen", "Dashilar", "Shichahai hutongs"],
          tip: "Use this day to balance monuments with street-level Beijing."
        },
        {
          day: "Day 3",
          title: "Mutianyu Great Wall Day Trip",
          summary: "Keep one full day for the Great Wall. Mutianyu is the most practical first-visit choice because it combines restored scenery, easier access, and cable car options.",
          stops: ["Mutianyu Great Wall", "Great Wall viewpoints", "Return to Beijing for hot pot"],
          tip: "Avoid stacking major city sights after the Wall; traffic and walking can make the day longer than expected."
        },
        {
          day: "Day 4",
          title: "Summer Palace, Olympic Area and Local Food",
          summary: "Spend a slower half day at the Summer Palace, then add the Olympic area or a museum depending on weather and energy. Finish with zhajiangmian or mutton hot pot.",
          stops: ["Summer Palace", "Kunming Lake", "Olympic Park or museum", "Zhajiangmian dinner"],
          tip: "This is the best flexible day if rain, jet lag, or ticket availability changes your plan."
        },
        {
          day: "Day 5",
          title: "Optional Buffer Day for Museums, Shopping or Departure",
          summary: "Use the fifth day for the National Museum, Lama Temple, Panjiayuan, Sanlitun, a cooking-focused food crawl, or a relaxed airport transfer.",
          stops: ["National Museum or Lama Temple", "Panjiayuan or Sanlitun", "Airport transfer"],
          tip: "A buffer day makes Beijing much less stressful for first-time travelers."
        }
      ],
      bookingChecklist: [
        {
          title: "Reserve the Forbidden City before everything else",
          detail: "The Palace Museum does not sell same-day tickets. Visitors should purchase in advance through the official website or official WeChat mini program, and the museum normally closes on Mondays except statutory holidays.",
          sourceLabel: "Beijing Government: The Palace Museum",
          sourceUrl: "https://english.beijing.gov.cn/travellinginbeijing/museums/202603/t20260320_4562527.html"
        },
        {
          title: "Book Temple of Heaven scenic spots 1-7 days ahead when needed",
          detail: "The park has broad opening hours, while charged interior attractions operate separately and foreign visitors can book through the Temple of Heaven WeChat Official Account with valid ID documents.",
          sourceLabel: "Beijing Government: Temple of Heaven",
          sourceUrl: "https://english.beijing.gov.cn/specials/ticketing/parks/202407/t20240719_3753312.html"
        },
        {
          title: "Prepare mobile payment and subway access on arrival",
          detail: "Beijing's official subway guidance lists Beijing Pass, Alipay Metro QR, vending machines, manned counters, and tap-to-ride bank card options as practical ways to use the subway.",
          sourceLabel: "Beijing Government: Beijing Subway",
          sourceUrl: "https://english.beijing.gov.cn/travellinginbeijing/transportation/beijingsubway/202512/t20251229_4374803.html"
        },
        {
          title: "Use airport visitor service counters if setup is difficult",
          detail: "Beijing Service counters at Capital and Daxing international arrivals can help foreign visitors with local SIM cards, mobile payment setup, route guidance, and some attraction reservations.",
          sourceLabel: "Beijing Government: Foreign Visitor Services",
          sourceUrl: "https://english.beijing.gov.cn/latest/news/202605/t20260507_4639364.html"
        }
      ],
      gettingAround: [
        {
          title: "Subway first, taxi second",
          detail: "Use the subway for the Forbidden City area, Temple of Heaven, Summer Palace, Olympic Park, railway stations, and airport links. Use taxis or ride-hailing mainly for late nights, luggage, or awkward transfers."
        },
        {
          title: "Set up Alipay or a card option before your first ride",
          detail: "Alipay's Metro QR code, Beijing Pass, station kiosks, manned counters, and tap-to-ride card options all reduce friction compared with buying single tickets every time."
        },
        {
          title: "Treat the Great Wall as a separate transport project",
          detail: "Mutianyu is outside central Beijing. Choose a reputable transfer, private car, or well-planned public route instead of assuming it works like a normal metro attraction."
        }
      ],
      stayAreas: [
        {
          name: "Wangfujing / Dongdan",
          bestFor: "First-time sightseeing",
          detail: "Central, convenient for the Forbidden City, museums, shopping streets, and subway transfers. It is the easiest default for a short first visit."
        },
        {
          name: "Qianmen / Dashilar",
          bestFor: "Historic atmosphere",
          detail: "Good for travelers who want old Beijing streets, snack shops, and access to the south side of Tiananmen and Temple of Heaven."
        },
        {
          name: "Dongzhimen / Sanlitun",
          bestFor: "Restaurants and nightlife",
          detail: "Useful for airport express access, international restaurants, bars, and a more modern evening scene."
        },
        {
          name: "Shichahai / Gulou",
          bestFor: "Hutong walks",
          detail: "A characterful area for lakeside walks and courtyard lanes, but choose hotels carefully because some lanes are quieter and less taxi-friendly."
        }
      ],
      mistakes: [
        {
          title: "Leaving ticket booking too late",
          detail: "The Forbidden City is the main risk. Secure it before finalizing the day-by-day itinerary."
        },
        {
          title: "Putting the Great Wall after another major sight",
          detail: "The Wall is a full-day outing for most travelers. Keep the evening light."
        },
        {
          title: "Underestimating walking distances",
          detail: "Beijing's historic sites are large. Comfortable shoes matter more than an ambitious checklist."
        },
        {
          title: "Ignoring Monday closures and ID rules",
          detail: "Some major museums or charged areas close on Mondays or require passport-based booking and entry checks."
        },
        {
          title: "Arriving without payment setup",
          detail: "A working mobile payment option, card fallback, and translation app make the first 24 hours much smoother."
        }
      ],
      officialSources: [
        {
          label: "The Palace Museum booking and visitor information",
          url: "https://english.beijing.gov.cn/travellinginbeijing/museums/202603/t20260320_4562527.html",
          note: "Use this before planning your Forbidden City day."
        },
        {
          label: "Temple of Heaven ticketing and opening information",
          url: "https://english.beijing.gov.cn/specials/ticketing/parks/202407/t20240719_3753312.html",
          note: "Useful for park entry, charged interior sights, and foreign visitor booking notes."
        },
        {
          label: "Beijing Subway official visitor guide",
          url: "https://english.beijing.gov.cn/travellinginbeijing/transportation/beijingsubway/202512/t20251229_4374803.html",
          note: "Check current subway payment and tap-to-ride options."
        },
        {
          label: "GO BEIJING and foreign visitor services",
          url: "https://english.beijing.gov.cn/latest/news/202605/t20260507_4639364.html",
          note: "Helpful for airport services, mobile payment setup, city support, and visitor tools."
        }
      ],
      faqs: [
        {
          question: "How many days do I need in Beijing for a first visit?",
          answer: "Plan 4-5 days. Four days cover the Forbidden City, Temple of Heaven, hutongs, Mutianyu Great Wall, Summer Palace, and key food experiences. A fifth day gives you a weather, jet lag, or museum buffer."
        },
        {
          question: "Do I need to book Forbidden City tickets in advance?",
          answer: "Yes. The Palace Museum does not sell same-day tickets, so book in advance through the official website or official WeChat mini program and bring the same passport or ID used for booking."
        },
        {
          question: "Which Great Wall section is best for first-time visitors to Beijing?",
          answer: "Mutianyu is the easiest recommendation for most first-time visitors because it is restored, scenic, less intense than wilder sections, and has cable car options."
        },
        {
          question: "What is the best area to stay in Beijing?",
          answer: "Wangfujing or Dongdan is the safest default for first-time sightseeing. Qianmen is better for historic atmosphere, while Dongzhimen or Sanlitun works well for dining, nightlife, and airport express access."
        },
        {
          question: "Can foreign visitors use Beijing subway easily?",
          answer: "Yes, but set up payment first. Official guidance lists Beijing Pass, Alipay Metro QR, ticket vending machines, staffed counters, and tap-to-ride bank card options as practical choices."
        },
        {
          question: "When is the best time to visit Beijing?",
          answer: "Autumn, especially September to November, is the best overall season for clear air, comfortable temperatures, and Great Wall views. Spring is also good, while summer can be hot and crowded."
        },
        {
          question: "Do I need cash or can I use cards in Beijing?",
          answer: "Mobile payment is the most convenient, but keep a backup card and some cash for small vendors or setup problems. Airport service counters can help foreign visitors activate mobile payment tools."
        },
        {
          question: "Is Beijing suitable for families or older travelers?",
          answer: "Yes, but plan slower days. Use the subway for central routes, choose hotels near a station, avoid overloading the Great Wall day, and add rest time because palace and park sites involve long walks."
        }
      ]
    }
  },
  {
    id: "shanghai",
    name: "Shanghai",
    image: "https://images.unsplash.com/photo-1627484986972-e544190b8abb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGFuZ2hhaSUyMHNreWxpbmUlMjBuaWdodHxlbnwxfHx8fDE3NzkxNjkyNjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Shanghai is China's largest city and financial hub. It offers a fascinating mix of East and West, featuring historic European-style architecture right across the river from a futuristic skyline.",
    rating: 4.8,
    reviews: 4420,
    tags: ["Modern", "Shopping", "Nightlife"],
    practicalInfo: {
      bestTime: "Oct - Nov (Pleasant weather)",
      duration: "3 - 4 Days",
      airport: "Pudong (PVG) / Hongqiao (SHA)"
    },
    sights: [
      {
        name: "The Bund",
        image: "https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGFuZ2hhaSUyMGJ1bmQlMjBkYXl8ZW58MXx8fHwxNzc5MjAxMTc1fDA&ixlib=rb-4.1.0&q=80&w=1080",
        rating: 4.9,
        description: "A famous waterfront promenade featuring dozens of historical colonial buildings facing the ultra-modern Lujiazui skyscrapers."
      },
      {
        name: "Yu Garden",
        image: "https://images.unsplash.com/photo-1609088399054-7661a95fe0e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5dSUyMGdhcmRlbiUyMHNoYW5naGFpfGVufDF8fHx8MTc3OTIwMTE3MHww&ixlib=rb-4.1.0&q=80&w=1080",
        rating: 4.7,
        description: "An extensive Chinese garden located beside the City God Temple in the northeast of the Old City. Very beautiful but can be crowded."
      }
    ],
    foods: [
      {
        id: "xiaolongbao",
        name: "Xiaolongbao (Soup Dumplings)",
        image: "https://images.unsplash.com/photo-1694834589398-27b369c6f7a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx4aWFvbG9uZ2JhbyUyMHNoYW5naGFpfGVufDF8fHx8MTc3OTIwMTE3NXww&ixlib=rb-4.1.0&q=80&w=1080",
        description: "Delicate steamed buns filled with savory pork and piping hot, flavorful soup.",
        menuItems: [
          { name: "Pork Xiaolongbao", image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwc3RlYW1lZCUyMGJ1bnxlbnwxfHx8fDE3Nzk1ODY2NDR8MA&ixlib=rb-4.1.0&q=80&w=1080", description: "The iconic Shanghainese soup dumpling. Each delicately pleated, nearly translucent wrapper holds a seasoned pork filling and a burst of piping hot, deeply savory broth made by mixing solid pork aspic into the meat before steaming." },
          { name: "Crab Roe Xiaolongbao", image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwc3RlYW1lZCUyMGJ1bnxlbnwxfHx8fDE3Nzk1ODY2NDR8MA&ixlib=rb-4.1.0&q=80&w=1080", description: "A luxurious seasonal upgrade. Hand-picked hairy crab roe and crab meat are folded into the standard pork filling, turning the interior broth into a rich, golden, and immensely sweet-savory liquid that pairs perfectly with black vinegar and ginger." },
          { name: "Pan-fried Shengjianbao", image: "https://images.unsplash.com/photo-1695712641569-05eee7b37b6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwc3ByaW5nJTIwcm9sbHN8ZW58MXx8fHwxNzc5NTg2NjQ4fDA&ixlib=rb-4.1.0&q=80&w=1080", description: "Xiaolongbao's heartier, rustic cousin. These thicker-skinned buns are steamed-fried in massive cast-iron pans until their bottoms are aggressively crispy and golden-brown. Topped with sesame seeds and scallions, they conceal an explosively juicy pork center." }
        ]
      }
    ]
  },
  {
    id: "chengdu",
    name: "Chengdu",
    image: "https://images.unsplash.com/photo-1540126034813-121bf29033d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVuZ2R1JTIwcGFuZGF8ZW58MXx8fHwxNzc5MDkxNDc4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "The capital of Sichuan province, famous worldwide for its giant pandas and exceptionally spicy cuisine. Chengdu is known for its incredibly relaxed and laid-back lifestyle.",
    rating: 4.9,
    reviews: 3150,
    tags: ["Pandas", "Food", "Relaxed"],
    practicalInfo: {
      bestTime: "Mar - Jun / Sep - Nov",
      duration: "3 - 4 Days",
      airport: "Tianfu (TFU) / Shuangliu (CTU)"
    },
    sights: [
      {
        name: "Giant Panda Breeding Research Base",
        image: "https://images.unsplash.com/photo-1540126034813-121bf29033d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVuZ2R1JTIwcGFuZGF8ZW58MXx8fHwxNzc5MDkxNDc4fDA&ixlib=rb-4.1.0&q=80&w=1080",
        rating: 5.0,
        description: "The best place to see giant pandas up close, especially active in the early morning."
      },
      {
        name: "Jinli Ancient Street",
        image: "https://images.unsplash.com/photo-1603459771691-d4022336e755?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqaW5saSUyMHN0cmVldCUyMGNoZW5nZHV8ZW58MXx8fHwxNzc5MjAxMTcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
        rating: 4.6,
        description: "A bustling pedestrian street lined with traditional-style buildings, street food stalls, and local crafts."
      },
      {
        name: "Leshan Giant Buddha",
        image: "https://images.unsplash.com/photo-1558980971-97f50d0fed00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZXNoYW4lMjBnaWFudCUyMGJ1ZGRoYXxlbnwxfHx8fDE3NzkyMDExNzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
        rating: 4.8,
        description: "A 71-meter stone Buddha carved out of a cliff face, easily accessible via a high-speed train day trip from Chengdu."
      }
    ],
    foods: [
      {
        id: "sichuan-hot-pot",
        name: "Sichuan Hot Pot",
        image: "https://images.unsplash.com/photo-1723242017392-6adddc9ffda1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3QlMjBwb3QlMjBjaGVuZ2R1fGVufDF8fHx8MTc3OTIwMTE3NXww&ixlib=rb-4.1.0&q=80&w=1080",
        description: "A boiling, spicy, numbing, and incredibly flavorful broth where you cook your own meats and vegetables.",
        menuItems: [
          { name: "Spicy Beef Tripe", image: "https://images.unsplash.com/photo-1702705487239-10a1ca715454?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwZm9vZCUyMGJlZWYlMjB0cmlwZXxlbnwxfHx8fDE3Nzk1ODY2Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080", description: "The essential Chongqing hotpot ingredient. Fresh, meticulously cleaned beef tripe is dipped into the boiling, beef-tallow-based chili broth for precisely 15 seconds. Its highly textured surface catches maximum flavor, resulting in a spicy, wonderfully crunchy bite." },
          { name: "Sliced Duck Intestines", image: "https://images.unsplash.com/photo-1614104030967-5ca61a54247b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwZm9vZCUyMGhvdCUyMHBvdHxlbnwxfHx8fDE3Nzk1ODY2MTV8MA&ixlib=rb-4.1.0&q=80&w=1080", description: "A beloved staple among true hotpot aficionados. Delivered on ice for ultimate freshness, these pale, ribbon-like intestines are swished briefly through the fiery liquid. They cook almost instantly, offering a clean, crisp texture that contrasts brilliantly with the rich oils." },
          { name: "Bamboo Shoots", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwZm9vZCUyMGJhbWJvb3xlbnwxfHx8fDE3Nzk1ODY2MjR8MA&ixlib=rb-4.1.0&q=80&w=1080", description: "A crucial palate cleanser and textural counterpoint to the heavy meats. Sliced tender bamboo shoots soak up just enough of the complex, numbing broth while maintaining their refreshing sweetness and satisfying crunch." }
        ]
      }
    ]
  },
  {
    id: "guilin",
    name: "Guilin",
    image: "https://images.unsplash.com/photo-1773318901379-aac92fdf5611?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWlsaW4lMjBrYXJzdCUyMG1vdW50YWluc3xlbnwxfHx8fDE3NzkyMDA5MDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Renowned for its dramatic karst mountain landscapes and the picturesque Li River. Guilin and neighboring Yangshuo have inspired Chinese painters and poets for centuries.",
    rating: 4.8,
    reviews: 2980,
    tags: ["Nature", "Scenery", "Photography"],
    practicalInfo: {
      bestTime: "Apr - Oct",
      duration: "2 - 3 Days",
      airport: "Guilin Liangjiang (KWL)"
    },
    sights: [
      {
        name: "Li River Cruise to Yangshuo",
        image: "https://images.unsplash.com/photo-1556880003-4fcd06418af3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YW5nc2h1byUyMHJpdmVyfGVufDF8fHx8MTc3OTIwMTE3MXww&ixlib=rb-4.1.0&q=80&w=1080",
        rating: 4.9,
        description: "Take a scenic boat cruise or bamboo raft down the Li River to see the breathtaking karst limestone peaks."
      }
    ],
    foods: [
      {
        id: "guilin-rice-noodles",
        name: "Guilin Rice Noodles",
        image: "https://images.unsplash.com/photo-1772490184769-6ce0bb434698?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWlsaW4lMjByaWNlJTIwbm9vZGxlc3xlbnwxfHx8fDE3NzkyMDExNzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
        description: "The quintessential local breakfast: thick rice noodles topped with gravy, peanuts, and crispy pork.",
        menuItems: [
          { name: "Classic Crispy Pork Noodles", image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwZm9vZCUyMHNwaWN5JTIwbm9vZGxlc3xlbnwxfHx8fDE3Nzk1ODY1ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080", description: "The soul of Guilin mornings. Fresh, thick rice noodles are tossed dry (without soup) in an intensely flavorful, secret-recipe gravy made from dozens of spices. It is generously topped with ultra-crispy roasted pork belly, fried peanuts, scallions, and pickled long beans." },
          { name: "Beef Brisket Noodles", image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwZm9vZCUyMHNwaWN5JTIwbm9vZGxlc3xlbnwxfHx8fDE3Nzk1ODY1ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080", description: "A heartier, soupier variation of the classic. Slow-braised, melt-in-your-mouth beef brisket is ladled generously over slippery rice noodles in a rich, deeply spiced beef broth, complemented by fresh cilantro and pickled mustard greens." },
          { name: "Pickled Sour Bamboo", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwZm9vZCUyMGJhbWJvb3xlbnwxfHx8fDE3Nzk1ODY2MjR8MA&ixlib=rb-4.1.0&q=80&w=1080", description: "The indispensable soulmate to Guilin noodles. Locally grown bamboo shoots are fermented until they develop a distinct, punchy sourness. Mixed into the noodles, they cut perfectly through the rich meat fat and gravy." }
        ]
      }
    ]
  },
  {
    id: "xian",
    name: "Xi'an",
    image: "https://images.unsplash.com/photo-1659466248885-8b7a03205661?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx4aWFuJTIwdGVycmFjb3R0YSUyMHdhcnJpb3JzfGVufDF8fHx8MTc3OTA5MTQ3OHww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "The starting point of the Silk Road and home to the Terracotta Army. Xi'an is a living museum of China's ancient history and boasts incredible Muslim-influenced street food.",
    rating: 4.8,
    reviews: 3890,
    tags: ["History", "Culture", "Silk Road"],
    practicalInfo: {
      bestTime: "Mar - May / Sep - Oct",
      duration: "2 - 3 Days",
      airport: "Xi'an Xianyang (XIY)"
    },
    sights: [],
    foods: [
      {
        id: "roujiamo",
        name: "Roujiamo (Chinese Hamburger)",
        image: "https://images.unsplash.com/photo-1626804475297-4160ebea0f3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwaGFtYnVyZ2VyfGVufDF8fHx8MTc3OTI4NDEyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
        description: "A popular street food featuring tender, slow-braised meat stuffed inside a crispy, pan-baked flatbread.",
        menuItems: [
          { name: "Premium Pork Roujiamo", image: "https://images.unsplash.com/photo-1767974916988-5b63acdbcaa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwZmxhdGJyZWFkfGVufDF8fHx8MTc3OTU4NjYzNHww&ixlib=rb-4.1.0&q=80&w=1080", description: "The classic 'Chinese Hamburger'. A deeply flavorful mixture of lean and fatty pork belly is slow-braised in a master stock containing over 20 spices, then finely chopped and stuffed into a freshly baked, crusty flatbread (baijimo) that soaks up the savory meat juices." },
          { name: "All-Lean Pork Roujiamo", image: "https://images.unsplash.com/photo-1767974916988-5b63acdbcaa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwZmxhdGJyZWFkfGVufDF8fHx8MTc3OTU4NjYzNHww&ixlib=rb-4.1.0&q=80&w=1080", description: "For those who prefer a less rich experience, this version uses only the tender, slow-braised lean cuts of pork. It remains incredibly juicy and aromatic, heavily spiced with cumin, star anise, and cloves without the heavier mouthfeel of rendered fat." },
          { name: "Beef Roujiamo", image: "https://images.unsplash.com/photo-1767974916988-5b63acdbcaa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwZmxhdGJyZWFkfGVufDF8fHx8MTc3OTU4NjYzNHww&ixlib=rb-4.1.0&q=80&w=1080", description: "A famous variation hailing from Xi'an's Muslim Quarter. Premium beef brisket is braised until perfectly tender in a distinct, robust spice blend featuring cardamom and black pepper, then served piping hot in a toasted, slightly chewy unleavened bread." }
        ]
      },
      {
        id: "biang-biang-noodles",
        name: "Biang Biang Noodles",
        image: "https://images.unsplash.com/photo-1552611052-33e04de081de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub29kbGVzJTIwaW4lMjBib3dsfGVufDF8fHx8MTc3OTI4NDEyNHww&ixlib=rb-4.1.0&q=80&w=1080",
        description: "Thick, hand-pulled noodles famously known for their wide, belt-like shape and spicy chili oil topping.",
        menuItems: [
          { name: "3-in-1 Biang Biang", image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwZm9vZCUyMHNwaWN5JTIwbm9vZGxlc3xlbnwxfHx8fDE3Nzk1ODY1ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080", description: "The ultimate bowl of Xi'an comfort food. Massive, belt-like hand-pulled noodles are aggressively slapped (making the 'biang biang' sound) against the counter, boiled, and then lavishly topped with three classic components: savory pork mince, sweet tomato-egg stir-fry, and an aromatic chili-oil garlic splash." },
          { name: "Oil-splashed Noodles", image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwZm9vZCUyMHNwaWN5JTIwbm9vZGxlc3xlbnwxfHx8fDE3Nzk1ODY1ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080", description: "Simplicity at its finest. Thick, chewy noodles are topped with a mountain of minced garlic, scallions, and coarse chili powder. Smoking-hot oil is then poured directly over the aromatics right before serving, releasing an incredibly appetizing, fragrant sizzle." }
        ]
      }
    ]
  },
  {
    id: "hangzhou",
    name: "Hangzhou",
    image: "https://images.unsplash.com/photo-1697553308664-5aed18530490?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5nemhvdSUyMHdlc3QlMjBsYWtlfGVufDF8fHx8MTc3OTIwMjMzOHww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Famous for the serene West Lake, Hangzhou offers a perfect blend of natural beauty and historical tea culture. Described by Marco Polo as 'the most beautiful and magnificent city in the world.'",
    rating: 4.7,
    reviews: 2150,
    tags: ["Nature", "Tea", "Romance"],
    practicalInfo: {
      bestTime: "Mar - May (Spring)",
      duration: "2 Days",
      airport: "Hangzhou Xiaoshan (HGH)"
    },
    sights: [],
    foods: [
      {
        id: "dongpo-pork",
        name: "Dongpo Pork",
        image: "https://images.unsplash.com/photo-1627308595186-eec09fc088b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFpc2VkJTIwcG9ya3xlbnwxfHx8fDE3NzkyODQxMjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
        description: "A quintessential Hangzhou dish of pan-fried and red-braised pork belly, known for melting in your mouth.",
        menuItems: [
          { name: "Signature Dongpo Pork", image: "https://images.unsplash.com/photo-1445979323117-80453f573b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwZm9vZCUyMGJyYWlzZWQlMjBwb3JrfGVufDF8fHx8MTc3OTU4NjU4OXww&ixlib=rb-4.1.0&q=80&w=1080", description: "Named after the poet Su Dongpo, this requires slow-cooking thick cubes of pork belly in a sealed clay pot with premium Shaoxing wine and soy sauce. The result is a glistening, ruby-red dish where the fat dissolves instantly on the palate." },
          { name: "Longjing Shrimp", image: "https://images.unsplash.com/photo-1563372522-8e97eac82f62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwZm9vZCUyMHNocmltcHxlbnwxfHx8fDE3Nzk1ODY2Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080", description: "A poetic Hangzhou creation. Peeled, incredibly sweet river shrimp are 'velveted' in egg white and starch, then quickly stir-fried alongside fresh, premium Longjing green tea leaves, imparting a subtle, elegant tea aroma to the pristine seafood." },
          { name: "West Lake Fish in Vinegar Gravy", image: "https://images.unsplash.com/photo-1597490101653-8db754021a89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwc3RlYW1lZCUyMGZpc2h8ZW58MXx8fHwxNzc5NTg2NTk4fDA&ixlib=rb-4.1.0&q=80&w=1080", description: "This historic dish demands a grass carp sourced directly from West Lake. Gently poached to preserve its silken texture, the fish is blanketed in a distinctive, dark sweet-and-sour glaze made primarily from black rice vinegar, with absolutely no oil used in the cooking process." }
        ]
      }
    ]
  },
  {
    id: "hongkong",
    name: "Hong Kong",
    image: "https://images.unsplash.com/photo-1620015092538-e33c665fc181?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob25nJTIwa29uZyUyMHNreWxpbmV8ZW58MXx8fHwxNzc5MjAyMzM4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "A vibrant metropolis where East meets West. Renowned for its stunning skyline, lush mountain trails, and world-class culinary scene.",
    rating: 4.9,
    reviews: 6200,
    tags: ["Metropolis", "Food", "Shopping"],
    practicalInfo: {
      bestTime: "Oct - Dec",
      duration: "3 - 5 Days",
      airport: "Hong Kong International (HKG)"
    },
    sights: [],
    foods: [
      {
        id: "dim-sum",
        name: "Dim Sum",
        image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaW0lMjBzdW18ZW58MXx8fDE3NzkyODQxMjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
        description: "An array of bite-sized dishes, from shrimp dumplings to barbecue pork buns, typically enjoyed with tea.",
        menuItems: [
          { name: "Har Gow (Shrimp Dumplings)", image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwc3RlYW1lZCUyMGJ1bnxlbnwxfHx8fDE3Nzk1ODY2NDR8MA&ixlib=rb-4.1.0&q=80&w=1080", description: "The crown jewel of any Dim Sum table. These delicate, pleated dumplings feature a translucent, slightly chewy wrapper made of wheat and tapioca starch, revealing plump, exceptionally fresh whole shrimp and crisp bamboo shoots inside." },
          { name: "Siu Mai (Pork Dumplings)", image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwc3RlYW1lZCUyMGJ1bnxlbnwxfHx8fDE3Nzk1ODY2NDR8MA&ixlib=rb-4.1.0&q=80&w=1080", description: "Instantly recognizable by their open-topped, cup-like shape and yellow wrapper. These substantial dumplings are packed with a savory, coarsely chopped mixture of ground pork, shrimp, and Chinese black mushrooms, traditionally crowned with a dot of vibrant crab roe or carrot." },
          { name: "Char Siu Bao", image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwc3RlYW1lZCUyMGJ1bnxlbnwxfHx8fDE3Nzk1ODY2NDR8MA&ixlib=rb-4.1.0&q=80&w=1080", description: "A brilliant contrast of textures and flavors. The dough is fermented to create a uniquely fluffy, cloud-like white bun that slightly splits open at the top, exposing a rich, dark-red filling of sweet, slow-roasted BBQ pork (Char Siu) bathed in a thick oyster-sauce glaze." },
          { name: "Egg Tarts", image: "https://images.unsplash.com/photo-1637273483570-10e72651892e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwZWdnJTIwdGFydHxlbnwxfHx8fDE3Nzk1ODY2NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080", description: "A beautiful fusion of British pastry techniques and Chinese custard-making. These small tarts feature a remarkably flaky, multi-layered puff pastry crust encasing a smooth, gently sweet, and vibrant yellow egg custard that jiggles slightly when served hot." }
        ]
      }
    ]
  },
  {
    id: "zhangjiajie",
    name: "Zhangjiajie",
    image: "https://images.unsplash.com/photo-1567266565446-d9c40ccf59a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx6aGFuZ2ppYWppZSUyMG1vdW50YWluc3xlbnwxfHx8fDE3NzkyMDIzMzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Famous for its towering sandstone pillars that inspired the floating mountains in the movie Avatar. A must-visit for nature and hiking enthusiasts.",
    rating: 4.8,
    reviews: 1980,
    tags: ["Nature", "Adventure", "Mountains"],
    practicalInfo: {
      bestTime: "Apr - May / Sep - Oct",
      duration: "3 Days",
      airport: "Zhangjiajie Hehua (DYG)"
    },
    sights: [],
    foods: [
      {
        id: "sanxiaguo",
        name: "Sanxiaguo (Three-Delicacy Pot)",
        image: "https://images.unsplash.com/photo-1555126634-323283e090fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGV3JTIwcG90fGVufDF8fHx8MTc3OTI4NDEyNnww&ixlib=rb-4.1.0&q=80&w=1080",
        description: "A traditional Tujia minority dish combining bacon, tofu, and radish into a hearty, spicy stew.",
        menuItems: [
          { name: "Pork & Intestine Sanxiaguo", image: "https://images.unsplash.com/photo-1624067046879-cca70a7cf79c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwZm9vZCUyMHNvdXB8ZW58MXx8fHwxNzc5NTg2NjIxfDA&ixlib=rb-4.1.0&q=80&w=1080", description: "The most authentic and robust version of this Tujia minority stew. It combines three main ingredients—typically smoked pork belly, pork intestines, and pork tripe—simmered over an open flame with local chilies and wild mountain herbs to create an intensely savory, rustic dish that keeps you warm." },
          { name: "Vegetarian Tofu Pot", image: "https://images.unsplash.com/photo-1707967933821-809de732e50f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwdG9mdXxlbnwxfHx8fDE3Nzk1ODY2NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080", description: "A lighter, yet equally flavorful alternative that highlights the region's agricultural bounty. This version stews locally pressed firm tofu with an array of wild mushrooms, bamboo shoots, and fresh greens gathered from the Zhangjiajie mountains." },
          { name: "Smoked Bacon Platter", image: "https://images.unsplash.com/photo-1566749006386-4cfc0d44f733?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwZm9vZCUyMGJhY29ufGVufDF8fHx8MTc3OTU4NjY0MXww&ixlib=rb-4.1.0&q=80&w=1080", description: "A showcase of the region's famous house-smoked bacon (Laro). Cured and smoked over cedar and pine branches for months, the meat takes on a dark, mahogany hue and a profound smokiness. Sliced thin, it is often steamed or briefly stir-fried before serving." }
        ]
      }
    ]
  }
];

export const GUIDES = [
  {
    id: "g1",
    title: "First Time in China? The Ultimate 14-Day Itinerary (Beijing-Xi'an-Chengdu-Shanghai)",
    author: {
      name: "Sarah Traveler",
      avatar: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMGZlbWFsZSUyMHNtaWxlfGVufDF8fHx8MTc3OTIwMDY4N3ww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    image: "https://images.unsplash.com/photo-1608037521277-154cd1b89191?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVhdCUyMHdhbGwlMjBjaGluYXxlbnwxfHx8fDE3NzkxODc4MzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    likes: 3240,
    views: "25k",
    tags: ["Itinerary", "First-Timers", "Classic Route"]
  },
  {
    id: "g2",
    title: "How to Survive (and Thrive) Using Chinese Apps: Alipay, WeChat & Didi Explained",
    author: {
      name: "Mark In Asia",
      avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG1hbGUlMjBnbGFzc2VzfGVufDF8fHx8MTc3OTE5MTQ3OXww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    image: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3JlaWduJTIwdG91cmlzdCUyMGluJTIwY2hpbmF8ZW58MXx8fHwxNzc5MjAwOTA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    likes: 5890,
    views: "48k+",
    tags: ["Practical Tips", "Apps", "Payment"]
  },
  {
    id: "g3",
    title: "A Foodie's Guide to China: What to Eat Beyond Sweet & Sour Pork",
    author: {
      name: "Foodie Explorer",
      avatar: "https://images.unsplash.com/photo-1551632811-561732d1e306?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3VyaXN0JTIwaGlraW5nfGVufDF8fHx8MTc3OTIwMDY4N3ww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwZm9vZCUyMGRpbSUyMHN1bXxlbnwxfHx8fDE3NzkyMDA5MDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    likes: 4100,
    views: "32k",
    tags: ["Food", "Culture", "Tips"]
  }
];

export const ITINERARIES = [
  {
    id: "classic-14-days",
    title: "The Golden Triangle & Pandas: 14 Days Classic",
    description: "The ultimate first-timer's itinerary. Experience the imperial grandeur of Beijing, the ancient warriors of Xi'an, the adorable pandas in Chengdu, and the modern skyline of Shanghai.",
    image: "https://images.unsplash.com/photo-1608037521277-154cd1b89191?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVhdCUyMHdhbGwlMjBjaGluYXxlbnwxfHx8fDE3NzkxODc4MzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "14 Days",
    theme: "Classic",
    destinations: ["Beijing", "Xi'an", "Chengdu", "Shanghai"],
    rating: 4.9,
    reviews: 1204,
    pace: "Moderate",
    days: [
      {
        day: "Days 1-4",
        location: "Beijing",
        description: "Arrive in the capital. Spend your days exploring the majestic Forbidden City, hiking the Great Wall at Mutianyu, and wandering through the historic Hutong alleyways. Don't forget to try authentic Peking Duck.",
        image: "https://images.unsplash.com/photo-1584872589930-e99fe5bf4408?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW1wbGUlMjBvZiUyMGhlYXZlbiUyMGJlaWppbmd8ZW58MXx8fHwxNzc5MjAxMTcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
        tips: "Book Forbidden City tickets at least 7 days in advance."
      },
      {
        day: "Days 5-7",
        location: "Xi'an",
        description: "Take the high-speed train to Xi'an. Marvel at the life-sized Terracotta Warriors, cycle along the ancient City Wall, and indulge in street food at the bustling Muslim Quarter.",
        image: "https://images.unsplash.com/photo-1659466248885-8b7a03205661?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx4aWFuJTIwdGVycmFjb3R0YSUyMHdhcnJpb3JzfGVufDF8fHx8MTc3OTA5MTQ3OHww&ixlib=rb-4.1.0&q=80&w=1080",
        tips: "Rent a tandem bike on the City Wall around sunset for the best views."
      },
      {
        day: "Days 8-10",
        location: "Chengdu",
        description: "Fly or take the bullet train to Chengdu. Visit the Giant Panda Breeding Base early in the morning. Experience local teahouse culture at People's Park and challenge yourself with authentic Sichuan hot pot.",
        image: "https://images.unsplash.com/photo-1540126034813-121bf29033d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVuZ2R1JTIwcGFuZGF8ZW58MXx8fHwxNzc5MDkxNDc4fDA&ixlib=rb-4.1.0&q=80&w=1080",
        tips: "Pandas are most active between 8:00 AM and 10:00 AM."
      },
      {
        day: "Days 11-14",
        location: "Shanghai",
        description: "Arrive in modern Shanghai. Stroll along the historical Bund, admire the futuristic skyscrapers of Lujiazui, and explore the classical Yu Garden. Wrap up your trip with soup dumplings (Xiaolongbao).",
        image: "https://images.unsplash.com/photo-1627484986972-e544190b8abb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGFuZ2hhaSUyMHNreWxpbmUlMjBuaWdodHxlbnwxfHx8fDE3NzkxNjkyNjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
        tips: "Use the Maglev train to get to Pudong Airport for your departure."
      }
    ]
  },
  {
    id: "nature-guilin-zhangjiajie",
    title: "Avatar Peaks & River Cruises: 10 Days Nature",
    description: "Dive into China's most breathtaking natural landscapes. From the Karst mountains of Guilin to the towering sandstone pillars of Zhangjiajie that inspired the movie Avatar.",
    image: "https://images.unsplash.com/photo-1567266565446-d9c40ccf59a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx6aGFuZ2ppYWppZSUyMG1vdW50YWluc3xlbnwxfHx8fDE3NzkyMDIzMzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "10 Days",
    theme: "Nature",
    destinations: ["Guilin", "Yangshuo", "Zhangjiajie"],
    rating: 4.8,
    reviews: 856,
    pace: "Active",
    days: [
      {
        day: "Days 1-4",
        location: "Guilin & Yangshuo",
        description: "Cruise down the Li River surrounded by mesmerizing karst peaks. Spend days cycling through the countryside in Yangshuo, exploring caves, and watching the Impression Sanjie Liu night show.",
        image: "https://images.unsplash.com/photo-1556880003-4fcd06418af3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YW5nc2h1byUyMHJpdmVyfGVufDF8fHx8MTc3OTIwMTE3MXww&ixlib=rb-4.1.0&q=80&w=1080",
        tips: "Rent an e-bike in Yangshuo for easier exploration of the vast countryside."
      },
      {
        day: "Days 5-10",
        location: "Zhangjiajie",
        description: "Take the high-speed train to Zhangjiajie. Hike through the National Forest Park to see the Hallelujah Mountains, walk across the world's longest glass bridge, and ride the cable car up Tianmen Mountain.",
        image: "https://images.unsplash.com/photo-1567266565446-d9c40ccf59a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx6aGFuZ2ppYWppZSUyMG1vdW50YWluc3xlbnwxfHx8fDE3NzkyMDIzMzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
        tips: "Be prepared for a lot of walking and steep steps. Good hiking shoes are mandatory."
      }
    ]
  },
  {
    id: "silk-road-adventure",
    title: "The Ancient Silk Road: 16 Days Adventure",
    description: "Follow the footsteps of ancient merchants. A deep cultural dive into China's Northwest, traversing deserts, ancient grottos, and vibrant minority cultures.",
    image: "https://images.unsplash.com/photo-1778080738909-631b6759a899?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWxrJTIwcm9hZCUyMGNhbWVsfGVufDF8fHx8MTc3OTIwMjU3M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "16 Days",
    theme: "Adventure",
    destinations: ["Xi'an", "Dunhuang", "Turpan", "Kashgar"],
    rating: 4.9,
    reviews: 420,
    pace: "Intense",
    days: [
      {
        day: "Days 1-3",
        location: "Xi'an",
        description: "Start where the Silk Road began. Visit the Terracotta Warriors and immerse yourself in the deep history of the Tang Dynasty.",
        image: "https://images.unsplash.com/photo-1659466248885-8b7a03205661?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx4aWFuJTIwdGVycmFjb3R0YSUyMHdhcnJpb3JzfGVufDF8fHx8MTc3OTA5MTQ3OHww&ixlib=rb-4.1.0&q=80&w=1080",
        tips: "Try the local Roujiamo (Chinese hamburger)."
      },
      {
        day: "Days 4-16",
        location: "Gansu & Xinjiang",
        description: "Travel west along the Hexi Corridor. Marvel at the Mogao Caves' Buddhist art in Dunhuang, ride a camel across the singing sand dunes, and explore the bustling bazaars of Kashgar.",
        image: "https://images.unsplash.com/photo-1778080738909-631b6759a899?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWxrJTIwcm9hZCUyMGNhbWVsfGVufDF8fHx8MTc3OTIwMjU3M3ww&ixlib=rb-4.1.0&q=80&w=1080",
        tips: "Prepare for dry weather and long travel distances."
      }
    ]
  },
  {
    id: "guangzhou-culinary-capital",
    title: "Cantonese Heritage & Dim Sum: 5 Days in Guangzhou",
    description: "Experience the birthplace of Cantonese cuisine and the gateway to southern China. Discover historic islands, modern towers, and an endless array of culinary delights.",
    image: "https://images.unsplash.com/photo-1699063770867-6d1cb76f2013?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWFuZ3pob3UlMjBjYW50b24lMjB0b3dlciUyMG5pZ2h0fGVufDF8fHx8MTc3OTI4MzQyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    mapImage: guangzhouMap,
    duration: "5 Days",
    theme: "Culture",
    destinations: ["Guangzhou"],
    rating: 4.9,
    reviews: 1350,
    pace: "Relaxed",
    days: [
      {
        day: "Day 1-2",
        location: "Historic Guangzhou",
        description: "Wander through the European-style architecture of Shamian Island, explore the Chen Clan Ancestral Hall, and start your dim sum journey at traditional local teahouses.",
        image: "https://images.unsplash.com/photo-1607420413010-11421a35e804?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWFuZ3pob3UlMjBzaGFtaWFuJTIwaXNsYW5kfGVufDF8fHx8MTc3OTI4MzQyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
        tips: "Arrive early for morning tea (Yum Cha) to secure a good table."
      },
      {
        day: "Day 3-5",
        location: "Modern Guangzhou & Night Views",
        description: "Ascend the iconic Canton Tower, stroll around the modern Zhujiang New Town, and take a relaxing night cruise along the Pearl River while enjoying dinner.",
        image: "https://images.unsplash.com/photo-1746167984321-50f8f4d29644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWFuZ3pob3UlMjBza3lsaW5lJTIwcGVhcmwlMjByaXZlcnxlbnwxfHx8fDE3NzkyODM0MjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
        tips: "Book your Pearl River night cruise tickets in advance during peak season."
      }
    ]
  }
];
