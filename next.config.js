/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Disable static export for now to fix routing issues
  // output: 'export',
  
  // Remove assetPrefix to use relative paths
  // assetPrefix: process.env.NODE_ENV === 'production' ? 'https://guess-number-game-2sez.vercel.app' : '',
  
  // Base URL for API requests (if any)
  // basePath: process.env.NODE_ENV === 'production' ? '' : '',
  
  // Image optimization
  images: {
    domains: ['i.imgur.com'],
    unoptimized: true, // Required for static export if enabled
  },
  
  // Ensure proper source map generation
  productionBrowserSourceMaps: false,
  
  // Disable source maps in production
  productionBrowserSourceMaps: false,
  
  // Add experimental configuration to help with build issues
  experimental: {
    workerThreads: false,
    cpus: 1,
    // Disable webpack's cache to prevent memory issues
    webpackBuildWorker: false,
  },
  
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