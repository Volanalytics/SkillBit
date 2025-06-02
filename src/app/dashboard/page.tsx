"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const enrolledCourses = [
  {
    id: 1,
    title: "Quick Crypto Investing Basics",
    description: "Learn the fundamentals of cryptocurrency investing in just 10 minutes",
    category: "Finance",
    progress: 75,
    lastAccessed: "2 days ago",
    image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg"
  },
  {
    id: 2,
    title: "Urban Gardening Essentials",
    description: "Start your own urban garden with these quick and easy tips",
    category: "DIY",
    progress: 30,
    lastAccessed: "1 week ago",
    image: "https://images.pexels.com/photos/1084540/pexels-photo-1084540.jpeg"
  }
]

const achievements = [
  {
    title: "Fast Learner",
    description: "Completed 5 lessons in one day",
    date: "2024-01-15",
    icon: "🚀"
  },
  {
    title: "Finance Expert",
    description: "Completed all finance courses",
    date: "2024-01-10",
    icon: "💰"
  }
]

const stats = [
  { label: "Courses Enrolled", value: "2" },
  { label: "Hours Learned", value: "4.5" },
  { label: "Quizzes Completed", value: "8" },
  { label: "Achievements", value: "5" }
]

export default function DashboardPage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col gap-4 mb-8">
          <h1 className="text-4xl font-bold">Dashboard</h1>
          <p className="text-lg text-muted-foreground">
            Track your learning progress and achievements
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader>
                <CardDescription>{stat.label}</CardDescription>
                <CardTitle>{stat.value}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs defaultValue="courses" className="space-y-6">
          <TabsList>
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="space-y-6">
            {enrolledCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden">
                <div className="md:flex">
                  <div className="relative aspect-video md:w-48 md:h-auto">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <Badge variant="secondary" className="mb-2">
                          {course.category}
                        </Badge>
                        <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          {course.description}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} />
                      <div className="flex justify-between items-center mt-4">
                        <span className="text-sm text-muted-foreground">
                          Last accessed {course.lastAccessed}
                        </span>
                        <Button>Continue Learning</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="text-4xl">{achievement.icon}</div>
                      <div>
                        <CardTitle>{achievement.title}</CardTitle>
                        <CardDescription>{achievement.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Achieved on {new Date(achievement.date).toLocaleDateString()}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
