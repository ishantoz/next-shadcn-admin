import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/errors/',
          '/settings/',
          '/sign-in-2', // Alternative sign-in page (disallow indexing)
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}

