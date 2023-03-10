/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ['images.unsplash.com', 'wembleypark.com'],
    },
  },
}

module.exports = nextConfig
