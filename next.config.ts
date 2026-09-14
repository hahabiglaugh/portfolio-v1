import type { NextConfig } from 'next';

const isStaticExport = process.env.STATIC_EXPORT === 'true';
const basePath = isStaticExport ? process.env.NEXT_PUBLIC_BASE_PATH ?? '' : '';

const nextConfig: NextConfig = isStaticExport
  ? {
      output: 'export',
      basePath,
      // basePath also prefixes Next.js CSS/JS; no separate CDN assetPrefix needed.
      trailingSlash: true,
      images: { unoptimized: true },
      typescript: { tsconfigPath: 'tsconfig.next.json' },
    }
  : {};

export default nextConfig;
