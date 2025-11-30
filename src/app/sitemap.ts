import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com'

  // Public routes
  const routes = [
    '',
    '/dashboard',
    '/sign-in',
    '/sign-in-2',
    '/sign-up',
    '/forgot-password',
    '/otp',
    '/tasks',
    '/users',
    '/apps',
    '/chats',
    '/help-center',
    '/settings',
    '/settings/profile',
    '/settings/account',
    '/settings/appearance',
    '/settings/notifications',
    '/settings/display',
  ]

  // Generate sitemap entries
  const sitemapEntries: MetadataRoute.Sitemap = [
    // Main pages with higher priority
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/dashboard`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    // Auth pages
    {
      url: `${baseUrl}/sign-in`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/sign-up`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Feature pages
    ...routes
      .filter((route) => !['', '/dashboard', '/sign-in', '/sign-up'].includes(route))
      .map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      })),
  ]

  return sitemapEntries
}

