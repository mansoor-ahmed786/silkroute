import React from 'react';
import { Globe, Mail, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';
import { FABRIC_COLLECTIONS, getLocalizedCollection } from '../data/collections';
import { useLanguage } from '../i18n/LanguageContext';

interface FooterProps {
  onNavigate: (view: string, detailParam?: string) => void;
  onOpenQuote: () => void;
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenQuote,
  onOpenLegal,
}) => {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-[#252525] text-[#F8F5EF] pt-14 sm:pt-16 pb-12 2xl:pt-20 2xl:pb-16 border-t border-[#B69A62]/20">
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 2xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Brand Manifesto & Identity (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logos/concept-2-crest.jpg"
                alt="Silk Route Royal Heritage Crest Logo"
                className="w-11 h-11 object-contain rounded-full border border-[#B69A62]/40 shadow-sm shrink-0"
              />
              <span className="font-serif text-2xl tracking-[0.16em] uppercase font-semibold text-white block">
                {t.brandName}
              </span>
            </div>
            <p className="text-xs uppercase tracking-widest text-[#B69A62] font-medium">
              {t.introKicker}
            </p>
            <p className="text-xs text-[#F8F5EF]/70 leading-relaxed font-light">
              {t.footerDesc}
            </p>

            <div className="pt-2 text-xs text-[#F8F5EF]/80 space-y-2">
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-[#B69A62]" />
                <span>{t.globalReach}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#B69A62]" />
                <span>{SITE_CONFIG.officialEmail}</span>
              </div>
            </div>
          </div>

          {/* Collections (Col 5-7) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#B69A62]">
              {t.footerCollections}
            </p>
            <ul className="space-y-2 text-xs text-[#F8F5EF]/75">
              {FABRIC_COLLECTIONS.map((c) => {
                const localized = getLocalizedCollection(c, language);
                return (
                  <li key={c.id}>
                    <button
                      onClick={() => {
                        onNavigate('collections', c.id);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="hover:text-white transition-colors cursor-pointer text-left"
                    >
                      {localized.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Business Solutions & How We Work (Col 8-9) */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#B69A62]">
              {t.footerB2BServices}
            </p>
            <ul className="space-y-2 text-xs text-[#F8F5EF]/75">
              <li>
                <button
                  onClick={() => {
                    onNavigate('wholesale');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.navWholesale}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('how-it-works');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.navHowItWorks}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.navAbout}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.navContact}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onOpenQuote();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-[#B69A62]"
                >
                  {t.requestCustomQuote}
                </button>
              </li>
            </ul>
          </div>

          {/* Sourcing Hubs & Social (Col 10-12) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#B69A62]">
              {t.footerLiaisonDesks}
            </p>
            <ul className="space-y-1.5 text-xs text-[#F8F5EF]/70">
              {SITE_CONFIG.internationalShowrooms.map((hub) => (
                <li key={hub} className="flex items-center gap-2">
                  <MapPin className="w-3 h-3 text-[#B69A62] shrink-0" />
                  <span>{hub}</span>
                </li>
              ))}
            </ul>

            <div className="pt-3">
              <p className="text-[11px] uppercase tracking-wider text-[#F8F5EF]/50 mb-2">
                {t.footerSocial}
              </p>
              <div className="flex items-center gap-3 text-xs text-[#F8F5EF]/80">
                <a
                  href={SITE_CONFIG.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#B69A62] transition-colors"
                >
                  LinkedIn
                </a>
                <span>·</span>
                <a
                  href={SITE_CONFIG.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#B69A62] transition-colors"
                >
                  Instagram
                </a>
                <span>·</span>
                <a
                  href={SITE_CONFIG.socialLinks.pinterest}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#B69A62] transition-colors"
                >
                  Lookbook
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F8F5EF]/50">
          <p>© {new Date().getFullYear()} {t.brandName} Textiles. {t.footerCopyright}</p>

          <div className="flex items-center gap-5">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {t.footerPrivacy}
            </button>
            <span>·</span>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {t.footerTerms}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
