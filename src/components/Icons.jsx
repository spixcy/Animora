export function AnimoraLogo({ size = 34 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="20" cy="20" r="18" fill="#FFE66D" stroke="#1A1A12" strokeWidth="2.5" />
      <path
        d="M12 24C12 17.5 15.6 13 20 13C24.4 13 28 17.5 28 24C28 26.8 25.2 28.5 20 28.5C14.8 28.5 12 26.8 12 24Z"
        fill="#9EE37D"
        stroke="#1A1A12"
        strokeWidth="2.2"
      />
      <circle cx="17" cy="21" r="1.4" fill="#1A1A12" />
      <circle cx="23" cy="21" r="1.4" fill="#1A1A12" />
      <path
        d="M18.3 23.5C19.2 24.6 20.8 24.6 21.7 23.5"
        stroke="#1A1A12"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M20 9.5L21 12.2L23.5 11.8L21.5 13.7L22.5 16"
        stroke="#1A1A12"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2.4" />
      <path d="M16.5 16.5L21 21" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

export function HeartIcon({ filled = false }) {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 20.2C12 20.2 4 14.8 4 9.2C4 6.5 6.1 4.5 8.6 4.5C10.2 4.5 11.4 5.3 12 6.5C12.6 5.3 13.8 4.5 15.4 4.5C17.9 4.5 20 6.5 20 9.2C20 14.8 12 20.2 12 20.2Z"
        fill={filled ? '#FF6B9D' : 'none'}
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function UserIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8.5" r="4" stroke="currentColor" strokeWidth="2.2" />
      <path
        d="M5 19.5C5.8 16.2 8.6 14.5 12 14.5C15.4 14.5 18.2 16.2 19 19.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MenuIcon({ open = false }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {open ? (
        <path
          d="M6 6L18 18M18 6L6 18"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M4 7H20M4 12H20M4 17H20"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}

export function SquiggleLine({ color = '#FF6B9D', width = 62 }) {
  return (
    <svg
      width={width}
      height="8"
      viewBox="0 0 64 8"
      fill="none"
      aria-hidden="true"
      className="squiggle-svg"
    >
      <path
        d="M2 5C8 1 14 7 20 3C26 0 32 7 38 3C44 0 50 7 56 3C59 1.5 61 3 62 4"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* Original peeking little sprout-blob studio buddy for the hero corner */
export function StudioSproutBuddy() {
  return (
    <svg
      width="82"
      height="62"
      viewBox="0 0 82 62"
      fill="none"
      aria-hidden="true"
      className="hero-buddy"
    >
      <path
        d="M39 14C39 8 44 4 49 5C48 11 44 14 39 14Z"
        fill="#9EE37D"
        stroke="#1A1A12"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path
        d="M39 14C37 9 32 7 28 9C30 14 35 15 39 14Z"
        fill="#FFE66D"
        stroke="#1A1A12"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path
        d="M11 61C11 35 23 20 41 20C59 20 71 35 71 61Z"
        fill="#FFC899"
        stroke="#1A1A12"
        strokeWidth="2.6"
      />
      <circle cx="31" cy="40" r="3.4" fill="#1A1A12" />
      <circle cx="51" cy="40" r="3.4" fill="#1A1A12" />
      <circle cx="29.8" cy="38.8" r="1.1" fill="#FFFFFF" />
      <circle cx="49.8" cy="38.8" r="1.1" fill="#FFFFFF" />
      <ellipse cx="24" cy="45" rx="4" ry="2.2" fill="#FF9AA2" />
      <ellipse cx="58" cy="45" rx="4" ry="2.2" fill="#FF9AA2" />
      <path
        d="M36 45C38.5 48 43.5 48 46 45"
        stroke="#1A1A12"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CategoryGlyph({ id }) {
  switch (id) {
    case 'UI Components':
      return (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
          <rect x="4" y="6" width="28" height="24" rx="5" fill="#FFFFFF" stroke="#1A1A12" strokeWidth="2.2" />
          <path d="M4 13H32" stroke="#1A1A12" strokeWidth="2.2" />
          <rect x="8" y="17" width="9" height="8" rx="2" fill="#9EE37D" stroke="#1A1A12" strokeWidth="1.8" />
          <path d="M21 18H28M21 23H26" stroke="#1A1A12" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'Animations':
      return (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
          <circle cx="22" cy="14" r="9" fill="#FFE66D" stroke="#1A1A12" strokeWidth="2.2" />
          <path d="M7 26C10 21 15 19 19 20" stroke="#1A1A12" strokeWidth="2.2" strokeLinecap="round" strokeDasharray="3 3" />
          <path d="M22 10V18M18 14H26" stroke="#1A1A12" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'Widgets':
      return (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
          <rect x="5" y="5" width="12" height="12" rx="3.5" fill="#FFB6C1" stroke="#1A1A12" strokeWidth="2.2" />
          <rect x="19" y="5" width="12" height="12" rx="3.5" fill="#FFFFFF" stroke="#1A1A12" strokeWidth="2.2" />
          <rect x="5" y="19" width="26" height="12" rx="4" fill="#FFE66D" stroke="#1A1A12" strokeWidth="2.2" />
        </svg>
      );
    case 'Buttons':
      return (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
          <rect x="4" y="12" width="28" height="13" rx="6.5" fill="#1A1A12" />
          <rect x="4" y="9.5" width="28" height="13" rx="6.5" fill="#AEE5FF" stroke="#1A1A12" strokeWidth="2.2" />
          <path d="M12 16H24" stroke="#1A1A12" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );
    case 'Backgrounds':
      return (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
          <rect x="5" y="5" width="26" height="26" rx="5" fill="#FFFFFF" stroke="#1A1A12" strokeWidth="2.2" />
          <rect x="5" y="5" width="13" height="13" fill="#D2C4FB" />
          <rect x="18" y="18" width="13" height="13" fill="#D2C4FB" />
          <rect x="5" y="5" width="26" height="26" rx="5" stroke="#1A1A12" strokeWidth="2.2" />
        </svg>
      );
    case 'Illustrations':
      return (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
          <path
            d="M18 5L21 13L29 14L23 19.5L24.5 28L18 24L11.5 28L13 19.5L7 14L15 13L18 5Z"
            fill="#FFC899"
            stroke="#1A1A12"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'Effects':
      return (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
          <path d="M18 5V11M18 25V31M5 18H11M25 18H31" stroke="#1A1A12" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="18" cy="18" r="5.5" fill="#FFE66D" stroke="#1A1A12" strokeWidth="2.2" />
        </svg>
      );
    default:
      return (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
          <circle cx="13" cy="18" r="7" fill="#9EE37D" stroke="#1A1A12" strokeWidth="2.2" />
          <circle cx="23" cy="18" r="7" fill="#FFB6C1" stroke="#1A1A12" strokeWidth="2.2" />
        </svg>
      );
  }
}
