import { TICKER_ITEMS } from '../data/marketplace';

export function TickerBand({ tone = 'butter', items = TICKER_ITEMS }) {
  const bandClass =
    tone === 'pink'
      ? 'ticker-band ticker-band--pink'
      : tone === 'matcha'
        ? 'ticker-band ticker-band--matcha'
        : 'ticker-band';

  const repeated = [...items, ...items];

  return (
    <div className={bandClass} aria-hidden="true">
      <div className="ticker-track">
        {repeated.map((label, idx) => (
          <span className="ticker-item" key={`${label}-${idx}`}>
            <span>{label}</span>
            <span className="ticker-dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
