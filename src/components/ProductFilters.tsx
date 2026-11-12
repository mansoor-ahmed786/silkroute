import React from 'react';
import { Search, RotateCcw } from 'lucide-react';
import { FABRIC_COLLECTIONS, getLocalizedCollection } from '../data/collections';
import { useLanguage } from '../i18n/LanguageContext';

interface ProductFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCollection: string;
  onCollectionChange: (colId: string) => void;
  selectedFabricType: string;
  onFabricTypeChange: (type: string) => void;
  selectedAvailability: string;
  onAvailabilityChange: (avail: string) => void;
  fabricTypes: string[];
  totalResults: number;
  onResetFilters: () => void;
}

export const ProductFilters: React.FC<ProductFiltersProps> = ({
  searchQuery,
  onSearchChange,
  selectedCollection,
  onCollectionChange,
  selectedFabricType,
  onFabricTypeChange,
  selectedAvailability,
  onAvailabilityChange,
  fabricTypes,
  totalResults,
  onResetFilters,
}) => {
  const { language, t, isRTL } = useLanguage();

  const isFiltered =
    Boolean(searchQuery) ||
    selectedCollection !== 'all' ||
    selectedFabricType !== 'all' ||
    selectedAvailability !== 'all';

  return (
    <div className="bg-white border border-[#E8DFD1] p-4 sm:p-6 2xl:p-8 rounded-sm space-y-4 sm:space-y-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
      {/* Search Input Bar */}
      <div className="relative">
        <Search className={`w-4 h-4 absolute top-1/2 -translate-y-1/2 text-[#252525]/45 ${isRTL ? 'right-3.5' : 'left-3.5'}`} />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={t.filterSearchPlaceholder}
          className={`w-full py-2.5 text-xs bg-[#F8F5EF] border border-[#E8DFD1] rounded-xs text-[#252525] placeholder-[#252525]/40 focus:outline-none focus:border-[#B69A62] transition-colors ${
            isRTL ? 'pr-10 pl-4' : 'pl-10 pr-4'
          }`}
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className={`absolute top-1/2 -translate-y-1/2 text-xs text-[#252525]/50 hover:text-[#252525] cursor-pointer ${
              isRTL ? 'left-3' : 'right-3'
            }`}
          >
            {t.clearSearch}
          </button>
        )}
      </div>

      {/* Filter Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        {/* Collection Dropdown */}
        <div>
          <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#252525]/70 mb-1.5">
            {t.filterCollectionLabel}
          </label>
          <select
            value={selectedCollection}
            onChange={(e) => onCollectionChange(e.target.value)}
            className="w-full text-xs py-2 px-3 bg-[#F8F5EF] border border-[#E8DFD1] rounded-xs text-[#252525] focus:outline-none focus:border-[#B69A62]"
          >
            <option value="all">{t.filterAllCollections}</option>
            {FABRIC_COLLECTIONS.map((c) => {
              const localized = getLocalizedCollection(c, language);
              return (
                <option key={c.id} value={c.id}>
                  {localized.name}
                </option>
              );
            })}
          </select>
        </div>

        {/* Fabric Type Dropdown */}
        <div>
          <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#252525]/70 mb-1.5">
            {t.filterFabricTypeLabel}
          </label>
          <select
            value={selectedFabricType}
            onChange={(e) => onFabricTypeChange(e.target.value)}
            className="w-full text-xs py-2 px-3 bg-[#F8F5EF] border border-[#E8DFD1] rounded-xs text-[#252525] focus:outline-none focus:border-[#B69A62]"
          >
            <option value="all">{t.filterAllFabricTypes}</option>
            {fabricTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Availability Dropdown */}
        <div>
          <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#252525]/70 mb-1.5">
            {t.filterAvailabilityLabel}
          </label>
          <select
            value={selectedAvailability}
            onChange={(e) => onAvailabilityChange(e.target.value)}
            className="w-full text-xs py-2 px-3 bg-[#F8F5EF] border border-[#E8DFD1] rounded-xs text-[#252525] focus:outline-none focus:border-[#B69A62]"
          >
            <option value="all">{t.filterAllAvailability}</option>
            <option value="Ready Stock">{t.readyStockTag}</option>
            <option value="Sourcing on Request">{t.sourcingRequestTag}</option>
          </select>
        </div>
      </div>

      {/* Summary and Reset Button */}
      <div className="flex items-center justify-between pt-2 border-t border-[#E8DFD1]/60 text-xs">
        <p className="text-[#252525]/70">
          {t.showingFabricsCount.replace('{count}', String(totalResults))}
        </p>

        {isFiltered && (
          <button
            onClick={onResetFilters}
            className="inline-flex items-center gap-1.5 text-xs text-[#977D4A] hover:text-[#252525] font-medium transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{t.resetAllFilters}</span>
          </button>
        )}
      </div>
    </div>
  );
};
