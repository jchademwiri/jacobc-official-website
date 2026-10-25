import { describe, expect, it } from 'bun:test';
import { getPortfolioImageUrl, getBlogImageUrl, PROFILE_PORTRAIT_URL } from '../src/lib/images';

describe('images', () => {
  it('resolves mapped portfolio image', () => {
    expect(getPortfolioImageUrl('portfolio-portal')).toBe('/images/portfolio/portfolio-portal.webp');
    expect(getPortfolioImageUrl('portfolio-tendertrack')).toBe('/images/portfolio/portfolio-tendertrack.webp');
  });

  it('preserves absolute URLs or leading slashes', () => {
    expect(getPortfolioImageUrl('/custom/path.png')).toBe('/custom/path.png');
    expect(getPortfolioImageUrl('https://example.com/img.jpg')).toBe('https://example.com/img.jpg');
  });

  it('falls back to default webp path for unmapped keys', () => {
    expect(getPortfolioImageUrl('unmapped-project')).toBe('/images/portfolio/unmapped-project.webp');
  });

  it('resolves mapped blog image', () => {
    expect(getBlogImageUrl('iso-9001-rollout')).toBe('/images/blog/iso-9001-rollout.webp');
    expect(getBlogImageUrl('nextjs-vs-wordpress')).toBe('/images/blog/nextjs-vs-wordpress.webp');
  });

  it('has valid profile portrait URL', () => {
    expect(PROFILE_PORTRAIT_URL).toBe('/images/profile/jacob-portrait.webp');
  });
});
