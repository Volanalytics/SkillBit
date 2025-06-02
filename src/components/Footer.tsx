export function Footer() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">SkillBit</h3>
            <p className="text-sm text-muted-foreground">
              Master new skills in minutes with AI-powered micro-courses.
            </p>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Categories</h3>
            <ul className="space-y-2">
              {["Finance", "Technology", "DIY & Crafts", "Photography"].map((category) => (
                <li key={category}>
                  <a 
                    href={`/category/${category.toLowerCase().replace(" & ", "-")}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              {["About", "Blog", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <a 
                    href={`/${item.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="space-y-2">
              {["Terms", "Privacy", "Cookies"].map((item) => (
                <li key={item}>
                  <a 
                    href={`/${item.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-5 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SkillBit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
