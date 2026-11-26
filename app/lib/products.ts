export type ProductCategory = "wigs" | "haircare" | "services" | "nails";
export type ProductStyle = "waves" | "bobs" | "straight" | "curls" | "care";
export type ProductShade = "natural" | "colour" | "blonde" | "burgundy" | "copper";

export type Product = {
  id: string;
  name: string;
  price: number;
  compareAtPrice?: number;
  category: ProductCategory;
  style: ProductStyle;
  shade: ProductShade;
  tag: string;
  description: string;
  details: string[];
  image: string;
  imageAlt: string;
  rating: number;
  reviewsCount: number;
  inStock: boolean;
  lengths?: string[];
  createdAt: string;
};

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: "derb-wig-01",
    name: "Rosewood Volume Glueless Lace Unit",
    price: 280_000,
    category: "wigs",
    style: "waves",
    shade: "colour",
    tag: "Best Seller",
    description: "Soft, sweeping rosewood layers with a voluminous full-bodied finish. 100% virgin human hair with pre-plucked invisible HD lace.",
    details: [
      "100% Virgin human hair",
      "Invisible HD Swiss lace frontal",
      "Pre-plucked natural hairline with baby hair",
      "180% high density for maximum body",
      "Adjustable glueless elastic strap included"
    ],
    image: "/WhatsApp Image 2026-11-16 at 20.02.42.jpeg",
    imageAlt: "Long rose-brown waves displayed on a wig mannequin",
    rating: 4.9,
    reviewsCount: 48,
    inStock: true,
    lengths: ["18 inch", "22 inch", "26 inch", "30 inch"],
    createdAt: "2026-01-10",
  },
  {
    id: "derb-wig-02",
    name: "Midnight Muse Raw Virgin Curls",
    price: 420_000,
    category: "wigs",
    style: "waves",
    shade: "natural",
    tag: "High Demand",
    description: "Glossy jet black deep curls with all-day bouncy definition. Crafted from single-donor raw hair with cuticle intact.",
    details: [
      "100% Single donor raw virgin hair",
      "13x6 deep parting HD transparent lace",
      "Bouncy deep wave pattern that holds after wash",
      "Bleached micro-knots for undetectable scalp look",
      "Tangle-free with minimal shedding guarantee"
    ],
    image: "/WhatsApp Image 2026-11-16 at 20.02.42 (1).jpeg",
    imageAlt: "Voluminous black curly wigs displayed on mannequins",
    rating: 5.0,
    reviewsCount: 62,
    inStock: true,
    lengths: ["20 inch", "24 inch", "28 inch", "32 inch"],
    createdAt: "2026-01-12",
  },
  {
    id: "derb-wig-03",
    name: "Merlot Precision Blunt Cut Bob",
    price: 80_000,
    category: "wigs",
    style: "bobs",
    shade: "burgundy",
    tag: "Editor's Pick",
    description: "A razor-sharp, sleek rich-toned deep burgundy bob that frames the jawline with striking elegance and glass-hair shine.",
    details: [
      "Rich multi-dimensional wine burgundy tone",
      "Silky bone straight texture with salon blunt edge",
      "Breathable 13x4 ear-to-ear frontal lace",
      "Pre-styled and ready to wear out of the luxury box",
      "Heat-resistant up to 220°C"
    ],
    image: "/WhatsApp Image 2026-11-16 at 20.02.42 (2).jpeg",
    imageAlt: "A deep burgundy bob wig displayed on a mannequin",
    rating: 4.8,
    reviewsCount: 39,
    inStock: true,
    lengths: ["10 inch", "12 inch", "14 inch"],
    createdAt: "2026-01-15",
  },
  {
    id: "derb-wig-04",
    name: "Golden Hour Statement Curls",
    price: 500_000,
    category: "wigs",
    style: "waves",
    shade: "blonde",
    tag: "New Arrival",
    description: "Breathtaking voluminous honey blonde curls. Professionally lifted with plex protection to maintain silkiness and elasticity.",
    details: [
      "Multi-tonal honey & warm butterscotch blonde",
      "Full 200% luxury density for dramatic bounce",
      "Ultra-soft melt lace matching all skin undertones",
      "Moisture-sealed curls with lasting retention",
      "Includes satin storage bag and silk edge band"
    ],
    image: "/WhatsApp Image 2026-11-16 at 20.02.42 (3).jpeg",
    imageAlt: "Voluminous golden blonde curls displayed on a wig mannequin",
    rating: 4.9,
    reviewsCount: 31,
    inStock: true,
    lengths: ["22 inch", "26 inch", "30 inch"],
    createdAt: "2026-02-01",
  },
  {
    id: "derb-wig-05",
    name: "Copper Silk Press with Fringe",
    price: 180_000,
    category: "wigs",
    style: "straight",
    shade: "copper",
    tag: "Trending",
    description: "A rich vibrant autumn copper unit featuring a flawless straight silk press finish and a custom face-framing fringe bang.",
    details: [
      "Custom warm cinnamon-copper formula",
      "Precision cut wispy fringe bangs (no lace glue needed)",
      "Throw-on-and-go beginner friendly unit",
      "Silky movement that flows naturally in the wind",
      "Secure inner comb and velvet nape grip"
    ],
    image: "/WhatsApp Image 2026-11-16 at 20.02.43.jpeg",
    imageAlt: "A long copper wig with a full fringe displayed on a mannequin",
    rating: 4.9,
    reviewsCount: 27,
    inStock: true,
    lengths: ["18 inch", "22 inch", "26 inch"],
    createdAt: "2026-02-05",
  },
  {
    id: "derb-wig-06",
    name: "Crown Empress Wet & Wavy Frontal",
    price: 600_000,
    category: "wigs",
    style: "waves",
    shade: "natural",
    tag: "Luxury Virgin",
    description: "Versatile Brazilian virgin hair that transitions effortlessly from sleek blowouts to defined tropical wet curls with just mist.",
    details: [
      "100% Unprocessed Brazilian cuticle hair",
      "Double drawn thickness from root to tips",
      "Wear straight or wet for juicy defined ringlets",
      "Skin-melt 13x6 frontal for high ponytails & half-ups",
      "Dye and bleach friendly up to #613 blonde"
    ],
    image: "/WhatsApp Image 2026-11-17 at 16.24.12.jpeg",
    imageAlt: "Lustrous wet and wavy virgin lace wig",
    rating: 5.0,
    reviewsCount: 54,
    inStock: true,
    lengths: ["20 inch", "24 inch", "28 inch"],
    createdAt: "2026-02-08",
  },
  {
    id: "derb-wig-07",
    name: "Obsidian Silk 30\" Bone Straight",
    price: 700_000,
    category: "wigs",
    style: "straight",
    shade: "natural",
    tag: "Signature",
    description: "Our longest, most opulent bone straight unit. Impeccably silky, sleek, and lustrous with clean glass-like alignment.",
    details: [
      "Ultra-length 30-inch double-drawn raw hair",
      "High-grade thermal heat sealing for zero flyaways",
      "Seamless transparent Swiss lace",
      "Can be curled and restyled repeatedly",
      "Signature Derbroyal gold dust presentation packaging"
    ],
    image: "/WhatsApp Image 2026-11-17 at 16.24.13.jpeg",
    imageAlt: "Long bone straight dark lace wig",
    rating: 4.9,
    reviewsCount: 42,
    inStock: true,
    lengths: ["26 inch", "30 inch", "34 inch"],
    createdAt: "2026-02-12",
  },
  {
    id: "derb-care-01",
    name: "Royal Crown Hair & Scalp Growth Elixir",
    price: 25_000,
    category: "haircare",
    style: "care",
    shade: "natural",
    tag: "Essential Care",
    description: "Cold-pressed rosemary, chebe, biotin and argan oil blend designed to stimulate follicles, lock in moisture and protect edges.",
    details: [
      "100% Natural cold-pressed botanicals",
      "Soothes protective styles and wig wearers' scalp",
      "Non-greasy, fast-absorbing weightless formulation",
      "Promotes edge retention and hair density",
      "Subtle invigorating jasmine and mint aroma"
    ],
    image: "/derbroyal-home-about.jpg",
    imageAlt: "Luxury hair care bottle and botanical formulation",
    rating: 4.9,
    reviewsCount: 88,
    inStock: true,
    createdAt: "2026-01-20",
  },
  {
    id: "derb-service-01",
    name: "Manicure & Pedicure",
    price: 25_000,
    category: "nails",
    style: "care",
    shade: "colour",
    tag: "Studio Service",
    description: "A restorative manicure and pedicure with a relaxing soak, detailed nail care, and a polished finish.",
    details: [
      "75-minute private studio treatment",
      "Warm botanical soak with essential oils",
      "Exfoliating glow scrub & collagen foot mask",
      "Over 120+ premium gel colors & custom French finishes",
      "Complimentary champagne or herbal tea"
    ],
    image: "/derbroyal-manicure-pedicure.png",
    imageAlt: "Pink manicure and pedicure spa treatment",
    rating: 5.0,
    reviewsCount: 76,
    inStock: true,
    createdAt: "2026-01-25",
  },
  {
    id: "derb-service-02",
    name: "Hair Installation",
    price: 30_000,
    category: "services",
    style: "waves",
    shade: "natural",
    tag: "VIP Service",
    description: "Professional wig installation with a neat foundation, lace customization, and a polished finish.",
    details: [
      "Flat custom braid down suited for your head shape",
      "Personalized lace knot bleaching and plucking",
      "Thermal styling and baby hair detailing",
      "At-home maintenance consultation with master stylist"
    ],
    image: "/derbroyal-beauty-portrait-1.jpeg",
    imageAlt: "Client with expertly installed wig and salon styling",
    rating: 5.0,
    reviewsCount: 95,
    inStock: true,
    createdAt: "2026-02-02",
  }
];
