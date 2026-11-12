import React from 'react';
import { MessageSquare, Globe } from 'lucide-react';
import { getWhatsAppInquiryUrl } from '../data/siteConfig';
import { useLanguage } from '../i18n/LanguageContext';

interface HowWeWorkViewProps {
  onRequestQuote: (inquiryType?: string) => void;
}

export const HowWeWorkView: React.FC<HowWeWorkViewProps> = ({ onRequestQuote }) => {
  const { language, t, isRTL } = useLanguage();

  const readyStockSteps = [
    {
      num: '01',
      title: 'Explore Available Collections',
      description: 'Review our active catalogue of ready unstitched textiles, including pure combed lawn, embroidered coordinates, and digital printed yardage.'
    },
    {
      num: '02',
      title: 'Select Required Designs & SKUs',
      description: 'Identify the product references, SKU numbers, and preferred colorways matching your boutique or wholesale store requirements.'
    },
    {
      num: '03',
      title: 'Submit Wholesale Quantity Requirements',
      description: 'Indicate your estimated yardage, bolt count, or roll requirements through our custom quotation system or direct commercial desk.'
    },
    {
      num: '04',
      title: 'Confirm Stock Availability',
      description: 'Our inventory team cross-verifies physical yardage, dye lots, and bolt integrity across our dispatch facilities.'
    },
    {
      num: '05',
      title: 'Receive a Customized Quotation & Invoice',
      description: 'You receive a complete formal quotation with exact freight estimates to your worldwide destination before formal order placement.'
    }
  ];

  const orderBasedSteps = [
    {
      num: '01',
      title: 'Share Fabric & Design Requirements',
      description: 'Provide detailed tech packs, reference swatches, Pantone color codes, desired GSM, yarn count, and custom embroidery motifs.'
    },
    {
      num: '02',
      title: 'Discuss Quantity & Technical Specifications',
      description: 'Our technical team consults on fiber composition, suitable loom widths, minimum mill dyeing runs, and construction parameters.'
    },
    {
      num: '03',
      title: 'Confirm Sourcing or Production Feasibility',
      description: 'We evaluate raw yarn availability, loom capacity, and manufacturing schedules to confirm production feasibility without speculative commitments.'
    },
    {
      num: '04',
      title: 'Receive Pricing & Estimated Lead Time',
      description: 'Receive a milestone-based pricing breakdown, sampling schedule (lab dips / strike-offs), and realistic manufacturing timeline.'
    },
    {
      num: '05',
      title: 'Proceed After Mutual Confirmation',
      description: 'Following approval of physical quality strike-offs and mutual confirmation of terms, manufacturing commences with scheduled batch inspections.'
    }
  ];

  const handleWhatsApp = () => {
    const url = getWhatsAppInquiryUrl({
      inquiryDetails: 'I would like to discuss manufacturing feasibility and wholesale supply terms.',
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
            <span>{t.howHeroKicker}</span>
            <span aria-hidden="true">·</span>
            <span>{t.globalReach}</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl text-[#252525] font-normal leading-tight text-balance">
            {t.howHeroHeading}
          </h1>
          <p className="text-base sm:text-lg 2xl:text-xl text-[#252525]/75 font-light leading-relaxed">
            {t.howHeroSub}
          </p>
        </div>

        {/* Responsible Supply Policy Note */}
        <div className="bg-white border border-[#E8DFD1] p-5 sm:p-6 rounded-sm shadow-2xs">
          <div className="flex items-start gap-3.5">
            <Globe className="w-5 h-5 text-[#977D4A] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-wider font-semibold text-[#252525]">
                {t.realityFirstTitle}
              </p>
              <p className="text-xs text-[#252525]/75 leading-relaxed">
                {t.realityFirstDesc}
              </p>
            </div>
          </div>
        </div>

        {/* Model A: Ready Stock Supply */}
        <div className="bg-white border border-[#E8DFD1] p-8 sm:p-10 rounded-sm shadow-[0_2px_8px_rgba(0,0,0,0.02)] space-y-8">
          <div className="border-b border-[#E8DFD1] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-[#977D4A]">
                {t.pathwayASub}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#252525]">
                {t.pathwayATitle}
              </h2>
            </div>
            <span className="text-xs font-mono px-3 py-1 bg-[#F8F5EF] border border-[#E8DFD1] text-[#252525]/70 rounded-xs self-start sm:self-auto">
              Ready Stock Supply
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#252525]/75 leading-relaxed font-light max-w-3xl">
            {t.pathwayADesc}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 pt-2">
            {readyStockSteps.map((step) => (
              <div
                key={step.num}
                className="p-5 bg-[#F8F5EF] border border-[#E8DFD1] rounded-xs space-y-2 flex flex-col justify-between"
              >
                <div>
                  <span className="font-serif text-2xl font-light text-[#977D4A] block mb-1">
                    {step.num}
                  </span>
                  <h3 className="font-serif text-base font-medium text-[#252525]">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#252525]/70 mt-2 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Model B: Order-Based Manufacturing */}
        <div className="bg-white border border-[#E8DFD1] p-8 sm:p-10 rounded-sm shadow-[0_2px_8px_rgba(0,0,0,0.02)] space-y-8">
          <div className="border-b border-[#E8DFD1] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-[#977D4A]">
                {t.pathwayBSub}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#252525]">
                {t.pathwayBTitle}
              </h2>
            </div>
            <span className="text-xs font-mono px-3 py-1 bg-[#F8F5EF] border border-[#E8DFD1] text-[#252525]/70 rounded-xs self-start sm:self-auto">
              Custom Fabric Manufacturing
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#252525]/75 leading-relaxed font-light max-w-3xl">
            {t.pathwayBDesc}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 pt-2">
            {orderBasedSteps.map((step) => (
              <div
                key={step.num}
                className="p-5 bg-[#F8F5EF] border border-[#E8DFD1] rounded-xs space-y-2 flex flex-col justify-between"
              >
                <div>
                  <span className="font-serif text-2xl font-light text-[#977D4A] block mb-1">
                    {step.num}
                  </span>
                  <h3 className="font-serif text-base font-medium text-[#252525]">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#252525]/70 mt-2 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison & Decision Matrix */}
        <div className="border border-[#E8DFD1] rounded-sm bg-[#F8F5EF] p-6 sm:p-8 space-y-6">
          <h3 className="font-serif text-2xl font-normal text-[#252525]">
            {t.comparisonTitle}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-[#E8DFD1] text-[#252525] font-semibold uppercase tracking-wider">
                  <th className="py-3 px-4">{t.compParam}</th>
                  <th className="py-3 px-4">{t.compPathwayA}</th>
                  <th className="py-3 px-4">{t.compPathwayB}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8DFD1]/60 text-[#252525]/80">
                <tr>
                  <td className="py-3 px-4 font-semibold text-[#252525]">{t.compMoq}</td>
                  <td className="py-3 px-4">{t.compMoqA}</td>
                  <td className="py-3 px-4">{t.compMoqB}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-[#252525]">{t.compDesign}</td>
                  <td className="py-3 px-4">{t.compDesignA}</td>
                  <td className="py-3 px-4">{t.compDesignB}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-[#252525]">{t.compSampling}</td>
                  <td className="py-3 px-4">{t.compSamplingA}</td>
                  <td className="py-3 px-4">{t.compSamplingB}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-[#252525]">{t.compDelivery}</td>
                  <td className="py-3 px-4">{t.compDeliveryA}</td>
                  <td className="py-3 px-4">{t.compDeliveryB}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Action Banner */}
        <div className="pt-4 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-5 sm:p-6 bg-white border border-[#E8DFD1] rounded-sm">
          <div>
            <h4 className="font-serif text-lg text-[#252525]">{t.howActionPrompt}</h4>
            <p className="text-xs text-[#252525]/70 mt-0.5">{t.howActionSub}</p>
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3 w-full md:w-auto">
            <button
              onClick={() => onRequestQuote('Custom Production')}
              className="py-3 px-5 text-xs font-semibold uppercase tracking-wider text-[#F8F5EF] bg-[#252525] hover:bg-[#383838] transition-colors rounded-xs cursor-pointer text-center"
            >
              {t.requestCustomQuote}
            </button>
            <button
              onClick={() => onRequestQuote('Textile Manufacturing')}
              className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-[#252525] bg-[#E8DFD1]/60 hover:bg-[#E8DFD1] border border-[#B69A62]/40 transition-colors rounded-xs cursor-pointer text-center"
            >
              {t.ctaManufacturingInquiries}
            </button>
            <button
              onClick={handleWhatsApp}
              className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-[#252525] bg-[#F8F5EF] hover:bg-[#E8DFD1] border border-[#E8DFD1] transition-colors rounded-xs flex items-center justify-center gap-1.5 cursor-pointer text-center"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
