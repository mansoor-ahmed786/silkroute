import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { SupportedLanguage, SUPPORTED_LANGUAGES, LanguageInfo } from './types';
import { TRANSLATIONS, TranslationDictionary } from './translations';

interface LanguageContextType {
  language: SupportedLanguage;
  languageInfo: LanguageInfo;
  setLanguage: (lang: SupportedLanguage) => void;
  t: TranslationDictionary;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'silk_route_selected_language';

/**
 * Detects visitor's preferred language from:
 * 1. Stored user preference
 * 2. URL path (/fr, /de, /es, /ar, /ur, /en)
 * 3. Browser navigator.languages / navigator.language
 * 4. Fallback to 'en'
 */
function detectInitialLanguage(): SupportedLanguage {
  // 1. Check LocalStorage
  if (typeof window !== 'undefined') {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as SupportedLanguage;
      if (stored && SUPPORTED_LANGUAGES[stored]) {
        return stored;
      }
    } catch {
      // LocalStorage access may fail in restricted sandboxes
    }

    // 2. Check URL pathname or hash for language segment
    const path = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();
    const candidatePaths = [path, hash];

    for (const p of candidatePaths) {
      for (const code of Object.keys(SUPPORTED_LANGUAGES) as SupportedLanguage[]) {
        if (p.startsWith(`/${code}/`) || p === `/${code}` || p.startsWith(`#/${code}/`) || p === `#/${code}`) {
          return code;
        }
      }
    }

    // 3. Check Browser Languages
    const navLanguages: readonly string[] =
      window.navigator.languages && window.navigator.languages.length > 0
        ? window.navigator.languages
        : [window.navigator.language || 'en'];

    for (const navLang of navLanguages) {
      const clean = navLang.toLowerCase().split('-')[0];
      if (clean === 'fr') return 'fr';
      if (clean === 'de') return 'de';
      if (clean === 'es') return 'es';
      if (clean === 'ar') return 'ar';
      if (clean === 'ur') return 'ur';
      if (clean === 'en') return 'en';
    }
  }

  // 4. Fallback to English
  return 'en';
}

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<SupportedLanguage>(detectInitialLanguage);

  const setLanguage = (newLang: SupportedLanguage) => {
    if (!SUPPORTED_LANGUAGES[newLang]) return;
    setLanguageState(newLang);

    try {
      localStorage.setItem(STORAGE_KEY, newLang);
    } catch {
      // ignore storage error
    }

    // Update document HTML attributes
    const info = SUPPORTED_LANGUAGES[newLang];
    document.documentElement.lang = info.locale;
    document.documentElement.dir = info.dir;

    // Sync URL path for SEO-friendly language routes
    const currentHash = window.location.hash.replace(/^#\/?(en|fr|de|es|ar|ur)\/?/, '');
    const cleanView = currentHash.replace(/^#/, '') || '';
    
    // Update path and title
    const newPath = cleanView ? `/${newLang}/${cleanView}` : `/${newLang}/`;
    window.history.replaceState(null, '', newPath);
  };

  useEffect(() => {
    const info = SUPPORTED_LANGUAGES[language];
    document.documentElement.lang = info.locale;
    document.documentElement.dir = info.dir;
  }, [language]);

  const value: LanguageContextType = {
    language,
    languageInfo: SUPPORTED_LANGUAGES[language],
    setLanguage,
    t: TRANSLATIONS[language] || TRANSLATIONS.en,
    isRTL: SUPPORTED_LANGUAGES[language].dir === 'rtl',
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
