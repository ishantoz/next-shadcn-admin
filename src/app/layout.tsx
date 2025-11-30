import { Geist, Geist_Mono } from 'next/font/google'
import { Providers } from '@/app/providers'
import '@/styles/index.css'
import type { Metadata } from 'next'
import { Toaster } from '@/components/ui/sonner'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com'
  ),
  title: {
    default: 'next-shadcn-admin',
    template: '%s | next-shadcn-admin',
  },
  description:
    'A modern, production-ready Next.js 16 admin dashboard template built with Shadcn UI, TypeScript, and Tailwind CSS.',
  keywords: [
    'next.js',
    'shadcn ui',
    'admin dashboard',
    'typescript',
    'tailwind css',
    'react',
    'dashboard template',
    'next.js template',
  ],
  authors: [
    {
      name: 'next-shadcn-admin',
    },
  ],
  creator: 'next-shadcn-admin',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com',
    title: 'next-shadcn-admin',
    description:
      'A modern, production-ready Next.js 16 admin dashboard template built with Shadcn UI',
    siteName: 'next-shadcn-admin',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'next-shadcn-admin',
    description:
      'A modern, production-ready Next.js 16 admin dashboard template built with Shadcn UI',
    creator: '@yourusername',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
