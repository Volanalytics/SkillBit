/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/SkillBit',
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
  assetPrefix: '/SkillBit',
  trailingSlash: true,
  distDir: 'out',
}

module.exports = nextConfig
