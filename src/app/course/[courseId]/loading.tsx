import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function CourseLoading() {
  return (
    <main className="min-h-screen pt-20">
      {/* Course Hero Loading */}
      <section className="relative h-[300px] overflow-hidden">
        <Skeleton className="absolute inset-0" />
        <div className="container relative h-full flex items-end pb-8">
          <div className="space-y-4 max-w-3xl w-full">
            <div className="flex gap-2">
              <Skeleton className="h-5 w-20" />
              <Skeleton className="h-5 w-20" />
              <Skeleton className="h-5 w-20" />
            </div>
            <Skeleton className="h-10 w-[250px]" />
            <Skeleton className="h-6 w-[450px]" />
          </div>
        </div>
      </section>

      {/* Course Content Loading */}
      <section className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Loading */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex gap-2">
              <Skeleton className="h-10 w-32" />
              <Skeleton className="h-10 w-32" />
            </div>
            
            {/* Section Skeletons */}
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="w-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Skeleton className="h-6 w-[200px]" />
                    <Skeleton className="h-5 w-16" />
                  </div>
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-20 w-full" />
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sidebar Loading */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <Skeleton className="h-6 w-32" />
              </CardHeader>
              <CardContent className="space-y-4">
                <Skeleton className="h-2 w-full" />
                <Skeleton className="h-4 w-40" />
                <Skeleton className="h-10 w-full" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Skeleton className="h-6 w-32" />
              </CardHeader>
              <CardContent className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex justify-between">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
