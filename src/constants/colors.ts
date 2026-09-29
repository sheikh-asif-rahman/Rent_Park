export const COLORS = {
  // ⚪ Primary — White dominates (80%)
  background: '#FFFFFF',       // Main screen background
  surface: '#F7F7F7',          // Cards, subtle panels
  surfaceElevated: '#FFFFFF',  // Elevated cards

  // ⚫ Secondary — Black anchors (20%)
  dark: '#000000',             // Primary buttons, key text, shapes
  darkSoft: '#1A1A1A',         // Slightly softer black
  darkMuted: '#333333',        // Secondary black text

  // 📝 Text
  textPrimary: '#000000',      // Main text on white
  textSecondary: '#555555',    // Subtitles on white
  textMuted: '#8E8E8E',        // Hints, placeholders
  textOnDark: '#FFFFFF',       // White text on black surfaces

  // 🔲 Borders & dividers
  border: '#E5E5E5',
  borderStrong: '#000000',

  // ✅ Status (grayscale, keeps the theme pure)
  success: '#2E7D32',
  error: '#C62828',
  warning: '#F9A825',
  info: '#1565C0',

  // 🎭 Overlays
  overlay: 'rgba(0, 0, 0, 0.5)',
} as const;

export type ColorKey = keyof typeof COLORS;