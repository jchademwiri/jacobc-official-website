const PORTFOLIO_IMAGE_MAP: Record<string, string> = {
  'portfolio-portal': '/images/portfolio/portfolio-portal.jpg',
  'portfolio-tendertrack': '/images/portfolio/portfolio-tendertrack.jpg',
  'portfolio-tender-toilets': '/images/portfolio/portfolio-tender-toilets.jpg',
  'portfolio-tender-equipment': '/images/portfolio/portfolio-tender-equipment.jpg',
  'portfolio-tender-vehicles': '/images/portfolio/portfolio-tender-vehicles.jpg',
  'portfolio-tender-horticulture': '/images/portfolio/portfolio-tender-horticulture.jpg',
  'portfolio-tender-water': '/images/portfolio/portfolio-tender-water.svg',
  'portfolio-apex': '/images/portfolio/portfolio-apex.svg',
  'portfolio-beccas': '/images/portfolio/portfolio-beccas.svg',
  'portfolio-oel': '/images/portfolio/portfolio-oel.svg',
  'portfolio-phehlwana': '/images/portfolio/portfolio-phehlwana.svg',
  'portfolio-playhouse': '/images/portfolio/portfolio-playhouse.svg',
  'portfolio-tender-edge': '/images/portfolio/portfolio-tender-edge.svg',
  'portfolio-project-1': '/images/portfolio/portfolio-tender-equipment.jpg',
  'portfolio-project-2': '/images/portfolio/portfolio-tender-vehicles.jpg',
  'portfolio-tender-1': '/images/portfolio/portfolio-tender-toilets.jpg',
  'portfolio-tender-2': '/images/portfolio/portfolio-tender-horticulture.jpg',
};

const BLOG_IMAGE_MAP: Record<string, string> = {
  'iso-9001-rollout': '/images/blog/iso-9001-rollout.jpg',
  'nextjs-vs-wordpress': '/images/blog/nextjs-vs-wordpress.jpg',
  'reading-bid-document': '/images/blog/reading-bid-document.jpg',
  'sheq-basics': '/images/blog/sheq-basics.jpg',
  'shipping-client-site-sprint': '/images/blog/shipping-client-site-sprint.jpg',
  'tender-success-rate': '/images/blog/tender-success-rate.jpg',
};

export const PROFILE_PORTRAIT_URL = '/images/profile/jacob-portrait.jpg';

export function getPortfolioImageUrl(cover: string): string {
  if (cover.startsWith('/') || cover.startsWith('http')) {
    return cover;
  }
  return PORTFOLIO_IMAGE_MAP[cover] || `/images/portfolio/${cover}.jpg`;
}

export function getBlogImageUrl(cover: string): string {
  if (cover.startsWith('/') || cover.startsWith('http')) {
    return cover;
  }
  return BLOG_IMAGE_MAP[cover] || `/images/blog/${cover}.jpg`;
}
