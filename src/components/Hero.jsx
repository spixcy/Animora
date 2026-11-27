import { useState } from 'react';
import { StudioSproutBuddy } from './Icons';

export function Hero({ onJumpToAnimations }) {
  const [cozyMode, setCozyMode] = useState(true);
  const [popCount, setPopCount] = useState(0);

  return (
    <section id="top" className="hero-section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-kicker">Handcrafted UI atelier ✦ Cozy digital goods</p>

          <h1 className="hero-title">
            We craft
            <br />
            <span className="hero-cozy-badge">cozy</span>
            <br />
            UI pieces.
          </h1>

          <p className="hero-description">
            Welcome to a warm little corner of the internet for reusable components, playful
            animations, widgets, and illustrated tools made to bring charm to every interface.
          </p>

          <div className="hero-cta-row">
            <div className="hero-primary-wrap">
              <span className="tape-sticker" aria-hidden="true">
                FRESH DROPS ✦
              </span>
              <a href="#resources" className="btn btn--butter">
                Explore Assets →
              </a>
            </div>

            <a
              href="#resources"
              className="btn btn--matcha"
              onClick={onJumpToAnimations}
            >
              Browse Animations
            </a>
          </div>
        </div>

        {/* Right Column: CozyCorner-inspired segmented pastel UI Bento Showcase */}
        <div className="hero-bento-wrap">
          <div className="floating-tag floating-tag--top animate-float">
            <span>✦ 120+ Handcrafted Assets</span>
          </div>

          <div className="hero-bento" aria-label="Interactive UI kit preview">
            <div className="bento-tile bento-tile--matcha">
              <span className="bento-mini-label">COMPONENT</span>
              <div className="bento-word">ANIMORA</div>
              <button
                type="button"
                className="bento-toggle"
                onClick={() => setCozyMode((prev) => !prev)}
                aria-pressed={cozyMode}
              >
                <span className={`bento-toggle-dot ${cozyMode ? 'is-on' : ''}`} />
                <span>{cozyMode ? 'Cozy On' : 'Classic'}</span>
              </button>
            </div>

            <div className="bento-tile bento-tile--blush">
              <span className="bento-mini-label">MICRO-MOTION</span>
              <button
                type="button"
                className="bento-pop-btn"
                onClick={() => setPopCount((c) => c + 1)}
              >
                Tap Pop {popCount > 0 ? `×${popCount}` : '✦'}
              </button>
            </div>

            <div className="bento-tile bento-tile--butter">
              <span className="bento-mini-label">TOKENS</span>
              <div className="swatch-row" aria-hidden="true">
                <span className="swatch" style={{ background: '#9EE37D' }} />
                <span className="swatch" style={{ background: '#FFB6C1' }} />
                <span className="swatch" style={{ background: '#AEE5FF' }} />
                <span className="swatch" style={{ background: '#1A1A12' }} />
              </div>
              <span className="bento-caption">Soft Ink Palette</span>
            </div>

            <div className="bento-tile bento-tile--lavender">
              <span className="bento-mini-label">WIDGETS</span>
              <div className="mini-player">
                <span className="mini-play-dot" />
                <span className="mini-bars" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
                <span>Lofi Rain</span>
              </div>
            </div>

            <div className="bento-tile bento-tile--cream bento-tile--wide">
              <span className="bento-pill-chip">React + CSS</span>
              <span className="bento-pill-chip bento-pill-chip--sky">Zero Bloat</span>
              <span className="bento-pill-chip bento-pill-chip--blush">Copy &amp; Ship ♡</span>
            </div>
          </div>

          <a href="#collections" className="notice-card">
            <span className="notice-eyebrow">STUDIO NOTE</span>
            <strong className="notice-title">Morning Matcha Kit</strong>
            <span className="notice-sub">42 UI pieces ready →</span>
          </a>
        </div>
      </div>

      <div className="container hero-buddy-row">
        <StudioSproutBuddy />
      </div>
    </section>
  );
}
