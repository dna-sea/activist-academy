/**
 * Branding footer for the character sheet.
 *
 * Placed INSIDE the sheetRef div so it's automatically captured by
 * html-to-image in both PNG and PDF exports — zero changes needed
 * to the export pipeline in ShareControls.jsx.
 *
 * Uses exact GJLA brand colors (not the app's theme variants):
 *   Navy: #1B2A4A | Gold: #E8A020 | Teal: #1D7A6E
 */

import { GJLAShieldIcon } from '../icons/GJLALogo';

export default function BrandingFooter() {
  return (
    <div
      className="px-6 py-5"
      style={{ borderTop: '1px solid rgba(27, 42, 74, 0.12)' }}
    >
      {/* Logo + program attribution */}
      <div className="flex items-center gap-2.5 justify-center mb-3">
        <GJLAShieldIcon size={28} />
        <div style={{ lineHeight: 1.35 }}>
          <div
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontWeight: 700,
              fontSize: 13,
              color: '#1D7A6E',
              letterSpacing: '0.02em',
            }}
          >
            The Activist Academy
          </div>
          <div
            style={{
              fontFamily: 'Calibri, "Segoe UI", system-ui, sans-serif',
              fontSize: 10,
              color: '#2D2D2D',
              opacity: 0.45,
              marginTop: 1,
            }}
          >
            A program of Gender Justice League Action
          </div>
        </div>
      </div>

      {/* URL + tagline */}
      <div className="text-center">
        <a
          href="https://www.theactivistacademy.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'Calibri, "Segoe UI", system-ui, sans-serif',
            fontSize: 10.5,
            color: '#1D7A6E',
            textDecoration: 'none',
            display: 'block',
            marginBottom: 4,
          }}
        >
          www.theactivistacademy.org
        </a>
        <div
          style={{
            fontFamily: 'Calibri, "Segoe UI", system-ui, sans-serif',
            fontSize: 8,
            fontWeight: 700,
            color: '#E8A020',
            opacity: 0.5,
            letterSpacing: 3,
            textTransform: 'uppercase',
          }}
        >
          Dignity. Rights. Power.
        </div>
      </div>
    </div>
  );
}
