// Content file - edit this to update products, testimonials, and FAQ
// IMPORTANT: Prices marked with [GUESSED] need to be confirmed by the owner

export const collections = [
  {
    id: "gold-chains",
    name: "Gold Chains",
    description: "Lightweight 18KT and 22KT gold chains, starting from just 0.5 grams. Perfect for everyday elegance.",
    priceRange: "₹3,500 - ₹2,50,000", // [GUESSED] - confirm with owner
    image: "/photos/gold-chains-premium.png",
    badge: "Bestseller",
  },
  {
    id: "sterling-silver",
    name: "Sterling Silver 92.5",
    description: "Premium sterling silver chains, bracelets, and kadas with a finish that lasts. Trendy, classy, and built to shine.",
    priceRange: "₹1,500 - ₹25,000", // [GUESSED] - confirm with owner
    image: "/photos/sterling-silver-premium.png",
    badge: "New Stock",
  },
  {
    id: "silver-watches",
    name: "Silver Watches",
    description: "Crafted in pure 92.5 sterling silver. A statement piece for those who appreciate exclusivity.",
    priceRange: "₹80,000 - ₹90,000", // From Instagram post
    image: "/photos/silver-watch-premium.png",
    badge: "Exclusive",
  },
  {
    id: "gold-bracelets",
    name: "Gold Bracelets",
    description: "Elegant 22KT gold bracelets, light enough for daily wear yet bold enough to make a statement.",
    priceRange: "₹15,000 - ₹3,00,000", // [GUESSED] - confirm with owner
    image: "/photos/gold-bracelets-premium.png",
    badge: null,
  },
  {
    id: "silver-bracelets",
    name: "Silver Bracelets",
    description: "Premium silver bracelets crafted to perfection. Style that speaks before you do.",
    priceRange: "₹2,000 - ₹15,000", // [GUESSED] - confirm with owner
    image: "/photos/silver-bracelets-premium.png",
    badge: null,
  },
  {
    id: "rings",
    name: "Rings & Bands",
    description: "From powerful tiger rings in 10 gram gold to sleek silver owl rings. Designs that carry meaning.",
    priceRange: "₹5,000 - ₹1,50,000", // [GUESSED] - confirm with owner
    image: "/photos/rings-premium.png",
    badge: "Popular",
  },
  {
    id: "mens-collection",
    name: "Men's Collection",
    description: "Gold balis starting from just 1 gram, statement chains, bracelets, and rings designed for the modern man.",
    priceRange: "₹4,000 - ₹2,00,000", // [GUESSED] - confirm with owner
    image: "/photos/mens-collection-premium.png",
    badge: null,
  },
  {
    id: "gemstones",
    name: "Gemstones",
    description: "Certified precious and semi-precious gemstones. Each stone hand-picked for quality and astrological value.",
    priceRange: "₹5,000 - ₹5,00,000", // [GUESSED] - confirm with owner
    image: "/photos/gemstones-premium.png",
    badge: null,
  },
] as const;

export const highlights = [
  {
    stat: "47,500+",
    label: "Instagram Followers",
  },
  {
    stat: "22KT",
    label: "Pure Gold Jewellery",
  },
  {
    stat: "92.5",
    label: "Sterling Silver Standard",
  },
  {
    stat: "BIS",
    label: "Hallmarked Gold",
  },
] as const;

export const trustSignals = [
  "BIS Hallmarked Gold",
  "92.5 Sterling Silver Certified",
  "47,500+ Trusted Followers",
  "Verified Instagram Business",
  "Generations of Trust in Nagpur",
  "Exchange and Buyback Available",
] as const;

export const testimonials = [
  {
    text: "Best jewellery shop in Nagpur. Amazing collection of silver and gold. Staff is very helpful and prices are genuine.",
    author: "Satisfied Customer",
    rating: 5,
  },
  {
    text: "Sterling silver collection is out of this world. Bought a silver watch and bracelet, both are premium quality. Worth every rupee.",
    author: "Happy Customer",
    rating: 5,
  },
  {
    text: "Gold chains starting from 0.5 grams was unbelievable until I saw it myself. Pukhraj Jewellers never disappoints.",
    author: "Loyal Customer",
    rating: 5,
  },
] as const;

export const faq = [
  {
    question: "Is your gold BIS hallmarked?",
    answer: "Yes. Every piece of gold jewellery at Pukhraj Jewellers is BIS hallmarked, guaranteeing purity and quality.",
  },
  {
    question: "What is the purity of your silver jewellery?",
    answer: "Our silver collection uses 92.5 sterling silver, the international standard for premium silver jewellery.",
  },
  {
    question: "Do you offer exchange or buyback?",
    answer: "Yes. We offer exchange and buyback on gold and silver jewellery purchased from our store.",
  },
  {
    question: "Can I visit the store without an appointment?",
    answer: "Absolutely. Walk in anytime during store hours. We are on Manewada Main Road, near Belsare Hospital, Nagpur.",
  },
  {
    question: "Do you ship across India?",
    answer: "Please call us at 8087091660 to discuss shipping for specific items. We are happy to help.",
  },
  {
    question: "What are your store timings?",
    answer: "We are open Monday to Saturday from 10:00 AM to 9:00 PM, and Sundays from 12:00 PM to 8:00 PM.",
  },
] as const;

export const offers = [
  {
    title: "20% Off Sterling Silver",
    description: "On the entire sterling silver jewellery collection.",
    badge: "Limited Time",
  },
  {
    title: "35% Off Silver Jewellery",
    description: "On our curated silver collection. Visit the store today.",
    badge: "In Store",
  },
] as const;
