import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function CoursesLoading() {
  return (
    <main className="min-h-screen pt-24">
      <div className="container">
        {/* Header Loading */}
        <div className="flex flex-col gap-4 mb-8">
          <Skeleton className="h-12 w-48" />
          <Skeleton className="h-6 w-96" />
        </div>

        {/* Filters Loading */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Skeleton className="h-10 md:col-span-2" />
          <Skeleton className="h-10" />
          <Skeleton className="h-10" />
        </div>

        {/* Results Summary Loading */}
        <div className="flex items-center justify-between mb-6">
          <Skeleton className="h-5 w-32" />
          <div className="flex gap-2">
            <Skeleton className="h-6 w-20" />
            <Skeleton className="h-6 w-20" />
          </div>
        </div>

        {/* Course Grid Loading */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i} className="overflow-hidden">
              <Skeleton className="aspect-video" />
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Skeleton className="h-5 w-20" />
                  <Skeleton className="h-5 w-16" />
                </div>
                <Skeleton className="h-6 w-full mb-2" />
                <Skeleton className="h-4 w-full" />
              </CardHeader>
              <CardContent className="flex justify-between items-center">
                <Skeleton className="h-5 w-20" />
                <Skeleton className="h-9 w-24" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
