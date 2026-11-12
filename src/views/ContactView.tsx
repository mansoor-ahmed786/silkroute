import React, { useState } from 'react';
import { MessageSquare, Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppInquiryUrl } from '../data/siteConfig';
import { useLanguage } from '../i18n/LanguageContext';

export const ContactView: React.FC = () => {
  const { language, t, isRTL } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: 'United States',
    subject: 'Wholesale Fabric Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill out all required fields.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const handleWhatsAppClick = () => {
    const url = getWhatsAppInquiryUrl({
      inquiryDetails: formData.message || 'Direct inquiry from website contact page.',
      country: formData.country,
      language,
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="pt-28 sm:pt-32 pb-16 sm:pb-20 md:pt-36 md:pb-28 2xl:pt-40 2xl:pb-32">
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 2xl:px-16 space-y-12 sm:space-y-16">
        {/* Page Hero */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#B69A62]">
            <span>{t.contactHeroKicker}</span>
            <span aria-hidden="true">·</span>
            <span>{t.globalReach}</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl text-[#252525] font-normal leading-tight text-balance">
            {t.contactHeroHeading}
          </h1>
          <p className="text-base sm:text-lg 2xl:text-xl text-[#252525]/75 font-light leading-relaxed">
            {t.contactHeroSub}
          </p>
        </div>

        {/* 2-Column Layout: Direct Contact Cards on Left, General Message Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: WhatsApp Business, Email & Dispatch Hubs */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary WhatsApp Card */}
            <div className="p-6 sm:p-7 bg-white border border-[#B69A62]/50 rounded-sm shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#25D366]/15 flex items-center justify-center text-[#25D366]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-[#252525] font-semibold">
                    {t.whatsappDeskTitle}
                  </h3>
                  <p className="text-xs text-[#252525]/60">
                    {t.whatsappDeskSub}
                  </p>
                </div>
              </div>

              <p className="text-xs text-[#252525]/80 leading-relaxed font-light">
                {t.whatsappDeskDesc}
              </p>

              <div className="pt-1">
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20bd5a] transition-colors rounded-xs shadow-xs cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{t.startWhatsappBtn}</span>
                </button>
              </div>

              <p className="text-[11px] text-center text-[#252525]/50">
                {t.directLineLabel}: {SITE_CONFIG.whatsAppDisplayNumber}
              </p>
            </div>

            {/* Email & Trade Desk */}
            <div className="p-6 bg-white border border-[#E8DFD1] rounded-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xs bg-[#F8F5EF] flex items-center justify-center text-[#977D4A]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-[#252525] font-medium">
                    {t.officialEmailTitle}
                  </h4>
                  <p className="text-xs font-mono text-[#977D4A]">
                    {SITE_CONFIG.officialEmail}
                  </p>
                </div>
              </div>
              <p className="text-xs text-[#252525]/70 leading-relaxed">
                {t.emailDesc}
              </p>
            </div>

            {/* Operating Hours & International Response Notice */}
            <div className="p-6 bg-white border border-[#E8DFD1] rounded-sm space-y-3">
              <div className="flex items-center gap-2.5 text-xs uppercase tracking-wider font-semibold text-[#252525]">
                <Clock className="w-4 h-4 text-[#977D4A]" />
                <span>{t.operatingHoursTitle}</span>
              </div>
              <p className="text-xs text-[#252525]/75">
                {SITE_CONFIG.businessHours}
              </p>
              <div className="pt-2 border-t border-[#E8DFD1]/60 text-xs text-[#252525]/70 space-y-1">
                <p className="font-semibold text-[#252525]">{t.intlInquiriesNotice}:</p>
                <p>
                  {t.intlInquiriesNoticeDesc}
                </p>
              </div>
            </div>

            {/* International Liaison Desks */}
            <div className="p-6 bg-[#F8F5EF] border border-[#E8DFD1] rounded-sm space-y-3">
              <p className="text-xs uppercase tracking-widest font-semibold text-[#977D4A]">
                {t.showroomsTitle}
              </p>
              <ul className="space-y-2 text-xs text-[#252525]/80">
                {SITE_CONFIG.internationalShowrooms.map((hub) => (
                  <li key={hub} className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#977D4A] shrink-0 mt-0.5" />
                    <span>{hub}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: General Contact Inquiry Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="bg-white border border-[#E8DFD1] p-8 sm:p-10 rounded-sm shadow-sm space-y-5 text-center">
                <div className="w-14 h-14 mx-auto bg-[#B69A62]/15 border border-[#B69A62]/40 rounded-full flex items-center justify-center text-[#977D4A]">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-2xl text-[#252525]">
                  {t.messagePreparedTitle}
                </h3>
                <p className="text-xs sm:text-sm text-[#252525]/75 max-w-md mx-auto leading-relaxed">
                  {t.messagePreparedDesc}
                </p>
                <div className="pt-3 flex flex-wrap justify-center gap-3">
                  <button
                    onClick={handleWhatsAppClick}
                    className="py-2.5 px-5 text-xs font-semibold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20bd5a] transition-colors rounded-xs shadow-xs flex items-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{t.openInWhatsappBtn}</span>
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="py-2.5 px-5 text-xs font-semibold uppercase tracking-wider text-[#252525] bg-[#F8F5EF] hover:bg-[#E8DFD1] border border-[#E8DFD1] rounded-xs cursor-pointer"
                  >
                    {t.sendAnotherBtn}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white border border-[#E8DFD1] p-6 sm:p-10 rounded-sm shadow-sm space-y-5">
                <div className="border-b border-[#E8DFD1] pb-4">
                  <h3 className="font-serif text-2xl text-[#252525] font-normal">
                    {t.generalMessageTitle}
                  </h3>
                  <p className="text-xs text-[#252525]/65 mt-1">
                    {t.generalMessageSub}
                  </p>
                </div>

                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xs">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#252525]/80 mb-1">
                      {t.labelYourName} *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Marcus Vance"
                      className="w-full text-xs p-3 bg-[#F8F5EF] border border-[#E8DFD1] rounded-xs text-[#252525] focus:outline-none focus:border-[#B69A62]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#252525]/80 mb-1">
                      {t.labelCompany} *
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Vance Apparel Group"
                      className="w-full text-xs p-3 bg-[#F8F5EF] border border-[#E8DFD1] rounded-xs text-[#252525] focus:outline-none focus:border-[#B69A62]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#252525]/80 mb-1">
                      {t.labelBusinessEmail} *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. marcus@vanceapparel.com"
                      className="w-full text-xs p-3 bg-[#F8F5EF] border border-[#E8DFD1] rounded-xs text-[#252525] focus:outline-none focus:border-[#B69A62]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#252525]/80 mb-1">
                      {t.labelCountry} *
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
                      <option value="United Arab Emirates">United Arab Emirates</option>
                      <option value="Other">Other Country</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#252525]/80 mb-1">
                    {t.labelSubject}
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full text-xs p-3 bg-[#F8F5EF] border border-[#E8DFD1] rounded-xs text-[#252525] focus:outline-none focus:border-[#B69A62]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#252525]/80 mb-1">
                    {t.labelMessage} *
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your inquiry, volume requirements, or trade partnership questions..."
                    className="w-full text-xs p-3 bg-[#F8F5EF] border border-[#E8DFD1] rounded-xs text-[#252525] focus:outline-none focus:border-[#B69A62]"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="py-3 px-8 text-xs font-semibold uppercase tracking-wider text-[#F8F5EF] bg-[#252525] hover:bg-[#383838] transition-colors rounded-xs shadow-sm cursor-pointer"
                >
                  {t.sendMessageBtn}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
