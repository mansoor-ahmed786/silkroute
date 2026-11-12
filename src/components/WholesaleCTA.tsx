import React from 'react';
import { ArrowUpRight, MessageSquare } from 'lucide-react';
import { getWhatsAppInquiryUrl } from '../data/siteConfig';
import { useLanguage } from '../i18n/LanguageContext';

interface WholesaleCTAProps {
  onRequestQuote: (inquiryType?: string) => void;
}

export const WholesaleCTA: React.FC<WholesaleCTAProps> = ({ onRequestQuote }) => {
  const { language, t, isRTL } = useLanguage();

  const handleWhatsApp = () => {
    const url = getWhatsAppInquiryUrl({
      inquiryDetails: 'General B2B fabric manufacturing and wholesale supply partnership inquiry.',
      language,
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="my-16 sm:my-24 bg-[#252525] text-[#F8F5EF] rounded-sm overflow-hidden relative border border-[#B69A62]/30 shadow-xl">
      <div className="absolute inset-0 bg-[radial-gradient(#B69A62_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="relative max-w-5xl 2xl:max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-10 sm:py-16 md:py-20 2xl:py-24 text-center space-y-6">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#B69A62]">
          <span>{t.globalReach}</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl 2xl:text-6xl font-normal text-white max-w-3xl 2xl:max-w-4xl mx-auto leading-tight">
          {t.introHeading}
        </h2>

        <p className="text-sm sm:text-base 2xl:text-lg text-[#F8F5EF]/75 max-w-2xl 2xl:max-w-3xl mx-auto leading-relaxed font-light">
          {t.introP1}
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-2.5 sm:gap-3.5">
          <button
            onClick={() => onRequestQuote('Manufacturing & Wholesale')}
            className="inline-flex items-center justify-center gap-2 py-3.5 px-6 text-xs font-semibold tracking-wider uppercase text-[#252525] bg-[#B69A62] hover:bg-[#c4a974] transition-colors rounded-xs shadow-md cursor-pointer text-center"
          >
            <span>{t.requestCustomQuote}</span>
            <ArrowUpRight className={`w-4 h-4 text-[#252525] ${isRTL ? '-scale-x-100' : ''}`} />
          </button>

          <button
            onClick={() => onRequestQuote('Textile Manufacturing')}
            className="inline-flex items-center justify-center gap-2 py-3.5 px-6 text-xs font-semibold tracking-wider uppercase text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors rounded-xs cursor-pointer text-center"
          >
            <span>{t.ctaManufacturingInquiries}</span>
          </button>

          <button
            onClick={() => onRequestQuote('Wholesale Fabric Supply')}
            className="inline-flex items-center justify-center gap-2 py-3.5 px-6 text-xs font-semibold tracking-wider uppercase text-white bg-transparent hover:bg-white/10 border border-white/20 transition-colors rounded-xs cursor-pointer text-center"
          >
            <span>{t.ctaWholesaleInquiries}</span>
          </button>

          <button
            onClick={handleWhatsApp}
            className="inline-flex items-center justify-center gap-2 py-3.5 px-5 text-xs font-semibold tracking-wider uppercase text-white bg-[#25D366] hover:bg-[#20bd5a] transition-colors rounded-xs cursor-pointer text-center"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp</span>
          </button>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-[11px] text-[#F8F5EF]/60 uppercase tracking-wider">
          <span>{t.trustMfg}</span>
          <span aria-hidden="true">·</span>
          <span>{t.ctaManufacturingInquiries}</span>
          <span aria-hidden="true">·</span>
          <span>{t.trustWholesale}</span>
          <span aria-hidden="true">·</span>
          <span>{t.globalReach}</span>
        </div>
      </div>
    </section>
  );
};
