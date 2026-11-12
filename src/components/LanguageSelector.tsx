import React, { useState, useRef, useEffect } from 'react';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { SUPPORTED_LANGUAGES, SupportedLanguage } from '../i18n/types';

interface LanguageSelectorProps {
  isMobile?: boolean;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ isMobile = false }) => {
  const { language, setLanguage, isRTL } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (code: SupportedLanguage) => {
    setLanguage(code);
    setIsOpen(false);
  };

  const currentInfo = SUPPORTED_LANGUAGES[language];

  if (isMobile) {
    return (
      <div className="space-y-2 pt-2 border-t border-[#E8DFD1]/80">
        <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#252525]/70">
          <Globe className="w-3.5 h-3.5 text-[#B69A62]" />
          <span>Language / Sprache / Langue / اللغة</span>
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {(Object.keys(SUPPORTED_LANGUAGES) as SupportedLanguage[]).map((code) => {
            const info = SUPPORTED_LANGUAGES[code];
            const isSelected = language === code;
            return (
              <button
                key={code}
                onClick={() => handleSelect(code)}
                className={`py-2 px-2.5 rounded-xs text-xs font-medium transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer border ${
                  isSelected
                    ? 'bg-[#252525] text-[#F8F5EF] border-[#252525] font-semibold'
                    : 'bg-white text-[#252525] border-[#E8DFD1] hover:border-[#B69A62]'
                }`}
              >
                <span>{info.nativeName}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Change website language"
        className="flex items-center gap-1.5 py-1.5 px-2.5 rounded-sm bg-[#F8F5EF] hover:bg-[#E8DFD1]/50 border border-[#E8DFD1] text-xs font-medium text-[#252525] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B69A62]"
      >
        <Globe className="w-3.5 h-3.5 text-[#B69A62] shrink-0" />
        <span className="font-semibold tracking-wider uppercase text-[11px]">{currentInfo.flag}</span>
        <span className="text-[12px] hidden xl:inline text-[#252525]/80">{currentInfo.nativeName}</span>
        <ChevronDown className={`w-3 h-3 text-[#252525]/60 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div
          className={`absolute ${
            isRTL ? 'left-0' : 'right-0'
          } mt-2 w-48 rounded-sm bg-white border border-[#E8DFD1] shadow-xl z-50 py-1.5 animate-in fade-in zoom-in-95 duration-150`}
        >
          <div className="px-3 py-1.5 text-[10px] uppercase tracking-wider font-semibold text-[#977D4A] border-b border-[#E8DFD1]/60">
            Select Language
          </div>
          {(Object.keys(SUPPORTED_LANGUAGES) as SupportedLanguage[]).map((code) => {
            const info = SUPPORTED_LANGUAGES[code];
            const isSelected = language === code;
            return (
              <button
                key={code}
                onClick={() => handleSelect(code)}
                className={`w-full text-left px-3.5 py-2 text-xs flex items-center justify-between transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-[#F8F5EF] text-[#252525] font-semibold'
                    : 'text-[#252525]/80 hover:bg-[#F8F5EF] hover:text-[#252525]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-5 font-mono text-[10px] text-[#977D4A] font-semibold">{info.flag}</span>
                  <span className={info.dir === 'rtl' ? 'font-serif text-[13px]' : ''}>{info.nativeName}</span>
                </div>
                {isSelected && <Check className="w-3.5 h-3.5 text-[#B69A62]" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
