import React from 'react';
import { ArrowUpRight, Clock } from 'lucide-react';
import { FabricProduct } from '../data/products';
import { useLanguage } from '../i18n/LanguageContext';

interface ProductCardProps {
  product: FabricProduct;
  onViewDetails: (product: FabricProduct) => void;
  onRequestQuote: (product: FabricProduct) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onViewDetails,
  onRequestQuote,
}) => {
  const { t, isRTL } = useLanguage();

  return (
    <div className="group bg-white border border-[#E8DFD1]/80 hover:border-[#B69A62]/60 transition-all duration-300 rounded-sm overflow-hidden flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(37,37,37,0.06)]">
      <div>
        {/* Product Image */}
        <div
          onClick={() => onViewDetails(product)}
          className="relative aspect-[4/3] sm:aspect-[1/1] overflow-hidden bg-[#E8DFD1]/25 cursor-pointer"
        >
          <img
            src={product.images[0]}
            alt={`${product.name} - ${product.fabricType} unstitched fabric wholesale`}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
          />

          {/* Clean Stock Status Tag */}
          <div className={`absolute top-3 ${isRTL ? 'right-3' : 'left-3'} bg-[#F8F5EF]/95 backdrop-blur-xs px-2.5 py-1 rounded-xs border border-[#E8DFD1] text-[10px] tracking-wider uppercase font-semibold text-[#252525]`}>
            <div className="flex items-center gap-1.5">
              {product.availabilityStatus === 'Ready Stock' ? (
                <>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B69A62]" />
                  <span>{t.readyStockTag}</span>
                </>
              ) : (
                <>
                  <Clock className="w-2.5 h-2.5 text-[#977D4A]" />
                  <span>{t.sourcingRequestTag}</span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="p-4 sm:p-5 2xl:p-6">
          {/* Category & SKU */}
          <div className="flex items-center justify-between text-[11px] text-[#252525]/60 uppercase tracking-wider mb-1.5">
            <span>{product.collectionName}</span>
            <span className="font-mono text-[10px] text-[#977D4A]">{product.sku}</span>
          </div>

          {/* Product Name */}
          <h3
            onClick={() => onViewDetails(product)}
            className="font-serif text-lg sm:text-xl 2xl:text-2xl font-normal text-[#252525] group-hover:text-[#977D4A] transition-colors cursor-pointer line-clamp-1"
          >
            {product.name}
          </h3>

          {/* Fabric Type, Material & Width */}
          <p className="text-xs text-[#252525]/85 mt-1 line-clamp-1 font-medium">
            {product.fabricType}
          </p>
          <p className="text-[11px] text-[#252525]/65 mt-0.5 line-clamp-1">
            {product.material || product.composition} · {product.width}
          </p>

          {/* Color Swatches */}
          <div className="mt-3 pt-3 border-t border-[#E8DFD1]/60 flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-wider text-[#252525]/50">
              {t.colorwaysCount.replace('{count}', String(product.colors.length))}
            </span>
            <div className="flex items-center gap-1.5">
              {product.colors.map((color) => (
                <span
                  key={color.name}
                  title={color.name}
                  style={{ backgroundColor: color.hex }}
                  className="w-3.5 h-3.5 rounded-full border border-black/15 shadow-2xs inline-block"
                />
              ))}
            </div>
          </div>

          {/* Customized MOQ Notice */}
          <p className="text-[11px] text-[#252525]/65 mt-2.5 italic">
            {t.customMoqNotice}
          </p>
        </div>
      </div>

      {/* Action Buttons (View Details & Request Wholesale Quote) */}
      <div className="p-4 sm:p-5 2xl:p-6 pt-0 grid grid-cols-2 gap-2">
        <button
          onClick={() => onViewDetails(product)}
          className="py-2.5 px-2 text-[11px] font-semibold uppercase tracking-wider text-[#252525] bg-[#F8F5EF] hover:bg-[#E8DFD1]/60 border border-[#E8DFD1] transition-colors rounded-xs text-center cursor-pointer"
        >
          {t.viewDetails}
        </button>

        <button
          onClick={() => onRequestQuote(product)}
          className="py-2.5 px-2 text-[11px] font-semibold uppercase tracking-wider text-[#F8F5EF] bg-[#252525] hover:bg-[#383838] transition-colors rounded-xs text-center flex items-center justify-center gap-1 cursor-pointer"
        >
          <span>{t.quoteBtn}</span>
          <ArrowUpRight className={`w-3 h-3 text-[#B69A62] ${isRTL ? '-scale-x-100' : ''}`} />
        </button>
      </div>
    </div>
  );
};
