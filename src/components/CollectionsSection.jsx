import { COLLECTIONS } from '../data/marketplace';

function CollectionVisual({ visual }) {
  if (visual === 'matcha') {
    return (
      <div className="collection-artwork collection-artwork--matcha" aria-hidden="true">
        <div className="artwork-window">
          <div className="artwork-bar">
            <span />
            <span />
            <span />
          </div>
          <div className="artwork-grid">
            <div className="artwork-card-a">Matcha Tokens</div>
            <div className="artwork-card-b">42 Pieces</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="collection-artwork collection-artwork--motion" aria-hidden="true">
      <div className="artwork-stickers">
        <span className="sticker-bubble sticker-bubble--butter">Boing ✦</span>
        <span className="sticker-bubble sticker-bubble--blush">Wobble ♡</span>
        <span className="sticker-bubble sticker-bubble--sky">Spring 60fps</span>
      </div>
    </div>
  );
}

export function CollectionsSection() {
  return (
    <section id="collections" className="collections-section">
      <div className="container">
        <div className="section-header">
          <div>
            <span className="eyebrow-pill eyebrow-pill--blush">
              Creative Collections ✦ Handpicked Bundles
            </span>
            <h2 className="section-title">Curated kits you&apos;ll want to keep.</h2>
          </div>
          <p className="section-subtitle">
            Thoughtfully paired components, palettes, and motion presets designed as complete
            little worlds.
          </p>
        </div>

        <div className="collections-grid">
          {COLLECTIONS.map((kit) => (
            <article key={kit.id} className="collection-card">
              <div className="collection-visual-wrap">
                <span className={`collection-badge tone-${kit.accent}`}>{kit.badge}</span>
                <CollectionVisual visual={kit.visual} />
              </div>

              <div className="collection-body">
                <span className="collection-subtitle">{kit.subtitle}</span>
                <h3 className="collection-title">{kit.title}</h3>
                <p className="collection-desc">{kit.description}</p>

                <div className="collection-tags">
                  {kit.tags.map((tag) => (
                    <span key={tag} className="tag-chip">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="collection-cta-row">
                  <a href="#resources" className={`btn btn--sm btn--${kit.accent}`}>
                    Explore Kit →
                  </a>
                  <span className="collection-price">{kit.priceLabel}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
