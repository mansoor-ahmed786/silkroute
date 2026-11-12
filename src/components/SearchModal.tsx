import React, { useState } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { FabricProduct } from '../data/products';
import { useLanguage } from '../i18n/LanguageContext';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: FabricProduct[];
  onSelectProduct: (product: FabricProduct) => void;
  onViewAllResults: (query: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
  onViewAllResults,
}) => {
  const { t, isRTL } = useLanguage();
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const searchResults = query.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.sku.toLowerCase().includes(query.toLowerCase()) ||
          p.fabricType.toLowerCase().includes(query.toLowerCase()) ||
          p.collectionName.toLowerCase().includes(query.toLowerCase()) ||
          p.composition.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 bg-[#252525]/60 backdrop-blur-xs flex items-start justify-center pt-16 sm:pt-20 px-3 sm:px-4">
      <div
        className="w-full max-w-2xl bg-[#F8F5EF] border border-[#E8DFD1] rounded-sm shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 p-4 sm:p-5 border-b border-[#E8DFD1] bg-white">
          <Search className="w-5 h-5 text-[#977D4A] shrink-0" />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="w-full text-sm bg-transparent border-none text-[#252525] placeholder-[#252525]/45 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-[#252525]/50 hover:text-[#252525] px-2 py-1 cursor-pointer"
            >
              {t.clearSearch}
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 text-[#252525]/60 hover:text-[#252525] rounded-xs cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Area */}
        <div className="max-h-96 overflow-y-auto p-4 space-y-2">
          {query.trim() === '' ? (
            <div className="py-8 text-center text-xs text-[#252525]/60 space-y-2">
              <p>Type to search across unstitched textiles, lawn weaves, and embroidery SKUs.</p>
              <div className="flex flex-wrap justify-center gap-2 pt-2">
                {['SR-LWN-8801', 'Zari Organza', 'Raw Silk', 'Micro-Velvet', 'Cotton Lawn'].map((sample) => (
                  <button
                    key={sample}
                    onClick={() => setQuery(sample)}
                    className="px-2.5 py-1 bg-white border border-[#E8DFD1] text-[11px] text-[#252525]/80 hover:border-[#B69A62] rounded-xs"
                  >
                    {sample}
                  </button>
                ))}
              </div>
            </div>
          ) : searchResults.length === 0 ? (
            <div className="py-10 text-center text-xs text-[#252525]/70 space-y-1">
              <p className="font-serif text-base text-[#252525]">No fabrics match "{query}"</p>
              <p>Try searching for general terms like "Lawn", "Silk", or "Embroidered".</p>
            </div>
          ) : (
            <div className="space-y-2">
              <p className="text-[11px] uppercase tracking-wider font-semibold text-[#252525]/60 px-2">
                Matching Wholesale Fabrics ({searchResults.length})
              </p>
              {searchResults.slice(0, 6).map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    onClose();
                    onSelectProduct(product);
                  }}
                  className="p-3 bg-white hover:bg-[#E8DFD1]/30 border border-[#E8DFD1] rounded-xs transition-colors cursor-pointer flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="w-12 h-12 object-cover rounded-xs"
                    />
                    <div>
                      <p className="font-serif text-sm font-medium text-[#252525]">
                        {product.name}
                      </p>
                      <p className="text-xs text-[#252525]/60">
                        {product.fabricType} · <span className="font-mono text-[#977D4A]">{product.sku}</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-[#252525]/60 hidden sm:inline">
                      {product.availabilityStatus}
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#B69A62]" />
                  </div>
                </div>
              ))}

              {searchResults.length > 6 && (
                <button
                  onClick={() => {
                    onClose();
                    onViewAllResults(query);
                  }}
                  className="w-full py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-[#977D4A] hover:underline cursor-pointer"
                >
                  View all {searchResults.length} matching fabrics in catalogue →
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
