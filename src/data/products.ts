/**
 * ============================================================================
 * SILK ROUTE — CENTRALIZED TEXTILE PRODUCT DATA STRUCTURE
 * ============================================================================
 *
 * This file is the SINGLE SOURCE OF TRUTH for all fabrics in the Silk Route catalogue.
 * When you add, edit, or remove products here, changes automatically propagate to:
 *   1. Product Catalogue page with search and multi-parameter filters
 *   2. Home page featured fabric collections
 *   3. Dedicated Product Detail views & modals with multiple real images
 *   4. Technical Specifications tables (fabric type, material, width, GSM, yarn count)
 *   5. Available Colorways swatches
 *   6. Customized MOQ & Wholesale Inquiry modals
 *   7. Direct WhatsApp Inquiry generator in the buyer's active language
 *
 * ----------------------------------------------------------------------------
 * HOW TO ADD YOUR OWN REAL PRODUCTS:
 * ----------------------------------------------------------------------------
 * 1. Upload your product photos:
 *    - In Google AI Studio, upload your image files directly into the "public/products/"
 *      folder (e.g., "public/products/my-fabric-1.jpg").
 *    - In this file, set images to: ["/products/my-fabric-1.jpg", "/products/my-fabric-2.jpg"]
 *    - You can also paste direct external image URLs (e.g. "https://your-domain.com/photo.jpg").
 *
 * 2. Copy the template below and paste it into the FABRIC_PRODUCTS array:
 *
 *    {
 *      id: "my-custom-fabric-sku",
 *      name: "Your Fabric Name",
 *      sku: "SR-CUSTOM-001",
 *      collectionId: "premium-lawn", // premium-lawn | embroidered-fabrics | luxury-fabrics | jacquard-fabrics | seasonal-collections | special-collections
 *      collectionName: "Premium Lawn",
 *      fabricType: "Pure Combed Cotton Lawn",
 *      material: "100% Long-Staple Combed Cotton",
 *      composition: "100% Long-Staple Combed Cotton",
 *      width: "44 / 45 inches (114 cm)",
 *      weightGsm: "75 GSM",
 *      yarnCount: "80s × 80s",
 *      designPattern: "Solid Dyed / Fine Weave",
 *      colors: [
 *        { name: "Warm Ivory", hex: "#F8F5EF" },
 *        { name: "Deep Charcoal", hex: "#252525" }
 *      ],
 *      description: "Detailed wholesale description of the fabric.",
 *      images: [
 *        "/products/my-fabric-1.jpg",
 *        "/products/my-fabric-2.jpg"
 *      ],
 *      availabilityStatus: "Ready Stock", // "Ready Stock" | "Sourcing on Request"
 *      supplyType: "Ready Stock Supply",  // "Ready Stock Supply" | "Order-Based Fabric Sourcing" | "Custom Production Coordination"
 *      moqPolicy: "Customized according to buyer requirements and order specifications.",
 *      manufacturingOptions: [
 *        "Ready Stock Bolt Allocation",
 *        "Custom Lab-Dip Pantone Dyeing",
 *        "Order-Based Batch Weaving",
 *        "Custom Width & Repeat Production"
 *      ],
 *      specifications: {
 *        finish: "Mercerized Soft Handle",
 *        shrinkage: "< 2%",
 *        colorFastness: "Grade 4.5",
 *        suitableFor: "Luxury Pret, Shirting, Tunics",
 *        careInstructions: "Gentle cold cycle or dry clean"
 *      },
 *      sampleAvailability: "A4 Swatch Pack and 1-meter cut swatches available upon courier dispatch."
 *    },
 * ============================================================================
 */

export interface ProductColor {
  name: string;
  hex: string;
}

export interface FabricSpecifications {
  finish: string;
  shrinkage: string;
  colorFastness: string;
  suitableFor: string;
  careInstructions: string;
}

export interface FabricProduct {
  /** Unique URL-friendly identifier for routing (e.g. "sr-lwn-8801" or "pure-cotton-lawn") */
  id: string;
  /** Official textile product name */
  name: string;
  /** Wholesale SKU identifier for trade reference */
  sku: string;
  /** Collection category ID (e.g. "premium-lawn", "embroidered-fabrics", "luxury-fabrics", etc.) */
  collectionId: string;
  /** Human-readable collection title */
  collectionName: string;
  /** Specific fabric classification (e.g. "Pure Combed Cotton Lawn", "Embroidered Sheer Organza") */
  fabricType: string;
  /** Material fiber content (e.g. "100% Long-Staple Combed Cotton") */
  material: string;
  /** Backward-compatible alias for material */
  composition: string;
  /** Usable fabric cut width (e.g. "44 / 45 inches (114 cm)") */
  width: string;
  /** Fabric weight in GSM */
  weightGsm: string;
  /** Yarn count & construction density */
  yarnCount: string;
  /** Weave pattern or surface motif */
  designPattern: string;
  /** Available colorways with display names and hex color codes */
  colors: ProductColor[];
  /** Comprehensive B2B technical & aesthetic description */
  description: string;
  /** Array of multiple real photo URLs/paths (first image is primary cover) */
  images: string[];
  /** Stock availability status */
  availabilityStatus: 'Ready Stock' | 'Sourcing on Request';
  /** Supply & production model */
  supplyType: 'Ready Stock Supply' | 'Order-Based Fabric Sourcing' | 'Custom Production Coordination';
  /** Customized Minimum Order Quantity policy */
  moqPolicy: string;
  /** Specific manufacturing and customization options available for this fabric */
  manufacturingOptions: string[];
  /** Technical quality parameters */
  specifications: FabricSpecifications;
  /** Physical swatch and sampling policy */
  sampleAvailability: string;
}

/**
 * MASTER CATALOGUE DATA
 * Real wholesale textile products with verified specifications.
 */
export const FABRIC_PRODUCTS: FabricProduct[] = [
  {
    id: "sr-lwn-8801",
    name: "Superfine 80s Combed Cotton Lawn",
    sku: "SR-LWN-8801",
    collectionId: "premium-lawn",
    collectionName: "Premium Lawn",
    fabricType: "Pure Combed Cotton Lawn",
    material: "100% Long-Staple Combed Egyptian Cotton",
    composition: "100% Long-Staple Combed Egyptian Cotton",
    width: "44 / 45 inches (114 cm)",
    weightGsm: "72 GSM",
    yarnCount: "80s × 80s / 100 × 90 Air-Jet Woven",
    designPattern: "Micro Botanical Vine & Architectural Linear Border",
    colors: [
      { name: "Warm Ivory", hex: "#F8F5EF" },
      { name: "Soft Almond", hex: "#E8DFD1" },
      { name: "Dusty Sage", hex: "#A8B2A1" },
      { name: "Muted Terracotta", hex: "#C78269" }
    ],
    description: "An exceptional grade of superfine combed cotton lawn engineered for luxury pret, designer tunics, and summer shirting. Woven on precision high-speed air-jet looms to deliver a gossamer yet durable handfeel with sublime drape, high tensile strength, and breathable comfort.",
    images: [
      "/products/cotton-lawn-1.jpg",
      "/products/hero-fabric-1.jpg",
      "/products/printed-satin-1.jpg"
    ],
    availabilityStatus: "Ready Stock",
    supplyType: "Ready Stock Supply",
    moqPolicy: "Customized according to buyer requirements and order specifications. Ready stock roll allocation available; custom dye batches from 300 meters.",
    manufacturingOptions: [
      "Ready Stock Roll Allocation",
      "Custom Lab-Dip Pantone Dyeing",
      "Custom Weave Density & Width",
      "Assorted Colorway Packing",
      "Private Label Roll Tagging"
    ],
    specifications: {
      finish: "Mercerized, Silky Soft Calendered",
      shrinkage: "< 2.5% Warp & Weft (Sanforized)",
      colorFastness: "Grade 4.5 to Washing and Light",
      suitableFor: "Luxury Tunics, Summer Kurtas, Resort Shirting, Layered Dresses",
      careInstructions: "Gentle cold cycle or dry clean. Low iron."
    },
    sampleAvailability: "A4 Swatch Pack and 1-meter cut swatches dispatch within 48 hours."
  },
  {
    id: "sr-emb-9204",
    name: "Antique Zari Embroidered Silk Organza",
    sku: "SR-EMB-9204",
    collectionId: "embroidered-fabrics",
    collectionName: "Embroidered Fabrics",
    fabricType: "Embroidered Pure Sheer Organza",
    material: "Base: 100% Silk-Touch Organza; Thread: Metallic Zari & Viscose Resham",
    composition: "Base: 100% Silk-Touch Organza; Thread: Metallic Zari & Viscose Resham",
    width: "50 inches with 46-inch embroidered work (127 cm)",
    weightGsm: "115 GSM",
    yarnCount: "40D Multi-Filament Crisp Base",
    designPattern: "Intricate Baroque Paisley & Filigree Floral Borders",
    colors: [
      { name: "Deep Charcoal", hex: "#252525" },
      { name: "Antique Gold", hex: "#B69A62" },
      { name: "Champagne Pearl", hex: "#F4EFE6" },
      { name: "Royal Prussian Blue", hex: "#233347" }
    ],
    description: "Ornate embroidery featuring fine antique gold zari complemented by tonal resham thread work and micro-sequin illumination. Ideal for eveningwear overlays, bridal dupattas, festive coordinates, and structured luxury jackets.",
    images: [
      "/products/embroidered-organza-1.jpg",
      "/products/hero-fabric-1.jpg",
      "/products/mulberry-silk-1.jpg"
    ],
    availabilityStatus: "Ready Stock",
    supplyType: "Ready Stock Supply",
    moqPolicy: "Customized according to buyer requirements, design intricacy, and destination. Custom embroidery strike-offs available upon verification.",
    manufacturingOptions: [
      "Ready Stock Supply",
      "Custom Embroidery Motif Alterations",
      "Base Fabric Interchange (Chiffon/Net/Tissue)",
      "Custom Metallic Thread Finishes",
      "Dedicated Yardage Batching"
    ],
    specifications: {
      finish: "High-Definition Embroidery with Zero Thread Loose Edge",
      shrinkage: "Negligible (< 1%)",
      colorFastness: "Grade 5 Metallic Luster Retention",
      suitableFor: "Formal Eveningwear, Dupattas, Luxury Bridal Capes, Festive Kaftans",
      careInstructions: "Specialist dry clean only. Cool iron on reverse."
    },
    sampleAvailability: "Digitally catalogued video previews + physical header swatches available on courier request."
  },
  {
    id: "sr-slk-7711",
    name: "Pure Mulberry Handspun Raw Silk (115 GSM)",
    sku: "SR-SLK-7711",
    collectionId: "luxury-fabrics",
    collectionName: "Luxury Fabrics",
    fabricType: "Pure Raw Silk Weave",
    material: "100% Natural Mulberry Raw Silk",
    composition: "100% Natural Mulberry Raw Silk",
    width: "48 inches (122 cm)",
    weightGsm: "115 GSM",
    yarnCount: "Handspun Mulberry Raw Silk Slub Weft",
    designPattern: "Organic Slubbed Texture with Natural Silk Sheen",
    colors: [
      { name: "Golden Sand", hex: "#D4C19A" },
      { name: "Warm Ivory", hex: "#F8F5EF" },
      { name: "Burnt Copper", hex: "#9E5938" },
      { name: "Muted Forest", hex: "#465545" }
    ],
    description: "Spun from natural mulberry cocoons, this raw silk retains subtle natural slubs and an unmistakable tactile nobility. It drapes with sculptural weight and takes both subtle earth tones and vivid jewel pigments with remarkable saturation.",
    images: [
      "/products/mulberry-silk-1.jpg",
      "/products/hero-fabric-1.jpg",
      "/products/embroidered-organza-1.jpg"
    ],
    availabilityStatus: "Ready Stock",
    supplyType: "Ready Stock Supply",
    moqPolicy: "Customized according to buyer requirements. Greige fabric stocked for custom Pantone lab-dip dyeing and bulk roll supply.",
    manufacturingOptions: [
      "Ready Greige Stock for Custom Dyeing",
      "Custom Lab-Dip Pantone Matching",
      "Heavy-Weight Double Weave Customization",
      "Custom Degummed Finishes",
      "Export Packaging & Roll Yardage"
    ],
    specifications: {
      finish: "Natural Silk Degummed, Soft Semi-Crisp Handle",
      shrinkage: "< 3% on First Immersion",
      colorFastness: "Grade 4 for Reactive Silk Dyes",
      suitableFor: "Trousers, Structured Tailoring, Sherwanis, Architectural Gowns",
      careInstructions: "Dry clean recommended to preserve organic silk luster."
    },
    sampleAvailability: "Sample ring of 18 dyed shades ready for wholesale buyer dispatch."
  },
  {
    id: "sr-jqd-6302",
    name: "Fine Weave Jacquard Cotton Satin",
    sku: "SR-JQD-6302",
    collectionId: "jacquard-fabrics",
    collectionName: "Jacquard Fabrics",
    fabricType: "Woven Jacquard Cotton Fabric",
    material: "100% Combed Mako Cotton Jacquard Weave",
    composition: "100% Combed Mako Cotton Jacquard Weave",
    width: "56 inches (142 cm)",
    weightGsm: "125 GSM",
    yarnCount: "60s × 60s / High Sateen Weave",
    designPattern: "Architectural Geometric Lattice & Terracotta Block Symmetry",
    colors: [
      { name: "Alabaster Beige", hex: "#E8DFD1" },
      { name: "Slate Indigo", hex: "#3A4A5B" },
      { name: "Earthy Ochre", hex: "#B88A44" },
      { name: "Deep Charcoal", hex: "#252525" }
    ],
    description: "A lustrous cotton satin base adorned with contemporary architectural prints inspired by historic Mediterranean and Silk Road tilework. The sateen weave provides a subtle gleam and fluidity that enhances garment movement.",
    images: [
      "/assets/aistudio/jacquard1_a29841a2.jpg",
      "/products/printed-satin-1.jpg",
      "/products/cotton-lawn-1.jpg"
    ],
    availabilityStatus: "Ready Stock",
    supplyType: "Ready Stock Supply",
    moqPolicy: "Customized according to buyer requirements. Ready rolls available; proprietary buyer repeat prints coordinated on order.",
    manufacturingOptions: [
      "Ready Stock Supply",
      "Custom Digital Reactive Printing",
      "Client-Provided Print Repeat Execution",
      "Custom Base Ground Cloth Selection",
      "Continuous Bolt Sourcing"
    ],
    specifications: {
      finish: "Mercerized Reactive Print, Silk-Touch Calender",
      shrinkage: "< 2% Dimensional Stability",
      colorFastness: "Grade 4.5 (Certified OEKO-TEX Standard 100)",
      suitableFor: "Designer Co-ord Sets, Flowing Palazzo Pants, Luxury Shirting, Resort Robes",
      careInstructions: "Machine wash cold inside out. Medium heat iron."
    },
    sampleAvailability: "Continuous print strike-offs and feelers available."
  },
  {
    id: "sr-lwn-8809",
    name: "Pure Bemberg Cupro Chiffon Yardage",
    sku: "SR-LWN-8809",
    collectionId: "premium-lawn",
    collectionName: "Premium Lawn",
    fabricType: "Pure Bemberg Chiffon Unstitched Yardage",
    material: "100% Cupro Bemberg Filament",
    composition: "100% Cupro Bemberg Filament",
    width: "42 inches (107 cm)",
    weightGsm: "48 GSM",
    yarnCount: "Ultra-Fine Filament Twist",
    designPattern: "Featherlight Ombré Gradient with Gilded Accents",
    colors: [
      { name: "Champagne Mist", hex: "#F3EEE7" },
      { name: "Rose Quartz", hex: "#D6AFAB" },
      { name: "Celadon Green", hex: "#BAC9BC" },
      { name: "Muted Gold", hex: "#B69A62" }
    ],
    description: "Designed specifically as coordinates piece for unstitched 3-piece designer sets. Features a weightless cloud drape that flows gracefully with the human silhouette, finished with a subtle glimmer border.",
    images: [
      "/products/hero-fabric-1.jpg",
      "/products/cotton-lawn-1.jpg",
      "/products/mulberry-silk-1.jpg"
    ],
    availabilityStatus: "Ready Stock",
    supplyType: "Ready Stock Supply",
    moqPolicy: "Customized according to buyer requirements. Ready stock available; custom colorway coordinates packaged for boutique collections.",
    manufacturingOptions: [
      "Ready Stock Supply",
      "Custom Colorway Coordination",
      "3-Piece Matching Ensemble Bundling",
      "Custom Width Weaving",
      "Export Tube Packing"
    ],
    specifications: {
      finish: "Soft Crepe Twist, Natural Micro-Pebble Texture",
      shrinkage: "< 1.5%",
      colorFastness: "Grade 4 to Perspiration and Light",
      suitableFor: "Dupattas, Scarves, Outer Sheer Capes, Luxury Sleepwear Trims",
      careInstructions: "Delicate hand wash or gentle professional dry clean."
    },
    sampleAvailability: "Sample swatches dispatch within 2 business days."
  },
  {
    id: "sr-jqd-5540",
    name: "Fil-Coupé Metallic Jacquard Brocade",
    sku: "SR-JQD-5540",
    collectionId: "luxury-fabrics",
    collectionName: "Luxury Fabrics",
    fabricType: "Cut-Yarn Jacquard Brocade",
    material: "70% Viscose, 30% Metallic Fine Yarn",
    composition: "70% Viscose, 30% Metallic Fine Yarn",
    width: "54 inches (137 cm)",
    weightGsm: "165 GSM",
    yarnCount: "Dobby Loom Jacquard Float Weft",
    designPattern: "Subtle Damask Medallion with Raised Texture",
    colors: [
      { name: "Antique Muted Gold", hex: "#B69A62" },
      { name: "Oatmeal Beige", hex: "#E8DFD1" },
      { name: "Deep Charcoal Black", hex: "#252525" },
      { name: "Midnight Navy", hex: "#1D2837" }
    ],
    description: "A masterclass in modern jacquard weaving. The fil-coupé technique creates raised, floating metallic motifs on a dense, supple ground cloth that catches ambient light with understated distinction.",
    images: [
      "/assets/aistudio/jacquard1_a29841a2.jpg",
      "/products/mulberry-silk-1.jpg",
      "/products/embroidered-organza-1.jpg"
    ],
    availabilityStatus: "Sourcing on Request",
    supplyType: "Order-Based Fabric Sourcing",
    moqPolicy: "Customized according to buyer requirements and production schedules. Trial meterage and custom repeat production available.",
    manufacturingOptions: [
      "Order-Based Production",
      "Custom Metallic Thread Blends",
      "Custom Pattern Repeat Scaling",
      "Dedicated Mill Weaving Runs",
      "Custom Weight & Yarn Adjustments"
    ],
    specifications: {
      finish: "Stentered, Pre-Shrunk, Soft Luster Handle",
      shrinkage: "< 1.8%",
      colorFastness: "Grade 4.5 High Dry Cleaning Stability",
      suitableFor: "Statement Coats, Luxury Waistcoats, Formal Skirts, Structured Tunics",
      careInstructions: "Strictly dry clean only to maintain floating cut threads."
    },
    sampleAvailability: "Physical yarn cards and woven quality strike-off swatches available."
  },
  {
    id: "sr-vlv-4210",
    name: "High-Density Micro-Velvet 9000",
    sku: "SR-VLV-4210",
    collectionId: "seasonal-collections",
    collectionName: "Seasonal Collections",
    fabricType: "Plush Micro-Velvet",
    material: "100% Spun Micro-Polyester Velvet with Cotton Backing",
    composition: "100% Spun Micro-Polyester Velvet with Cotton Backing",
    width: "58 inches (147 cm)",
    weightGsm: "280 GSM",
    yarnCount: "Ultra-Dense Cut Pile 9000 Count",
    designPattern: "Rich Saturated Solid Pile with Liquid Sheen",
    colors: [
      { name: "Royal Obsidian", hex: "#252525" },
      { name: "Imperial Emerald", hex: "#224233" },
      { name: "Garnet Wine", hex: "#5C1D2A" },
      { name: "Burnished Gold", hex: "#B69A62" }
    ],
    description: "Engineered specifically for autumn and winter luxury collections. The high-density 9000-grade micro-pile resists crush marks and delivers a buttery, liquid-like drape suited for winter wedding edits and structured couture.",
    images: [
      "/products/embroidered-organza-1.jpg",
      "/products/hero-fabric-1.jpg",
      "/products/mulberry-silk-1.jpg"
    ],
    availabilityStatus: "Ready Stock",
    supplyType: "Ready Stock Supply",
    moqPolicy: "Customized according to buyer requirements. Ready warehouse rolls; seasonal reservation allocations accepted.",
    manufacturingOptions: [
      "Ready Stock Supply",
      "Custom Color Bath Dyeing",
      "Custom Foil & Emboss Stamping",
      "Water-Repellent Treatment",
      "Pre-Cut Length Bundling"
    ],
    specifications: {
      finish: "Anti-Static, Water-Repellent Nano Finishing",
      shrinkage: "< 1%",
      colorFastness: "Grade 5 Pile Color Lock",
      suitableFor: "Winter Kaftans, Embellished Kurti Sets, Trench Outerwear, Evening Capes",
      careInstructions: "Steam pressing on reverse. Professional dry clean."
    },
    sampleAvailability: "Color card with all 16 seasonal shades ready for express air courier."
  },
  {
    id: "sr-spc-1090",
    name: "Handloom Chanderi Silk-Cotton with Tested Zari",
    sku: "SR-SPC-1090",
    collectionId: "special-collections",
    collectionName: "Special Collections",
    fabricType: "Handwoven Silk-Cotton Chanderi",
    material: "60% Mulberry Silk, 40% Fine Pima Cotton with Tested Zari",
    composition: "60% Mulberry Silk, 40% Fine Pima Cotton with Tested Zari",
    width: "45 inches (114 cm)",
    weightGsm: "88 GSM",
    yarnCount: "Silk Warp × 120s Combed Cotton Weft",
    designPattern: "Micro Buti Jacquard with Hand-Tied Zari Borders",
    colors: [
      { name: "Warm Ivory & Gold", hex: "#F8F5EF" },
      { name: "Vintage Champagne", hex: "#E8DFD1" },
      { name: "Muted Antique Bronze", hex: "#977D4A" }
    ],
    description: "A celebration of historic Silk Road handloom artistry. Translucent yet crisp, combining the natural breathability of fine cotton with the regal luster of mulberry silk. Designed for prestigious capsule collections and high-value boutique edits.",
    images: [
      "/assets/aistudio/z.fabric8_2d2cfc52.jpeg",
      "/products/mulberry-silk-1.jpg",
      "/products/hero-fabric-1.jpg"
    ],
    availabilityStatus: "Sourcing on Request",
    supplyType: "Custom Production Coordination",
    moqPolicy: "Customized according to buyer requirements and handloom artisan schedules. Minimum trial batch 200 meters.",
    manufacturingOptions: [
      "Artisan Handloom Weaving",
      "Custom Buti & Border Motifs",
      "Custom Silk-Cotton Ratios",
      "Heritage Capsule Production",
      "Custom Certificate of Authenticity"
    ],
    specifications: {
      finish: "Traditional Artisanal Loom Finish, Hand Washed",
      shrinkage: "< 2%",
      colorFastness: "Grade 4 Traditional Dyeing",
      suitableFor: "Capsule Designer Collections, Luxury Unstitched Suits, Heritage Bridal",
      careInstructions: "Strictly dry clean only."
    },
    sampleAvailability: "Archived sample swatches dispatched upon buyer verification."
  }
];

/**
 * HELPER UTILITIES FOR THE CATALOGUE
 */

/** Look up a fabric product by either its unique ID slug or SKU */
export function getProductByIdOrSku(identifier: string): FabricProduct | undefined {
  const cleanId = identifier.trim().toLowerCase();
  return FABRIC_PRODUCTS.find(
    (p) => p.id.toLowerCase() === cleanId || p.sku.toLowerCase() === cleanId
  );
}

/** Retrieve all products belonging to a given collection */
export function getProductsByCollection(collectionId: string): FabricProduct[] {
  if (!collectionId || collectionId === 'all') return FABRIC_PRODUCTS;
  return FABRIC_PRODUCTS.filter((p) => p.collectionId === collectionId);
}

/** Extract all unique fabric types present in the catalogue */
export function getAllFabricTypes(): string[] {
  return Array.from(new Set(FABRIC_PRODUCTS.map((p) => p.fabricType))).sort();
}
