import { SupportedLanguage } from '../i18n/types';

export interface FabricCollection {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  sampleCount: number;
  featuredFabricTypes: string[];
  keyAttributes: string[];
}

export const FABRIC_COLLECTIONS: FabricCollection[] = [
  {
    id: "premium-lawn",
    name: "Premium Lawn",
    subtitle: "Airy 80s & 100s Egyptian Long-Staple Cotton",
    description: "Finely spun unstitched cotton lawn fabrics celebrated for featherlight breathability, silky smooth drape, and crisp definition. Engineered for discerning boutiques and summer luxury lines.",
    image: "/src/assets/images/collection_premium_lawn_1793894347340.jpg",
    sampleCount: 24,
    featuredFabricTypes: ["Combed Lawn 80s", "Swiss Voile", "Lawn Satin Finish"],
    keyAttributes: ["Ultra-Breathable", "Silky Handfeel", "High Tensile Weave"]
  },
  {
    id: "embroidered-fabrics",
    name: "Embroidered Fabrics",
    subtitle: "Artisanal Zari, Resham & Metallic Threadwork",
    description: "Haute-couture embroidery executed on pure chiffon, organza, and tissue bases. Meticulously spaced paisley jaals, floral borders, and sequin accents created for formal bridal and festive edits.",
    image: "/src/assets/images/collection_embroidered_1793894348247.jpg",
    sampleCount: 32,
    featuredFabricTypes: ["Zari on Pure Chiffon", "Organza Jaal", "Resham Threadwork"],
    keyAttributes: ["Hand & Machine Craft", "Metallic Luster", "Intricate Borders"]
  },
  {
    id: "jacquard-fabrics",
    name: "Jacquard Fabrics",
    subtitle: "Artisanal Woven Jacquards & Textured Brocades",
    description: "Intricately woven self-jacquards, yarn-dyed brocades, and textured motifs woven on high-precision electronic looms. Exceptional dimensional relief, rich handle, and luxurious tactile depth.",
    image: "/assets/aistudio/jacquard1_a29841a2.jpg",
    sampleCount: 28,
    featuredFabricTypes: ["Woven Self-Jacquard", "Yarn-Dyed Brocade", "Dobby Jacquard Weaves"],
    keyAttributes: ["Intricate Woven Relief", "Dimensional Depth", "Loom-Finished Quality"]
  },
  {
    id: "luxury-fabrics",
    name: "Luxury Fabrics",
    subtitle: "Pure Raw Silk, Chanderi, Jacquard & Brocade",
    description: "Exclusive pure mulberry silks, raw silk weaves, and opulent yarn-dyed jacquards. Designed for international eveningwear labels and couture houses seeking distinct texture and majestic fall.",
    image: "/src/assets/images/collection_luxury_silk_1793894349443.jpg",
    sampleCount: 19,
    featuredFabricTypes: ["100% Pure Raw Silk", "Yarn-Dyed Jacquard", "Tissue Banarasi"],
    keyAttributes: ["Natural Shimmer", "Substantial Weight", "Bespoke Dyeing Available"]
  },
  {
    id: "seasonal-collections",
    name: "Seasonal Collections",
    subtitle: "Curated Autumn/Winter & Spring/Summer Edits",
    description: "Time-sensitive fabric drops tailored to global fashion calendars: breezy linen blends and cambric for spring, transitioning into plush micro-velvet, karandi, and wool-cashmere blends for cooler months.",
    image: "/src/assets/images/hero_silk_route_fabric_1793894346720.jpg",
    sampleCount: 16,
    featuredFabricTypes: ["Micro Velvet 9000", "Irish Linen Blend", "Slub Cambric"],
    keyAttributes: ["Seasonally Optimized", "Trend-Aligned Palettes", "Limited Batch Sourcing"]
  },
  {
    id: "special-collections",
    name: "Special Collections",
    subtitle: "Capsule Runs & Custom Buyer Collaborations",
    description: "Architectural textiles, custom jacquards, bespoke coordinated 3-piece unstitched unstitched sets, and archived heirloom weaves developed directly in partnership with brand directors and chief designers.",
    image: "/assets/aistudio/z.fabric8_2d2cfc52.jpeg",
    sampleCount: 12,
    featuredFabricTypes: ["Bespoke Coordinates", "Custom Dobby", "Lurex Organza"],
    keyAttributes: ["Brand Exclusive", "Custom Lab Dips", "Flexible Batch Allocation"]
  }
];

const LOCALIZED_COLLECTIONS: Record<SupportedLanguage, Record<string, Partial<FabricCollection>>> = {
  en: {},
  fr: {
    "premium-lawn": {
      name: "Mousseline de Coton Égyptien",
      subtitle: "Coton Longues Fibres 80s & 100s Aérien",
      description: "Tissus en batiste et mousseline de coton égyptien réputés pour leur respirabilité et leur tombé fluide. Conçus pour les collections estivales et marques de luxe."
    },
    "embroidered-fabrics": {
      name: "Tissus Brodés d'Art",
      subtitle: "Fils Métalliques Zari, Resham & Broderies Fines",
      description: "Broderies haute couture sur bases en mousseline pure et organza soyeux. Motifs cachemire et festons pour tenues de cérémonie et collections festives."
    },
    "jacquard-fabrics": {
      name: "Tissus Jacquard",
      subtitle: "Jacquards Tissés & Brocarts Texturés",
      description: "Jacquards tissés avec précision et brocarts texturés pour collections raffinées et tenues de prestige."
    },
    "printed-fabrics": {
      name: "Tissus Jacquard",
      subtitle: "Jacquards Tissés & Brocarts Texturés",
      description: "Jacquards tissés avec précision et brocarts texturés pour collections raffinées et tenues de prestige."
    },
    "luxury-fabrics": {
      name: "Tissus de Soie & Jacquards",
      subtitle: "Soie Grège de Mûrier, Chanderi & Brocarts",
      description: "Soies naturelles et jacquards tissés-teints haut de gamme pour robes de soirée et créateurs recherchant texture et brillance naturelle."
    },
    "seasonal-collections": {
      name: "Collections Saisonnières",
      subtitle: "Capsules Printemps/Été & Automne/Hiver",
      description: "Sélections de tissus adaptées aux saisons internationales : lins légers pour l'été et velours de microfibre 9000 pour les mois d'hiver."
    },
    "special-collections": {
      name: "Collections Spéciales & Capsules",
      subtitle: "Éditions Limitées & Collaborations Sur Mesure",
      description: "Textiles d'exception et ensembles 3 pièces non confectionnés, développés en étroite collaboration avec les directions artistiques."
    }
  },
  de: {
    "premium-lawn": {
      name: "Premium Baumwoll-Batist",
      subtitle: "Ägyptische Langstapel-Baumwolle 80s & 100s",
      description: "Feinfädige, ungekürzte Baumwoll-Batiste mit seidigem Griff und hervorragender Luftdurchlässigkeit. Für anspruchsvolle Sommerkollektionen."
    },
    "embroidered-fabrics": {
      name: "Bestickte Textilien",
      subtitle: "Handwerkliche Zari-, Resham- & Metallfäden",
      description: "Haute-Couture-Stickereien auf feinem Chiffon und Organza. Kunstvolle Paisleymuster und florale Bordüren für festliche Bekleidung."
    },
    "jacquard-fabrics": {
      name: "Jacquard-Stoffe",
      subtitle: "Gewebte Jacquards & Strukturierte Brokate",
      description: "Aufwendig gewebte Jacquards und garngefärbte Brokate mit plastischer Tiefe und luxuriösem Griff."
    },
    "printed-fabrics": {
      name: "Jacquard-Stoffe",
      subtitle: "Gewebte Jacquards & Strukturierte Brokate",
      description: "Aufwendig gewebte Jacquards und garngefärbte Brokate mit plastischer Tiefe und luxuriösem Griff."
    },
    "luxury-fabrics": {
      name: "Luxus-Seidenstoffe",
      subtitle: "Reine Maulbeerseide, Chanderi & Jacquards",
      description: "Echte Rohseide und garngefärbte Jacquardbrokate für internationale Abendmode und exklusive Couture-Häuser."
    },
    "seasonal-collections": {
      name: "Saisonale Kollektionen",
      subtitle: "Kuratierte Frühjahr/Sommer & Herbst/Winter Edits",
      description: "Textilien abgestimmt auf den internationalen Modekalender: Leichte Leinenstoffe für die warme Jahreszeit und dichter Samt 9000 für den Winter."
    },
    "special-collections": {
      name: "Sonderkollektionen",
      subtitle: "Limitierte Kleinserien & Maßfertigungen",
      description: "Architektonische Weblinien und abgestimmte ungenähte Dreiteiler-Kombinationen für exklusive Modelabels."
    }
  },
  es: {
    "premium-lawn": {
      name: "Algodón Batista Premium",
      subtitle: "Algodón Egipcio de Fibra Larga 80s y 100s",
      description: "Tejidos ligeros y transpirables con caída suave y tacto sedoso. Especialmente confeccionados para boutiques y colecciones estivales de lujo."
    },
    "embroidered-fabrics": {
      name: "Telas Bordadas de Gala",
      subtitle: "Bordados Artesanales Zari e Hilos Metálicos",
      description: "Bordados de alta costura sobre gasa pura y organza. Guardas florales y detalles de lentejuelas para indumentaria formal y nupcial."
    },
    "jacquard-fabrics": {
      name: "Telas Jacquard",
      subtitle: "Jacquards Tejidos y Brocados Texturizados",
      description: "Jacquards finamente elaborados y brocados teñidos en hilo con relieve tridimensional y caída noble."
    },
    "printed-fabrics": {
      name: "Telas Jacquard",
      subtitle: "Jacquards Tejidos y Brocados Texturizados",
      description: "Jacquards finamente elaborados y brocados teñidos en hilo con relieve tridimensional y caída noble."
    },
    "luxury-fabrics": {
      name: "Telas de Seda y Jacquards",
      subtitle: "Seda Salvaje Pura, Chanderi y Brocados",
      description: "Sedas naturales de morera y jacquards teñidos en hilo. Pensadas para vestidos de gala y firmas que exigen caída imponente."
    },
    "seasonal-collections": {
      name: "Colecciones Estacionales",
      subtitle: "Ediciones Primavera/Verano y Otoño/Invierno",
      description: "Lanzamientos adaptados a los ciclos internacionales: linos frescos para verano y microterciopelo 9000 para temporadas frías."
    },
    "special-collections": {
      name: "Colecciones Especiales",
      subtitle: "Tirajes Limitados y Colaboraciones Exclusivas",
      description: "Textiles arquitectónicos y conjuntos de 3 piezas no confeccionados, desarrollados a medida con directores de diseño."
    }
  },
  ar: {
    "premium-lawn": {
      name: "أقمشة اللوان القطنية الفاخرة",
      subtitle: "قطن مصري طويل التيلة نمرة 80 و 100 فائقة النعومة",
      description: "أقمشة لوان قطنية غير مخيطة تمتاز بالانسيابية الفائقة والتهوية الممتازة، مصممة لأرقى خطوط الموضة الصيفية والبوتيكات."
    },
    "embroidered-fabrics": {
      name: "الأقمشة المطرزة الفاخرة",
      subtitle: "تطريز زاري حرفي وخيوط حريرية ولمسات معدنية",
      description: "تطريزات هوت كوتور على قواعد شيفون وأورجانزا ناعمة. حواشي زهرية ونقوش بيزلي متقنة للأزياء الرسمية ومناسبات الأعراس."
    },
    "jacquard-fabrics": {
      name: "أقمشة الجاكار الفاخرة",
      subtitle: "جاكار منسوج بنقوش بارزة وبروكار عالي الدقة",
      description: "أنسجة جاكار محبوكة بدقة متناهية على أنوال إلكترونية متطورة تمتاز ببروز نقوشها ولمستها المترفة."
    },
    "printed-fabrics": {
      name: "أقمشة الجاكار الفاخرة",
      subtitle: "جاكار منسوج بنقوش بارزة وبروكار عالي الدقة",
      description: "أنسجة جاكار محبوكة بدقة متناهية على أنوال إلكترونية متطورة تمتاز ببروز نقوشها ولمستها المترفة."
    },
    "luxury-fabrics": {
      name: "أقمشة الحرير الملكي والجاكار",
      subtitle: "حرير خام طبيعي وتوت بري وتطريزات الشانديري",
      description: "حرير خام نقي بنقوش جاكار منسوجة بخيوط مصبوغة مسبقاً. مخصصة لفساتين السهرة الراقية وتصاميم الأزياء الفاخرة."
    },
    "seasonal-collections": {
      name: "المجموعات الموسمية",
      subtitle: "إصدارات الربيع والصيف والخريف والشتاء",
      description: "تشكيلات مجدولة وفق مواسم الموضة العالمية: كتان صيفي منسدل ومخمل مايكرو 9000 ناعم للأشهر الباردة."
    },
    "special-collections": {
      name: "المجموعات الخاصة والحصرية",
      subtitle: "تشغيلات محدودة وتنسيقات حصرية للمصممين",
      description: "أنسجة استثنائية وأطقم ثلاثية القطع غير مخيطة مصممة بالتعاون المباشر مع مديري دور الأزياء."
    }
  },
  ur: {
    "premium-lawn": {
      name: "پریمیئم مصری لان",
      subtitle: "باریک 80s اور 100s لمبا ریشہ خالص کاٹن",
      description: "باریک بنے ہوئے غیر سلے لان کے کپڑے جو ہوا داری اور ریشمی ملائمت کے لیے جانے جاتے ہیں۔ موسم گرما کے لگژری کلیکشنز کے لیے موزوں۔"
    },
    "embroidered-fabrics": {
      name: "کڑھائی والے نفیس فیبرکس",
      subtitle: "دستکاری زری، ریشم اور دھاتی دھاگے کا کام",
      description: "خالص شیفون اور آرگنزا پر اعلیٰ درجے کی زری اور ریشم کڑھائی۔ بارات اور رسمی تقریبات کے خصوصی لباس کے لیے تیار کردہ۔"
    },
    "jacquard-fabrics": {
      name: "جاکارڈ فیبرکس",
      subtitle: "بنائی والے جاکارڈ اور کسٹم بروکیڈز",
      description: "جدید الیکٹرانک لومز پر تیار کردہ جاکارڈ اور سوت سے رنگے بروکیڈ فیبرکس جو ابھری ہوئی بناوٹ اور پائیداری کے لیے مشہور ہیں۔"
    },
    "printed-fabrics": {
      name: "جاکارڈ فیبرکس",
      subtitle: "بنائی والے جاکارڈ اور کسٹم بروکیڈز",
      description: "جدید الیکٹرانک لومز پر تیار کردہ جاکارڈ اور سوت سے رنگے بروکیڈ فیبرکس جو ابھری ہوئی بناوٹ اور پائیداری کے لیے مشہور ہیں۔"
    },
    "luxury-fabrics": {
      name: "لگژری سلک اور جاکارڈ",
      subtitle: "خالص را سلک، چندیری اور بروکیڈ",
      description: "قدرتی ملبری سلک اور دھاگے سے رنگے جاکارڈ فیبرکس جو باوقار فال اور قدرتی چمک کے لیے بین الاقوامی سطح پر پسند کیے جاتے ہیں۔"
    },
    "seasonal-collections": {
      name: "موسمی کلیکشنز",
      subtitle: "بہار، گرما، خزاں اور سرما کے ایڈیشنز",
      description: "بین الاقوامی فیشن کے مطابق: گرمیوں کے لیے ہلکا پھلکا لینن اور سردیوں کے لیے ملائم مائیکرو ویلوٹ 9000۔"
    },
    "special-collections": {
      name: "خصوصی ایڈیشنز",
      subtitle: "محدود پروڈکشن اور کسٹم پارٹنرشپس",
      description: "مخصوص لوم پر بنے ہوئے فیبرکس اور 3 پیس ان سلا کوآرڈینیٹس جو براہ راست برانڈ ڈائریکٹرز کے اشتراک سے تیار کیے جاتے ہیں۔"
    }
  }
};

export function getLocalizedCollection(col: FabricCollection, lang: SupportedLanguage): FabricCollection {
  if (lang === 'en' || !LOCALIZED_COLLECTIONS[lang] || !LOCALIZED_COLLECTIONS[lang][col.id]) {
    return col;
  }
  const overrides = LOCALIZED_COLLECTIONS[lang][col.id];
  return {
    ...col,
    name: overrides.name || col.name,
    subtitle: overrides.subtitle || col.subtitle,
    description: overrides.description || col.description,
  };
}
