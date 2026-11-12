import React, { useState, useEffect, useMemo } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { CollectionCard } from './components/CollectionCard';
import { ProductCard } from './components/ProductCard';
import { ProductGrid } from './components/ProductGrid';
import { ProductFilters } from './components/ProductFilters';
import { ProductDetailModal } from './components/ProductDetailModal';
import { QuoteInquiryForm } from './components/QuoteInquiryForm';
import { WholesaleCTA } from './components/WholesaleCTA';
import { WhatsAppButton } from './components/WhatsAppButton';
import { SearchModal } from './components/SearchModal';
import { LegalModal } from './components/LegalModal';

import { WholesaleSolutionsView } from './views/WholesaleSolutionsView';
import { HowWeWorkView } from './views/HowWeWorkView';
import { AboutView } from './views/AboutView';
import { ContactView } from './views/ContactView';

import { FABRIC_COLLECTIONS } from './data/collections';
import { FABRIC_PRODUCTS, FabricProduct } from './data/products';
import { useLanguage } from './i18n/LanguageContext';
import { SupportedLanguage, SUPPORTED_LANGUAGES } from './i18n/types';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export default function App() {
  const { language, setLanguage, t, isRTL } = useLanguage();

  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedProduct, setSelectedProduct] = useState<FabricProduct | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  // Quote form state
  const [quoteSku, setQuoteSku] = useState('');
  const [quoteProductName, setQuoteProductName] = useState('');
  const [quoteInquiryType, setQuoteInquiryType] = useState('Wholesale Fabric Supply');

  // Catalogue Filters State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCollection, setSelectedCollection] = useState('all');
  const [selectedFabricType, setSelectedFabricType] = useState('all');
  const [selectedAvailability, setSelectedAvailability] = useState('all');

  // Handle URL path and hash routing (/en/collections, /fr/wholesale, #product/id, etc.)
  useEffect(() => {
    const handleUrlChange = () => {
      // 1. Check pathname for language & view segment: e.g. /fr/wholesale
      const pathSegments = window.location.pathname.toLowerCase().split('/').filter(Boolean);
      if (pathSegments.length > 0) {
        const potentialLang = pathSegments[0] as SupportedLanguage;
        if (SUPPORTED_LANGUAGES[potentialLang] && potentialLang !== language) {
          setLanguage(potentialLang);
        }

        const potentialView = pathSegments[1];
        if ((potentialView === 'product' || potentialView === 'products') && pathSegments[2]) {
          const queryId = pathSegments[2].toLowerCase();
          const found = FABRIC_PRODUCTS.find(
            (p) => p.id.toLowerCase() === queryId || p.sku.toLowerCase() === queryId
          );
          if (found) {
            setSelectedProduct(found);
            setCurrentView('collections');
            return;
          }
        }

        if (potentialView && ['home', 'collections', 'wholesale', 'how-it-works', 'about', 'contact', 'quote'].includes(potentialView)) {
          setCurrentView(potentialView);
          if (potentialView === 'collections' && pathSegments[2]) {
            setSelectedCollection(pathSegments[2]);
          }
          return;
        }
      }

      // 2. Fallback to hash routing
      const hash = window.location.hash.replace('#', '');
      if (!hash) {
        if (pathSegments.length <= 1) {
          setCurrentView('home');
        }
        return;
      }

      if (hash.startsWith('product/')) {
        const queryId = hash.replace('product/', '').toLowerCase();
        const found = FABRIC_PRODUCTS.find(
          (p) => p.id.toLowerCase() === queryId || p.sku.toLowerCase() === queryId
        );
        if (found) {
          setSelectedProduct(found);
        }
      } else if (hash.startsWith('collections/')) {
        const colId = hash.replace('collections/', '');
        setSelectedCollection(colId);
        setCurrentView('collections');
      } else if (['home', 'collections', 'wholesale', 'how-it-works', 'about', 'contact', 'quote'].includes(hash)) {
        setCurrentView(hash);
      }
    };

    handleUrlChange();
    window.addEventListener('popstate', handleUrlChange);
    window.addEventListener('hashchange', handleUrlChange);
    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('hashchange', handleUrlChange);
    };
  }, [language, setLanguage]);

  const navigateTo = (view: string, param?: string) => {
    setCurrentView(view);
    if (param && view === 'collections') {
      setSelectedCollection(param);
      const newPath = `/${language}/collections/${param}`;
      window.history.pushState(null, '', newPath);
    } else {
      const newPath = view === 'home' ? `/${language}/` : `/${language}/${view}`;
      window.history.pushState(null, '', newPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuote = (sku?: string, productName?: string, inquiryType?: string) => {
    setQuoteSku(sku || '');
    setQuoteProductName(productName || '');
    setQuoteInquiryType(inquiryType || 'Wholesale Fabric Supply');
    navigateTo('quote');
  };

  const handleProductQuoteClick = (product: FabricProduct) => {
    setSelectedProduct(null);
    handleOpenQuote(product.sku, product.name, 'Wholesale Fabric Supply');
  };

  const handleViewProductDetails = (product: FabricProduct) => {
    setSelectedProduct(product);
    window.history.replaceState(null, '', `/${language}/product/${product.id}`);
  };

  const handleCloseProductModal = () => {
    setSelectedProduct(null);
    const cleanPath = currentView === 'home' ? `/${language}/` : `/${language}/${currentView}`;
    window.history.replaceState(null, '', cleanPath);
  };

  // Distinct fabric types for filter dropdown
  const allFabricTypes = useMemo(() => {
    const types = new Set(FABRIC_PRODUCTS.map((p) => p.fabricType));
    return Array.from(types).sort();
  }, []);

  // Filtered products list
  const filteredProducts = useMemo(() => {
    return FABRIC_PRODUCTS.filter((product) => {
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matches =
          product.name.toLowerCase().includes(q) ||
          product.sku.toLowerCase().includes(q) ||
          product.fabricType.toLowerCase().includes(q) ||
          product.collectionName.toLowerCase().includes(q) ||
          product.composition.toLowerCase().includes(q);
        if (!matches) return false;
      }

      // Collection filter
      if (selectedCollection !== 'all' && product.collectionId !== selectedCollection) {
        return false;
      }

      // Fabric type filter
      if (selectedFabricType !== 'all' && product.fabricType !== selectedFabricType) {
        return false;
      }

      // Availability status filter
      if (selectedAvailability !== 'all' && product.availabilityStatus !== selectedAvailability) {
        return false;
      }

      return true;
    });
  }, [searchQuery, selectedCollection, selectedFabricType, selectedAvailability]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCollection('all');
    setSelectedFabricType('all');
    setSelectedAvailability('all');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F5EF] text-[#252525] selection:bg-[#B69A62]/30 selection:text-[#252525]">
      {/* Top Header */}
      <Header
        currentView={currentView}
        onNavigate={navigateTo}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Main View Router */}
      <main className="grow">
        {/* VIEW 1: HOME */}
        {currentView === 'home' && (
          <div>
            {/* Hero Section */}
            <HeroSection
              onExploreCollections={() => navigateTo('collections')}
              onRequestQuote={(type) => handleOpenQuote(undefined, undefined, type)}
              onNavigateContact={() => navigateTo('contact')}
            />

            {/* Brand Introduction Section: Manufacturer & Wholesale Supplier */}
            <section className="py-14 sm:py-16 md:py-24 2xl:py-32 bg-white border-y border-[#E8DFD1]/80">
              <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 2xl:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                  <div className="lg:col-span-5 space-y-4">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#B69A62]">
                      <span>{t.introKicker}</span>
                    </div>
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-normal text-[#252525] leading-tight">
                      {t.introHeading}
                    </h2>
                  </div>

                  <div className="lg:col-span-7 space-y-6 text-sm sm:text-base 2xl:text-lg text-[#252525]/75 font-light leading-relaxed">
                    <p>
                      {t.introP1}
                    </p>
                    <p>
                      {t.introP2}
                    </p>

                    <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 text-xs font-normal">
                      <div className="p-4 bg-[#F8F5EF] border border-[#E8DFD1] rounded-xs space-y-1">
                        <span className="font-semibold text-[#252525] block">{t.introReadyTitle}</span>
                        <span className="text-[#252525]/70">{t.introReadyDesc}</span>
                      </div>
                      <div className="p-4 bg-[#F8F5EF] border border-[#E8DFD1] rounded-xs space-y-1">
                        <span className="font-semibold text-[#252525] block">{t.introOrderTitle}</span>
                        <span className="text-[#252525]/70">{t.introOrderDesc}</span>
                      </div>
                      <div className="p-4 bg-[#F8F5EF] border border-[#E8DFD1] rounded-xs space-y-1">
                        <span className="font-semibold text-[#252525] block">{t.introWorldwideTitle}</span>
                        <span className="text-[#252525]/70">{t.introWorldwideDesc}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Core Business Capabilities Spotlight */}
            <section className="py-14 sm:py-16 md:py-20 2xl:py-28 max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 2xl:px-16 space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E8DFD1] pb-4">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B69A62]">
                    {t.capabilitiesKicker}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#252525] mt-1">
                    {t.capabilitiesHeading}
                  </h3>
                </div>
                <button
                  onClick={() => navigateTo('wholesale')}
                  className="text-xs uppercase tracking-wider font-semibold text-[#252525] hover:text-[#977D4A] flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
                >
                  <span>{t.capabilitiesViewAll}</span>
                  <ArrowRight className={`w-3.5 h-3.5 text-[#B69A62] ${isRTL ? 'rotate-180' : ''}`} />
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { title: 'Textile Manufacturing', desc: 'Direct loom and dye house coordination' },
                  { title: 'Custom Fabric Manufacturing', desc: 'Tailored fiber blends, weave widths & finishes' },
                  { title: 'Wholesale Fabric Supply', desc: 'Ready inventory & volume roll supply' },
                  { title: 'Bulk Order Management', desc: 'Inspection, packing & international freight' },
                  { title: 'Ready Stock Collections', desc: 'Immediate unstitched designs ready for dispatch' },
                  { title: 'Order-Based Production', desc: 'Scheduled manufacturing for seasonal pret lines' },
                  { title: 'Customized Buyer Reqs', desc: 'Custom MOQ, lab dips & packaging specs' },
                  { title: 'Global Partnerships', desc: 'Supplying fashion businesses worldwide' },
                ].map((cap, i) => (
                  <div key={i} className="p-4 bg-white border border-[#E8DFD1] rounded-xs space-y-1">
                    <p className="font-serif text-base font-normal text-[#252525]">{cap.title}</p>
                    <p className="text-[11px] text-[#252525]/60 leading-relaxed">{cap.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Featured Collections Section */}
            <section className="py-14 sm:py-16 md:py-24 2xl:py-32 max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 2xl:px-16 space-y-10 sm:space-y-12">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E8DFD1] pb-6">
                <div className="space-y-2 max-w-2xl">
                  <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B69A62]">
                    {t.collectionsKicker}
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl 2xl:text-5xl text-[#252525] font-normal">
                    {t.collectionsHeading}
                  </h2>
                  <p className="text-xs sm:text-sm 2xl:text-base text-[#252525]/75 font-light">
                    {t.collectionsSub}
                  </p>
                </div>

                <button
                  onClick={() => navigateTo('collections')}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#252525] hover:text-[#977D4A] transition-colors cursor-pointer self-start md:self-auto"
                >
                  <span>{t.browseAllCollections}</span>
                  <ArrowRight className={`w-4 h-4 text-[#B69A62] ${isRTL ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {/* 6 Featured Collection Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-6 sm:gap-8 2xl:gap-10">
                {FABRIC_COLLECTIONS.map((collection) => (
                  <CollectionCard
                    key={collection.id}
                    collection={collection}
                    onSelect={(id) => {
                      setSelectedCollection(id);
                      navigateTo('collections', id);
                    }}
                  />
                ))}
              </div>
            </section>

            {/* Featured Products Showcase Section */}
            <section className="py-14 sm:py-16 md:py-24 2xl:py-32 bg-[#F4EFE6]/70 border-t border-[#E8DFD1]">
              <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 2xl:px-16 space-y-10 sm:space-y-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E8DFD1] pb-6">
                  <div className="space-y-2 max-w-2xl">
                    <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B69A62]">
                      {t.productsKicker}
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl 2xl:text-5xl text-[#252525] font-normal">
                      {t.productsHeading}
                    </h2>
                    <p className="text-xs sm:text-sm 2xl:text-base text-[#252525]/75 font-light">
                      {t.productsSub}
                    </p>
                  </div>

                  <button
                    onClick={() => navigateTo('collections')}
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#252525] bg-white border border-[#E8DFD1] hover:border-[#B69A62] rounded-xs transition-colors cursor-pointer self-start md:self-auto"
                  >
                    <span>{t.viewCompleteCatalogue}</span>
                    <ArrowUpRight className={`w-4 h-4 text-[#B69A62] ${isRTL ? '-scale-x-100' : ''}`} />
                  </button>
                </div>

                {/* 4 Selected Products */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 gap-5 sm:gap-6 2xl:gap-8">
                  {FABRIC_PRODUCTS.slice(0, 4).map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onViewDetails={handleViewProductDetails}
                      onRequestQuote={handleProductQuoteClick}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* Wholesale Direct CTA Section */}
            <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 2xl:px-16">
              <WholesaleCTA onRequestQuote={(type) => handleOpenQuote(undefined, undefined, type)} />
            </div>
          </div>
        )}

        {/* VIEW 2: COLLECTIONS & PRODUCT CATALOGUE */}
        {currentView === 'collections' && (
          <div className="pt-28 sm:pt-32 pb-16 sm:pb-20 md:pt-36 md:pb-28 2xl:pt-40 2xl:pb-32">
            <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 2xl:px-16 space-y-8 sm:space-y-10">
              {/* Catalogue Header */}
              <div className="space-y-3 max-w-3xl">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#B69A62]">
                  <span>{t.catalogueKicker}</span>
                  <span aria-hidden="true">·</span>
                  <span>{t.globalReach}</span>
                </div>
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl text-[#252525] font-normal">
                  {t.catalogueHeading}
                </h1>
                <p className="text-sm sm:text-base 2xl:text-lg text-[#252525]/75 font-light leading-relaxed">
                  {t.catalogueSub}
                </p>
              </div>

              {/* Filters Component */}
              <ProductFilters
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                selectedCollection={selectedCollection}
                onCollectionChange={setSelectedCollection}
                selectedFabricType={selectedFabricType}
                onFabricTypeChange={setSelectedFabricType}
                selectedAvailability={selectedAvailability}
                onAvailabilityChange={setSelectedAvailability}
                fabricTypes={allFabricTypes}
                totalResults={filteredProducts.length}
                onResetFilters={handleResetFilters}
              />

              {/* Products Grid */}
              <ProductGrid
                products={filteredProducts}
                onViewDetails={handleViewProductDetails}
                onRequestQuote={handleProductQuoteClick}
                onResetFilters={handleResetFilters}
              />

              {/* Sourcing Assistance Banner */}
              <div className="p-8 bg-white border border-[#E8DFD1] rounded-sm flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="space-y-1">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#252525]">
                    {t.customSourcingPromptTitle}
                  </h3>
                  <p className="text-xs text-[#252525]/70 max-w-xl leading-relaxed">
                    {t.customSourcingPromptDesc}
                  </p>
                </div>
                <button
                  onClick={() => handleOpenQuote(undefined, undefined, 'Custom Fabric Manufacturing')}
                  className="py-3 px-6 text-xs font-semibold uppercase tracking-wider text-[#F8F5EF] bg-[#252525] hover:bg-[#383838] transition-colors rounded-xs whitespace-nowrap cursor-pointer"
                >
                  {t.ctaManufacturingInquiries}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 3: MANUFACTURING & WHOLESALE SOLUTIONS */}
        {currentView === 'wholesale' && (
          <WholesaleSolutionsView onRequestQuote={(type) => handleOpenQuote(undefined, undefined, type)} />
        )}

        {/* VIEW 4: HOW WE WORK */}
        {currentView === 'how-it-works' && (
          <HowWeWorkView onRequestQuote={(type) => handleOpenQuote(undefined, undefined, type)} />
        )}

        {/* VIEW 5: ABOUT US */}
        {currentView === 'about' && (
          <AboutView
            onRequestQuote={(type) => handleOpenQuote(undefined, undefined, type)}
            onExploreCollections={() => navigateTo('collections')}
            onNavigateContact={() => navigateTo('contact')}
          />
        )}

        {/* VIEW 6: CONTACT */}
        {currentView === 'contact' && <ContactView />}

        {/* VIEW 7: REQUEST A QUOTE (DEDICATED INQUIRY VIEW) */}
        {currentView === 'quote' && (
          <div className="pt-28 sm:pt-32 pb-16 sm:pb-20 md:pt-36 md:pb-28 2xl:pt-40 2xl:pb-32">
            <div className="max-w-4xl 2xl:max-w-5xl mx-auto px-4 sm:px-6 md:px-10 2xl:px-16 space-y-8">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B69A62]">
                  {t.globalReach}
                </span>
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl text-[#252525] font-normal">
                  {t.requestCustomQuote}
                </h1>
                <p className="text-sm 2xl:text-base text-[#252525]/75 font-light leading-relaxed">
                  {t.quoteFormSub}
                </p>
              </div>

              <QuoteInquiryForm
                initialSku={quoteSku}
                initialProductName={quoteProductName}
                initialInquiryType={quoteInquiryType}
              />
            </div>
          </div>
        )}
      </main>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={handleCloseProductModal}
        onRequestQuote={handleProductQuoteClick}
        onSelectRelated={(prod) => {
          setSelectedProduct(prod);
          window.history.replaceState(null, '', `#product/${prod.id}`);
        }}
        allProducts={FABRIC_PRODUCTS}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={FABRIC_PRODUCTS}
        onSelectProduct={handleViewProductDetails}
        onViewAllResults={(query) => {
          setSearchQuery(query);
          navigateTo('collections');
        }}
      />

      {/* Legal Modal (Privacy & Terms) */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* Floating WhatsApp Business Button */}
      <WhatsAppButton />

      {/* Website Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenQuote={() => handleOpenQuote()}
        onOpenLegal={(type) => setLegalModalType(type)}
      />
    </div>
  );
}
