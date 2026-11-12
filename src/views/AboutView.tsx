import React from 'react';
import { HeartHandshake, Globe, Factory, Package } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface AboutViewProps {
  onRequestQuote: (inquiryType?: string) => void;
  onExploreCollections: () => void;
  onNavigateContact: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onRequestQuote,
  onExploreCollections,
  onNavigateContact,
}) => {
  const { t, isRTL } = useLanguage();

  return (
    <div className="pt-28 sm:pt-32 pb-16 sm:pb-20 md:pt-36 md:pb-28 2xl:pt-40 2xl:pb-32">
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 2xl:px-16 space-y-12 sm:space-y-16 2xl:space-y-20">
        {/* Brand Editorial Hero */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#B69A62]">
            <span>{t.aboutHeroKicker}</span>
            <span aria-hidden="true">·</span>
            <span>{t.globalReach}</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl text-[#252525] font-normal leading-tight text-balance">
            {t.aboutHeroHeading}
          </h1>
          <p className="text-base sm:text-lg 2xl:text-xl text-[#252525]/75 font-light leading-relaxed">
            {t.aboutHeroSub}
          </p>
        </div>

        {/* Editorial Split Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 relative">
            <div className="overflow-hidden rounded-sm border border-[#E8DFD1] shadow-md bg-white">
              <img
                src="/src/assets/images/collection_luxury_silk_1793894349443.jpg"
                alt="Silk Route luxury fabric manufacturing and wholesale supply rolls"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="mt-3 text-right">
              <span className="text-[11px] font-mono text-[#252525]/50 uppercase tracking-widest">
                {t.aboutEditorialTag}
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#977D4A]">
              {t.aboutPhilosophyKicker}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#252525]">
              {t.aboutPhilosophyHeading}
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-[#252525]/80 font-light leading-relaxed">
              <p>
                {t.aboutP1}
              </p>
              <p>
                {t.aboutP2}
              </p>
            </div>

            <div className="pt-2 grid grid-cols-2 gap-4">
              <div className="p-4 bg-white border border-[#E8DFD1] rounded-xs">
                <p className="font-serif text-lg text-[#252525]">{t.aboutPillarMfgTitle}</p>
                <p className="text-[11px] text-[#252525]/65 mt-1">{t.aboutPillarMfgDesc}</p>
              </div>
              <div className="p-4 bg-white border border-[#E8DFD1] rounded-xs">
                <p className="font-serif text-lg text-[#252525]">{t.aboutPillarWholesaleTitle}</p>
                <p className="text-[11px] text-[#252525]/65 mt-1">{t.aboutPillarWholesaleDesc}</p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Global Engagement */}
        <div className="space-y-8">
          <div className="border-b border-[#E8DFD1] pb-3">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#252525]">
              {t.aboutFoundationsHeading}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-[#E8DFD1] p-6 rounded-sm space-y-3">
              <div className="w-10 h-10 rounded-xs bg-[#F8F5EF] flex items-center justify-center text-[#977D4A]">
                <Factory className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-normal text-[#252525]">{t.aboutPillarMfgTitle}</h3>
              <p className="text-xs text-[#252525]/75 leading-relaxed">
                {t.aboutPillarMfgDesc}
              </p>
            </div>

            <div className="bg-white border border-[#E8DFD1] p-6 rounded-sm space-y-3">
              <div className="w-10 h-10 rounded-xs bg-[#F8F5EF] flex items-center justify-center text-[#977D4A]">
                <Package className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-normal text-[#252525]">{t.aboutPillarWholesaleTitle}</h3>
              <p className="text-xs text-[#252525]/75 leading-relaxed">
                {t.aboutPillarWholesaleDesc}
              </p>
            </div>

            <div className="bg-white border border-[#E8DFD1] p-6 rounded-sm space-y-3">
              <div className="w-10 h-10 rounded-xs bg-[#F8F5EF] flex items-center justify-center text-[#977D4A]">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-normal text-[#252525]">{t.introWorldwideTitle}</h3>
              <p className="text-xs text-[#252525]/75 leading-relaxed">
                {t.introWorldwideDesc}
              </p>
            </div>

            <div className="bg-white border border-[#E8DFD1] p-6 rounded-sm space-y-3">
              <div className="w-10 h-10 rounded-xs bg-[#F8F5EF] flex items-center justify-center text-[#977D4A]">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-normal text-[#252525]">{t.globalReach}</h3>
              <p className="text-xs text-[#252525]/75 leading-relaxed">
                {t.heroSupportingText}
              </p>
            </div>
          </div>
        </div>

        {/* Action Callout */}
        <div className="p-8 sm:p-10 bg-white border border-[#E8DFD1] rounded-sm text-center space-y-4">
          <h3 className="font-serif text-2xl sm:text-3xl text-[#252525] font-normal">
            {t.aboutActionHeading}
          </h3>
          <p className="text-xs sm:text-sm text-[#252525]/75 max-w-xl mx-auto leading-relaxed font-light">
            {t.aboutActionSub}
          </p>
          <div className="pt-2 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-2.5 sm:gap-4">
            <button
              onClick={() => onRequestQuote('Manufacturing & Wholesale')}
              className="py-3 px-6 text-xs font-semibold uppercase tracking-wider text-[#F8F5EF] bg-[#252525] hover:bg-[#383838] transition-colors rounded-xs shadow-sm cursor-pointer text-center"
            >
              {t.requestCustomQuote}
            </button>
            <button
              onClick={() => onRequestQuote('Textile Manufacturing')}
              className="py-3 px-6 text-xs font-semibold tracking-wider uppercase text-[#252525] bg-[#E8DFD1]/60 hover:bg-[#E8DFD1] border border-[#B69A62]/40 transition-colors rounded-xs cursor-pointer text-center"
            >
              {t.ctaManufacturingInquiries}
            </button>
            <button
              onClick={onExploreCollections}
              className="py-3 px-6 text-xs font-semibold uppercase tracking-wider text-[#252525] bg-[#F8F5EF] hover:bg-[#E8DFD1] border border-[#E8DFD1] transition-colors rounded-xs cursor-pointer text-center"
            >
              {t.ctaExploreCollections}
            </button>
            <button
              onClick={onNavigateContact}
              className="py-3 px-6 text-xs font-semibold uppercase tracking-wider text-[#252525] bg-transparent hover:bg-[#E8DFD1]/40 border border-[#252525]/30 transition-colors rounded-xs cursor-pointer text-center"
            >
              {t.ctaContactSilkRoute}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
