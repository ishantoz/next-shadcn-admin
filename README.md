# next-shadcn-admin

A modern, production-ready Next.js 16 admin dashboard template built with Shadcn UI, TypeScript, and Tailwind CSS.

## Features

- **Modern UI** - Built with Shadcn UI components
- **Dark Mode** - Seamless light/dark theme switching
- **Fully Responsive** - Works perfectly on all devices
- **Accessible** - WCAG compliant components
- **SEO Optimized** - Built-in sitemap and robots.txt
- **Type Safe** - Full TypeScript support
- **Next.js 16** - Latest App Router with React 19
- **RTL Support** - Right-to-left language support

## Quick Start

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm/yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/next-shadcn-admin.git

# Navigate to the project
cd next-shadcn-admin

# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env.local

# Edit .env.local and set your site URL
# NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# Start development server
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the app.

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

This is used for SEO metadata, sitemap, and robots.txt generation.

## Project Structure

```
src/
├── app/              # Next.js app router pages
├── components/       # Reusable UI components
├── features/         # Feature-based modules
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
├── stores/           # State management (Zustand)
└── styles/           # Global styles
```

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **UI Library:** [Shadcn UI](https://ui.shadcn.com)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **TypeScript:** Full type safety
- **Icons:** [Lucide Icons](https://lucide.dev/)
- **Theme:** [next-themes](https://github.com/pacocoursey/next-themes)
- **Forms:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Tables:** [TanStack Table](https://tanstack.com/table)

## Available Pages

### Authentication
- Sign In (2 layouts)
- Sign Up
- Forgot Password
- OTP Verification

### Dashboard
- Main Dashboard with analytics
- Tasks Management
- Users Management
- Apps Gallery
- Chat Interface

### Settings
- Profile Settings
- Account Settings
- Appearance Settings
- Notifications
- Display Preferences

### Error Pages
- 401 Unauthorized
- 403 Forbidden
- 404 Not Found
- 500 Internal Server Error
- 503 Service Unavailable
- Maintenance Mode

## SEO Features

This template comes with built-in SEO optimization:

- **Sitemap** - Automatically generated at `/sitemap.xml` using Next.js App Router
- **Robots.txt** - Automatically generated at `/robots.txt` with proper crawl rules
- **Metadata** - Comprehensive Open Graph and Twitter Card support
- **Structured Data** - Ready for search engine optimization

The sitemap and robots.txt are generated using Next.js 13+ App Router conventions (`sitemap.ts` and `robots.ts` files).

## Customization

### Theme Colors

Edit `src/styles/theme.css` to customize the color scheme for both light and dark modes.

### Components

All Shadcn UI components are in `src/components/ui/`. You can customize them or add new ones using:

```bash
npx shadcn@latest add [component-name]
```

## Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm format       # Format code with Prettier
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Shadcn UI](https://ui.shadcn.com) for the amazing component library
- [Next.js](https://nextjs.org/) team for the incredible framework
- [Vercel](https://vercel.com) for hosting and deployment

---

Made with Next.js and Shadcn UI
