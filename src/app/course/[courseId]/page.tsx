"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const mockCourse = {
  id: 1,
  title: "Quick Crypto Investing Basics",
  description: "Learn the fundamentals of cryptocurrency investing in just 10 minutes",
  category: "Finance",
  duration: "10 min",
  level: "Beginner",
  image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg",
  progress: 0,
  sections: [
    {
      id: 1,
      title: "Introduction to Cryptocurrency",
      duration: "2 min",
      completed: false,
      content: "Understanding the basics of blockchain and cryptocurrency..."
    },
    {
      id: 2,
      title: "Types of Cryptocurrencies",
      duration: "3 min",
      completed: false,
      content: "Exploring Bitcoin, Ethereum, and other major cryptocurrencies..."
    },
    {
      id: 3,
      title: "Investment Strategies",
      duration: "3 min",
      completed: false,
      content: "Learning about different investment approaches and risk management..."
    },
    {
      id: 4,
      title: "Security Best Practices",
      duration: "2 min",
      completed: false,
      content: "Keeping your cryptocurrency investments safe..."
    }
  ],
  quiz: [
    {
      question: "What is cryptocurrency?",
      options: [
        "Digital currency using cryptography",
        "Physical coins made of crypto materials",
        "Government-issued currency",
        "A type of credit card"
      ],
      correctAnswer: 0
    },
    {
      question: "Which was the first cryptocurrency?",
      options: [
        "Ethereum",
        "Bitcoin",
        "Dogecoin",
        "Litecoin"
      ],
      correctAnswer: 1
    }
  ]
}

export default function CoursePage({ params }: { params: { courseId: string } }) {
  return (
    <main className="min-h-screen pt-20">
      {/* Course Hero */}
      <section className="relative h-[300px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={mockCourse.image} 
            alt={mockCourse.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-background/20" />
        </div>
        <div className="container relative h-full flex items-end pb-8">
          <div className="space-y-4 max-w-3xl">
            <div className="flex gap-2">
              <Badge variant="secondary">{mockCourse.category}</Badge>
              <Badge variant="outline">{mockCourse.duration}</Badge>
              <Badge>{mockCourse.level}</Badge>
            </div>
            <h1 className="text-4xl font-bold">{mockCourse.title}</h1>
            <p className="text-lg text-muted-foreground">{mockCourse.description}</p>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="content" className="w-full">
              <TabsList>
                <TabsTrigger value="content">Course Content</TabsTrigger>
                <TabsTrigger value="quiz">Quiz</TabsTrigger>
              </TabsList>
              <TabsContent value="content" className="space-y-4">
                {mockCourse.sections.map((section) => (
                  <Card key={section.id}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{section.title}</CardTitle>
                        <Badge variant="outline">{section.duration}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{section.content}</p>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              <TabsContent value="quiz" className="space-y-6">
                {mockCourse.quiz.map((question, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">Question {index + 1}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="font-medium">{question.question}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {question.options.map((option, optionIndex) => (
                          <Button
                            key={optionIndex}
                            variant="outline"
                            className="justify-start h-auto py-4 px-6"
                          >
                            {option}
                          </Button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Your Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Progress value={33} />
                <p className="text-sm text-muted-foreground">2 of 6 lessons completed</p>
                <Button className="w-full">Continue Learning</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Course Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Duration</span>
                  <span className="font-medium">{mockCourse.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Level</span>
                  <span className="font-medium">{mockCourse.level}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sections</span>
                  <span className="font-medium">{mockCourse.sections.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Quiz Questions</span>
                  <span className="font-medium">{mockCourse.quiz.length}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
