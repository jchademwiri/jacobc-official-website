/**
 * Email clients can't read CSS custom properties, so the Executive Charcoal &
 * Warm Bronze palette is mirrored here as literal hex values (zero blue).
 */
export const brand = {
  bg: '#f6f4ef',
  surface: '#efece5',
  card: '#faf8f4',
  text: '#1c1c1c',
  text2: '#4f4d49',
  text3: '#6b6862',
  accent: '#8a6b3f',
  edge: '#ddd8ce',
} as const;

export const font = {
  sans: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  mono: "'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
} as const;
