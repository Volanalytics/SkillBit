/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/SkillBit' : '',
  assetPrefix: isProd ? '/SkillBit/' : '',
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

console.log('Next.js Config:', {
  isProd,
  basePath: nextConfig.basePath,
  assetPrefix: nextConfig.assetPrefix
})

module.exports = nextConfig
