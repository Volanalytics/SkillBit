import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="container max-w-2xl text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-7xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000">
            404
          </h1>
          <h2 className="text-3xl font-semibold animate-in fade-in slide-in-from-bottom-6 duration-1000">
            Page Not Found
          </h2>
          <p className="text-lg text-muted-foreground animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        <div className="flex justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <Button asChild>
            <Link href="/">
              Return Home
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/courses">
              Browse Courses
            </Link>
          </Button>
        </div>

        <div className="relative animate-in fade-in slide-in-from-bottom-12 duration-1000">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-muted/50 to-background" />
          <div className="text-9xl font-bold text-muted/10 select-none">
            404
          </div>
        </div>
      </div>
    </main>
  )
}
