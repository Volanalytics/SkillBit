/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const isGitHubPages = process.env.GITHUB_PAGES === 'true'
const repoName = 'SkillBit'

const nextConfig = {
  output: 'export',
  basePath: isProd && isGitHubPages ? `/${repoName}` : '',
  assetPrefix: isProd && isGitHubPages ? `/${repoName}/` : '',
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
