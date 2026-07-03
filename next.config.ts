import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tbherohelper.com',
        pathname: '/sprites/**',
      },
    ],
  },
  allowedDevOrigins: ['25.8.232.187'],
};

export default withNextIntl(nextConfig);
