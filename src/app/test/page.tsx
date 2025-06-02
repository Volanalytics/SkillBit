export default function TestPage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="container">
        <h1 className="text-4xl font-bold mb-4">GitHub Pages Test Page</h1>
        <p className="text-lg text-muted-foreground">
          If you can see this page, the GitHub Pages deployment is working correctly.
        </p>
        <div className="mt-8">
          <p>Current configuration:</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Base Path: /SkillBit</li>
            <li>Asset Prefix: /SkillBit/</li>
            <li>Output: static export</li>
            <li>Trailing Slash: enabled</li>
          </ul>
        </div>
      </div>
    </main>
  )
}
