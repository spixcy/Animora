import { AnimoraLogo } from './Icons';

export function Footer({ onSelectCategory }) {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a href="#top" className="brand" onClick={() => onSelectCategory('All')}>
            <AnimoraLogo size={34} />
            <span className="brand-wordmark">
              <span className="brand-name">animora</span>
              <span className="brand-tag">creative ui corner</span>
            </span>
          </a>
          <p className="footer-tagline">
            An independent digital boutique for cozy UI components, playful animations, widgets,
            and warm handcrafted assets.
          </p>
        </div>

        <div className="footer-col">
          <h3 className="footer-heading">Explore</h3>
          <ul className="footer-list">
            <li><a href="#top">Home</a></li>
            <li><a href="#explore">Explore All</a></li>
            <li><a href="#resources">Featured Drops</a></li>
            <li><a href="#collections">Curated Kits</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="footer-heading">Categories</h3>
          <ul className="footer-list">
            <li>
              <a href="#resources" onClick={() => onSelectCategory('UI Components')}>
                UI Components
              </a>
            </li>
            <li>
              <a href="#resources" onClick={() => onSelectCategory('Animations')}>
                Animations
              </a>
            </li>
            <li>
              <a href="#resources" onClick={() => onSelectCategory('Widgets')}>
                Widgets
              </a>
            </li>
            <li>
              <a href="#resources" onClick={() => onSelectCategory('Illustrations')}>
                Illustrations
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="footer-heading">Follow Us</h3>
          <div className="social-row">
            <a href="#top" className="social-circle social-circle--blush" aria-label="Instagram placeholder">
              IG
            </a>
            <a href="#top" className="social-circle social-circle--sky" aria-label="Dribbble placeholder">
              DR
            </a>
            <a href="#top" className="social-circle social-circle--matcha" aria-label="GitHub placeholder">
              GH
            </a>
          </div>
          <a href="#collections" className="btn btn--butter btn--sm footer-support-btn">
            Buy us a matcha ♡
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 Animora Studio. Handcrafted with cozy care.</span>
        <div className="footer-legal">
          <a href="#top">License</a>
          <a href="#top">Terms</a>
          <a href="#top">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
