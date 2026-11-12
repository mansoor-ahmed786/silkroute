import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { getWhatsAppInquiryUrl, SITE_CONFIG } from '../data/siteConfig';
import { useLanguage } from '../i18n/LanguageContext';

export const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, t, isRTL } = useLanguage();

  const handleOpenWhatsApp = () => {
    const url = getWhatsAppInquiryUrl({ language });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`fixed bottom-6 ${isRTL ? 'left-6 items-start' : 'right-6 items-end'} z-40 flex flex-col`}>
      {/* Expanded quick contact card */}
      {isOpen && (
        <div className="mb-3 w-72 bg-white border border-[#E8DFD1] p-4 rounded-sm shadow-xl space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-start justify-between border-b border-[#E8DFD1] pb-2">
            <div>
              <p className="font-serif text-sm font-semibold text-[#252525]">
                {t.brandName} B2B Desk
              </p>
              <p className="text-[11px] text-[#252525]/60">
                {t.whatsappDeskSub}
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#252525]/50 hover:text-[#252525] p-1 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="text-xs text-[#252525]/75 leading-relaxed">
            {t.whatsappDeskDesc}
          </p>

          <button
            onClick={() => {
              setIsOpen(false);
              handleOpenWhatsApp();
            }}
            className="w-full flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20bd5a] transition-colors rounded-xs shadow-xs cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{t.openInWhatsappBtn}</span>
          </button>
        </div>
      )}

      {/* Primary Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Contact Silk Route via WhatsApp"
        className="group relative flex items-center gap-2.5 bg-[#252525] hover:bg-[#383838] text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.15)] border border-[#B69A62]/40 transition-all duration-300 hover:scale-103 cursor-pointer"
      >
        <span className="w-2 h-2 rounded-full bg-[#25D366] shrink-0" />
        <MessageSquare className="w-5 h-5 text-[#25D366]" />
        <span className="hidden sm:inline text-xs font-semibold uppercase tracking-wider text-[#F8F5EF]">
          WhatsApp B2B Desk
        </span>
      </button>
    </div>
  );
};
