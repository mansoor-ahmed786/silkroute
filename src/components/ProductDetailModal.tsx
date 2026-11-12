import React, { useState } from 'react';
import { X, MessageSquare, ArrowUpRight, Check, Share2, ChevronLeft, ChevronRight } from 'lucide-react';
import { FabricProduct } from '../data/products';
import { getWhatsAppInquiryUrl } from '../data/siteConfig';
import { useLanguage } from '../i18n/LanguageContext';

interface ProductDetailModalProps {
  product: FabricProduct | null;
  onClose: () => void;
  onRequestQuote: (product: FabricProduct) => void;
  onSelectRelated: (product: FabricProduct) => void;
  allProducts: FabricProduct[];
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onRequestQuote,
  onSelectRelated,
  allProducts,
}) => {
  const { language, t, isRTL } = useLanguage();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [buyerCountry, setBuyerCountry] = useState('Worldwide');
  const [copiedLink, setCopiedLink] = useState(false);

  // Reset selected image when product changes
  React.useEffect(() => {
    setSelectedImageIndex(0);
  }, [product?.id]);

  if (!product) return null;

  // Safe fallback if images array is empty
  const productImages = product.images && product.images.length > 0 ? product.images : ['/products/hero-fabric-1.jpg'];

  const relatedProducts = allProducts
    .filter((p) => p.id !== product.id && (p.collectionId === product.collectionId || p.fabricType === product.fabricType))
    .slice(0, 3);

  const handleWhatsAppClick = () => {
    const url = getWhatsAppInquiryUrl({
      productName: product.name,
      sku: product.sku,
      country: buyerCountry,
      language,
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCopyLink = () => {
    const origin = window.location.origin;
    const shareUrl = `${origin}/${language}/#product/${product.id}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl).then(() => {
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2500);
      });
    }
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const handlePrevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#252525]/60 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 md:p-8 2xl:p-12">
      <div
        className="relative w-full max-w-5xl 2xl:max-w-6xl bg-[#F8F5EF] rounded-sm shadow-2xl border border-[#E8DFD1] overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-[#E8DFD1] bg-white/70">
          <div className="flex items-center gap-2 sm:gap-2.5 text-xs tracking-wider uppercase font-medium text-[#252525]/70">
            <span className="line-clamp-1">{product.collectionName}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono text-[#977D4A] font-semibold">{product.sku}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              title={t.copyProductLink}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-[#252525]/70 hover:text-[#252525] hover:bg-[#E8DFD1]/50 rounded-sm transition-colors cursor-pointer"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#25D366]" />
                  <span className="text-[11px] font-medium text-[#252525]">{t.linkCopiedNotice}</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-[#977D4A]" />
                  <span className="hidden sm:inline text-[11px] uppercase tracking-wider">{t.copyProductLink}</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              aria-label="Close product details"
              className="p-1.5 text-[#252525]/60 hover:text-[#252525] hover:bg-[#E8DFD1]/50 rounded-sm transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main PDP Content */}
        <div className="p-4 sm:p-6 md:p-8 2xl:p-10 max-h-[85vh] overflow-y-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Left 6 cols: Multiple Real Images Gallery */}
            <div className="lg:col-span-6 space-y-3">
              {/* Main Active Image with carousel controls */}
              <div className="relative aspect-[4/3] sm:aspect-[1/1] overflow-hidden bg-white border border-[#E8DFD1] rounded-sm group">
                <img
                  src={productImages[selectedImageIndex] || productImages[0]}
                  alt={`${product.name} wholesale textile view`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-all duration-500"
                  onError={(e) => {
                    // Fallback to primary hero fabric if local path fails
                    (e.currentTarget as HTMLImageElement).src = '/products/hero-fabric-1.jpg';
                  }}
                />

                {/* Status Badge */}
                <div className={`absolute top-3 ${isRTL ? 'right-3' : 'left-3'} bg-[#F8F5EF]/95 backdrop-blur-xs px-2.5 py-1 rounded-xs border border-[#E8DFD1] text-[10px] tracking-wider uppercase font-semibold text-[#252525]`}>
                  {product.availabilityStatus === 'Ready Stock' ? t.readyStockTag : t.sourcingRequestTag}
                </div>

                {/* Multiple Images Counter */}
                {productImages.length > 1 && (
                  <div className={`absolute bottom-3 ${isRTL ? 'left-3' : 'right-3'} bg-[#252525]/80 backdrop-blur-xs text-white text-[10px] font-mono tracking-widest px-2 py-0.5 rounded-xs`}>
                    {selectedImageIndex + 1} / {productImages.length}
                  </div>
                )}

                {/* Arrow navigation if multiple images */}
                {productImages.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      aria-label="Previous photo"
                      className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-[#252525] shadow-md transition-opacity cursor-pointer opacity-80 sm:opacity-0 group-hover:opacity-100"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleNextImage}
                      aria-label="Next photo"
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-[#252525] shadow-md transition-opacity cursor-pointer opacity-80 sm:opacity-0 group-hover:opacity-100"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails Row */}
              {productImages.length > 1 && (
                <div className="flex items-center gap-2.5 overflow-x-auto pb-1">
                  {productImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-xs overflow-hidden border-2 cursor-pointer transition-all ${
                        selectedImageIndex === idx
                          ? 'border-[#B69A62] shadow-xs'
                          : 'border-[#E8DFD1] opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${product.name} photo ${idx + 1}`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = '/products/hero-fabric-1.jpg';
                        }}
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Quality & Sampling Note */}
              <div className="pt-3 border-t border-[#E8DFD1] text-[12px] text-[#252525]/75 space-y-1.5 bg-white/50 p-3.5 rounded-sm">
                <p className="font-semibold text-[#252525] uppercase tracking-wider text-[11px]">
                  {t.samplingTitle}
                </p>
                <p>{product.sampleAvailability}</p>
              </div>
            </div>

            {/* Right 6 cols: Specifications, Manufacturing Options & Inquiries */}
            <div className="lg:col-span-6 space-y-5">
              {/* Product Header */}
              <div>
                <p className="text-xs uppercase tracking-widest font-semibold text-[#977D4A]">
                  {t.fabricSpecsHeading}
                </p>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#252525] font-normal mt-1">
                  {product.name}
                </h2>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#252525]/60 mt-1 font-mono">
                  <span>SKU: {product.sku}</span>
                  <span aria-hidden="true">·</span>
                  <span>{product.supplyType}</span>
                </div>
              </div>

              {/* Verified Wholesale Description */}
              <p className="text-sm text-[#252525]/85 leading-relaxed font-light">
                {product.description}
              </p>

              {/* Available Colors with Swatches */}
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-wider font-semibold text-[#252525]">
                  {t.availableColorways} ({product.colors.length}):
                </p>
                <div className="flex flex-wrap items-center gap-2.5">
                  {product.colors.map((c) => (
                    <div
                      key={c.name}
                      className="flex items-center gap-2 bg-white border border-[#E8DFD1] px-2.5 py-1 rounded-xs text-xs text-[#252525]"
                    >
                      <span
                        style={{ backgroundColor: c.hex }}
                        className="w-3.5 h-3.5 rounded-full border border-black/15 shadow-2xs"
                      />
                      <span>{c.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications Table */}
              <div className="border border-[#E8DFD1] rounded-sm bg-white overflow-hidden text-xs">
                <div className="bg-[#E8DFD1]/40 px-3.5 py-2 font-semibold uppercase tracking-wider text-[#252525] text-[11px]">
                  {t.technicalParamsTitle}
                </div>
                <div className="divide-y divide-[#E8DFD1]/60">
                  <div className="flex flex-col xs:flex-row xs:items-center justify-between p-2.5 gap-0.5">
                    <span className="text-[#252525]/60">{t.specFabricType}</span>
                    <span className="font-medium text-[#252525]">{product.fabricType}</span>
                  </div>
                  <div className="flex flex-col xs:flex-row xs:items-center justify-between p-2.5 gap-0.5">
                    <span className="text-[#252525]/60">{t.specMaterial}</span>
                    <span className="font-medium text-[#252525] text-start xs:text-end">{product.material || product.composition}</span>
                  </div>
                  <div className="flex flex-col xs:flex-row xs:items-center justify-between p-2.5 gap-0.5">
                    <span className="text-[#252525]/60">{t.specUsableWidth}</span>
                    <span className="font-medium text-[#252525]">{product.width}</span>
                  </div>
                  <div className="flex flex-col xs:flex-row xs:items-center justify-between p-2.5 gap-0.5">
                    <span className="text-[#252525]/60">{t.specWeightGsm}</span>
                    <span className="font-medium text-[#252525] font-mono">{product.weightGsm}</span>
                  </div>
                  <div className="flex flex-col xs:flex-row xs:items-center justify-between p-2.5 gap-0.5">
                    <span className="text-[#252525]/60">{t.specYarnCount}</span>
                    <span className="font-medium text-[#252525]">{product.yarnCount}</span>
                  </div>
                  <div className="flex flex-col xs:flex-row xs:items-center justify-between p-2.5 gap-0.5">
                    <span className="text-[#252525]/60">{t.specDesignPattern}</span>
                    <span className="font-medium text-[#252525]">{product.designPattern}</span>
                  </div>
                  <div className="flex flex-col xs:flex-row xs:items-center justify-between p-2.5 gap-0.5">
                    <span className="text-[#252525]/60">{t.specFinishing}</span>
                    <span className="font-medium text-[#252525]">{product.specifications.finish}</span>
                  </div>
                  <div className="flex flex-col xs:flex-row xs:items-center justify-between p-2.5 gap-0.5">
                    <span className="text-[#252525]/60">{t.specRecommendedFor}</span>
                    <span className="font-medium text-[#252525] text-start xs:text-end">{product.specifications.suitableFor}</span>
                  </div>
                </div>
              </div>

              {/* Manufacturing & Customization Options */}
              {product.manufacturingOptions && product.manufacturingOptions.length > 0 && (
                <div className="p-3.5 bg-white border border-[#E8DFD1] rounded-sm space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-xs uppercase tracking-wider font-semibold text-[#252525]">
                      {t.manufacturingOptionsTitle}
                    </p>
                    <span className="text-[10px] text-[#977D4A] uppercase tracking-wider font-semibold">B2B Manufacturing</span>
                  </div>
                  <p className="text-[11px] text-[#252525]/60 font-light">
                    {t.manufacturingOptionsSub}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
                    {product.manufacturingOptions.map((opt, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-1.5 text-xs text-[#252525]/85 bg-[#F8F5EF] px-2.5 py-1.5 rounded-xs border border-[#E8DFD1]/50"
                      >
                        <Check className="w-3.5 h-3.5 text-[#977D4A] shrink-0 mt-0.5" />
                        <span>{opt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* MOQ Policy Box (Customized as per buyer requirements) */}
              <div className="p-3.5 bg-[#E8DFD1]/30 border border-[#B69A62]/30 rounded-sm space-y-1">
                <p className="text-xs uppercase tracking-wider font-semibold text-[#977D4A]">
                  {t.customMoqTitle}
                </p>
                <p className="text-xs text-[#252525]/80 leading-relaxed">
                  {product.moqPolicy}
                </p>
              </div>

              {/* Buyer Country Selector for WhatsApp */}
              <div className="space-y-1.5">
                <label className="block text-xs uppercase tracking-wider font-medium text-[#252525]/70">
                  {t.selectDestinationCountry}:
                </label>
                <select
                  value={buyerCountry}
                  onChange={(e) => setBuyerCountry(e.target.value)}
                  className="w-full text-xs p-2.5 bg-white border border-[#E8DFD1] rounded-xs text-[#252525] focus:outline-none focus:border-[#B69A62]"
                >
                  <option value="Worldwide">Worldwide / Global Destination</option>
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="France">France</option>
                  <option value="Germany">Germany</option>
                  <option value="Spain">Spain</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                  <option value="United Arab Emirates">United Arab Emirates</option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                  <option value="Other International">Other Destination</option>
                </select>
              </div>

              {/* Action Buttons: Wholesale Inquiry & Direct WhatsApp */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => {
                    onClose();
                    onRequestQuote(product);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 text-xs font-semibold tracking-wider uppercase text-[#F8F5EF] bg-[#252525] hover:bg-[#3d3d3d] transition-colors rounded-sm shadow-sm cursor-pointer"
                >
                  <span>{t.requestCustomQuote}</span>
                  <ArrowUpRight className={`w-4 h-4 text-[#B69A62] ${isRTL ? '-scale-x-100' : ''}`} />
                </button>

                <button
                  onClick={handleWhatsAppClick}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 text-xs font-semibold tracking-wider uppercase text-[#252525] bg-[#E8DFD1]/60 hover:bg-[#E8DFD1] border border-[#B69A62]/40 transition-colors rounded-sm cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  <span>{t.whatsappInquiryBtn}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Related fabrics from collection */}
          {relatedProducts.length > 0 && (
            <div className="mt-10 pt-8 border-t border-[#E8DFD1]">
              <h4 className="font-serif text-xl font-normal text-[#252525] mb-4">
                {t.relatedFabricsTitle} {product.collectionName}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedProducts.map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => {
                      onSelectRelated(rel);
                      setSelectedImageIndex(0);
                    }}
                    className="p-3 bg-white border border-[#E8DFD1] rounded-sm hover:border-[#B69A62] transition-colors cursor-pointer flex items-center gap-3"
                  >
                    <img
                      src={rel.images[0]}
                      alt={rel.name}
                      referrerPolicy="no-referrer"
                      className="w-14 h-14 object-cover rounded-xs"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = '/products/hero-fabric-1.jpg';
                      }}
                    />
                    <div>
                      <p className="font-serif text-sm font-medium text-[#252525] line-clamp-1">
                        {rel.name}
                      </p>
                      <p className="text-xs text-[#252525]/60 font-mono">
                        {rel.sku}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
