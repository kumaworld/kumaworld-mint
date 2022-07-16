/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: '.',
  i18n: {
      locales: ['en'],
      defaultLocale: 'en',
  },
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
