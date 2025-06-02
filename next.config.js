/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/SkillBit',
  assetPrefix: '/SkillBit/',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/photos/**',
      },
    ],
  },
  trailingSlash: true,
}

module.exports = nextConfig
