export const siteConfig = {
  name: 'Next.js Production Starter',
  description: 'A production-oriented Next.js starter with a practical engineering baseline.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
} as const;
