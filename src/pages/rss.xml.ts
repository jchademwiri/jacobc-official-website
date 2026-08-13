import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
import { SITE_NAME } from '../lib/site';

export const prerender = true;

export const GET: APIRoute = async (context) => {
  const posts = (await getCollection('blog')).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  return rss({
    title: `${SITE_NAME} — Blog`,
    description: 'Field notes from running bids, building ISO management systems and shipping websites.',
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.excerpt,
      pubDate: post.data.date,
      categories: post.data.tags.map((tag) => tag.label),
      link: `/blog/${post.id}/`,
    })),
    customData: '<language>en-za</language>',
  });
};
