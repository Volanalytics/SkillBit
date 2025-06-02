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
  
  console.log('GitHub Actions detected')
  console.log('Repository:', repo)
  
  nextConfig.basePath = `/${repo}`
  nextConfig.assetPrefix = `/${repo}/`
  
  console.log('Base Path:', nextConfig.basePath)
  console.log('Asset Prefix:', nextConfig.assetPrefix)
} else {
  console.log('Local development environment')
}

module.exports = nextConfig
