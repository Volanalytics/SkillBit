/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const repoName = 'SkillBit'

const nextConfig = {
  output: 'export',
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
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
  assetPrefix: nextConfig.assetPrefix,
  repoName,
})

module.exports = nextConfig
