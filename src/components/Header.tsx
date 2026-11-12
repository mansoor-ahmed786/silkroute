import React, { useState, useEffect } from 'react';
import { Search, Menu, X, ArrowUpRight, MessageSquare, ChevronRight, Layers, Sparkles } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppInquiryUrl } from '../data/siteConfig';
import { FABRIC_COLLECTIONS, getLocalizedCollection } from '../data/collections';
import { useLanguage } from '../i18n/LanguageContext';
import { LanguageSelector } from './LanguageSelector';

interface HeaderProps {
  currentView: string;
  onNavigate: (view: string, detailParam?: string) => void;
  onOpenSearch: () => void;
  onOpenQuote: (productSku?: string, productName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigate,
  onOpenSearch,
  onOpenQuote,
}) => {
  const { language, t, isRTL } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: t.navHome, view: 'home' },
    { label: t.navCollections, view: 'collections' },
    { label: t.navWholesale, view: 'wholesale' },
    { label: t.navHowItWorks, view: 'how-it-works' },
    { label: t.navAbout, view: 'about' },
    { label: t.navContact, view: 'contact' },
  ];

  const handleNavClick = (view: string, detailParam?: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(view, detailParam);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsAppClick = () => {
    const url = getWhatsAppInquiryUrl({
      inquiryDetails: 'Hello Silk Route, I would like to inquire about fabric manufacturing and wholesale supply.',
      language,
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const menuButtonText = isRTL ? 'مینو' : 'MENU';
  const closeButtonText = isRTL ? 'بند کریں' : 'CLOSE';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F8F5EF]/95 backdrop-blur-md border-b border-[#252525]/10 shadow-[0_4px_20px_rgba(0,0,0,0.04)]'
            : 'bg-[#F8F5EF]/95 backdrop-blur-sm border-b border-[#E8DFD1]/80 shadow-xs'
        }`}
      >
        {/* Tier 1: Main Brand Bar */}
        <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-3 sm:px-6 md:px-10 2xl:px-16 py-2.5 sm:py-3.5 flex items-center justify-between gap-2.5 sm:gap-4 md:gap-8">
          {/* Brand Logo & Wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 sm:gap-3 text-left group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B69A62] shrink-0"
          >
            <img
              src="/logos/concept-2-crest.jpg"
              alt="Silk Route Royal Heritage Crest Logo"
              className="w-8 h-8 sm:w-10 sm:h-10 2xl:w-11 2xl:h-11 object-contain rounded-full border border-[#B69A62]/40 shadow-xs shrink-0 transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-2xl md:text-2xl 2xl:text-3xl tracking-[0.10em] sm:tracking-[0.16em] font-medium text-[#252525] uppercase transition-colors group-hover:text-[#977D4A] whitespace-nowrap">
                {SITE_CONFIG.brandName}
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-wider uppercase text-[#977D4A] font-medium hidden sm:block">
                Textile Manufacturer & Wholesale
              </span>
            </div>
          </button>

          {/* Primary Action Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 md:gap-3 shrink-0">
            {/* Multilingual Selector */}
            <LanguageSelector />

            {/* Search Affordance */}
            <button
              onClick={onOpenSearch}
              aria-label={t.searchPlaceholder}
              className="p-2 sm:p-2.5 text-[#252525]/75 hover:text-[#252525] hover:bg-[#E8DFD1]/50 rounded-sm transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B69A62]"
              title="Search fabrics"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Request a Quote Button */}
            <button
              onClick={() => onOpenQuote()}
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 text-xs font-semibold tracking-wider uppercase text-[#F8F5EF] bg-[#252525] hover:bg-[#383838] transition-colors rounded-sm shadow-sm cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>{t.requestCustomQuote}</span>
              <ArrowUpRight className={`w-3.5 h-3.5 text-[#B69A62] ${isRTL ? 'rotate-[-90deg]' : ''}`} />
            </button>

            {/* Clear, Prominent MENU Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs font-semibold tracking-wider uppercase text-[#252525] bg-[#E8DFD1]/60 hover:bg-[#E8DFD1] border border-[#B69A62]/40 rounded-sm transition-colors cursor-pointer shadow-2xs"
            >
              {isMobileMenuOpen ? (
                <>
                  <X className="w-4 h-4 text-[#977D4A]" />
                  <span className="text-[11px] font-bold">{closeButtonText}</span>
                </>
              ) : (
                <>
                  <Menu className="w-4 h-4 text-[#977D4A]" />
                  <span className="text-[11px] font-bold">{menuButtonText}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Tier 2: Dedicated Navigation Bar (Always Visible on Mobile & Big Screen) */}
        <div className="border-t border-[#E8DFD1]/70 bg-[#F4EFE6]/80 backdrop-blur-xs">
          <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-3 sm:px-6 md:px-10 2xl:px-16">
            <nav className="flex items-center justify-start md:justify-center gap-3 sm:gap-6 lg:gap-8 2xl:gap-10 overflow-x-auto no-scrollbar py-2 text-[11px] sm:text-xs 2xl:text-[13px] tracking-wider uppercase font-medium text-[#252525]/85">
              {navLinks.map((link) => {
                const isActive = currentView === link.view;
                return (
                  <button
                    key={link.view}
                    onClick={() => handleNavClick(link.view)}
                    className={`relative py-1 px-2 transition-all whitespace-nowrap shrink-0 rounded-xs cursor-pointer focus-visible:outline-none ${
                      isActive
                        ? 'text-[#252525] font-bold bg-[#E8DFD1]/70 shadow-2xs'
                        : 'text-[#252525]/75 hover:text-[#252525] hover:bg-white/50'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#B69A62]" />
                    )}
                  </button>
                );
              })}

              {/* Quick direct quote link in nav bar */}
              <button
                onClick={() => handleNavClick('quote')}
                className={`relative py-1 px-2.5 transition-all whitespace-nowrap shrink-0 rounded-xs cursor-pointer text-[#977D4A] font-bold ${
                  currentView === 'quote'
                    ? 'bg-[#E8DFD1]/70'
                    : 'hover:bg-white/50'
                }`}
              >
                <span>{isRTL ? 'کوٹیشن' : 'Quote'}</span>
                {currentView === 'quote' && (
                  <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#B69A62]" />
                )}
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Full Royal Navigation Menu Drawer (Z-Index 100, Accessible from Mobile & Desktop) */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-[100] bg-[#252525]/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className={`fixed top-0 bottom-0 w-[90%] max-w-md bg-[#F8F5EF] shadow-2xl p-5 sm:p-7 flex flex-col justify-between border-[#E8DFD1] overflow-y-auto animate-in ${
              isRTL ? 'left-0 border-r slide-in-from-left duration-250' : 'right-0 border-l slide-in-from-right duration-250'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-6">
              {/* Drawer Header */}
              <div className="border-b border-[#E8DFD1] pb-4 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img
                    src="/logos/concept-2-crest.jpg"
                    alt="Silk Route Logo"
                    className="w-9 h-9 object-contain rounded-full border border-[#B69A62]/40"
                  />
                  <div>
                    <span className="font-serif text-lg tracking-[0.16em] uppercase font-semibold text-[#252525] block">
                      {SITE_CONFIG.brandName}
                    </span>
                    <p className="text-[10px] text-[#252525]/60">
                      {t.brandPositioning}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-1 p-1.5 px-2.5 bg-[#E8DFD1]/60 hover:bg-[#E8DFD1] text-[#252525] rounded-xs text-xs font-semibold cursor-pointer"
                >
                  <X className="w-4 h-4 text-[#977D4A]" />
                  <span>{closeButtonText}</span>
                </button>
              </div>

              {/* Language Selector in Drawer */}
              <div className="bg-white p-3.5 border border-[#E8DFD1] rounded-sm">
                <LanguageSelector isMobile={true} />
              </div>

              {/* Main Navigation Links */}
              <div className="space-y-1">
                <p className="text-[10px] uppercase tracking-widest font-semibold text-[#977D4A] px-2 mb-2">
                  {isRTL ? 'مرکزی مینو' : 'Main Menu Navigation'}
                </p>
                <nav className="flex flex-col space-y-1">
                  {navLinks.map((link) => {
                    const isActive = currentView === link.view;
                    return (
                      <button
                        key={link.view}
                        onClick={() => handleNavClick(link.view)}
                        className={`text-start py-2.5 px-3.5 text-xs sm:text-sm tracking-wider uppercase font-semibold transition-all rounded-xs flex items-center justify-between cursor-pointer ${
                          isActive
                            ? 'text-[#252525] bg-[#E8DFD1] border-l-3 border-[#B69A62]'
                            : 'text-[#252525]/85 hover:text-[#252525] hover:bg-white/80'
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronRight className={`w-4 h-4 text-[#977D4A] ${isRTL ? 'rotate-180' : ''}`} />
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Fabric Collections Direct Jump Links */}
              <div className="space-y-2 pt-2 border-t border-[#E8DFD1]">
                <div className="flex items-center justify-between px-2">
                  <p className="text-[10px] uppercase tracking-widest font-semibold text-[#977D4A]">
                    {t.footerCollections} ({FABRIC_COLLECTIONS.length})
                  </p>
                  <button
                    onClick={() => handleNavClick('collections')}
                    className="text-[10px] uppercase tracking-wider text-[#252525]/70 hover:text-[#252525] font-semibold"
                  >
                    {isRTL ? 'سب دیکھیں' : 'View All'}
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {FABRIC_COLLECTIONS.map((c) => {
                    const localized = getLocalizedCollection(c, language);
                    return (
                      <button
                        key={c.id}
                        onClick={() => handleNavClick('collections', c.id)}
                        className="p-2.5 bg-white hover:bg-[#E8DFD1]/40 border border-[#E8DFD1] rounded-xs text-start transition-colors cursor-pointer group"
                      >
                        <p className="font-serif text-xs font-medium text-[#252525] group-hover:text-[#977D4A] line-clamp-1">
                          {localized.name}
                        </p>
                        <p className="text-[10px] text-[#252525]/50 mt-0.5">
                          {c.sampleCount} {t.designsAvailable}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Drawer Footer Actions */}
            <div className="pt-6 border-t border-[#E8DFD1] space-y-3 mt-6">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold tracking-wider uppercase text-[#F8F5EF] bg-[#252525] hover:bg-[#383838] transition-colors rounded-sm shadow-sm cursor-pointer"
              >
                <span>{t.requestCustomQuote}</span>
                <ArrowUpRight className={`w-4 h-4 text-[#B69A62] ${isRTL ? 'rotate-[-90deg]' : ''}`} />
              </button>

              <button
                onClick={handleWhatsAppClick}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold tracking-wider uppercase text-white bg-[#25D366] hover:bg-[#20bd5a] transition-colors rounded-sm shadow-xs cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Business Desk</span>
              </button>

              <p className="text-[11px] text-center text-[#252525]/60">
                {t.globalReach} · {SITE_CONFIG.officialEmail}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
