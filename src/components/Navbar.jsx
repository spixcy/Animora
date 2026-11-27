import { useEffect, useState } from 'react';
import { NAV_LINKS } from '../data/marketplace';
import { AnimoraLogo, HeartIcon, MenuIcon, SearchIcon, SquiggleLine, UserIcon } from './Icons';

export function Navbar({
  searchQuery,
  onSearchChange,
  wishlistCount,
  onSelectCategory,
  onToggleWishlistView,
  showingWishlistOnly,
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  const handleLinkClick = (item) => {
    setMenuOpen(false);
    if (item.category) {
      onSelectCategory(item.category);
    } else if (item.label === 'Home' || item.label === 'Explore') {
      onSelectCategory('All');
    }
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#top" className="brand" onClick={() => onSelectCategory('All')}>
          <AnimoraLogo size={36} />
          <span className="brand-wordmark">
            <span className="brand-name">animora</span>
            <span className="brand-tag">cozy ui shop ♡</span>
          </span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          {NAV_LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`nav-link ${item.highlight ? 'nav-link--highlight' : ''}`}
              onClick={() => handleLinkClick(item)}
            >
              <span>{item.label}</span>
              {item.highlight && <SquiggleLine width={54} />}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <label className="nav-search" aria-label="Search UI resources">
            <SearchIcon />
            <input
              type="search"
              placeholder="Search assets..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </label>

          <button
            type="button"
            className={`icon-pill ${showingWishlistOnly ? 'icon-pill--active' : ''}`}
            onClick={onToggleWishlistView}
            aria-label={`Saved wishlist (${wishlistCount})`}
            aria-pressed={showingWishlistOnly}
            title="Filter by saved wishlist"
          >
            <HeartIcon filled={wishlistCount > 0 || showingWishlistOnly} />
            <span className="wishlist-badge">{wishlistCount}</span>
          </button>

          <a href="#collections" className="account-pill" aria-label="Creator account preview">
            <UserIcon />
            <span className="account-label">Studio</span>
          </a>

          <button
            type="button"
            className="mobile-menu-btn"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className="mobile-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <div className="mobile-drawer-top">
            <button
              type="button"
              className="mobile-close-btn"
              aria-label="Close navigation menu"
              onClick={() => setMenuOpen(false)}
            >
              <MenuIcon open />
            </button>
          </div>

          <nav className="mobile-drawer-nav" aria-label="Mobile navigation">
            <div className="mobile-links">
              {NAV_LINKS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`mobile-link ${item.highlight ? 'mobile-link--highlight' : ''}`}
                  onClick={() => handleLinkClick(item)}
                >
                  <span>{item.label}</span>
                  {item.highlight && <SquiggleLine width={84} />}
                </a>
              ))}
            </div>

            <hr className="mobile-divider" />

            <a
              href="#collections"
              className="mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              Studio
            </a>

            <label className="mobile-search" aria-label="Search UI resources">
              <SearchIcon />
              <input
                type="search"
                placeholder="Search components, animations..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
              />
            </label>
          </nav>
        </div>
      )}
    </header>
  );
}
