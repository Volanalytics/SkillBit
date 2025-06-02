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

// Add basePath and assetPrefix only in production
if (process.env.NODE_ENV === 'production') {
  nextConfig.basePath = '/SkillBit'
  nextConfig.assetPrefix = '/SkillBit/'
  console.log('Production environment detected')
  console.log('Base Path:', nextConfig.basePath)
  console.log('Asset Prefix:', nextConfig.assetPrefix)
} else {
  console.log('Development environment detected')
}

module.exports = nextConfig
