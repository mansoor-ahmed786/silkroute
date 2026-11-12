import React from 'react';
import { ArrowUpRight, MessageSquare, Package, Store, Briefcase, Sparkles, Building2, Globe, Factory, Layers, RefreshCw, Handshake } from 'lucide-react';
import { getWhatsAppInquiryUrl, SITE_CONFIG } from '../data/siteConfig';
import { useLanguage } from '../i18n/LanguageContext';

interface WholesaleSolutionsViewProps {
  onRequestQuote: (inquiryType?: string) => void;
}

export const WholesaleSolutionsView: React.FC<WholesaleSolutionsViewProps> = ({
  onRequestQuote,
}) => {
  const { language, t, isRTL } = useLanguage();

  // The 8 Core Business Capabilities
  const coreCapabilities = [
    {
      id: 'textile-mfg',
      num: '01',
      title: 'Textile Manufacturing',
      icon: Factory,
      description: 'End-to-end fabric manufacturing across fine natural and blended fibers. We coordinate yarn selection, loom preparation, weave structures, and finishing to deliver consistent, export-grade unstitched fabrics.',
    },
    {
      id: 'custom-mfg',
      num: '02',
      title: 'Custom Fabric Manufacturing',
      icon: Sparkles,
      description: 'Bespoke fabric development tailored to your exact technical specifications. From customized yarn counts (such as 80s and 100s combed lawn) to specialized jacquards, embroidery borders, and exclusive pattern repeats.',
    },
    {
      id: 'wholesale-supply',
      num: '03',
      title: 'Wholesale Fabric Supply',
      icon: Package,
      description: 'Commercial wholesale supply of unstitched fabrics for high-volume trade. Providing full bolts, bulk rolls, and complete 3-piece coordinates with reliable batch consistency.',
    },
    {
      id: 'bulk-orders',
      num: '04',
      title: 'Bulk Order Management',
      icon: Layers,
      description: 'Systematic order handling for container freight and bulk shipments. We oversee quality inspection, piece-by-piece packing, commercial documentation, and export logistics for global delivery.',
    },
    {
      id: 'ready-stock',
      num: '05',
      title: 'Ready Stock Collections',
      icon: Store,
      description: 'Regularly updated inventory of ready-to-dispatch fabric collections. Allows boutique owners, clothing brands, and merchants to access immediate yardage with fast dispatch times.',
    },
    {
      id: 'order-based-prod',
      num: '06',
      title: 'Order-Based Production',
      icon: RefreshCw,
      description: 'Dedicated production runs planned around your collection calendar. We establish transparent manufacturing timelines, laboratory strike-offs, and staged delivery milestones.',
    },
    {
      id: 'customized-reqs',
      num: '07',
      title: 'Customized Buyer Requirements',
      icon: Briefcase,
      description: 'Every order is configured to the buyer\'s exact needs. We adjust fabric width, GSM, hand-feel calenders, packaging, labeling, and delivery terms to suit individual commercial requirements.',
    },
    {
      id: 'intl-partnerships',
      num: '08',
      title: 'International Business Partnerships',
      icon: Handshake,
      description: 'Long-term collaborative partnerships with textile distributors, clothing labels, and retail groups worldwide, providing ongoing seasonal access, priority production slots, and confidential sourcing.',
    },
  ];

  // Solutions by buyer type
  const buyerSolutions = [
    {
      title: 'Fabric Wholesalers & Textile Distributors',
      subtitle: 'Volume Manufacturing & Continuous Supply',
      description: 'Consistent loom production and bulk unstitched rolls for regional and international distribution networks. Repeat lot dyeing, strict yardage accuracy, and container-grade packing.',
      benefits: ['Bulk roll and full bolt allocations', 'Predictable batch dye matching', 'Commercial container freight coordination', 'Custom packing and labeling']
    },
    {
      title: 'Clothing Brands & Fashion Labels',
      subtitle: 'Collection Manufacturing & Fabric Development',
      description: 'Collaborative development of unstitched fabrics for upcoming pret, luxury, and formal lines. We coordinate custom lab dips, specialized weaves, and exclusive embroidery to align with your design tech packs.',
      benefits: ['Custom Pantone lab dips & feeler headers', 'Confidential design development', 'Verified tensile and shrinkage data', 'Dedicated production scheduling']
    },
    {
      title: 'Fashion Boutiques & Multi-Brand Ateliers',
      subtitle: 'Curated Ready Stock & Coordinated Sets',
      description: 'High-end unstitched unstitched suites, including embroidered lawn, pure raw silks, and coordinates. Tailored minimum order quantities allow boutiques to stock distinctive designs with manageable inventory.',
      benefits: ['Low-friction ready stock allocations', 'Coordinated 3-piece unstitched sets', 'Physical swatch cards available', 'Worldwide door-to-door air express']
    },
    {
      title: 'Textile Sourcing Enterprises & Procurement Desks',
      subtitle: 'Contract Manufacturing & Reliable Logistics',
      description: 'Professional execution for corporate procurement and fashion enterprises requiring reliable contract manufacturing, bulk order management, and worldwide trade compliance.',
      benefits: ['Comprehensive B2B quotation contracts', 'Commercial customs documentation', 'Verified fabric technical parameters', 'Worldwide multi-port delivery']
    }
  ];

  const handleWhatsApp = () => {
    const url = getWhatsAppInquiryUrl({
      inquiryDetails: 'Inquiry regarding Manufacturing & Wholesale Solutions with Silk Route.',
      language,
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="pt-28 sm:pt-32 pb-16 sm:pb-20 md:pt-36 md:pb-28 2xl:pt-40 2xl:pb-32">
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 2xl:px-16 space-y-12 sm:space-y-16 2xl:space-y-20">
        {/* Page Hero */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#B69A62]">
            <span>{t.mfgHeroKicker}</span>
            <span aria-hidden="true">·</span>
            <span>{t.globalReach}</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl text-[#252525] font-normal leading-tight text-balance">
            {t.mfgHeroHeading}
          </h1>
          <p className="text-base sm:text-lg 2xl:text-xl text-[#252525]/75 font-light leading-relaxed">
            {t.mfgHeroSub}
          </p>
        </div>

        {/* Customized Policy Banner */}
        <div className="bg-[#E8DFD1]/40 border border-[#B69A62]/40 p-6 rounded-sm">
          <div className="flex items-start gap-3.5">
            <Globe className="w-5 h-5 text-[#977D4A] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-wider font-semibold text-[#252525]">
                {t.customPolicyTitle}
              </p>
              <p className="text-xs text-[#252525]/85 leading-relaxed">
                {t.customPolicyDesc}
              </p>
            </div>
          </div>
        </div>

        {/* 8 Business Capabilities Section */}
        <div className="space-y-8">
          <div className="border-b border-[#E8DFD1] pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-[#977D4A]">
                {t.introKicker}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#252525]">
                {t.coreCapsHeading}
              </h2>
            </div>
            <p className="text-xs text-[#252525]/60 sm:max-w-xs">
              {t.coreCapsSub}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreCapabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.id}
                  className="bg-white border border-[#E8DFD1] p-6 rounded-sm shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-[#B69A62]/70 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xs bg-[#F8F5EF] border border-[#E8DFD1] flex items-center justify-center text-[#977D4A]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-serif text-lg font-light text-[#977D4A]">
                        {cap.num}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-normal text-[#252525]">
                      {cap.title}
                    </h3>

                    <p className="text-xs text-[#252525]/75 leading-relaxed font-light">
                      {cap.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#E8DFD1]/50">
                    <button
                      onClick={() => onRequestQuote(cap.title)}
                      className="text-[11px] uppercase tracking-wider font-semibold text-[#252525] hover:text-[#977D4A] flex items-center gap-1 cursor-pointer"
                    >
                      <span>Inquire for {cap.title}</span>
                      <ArrowUpRight className={`w-3 h-3 text-[#B69A62] ${isRTL ? '-scale-x-100' : ''}`} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tailored Solutions by Industry Segment */}
        <div className="space-y-8">
          <div className="border-b border-[#E8DFD1] pb-3">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#252525]">
              {t.tailoredSolutionsHeading}
            </h2>
            <p className="text-xs text-[#252525]/70 mt-1">
              {t.tailoredSolutionsSub}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {buyerSolutions.map((sol, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E8DFD1] p-7 sm:p-8 rounded-sm shadow-xs space-y-4 hover:border-[#B69A62]/60 transition-colors"
              >
                <div>
                  <h3 className="font-serif text-2xl text-[#252525] font-normal">
                    {sol.title}
                  </h3>
                  <p className="text-xs text-[#977D4A] uppercase tracking-wider font-medium mt-0.5">
                    {sol.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#252525]/75 leading-relaxed font-light">
                  {sol.description}
                </p>

                <div className="pt-3 border-t border-[#E8DFD1]/60 space-y-2">
                  <p className="text-[11px] uppercase tracking-wider font-semibold text-[#252525]/70">
                    {t.keyDeliverablesLabel}:
                  </p>
                  <ul className="space-y-1.5 text-xs text-[#252525]/70">
                    {sol.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#977D4A]">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Logistics & Action Strip */}
        <div className="bg-[#252525] text-white p-8 sm:p-12 rounded-sm border border-[#B69A62]/30 space-y-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#B69A62]">
              {t.globalNetworkKicker}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white">
              {t.globalNetworkHeading}
            </h3>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
              {t.globalNetworkDesc}
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
            <button
              onClick={() => onRequestQuote('Manufacturing & Wholesale')}
              className="py-3 px-6 text-xs font-semibold uppercase tracking-wider text-[#252525] bg-[#B69A62] hover:bg-[#c4a974] transition-colors rounded-xs cursor-pointer text-center shadow-xs"
            >
              {t.requestCustomQuote}
            </button>

            <button
              onClick={() => onRequestQuote('Textile Manufacturing')}
              className="py-3 px-6 text-xs font-semibold tracking-wider uppercase text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors rounded-xs cursor-pointer text-center"
            >
              {t.ctaManufacturingInquiries}
            </button>

            <button
              onClick={() => onRequestQuote('Wholesale Fabric Supply')}
              className="py-3 px-6 text-xs font-semibold tracking-wider uppercase text-white bg-transparent hover:bg-white/10 border border-white/20 transition-colors rounded-xs cursor-pointer text-center"
            >
              {t.ctaWholesaleInquiries}
            </button>

            <button
              onClick={handleWhatsApp}
              className="py-3 px-5 text-xs font-semibold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20bd5a] transition-colors rounded-xs flex items-center justify-center gap-2 cursor-pointer text-center"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
