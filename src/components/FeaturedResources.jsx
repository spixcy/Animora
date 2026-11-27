import { CATEGORIES, FEATURED_RESOURCES } from '../data/marketplace';
import { HeartIcon } from './Icons';

function ResourcePreview({ type }) {
  switch (type) {
    case 'buttons':
      return (
        <div className="preview-stage preview-stage--buttons">
          <span className="mini-btn mini-btn--butter">Save Piece ♡</span>
          <span className="mini-btn mini-btn--matcha">Launch ✦</span>
        </div>
      );
    case 'widget':
      return (
        <div className="preview-stage preview-stage--widget">
          <div className="mini-widget-box">
            <span className="mini-widget-temp">22° Sunny</span>
            <span className="mini-widget-time">Studio Desk • 09:40</span>
          </div>
        </div>
      );
    case 'background':
      return (
        <div className="preview-stage preview-stage--pattern">
          <div className="swatch-tile swatch-tile--gingham" />
          <div className="swatch-tile swatch-tile--dots" />
        </div>
      );
    case 'animation':
      return (
        <div className="preview-stage preview-stage--motion">
          <svg width="120" height="68" viewBox="0 0 120 68" fill="none" aria-hidden="true">
            <path
              d="M14 52C32 52 38 16 60 16C82 16 88 52 106 52"
              stroke="#1A1A12"
              strokeWidth="2.4"
              strokeDasharray="4 4"
            />
            <circle cx="60" cy="16" r="10" fill="#FFE66D" stroke="#1A1A12" strokeWidth="2.2" />
            <circle cx="14" cy="52" r="5" fill="#9EE37D" stroke="#1A1A12" strokeWidth="2" />
            <circle cx="106" cy="52" r="5" fill="#FFB6C1" stroke="#1A1A12" strokeWidth="2" />
          </svg>
        </div>
      );
    case 'illustration':
      return (
        <div className="preview-stage preview-stage--sticker">
          <span className="mini-sticker">NEW DROP ✦</span>
          <span className="mini-sticker mini-sticker--alt">HANDMADE ♡</span>
        </div>
      );
    case 'component':
      return (
        <div className="preview-stage preview-stage--card">
          <div className="mini-ui-card">
            <span className="mini-avatar" />
            <div className="mini-lines">
              <span />
              <span className="short" />
            </div>
          </div>
        </div>
      );
    case 'effect':
      return (
        <div className="preview-stage preview-stage--effect">
          <span className="sparkle-chip">✦ Hover Sheen</span>
        </div>
      );
    default:
      return (
        <div className="preview-stage preview-stage--tool">
          <div className="palette-strip">
            <span style={{ background: '#FFE66D' }}>AA</span>
            <span style={{ background: '#9EE37D' }}>AA</span>
            <span style={{ background: '#FFB6C1' }}>AA</span>
          </div>
        </div>
      );
  }
}

export function FeaturedResources({
  activeCategory,
  onSelectCategory,
  searchQuery,
  onClearFilters,
  wishlistIds,
  onToggleWishlist,
  showingWishlistOnly,
}) {
  const filterOptions = ['All', ...CATEGORIES.map((c) => c.id)];
  const query = searchQuery.trim().toLowerCase();

  const filtered = FEATURED_RESOURCES.filter((item) => {
    if (showingWishlistOnly && !wishlistIds.includes(item.id)) return false;
    if (activeCategory !== 'All' && item.category !== activeCategory) return false;
    if (!query) return true;
    return (
      item.name.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
    );
  });

  return (
    <section id="resources" className="resources-section">
      <div className="container">
        <div className="section-header">
          <div>
            <span className="eyebrow-pill eyebrow-pill--butter">
              Featured Shop ✦ Curated Drops
            </span>
            <h2 className="section-title">Take a piece of cozy home.</h2>
          </div>

          {(activeCategory !== 'All' || query || showingWishlistOnly) && (
            <button type="button" className="btn btn--sm" onClick={onClearFilters}>
              Reset Filters ✕
            </button>
          )}
        </div>

        <div className="filter-pills" role="tablist" aria-label="Filter featured resources">
          {filterOptions.map((cat) => {
            const active = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={active}
                className={`filter-pill ${active ? 'filter-pill--active' : ''}`}
                onClick={() => onSelectCategory(cat)}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {filtered.length === 0 ? (
          <div className="empty-state">
            <p className="empty-state-title">No cozy pieces matched your current filter.</p>
            <button type="button" className="btn btn--butter btn--sm" onClick={onClearFilters}>
              Show All Resources
            </button>
          </div>
        ) : (
          <div className="resource-grid">
            {filtered.map((item) => {
              const saved = wishlistIds.includes(item.id);
              return (
                <article key={item.id} className="resource-card">
                  <div className={`resource-preview tone-${item.tone}`}>
                    <div className="resource-badges">
                      <span className="badge-pill">{item.category}</span>
                      <span className={`badge-pill ${item.isFree ? 'badge-pill--free' : 'badge-pill--price'}`}>
                        {item.price}
                      </span>
                    </div>

                    <button
                      type="button"
                      className={`wishlist-btn ${saved ? 'is-saved' : ''}`}
                      onClick={() => onToggleWishlist(item.id)}
                      aria-label={saved ? `Remove ${item.name} from wishlist` : `Save ${item.name} to wishlist`}
                      aria-pressed={saved}
                    >
                      <HeartIcon filled={saved} />
                    </button>

                    <ResourcePreview type={item.previewType} />
                  </div>

                  <div className="resource-body">
                    <h3 className="resource-name">{item.name}</h3>
                    <p className="resource-desc">{item.description}</p>
                    <div className="resource-footer">
                      <span className="resource-format">React + CSS</span>
                      <a href="#collections" className="resource-action">
                        Preview ↗
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
