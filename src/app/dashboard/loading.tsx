import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function DashboardLoading() {
  return (
    <main className="min-h-screen pt-24">
      <div className="container">
        {/* Header Loading */}
        <div className="flex flex-col gap-4 mb-8">
          <Skeleton className="h-12 w-48" />
          <Skeleton className="h-6 w-96" />
        </div>

        {/* Stats Grid Loading */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[1, 2, 3, 4].map((index) => (
            <Card key={index}>
              <CardHeader>
                <Skeleton className="h-4 w-24 mb-2" />
                <Skeleton className="h-6 w-12" />
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Tabs Loading */}
        <div className="space-y-6">
          <div className="flex gap-2">
            <Skeleton className="h-10 w-28" />
            <Skeleton className="h-10 w-28" />
          </div>

          {/* Course Cards Loading */}
          <div className="space-y-6">
            {[1, 2].map((index) => (
              <Card key={index} className="overflow-hidden">
                <div className="md:flex">
                  <Skeleton className="aspect-video md:w-48 md:h-auto" />
                  <div className="flex-1 p-6">
                    <div className="flex justify-between items-start mb-2">
                      <div className="space-y-4 w-full">
                        <Skeleton className="h-5 w-20" />
                        <Skeleton className="h-6 w-3/4" />
                        <Skeleton className="h-4 w-full" />
                      </div>
                    </div>
                    <div className="space-y-4 mt-6">
                      <div className="flex justify-between">
                        <Skeleton className="h-4 w-16" />
                        <Skeleton className="h-4 w-12" />
                      </div>
                      <Skeleton className="h-2 w-full" />
                      <div className="flex justify-between items-center mt-4">
                        <Skeleton className="h-4 w-32" />
                        <Skeleton className="h-9 w-32" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Achievements Loading */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2].map((index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="space-y-2">
                      <Skeleton className="h-5 w-32" />
                      <Skeleton className="h-4 w-48" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-4 w-32" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
