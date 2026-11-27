import { CATEGORIES } from '../data/marketplace';
import { CategoryGlyph } from './Icons';

export function CategorySection({ activeCategory, onSelectCategory }) {
  return (
    <section id="explore" className="category-section">
      <div className="container">
        <div className="section-header">
          <div>
            <span className="eyebrow-pill eyebrow-pill--matcha">
              Categories ✦ Explore by craft
            </span>
            <h2 className="section-title">Everything for your creative corner.</h2>
          </div>
          <p className="section-subtitle">
            Browse curated building blocks, motion kits, and illustrated details ready to drop
            straight into your projects.
          </p>
        </div>

        <div className="category-grid">
          {CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <a
                key={cat.id}
                href="#resources"
                className={`category-card tone-${cat.tone} ${isSelected ? 'category-card--active' : ''}`}
                onClick={() => onSelectCategory(isSelected ? 'All' : cat.id)}
              >
                <div className="category-icon-box">
                  <CategoryGlyph id={cat.id} />
                </div>
                <div className="category-meta">
                  <div className="category-top-row">
                    <h3 className="category-name">{cat.title}</h3>
                    <span className="category-count">{cat.count}</span>
                  </div>
                  <p className="category-desc">{cat.description}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
