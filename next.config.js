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
  trailingSlash: true,
}

// Handle GitHub Pages deployment
if (process.env.GITHUB_ACTIONS) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
  nextConfig.basePath = `/${repo}`
  nextConfig.assetPrefix = `/${repo}/`
  nextConfig.images.path = `/${repo}/_next/image`
}

module.exports = nextConfig
