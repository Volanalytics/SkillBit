# SkillBit

SkillBit is a modern learning platform that offers AI-powered micro-courses on trending topics. Learn anything in bite-sized lessons.

Visit the live site: https://volanalytics.github.io/SkillBit/

## Features

- Modern, responsive UI built with Next.js and Tailwind CSS
- Interactive course catalog with filtering and search
- Detailed course pages with progress tracking
- Quiz system for learning assessment
- Loading states and animations for better UX

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Shadcn UI Components
- React Server Components

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/Volanalytics/SkillBit.git
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:8000](http://localhost:8000) in your browser.

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch. To enable GitHub Pages:

1. Go to repository Settings
2. Navigate to Pages section
3. Under "Build and deployment":
   - Source: Select "GitHub Actions"
   - Branch: Leave as is (deployment is handled by workflow)

## Project Structure

- `/src/app/*` - Next.js app router pages and layouts
- `/src/components/*` - React components
- `/src/components/ui/*` - Shadcn UI components
- `/src/lib/*` - Utility functions and shared code

## License

MIT License
