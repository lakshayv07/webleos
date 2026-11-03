import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: [
          'Googlebot',
          'Bingbot',
          'Applebot',
          'GPTBot',
          'OAI-SearchBot',
          'ClaudeBot',
          'PerplexityBot',
          'Google-Extended',
        ],
        allow: '/',
      },
    ],
    sitemap: 'https://www.webleos.com/sitemap.xml',
    host: 'https://www.webleos.com',
  };
}
