const PORTFOLIO_IMAGE_MAP: Record<string, string> = {
  'portfolio-portal': '/images/portfolio/portfolio-portal.webp',
  'portfolio-tendertrack': '/images/portfolio/portfolio-tendertrack.webp',
  'portfolio-tender-toilets': '/images/portfolio/portfolio-tender-toilets.webp',
  'portfolio-tender-equipment': '/images/portfolio/portfolio-tender-equipment.webp',
  'portfolio-tender-vehicles': '/images/portfolio/portfolio-tender-vehicles.webp',
  'portfolio-tender-horticulture': '/images/portfolio/portfolio-tender-horticulture.webp',
  'portfolio-tender-water': '/images/portfolio/portfolio-tender-water.svg',
  'portfolio-apex': '/images/portfolio/portfolio-apex.svg',
  'portfolio-beccas': '/images/portfolio/portfolio-beccas.svg',
  'portfolio-oel': '/images/portfolio/portfolio-oel.svg',
  'portfolio-phehlwana': '/images/portfolio/portfolio-phehlwana.svg',
  'portfolio-playhouse': '/images/portfolio/portfolio-playhouse.svg',
  'portfolio-tender-edge': '/images/portfolio/portfolio-tender-edge.svg',
  'portfolio-iso-ims': '/images/portfolio/portfolio-tender-equipment.webp',
  'portfolio-project-1': '/images/portfolio/portfolio-tender-equipment.webp',
  'portfolio-project-2': '/images/portfolio/portfolio-tender-vehicles.webp',
  'portfolio-tender-1': '/images/portfolio/portfolio-tender-toilets.webp',
  'portfolio-tender-2': '/images/portfolio/portfolio-tender-horticulture.webp',
};

const BLOG_IMAGE_MAP: Record<string, string> = {
  'iso-9001-rollout': '/images/blog/iso-9001-rollout.webp',
  'nextjs-vs-wordpress': '/images/blog/nextjs-vs-wordpress.webp',
  'reading-bid-document': '/images/blog/reading-bid-document.webp',
  'sheq-basics': '/images/blog/sheq-basics.webp',
  'shipping-client-site-sprint': '/images/blog/shipping-client-site-sprint.webp',
  'tender-success-rate': '/images/blog/tender-success-rate.webp',
};

export const PROFILE_PORTRAIT_URL = '/images/profile/jacob-portrait.webp';

export function getPortfolioImageUrl(cover: string): string {
  if (cover.startsWith('/') || cover.startsWith('http')) {
    return cover;
  }
  return PORTFOLIO_IMAGE_MAP[cover] || `/images/portfolio/${cover}.webp`;
}

export function getBlogImageUrl(cover: string): string {
  if (cover.startsWith('/') || cover.startsWith('http')) {
    return cover;
  }
  return BLOG_IMAGE_MAP[cover] || `/images/blog/${cover}.webp`;
}
