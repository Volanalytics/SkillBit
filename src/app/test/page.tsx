import { getBasePath } from "@/lib/path"

export default function TestPage() {
  const isProd = process.env.NODE_ENV === 'production'
  const baseUrl = isProd ? 'https://volanalytics.github.io/SkillBit' : 'http://localhost:8000'
  const basePath = getBasePath()

  return (
    <main className="min-h-screen pt-24">
      <div className="container">
        <h1 className="text-4xl font-bold mb-4">GitHub Pages Test Page</h1>
        <p className="text-lg text-muted-foreground mb-8">
          If you can see this page, the GitHub Pages deployment is working correctly.
        </p>

        <div className="grid gap-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Environment</h2>
            <div className="bg-muted p-4 rounded-lg">
              <ul className="space-y-2">
                <li><strong>NODE_ENV:</strong> {process.env.NODE_ENV}</li>
                <li><strong>Is Production:</strong> {String(isProd)}</li>
                <li><strong>Base URL:</strong> {baseUrl}</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Next.js Configuration</h2>
            <div className="bg-muted p-4 rounded-lg">
              <ul className="space-y-2">
                <li><strong>Base Path:</strong> {isProd ? '/SkillBit' : ''}</li>
                <li><strong>Asset Prefix:</strong> {isProd ? '/SkillBit/' : ''}</li>
                <li><strong>Output:</strong> static export</li>
                <li><strong>Trailing Slash:</strong> enabled</li>
                <li><strong>Images:</strong> unoptimized</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Navigation Test</h2>
            <div className="space-y-4">
              <p>Try these links to test navigation:</p>
              <div className="flex gap-4">
                <a href={basePath || '/'} className="text-primary hover:underline">Home</a>
                <a href={`${basePath}/courses`} className="text-primary hover:underline">Courses</a>
                <a href={`${basePath}/dashboard`} className="text-primary hover:underline">Dashboard</a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
