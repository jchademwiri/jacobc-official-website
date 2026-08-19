/**
 * Email clients can't read CSS custom properties, so the brand palette has to be
 * repeated as literal hex here. These mirror the `@theme` block in
 * src/styles/global.css — change them together.
 */
export const brand = {
  bg: '#161826',
  surface: '#232532',
  text: '#e9e9ed',
  text2: '#bbbbc1',
  text3: '#909199',
  accent: '#9184d9',
  edge: '#3f424d',
} as const;

/**
 * Webfonts are unreliable in email, so these are system stacks. The mono stack
 * keeps the site's "figures that carry information are set in mono" idea intact
 * wherever the client has a monospace face, which is everywhere.
 */
export const font = {
  sans: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  mono: "'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
} as const;
