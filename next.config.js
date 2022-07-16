/** @type {import('next').NextConfig} */
const withOptimizedImages = require('next-optimized-images');

const nextConfig = withOptimizedImages({
  reactStrictMode: true,
  swcMinify: true,
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/history': { page: '/history' },
    }
  },
})

module.exports = nextConfig
