import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { TickerBand } from './components/TickerBand';
import { Hero } from './components/Hero';
import { CategorySection } from './components/CategorySection';
import { FeaturedResources } from './components/FeaturedResources';
import { CollectionsSection } from './components/CollectionsSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [wishlistIds, setWishlistIds] = useState(['mochi-button-pack']);
  const [showingWishlistOnly, setShowingWishlistOnly] = useState(false);

  const handleToggleWishlist = (id) => {
    setWishlistIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const handleSelectCategory = (category) => {
    setShowingWishlistOnly(false);
    setActiveCategory(category);
  };

  const handleClearFilters = () => {
    setActiveCategory('All');
    setSearchQuery('');
    setShowingWishlistOnly(false);
  };

  return (
    <div className="app-shell">
      <Navbar
        searchQuery={searchQuery}
        onSearchChange={(val) => {
          setShowingWishlistOnly(false);
          setSearchQuery(val);
        }}
        wishlistCount={wishlistIds.length}
        onSelectCategory={handleSelectCategory}
        onToggleWishlistView={() => setShowingWishlistOnly((prev) => !prev)}
        showingWishlistOnly={showingWishlistOnly}
      />

      <TickerBand tone="pink" />

      <main>
        <Hero onJumpToAnimations={() => handleSelectCategory('Animations')} />

        <TickerBand tone="butter" />

        <CategorySection
          activeCategory={activeCategory}
          onSelectCategory={handleSelectCategory}
        />

        <FeaturedResources
          activeCategory={activeCategory}
          onSelectCategory={handleSelectCategory}
          searchQuery={searchQuery}
          onClearFilters={handleClearFilters}
          wishlistIds={wishlistIds}
          onToggleWishlist={handleToggleWishlist}
          showingWishlistOnly={showingWishlistOnly}
        />

        <TickerBand tone="matcha" />

        <CollectionsSection />
      </main>

      <Footer onSelectCategory={handleSelectCategory} />
    </div>
  );
}
