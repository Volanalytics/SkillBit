# SkillBit

An AI-powered micro-learning platform that helps users master new skills through bite-sized lessons.

## GitHub Pages Configuration

This project is configured to deploy to GitHub Pages with proper base path handling. Here's how it works:

### Base Path Handling

- Production URL: `https://volanalytics.github.io/SkillBit`
- Development URL: `http://localhost:8000`

We use a utility function (`src/lib/path.ts`) to handle base paths consistently:

```typescript
export const getBasePath = () => {
  return process.env.NODE_ENV === 'production' ? '/SkillBit' : ''
}

export const withBasePath = (path: string) => {
  const basePath = getBasePath()
  const cleanPath = path.replace(/^\/+/, '')
  return `${basePath}/${cleanPath}`.replace(/\/+$/, '')
}
```

### Next.js Configuration

The `next.config.js` is set up to handle static exports and base paths:

```javascript
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
```

### GitHub Actions Workflow

The deployment workflow (`.github/workflows/deploy.yml`) handles:
- Building the Next.js app
- Adding `.nojekyll` file to bypass Jekyll processing
- Deploying to GitHub Pages

### Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   This will start the server at `http://localhost:8000`

### Production Build

To create a production build:

```bash
npm run build
```

This will:
1. Set NODE_ENV to production
2. Generate a static export
3. Add `.nojekyll` file
4. Output to the `out` directory

### Testing

Visit the test page to verify the configuration:
- Development: `http://localhost:8000/test`
- Production: `https://volanalytics.github.io/SkillBit/test`
