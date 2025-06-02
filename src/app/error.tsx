"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="container max-w-2xl space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Something went wrong!
          </h1>
          <p className="text-lg text-muted-foreground animate-in fade-in slide-in-from-bottom-6 duration-1000">
            We apologize for the inconvenience. An unexpected error has occurred.
          </p>
        </div>

        <Alert variant="destructive" className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <AlertTitle>Error Details</AlertTitle>
          <AlertDescription className="mt-2 font-mono text-sm">
            {error.message || "An unknown error occurred"}
            {error.digest && (
              <div className="mt-2 text-xs">
                Error ID: {error.digest}
              </div>
            )}
          </AlertDescription>
        </Alert>

        <div className="flex justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <Button 
            variant="default"
            onClick={reset}
            className="transition-transform hover:scale-105"
          >
            Try Again
          </Button>
          <Button 
            variant="outline" 
            asChild
            className="transition-transform hover:scale-105"
          >
            <Link href="/">
              Return Home
            </Link>
          </Button>
        </div>

        <div className="text-center text-sm text-muted-foreground animate-in fade-in slide-in-from-bottom-12 duration-1000">
          <p>
            If this error persists, please{" "}
            <Link 
              href="/contact" 
              className="underline underline-offset-4 hover:text-foreground"
            >
              contact support
            </Link>
            .
          </p>
        </div>

        <div className="relative mt-12 animate-in fade-in slide-in-from-bottom-14 duration-1000">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-muted/50 to-background" />
          <div className="text-9xl font-bold text-center text-muted/10 select-none">
            Error
          </div>
        </div>
      </div>
    </main>
  )
}
