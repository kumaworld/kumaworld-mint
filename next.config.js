/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "imgix",
    path: "https://noop/",
  },
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/history': { page: '/history' },
    }
  },
}

module.exports = nextConfig
