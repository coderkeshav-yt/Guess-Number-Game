/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Disable PWA for now to resolve build issues
  // PWA configuration will be re-enabled after fixing the build
  // withPWA: {
  //   dest: 'public',
  //   register: true,
  //   skipWaiting: true,
  //   disable: process.env.NODE_ENV === 'development',
  // },
  // Add experimental configuration to help with build issues
  experimental: {
    // This helps with the maximum call stack size error
    workerThreads: false,
    cpus: 1,
  },
  // Add webpack configuration to handle potential circular dependencies
  webpack: (config, { isServer }) => {
    // Important: return the modified config
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