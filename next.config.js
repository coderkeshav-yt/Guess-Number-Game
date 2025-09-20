/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  // Enable static export
  output: 'export',
  distDir: 'out',
  
  // Base path configuration (empty for root domain)
  basePath: '',
  
  // Asset prefix for static export
  assetPrefix: isProd ? '' : undefined,
  
  // Image optimization
  images: {
    unoptimized: true,
    domains: ['i.imgur.com'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  
  // Enable trailing slash for better compatibility
  trailingSlash: true,
  
  // Disable React StrictMode for static export
  reactStrictMode: !isProd,
  
  // Disable output file tracing for static export
  outputFileTracing: false,
  
  // Disable source maps in production
  productionBrowserSourceMaps: false,
  
  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Configure page extensions
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  
  // Webpack configuration
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        os: false,
      };
    }

    // Add custom rules for specific file types
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/i,
      type: 'asset/resource',
    });

    return config;
  },
};

// Conditionally apply withPWA if needed
// const withPWA = require('next-pwa')({
//   dest: 'public',
//   disable: process.env.NODE_ENV === 'development',
//   register: true,
//   skipWaiting: true,
// });

// module.exports = withPWA(nextConfig);
module.exports = nextConfig;