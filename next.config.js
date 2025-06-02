/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
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
}

const isGithubActions = process.env.GITHUB_ACTIONS || false

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
  nextConfig.basePath = `/${repo}`
  nextConfig.assetPrefix = `/${repo}/`
}

module.exports = nextConfig
