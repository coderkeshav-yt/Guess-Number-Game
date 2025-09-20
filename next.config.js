/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  
  // Only enable static export in production
  ...(isProd ? { output: 'export' } : {}),
  
  // Base path configuration (empty for root domain)
  basePath: '',
  
  // Asset prefix for CDN (if needed)
  assetPrefix: isProd ? '' : undefined,
  
  // Image optimization
  images: {
    unoptimized: isProd, // Only unoptimized for static export
    domains: ['i.imgur.com'],
  },
  
  // Disable source maps in production
  productionBrowserSourceMaps: false,
  
  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: false, // Enable ESLint during build
  },
  
  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: false, // Enable TypeScript checking
  },
  
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
    return config;
  },
  
  // Disable React's Strict Mode in production
  reactStrictMode: !isProd,
  
  // Configure page extensions
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  
  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Add webpack configuration to handle potential circular dependencies
  webpack: (config, { isServer, dev }) => {
    // Add custom webpack configuration
    if (!isServer) {
      // Fixes npm packages that depend on `fs` module
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
  
  // Configure build output
  distDir: '.next',
  
  // Configure images
  images: {
    domains: ['i.imgur.com'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  
  // Configure TypeScript
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: false,
  },
  
  // Configure ESLint
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: false,
  },
  
  // Disable output file tracing to prevent stack overflow
  outputFileTracing: false,
  
  // Configure static exports
  trailingSlash: false,
  
  // Configure public runtime config
  publicRuntimeConfig: {
    // Add any public runtime config here
  },
  
  // Configure server runtime config
  serverRuntimeConfig: {
    // Add any server runtime config here
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