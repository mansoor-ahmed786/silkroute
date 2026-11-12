import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#252525]/60 backdrop-blur-xs flex items-center justify-center p-2.5 sm:p-4">
      <div
        className="w-full max-w-3xl bg-[#F8F5EF] border border-[#E8DFD1] rounded-sm shadow-2xl overflow-hidden max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-[#E8DFD1] bg-white">
          <div className="flex items-center gap-2">
            {type === 'privacy' ? (
              <ShieldCheck className="w-5 h-5 text-[#977D4A]" />
            ) : (
              <FileText className="w-5 h-5 text-[#977D4A]" />
            )}
            <h3 className="font-serif text-xl font-semibold text-[#252525]">
              {type === 'privacy' ? 'International Privacy Policy' : 'Commercial Wholesale Terms'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#252525]/60 hover:text-[#252525] rounded-xs cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 md:p-8 overflow-y-auto space-y-5 text-xs text-[#252525]/80 leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p className="font-semibold text-[#252525] text-sm">
                1. B2B Commercial Data Collection
              </p>
              <p>
                Silk Route operates exclusively as an international business-to-business (B2B) textile supplier. We collect corporate contact details, commercial registrations, import destinations, and quotation requests submitted through our website or direct communication channels solely for processing wholesale inquiries, arranging sample swatches, and executing export logistics.
              </p>

              <p className="font-semibold text-[#252525] text-sm">
                2. Non-Disclosure & Sample Security
              </p>
              <p>
                Custom fabric designs, private collection development coordinates, lab dips, and buyer tech-packs shared with Silk Route remain strictly confidential. We do not sell, license, or disclose proprietary brand development data to third parties.
              </p>

              <p className="font-semibold text-[#252525] text-sm">
                3. Cross-Border Communication & WhatsApp Channels
              </p>
              <p>
                When you initiate an inquiry via WhatsApp or email, communications are conducted across secure commercial protocols to facilitate timely quotation sharing and production progress updates.
              </p>

              <p className="font-semibold text-[#252525] text-sm">
                4. Contact Information
              </p>
              <p>
                For questions regarding trade privacy and commercial confidentiality, reach our data controller at {SITE_CONFIG.officialEmail}.
              </p>
            </>
          ) : (
            <>
              <p className="font-semibold text-[#252525] text-sm">
                1. Wholesale Scope & Minimum Order Quantities (MOQ)
              </p>
              <p>
                Silk Route supplies unstitched fabrics exclusively in wholesale and bulk quantities. Minimum Order Quantities are customized per product, design intricacy, dye availability, and whether goods are fulfilled from Ready Stock or produced on Order-Based Sourcing.
              </p>

              <p className="font-semibold text-[#252525] text-sm">
                2. Quotations, Pricing & Validity
              </p>
              <p>
                All wholesale quotations are provided on an individual basis (FOB, CIF, or DDP where mutually agreed) and reflect current raw cotton, silk, and dye yarn market indices. Quotations remain valid for the period specified in the formal commercial invoice.
              </p>

              <p className="font-semibold text-[#252525] text-sm">
                3. Sampling & Quality Strike-Offs
              </p>
              <p>
                Fabric swatches, feeler headers, and laboratory dip strike-offs are provided for buyer evaluation prior to bulk roll cutting or loom weaving. Production proceeds only upon signed buyer confirmation.
              </p>

              <p className="font-semibold text-[#252525] text-sm">
                4. International Freight & Delivery Feasibility
              </p>
              <p>
                Delivery schedules, shipping lines, air-cargo booking, and customs documentation are confirmed mutually upon order formalization. Silk Route coordinates with major international freight carriers to serve commercial buyers worldwide.
              </p>
            </>
          )}
        </div>

        <div className="px-6 py-4 border-t border-[#E8DFD1] bg-white flex justify-end">
          <button
            onClick={onClose}
            className="py-2 px-5 text-xs font-semibold uppercase tracking-wider text-[#F8F5EF] bg-[#252525] hover:bg-[#383838] rounded-xs cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
