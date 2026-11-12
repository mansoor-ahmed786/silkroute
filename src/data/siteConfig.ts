/**
 * Silk Route - Central Website & Business Configuration
 * Edit contact information, WhatsApp numbers, and global B2B policies here.
 */

export interface SiteConfig {
  brandName: string;
  tagline: string;
  positioning: string;
  subTitle: string;
  globalReach: string;
  whatsAppNumber: string; // International format without + or spaces for wa.me links
  whatsAppDisplayNumber: string; // Formatted for human reading
  officialEmail: string;
  headquarters: string;
  internationalShowrooms: string[];
  businessHours: string;
  moqStatement: string;
  socialLinks: {
    instagram: string;
    linkedin: string;
    pinterest: string;
  };
}

export const SITE_CONFIG: SiteConfig = {
  brandName: "Silk Route",
  tagline: "Fabric Manufacturing & Global Wholesale Supply",
  positioning: "Silk Route — Textile Manufacturer & Global Wholesale Partner",
  subTitle: "Your Global Partner in Fabric Manufacturing & Wholesale Supply.",
  globalReach: "Serving Textile Businesses Worldwide",
  // Primary WhatsApp Business number:
  whatsAppNumber: "447700900077",
  whatsAppDisplayNumber: "+44 (0) 7700 900077",
  officialEmail: "wholesale@silkroutetextiles.com",
  headquarters: "International Fabric Manufacturing & Wholesale Supply Center",
  internationalShowrooms: [
    "Global Commercial Coordination Desk",
    "Worldwide Sampling & Buyer Desk",
    "International Logistics & Freight Hub"
  ],
  businessHours: "Monday – Saturday: 08:30 – 18:30 GMT (Worldwide Buyer Support)",
  moqStatement: "Minimum order quantities, manufacturing feasibility, pricing, production lead times and shipping arrangements are customized according to each buyer's requirements.",
  socialLinks: {
    instagram: "https://instagram.com/silkroute_wholesale",
    linkedin: "https://linkedin.com/company/silkroute-textiles",
    pinterest: "https://pinterest.com/silkroutetextiles"
  }
};

import { SupportedLanguage } from '../i18n/types';
import { TRANSLATIONS } from '../i18n/translations';

/**
 * Generates an official WhatsApp click-to-chat URL using wa.me format
 * with compliant URL encoding and multilingual message templates.
 */
export function getWhatsAppInquiryUrl(params?: {
  productName?: string;
  sku?: string;
  country?: string;
  inquiryDetails?: string;
  language?: SupportedLanguage;
}): string {
  const number = SITE_CONFIG.whatsAppNumber;
  const lang: SupportedLanguage = params?.language || 'en';
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  if (params && params.productName && params.sku) {
    const country = params.country?.trim() || '[Customer Country]';
    const message = t.whatsappProductInquiry({
      productName: params.productName,
      sku: params.sku,
      country,
    });
    return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  }

  if (params && params.inquiryDetails) {
    const generalMsg = t.whatsappGeneralInquiry(params.inquiryDetails);
    return `https://wa.me/${number}?text=${encodeURIComponent(generalMsg)}`;
  }

  const defaultMsg = t.whatsappGeneralInquiry();
  return `https://wa.me/${number}?text=${encodeURIComponent(defaultMsg)}`;
}
