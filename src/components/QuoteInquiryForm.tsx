import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, Copy, Check, MessageSquare, AlertCircle, FileText, ArrowRight, Globe } from 'lucide-react';
import { FABRIC_COLLECTIONS, getLocalizedCollection } from '../data/collections';
import { SITE_CONFIG, getWhatsAppInquiryUrl } from '../data/siteConfig';
import { useLanguage } from '../i18n/LanguageContext';

interface QuoteInquiryFormProps {
  initialSku?: string;
  initialProductName?: string;
  initialInquiryType?: string;
  onSuccess?: () => void;
}

export interface InquiryData {
  fullName: string;
  companyName: string;
  email: string;
  country: string;
  businessType: string;
  inquiryNature: string;
  category: string;
  sku: string;
  quantity: string;
  quantityUnit: string;
  supplyType: string;
  message: string;
}

export const QuoteInquiryForm: React.FC<QuoteInquiryFormProps> = ({
  initialSku = '',
  initialProductName = '',
  initialInquiryType = 'Wholesale Fabric Supply',
}) => {
  const { language, t, isRTL } = useLanguage();

  const [formData, setFormData] = useState<InquiryData>({
    fullName: '',
    companyName: '',
    email: '',
    country: 'United States',
    businessType: 'Boutique',
    inquiryNature: initialInquiryType,
    category: 'Premium Lawn',
    sku: initialSku,
    quantity: '',
    quantityUnit: 'Meters',
    supplyType: 'Ready Stock Collections',
    message: initialProductName ? `Inquiring about ${initialProductName} (${initialSku}) for commercial production.` : '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof InquiryData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [inquiryReference, setInquiryReference] = useState('');

  useEffect(() => {
    if (initialSku) {
      setFormData((prev) => ({
        ...prev,
        sku: initialSku,
        message: initialProductName
          ? `Inquiring about ${initialProductName} (${initialSku}) for upcoming commercial production.`
          : prev.message,
      }));
    }
    if (initialInquiryType) {
      setFormData((prev) => ({
        ...prev,
        inquiryNature: initialInquiryType,
      }));
    }
  }, [initialSku, initialProductName, initialInquiryType]);

  const validate = (): boolean => {
    const errs: Partial<Record<keyof InquiryData, string>> = {};

    if (!formData.fullName.trim()) errs.fullName = t.errNameRequired;
    if (!formData.companyName.trim()) errs.companyName = t.errCompanyRequired;
    if (!formData.email.trim()) {
      errs.email = t.errEmailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = t.errEmailInvalid;
    }
    if (!formData.country.trim()) errs.country = t.errCountryRequired;
    if (!formData.quantity.trim()) {
      errs.quantity = t.errQuantityRequired;
    } else if (isNaN(Number(formData.quantity)) || Number(formData.quantity) <= 0) {
      errs.quantity = t.errQuantityNumeric;
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Generate commercial inquiry reference code
    const refCode = `SR-QUOTE-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setInquiryReference(refCode);
    setIsSubmitted(true);
  };

  const getFormattedSummary = () => {
    return `SILK ROUTE COMMERCIAL QUOTE REQUEST [${inquiryReference}]
----------------------------------------
Name: ${formData.fullName}
Company: ${formData.companyName}
Business Email: ${formData.email}
Destination Country: ${formData.country}
Business Type: ${formData.businessType}
Inquiry Nature: ${formData.inquiryNature}
Fabric Category: ${formData.category}
Product Reference / SKU: ${formData.sku || 'Custom Production / General Catalogue'}
Estimated Order Quantity: ${formData.quantity} ${formData.quantityUnit}
Required Supply Type: ${formData.supplyType}
Special Technical Specifications:
${formData.message || 'Standard commercial quotation requested.'}
----------------------------------------
Prepared for Silk Route Manufacturing & Global Wholesale Desk`;
  };

  const handleCopySummary = () => {
    navigator.clipboard.writeText(getFormattedSummary());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendToWhatsApp = () => {
    const text = `Hello Silk Route Commercial Desk,\n\nI have generated Quote Request ${inquiryReference}:\n\n` +
      `Company: ${formData.companyName} (${formData.country})\n` +
      `Contact: ${formData.fullName} - ${formData.email}\n` +
      `Business Type: ${formData.businessType}\n` +
      `Nature: ${formData.inquiryNature}\n` +
      `Category: ${formData.category}\n` +
      `Product SKU: ${formData.sku || 'Custom Production / Catalogue'}\n` +
      `Quantity: ${formData.quantity} ${formData.quantityUnit}\n` +
      `Supply Type: ${formData.supplyType}\n\n` +
      `Notes: ${formData.message}\n\n` +
      `Please provide customized quotation, MOQ, and lead time schedule.`;
    window.open(`https://wa.me/${SITE_CONFIG.whatsAppNumber}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  if (isSubmitted) {
    return (
      <div className="bg-white border border-[#E8DFD1] p-6 sm:p-10 rounded-sm shadow-sm space-y-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-[#B69A62]/15 border border-[#B69A62]/40 flex items-center justify-center shrink-0 text-[#977D4A]">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-serif text-2xl text-[#252525]">{t.quotePreparedTitle}</h3>
              <span className="font-mono text-xs px-2 py-0.5 bg-[#F8F5EF] border border-[#E8DFD1] text-[#977D4A] font-semibold">
                {inquiryReference}
              </span>
            </div>
            <p className="text-xs text-[#252525]/70 mt-1 leading-relaxed">
              {t.quotePreparedDesc}
            </p>
          </div>
        </div>

        {/* Formatted inquiry review box */}
        <div className="bg-[#F8F5EF] border border-[#E8DFD1] p-5 rounded-xs font-mono text-[11px] text-[#252525]/85 space-y-1.5 whitespace-pre-wrap leading-relaxed overflow-x-auto">
          {getFormattedSummary()}
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
          <button
            onClick={handleSendToWhatsApp}
            className="flex items-center justify-center gap-2 py-3 px-5 text-xs font-semibold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20bd5a] transition-colors rounded-xs shadow-sm cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>{t.sendToWhatsappDeskBtn}</span>
          </button>

          <button
            onClick={handleCopySummary}
            className="flex items-center justify-center gap-2 py-3 px-5 text-xs font-semibold uppercase tracking-wider text-[#252525] bg-white hover:bg-[#E8DFD1]/50 border border-[#252525]/20 transition-colors rounded-xs cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4 text-[#977D4A]" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? t.quoteCopiedNotice : t.copyQuoteSummaryBtn}</span>
          </button>
        </div>

        <div className="pt-4 border-t border-[#E8DFD1] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#252525]/60 gap-2">
          <span>Global Commercial Desk: {SITE_CONFIG.officialEmail}</span>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData((prev) => ({ ...prev, quantity: '', message: '' }));
            }}
            className="text-[#977D4A] hover:underline cursor-pointer"
          >
            {t.submitAnotherQuoteBtn}
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-[#E8DFD1] p-6 sm:p-10 rounded-sm shadow-sm space-y-6">
      <div className="border-b border-[#E8DFD1] pb-5 space-y-1.5">
        <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#252525]">
          {t.quoteFormHeading}
        </h3>
        <p className="text-xs text-[#252525]/75 leading-relaxed">
          {t.quoteFormSub}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* 1. Full Name */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#252525]/80 mb-1.5">
            {t.formStep1}
          </label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="e.g. Katherine Reynolds"
            className={`w-full text-xs p-3 bg-[#F8F5EF] border ${
              errors.fullName ? 'border-red-400' : 'border-[#E8DFD1]'
            } rounded-xs text-[#252525] focus:outline-none focus:border-[#B69A62]`}
          />
          {errors.fullName && <p className="text-[11px] text-red-600 mt-1">{errors.fullName}</p>}
        </div>

        {/* 2. Company / Business Name */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#252525]/80 mb-1.5">
            {t.formStep2}
          </label>
          <input
            type="text"
            value={formData.companyName}
            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            placeholder="e.g. Reynolds Apparel Group"
            className={`w-full text-xs p-3 bg-[#F8F5EF] border ${
              errors.companyName ? 'border-red-400' : 'border-[#E8DFD1]'
            } rounded-xs text-[#252525] focus:outline-none focus:border-[#B69A62]`}
          />
          {errors.companyName && <p className="text-[11px] text-red-600 mt-1">{errors.companyName}</p>}
        </div>

        {/* 3. Business Email */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#252525]/80 mb-1.5">
            {t.formStep3}
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="e.g. sourcing@reynoldsapparel.com"
            className={`w-full text-xs p-3 bg-[#F8F5EF] border ${
              errors.email ? 'border-red-400' : 'border-[#E8DFD1]'
            } rounded-xs text-[#252525] focus:outline-none focus:border-[#B69A62]`}
          />
          {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
        </div>

        {/* 4. Destination Country */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#252525]/80 mb-1.5">
            {t.formStep4}
          </label>
          <select
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            className="w-full text-xs p-3 bg-[#F8F5EF] border border-[#E8DFD1] rounded-xs text-[#252525] focus:outline-none focus:border-[#B69A62]"
          >
            <option value="Worldwide">Worldwide / Global Destination</option>
            <option value="United States">United States</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
            <option value="Germany">Germany</option>
            <option value="France">France</option>
            <option value="Spain">Spain</option>
            <option value="Italy">Italy</option>
            <option value="United Arab Emirates">United Arab Emirates</option>
            <option value="Saudi Arabia">Saudi Arabia</option>
            <option value="Other International">Other Destination</option>
          </select>
        </div>

        {/* 5. Business Type */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#252525]/80 mb-1.5">
            {t.formStep5}
          </label>
          <select
            value={formData.businessType}
            onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
            className="w-full text-xs p-3 bg-[#F8F5EF] border border-[#E8DFD1] rounded-xs text-[#252525] focus:outline-none focus:border-[#B69A62]"
          >
            <option value="Wholesaler">Fabric Wholesaler</option>
            <option value="Distributor">Textile Distributor</option>
            <option value="Clothing Brand">Clothing Brand / Apparel Label</option>
            <option value="Boutique">Fashion Boutique Owner</option>
            <option value="Bulk Buyer">Bulk Fabric Buyer</option>
            <option value="Other">Other Textile Enterprise</option>
          </select>
        </div>

        {/* 6. Inquiry Nature */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#252525]/80 mb-1.5">
            {t.formStep6}
          </label>
          <select
            value={formData.inquiryNature}
            onChange={(e) => setFormData({ ...formData, inquiryNature: e.target.value })}
            className="w-full text-xs p-3 bg-[#F8F5EF] border border-[#E8DFD1] rounded-xs text-[#252525] focus:outline-none focus:border-[#B69A62]"
          >
            <option value="Textile Manufacturing">Textile Manufacturing</option>
            <option value="Custom Fabric Manufacturing">Custom Fabric Manufacturing</option>
            <option value="Wholesale Fabric Supply">Wholesale Fabric Supply</option>
            <option value="Bulk Order Management">Bulk Order Management</option>
            <option value="Ready Stock Collections">Ready Stock Collections</option>
            <option value="Order-Based Production">Order-Based Production</option>
            <option value="Customized Buyer Requirements">Customized Buyer Requirements</option>
            <option value="International Business Partnerships">International Business Partnerships</option>
          </select>
        </div>

        {/* 7. Interested Fabric Category */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#252525]/80 mb-1.5">
            {t.formStep7}
          </label>
          <select
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="w-full text-xs p-3 bg-[#F8F5EF] border border-[#E8DFD1] rounded-xs text-[#252525] focus:outline-none focus:border-[#B69A62]"
          >
            {FABRIC_COLLECTIONS.map((c) => {
              const localized = getLocalizedCollection(c, language);
              return (
                <option key={c.id} value={c.name}>
                  {localized.name}
                </option>
              );
            })}
            <option value="Multiple Fabric Categories">Multiple Categories / Comprehensive Sourcing</option>
          </select>
        </div>

        {/* 8. Product Reference / SKU */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#252525]/80 mb-1.5">
            {t.formStep8}
          </label>
          <input
            type="text"
            value={formData.sku}
            onChange={(e) => setFormData({ ...formData, sku: e.target.value })}
            placeholder="e.g. SR-LWN-8801"
            className="w-full text-xs p-3 bg-[#F8F5EF] border border-[#E8DFD1] rounded-xs text-[#252525] focus:outline-none focus:border-[#B69A62]"
          />
        </div>

        {/* 9. Estimated Order Quantity + Unit */}
        <div className="sm:col-span-2">
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#252525]/80 mb-1.5">
            {t.formStep9}
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={formData.quantity}
              onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
              placeholder="e.g. 500"
              className={`w-3/4 text-xs p-3 bg-[#F8F5EF] border ${
                errors.quantity ? 'border-red-400' : 'border-[#E8DFD1]'
              } rounded-xs text-[#252525] focus:outline-none focus:border-[#B69A62]`}
            />
            <select
              value={formData.quantityUnit}
              onChange={(e) => setFormData({ ...formData, quantityUnit: e.target.value })}
              className="w-1/4 text-xs p-3 bg-[#F8F5EF] border border-[#E8DFD1] rounded-xs text-[#252525] focus:outline-none focus:border-[#B69A62]"
            >
              <option value="Meters">Meters</option>
              <option value="Rolls / Bolts">Rolls / Bolts</option>
              <option value="Yards">Yards</option>
            </select>
          </div>
          {errors.quantity && <p className="text-[11px] text-red-600 mt-1">{errors.quantity}</p>}
        </div>
      </div>

      {/* 10. Required Supply & Production Type */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-[#252525]/80 mb-2">
          {t.formStep10}
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {['Ready Stock Collections', 'Order-Based Production', 'Custom Fabric Manufacturing'].map((type) => (
            <label
              key={type}
              className={`flex items-center gap-2.5 p-3 rounded-xs border text-xs cursor-pointer transition-colors ${
                formData.supplyType === type
                  ? 'border-[#B69A62] bg-[#E8DFD1]/30 font-medium text-[#252525]'
                  : 'border-[#E8DFD1] bg-[#F8F5EF] text-[#252525]/75'
              }`}
            >
              <input
                type="radio"
                name="supplyType"
                value={type}
                checked={formData.supplyType === type}
                onChange={() => setFormData({ ...formData, supplyType: type })}
                className="accent-[#B69A62]"
              />
              <span>{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* 11. Message / Technical Requirements */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-[#252525]/80 mb-1.5">
          {t.formStep11}
        </label>
        <textarea
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Specify fabric specifications, desired colorways, lab-dip timelines, port of destination, or sampling needs..."
          className="w-full text-xs p-3 bg-[#F8F5EF] border border-[#E8DFD1] rounded-xs text-[#252525] focus:outline-none focus:border-[#B69A62]"
        />
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-8 text-xs font-semibold tracking-wider uppercase text-[#F8F5EF] bg-[#252525] hover:bg-[#3d3d3d] transition-colors rounded-sm shadow-sm cursor-pointer"
        >
          <span>{t.submitQuoteBtn}</span>
          <ArrowRight className={`w-4 h-4 text-[#B69A62] ${isRTL ? 'rotate-180' : ''}`} />
        </button>
      </div>
    </form>
  );
};
