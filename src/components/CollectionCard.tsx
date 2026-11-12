import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FabricCollection, getLocalizedCollection } from '../data/collections';
import { useLanguage } from '../i18n/LanguageContext';

interface CollectionCardProps {
  collection: FabricCollection;
  onSelect: (collectionId: string) => void;
}

export const CollectionCard: React.FC<CollectionCardProps> = ({
  collection,
  onSelect,
}) => {
  const { language, t, isRTL } = useLanguage();
  const localized = getLocalizedCollection(collection, language);

  return (
    <div
      onClick={() => onSelect(collection.id)}
      className="group cursor-pointer bg-white border border-[#E8DFD1]/80 hover:border-[#B69A62]/60 transition-all duration-300 rounded-sm overflow-hidden flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(37,37,37,0.06)]"
    >
      <div>
        {/* Editorial Collection Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-[#E8DFD1]/30">
          <img
            src={localized.image}
            alt={`${localized.name} wholesale unstitched fabric collection`}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-104"
          />
          <div className="absolute inset-0 bg-[#252525]/10 group-hover:bg-transparent transition-colors duration-300" />
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 2xl:p-8">
          <div className="flex items-center justify-between text-xs tracking-wider uppercase text-[#977D4A] font-medium mb-1.5">
            <span>{localized.sampleCount} {t.designsAvailable}</span>
          </div>

          <h3 className="font-serif text-xl sm:text-2xl 2xl:text-3xl font-normal text-[#252525] group-hover:text-[#977D4A] transition-colors">
            {localized.name}
          </h3>

          <p className="text-xs text-[#252525]/60 italic mt-0.5 mb-2.5 font-serif">
            {localized.subtitle}
          </p>

          <p className="text-sm 2xl:text-base text-[#252525]/75 line-clamp-3 leading-relaxed font-light">
            {localized.description}
          </p>

          {/* Key Attributes as clean inline text */}
          <div className="mt-4 pt-3.5 border-t border-[#E8DFD1]/60 flex flex-wrap items-center gap-2 text-[11px] text-[#252525]/60 uppercase tracking-wider">
            {localized.keyAttributes.map((attr, idx) => (
              <React.Fragment key={attr}>
                <span>{attr}</span>
                {idx < localized.keyAttributes.length - 1 && <span aria-hidden="true">·</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Explore Button */}
      <div className="px-5 pb-5 sm:px-6 sm:pb-6 2xl:px-8 2xl:pb-8 pt-1">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelect(collection.id);
          }}
          className="w-full flex items-center justify-between py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-[#252525] bg-[#F8F5EF] group-hover:bg-[#252525] group-hover:text-[#F8F5EF] transition-colors rounded-xs border border-[#E8DFD1]"
        >
          <span>{t.exploreCollection}</span>
          <ArrowRight className={`w-3.5 h-3.5 text-[#B69A62] transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-0.5' : 'group-hover:translate-x-0.5'}`} />
        </button>
      </div>
    </div>
  );
};
