import React from 'react';
import { ArrowRight, Globe, Layers, Sparkles, Factory } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';
import { useLanguage } from '../i18n/LanguageContext';

interface HeroSectionProps {
  onExploreCollections: () => void;
  onRequestQuote: (inquiryType?: string) => void;
  onNavigateContact?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreCollections,
  onRequestQuote,
  onNavigateContact,
}) => {
  const { t, isRTL } = useLanguage();

  return (
    <section className="relative pt-28 sm:pt-32 pb-14 sm:pb-16 md:pt-36 md:pb-24 2xl:pt-40 2xl:pb-32 overflow-hidden">
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 2xl:px-16">
        {/* Split Hero: Content on left, editorial photo on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 2xl:gap-18 items-center">
          {/* Left Column: Brand Positioning & Action */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6 lg:space-y-8">
            {/* Quiet unboxed kicker */}
            <div className="flex items-center gap-2.5 text-xs tracking-[0.2em] uppercase font-semibold text-[#B69A62]">
              <span>{t.heroKicker}</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl leading-[1.08] text-[#252525] font-normal tracking-tight text-balance">
              {t.heroHeadlineMain} <br />
              <span className="italic font-light text-[#977D4A]">{t.heroHeadlineItalic}</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg 2xl:text-xl text-[#252525]/75 leading-relaxed font-light max-w-xl 2xl:max-w-2xl">
              {t.heroSupportingText}
            </p>

            {/* Action CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
              <button
                onClick={onExploreCollections}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#F8F5EF] bg-[#252525] hover:bg-[#3d3d3d] transition-all rounded-sm shadow-sm cursor-pointer whitespace-nowrap text-center"
              >
                <span>{t.ctaExploreCollections}</span>
                <ArrowRight className={`w-4 h-4 text-[#B69A62] ${isRTL ? 'rotate-180' : ''}`} />
              </button>

              <button
                onClick={() => onRequestQuote('Textile Manufacturing')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#252525] bg-[#E8DFD1]/60 hover:bg-[#E8DFD1] border border-[#B69A62]/40 transition-all rounded-sm cursor-pointer whitespace-nowrap text-center"
              >
                <span>{t.ctaManufacturingInquiries}</span>
              </button>

              <button
                onClick={() => onRequestQuote('Wholesale Fabric Supply')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#252525] bg-transparent hover:bg-[#E8DFD1]/50 border border-[#252525]/30 transition-all rounded-sm cursor-pointer whitespace-nowrap text-center"
              >
                <span>{t.ctaWholesaleInquiries}</span>
              </button>
            </div>

            {/* Quiet trust credentials */}
            <div className="pt-6 border-t border-[#E8DFD1]/80 grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 text-start">
              <div>
                <p className="text-xs uppercase tracking-wider font-semibold text-[#252525]">{t.trustMfg}</p>
                <p className="text-[12px] text-[#252525]/60 mt-0.5">{t.trustMfgSub}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider font-semibold text-[#252525]">{t.trustWholesale}</p>
                <p className="text-[12px] text-[#252525]/60 mt-0.5">{t.trustWholesaleSub}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider font-semibold text-[#252525]">{t.trustGlobal}</p>
                <p className="text-[12px] text-[#252525]/60 mt-0.5">{t.trustGlobalSub}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Large Editorial Fabric Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative group overflow-hidden rounded-sm bg-[#E8DFD1]/40 border border-[#E8DFD1] shadow-[0_12px_40px_rgba(37,37,37,0.06)] aspect-[16/11] sm:aspect-[16/10] lg:aspect-[4/3]">
              <img
                src="/assets/aistudio/IMG-20261027-WA0023_87993772.jpg"
                alt="Silk Route luxury handcrafted embroidered textiles and unstitched fabrics"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
              />

              {/* Editorial Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 bg-gradient-to-t from-[#252525]/85 via-[#252525]/40 to-transparent text-[#F8F5EF]">
                <div className="flex items-center justify-between text-xs tracking-wider uppercase text-[#B69A62] font-medium mb-1">
                  <span>{t.trustMfg}</span>
                  <span>{t.trustGlobal}</span>
                </div>
                <p className="font-serif text-lg sm:text-xl text-white font-normal">
                  {t.heroHeadlineItalic}
                </p>
              </div>
            </div>

            {/* Subtle floating accent tag (not a pill badge) */}
            <div
              className={`hidden sm:flex items-center gap-3 absolute -bottom-5 bg-[#F8F5EF] border border-[#E8DFD1] p-3.5 shadow-md rounded-sm ${
                isRTL ? '-right-5' : '-left-5'
              }`}
            >
              <div className="p-2 bg-[#E8DFD1]/60 text-[#977D4A] rounded-xs">
                <Globe className="w-4 h-4" />
              </div>
              <div className="text-start pr-2">
                <p className="text-xs font-semibold text-[#252525] tracking-wide uppercase">{t.floatingBadgeTitle}</p>
                <p className="text-[11px] text-[#252525]/65">{t.floatingBadgeSub}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
