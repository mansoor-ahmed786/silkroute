import React from 'react';
import { FabricProduct } from '../data/products';
import { ProductCard } from './ProductCard';
import { PackageOpen } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface ProductGridProps {
  products: FabricProduct[];
  onViewDetails: (product: FabricProduct) => void;
  onRequestQuote: (product: FabricProduct) => void;
  onResetFilters?: () => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  onViewDetails,
  onRequestQuote,
  onResetFilters,
}) => {
  const { t } = useLanguage();

  if (products.length === 0) {
    return (
      <div className="text-center py-20 px-6 bg-white border border-[#E8DFD1] rounded-sm max-w-xl mx-auto my-8 space-y-4">
        <div className="w-12 h-12 mx-auto bg-[#F8F5EF] border border-[#E8DFD1] rounded-full flex items-center justify-center text-[#977D4A]">
          <PackageOpen className="w-6 h-6" />
        </div>
        <h3 className="font-serif text-2xl text-[#252525]">{t.noMatchingFabrics}</h3>
        <p className="text-xs text-[#252525]/70 max-w-md mx-auto leading-relaxed">
          {t.noMatchingFabricsSub}
        </p>
        {onResetFilters && (
          <button
            onClick={onResetFilters}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#F8F5EF] bg-[#252525] hover:bg-[#383838] transition-colors rounded-xs cursor-pointer"
          >
            {t.resetAllFilters}
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-5 sm:gap-6 2xl:gap-8">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onViewDetails={onViewDetails}
          onRequestQuote={onRequestQuote}
        />
      ))}
    </div>
  );
};
