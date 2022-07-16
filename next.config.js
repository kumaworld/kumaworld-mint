/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/history': { page: '/history' },
    }
  },
}

module.exports = nextConfig
