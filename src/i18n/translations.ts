import { SupportedLanguage } from './types';

export interface TranslationDictionary {
  // Brand
  brandName: string;
  brandTagline: string;
  brandPositioning: string;
  globalReach: string;

  // Header & Navigation
  navHome: string;
  navCollections: string;
  navWholesale: string;
  navHowItWorks: string;
  navAbout: string;
  navContact: string;
  searchPlaceholder: string;
  searchButton: string;
  requestCustomQuote: string;
  selectLanguage: string;

  // Hero Section
  heroKicker: string;
  heroHeadlineMain: string;
  heroHeadlineItalic: string;
  heroSupportingText: string;
  ctaExploreCollections: string;
  ctaManufacturingInquiries: string;
  ctaWholesaleInquiries: string;
  ctaContactSilkRoute: string;
  trustMfg: string;
  trustMfgSub: string;
  trustWholesale: string;
  trustWholesaleSub: string;
  trustGlobal: string;
  trustGlobalSub: string;
  floatingBadgeTitle: string;
  floatingBadgeSub: string;

  // Brand Intro & Capabilities
  introKicker: string;
  introHeading: string;
  introP1: string;
  introP2: string;
  introReadyTitle: string;
  introReadyDesc: string;
  introOrderTitle: string;
  introOrderDesc: string;
  introWorldwideTitle: string;
  introWorldwideDesc: string;
  capabilitiesKicker: string;
  capabilitiesHeading: string;
  capabilitiesViewAll: string;

  // Collections Section
  collectionsKicker: string;
  collectionsHeading: string;
  collectionsSub: string;
  browseAllCollections: string;
  designsAvailable: string;
  exploreCollection: string;

  // Featured Products
  productsKicker: string;
  productsHeading: string;
  productsSub: string;
  viewCompleteCatalogue: string;
  viewDetails: string;
  quoteBtn: string;
  readyStockTag: string;
  sourcingRequestTag: string;
  customMoqNotice: string;
  colorwaysCount: string;

  // Catalogue Page
  catalogueKicker: string;
  catalogueHeading: string;
  catalogueSub: string;
  filterCollectionLabel: string;
  filterAllCollections: string;
  filterFabricTypeLabel: string;
  filterAllFabricTypes: string;
  filterAvailabilityLabel: string;
  filterAllAvailability: string;
  filterSearchPlaceholder: string;
  clearSearch: string;
  showingFabricsCount: string;
  resetAllFilters: string;
  noMatchingFabrics: string;
  noMatchingFabricsSub: string;
  customSourcingPromptTitle: string;
  customSourcingPromptDesc: string;
  requestCustomSourcing: string;

  // Product Detail Modal
  fabricSpecsHeading: string;
  technicalParamsTitle: string;
  specFabricType: string;
  specComposition: string;
  specMaterial: string;
  specUsableWidth: string;
  specWeightGsm: string;
  specYarnCount: string;
  specDesignPattern: string;
  specFinishing: string;
  specRecommendedFor: string;
  availableColorways: string;
  samplingTitle: string;
  customMoqTitle: string;
  manufacturingOptionsTitle: string;
  manufacturingOptionsSub: string;
  selectDestinationCountry: string;
  whatsappInquiryBtn: string;
  relatedFabricsTitle: string;
  copyProductLink: string;
  linkCopiedNotice: string;

  // Wholesale & Manufacturing View
  mfgHeroKicker: string;
  mfgHeroHeading: string;
  mfgHeroSub: string;
  customPolicyTitle: string;
  customPolicyDesc: string;
  coreCapsHeading: string;
  coreCapsSub: string;
  tailoredSolutionsHeading: string;
  tailoredSolutionsSub: string;
  keyDeliverablesLabel: string;
  globalNetworkKicker: string;
  globalNetworkHeading: string;
  globalNetworkDesc: string;

  // How We Work View
  howHeroKicker: string;
  howHeroHeading: string;
  howHeroSub: string;
  realityFirstTitle: string;
  realityFirstDesc: string;
  pathwayATitle: string;
  pathwayASub: string;
  pathwayADesc: string;
  pathwayBTitle: string;
  pathwayBSub: string;
  pathwayBDesc: string;
  comparisonTitle: string;
  compParam: string;
  compPathwayA: string;
  compPathwayB: string;
  compMoq: string;
  compMoqA: string;
  compMoqB: string;
  compDesign: string;
  compDesignA: string;
  compDesignB: string;
  compSampling: string;
  compSamplingA: string;
  compSamplingB: string;
  compDelivery: string;
  compDeliveryA: string;
  compDeliveryB: string;
  howActionPrompt: string;
  howActionSub: string;

  // About View
  aboutHeroKicker: string;
  aboutHeroHeading: string;
  aboutHeroSub: string;
  aboutEditorialTag: string;
  aboutPhilosophyKicker: string;
  aboutPhilosophyHeading: string;
  aboutP1: string;
  aboutP2: string;
  aboutPillarMfgTitle: string;
  aboutPillarMfgDesc: string;
  aboutPillarWholesaleTitle: string;
  aboutPillarWholesaleDesc: string;
  aboutFoundationsHeading: string;
  aboutActionHeading: string;
  aboutActionSub: string;

  // Contact View
  contactHeroKicker: string;
  contactHeroHeading: string;
  contactHeroSub: string;
  whatsappDeskTitle: string;
  whatsappDeskSub: string;
  whatsappDeskDesc: string;
  startWhatsappBtn: string;
  directLineLabel: string;
  officialEmailTitle: string;
  emailDesc: string;
  operatingHoursTitle: string;
  intlInquiriesNotice: string;
  intlInquiriesNoticeDesc: string;
  showroomsTitle: string;
  generalMessageTitle: string;
  generalMessageSub: string;
  labelYourName: string;
  labelCompany: string;
  labelBusinessEmail: string;
  labelCountry: string;
  labelSubject: string;
  labelMessage: string;
  sendMessageBtn: string;
  messagePreparedTitle: string;
  messagePreparedDesc: string;
  openInWhatsappBtn: string;
  sendAnotherBtn: string;

  // Quote Form
  quoteFormHeading: string;
  quoteFormSub: string;
  formStep1: string;
  formStep2: string;
  formStep3: string;
  formStep4: string;
  formStep5: string;
  formStep6: string;
  formStep7: string;
  formStep8: string;
  formStep9: string;
  formStep10: string;
  formStep11: string;
  submitQuoteBtn: string;
  quotePreparedTitle: string;
  quotePreparedDesc: string;
  sendToWhatsappDeskBtn: string;
  copyQuoteSummaryBtn: string;
  quoteCopiedNotice: string;
  submitAnotherQuoteBtn: string;
  errNameRequired: string;
  errCompanyRequired: string;
  errEmailRequired: string;
  errEmailInvalid: string;
  errCountryRequired: string;
  errQuantityRequired: string;
  errQuantityNumeric: string;

  // WhatsApp Templates
  whatsappProductInquiry: (params: { productName: string; sku: string; country: string }) => string;
  whatsappGeneralInquiry: (details?: string) => string;

  // Footer & Legal
  footerDesc: string;
  footerCollections: string;
  footerB2BServices: string;
  footerLiaisonDesks: string;
  footerSocial: string;
  footerCopyright: string;
  footerPrivacy: string;
  footerTerms: string;
}

export const TRANSLATIONS: Record<SupportedLanguage, TranslationDictionary> = {
  // ================= ENGLISH =================
  en: {
    brandName: 'Silk Route',
    brandTagline: 'Fabric Manufacturing & Global Wholesale Supply',
    brandPositioning: 'Silk Route — Textile Manufacturer & Global Wholesale Partner',
    globalReach: 'Serving Textile Businesses Worldwide',

    navHome: 'Home',
    navCollections: 'Collections',
    navWholesale: 'Manufacturing & Wholesale',
    navHowItWorks: 'How We Work',
    navAbout: 'About Us',
    navContact: 'Contact',
    searchPlaceholder: 'Search by SKU, fabric name, or composition...',
    searchButton: 'Search',
    requestCustomQuote: 'Request a Custom Quote',
    selectLanguage: 'Language',

    heroKicker: 'Textile Manufacturer & Global Wholesale Partner · Serving Businesses Worldwide',
    heroHeadlineMain: 'Premium Fabric Manufacturing.',
    heroHeadlineItalic: 'Global Wholesale Excellence.',
    heroSupportingText: 'From fabric manufacturing and customized textile production to wholesale supply, Silk Route connects quality fabrics with businesses worldwide.',
    ctaExploreCollections: 'Explore Collections',
    ctaManufacturingInquiries: 'Manufacturing Inquiries',
    ctaWholesaleInquiries: 'Wholesale Inquiries',
    ctaContactSilkRoute: 'Contact Silk Route',
    trustMfg: 'Manufacturing',
    trustMfgSub: 'Custom & Order-Based',
    trustWholesale: 'Wholesale Supply',
    trustWholesaleSub: 'Ready Stock & Bulk Orders',
    trustGlobal: 'Global Reach',
    trustGlobalSub: 'Businesses Worldwide',
    floatingBadgeTitle: 'Serving Textile Businesses Worldwide',
    floatingBadgeSub: 'Customized order management, freight handling & global shipping',

    introKicker: 'Textile Manufacturer & Global Wholesale Partner',
    introHeading: 'Your Global Partner in Fabric Manufacturing & Wholesale Supply',
    introP1: 'From fabric manufacturing and customized textile production to wholesale supply, Silk Route connects quality fabrics with businesses worldwide.',
    introP2: 'We serve clothing brands, boutique owners, fabric wholesalers, and international distributors with verified production capabilities: rapid roll dispatches from our Ready Stock Collections and dedicated Order-Based Production for bespoke weaves, yarn-dyes, and haute-couture embroidery.',
    introReadyTitle: 'Textile Manufacturing',
    introReadyDesc: 'Loom weaving, custom lab dips & pattern repeats.',
    introOrderTitle: 'Wholesale Supply',
    introOrderDesc: 'Ready stock unstitched bolts & bulk order management.',
    introWorldwideTitle: 'Worldwide Delivery',
    introWorldwideDesc: 'Serving textile businesses worldwide with air & sea cargo.',
    capabilitiesKicker: 'Verified Business Capabilities',
    capabilitiesHeading: 'Manufacturing & Wholesale Services',
    capabilitiesViewAll: 'View All Capabilities & Solutions',

    collectionsKicker: 'Curated Wholesale Catalogues',
    collectionsHeading: 'Featured Fabric Collections',
    collectionsSub: 'Explore our six foundational textile disciplines, developed for commercial apparel brands and boutique collections.',
    browseAllCollections: 'Browse All 6 Collections',
    designsAvailable: 'Designs Available',
    exploreCollection: 'Explore Collection',

    productsKicker: 'Selected Sourcing Highlights',
    productsHeading: 'Featured Fabric Products',
    productsSub: 'Available for immediate wholesale inquiry and custom manufacturing runs. Technical parameters and custom allocations confirmed upon request.',
    viewCompleteCatalogue: 'View Complete Catalogue',
    viewDetails: 'View Details',
    quoteBtn: 'Quote',
    readyStockTag: 'Ready Stock',
    sourcingRequestTag: 'Sourcing on Request',
    customMoqNotice: 'MOQ: Tailored to order & stock availability',
    colorwaysCount: 'Colorways',

    catalogueKicker: 'International Textile Catalog · Serving Textile Businesses Worldwide',
    catalogueHeading: 'Fabric Collections & Product Catalogue',
    catalogueSub: 'Browse our unstitched luxury cotton lawn, haute-couture zari embroidery, reactive prints, and pure raw silk yardage. Available for ready stock supply and custom fabric manufacturing.',
    filterCollectionLabel: 'Collection',
    filterAllCollections: 'All Collections',
    filterFabricTypeLabel: 'Fabric Type',
    filterAllFabricTypes: 'All Fabric Weaves',
    filterAvailabilityLabel: 'Availability Status',
    filterAllAvailability: 'All Supply Statuses',
    filterSearchPlaceholder: 'Search by fabric name, SKU (e.g. SR-LWN-8801), or composition...',
    clearSearch: 'Clear',
    showingFabricsCount: 'wholesale fabric designs',
    resetAllFilters: 'Reset Filters',
    noMatchingFabrics: 'No Matching Fabrics Found',
    noMatchingFabricsSub: 'We could not find fabric designs matching your exact search criteria. Try clearing your filters or contact our sourcing desk for custom textile manufacturing.',
    customSourcingPromptTitle: 'Seeking a Custom Weave or Proprietary Manufacturing Run?',
    customSourcingPromptDesc: 'If your apparel line requires specific yarn densities, custom lab-dip Pantone shades, or exclusive embroidery motifs not listed above, our custom manufacturing desk coordinates production directly with master mills.',
    requestCustomSourcing: 'Manufacturing Inquiries',

    fabricSpecsHeading: 'Wholesale Fabric Specification',
    technicalParamsTitle: 'Technical Parameters',
    specFabricType: 'Fabric Type',
    specComposition: 'Composition',
    specMaterial: 'Material & Composition',
    specUsableWidth: 'Usable Width',
    specWeightGsm: 'Weight / GSM',
    specYarnCount: 'Yarn Count / Weave',
    specDesignPattern: 'Design Pattern',
    specFinishing: 'Finishing',
    specRecommendedFor: 'Recommended For',
    availableColorways: 'Available Colorways',
    samplingTitle: 'Sampling & Laboratory Dips:',
    customMoqTitle: 'Customized Wholesale MOQ Policy',
    manufacturingOptionsTitle: 'Manufacturing & Customization Options',
    manufacturingOptionsSub: 'Production and customization capabilities available for this textile',
    selectDestinationCountry: 'Select Destination Country / Market:',
    whatsappInquiryBtn: 'WhatsApp Inquiry',
    relatedFabricsTitle: 'Related Fabrics in',
    copyProductLink: 'Share Product Link',
    linkCopiedNotice: 'Direct link copied to clipboard',

    mfgHeroKicker: 'Silk Route Global Operations · Serving Textile Businesses Worldwide',
    mfgHeroHeading: 'Manufacturing & Wholesale Solutions',
    mfgHeroSub: 'Your Global Partner in Fabric Manufacturing & Wholesale Supply. From initial fiber spinning and loom weaving to customized bulk supply and international shipping, we serve textile businesses worldwide with dedicated commercial rigor.',
    customPolicyTitle: 'Customized Order & Manufacturing Policy',
    customPolicyDesc: "Minimum order quantities, manufacturing feasibility, pricing, production lead times and shipping arrangements are customized according to each buyer's requirements. Every inquiry is assessed individually to match your target specifications and destination requirements.",
    coreCapsHeading: 'Fabric Manufacturing & Wholesale Capabilities',
    coreCapsSub: 'Verified business capabilities delivering complete textile solutions for global partners.',
    tailoredSolutionsHeading: 'Tailored Solutions for Global Textile Businesses',
    tailoredSolutionsSub: 'Connecting fabric manufacturing with global business opportunities across retail, wholesale, and fashion production.',
    keyDeliverablesLabel: 'Key Deliverables:',
    globalNetworkKicker: 'Worldwide Business Network',
    globalNetworkHeading: 'Connecting Fabric Manufacturing with Global Business Opportunities',
    globalNetworkDesc: 'We coordinate international air cargo, consolidated sea shipments, and multi-port logistics for buyers worldwide. Every order includes complete commercial invoices, packing declarations, and customs clearance guidance.',

    howHeroKicker: 'Commercial Operating Procedures · Serving Textile Businesses Worldwide',
    howHeroHeading: 'How We Work',
    howHeroSub: 'Your Global Partner in Fabric Manufacturing & Wholesale Supply. Silk Route operates on two transparent supply pathways designed to accommodate immediate boutique restocking as well as custom mill-scale collection manufacturing for partners worldwide.',
    realityFirstTitle: 'Customized Order Assessment & Reality-First Sourcing',
    realityFirstDesc: "Minimum order quantities, manufacturing feasibility, pricing, production lead times and shipping arrangements are customized according to each buyer's requirements. We do not make unsupported claims regarding capacity or delivery; every project is scheduled with verified yarn indices and confirmed freight lines.",
    pathwayATitle: 'Ready Stock Collections & Wholesale Supply',
    pathwayASub: 'Supply Pathway A',
    pathwayADesc: 'Ideal for boutique owners, fabric distributors, and clothing labels seeking established designs with rapid turnaround. Rolls are inspected, packed, and prepared for commercial dispatch from existing inventory reserves to any worldwide destination.',
    pathwayBTitle: 'Textile Manufacturing & Order-Based Production',
    pathwayBSub: 'Supply Pathway B',
    pathwayBDesc: 'Engineered for apparel brands, textile merchants, and fashion designers developing bespoke seasonal capsules, proprietary colorways, customized widths, or exclusive embroidery patterns.',
    comparisonTitle: 'Comparison at a Glance',
    compParam: 'Parameter',
    compPathwayA: 'Pathway A: Ready Stock Supply',
    compPathwayB: 'Pathway B: Order-Based Production',
    compMoq: 'Minimum Order (MOQ)',
    compMoqA: 'Customized to stock allocation and bolt lengths',
    compMoqB: 'Customized to loom capacity and yarn minimums',
    compDesign: 'Design Customization',
    compDesignA: 'From existing catalog and ready patterns',
    compDesignB: 'Custom lab dips, custom weave, proprietary motifs',
    compSampling: 'Sampling & Strike-Offs',
    compSamplingA: 'Feeler header cards and physical swatches',
    compSamplingB: 'Custom laboratory dip strike-offs & pilot weave swatches',
    compDelivery: 'Delivery Scope',
    compDeliveryA: 'Worldwide air express or sea freight',
    compDeliveryB: 'Worldwide scheduled container or air cargo',
    howActionPrompt: 'Ready to Discuss Your Manufacturing or Wholesale Order?',
    howActionSub: 'Our commercial sourcing and production team is ready to review your specifications.',

    aboutHeroKicker: 'Brand Story & Positioning · Serving Textile Businesses Worldwide',
    aboutHeroHeading: 'Connecting Beautiful Fabrics with Global Businesses.',
    aboutHeroSub: 'Silk Route is a textile manufacturer and global wholesale partner. From fabric manufacturing and customized textile production to wholesale supply, Silk Route connects quality fabrics with businesses worldwide.',
    aboutEditorialTag: 'Fabric Manufacturing & Bulk Wholesale Supply',
    aboutPhilosophyKicker: 'Our Business Philosophy',
    aboutPhilosophyHeading: 'Fabric Integrity, Technical Precision & Global Partnership',
    aboutP1: 'Silk Route combines authentic textile craftsmanship with structured B2B supply. We work closely with clothing brands, boutique owners, fabric wholesalers, and international distributors to fulfill both ready stock orders and customized order-based production.',
    aboutP2: "As both a manufacturer and wholesale supplier, our focus is grounded in operational truth: minimum order quantities, manufacturing feasibility, pricing, production lead times and shipping arrangements are customized according to each buyer's requirements. We provide verified technical specifications (GSM, weave, shrinkage factor, and color fastness) without speculative claims.",
    aboutPillarMfgTitle: 'Textile Manufacturing',
    aboutPillarMfgDesc: 'Custom fabric development, loom weaving, and lab dips.',
    aboutPillarWholesaleTitle: 'Wholesale Supply',
    aboutPillarWholesaleDesc: 'Ready stock collections and bulk roll distribution worldwide.',
    aboutFoundationsHeading: 'Core Business Foundations',
    aboutActionHeading: 'Your Global Partner in Fabric Manufacturing & Wholesale Supply.',
    aboutActionSub: 'Whether you require custom loom runs, collection development sampling, or ready stock unstitched fabric bolts, our commercial team is ready to assist.',

    contactHeroKicker: 'Commercial Desk & Inquiries · Serving Textile Businesses Worldwide',
    contactHeroHeading: 'Contact Silk Route',
    contactHeroSub: 'Your Global Partner in Fabric Manufacturing & Wholesale Supply. Connect directly with our international commercial representatives for manufacturing consultations, stock verification, and custom production schedules.',
    whatsappDeskTitle: 'WhatsApp Business Desk',
    whatsappDeskSub: 'Primary Sourcing & Manufacturing Channel',
    whatsappDeskDesc: 'For fastest response on design availability, immediate video previews of fabric drape, and instant quotation estimates, message our verified commercial desk directly.',
    startWhatsappBtn: 'Start WhatsApp Conversation',
    directLineLabel: 'Direct Line:',
    officialEmailTitle: 'Official Commercial Email',
    emailDesc: 'For formal Requests for Proposals (RFPs), corporate supplier questionnaires, and tech pack submissions. Commercial responses typically sent within 24 business hours.',
    operatingHoursTitle: 'Operating Hours',
    intlInquiriesNotice: 'International Inquiries Notice:',
    intlInquiriesNoticeDesc: 'We coordinate across worldwide business time zones to ensure seamless buyer consultation.',
    showroomsTitle: 'Commercial Showrooms & Hubs',
    generalMessageTitle: 'General Trade Message',
    generalMessageSub: 'Send a direct note to our international liaison team regarding distribution, buyer account setup, or general catalog inquiries.',
    labelYourName: 'Your Name *',
    labelCompany: 'Company / Organization *',
    labelBusinessEmail: 'Business Email *',
    labelCountry: 'Country *',
    labelSubject: 'Subject',
    labelMessage: 'Message / Inquiry Details *',
    sendMessageBtn: 'Contact Silk Route',
    messagePreparedTitle: 'Message Prepared for Review',
    messagePreparedDesc: 'Your inquiry has been logged for our commercial sourcing desk. You may also forward this directly to our WhatsApp representative for instant attention.',
    openInWhatsappBtn: 'Open in WhatsApp',
    sendAnotherBtn: 'Send Another Message',

    quoteFormHeading: 'Request a Custom Quote',
    quoteFormSub: "Submit your manufacturing or wholesale fabric requirements. Minimum order quantities, manufacturing feasibility, pricing, production lead times and shipping arrangements are customized according to each buyer's requirements.",
    formStep1: '1. Full Name *',
    formStep2: '2. Company / Brand Name *',
    formStep3: '3. Business Email *',
    formStep4: '4. Destination Country / Territory *',
    formStep5: '5. Business Type *',
    formStep6: '6. Primary Service Required *',
    formStep7: '7. Fabric Category',
    formStep8: '8. Product Reference / SKU (Optional)',
    formStep9: '9. Estimated Order Quantity *',
    formStep10: '10. Supply & Production Type *',
    formStep11: '11. Specifications & Special Requirements',
    submitQuoteBtn: 'Request a Custom Quote',
    quotePreparedTitle: 'Custom Quote Request Prepared',
    quotePreparedDesc: 'Your manufacturing and wholesale specifications have been recorded. You can transmit directly to our WhatsApp Commercial Desk or copy the quotation summary below.',
    sendToWhatsappDeskBtn: 'Send to WhatsApp Commercial Desk',
    copyQuoteSummaryBtn: 'Copy Quote Summary',
    quoteCopiedNotice: 'Summary Copied to Clipboard',
    submitAnotherQuoteBtn: 'Submit Another Quote Request',
    errNameRequired: 'Full Name is required.',
    errCompanyRequired: 'Company / Business Name is required.',
    errEmailRequired: 'Business Email is required.',
    errEmailInvalid: 'Please provide a valid business email address.',
    errCountryRequired: 'Destination country is required.',
    errQuantityRequired: 'Estimated quantity is required.',
    errQuantityNumeric: 'Please enter a valid numeric quantity.',

    whatsappProductInquiry: ({ productName, sku, country }) =>
      `Hello Silk Route, I am interested in your fabric collection.\n\nProduct: ${productName}\nReference: ${sku}\nCountry: ${country}\n\nPlease share wholesale pricing, MOQ, availability and shipping information.`,
    whatsappGeneralInquiry: (details) =>
      `Hello Silk Route,\n\nI am contacting you regarding fabric manufacturing and global wholesale textile supply:\n${details || 'Please share your current catalogue and quotation procedure.'}`,

    footerDesc: 'Supplying fine unstitched fabrics, luxury Egyptian cotton lawn, custom fabric manufacturing, and wholesale bulk supply for fashion businesses worldwide.',
    footerCollections: 'Fabric Collections',
    footerB2BServices: 'B2B Services',
    footerLiaisonDesks: 'Liaison Desks',
    footerSocial: 'Trade Registry & Inquiries',
    footerCopyright: 'Silk Route Textiles. All Rights Reserved. Textile Manufacturer & Global Wholesale Partner.',
    footerPrivacy: 'Privacy Policy',
    footerTerms: 'Wholesale Terms & Conditions',
  },

  // ================= FRENCH =================
  fr: {
    brandName: 'Silk Route',
    brandTagline: 'Fabrication Textile & Approvisionnement en Gros Mondial',
    brandPositioning: 'Silk Route — Fabricant Textile & Partenaire Grossiste International',
    globalReach: 'Au service des entreprises textiles du monde entier',

    navHome: 'Accueil',
    navCollections: 'Collections',
    navWholesale: 'Fabrication & Vente en Gros',
    navHowItWorks: 'Notre Fonctionnement',
    navAbout: 'À Propos',
    navContact: 'Contact',
    searchPlaceholder: 'Rechercher par référence SKU, matière, tissage...',
    searchButton: 'Rechercher',
    requestCustomQuote: 'Demander un Devis Sur Mesure',
    selectLanguage: 'Langue',

    heroKicker: 'Fabricant Textile & Partenaire Grossiste International · Présence Mondiale',
    heroHeadlineMain: 'Fabrication Textile Haut de Gamme.',
    heroHeadlineItalic: 'Excellence Mondiale de la Vente en Gros.',
    heroSupportingText: 'De la fabrication sur mesure et du tissage personnalisé à la fourniture en gros, Silk Route relie des tissus d’exception aux marques et entreprises du monde entier.',
    ctaExploreCollections: 'Découvrir les Collections',
    ctaManufacturingInquiries: 'Demandes de Fabrication',
    ctaWholesaleInquiries: 'Demandes de Gros',
    ctaContactSilkRoute: 'Contacter Silk Route',
    trustMfg: 'Fabrication',
    trustMfgSub: 'Sur Mesure & Métiers Dédiés',
    trustWholesale: 'Approvisionnement en Gros',
    trustWholesaleSub: 'Stock Disponible & Volumes',
    trustGlobal: 'Portée Internationale',
    trustGlobalSub: 'Clients dans le Monde Entier',
    floatingBadgeTitle: 'Au service des entreprises textiles du monde entier',
    floatingBadgeSub: 'Gestion sur mesure des commandes, logistique et expédition mondiale',

    introKicker: 'Fabricant Textile & Partenaire Grossiste International',
    introHeading: 'Votre Partenaire Mondial en Fabrication Textile et Vente en Gros',
    introP1: 'De la fabrication textile et de la production personnalisée à la fourniture en gros, Silk Route fournit des tissus de prestige aux acteurs de la mode à l’échelle internationale.',
    introP2: 'Nous accompagnons les créateurs, marques de confection, boutiques de luxe et grossistes avec des capacités de production certifiées : allocations immédiates sur nos collections en stock disponible et fabrication sur commande pour tissages exclusifs, teintures Pantone et broderies haute couture.',
    introReadyTitle: 'Fabrication Textile',
    introReadyDesc: 'Tissage sur métiers, trempages laboratoire et rapports personnalisés.',
    introOrderTitle: 'Vente en Gros',
    introOrderDesc: 'Rouleaux non coupés en stock et gestion des commandes volumineuses.',
    introWorldwideTitle: 'Expédition Mondiale',
    introWorldwideDesc: 'Livraison maritime et fret aérien vers tous les ports et destinations.',
    capabilitiesKicker: 'Compétences Commerciales & Industrielles',
    capabilitiesHeading: 'Services de Fabrication & Vente en Gros',
    capabilitiesViewAll: 'Voir Toutes les Solutions & Compétences',

    collectionsKicker: 'Catalogues Professionnels',
    collectionsHeading: 'Collections Textiles Présentées',
    collectionsSub: 'Explorez nos six gammes textiles fondamentales, élaborées pour les marques de prêt-à-porter et collections de boutiques.',
    browseAllCollections: 'Consulter les 6 Collections',
    designsAvailable: 'Modèles Disponibles',
    exploreCollection: 'Explorer la Collection',

    productsKicker: 'Sélection d’Échantillons B2B',
    productsHeading: 'Tissus en Vedette',
    productsSub: 'Disponibles pour demandes de gros immédiates ou production industrielle. Spécifications techniques et minimums validés sur demande.',
    viewCompleteCatalogue: 'Voir le Catalogue Complet',
    viewDetails: 'Détails Techniques',
    quoteBtn: 'Devis',
    readyStockTag: 'Stock Disponible',
    sourcingRequestTag: 'Fabrication sur Demande',
    customMoqNotice: 'MOQ : Ajusté selon produit et disponibilité de stock',
    colorwaysCount: 'Coloris',

    catalogueKicker: 'Catalogue Textile International · Au service des professionnels du monde entier',
    catalogueHeading: 'Catalogue des Tissus & Collections',
    catalogueSub: 'Parcourez notre mousseline de coton égyptien, nos broderies zari artisanales, nos satins imprimés réactifs et nos soies brutes.',
    filterCollectionLabel: 'Collection',
    filterAllCollections: 'Toutes les Collections',
    filterFabricTypeLabel: 'Type de Tissu',
    filterAllFabricTypes: 'Tous les Tissages',
    filterAvailabilityLabel: 'Disponibilité',
    filterAllAvailability: 'Tous les Statuts',
    filterSearchPlaceholder: 'Rechercher par nom de tissu, SKU (ex. SR-LWN-8801) ou matière...',
    clearSearch: 'Effacer',
    showingFabricsCount: 'tissus professionnels répertoriés',
    resetAllFilters: 'Réinitialiser',
    noMatchingFabrics: 'Aucun Tissu Trouvé',
    noMatchingFabricsSub: 'Aucune référence ne correspond à votre recherche. Ajustez vos filtres ou sollicitez notre bureau de fabrication sur mesure.',
    customSourcingPromptTitle: 'Vous recherchez un tissage exclusif ou une production dédiée ?',
    customSourcingPromptDesc: 'Si votre marque nécessite des densités spécifiques de fil, des teintes Pantone certifiées ou des broderies exclusives, notre équipe coordonne directement la fabrication avec nos ateliers.',
    requestCustomSourcing: 'Demandes de Fabrication',

    fabricSpecsHeading: 'Spécification Technique du Tissu',
    technicalParamsTitle: 'Paramètres Techniques',
    specFabricType: 'Type de Tissu',
    specComposition: 'Composition',
    specMaterial: 'Matière & Composition',
    specUsableWidth: 'Laize Utile',
    specWeightGsm: 'Poids / GSM',
    specYarnCount: 'Titrages / Tissage',
    specDesignPattern: 'Motif / Dessin',
    specFinishing: 'Apprêt',
    specRecommendedFor: 'Applications Conseillées',
    availableColorways: 'Coloris Disponibles',
    samplingTitle: 'Échantillonnage & Nuanciers :',
    customMoqTitle: 'Politique de Quantités Minimales (MOQ)',
    manufacturingOptionsTitle: 'Options de Fabrication & Personnalisation',
    manufacturingOptionsSub: 'Capacités de production et personnalisation disponibles pour ce textile',
    selectDestinationCountry: 'Sélectionnez le Pays / Port de Destination :',
    whatsappInquiryBtn: 'Contact WhatsApp',
    relatedFabricsTitle: 'Tissus Similaires dans',
    copyProductLink: 'Partager le lien du produit',
    linkCopiedNotice: 'Lien direct copié dans le presse-papiers',

    mfgHeroKicker: 'Opérations Mondiales Silk Route · Partenaire Industriel International',
    mfgHeroHeading: 'Solutions de Fabrication & Vente en Gros',
    mfgHeroSub: 'Votre Partenaire Mondial en Fabrication Textile et Approvisionnement. De la filature initiale et du tissage sur mesure jusqu’à l’expédition par conteneur, nous accompagnons les professionnels avec une rigueur commerciale absolue.',
    customPolicyTitle: 'Politique d’Ordre et de Fabrication sur Mesure',
    customPolicyDesc: 'Les quantités minimales de commande, la faisabilité industrielle, les tarifs, les délais de fabrication et les modalités de transport sont personnalisés selon les exigences de chaque acheteur.',
    coreCapsHeading: 'Capacités Industrielles et Commerciales',
    coreCapsSub: 'Des prestations vérifiées offrant des solutions textiles complètes pour nos partenaires du monde entier.',
    tailoredSolutionsHeading: 'Des Réponses Adaptées aux Acteurs Mondiaux',
    tailoredSolutionsSub: 'Connecter la production textile aux opportunités de développement commercial à l’international.',
    keyDeliverablesLabel: 'Engagements Clés :',
    globalNetworkKicker: 'Réseau Commercial International',
    globalNetworkHeading: 'Allier Fabrication Textile et Croissance Mondiale',
    globalNetworkDesc: 'Nous organisons le fret aérien international, les groupages maritimes et les dédouanements avec documentation certifiée pour les acheteurs du monde entier.',

    howHeroKicker: 'Procédures Commerciales · Partenaire Mondial',
    howHeroHeading: 'Notre Fonctionnement',
    howHeroSub: 'Silk Route fonctionne selon deux circuits clairs : réapprovisionnement express sur stock prêt à l’envoi et fabrication programmée sur mesure à l’échelle industrielle.',
    realityFirstTitle: 'Étude Réaliste & Transparence Industrielle',
    realityFirstDesc: 'Les quantités minimales de commande, la faisabilité de fabrication, la tarification, les délais et le transport sont définis de manière individualisée et transparente selon chaque cahier des charges.',
    pathwayATitle: 'Collections en Stock Disponible & Gros Immédiat',
    pathwayASub: 'Circuit d’Approvisionnement A',
    pathwayADesc: 'Idéal pour les boutiques, marques de prêt-à-porter et distributeurs ayant besoin de modèles existants avec départ rapide.',
    pathwayBTitle: 'Fabrication Textile & Production Dédiée',
    pathwayBSub: 'Circuit d’Approvisionnement B',
    pathwayBDesc: 'Conçu pour les marques élaborant des capsules saisonnières sur mesure, des laizes spécifiques ou des broderies propriétaires.',
    comparisonTitle: 'Comparatif Synthétique',
    compParam: 'Critère',
    compPathwayA: 'Circuit A : Stock Disponible',
    compPathwayB: 'Circuit B : Fabrication sur Mesure',
    compMoq: 'Quantité Minimale (MOQ)',
    compMoqA: 'Adaptée selon rouleaux et lots existants',
    compMoqB: 'Ajustée selon capacités de métier et filature',
    compDesign: 'Personnalisation',
    compDesignA: 'Modèles du catalogue courant',
    compDesignB: 'Teintures Pantone, armures sur mesure, motifs exclusifs',
    compSampling: 'Échantillonnage',
    compSamplingA: 'Cartes d’échantillons et métrages immédiats',
    compSamplingB: 'Essais de laboratoire et tirelles sur métier',
    compDelivery: 'Transport',
    compDeliveryA: 'Fret aérien express ou maritime',
    compDeliveryB: 'Conteneurs programmés ou fret aérien dédié',
    howActionPrompt: 'Vous souhaitez étudier une commande de fabrication ou de gros ?',
    howActionSub: 'Notre bureau technique et commercial est à votre disposition pour analyser votre cahier des charges.',

    aboutHeroKicker: 'Histoire de Marque · Présence Mondiale',
    aboutHeroHeading: 'Relier l’Excellence Textile aux Entreprises du Monde Entier.',
    aboutHeroSub: 'Silk Route est fabricant textile et grossiste international. De la fabrication sur mesure à la distribution en gros, nous apportons des étoffes d’exception aux marques du monde entier.',
    aboutEditorialTag: 'Fabrication Textile & Approvisionnement en Gros',
    aboutPhilosophyKicker: 'Notre Philosophie d’Entreprise',
    aboutPhilosophyHeading: 'Authenticité des Matières, Rigueur Technique & Partenariat Durable',
    aboutP1: 'Silk Route conjugue savoir-faire artisanal et discipline logistique B2B. Nous collaborons avec des créateurs, détaillants et distributeurs pour concrétiser leurs approvisionnements en tissus non confectionnés.',
    aboutP2: 'En tant que fabricant et grossiste, notre engagement repose sur des données vérifiées : fiches techniques précises (grammage GSM, retrait, solidité des teintures) et respect méticuleux des plannings de confection.',
    aboutPillarMfgTitle: 'Fabrication Textile',
    aboutPillarMfgDesc: 'Développement de matières exclusives, tissages fins et trempages couleur.',
    aboutPillarWholesaleTitle: 'Vente en Gros',
    aboutPillarWholesaleDesc: 'Collections disponibles immédiatement et distribution par rouleaux complets.',
    aboutFoundationsHeading: 'Piliers d’Engagement',
    aboutActionHeading: 'Votre Partenaire Mondial en Fabrication Textile et Vente en Gros.',
    aboutActionSub: 'Que vous recherchiez une production personnalisée sur métier ou des pièces unies prêtes au départ, notre équipe commerciale est à votre écoute.',

    contactHeroKicker: 'Bureau Commercial & Relations Clients · International',
    contactHeroHeading: 'Contacter Silk Route',
    contactHeroSub: 'Votre Partenaire Mondial en Fabrication Textile et Vente en Gros. Échangez directement avec nos conseillers commerciaux pour toute étude technique ou tarification.',
    whatsappDeskTitle: 'Bureau WhatsApp Business',
    whatsappDeskSub: 'Canal Prioritaire Fabrication & Vente en Gros',
    whatsappDeskDesc: 'Pour obtenir une confirmation rapide de métrages, visionner les tombés de tissu en vidéo ou recevoir une estimation tarifaire, contactez-nous directement sur WhatsApp.',
    startWhatsappBtn: 'Ouvrir la Discussion WhatsApp',
    directLineLabel: 'Ligne Directe :',
    officialEmailTitle: 'Courriel Professionnel',
    emailDesc: 'Pour vos cahiers des charges formels, appels d’offres et dossiers techniques. Réponse sous 24 heures ouvrées.',
    operatingHoursTitle: 'Horaires d’Ouverture',
    intlInquiriesNotice: 'Coordination Internationale :',
    intlInquiriesNoticeDesc: 'Nous adaptons nos plages horaires pour répondre aux acheteurs de tous les continents.',
    showroomsTitle: 'Bureaux de Liaison & Hubs Logistiques',
    generalMessageTitle: 'Message Commercial Direct',
    generalMessageSub: 'Transmettez directement vos besoins à notre service commercial international.',
    labelYourName: 'Nom et Prénom *',
    labelCompany: 'Entreprise / Marque *',
    labelBusinessEmail: 'E-mail Professionnel *',
    labelCountry: 'Pays de Destination *',
    labelSubject: 'Objet',
    labelMessage: 'Détails de la Demande / Spécifications *',
    sendMessageBtn: 'Contacter Silk Route',
    messagePreparedTitle: 'Demande Enregistrée',
    messagePreparedDesc: 'Votre message a été transmis à notre service commercial. Vous pouvez également nous l’envoyer directement par WhatsApp pour un traitement immédiat.',
    openInWhatsappBtn: 'Transmettre par WhatsApp',
    sendAnotherBtn: 'Envoyer un Autre Message',

    quoteFormHeading: 'Demander un Devis Sur Mesure',
    quoteFormSub: 'Transmettez vos besoins en fabrication textile ou approvisionnement en gros. Les minimums de commande, la faisabilité, les prix, les délais et les modes de livraison sont ajustés sur mesure.',
    formStep1: '1. Nom et Prénom *',
    formStep2: '2. Entreprise / Marque *',
    formStep3: '3. E-mail Professionnel *',
    formStep4: '4. Pays / Territoire de Destination *',
    formStep5: '5. Type d’Activité *',
    formStep6: '6. Prestation Souhaitée *',
    formStep7: '7. Catégorie de Tissu',
    formStep8: '8. Référence Produit / SKU (Facultatif)',
    formStep9: '9. Quantité Estimée *',
    formStep10: '10. Mode d’Approvisionnement *',
    formStep11: '11. Spécifications & Exigences Techniques',
    submitQuoteBtn: 'Demander un Devis Sur Mesure',
    quotePreparedTitle: 'Demande de Devis Préparée',
    quotePreparedDesc: 'Votre dossier a été généré avec succès. Vous pouvez le faire suivre directement à notre bureau WhatsApp ou copier la synthèse ci-dessous.',
    sendToWhatsappDeskBtn: 'Transmettre au Bureau WhatsApp',
    copyQuoteSummaryBtn: 'Copier la Synthèse du Devis',
    quoteCopiedNotice: 'Synthèse copiée dans le presse-papiers',
    submitAnotherQuoteBtn: 'Créer une Nouvelle Demande',
    errNameRequired: 'Le nom complet est obligatoire.',
    errCompanyRequired: 'Le nom de l’entreprise est obligatoire.',
    errEmailRequired: 'L’e-mail professionnel est obligatoire.',
    errEmailInvalid: 'Veuillez saisir une adresse e-mail professionnelle valide.',
    errCountryRequired: 'Le pays de destination est obligatoire.',
    errQuantityRequired: 'La quantité estimée est obligatoire.',
    errQuantityNumeric: 'Veuillez entrer une quantité numérique valide.',

    whatsappProductInquiry: ({ productName, sku, country }) =>
      `Bonjour Silk Route, je suis intéressé(e) par votre collection de tissus.\n\nProduit : ${productName}\nRéférence : ${sku}\nPays : ${country}\n\nMerci de bien vouloir partager vos tarifs de gros, MOQ, disponibilités et délais de livraison.`,
    whatsappGeneralInquiry: (details) =>
      `Bonjour Silk Route,\n\nJe vous contacte concernant vos prestations de fabrication textile et de vente en gros :\n${details || 'Merci de partager votre catalogue actuel et les modalités de devis.'}`,

    footerDesc: 'Fabrication de tissus d’exception, lin et batiste de coton égyptien, productions exclusives et vente en gros pour les maisons de couture du monde entier.',
    footerCollections: 'Collections de Tissus',
    footerB2BServices: 'Prestations B2B',
    footerLiaisonDesks: 'Bureaux de Liaison',
    footerSocial: 'Relations Professionnelles',
    footerCopyright: 'Silk Route Textiles. Tous droits réservés. Fabricant Textile & Partenaire Grossiste International.',
    footerPrivacy: 'Politique de Confidentialité',
    footerTerms: 'Conditions Commerciales de Vente',
  },

  // ================= GERMAN =================
  de: {
    brandName: 'Silk Route',
    brandTagline: 'Stoffherstellung & Weltweiter Großhandel',
    brandPositioning: 'Silk Route — Textilhersteller & Globaler Großhandelspartner',
    globalReach: 'Für Textilunternehmen weltweit',

    navHome: 'Startseite',
    navCollections: 'Kollektionen',
    navWholesale: 'Herstellung & Großhandel',
    navHowItWorks: 'Ablauf & Prozesse',
    navAbout: 'Über Uns',
    navContact: 'Kontakt',
    searchPlaceholder: 'Nach SKU, Stoffart oder Zusammensetzung suchen...',
    searchButton: 'Suchen',
    requestCustomQuote: 'Individuelles Angebot anfordern',
    selectLanguage: 'Sprache',

    heroKicker: 'Textilhersteller & Globaler Großhandelspartner · Weltweite Belieferung',
    heroHeadlineMain: 'Erstklassige Textilherstellung.',
    heroHeadlineItalic: 'Weltweite Großhandels-Exzellenz.',
    heroSupportingText: 'Von der kundenspezifischen Textilfertigung und individuellen Produktion bis zur Großhandelsbelieferung verbindet Silk Route erstklassige Stoffe mit Unternehmen weltweit.',
    ctaExploreCollections: 'Kollektionen Entdecken',
    ctaManufacturingInquiries: 'Produktionsanfragen',
    ctaWholesaleInquiries: 'Großhandelsanfragen',
    ctaContactSilkRoute: 'Silk Route Kontaktieren',
    trustMfg: 'Herstellung',
    trustMfgSub: 'Auftragsfertigung & Weben',
    trustWholesale: 'Großhandelslieferung',
    trustWholesaleSub: 'Lagerbestand & Großaufträge',
    trustGlobal: 'Globale Reichweite',
    trustGlobalSub: 'Unternehmen Weltweit',
    floatingBadgeTitle: 'Für Textilunternehmen weltweit',
    floatingBadgeSub: 'Individuelle Auftragsabwicklung, Frachtabfertigung & weltweiter Versand',

    introKicker: 'Textilhersteller & Globaler Großhandelspartner',
    introHeading: 'Ihr weltweiter Partner für Stoffherstellung und Großhandel',
    introP1: 'Von der industriellen Stofffertigung bis zur Großhandelslieferung verbindet Silk Route Qualitätstextilien mit Modehäusern und Händlern rund um den Globus.',
    introP2: 'Wir beliefern Modemarken, Boutiquen, Textilhändler und Distributoren mit geprüften Produktionskapazitäten: Sofortige Rollenabrufe aus unseren Lagerkollektionen sowie auftragsbezogene Sonderproduktionen für exklusive Bindungen, Pantone-Färbungen und Zari-Stickereien.',
    introReadyTitle: 'Textilherstellung',
    introReadyDesc: 'Webstuhlfertigung, Labor-Farbmuster und Rapportanpassung.',
    introOrderTitle: 'Großhandelslieferung',
    introOrderDesc: 'Ballenware ab Lager und systematische Großauftragsverwaltung.',
    introWorldwideTitle: 'Weltweiter Versand',
    introWorldwideDesc: 'Zuverlässige Luft- und Seefrachtabwicklung zu allen Bestimmungshäfen.',
    capabilitiesKicker: 'Verifizierte Geschäftsfähigkeiten',
    capabilitiesHeading: 'Herstellungs- & Großhandelsleistungen',
    capabilitiesViewAll: 'Alle Kompetenzen & Lösungen anzeigen',

    collectionsKicker: 'Kuratierte Großhandelskataloge',
    collectionsHeading: 'Ausgewählte Stoffkollektionen',
    collectionsSub: 'Entdecken Sie unsere sechs textilen Kernbereiche für Konfektionsmarken und anspruchsvolle Boutiquen.',
    browseAllCollections: 'Alle 6 Kollektionen ansehen',
    designsAvailable: 'Muster Verfügbar',
    exploreCollection: 'Kollektion Öffnen',

    productsKicker: 'Ausgewählte Produkt-Highlights',
    productsHeading: 'Vorgestellte Textilien',
    productsSub: 'Verfügbar für Großhandelsbestellungen und Auftragsfertigung. Technische Spezifikationen und Mindestmengen auf Anfrage.',
    viewCompleteCatalogue: 'Gesamten Katalog ansehen',
    viewDetails: 'Details ansehen',
    quoteBtn: 'Angebot',
    readyStockTag: 'Lagerware',
    sourcingRequestTag: 'Fertigung auf Anfrage',
    customMoqNotice: 'MOQ: Auftragsbezogen & bestandsabhängig',
    colorwaysCount: 'Farbvarianten',

    catalogueKicker: 'Internationaler Textilkatalog · Für Unternehmen weltweit',
    catalogueHeading: 'Stoffkollektionen & Produktkatalog',
    catalogueSub: 'Durchstöbern Sie feinste ägyptische Baumwoll-Batiste, edle Zari-Stickereien, reaktive Drucke und reine Rohseide.',
    filterCollectionLabel: 'Kollektion',
    filterAllCollections: 'Alle Kollektionen',
    filterFabricTypeLabel: 'Gewebeart',
    filterAllFabricTypes: 'Alle Bindungen',
    filterAvailabilityLabel: 'Verfügbarkeit',
    filterAllAvailability: 'Alle Status',
    filterSearchPlaceholder: 'Nach Stoffname, SKU (z.B. SR-LWN-8801) oder Material suchen...',
    clearSearch: 'Zurücksetzen',
    showingFabricsCount: 'Großhandels-Stoffe aufgeführt',
    resetAllFilters: 'Filter zurücksetzen',
    noMatchingFabrics: 'Keine passenden Stoffe gefunden',
    noMatchingFabricsSub: 'Für Ihre Suchkriterien liegen keine Treffer vor. Passen Sie die Filter an oder kontaktieren Sie uns für eine Sonderfertigung.',
    customSourcingPromptTitle: 'Suchen Sie eine exklusive Bindung oder eigene Webserie?',
    customSourcingPromptDesc: 'Wenn Ihre Kollektion spezielle Garndichten, Pantone-Farbtöne oder exklusive Stickereien verlangt, steuert unser Produktionsteam die Fertigung direkt an den Webstühlen.',
    requestCustomSourcing: 'Produktionsanfragen',

    fabricSpecsHeading: 'Technische Stoffspezifikation',
    technicalParamsTitle: 'Technische Parameter',
    specFabricType: 'Stoffart',
    specComposition: 'Zusammensetzung',
    specMaterial: 'Material & Zusammensetzung',
    specUsableWidth: 'Nutzbreite',
    specWeightGsm: 'Flächengewicht / GSM',
    specYarnCount: 'Garndichte / Bindung',
    specDesignPattern: 'Designmuster',
    specFinishing: 'Veredelung / Ausrüstung',
    specRecommendedFor: 'Empfohlen für',
    availableColorways: 'Verfügbare Farbvarianten',
    samplingTitle: 'Musterung & Laborfarbmuster:',
    customMoqTitle: 'Individuelle Mindestbestellmengen (MOQ)',
    manufacturingOptionsTitle: 'Fertigungs- & Anpassungsoptionen',
    manufacturingOptionsSub: 'Produktions- und Anpassungskapazitäten für diesen Stoff',
    selectDestinationCountry: 'Bestimmungsland / Zielhafen auswählen:',
    whatsappInquiryBtn: 'WhatsApp-Anfrage',
    relatedFabricsTitle: 'Ähnliche Textilien in',
    copyProductLink: 'Produktlink teilen',
    linkCopiedNotice: 'Direktlink in die Zwischenablage kopiert',

    mfgHeroKicker: 'Silk Route Globale Operationen · Weltweiter B2B-Partner',
    mfgHeroHeading: 'Herstellungs- & Großhandelslösungen',
    mfgHeroSub: 'Ihr weltweiter Partner für Textilproduktion und Großhandelsversorgung. Vom Spinnen und Weben bis hin zur internationalen Containerlogistik begleiten wir Sie mit maximaler kaufmännischer Präzision.',
    customPolicyTitle: 'Individuelle Auftrags- und Fertigungsrichtlinie',
    customPolicyDesc: 'Mindestbestellmengen, Fertigungsmachbarkeit, Preise, Produktionszeiten und Versandwege werden individuell auf die Anforderungen jedes Einkäufers abgestimmt.',
    coreCapsHeading: 'Textilfertigungs- und Großhandelskapazitäten',
    coreCapsSub: 'Verifizierte Fähigkeiten für vollständige Textillösungen weltweiter Kunden.',
    tailoredSolutionsHeading: 'Lösungen für globale Textilunternehmen',
    tailoredSolutionsSub: 'Verbindung von textiler Fertigung mit weltweiten Handelsmöglichkeiten in Mode und Großvertrieb.',
    keyDeliverablesLabel: 'Leistungsmerkmale:',
    globalNetworkKicker: 'Weltweites Handelsnetzwerk',
    globalNetworkHeading: 'Textilfertigung mit globalen Marktchancen verknüpfen',
    globalNetworkDesc: 'Wir koordinieren internationale Luftfracht, Sammelcontainer und Zollabfertigungen mit beglaubigten Handelsrechnungen für Einkäufer weltweit.',

    howHeroKicker: 'Betriebsabläufe · Internationaler Vertrieb',
    howHeroHeading: 'Wie wir arbeiten',
    howHeroSub: 'Silk Route bietet zwei transparente Beschaffungswege: Schneller Zugriff auf sofort versandbereite Lagerbestände sowie strukturierte Sonderproduktionen auf Industrie-Webstühlen.',
    realityFirstTitle: 'Fundierte Prüfung & Produktionsrealismus',
    realityFirstDesc: 'Mindestbestellmengen, Fertigungsmachbarkeit, Preise, Produktionszeiten und Frachtwege werden vor Auftragsabschluss detailliert und transparent bestätigt.',
    pathwayATitle: 'Lagerkollektionen & Sofortbelieferung',
    pathwayASub: 'Beschaffungsweg A',
    pathwayADesc: 'Ideal für Boutiquen, Modemarken und Textilhändler mit kurzfristigem Bedarf an bewährten Dessins.',
    pathwayBTitle: 'Textilfertigung & Auftragsbezogene Produktion',
    pathwayBSub: 'Beschaffungsweg B',
    pathwayBDesc: 'Konzipiert für Modelabels mit eigenen Farbwelten, Sonderbreiten oder proprietären Stickmustern.',
    comparisonTitle: 'Vergleich auf einen Blick',
    compParam: 'Parameter',
    compPathwayA: 'Weg A: Lagerware',
    compPathwayB: 'Weg B: Sonderfertigung',
    compMoq: 'Mindestmenge (MOQ)',
    compMoqA: 'Abgestimmt auf bestehende Ballenlängen',
    compMoqB: 'Abgestimmt auf Webstuhl- und Färbekapazität',
    compDesign: 'Designanpassung',
    compDesignA: 'Aus dem aktuellen Hauptkatalog',
    compDesignB: 'Eigene Pantone-Laborabzüge & exklusive Muster',
    compSampling: 'Musterfertigung',
    compSamplingA: 'Fühlmuster und Zuschnittkarten sofort verfügbar',
    compSamplingB: 'Laborabzüge und Webproben vor Produktionsstart',
    compDelivery: 'Versandoptionen',
    compDeliveryA: 'Weltweiter Express-Luftversand oder Seefracht',
    compDeliveryB: 'Terminierte Containerfracht oder Direktluftfracht',
    howActionPrompt: 'Möchten Sie eine Produktions- oder Großhandelsanfrage stellen?',
    howActionSub: 'Unser technisches Vertriebsteam prüft Ihre Spezifikationen umgehend.',

    aboutHeroKicker: 'Unternehmensprofil · Weltweit tätig',
    aboutHeroHeading: 'Edle Stoffe für erfolgreiche Unternehmen weltweit.',
    aboutHeroSub: 'Silk Route ist Textilhersteller und internationaler Großhandelspartner. Von der individuellen Fertigung bis zur Großlieferung beliefern wir Unternehmen auf allen Kontinenten.',
    aboutEditorialTag: 'Textilherstellung & Großhandelsbelieferung',
    aboutPhilosophyKicker: 'Unsere Unternehmensphilosophie',
    aboutPhilosophyHeading: 'Stoffqualität, technische Präzision & verlässliche Partnerschaft',
    aboutP1: 'Silk Route verbindet traditionelle Webkunst mit moderner B2B-Logistik. Wir arbeiten eng mit Marken, Händlern und Boutiquen zusammen.',
    aboutP2: 'Als Hersteller und Großhändler stützen wir uns auf Fakten: verbindliche technische Prüfwerte (GSM, Schrumpfung, Farbechtheiten) und transparente Lieferpläne.',
    aboutPillarMfgTitle: 'Textilfertigung',
    aboutPillarMfgDesc: 'Eigene Webprogramme, Labormuster und Spezialgarnbindungen.',
    aboutPillarWholesaleTitle: 'Großhandelsversorgung',
    aboutPillarWholesaleDesc: 'Laufende Lagerkollektionen und Ballenabgaben weltweit.',
    aboutFoundationsHeading: 'Unternehmenssäulen',
    aboutActionHeading: 'Ihr weltweiter Partner für Stoffherstellung und Großhandel.',
    aboutActionSub: 'Gleich ob Webstuhlauftrag oder Sofortversand ab Lager – unser internationales Team unterstützt Sie zuverlässig.',

    contactHeroKicker: 'Handelsbüro & Anfragen · Weltweiter Service',
    contactHeroHeading: 'Silk Route Kontaktieren',
    contactHeroSub: 'Ihr weltweiter Partner für Textilproduktion und Großhandelsversorgung. Kontaktieren Sie unsere Handelsvertreter für Fertigungsberatung und Terminpläne.',
    whatsappDeskTitle: 'WhatsApp Business Desk',
    whatsappDeskSub: 'Direkter Kanal für Einkauf & Fertigung',
    whatsappDeskDesc: 'Für schnellste Klärung von Verfügbarkeiten, Stoffvideos und Richtpreisen schreiben Sie unserem verifizierten Handelsteam.',
    startWhatsappBtn: 'WhatsApp-Gespräch starten',
    directLineLabel: 'Direktrufnummer:',
    officialEmailTitle: 'Offizielle B2B-E-Mail',
    emailDesc: 'Für formelle Ausschreibungen, Lieferantenfragebögen und technische Tech-Packs. Rückmeldung werktags innerhalb von 24 Stunden.',
    operatingHoursTitle: 'Geschäftszeiten',
    intlInquiriesNotice: 'Internationale Zeitfenster:',
    intlInquiriesNoticeDesc: 'Wir decken internationale Zeitzonen ab, um zeitnahe Rückmeldungen sicherzustellen.',
    showroomsTitle: 'Verbindungsbüros & Umschlagzentren',
    generalMessageTitle: 'Direkte Handelsnachricht',
    generalMessageSub: 'Senden Sie Ihre Anfrage direkt an unsere internationale Kundenbetreuung.',
    labelYourName: 'Ihr Name *',
    labelCompany: 'Unternehmen / Marke *',
    labelBusinessEmail: 'Geschäftliche E-Mail *',
    labelCountry: 'Bestimmungsland *',
    labelSubject: 'Betreff',
    labelMessage: 'Nachricht / Spezifikationen *',
    sendMessageBtn: 'Silk Route Kontaktieren',
    messagePreparedTitle: 'Nachricht Erfasst',
    messagePreparedDesc: 'Ihre Anfrage wurde aufgenommen. Sie können diese auch direkt per WhatsApp an unseren Vertriebsdienst weiterleiten.',
    openInWhatsappBtn: 'In WhatsApp öffnen',
    sendAnotherBtn: 'Weitere Nachricht senden',

    quoteFormHeading: 'Individuelles Angebot anfordern',
    quoteFormSub: 'Teilen Sie uns Ihren Bedarf mit. Mindestmengen, Fertigungsmachbarkeit, Preise, Lieferfristen und Versandmodalitäten werden maßgeschneidert bestätigt.',
    formStep1: '1. Vollständiger Name *',
    formStep2: '2. Unternehmen / Marke *',
    formStep3: '3. Geschäftliche E-Mail *',
    formStep4: '4. Bestimmungsland / Region *',
    formStep5: '5. Unternehmenstyp *',
    formStep6: '6. Benötigte Hauptleistung *',
    formStep7: '7. Stoffkategorie',
    formStep8: '8. Produktreferenz / SKU (Optional)',
    formStep9: '9. Geschätzte Bestellmenge *',
    formStep10: '10. Liefer- & Fertigungsart *',
    formStep11: '11. Spezifikationen & Besondere Anforderungen',
    submitQuoteBtn: 'Individuelles Angebot anfordern',
    quotePreparedTitle: 'Angebotsanfrage Erstellt',
    quotePreparedDesc: 'Ihre Vorgaben wurden erfasst. Senden Sie diese direkt per WhatsApp an unser Team oder kopieren Sie die Zusammenfassung.',
    sendToWhatsappDeskBtn: 'Per WhatsApp an Handelsdesk senden',
    copyQuoteSummaryBtn: 'Zusammenfassung kopieren',
    quoteCopiedNotice: 'In die Zwischenablage kopiert',
    submitAnotherQuoteBtn: 'Weitere Anfrage stellen',
    errNameRequired: 'Name ist erforderlich.',
    errCompanyRequired: 'Unternehmensname ist erforderlich.',
    errEmailRequired: 'Geschäftliche E-Mail ist erforderlich.',
    errEmailInvalid: 'Bitte gültige geschäftliche E-Mail angeben.',
    errCountryRequired: 'Bestimmungsland ist erforderlich.',
    errQuantityRequired: 'Bestellmenge ist erforderlich.',
    errQuantityNumeric: 'Bitte eine gültige Zahl eingeben.',

    whatsappProductInquiry: ({ productName, sku, country }) =>
      `Guten Tag Silk Route, ich interessiere mich für Ihre Stoffkollektion.\n\nProdukt: ${productName}\nReferenz: ${sku}\nLand: ${country}\n\nBitte senden Sie mir Großhandelspreise, Mindestbestellmengen (MOQ), Verfügbarkeit und Versandinformationen.`,
    whatsappGeneralInquiry: (details) =>
      `Guten Tag Silk Route,\n\nich kontaktiere Sie bezüglich Stoffherstellung und weltweitem Großhandel:\n${details || 'Bitte senden Sie mir Ihren aktuellen Katalog und die Angebotskonditionen.'}`,

    footerDesc: 'Herstellung exquisiter Stoffe, ägyptischer Baumwoll-Batiste, Zari-Stickereien und weltweiter Großhandelsvertrieb für die internationale Modeindustrie.',
    footerCollections: 'Stoffkollektionen',
    footerB2BServices: 'B2B-Leistungen',
    footerLiaisonDesks: 'Verbindungsbüros',
    footerSocial: 'Handelsnetzwerk',
    footerCopyright: 'Silk Route Textiles. Alle Rechte vorbehalten. Textilhersteller & Globaler Großhandelspartner.',
    footerPrivacy: 'Datenschutzrichtlinie',
    footerTerms: 'Großhandels-Geschäftsbedingungen',
  },

  // ================= SPANISH =================
  es: {
    brandName: 'Silk Route',
    brandTagline: 'Fabricación Textil & Suministro Mayorista Global',
    brandPositioning: 'Silk Route — Fabricante Textil & Socio Mayorista Global',
    globalReach: 'Al servicio de empresas textiles en todo el mundo',

    navHome: 'Inicio',
    navCollections: 'Colecciones',
    navWholesale: 'Fabricación y Mayorista',
    navHowItWorks: 'Cómo Trabajamos',
    navAbout: 'Nosotros',
    navContact: 'Contacto',
    searchPlaceholder: 'Buscar por referencia SKU, tejido, composición...',
    searchButton: 'Buscar',
    requestCustomQuote: 'Solicitar Cotización a Medida',
    selectLanguage: 'Idioma',

    heroKicker: 'Fabricante Textil & Socio Mayorista Global · Cobertura Internacional',
    heroHeadlineMain: 'Fabricación Textil de Primer Nivel.',
    heroHeadlineItalic: 'Excelencia Mayorista Internacional.',
    heroSupportingText: 'Desde la fabricación textil y la producción a medida hasta el suministro mayorista, Silk Route conecta telas de alta calidad con empresas en todo el mundo.',
    ctaExploreCollections: 'Explorar Colecciones',
    ctaManufacturingInquiries: 'Consultas de Fabricación',
    ctaWholesaleInquiries: 'Consultas Mayoristas',
    ctaContactSilkRoute: 'Contactar Silk Route',
    trustMfg: 'Fabricación',
    trustMfgSub: 'Personalizada y por Encargo',
    trustWholesale: 'Suministro Mayorista',
    trustWholesaleSub: 'Stock Disponible y Gran Volumen',
    trustGlobal: 'Alcance Global',
    trustGlobalSub: 'Empresas en Todo el Mundo',
    floatingBadgeTitle: 'Al servicio de empresas textiles en todo el mundo',
    floatingBadgeSub: 'Gestión personalizada de pedidos, aduanas y envíos internacionales',

    introKicker: 'Fabricante Textil & Socio Mayorista Global',
    introHeading: 'Su Socio Global en Fabricación Textil y Venta al por Mayor',
    introP1: 'Desde la fabricación textil especializada y la confección por encargo hasta el suministro al por mayor, Silk Route suministra tejidos de excelencia a marcas de moda de todo el planeta.',
    introP2: 'Atendemos a marcas de indumentaria, boutiques de alta gama, mayoristas y distribuidores con capacidades verificadas: despachos rápidos de nuestras Colecciones en Stock y Producción por Encargo para telares a medida, tonos Pantone y bordados de alta costura.',
    introReadyTitle: 'Fabricación Textil',
    introReadyDesc: 'Tejido en telar, pruebas de laboratorio y repetición de patrones.',
    introOrderTitle: 'Suministro Mayorista',
    introOrderDesc: 'Piezas sin cortar en stock y gestión de órdenes a escala.',
    introWorldwideTitle: 'Envíos a Todo el Mundo',
    introWorldwideDesc: 'Logística aérea y marítima consolidada hacia cualquier puerto.',
    capabilitiesKicker: 'Capacidades Comerciales Verificadas',
    capabilitiesHeading: 'Servicios de Fabricación y Venta Mayorista',
    capabilitiesViewAll: 'Ver Todas las Capacidades y Soluciones',

    collectionsKicker: 'Catálogos Profesionales',
    collectionsHeading: 'Colecciones Textiles Destacadas',
    collectionsSub: 'Conozca nuestras seis disciplinas textiles fundamentales, creadas para marcas de indumentaria comercial y boutiques.',
    browseAllCollections: 'Ver las 6 Colecciones',
    designsAvailable: 'Diseños Disponibles',
    exploreCollection: 'Explorar Colección',

    productsKicker: 'Muestras Destacadas de Suministro',
    productsHeading: 'Tejidos Destacados',
    productsSub: 'Disponibles para pedidos mayoristas inmediatos y fabricación personalizada. Especificaciones técnicas y mínimos confirmados a solicitud.',
    viewCompleteCatalogue: 'Ver Catálogo Completo',
    viewDetails: 'Ver Detalles',
    quoteBtn: 'Cotizar',
    readyStockTag: 'Stock Disponible',
    sourcingRequestTag: 'Fabricación a Solicitud',
    customMoqNotice: 'MOQ: Ajustado según pedido y disponibilidad de stock',
    colorwaysCount: 'Colores',

    catalogueKicker: 'Catálogo Textil Internacional · Al servicio de empresas de todo el mundo',
    catalogueHeading: 'Colecciones de Tejidos y Catálogo',
    catalogueSub: 'Explore nuestro algodón batista egipcio de primera calidad, bordados artesanales zari, satén estampado reactivo y seda natural.',
    filterCollectionLabel: 'Colección',
    filterAllCollections: 'Todas las Colecciones',
    filterFabricTypeLabel: 'Tipo de Tejido',
    filterAllFabricTypes: 'Todos los Tejidos',
    filterAvailabilityLabel: 'Disponibilidad',
    filterAllAvailability: 'Todos los Estados',
    filterSearchPlaceholder: 'Buscar por nombre, SKU (ej. SR-LWN-8801) o composición...',
    clearSearch: 'Limpiar',
    showingFabricsCount: 'tejidos mayoristas listados',
    resetAllFilters: 'Restablecer Filtros',
    noMatchingFabrics: 'No se encontraron tejidos coincidentes',
    noMatchingFabricsSub: 'No encontramos referencias con ese criterio exacto. Modifique los filtros o contáctenos para fabricación a medida.',
    customSourcingPromptTitle: '¿Busca un telar exclusivo o una producción a medida?',
    customSourcingPromptDesc: 'Si su firma de moda requiere hilados específicos, tonos Pantone certificados o bordados propios, nuestro equipo coordina la producción directamente en planta.',
    requestCustomSourcing: 'Consultas de Fabricación',

    fabricSpecsHeading: 'Especificación Técnica del Tejido',
    technicalParamsTitle: 'Parámetros Técnicos',
    specFabricType: 'Tipo de Tejido',
    specComposition: 'Composición',
    specMaterial: 'Material y Composición',
    specUsableWidth: 'Ancho Útil',
    specWeightGsm: 'Gramaje / GSM',
    specYarnCount: 'Hilatura / Tejido',
    specDesignPattern: 'Diseño / Patrón',
    specFinishing: 'Acabado',
    specRecommendedFor: 'Uso Recomendado',
    availableColorways: 'Colores Disponibles',
    samplingTitle: 'Muestrarios y Pruebas de Laboratorio:',
    customMoqTitle: 'Política de Cantidad Mínima (MOQ)',
    manufacturingOptionsTitle: 'Opciones de Fabricación y Personalización',
    manufacturingOptionsSub: 'Capacidades de producción y personalización disponibles para este tejido',
    selectDestinationCountry: 'Seleccione País o Puerto de Destino:',
    whatsappInquiryBtn: 'Consulta por WhatsApp',
    relatedFabricsTitle: 'Tejidos Relacionados en',
    copyProductLink: 'Compartir enlace del producto',
    linkCopiedNotice: 'Enlace directo copiado al portapapeles',

    mfgHeroKicker: 'Operaciones Globales de Silk Route · Socio Mayorista Internacional',
    mfgHeroHeading: 'Soluciones de Fabricación y Venta Mayorista',
    mfgHeroSub: 'Su Socio Global en Fabricación Textil y Venta al por Mayor. Desde el hilado y tejido inicial hasta el despacho internacional, atendemos a empresas en todo el mundo con estricto compromiso comercial.',
    customPolicyTitle: 'Política de Producción y Pedidos a Medida',
    customPolicyDesc: 'Las cantidades mínimas de pedido, viabilidad de producción, precios, tiempos de entrega y métodos de transporte se personalizan conforme a las necesidades de cada comprador.',
    coreCapsHeading: 'Capacidades de Fabricación y Venta Mayorista',
    coreCapsSub: 'Capacidades comerciales verificadas que ofrecen soluciones integrales para socios en todo el mundo.',
    tailoredSolutionsHeading: 'Soluciones a Medida para Negocios Textiles',
    tailoredSolutionsSub: 'Uniendo la manufactura textil con oportunidades de crecimiento global en comercio mayorista y confección.',
    keyDeliverablesLabel: 'Entregables Clave:',
    globalNetworkKicker: 'Red Comercial Global',
    globalNetworkHeading: 'Conectando la Fabricación Textil con Mercados Internacionales',
    globalNetworkDesc: 'Coordinamos transporte aéreo y marítimo consolidado con documentación aduanera oficial y facturación comercial para compradores de todo el mundo.',

    howHeroKicker: 'Procedimientos Comerciales · Atención Internacional',
    howHeroHeading: 'Cómo Trabajamos',
    howHeroSub: 'Silk Route opera bajo dos modelos transparentes: despacho rápido de inventario listo para entrega y manufactura a escala industrial por encargo.',
    realityFirstTitle: 'Evaluación Rigurosa y Compromiso Transparente',
    realityFirstDesc: 'Las cantidades mínimas, la viabilidad de fabricación, las cotizaciones y los plazos de envío se confirman caso por caso con base en datos reales de hilandería y rutas de transporte.',
    pathwayATitle: 'Colecciones en Stock y Suministro Inmediato',
    pathwayASub: 'Modelo de Suministro A',
    pathwayADesc: 'Ideal para boutiques, distribuidores y marcas de confección con necesidad de entregas ágiles sobre diseños catalogados.',
    pathwayBTitle: 'Fabricación Textil y Producción por Encargo',
    pathwayBSub: 'Modelo de Suministro B',
    pathwayBDesc: 'Pensado para firmas de moda que desarrollan colecciones estacionales exclusivas, anchos específicos o bordados protegidos.',
    comparisonTitle: 'Comparativa de Modelos',
    compParam: 'Parámetro',
    compPathwayA: 'Modelo A: Stock Listo',
    compPathwayB: 'Modelo B: Fabricación por Encargo',
    compMoq: 'Pedido Mínimo (MOQ)',
    compMoqA: 'Ajustado a los rollos y piezas en almacén',
    compMoqB: 'Ajustado a capacidad de telar y teñido',
    compDesign: 'Personalización',
    compDesignA: 'Diseños de nuestro catálogo vigente',
    compDesignB: 'Teñidos Pantone, ligamentos a medida y patrones propios',
    compSampling: 'Muestreo',
    compSamplingA: 'Muestrarios de mano y piezas de prueba inmediatas',
    compSamplingB: 'Pruebas de laboratorio y muestras en telar previo al tiraje',
    compDelivery: 'Transporte',
    compDeliveryA: 'Flete aéreo exprés o consolidado marítimo',
    compDeliveryB: 'Contenedor programado o flete aéreo directo',
    howActionPrompt: '¿Listo para cotizar su pedido de manufactura o compra mayorista?',
    howActionSub: 'Nuestro equipo técnico comercial está disponible para evaluar sus requerimientos.',

    aboutHeroKicker: 'Historia y Posicionamiento · Cobertura Mundial',
    aboutHeroHeading: 'Conectando Telas Excepcionales con Empresas Globales.',
    aboutHeroSub: 'Silk Route es fabricante textil y socio mayorista global. Desde la fabricación personalizada hasta el suministro mayorista, conectamos telas de calidad con empresas en todo el mundo.',
    aboutEditorialTag: 'Fabricación Textil y Suministro Mayorista',
    aboutPhilosophyKicker: 'Nuestra Filosofía Comercial',
    aboutPhilosophyHeading: 'Nobleza Textil, Precisión Técnica y Confianza Mutua',
    aboutP1: 'Silk Route une la maestría del tejido artesanal con la disciplina logística del comercio B2B. Acompañamos a diseñadores y mayoristas en el abastecimiento de telas.',
    aboutP2: 'Como fabricante y mayorista, garantizamos especificaciones técnicas verídicas (gramaje GSM, estabilidad dimensional, solidez al lavado) sin falsas promesas.',
    aboutPillarMfgTitle: 'Fabricación Textil',
    aboutPillarMfgDesc: 'Diseño en telar, igualación de color y ligamentos especiales.',
    aboutPillarWholesaleTitle: 'Venta Mayorista',
    aboutPillarWholesaleDesc: 'Colecciones listas para entrega y venta por rollos completos.',
    aboutFoundationsHeading: 'Pilares Operativos',
    aboutActionHeading: 'Su Socio Global en Fabricación Textil y Venta al por Mayor.',
    aboutActionSub: 'Ya sea que necesite un tiraje completo en telar o piezas en stock para envío inmediato, nuestro equipo está a su servicio.',

    contactHeroKicker: 'Oficina Comercial · Envíos Internacionales',
    contactHeroHeading: 'Contactar Silk Route',
    contactHeroSub: 'Su Socio Global en Fabricación Textil y Venta al por Mayor. Comuníquese directamente con nuestros representantes para asesoramiento técnico y presupuestos.',
    whatsappDeskTitle: 'Mesa de WhatsApp Business',
    whatsappDeskSub: 'Canal Preferente de Fabricación y Mayorista',
    whatsappDeskDesc: 'Para conocer disponibilidades al instante, revisar videos de caída de tela o coordinar presupuestos, comuníquese directamente por WhatsApp.',
    startWhatsappBtn: 'Iniciar Conversación en WhatsApp',
    directLineLabel: 'Línea Directa:',
    officialEmailTitle: 'Correo Comercial Oficial',
    emailDesc: 'Para pliegos de compra, cuestionarios de proveedores y fichas técnicas. Respuesta habitual en 24 horas hábiles.',
    operatingHoursTitle: 'Horario de Atención',
    intlInquiriesNotice: 'Atención a Zonas Horarias:',
    intlInquiriesNoticeDesc: 'Sincronizamos nuestros turnos comerciales para responder ágilmente a clientes de todos los continentes.',
    showroomsTitle: 'Oficinas de Enlace y Puntos Logísticos',
    generalMessageTitle: 'Mensaje Comercial Directo',
    generalMessageSub: 'Envíe sus consultas directamente a nuestro equipo de atención internacional.',
    labelYourName: 'Su Nombre *',
    labelCompany: 'Empresa / Organización *',
    labelBusinessEmail: 'Correo Electrónico Comercial *',
    labelCountry: 'País de Destino *',
    labelSubject: 'Asunto',
    labelMessage: 'Detalles del Mensaje / Requisitos *',
    sendMessageBtn: 'Contactar Silk Route',
    messagePreparedTitle: 'Mensaje Registrado',
    messagePreparedDesc: 'Su solicitud ha sido recibida por nuestra mesa comercial. También puede enviarla por WhatsApp para una gestión inmediata.',
    openInWhatsappBtn: 'Abrir en WhatsApp',
    sendAnotherBtn: 'Enviar Otro Mensaje',

    quoteFormHeading: 'Solicitar Cotización a Medida',
    quoteFormSub: 'Indique sus requerimientos de fabricación o compra al por mayor. Las cantidades mínimas, factibilidad, tarifas y opciones de flete se cotizan de forma individualizada.',
    formStep1: '1. Nombre Completo *',
    formStep2: '2. Empresa / Marca *',
    formStep3: '3. Correo Electrónico Comercial *',
    formStep4: '4. País o Territorio de Destino *',
    formStep5: '5. Tipo de Negocio *',
    formStep6: '6. Servicio Principal Requerido *',
    formStep7: '7. Categoría de Tejido',
    formStep8: '8. Referencia de Producto / SKU (Opcional)',
    formStep9: '9. Cantidad Estimada *',
    formStep10: '10. Tipo de Suministro *',
    formStep11: '11. Especificaciones y Requisitos Particulares',
    submitQuoteBtn: 'Solicitar Cotización a Medida',
    quotePreparedTitle: 'Cotización Personalizada Generada',
    quotePreparedDesc: 'Sus especificaciones han sido procesadas. Puede remitirlas directamente a nuestro canal de WhatsApp o copiar el resumen que figura a continuación.',
    sendToWhatsappDeskBtn: 'Enviar a WhatsApp Comercial',
    copyQuoteSummaryBtn: 'Copiar Resumen de Cotización',
    quoteCopiedNotice: 'Resumen copiado al portapapeles',
    submitAnotherQuoteBtn: 'Generar Otra Solicitud',
    errNameRequired: 'El nombre completo es obligatorio.',
    errCompanyRequired: 'El nombre de la empresa es obligatorio.',
    errEmailRequired: 'El correo electrónico comercial es obligatorio.',
    errEmailInvalid: 'Ingrese un correo electrónico corporativo válido.',
    errCountryRequired: 'El país de destino es obligatorio.',
    errQuantityRequired: 'La cantidad estimada es obligatoria.',
    errQuantityNumeric: 'Ingrese una cifra numérica válida.',

    whatsappProductInquiry: ({ productName, sku, country }) =>
      `Hola Silk Route, estoy interesado(a) en su colección de telas.\n\nProducto: ${productName}\nReferencia: ${sku}\nPaís: ${country}\n\nPor favor comparta precios al por mayor, cantidades mínimas (MOQ), disponibilidad e información de envío.`,
    whatsappGeneralInquiry: (details) =>
      `Hola Silk Route,\n\nMe pongo en contacto respecto a la fabricación textil y suministro mayorista internacional:\n${details || 'Por favor comparta su catálogo vigente y condiciones de cotización.'}`,

    footerDesc: 'Fabricación de telas de alta gama, batista de algodón egipcio, bordados artesanales y suministro mayorista para firmas de moda de todo el mundo.',
    footerCollections: 'Colecciones de Telas',
    footerB2BServices: 'Servicios B2B',
    footerLiaisonDesks: 'Oficinas de Enlace',
    footerSocial: 'Canales Comerciales',
    footerCopyright: 'Silk Route Textiles. Todos los derechos reservados. Fabricante Textil y Socio Mayorista Global.',
    footerPrivacy: 'Política de Privacidad',
    footerTerms: 'Términos y Condiciones Comerciales',
  },

  // ================= ARABIC (RTL) =================
  ar: {
    brandName: 'سيلك روت',
    brandTagline: 'تصنيع الأقمشة والتوريد بالجملة عالمياً',
    brandPositioning: 'سيلك روت — مصنّع أقمشة وشريك تجاري عالمي لمبيعات الجملة',
    globalReach: 'خدمة شركات الأقمشة ومصممي الأزياء في جميع أنحاء العالم',

    navHome: 'الرئيسية',
    navCollections: 'المجموعات',
    navWholesale: 'التصنيع وتجارة الجملة',
    navHowItWorks: 'آلية العمل',
    navAbout: 'من نحن',
    navContact: 'اتصل بنا',
    searchPlaceholder: 'البحث برمز المنتج SKU أو نوع القماش أو التركيب...',
    searchButton: 'بحث',
    requestCustomQuote: 'طلب تسعيرة مخصصة',
    selectLanguage: 'اللغة',

    heroKicker: 'مصنّع أقمشة وشريك تجاري عالمي لمبيعات الجملة · توريد دولي شامل',
    heroHeadlineMain: 'تصنيع أقمشة فاخرة.',
    heroHeadlineItalic: 'ريادة عالمية في تجارة الجملة.',
    heroSupportingText: 'من تصنيع الأقمشة الفاخرة والإنتاج المخصص حسب الطلب إلى التوريد بالجملة، تربط سيلك روت أجود المنسوجات بالشركات ومصممي الأزياء في جميع أنحاء العالم.',
    ctaExploreCollections: 'استكشاف المجموعات',
    ctaManufacturingInquiries: 'استفسارات التصنيع',
    ctaWholesaleInquiries: 'استفسارات الجملة',
    ctaContactSilkRoute: 'اتصل بـ سيلك روت',
    trustMfg: 'التصنيع المخصص',
    trustMfgSub: 'أنوال نسيج متطورة وإنتاج حسب الطلب',
    trustWholesale: 'التوريد بالجملة',
    trustWholesaleSub: 'مخزون جاهز وكميات ضخمة',
    trustGlobal: 'شحن عالمي',
    trustGlobalSub: 'لجميع أنحاء العالم',
    floatingBadgeTitle: 'خدمة قطاع المنسوجات حول العالم',
    floatingBadgeSub: 'إدارة طلبات مخصصة وشحن دولي موثوق وتخليص جمركي',

    introKicker: 'مصنّع أقمشة وشريك تجاري عالمي',
    introHeading: 'شريكك العالمي الرائد في تصنيع الأقمشة والتوريد بالجملة',
    introP1: 'من صناعة الأقمشة الفاخرة والإنتاج النسيجي المخصص إلى مبيعات الجملة الدولية، تقدم سيلك روت أرقى المنسوجات لعلامات الأزياء وتجار الأقمشة حول العالم.',
    introP2: 'نلبي احتياجات دور الأزياء، وأصحاب البوتيكات، وموزعي الأقمشة بإمكانيات إنتاجية مؤكدة: شحن فوري من مجموعاتنا الجاهزة، وإنتاج تعاقدي مخصص للأنوال والألوان الحصرية وفق درجات بانتون، وتطريزات الزاري اليدوية الفاخرة.',
    introReadyTitle: 'تصنيع المنسوجات',
    introReadyDesc: 'نسيج آلي وأنوال متطورة، وعينات مخبرية واختبارات ثبات الألوان.',
    introOrderTitle: 'توريد الجملة',
    introOrderDesc: 'أثواب وأطواق قماش غير مخيطة وجاهزة للشحن الفوري.',
    introWorldwideTitle: 'شحن لكافة الموانئ',
    introWorldwideDesc: 'شحن جوي وبحري دولي منتظم إلى جميع الوجهات العالمية.',
    capabilitiesKicker: 'قدرات إنتاجية وتجارية موثوقة',
    capabilitiesHeading: 'خدمات التصنيع والتوريد بالجملة',
    capabilitiesViewAll: 'عرض جميع القدرات والحلول',

    collectionsKicker: 'كتالوجات الأقمشة الفاخرة',
    collectionsHeading: 'مجموعات الأقمشة المتميزة',
    collectionsSub: 'تعرف على فئاتنا النسيجية الست المتخصصة، المصممة خصيصاً للعلامات التجارية والبوتيكات الراقية.',
    browseAllCollections: 'تصفح المجموعات الست',
    designsAvailable: 'تصاميم متوفرة',
    exploreCollection: 'استكشف المجموعة',

    productsKicker: 'نماذج منتقاة من الإنتاج',
    productsHeading: 'أقمشة مختارة',
    productsSub: 'جاهزة للطلبات التجارية الفورية أو خطوط التصنيع المخصصة. المواصفات والحد الأدنى متاحان عند الطلب.',
    viewCompleteCatalogue: 'عرض الكتالوج الكامل',
    viewDetails: 'التفاصيل الفنية',
    quoteBtn: 'تسعير',
    readyStockTag: 'مخزون جاهز',
    sourcingRequestTag: 'تصنيع حسب الطلب',
    customMoqNotice: 'الحد الأدنى للطلب (MOQ): مخصص وفق الطلب وتوفر المخزون',
    colorwaysCount: 'ألوان متوفرة',

    catalogueKicker: 'كتالوج الأقمشة الدولي · توريد عالمي للشركات',
    catalogueHeading: 'مجموعات الأقمشة والكتالوج الشامل',
    catalogueSub: 'تصفح أقمشة اللوان القطنية المصرية فائقة النعومة، وتطريزات الزاري الحصرية، وأقمشة الساتان المطبوعة، والحرير الخام الطبيعي.',
    filterCollectionLabel: 'المجموعة',
    filterAllCollections: 'جميع المجموعات',
    filterFabricTypeLabel: 'نوع النسيج',
    filterAllFabricTypes: 'كافة أنواع النسيج',
    filterAvailabilityLabel: 'حالة التوفر',
    filterAllAvailability: 'كافة الحالات',
    filterSearchPlaceholder: 'ابحث باسم القماش أو الرمز SKU (مثل SR-LWN-8801) أو التركيب...',
    clearSearch: 'مسح',
    showingFabricsCount: 'قماش بالجملة مسجل',
    resetAllFilters: 'إعادة ضبط الفلاتر',
    noMatchingFabrics: 'لم يتم العثور على أقمشة مطابقة',
    noMatchingFabricsSub: 'لا توجد أقمشة تطابق معايير البحث الحالية. يمكنك تعديل خيارات الفلترة أو التواصل مع مكتب التصنيع المخصص لدينا.',
    customSourcingPromptTitle: 'هل تبحث عن نسيج حصري أو تشغيل مخصص للأنوال؟',
    customSourcingPromptDesc: 'إذا كانت تشكيلتك القادمة تتطلب كثافة خيوط معينة، أو درجات صبغة محددة وفق بانتون، أو نقوش تطريز ملكية، يقوم فريقنا بتنسيق الإنتاج مباشرة على خطوط النسيج.',
    requestCustomSourcing: 'استفسارات التصنيع',

    fabricSpecsHeading: 'المواصفات الفنية المعتمدة للأقمشة',
    technicalParamsTitle: 'المعايير التقنية',
    specFabricType: 'نوع القماش',
    specComposition: 'التركيب النسيجي',
    specMaterial: 'المادة والتركيب النسيجي',
    specUsableWidth: 'العرض الصافي',
    specWeightGsm: 'الوزن / جرام لكل متر مربع',
    specYarnCount: 'نمرة الخيط / الحياكة',
    specDesignPattern: 'النقش والتصميم',
    specFinishing: 'نوع المعالجة والإنهاء',
    specRecommendedFor: 'الاستخدامات المقترحة',
    availableColorways: 'الألوان المتاحة',
    samplingTitle: 'عينات واختبارات الصبغة:',
    customMoqTitle: 'سياسة الحد الأدنى لكمية الطلب (MOQ)',
    manufacturingOptionsTitle: 'خيارات التصنيع والتخصيص',
    manufacturingOptionsSub: 'قدرات الإنتاج والتخصيص المتاحة لهذا القماش',
    selectDestinationCountry: 'حدد دولة أو ميناء الوصول:',
    whatsappInquiryBtn: 'استفسار عبر واتساب',
    relatedFabricsTitle: 'أقمشة مشابهة في',
    copyProductLink: 'مشاركة رابط المنتج',
    linkCopiedNotice: 'تم نسخ الرابط المباشر إلى الحافظة',

    mfgHeroKicker: 'عمليات سيلك روت الدولية · شريكك الصناعي المعتمد',
    mfgHeroHeading: 'حلول التصنيع وتجارة الجملة',
    mfgHeroSub: 'شريكك العالمي في تصنيع المنسوجات وتجارة الجملة. من الغزل والحياكة الأولى وحتى الشحن البحري والجوي المنتظم، نخدم عملاءنا في كل بقاع الأرض باحترافية تجارية دقيقة.',
    customPolicyTitle: 'سياسة الطلبات والإنتاج المخصص',
    customPolicyDesc: 'يتم تحديد الحد الأدنى للكميات، والجدوى الإنتاجية، والأسعار، وجداول التسليم، وخيارات الشحن بشكل مخصص وفق متطلبات كل مشتري.',
    coreCapsHeading: 'قدرات التصنيع والتوريد بالجملة',
    coreCapsSub: 'إمكانيات مثبتة تقدم حلولاً نسيجية متكاملة لشركائنا حول العالم.',
    tailoredSolutionsHeading: 'حلول مفصلة لشركات المنسوجات والأزياء العالمية',
    tailoredSolutionsSub: 'ربط التصنيع النسيجي بالفرص التجارية وتوسعات الأسواق عالمياً.',
    keyDeliverablesLabel: 'أبرز المزايا والخدمات:',
    globalNetworkKicker: 'شبكة تجارية عالمية',
    globalNetworkHeading: 'ربط مصانع النسيج بالفرص التجارية العالمية',
    globalNetworkDesc: 'نقوم بتنسيق الشحن الجوي والبحري مع كافة المستندات الجمركية المعتمدة والفواتير التجارية لعملائنا في جميع قارات العالم.',

    howHeroKicker: 'خطوات العمل التجارية · خدمة دولية',
    howHeroHeading: 'آلية عملنا',
    howHeroSub: 'تعمل سيلك روت وفق مسارين واضحين: التوريد السريع من المخزون الجاهز للشحن الفوري، أو التصنيع الصناعي التعاقدي على الأنوال للتشكيلات الحصرية.',
    realityFirstTitle: 'تقييم واقعي وشفافية في التنفيذ',
    realityFirstDesc: 'نحدد الحدود الدنيا للكميات والجدوى الفنية والتسعير والمهل الزمنية بشفافية تامة ومبنية على أسعار الخيوط المعتمدة وجداول الشحن الفعلية.',
    pathwayATitle: 'مجموعات المخزون الجاهز والتوريد السريع',
    pathwayASub: 'مسار التوريد الأول (أ)',
    pathwayADesc: 'مثالي للبوتيكات وتجار التجزئة الراغبين في استلام تصاميم معتمدة في وقت قياسي وبجودة فاخرة.',
    pathwayBTitle: 'تصنيع الأقمشة والإنتاج التعاقدي المخصص',
    pathwayBSub: 'مسار التوريد الثاني (ب)',
    pathwayBDesc: 'مصمم لمصممي ودور الأزياء التي تطور مجموعات حصرية وتتطلب ألواناً وأوزاناً وتطريزات خاصة.',
    comparisonTitle: 'مقارنة سريعة بين المسارين',
    compParam: 'المعيار',
    compPathwayA: 'المسار (أ): المخزون الجاهز',
    compPathwayB: 'المسار (ب): التصنيع التعاقدي',
    compMoq: 'الحد الأدنى للطلب (MOQ)',
    compMoqA: 'محدد بناءً على مقاسات الأثواب المتوفرة',
    compMoqB: 'محدد بناءً على طاقة الأنوال وكميات الصبغة',
    compDesign: 'التخصيص',
    compDesignA: 'من نقوش وتصاميم الكتالوج الحالي',
    compDesignB: 'صبغات بانتون مخصصة وتطريزات خاصة',
    compSampling: 'العينات',
    compSamplingA: 'عينات ملموسة وكتالوجات مصغرة فورية',
    compSamplingB: 'عينات تجريبية من النول قبل الإنتاج الموسع',
    compDelivery: 'الشحن',
    compDeliveryA: 'شحن جوي سريع أو بحري مجمع',
    compDeliveryB: 'حاويات بحرية مجدولة أو شحن جوي مخصص',
    howActionPrompt: 'هل أنت جاهز لمناقشة طلب التصنيع أو الشراء بالجملة؟',
    howActionSub: 'فريقنا التجاري والفني جاهز لتقييم مواصفاتك ومتطلباتك بدقة.',

    aboutHeroKicker: 'قصة العلامة وتاريخها · حضور دولي',
    aboutHeroHeading: 'ربط أجود الأقمشة بالشركات العالمية.',
    aboutHeroSub: 'سيلك روت هي مصنع أقمشة وشريك تجاري عالمي لمبيعات الجملة. من الإنتاج النسيجي المخصص إلى مبيعات الجملة، نوفر أقمشة راقية لشركائنا في كل مكان.',
    aboutEditorialTag: 'تصنيع الأقمشة والتوريد بالجملة',
    aboutPhilosophyKicker: 'فلسفتنا التجارية',
    aboutPhilosophyHeading: 'أصالة المنسوجات، الدقة التقنية، والشراكة طويلة الأمد',
    aboutP1: 'تجمع سيلك روت بين عراقة الحياكة النسيجية والدقة اللوجستية الحديثة. نعمل مع كبرى العلامات لتأمين احتياجاتها من الأقمشة غير المخيطة.',
    aboutP2: 'كمصنع ومورد جملة، نعتمد على الحقائق الفنية الثابتة: اختبارات الانكماش، وثبات الألوان، والالتزام الصارم بمواعيد تسليم مواسم الأزياء.',
    aboutPillarMfgTitle: 'تصنيع المنسوجات',
    aboutPillarMfgDesc: 'تصميم أنسجة مبتكرة وصبغات معتمدة ونقوش مخصصة.',
    aboutPillarWholesaleTitle: 'مبيعات الجملة',
    aboutPillarWholesaleDesc: 'مجموعات جاهزة وتوزيع بأثواب كاملة لجميع الأسواق.',
    aboutFoundationsHeading: 'ركائز العمل الأساسية',
    aboutActionHeading: 'شريكك العالمي في تصنيع الأقمشة والتوريد بالجملة.',
    aboutActionSub: 'سواء كنت بحاجة لإنتاج كميات ضخمة على الأنوال أو استلام أقمشة جاهزة، فريقنا رهن إشارتك.',

    contactHeroKicker: 'المكتب التجاري · تواصل مباشر',
    contactHeroHeading: 'اتصل بـ سيلك روت',
    contactHeroSub: 'شريكك العالمي في تصنيع الأقمشة والتوريد بالجملة. تواصل مباشرة مع خبرائنا التجاريين للاستفسار عن الإنتاج والأسعار وجداول التسليم.',
    whatsappDeskTitle: 'مكتب واتساب للأعمال',
    whatsappDeskSub: 'القناة الأسرع لطلبات التصنيع والجملة',
    whatsappDeskDesc: 'للحصول على استجابة سريعة، ومعاينة مقاطع فيديو لانسدال الأقمشة وتلقي عروض الأسعار، تحدث مع مستشارنا التجاري.',
    startWhatsappBtn: 'بدء المحادثة عبر واتساب',
    directLineLabel: 'الخط المباشر:',
    officialEmailTitle: 'البريد الإلكتروني التجاري',
    emailDesc: 'لإرسال مناقصات الشراء، واستبيانات الموردين، وملفات المواصفات الفنية. الرد خلال 24 ساعة عمل.',
    operatingHoursTitle: 'ساعات العمل الرسمية',
    intlInquiriesNotice: 'مراعاة فروق التوقيت:',
    intlInquiriesNoticeDesc: 'نعمل وفق نظام يراعي مختلف المناطق الزمنية لضمان سرعة الرد.',
    showroomsTitle: 'مكاتب التنسيق والمراكز اللوجستية',
    generalMessageTitle: 'رسالة تجارية مباشرة',
    generalMessageSub: 'أرسل استفسارك مباشرة إلى فريق خدمة العملاء التجاريين.',
    labelYourName: 'الاسم الكريم *',
    labelCompany: 'اسم الشركة / العلامة التجارية *',
    labelBusinessEmail: 'البريد الإلكتروني للعمل *',
    labelCountry: 'دولة الوجهة *',
    labelSubject: 'الموضوع',
    labelMessage: 'تفاصيل الاستفسار والمواصفات *',
    sendMessageBtn: 'إرسال الرسالة إلى سيلك روت',
    messagePreparedTitle: 'تم إعداد الرسالة بنجاح',
    messagePreparedDesc: 'تم تسجيل استفسارك التجاري. يمكنك أيضاً توجيهه مباشرة إلى موظف المبيعات عبر واتساب لسرعة الرد.',
    openInWhatsappBtn: 'فتح في واتساب',
    sendAnotherBtn: 'إرسال رسالة أخرى',

    quoteFormHeading: 'طلب تسعيرة مخصصة',
    quoteFormSub: 'يرجى تقديم مواصفات التصنيع أو طلبات الشراء بالجملة. يتم تحديد الحد الأدنى للكميات والأسعار وجداول الشحن بشكل مخصص لكل عميل.',
    formStep1: '1. الاسم الكامل *',
    formStep2: '2. اسم الشركة أو العلامة *',
    formStep3: '3. بريد العمل الإلكتروني *',
    formStep4: '4. دولة أو منطقة الوجهة *',
    formStep5: '5. طبيعة النشاط التجاري *',
    formStep6: '6. الخدمة الرئيسية المطلوبة *',
    formStep7: '7. فئة القماش المطلوبة',
    formStep8: '8. رمز المنتج SKU (اختياري)',
    formStep9: '9. الكمية التقديرية *',
    formStep10: '10. نوع التوريد والإنتاج *',
    formStep11: '11. المواصفات والمتطلبات الخاصة',
    submitQuoteBtn: 'طلب تسعيرة مخصصة',
    quotePreparedTitle: 'تم تجهيز طلب التسعيرة',
    quotePreparedDesc: 'تم تدوين كافة تفاصيل طلبك بنجاح. يمكنك إرساله مباشرة إلى مكتب واتساب التجاري أو نسخ الملخص أدناه.',
    sendToWhatsappDeskBtn: 'إرسال عبر واتساب للمكتب التجاري',
    copyQuoteSummaryBtn: 'نسخ ملخص التسعيرة',
    quoteCopiedNotice: 'تم نسخ الملخص إلى الحافظة',
    submitAnotherQuoteBtn: 'تقديم طلب تسعيرة جديد',
    errNameRequired: 'الاسم الكامل مطلوب.',
    errCompanyRequired: 'اسم الشركة أو العلامة التجارية مطلوب.',
    errEmailRequired: 'بريد العمل الإلكتروني مطلوب.',
    errEmailInvalid: 'يرجى إدخال عنوان بريد إلكتروني صالح.',
    errCountryRequired: 'دولة الوجهة مطلوبة.',
    errQuantityRequired: 'الكمية التقديرية مطلوبة.',
    errQuantityNumeric: 'يرجى إدخال قيمة عددية صحيحة.',

    whatsappProductInquiry: ({ productName, sku, country }) =>
      `مرحباً سيلك روت، أنا مهتم بمجموعتكم من الأقمشة الفاخرة.\n\nالمنتج: ${productName}\nالمرجع: ${sku}\nالبلد: ${country}\n\nيرجى تزويدي بأسعار الجملة، والحد الأدنى للطلب (MOQ)، والتوفر ومعلومات الشحن الدولي.`,
    whatsappGeneralInquiry: (details) =>
      `مرحباً سيلك روت،\n\nأتواصل معكم بخصوص تصنيع الأقمشة والتوريد بالجملة عالمياً:\n${details || 'يرجى تزويدي بالكتالوج الحالي وشروط طلبات التسعير.'}`,

    footerDesc: 'تصنيع أفخر المنسوجات، وقطن اللوان المصري، وتطريزات الزاري اليدوية، والتوريد التجاري بالجملة لدور الأزياء العالمية.',
    footerCollections: 'مجموعات الأقمشة',
    footerB2BServices: 'خدمات الشركات B2B',
    footerLiaisonDesks: 'مكاتب التنسيق',
    footerSocial: 'التواصل التجاري',
    footerCopyright: 'سيلك روت للمنسوجات. جميع الحقوق محفوظة. مصنّع أقمشة وشريك تجاري عالمي لمبيعات الجملة.',
    footerPrivacy: 'سياسة الخصوصية',
    footerTerms: 'شروط التوريد التجاري بالجملة',
  },

  // ================= URDU (RTL) =================
  ur: {
    brandName: 'سلک روٹ',
    brandTagline: 'کپڑوں کی مینوفیکچرنگ اور بین الاقوامی ہول سیل سپلائی',
    brandPositioning: 'سلک روٹ — ٹیکسٹائل مینوفیکچرر اور عالمی ہول سیل پارٹنر',
    globalReach: 'دنیا بھر کے ٹیکسٹائل اداروں کے لیے خدمات',

    navHome: 'ہوم',
    navCollections: 'کلیکشنز',
    navWholesale: 'مینوفیکچرنگ اور ہول سیل',
    navHowItWorks: 'ہمارا طریقہ کار',
    navAbout: 'ہمارے بارے میں',
    navContact: 'رابطہ کریں',
    searchPlaceholder: 'پروڈکٹ کوڈ (SKU)، کپڑے کی قسم یا ساخت سے تلاش کریں...',
    searchButton: 'تلاش کریں',
    requestCustomQuote: 'خصوصی کوٹیشن کی درخواست کریں',
    selectLanguage: 'زبان',

    heroKicker: 'ٹیکسٹائل مینوفیکچرر اور عالمی ہول سیل پارٹنر · دنیا بھر میں خدمات',
    heroHeadlineMain: 'پریمیئم کپڑوں کی مینوفیکچرنگ۔',
    heroHeadlineItalic: 'عالمی ہول سیل میں بے مثال معیار۔',
    heroSupportingText: 'کپڑوں کی مینوفیکچرنگ اور کسٹم ٹیکسٹائل پروڈکشن سے لے کر ہول سیل سپلائی تک، سلک روٹ دنیا بھر کے کاروباری اداروں کو بہترین فیبرکس فراہم کرتا ہے۔',
    ctaExploreCollections: 'کلیکشنز دیکھیں',
    ctaManufacturingInquiries: 'مینوفیکچرنگ سے متعلق معلومات',
    ctaWholesaleInquiries: 'ہول سیل سے متعلق معلومات',
    ctaContactSilkRoute: 'سلک روٹ سے رابطہ کریں',
    trustMfg: 'مینوفیکچرنگ',
    trustMfgSub: 'کسٹم اور آرڈر پر تیاری',
    trustWholesale: 'ہول سیل سپلائی',
    trustWholesaleSub: 'تیار اسٹاک اور بلک آرڈرز',
    trustGlobal: 'عالمی ترسیل',
    trustGlobalSub: 'دنیا بھر کے کاروباروں کے لیے',
    floatingBadgeTitle: 'دنیا بھر کے ٹیکسٹائل کاروباروں کی خدمت',
    floatingBadgeSub: 'کسٹم آرڈر مینجمنٹ، کسٹمز اور عالمی شپنگ سہولیات',

    introKicker: 'ٹیکسٹائل مینوفیکچرر اور عالمی ہول سیل پارٹنر',
    introHeading: 'کپڑوں کی مینوفیکچرنگ اور ہول سیل سپلائی میں آپ کا عالمی پارٹنر',
    introP1: 'کپڑوں کی مینوفیکچرنگ اور خصوصی ٹیکسٹائل پروڈکشن سے لے کر ہول سیل ترسیل تک، سلک روٹ اعلیٰ معیار کے فیبرکس دنیا بھر کے فیشن برانڈز کو فراہم کرتا ہے۔',
    introP2: 'ہم کلوتھنگ برانڈز، بوتیک مالکان، فیبرک ہول سیلرز اور بین الاقوامی ڈسٹری بیوٹرز کو مصدقہ صلاحیتوں کے ساتھ سروس دیتے ہیں: ریڈی اسٹاک سے فوری ترسیل اور خصوصی ویوز، پینٹون لیب ڈپس اور کڑھائی کے لیے آرڈر پر کسٹم پروڈکشن۔',
    introReadyTitle: 'ٹیکسٹائل مینوفیکچرنگ',
    introReadyDesc: 'لوم پر بنائی، کسٹم لیب ڈپس اور مخصوص پیٹرنز۔',
    introOrderTitle: 'ہول سیل سپلائی',
    introOrderDesc: 'تیار ان سلا کپڑا اور بلک آرڈرز کی بروقت ترسیل۔',
    introWorldwideTitle: 'عالمی شپنگ',
    introWorldwideDesc: 'بحری اور فضائی کارگو کے ذریعے دنیا کے تمام حصوں تک ترسیل۔',
    capabilitiesKicker: 'مصدقہ کاروباری صلاحیتیں',
    capabilitiesHeading: 'مینوفیکچرنگ اور ہول سیل سروسز',
    capabilitiesViewAll: 'تمام صلاحیتیں اور حل دیکھیں',

    collectionsKicker: 'منتخب کردہ ہول سیل کیٹلاگز',
    collectionsHeading: 'نمایاں فیبرک کلیکشنز',
    collectionsSub: 'کمرشل ملبوسات کے برانڈز اور بوتیک کے لیے تیار کردہ ہماری چھ بنیادی ٹیکسٹائل کیٹگریز دیکھیں۔',
    browseAllCollections: 'تمام 6 کلیکشنز دیکھیں',
    designsAvailable: 'ڈیزائنز دستیاب ہیں',
    exploreCollection: 'کلیکشن دریافت کریں',

    productsKicker: 'منتخب کردہ پروڈکٹ ہائی لائٹس',
    productsHeading: 'نمایاں فیبرکس',
    productsSub: 'فوری ہول سیل اور کسٹم مینوفیکچرنگ کے لیے دستیاب۔ تکنیکی تفصیلات اور کم از کم آرڈر کی شرائط درخواست پر طے کی جاتی ہیں۔',
    viewCompleteCatalogue: 'مکمل کیٹلاگ دیکھیں',
    viewDetails: 'تفصیلات دیکھیں',
    quoteBtn: 'کوٹیشن',
    readyStockTag: 'ریڈی اسٹاک',
    sourcingRequestTag: 'درخواست پر تیاری',
    customMoqNotice: 'کم از کم آرڈر (MOQ): آرڈر اور اسٹاک کے مطابق طے شدہ',
    colorwaysCount: 'رنگ',

    catalogueKicker: 'بین الاقوامی ٹیکسٹائل کیٹلاگ · دنیا بھر کے خریداروں کے لیے',
    catalogueHeading: 'فیبرک کلیکشنز اور پروڈکٹ کیٹلاگ',
    catalogueSub: 'ہمارے مصری کاٹن لان، زری کڑھائی، ڈیجیٹل پرنٹس اور خالص را سلک فیبرکس کو دیکھیں۔ ریڈی اسٹاک اور کسٹم مینوفیکچرنگ کے لیے دستیاب۔',
    filterCollectionLabel: 'کلیکشن',
    filterAllCollections: 'تمام کلیکشنز',
    filterFabricTypeLabel: 'کپڑے کی قسم',
    filterAllFabricTypes: 'تمام اقسام کی بنائی',
    filterAvailabilityLabel: 'دستیابی کی صورتحال',
    filterAllAvailability: 'تمام سٹیٹس',
    filterSearchPlaceholder: 'کپڑے کا نام، پروڈکٹ کوڈ (جیسے SR-LWN-8801) یا بناوٹ سے تلاش کریں...',
    clearSearch: 'صاف کریں',
    showingFabricsCount: 'ہول سیل فیبرک ڈیزائنز',
    resetAllFilters: 'فلٹرز ری سیٹ کریں',
    noMatchingFabrics: 'کوئی مماثل کپڑا نہیں ملا',
    noMatchingFabricsSub: 'آپ کی تلاش کے مطابق فیبرک نہیں مل سکا۔ براہ کرم فلٹرز صاف کریں یا کسٹم مینوفیکچرنگ کے لیے ہمارے ڈیسک سے رابطہ کریں۔',
    customSourcingPromptTitle: 'کیا آپ کو مخصوص بنائی یا کسٹم مینوفیکچرنگ کی ضرورت ہے؟',
    customSourcingPromptDesc: 'اگر آپ کی کلیکشن کے لیے مخصوص دھاگے، پینٹون شیڈز یا کڑھائی کی ضرورت ہو تو ہمارا کسٹم پروڈکشن ڈیسک براہ راست کارخانوں کے ساتھ کام کرتا ہے۔',
    requestCustomSourcing: 'مینوفیکچرنگ سے متعلق معلومات',

    fabricSpecsHeading: 'فیبرک کی تکنیکی تفصیلات',
    technicalParamsTitle: 'تکنیکی پیرامیٹرز',
    specFabricType: 'کپڑے کی قسم',
    specComposition: 'ترکیب و ساخت',
    specMaterial: 'مٹیریل اور ساخت',
    specUsableWidth: 'استعمال کے قابل چوڑائی (عرض)',
    specWeightGsm: 'وزن / گرام فی مربع میٹر',
    specYarnCount: 'دھاگے کا نمبر / بنائی',
    specDesignPattern: 'ڈیزائن اور پیٹرن',
    specFinishing: 'فنشننگ',
    specRecommendedFor: 'مناسب استعمال',
    availableColorways: 'دستیاب رنگ',
    samplingTitle: 'نمونہ جات اور لیب ڈپس:',
    customMoqTitle: 'کم از کم آرڈر (MOQ) کی پالیسی',
    manufacturingOptionsTitle: 'مینوفیکچرنگ اور کسٹمائزیشن کے اختیارات',
    manufacturingOptionsSub: 'اس کپڑے کے لیے دستیاب پروڈکشن کی سہولیات',
    selectDestinationCountry: 'منزل کا ملک یا پورٹ منتخب کریں:',
    whatsappInquiryBtn: 'واٹس ایپ پر رابطہ',
    relatedFabricsTitle: 'اس کیٹگری کے دیگر کپڑے',
    copyProductLink: 'پروڈکٹ کا لنک شیئر کریں',
    linkCopiedNotice: 'ڈائریکٹ لنک کلپ بورڈ پر کاپی ہو گیا',

    mfgHeroKicker: 'سلک روٹ عالمی آپریشنز · دنیا بھر کے خریداروں کے لیے',
    mfgHeroHeading: 'مینوفیکچرنگ اور ہول سیل حل',
    mfgHeroSub: 'کپڑوں کی تیاری اور ہول سیل سپلائی میں آپ کا عالمی پارٹنر۔ ابتدائی سوت سے لے کر بین الاقوامی کنٹینر ترسیل تک، ہم پوری دنیا میں سنجیدہ کاروباری اصولوں پر کام کرتے ہیں۔',
    customPolicyTitle: 'کسٹم آرڈر اور پروڈکشن پالیسی',
    customPolicyDesc: 'کم از کم آرڈر کی مقدار، پیداواری امکانات، قیمتیں، تیاری کی مدت اور ترسیل کے طریقے ہر خریدار کی ضروریات کے مطابق طے کیے جاتے ہیں۔',
    coreCapsHeading: 'مینوفیکچرنگ اور ہول سیل صلاحیتیں',
    coreCapsSub: 'دنیا بھر کے پارٹنرز کے لیے مکمل ٹیکسٹائل سروسز فراہم کرنے والی مصدقہ صلاحیتیں۔',
    tailoredSolutionsHeading: 'عالمی ٹیکسٹائل خریداروں کے لیے موزوں حل',
    tailoredSolutionsSub: 'ٹیکسٹائل مینوفیکچرنگ کو بین الاقوامی کاروباری مواقع کے ساتھ جوڑنا۔',
    keyDeliverablesLabel: 'اہم خصوصیات:',
    globalNetworkKicker: 'عالمی تجارتی نیٹ ورک',
    globalNetworkHeading: 'فیبرک مینوفیکچرنگ کو بین الاقوامی مواقع سے جوڑنا',
    globalNetworkDesc: 'ہم دنیا بھر کے خریداروں کے لیے بین الاقوامی فضائی اور بحری کارگو، کسٹمز دستاویزات اور کمرشل انوائسز فراہم کرتے ہیں۔',

    howHeroKicker: 'کاروباری طریقہ کار · بین الاقوامی خریداروں کے لیے',
    howHeroHeading: 'ہم کس طرح کام کرتے ہیں',
    howHeroSub: 'سلک روٹ دو شفاف سپلائی طریقوں پر کام کرتا ہے: تیار اسٹاک سے فوری فراہمی اور کسٹم آرڈر پر انڈسٹریل سطح کی پروڈکشن۔',
    realityFirstTitle: 'حقیقت پسندانہ جائزہ اور شفافیت',
    realityFirstDesc: 'کم از کم مقدار، تیاری کا وقت، لاگت اور شپنگ کے امور بغیر کسی غیر حقیقی وعدے کے حقیقی بنیادوں پر طے کیے جاتے ہیں۔',
    pathwayATitle: 'تیار اسٹاک اور فوری ہول سیل سپلائی',
    pathwayASub: 'سپلائی کا طریقہ (الف)',
    pathwayADesc: 'بوتیک، ملبوسات ساز اداروں اور ڈسٹری بیوٹرز کے لیے بہترین جہاں کم وقت میں تصدیق شدہ مال کی ضرورت ہو۔',
    pathwayBTitle: 'ٹیکسٹائل مینوفیکچرنگ اور کسٹم پروڈکشن',
    pathwayBSub: 'سپلائی کا طریقہ (ب)',
    pathwayBDesc: 'ان فیشن برانڈز کے لیے جو خصوصی کلیکشنز، کسٹم رنگ اور منفرد کڑھائی کے ڈیزائن بنانا چاہتے ہیں۔',
    comparisonTitle: 'ایک نظر میں موازنہ',
    compParam: 'پیرامیٹر',
    compPathwayA: 'طریقہ (الف): ریڈی اسٹاک',
    compPathwayB: 'طریقہ (ب): کسٹم پروڈکشن',
    compMoq: 'کم از کم آرڈر (MOQ)',
    compMoqA: 'موجود تھانوں اور رولز کے مطابق طے شدہ',
    compMoqB: 'لوم کی گنجائش اور ڈائنگ کے مطابق',
    compDesign: 'ڈیزائن کا انتخاب',
    compDesignA: 'موجودہ کیٹلاگ اور دستیاب پیٹرنز میں سے',
    compDesignB: 'کسٹم لیب ڈپس، مخصوص بنائی اور اپنے ڈیزائنز',
    compSampling: 'سیمپلنگ',
    compSamplingA: 'فوری سیمپل کارڈز اور کپڑے کے ٹکڑے',
    compSamplingB: 'بڑے پیمانے پر کام سے قبل لیب نمونے اور لوم سیمپل',
    compDelivery: 'شپنگ کے ذرائع',
    compDeliveryA: 'بین الاقوامی ایئر ایکسپریس یا بحری کارگو',
    compDeliveryB: 'شیڈولڈ کنٹینر شپمنٹس یا براہ راست ایئر کارگو',
    howActionPrompt: 'کیا آپ مینوفیکچرنگ یا ہول سیل آرڈر پر بات کرنا چاہتے ہیں؟',
    howActionSub: 'ہماری تکنیکی اور تجارتی ٹیم آپ کی ضروریات کا جائزہ لینے کے لیے تیار ہے۔',

    aboutHeroKicker: 'برانڈ کی کہانی · عالمی شناخت',
    aboutHeroHeading: 'شاندار کپڑوں کو دنیا بھر کے کاروباروں سے جوڑنا۔',
    aboutHeroSub: 'سلک روٹ ایک ٹیکسٹائل مینوفیکچرر اور عالمی ہول سیل پارٹنر ہے۔ کسٹم پروڈکشن سے لے کر ہول سیل فراہمی تک، ہم دنیا بھر میں اعلیٰ کوالٹی کے فیبرکس مہیا کرتے ہیں۔',
    aboutEditorialTag: 'فیبرک مینوفیکچرنگ اور بلک ہول سیل سپلائی',
    aboutPhilosophyKicker: 'ہمارا کاروباری فلسفہ',
    aboutPhilosophyHeading: 'کپڑے کا حقیقی معیار، تکنیکی مہارت اور پائیدار شراکت داری',
    aboutP1: 'سلک روٹ بنائی کے روایتی کمال کو جدید بی ٹو بی اصولوں کے ساتھ یکجا کرتا ہے۔ ہم برانڈز، تاجروں اور بوتیک کے ساتھ مل کر کام کرتے ہیں۔',
    aboutP2: 'مینوفیکچرر اور ہول سیلر کے طور پر ہم حقائق پر بھروسا کرتے ہیں: واضح تکنیکی تفصیلات (GSM، سکڑاؤ، پکے رنگ) اور ڈیڈ لائنز کی پاسداری۔',
    aboutPillarMfgTitle: 'ٹیکسٹائل مینوفیکچرنگ',
    aboutPillarMfgDesc: 'کسٹم فیبرک ڈیولپمنٹ، لوم ویونگ اور لیب ڈپس۔',
    aboutPillarWholesaleTitle: 'ہول سیل سپلائی',
    aboutPillarWholesaleDesc: 'تیار اسٹاک اور دنیا بھر میں مکمل تھانوں کی ترسیل۔',
    aboutFoundationsHeading: 'بنیادی کاروباری ستون',
    aboutActionHeading: 'کپڑوں کی مینوفیکچرنگ اور ہول سیل سپلائی میں آپ کا عالمی پارٹنر۔',
    aboutActionSub: 'چاہے آپ کو لوم پر خصوصی پروڈکشن درکار ہو یا ریڈی اسٹاک سے فیبرکس، ہماری ٹیم ہر وقت حاضر ہے۔',

    contactHeroKicker: 'تجارتی ڈیسک اور رابطہ · عالمی سروس',
    contactHeroHeading: 'سلک روٹ سے رابطہ کریں',
    contactHeroSub: 'کپڑوں کی تیاری اور ہول سیل میں آپ کا عالمی پارٹنر۔ مینوفیکچرنگ، اسٹاک کی تصدیق اور کوٹیشن کے لیے ہمارے نمائندوں سے رابطہ کریں۔',
    whatsappDeskTitle: 'واٹس ایپ بزنس ڈیسک',
    whatsappDeskSub: 'فوری مینوفیکچرنگ اور ہول سیل رابطہ',
    whatsappDeskDesc: 'اسٹاک کی تصدیق، کپڑے کی ویڈیو دیکھنے اور فوری کوٹیشن حاصل کرنے کے لیے ہمارے واٹس ایپ ڈیسک پر میسج کریں۔',
    startWhatsappBtn: 'واٹس ایپ پر رابطہ شروع کریں',
    directLineLabel: 'ڈائریکٹ لائن:',
    officialEmailTitle: 'آفیشل بزنس ای میل',
    emailDesc: 'باقاعدہ پرپوزلز، سپلائر فارمز اور ٹیک پیک فائلز کے لیے۔ 24 دفتری گھنٹوں میں جواب دیا جاتا ہے۔',
    operatingHoursTitle: 'اوقات کار',
    intlInquiriesNotice: 'عالمی خریداروں کے لیے نوٹس:',
    intlInquiriesNoticeDesc: 'ہم دنیا بھر کے مختلف ٹائم زونز کے ساتھ ہم آہنگ ہو کر کام کرتے ہیں۔',
    showroomsTitle: 'لائزن ڈیسکس اور لاجسٹک ہبس',
    generalMessageTitle: 'براہ راست تجارتی پیغام',
    generalMessageSub: 'ہماری بین الاقوامی ٹیم کو براہ راست اپنا پیغام بھیجیں۔',
    labelYourName: 'آپ کا نام *',
    labelCompany: 'کمپنی / برانڈ کا نام *',
    labelBusinessEmail: 'کاروباری ای میل *',
    labelCountry: 'منزل کا ملک *',
    labelSubject: 'موضوع',
    labelMessage: 'پیغام اور تفصیلات *',
    sendMessageBtn: 'سلک روٹ سے رابطہ کریں',
    messagePreparedTitle: 'پیغام تیار کر لیا گیا ہے',
    messagePreparedDesc: 'آپ کی معلومات ہمارے سسٹم میں درج کر لی گئی ہیں۔ فوری کارروائی کے لیے آپ اسے واٹس ایپ پر بھی بھیج سکتے ہیں۔',
    openInWhatsappBtn: 'واٹس ایپ میں کھولیں',
    sendAnotherBtn: 'دوسرا پیغام بھیجیں',

    quoteFormHeading: 'خصوصی کوٹیشن کی درخواست کریں',
    quoteFormSub: 'اپنی مینوفیکچرنگ یا ہول سیل ضروریات درج کریں۔ کم از کم آرڈر، فزیبلٹی، قیمتیں، تیاری کی مدت اور شپنگ ہر خریدار کے مطابق طے کی جاتی ہیں۔',
    formStep1: '1. پورا نام *',
    formStep2: '2. کمپنی یا برانڈ کا نام *',
    formStep3: '3. کاروباری ای میل *',
    formStep4: '4. منزل کا ملک یا علاقہ *',
    formStep5: '5. کاروبار کی قسم *',
    formStep6: '6. مطلوبہ بنیادی سروس *',
    formStep7: '7. فیبرک کیٹیگری',
    formStep8: '8. پروڈکٹ ریفرنس / SKU (اختیاری)',
    formStep9: '9. تخمینی آرڈر کی مقدار *',
    formStep10: '10. سپلائی اور پروڈکشن کی نوعیت *',
    formStep11: '11. مخصوص تکنیکی ضروریات',
    submitQuoteBtn: 'خصوصی کوٹیشن کی درخواست کریں',
    quotePreparedTitle: 'کوٹیشن کی درخواست تیار ہو چکی ہے',
    quotePreparedDesc: 'آپ کی ضروریات سسٹم میں محفوظ کر لی گئی ہیں۔ آپ اسے براہ راست واٹس ایپ پر بھیج سکتے ہیں یا نیچے سے خلاصہ کاپی کر سکتے ہیں۔',
    sendToWhatsappDeskBtn: 'واٹس ایپ کمرشل ڈیسک پر بھیجیں',
    copyQuoteSummaryBtn: 'خلاصہ کاپی کریں',
    quoteCopiedNotice: 'خلاصہ کاپی ہو گیا ہے',
    submitAnotherQuoteBtn: 'نئی کوٹیشن کی درخواست کریں',
    errNameRequired: 'پورا نام درج کرنا لازمی ہے۔',
    errCompanyRequired: 'کمپنی کا نام درج کرنا لازمی ہے۔',
    errEmailRequired: 'کاروباری ای میل درج کرنا لازمی ہے۔',
    errEmailInvalid: 'براہ کرم درست کاروباری ای میل درج کریں۔',
    errCountryRequired: 'منزل کا ملک منتخب کرنا لازمی ہے۔',
    errQuantityRequired: 'آرڈر کی مقدار درج کرنا لازمی ہے۔',
    errQuantityNumeric: 'براہ کرم درست عددی مقدار درج کریں۔',

    whatsappProductInquiry: ({ productName, sku, country }) =>
      `السلام علیکم سلک روٹ، میں آپ کے کپڑوں کے مجموعے میں دلچسپی رکھتا ہوں۔\n\nپروڈکٹ: ${productName}\nریفرنس: ${sku}\nملک: ${country}\n\nبراہ کرم تھوک قیمتیں، کم از کم آرڈر کی مقدار (MOQ)، دستیابی اور ترسیل کی تفصیلات فراہم کریں۔`,
    whatsappGeneralInquiry: (details) =>
      `السلام علیکم سلک روٹ،\n\nمیں کپڑوں کی مینوفیکچرنگ اور ہول سیل سپلائی کے حوالے سے رابطہ کر رہا ہوں:\n${details || 'براہ کرم اپنا موجودہ کیٹلاگ اور کوٹیشن کے طریقہ کار سے آگاہ فرمائیں۔'}`,

    footerDesc: 'بہترین ان سلا کپڑا، مصری کاٹن لان، کسٹم مینوفیکچرنگ اور دنیا بھر کے فیشن ہاؤسز کے لیے بلک ہول سیل سپلائی۔',
    footerCollections: 'فیبرک کلیکشنز',
    footerB2BServices: 'بی ٹو بی خدمات',
    footerLiaisonDesks: 'رابطہ دفاتر',
    footerSocial: 'کاروباری نیٹ ورک',
    footerCopyright: 'سلک روٹ ٹیکسٹائلز۔ جملہ حقوق محفوظ ہیں۔ ٹیکسٹائل مینوفیکچرر اور عالمی ہول سیل پارٹنر۔',
    footerPrivacy: 'پرائیویسی پالیسی',
    footerTerms: 'ہول سیل شرائط و ضوابط',
  },
};
