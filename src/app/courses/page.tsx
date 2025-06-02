"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { CourseCard } from "@/components/CourseCard"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const allCourses = [
  {
    id: 1,
    title: "Quick Crypto Investing Basics",
    description: "Learn the fundamentals of cryptocurrency investing in just 10 minutes",
    category: "Finance",
    duration: "10 min",
    level: "Beginner",
    image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg"
  },
  {
    id: 2,
    title: "Urban Gardening Essentials",
    description: "Start your own urban garden with these quick and easy tips",
    category: "DIY",
    duration: "8 min",
    level: "Beginner",
    image: "https://images.pexels.com/photos/1084540/pexels-photo-1084540.jpeg"
  },
  {
    id: 3,
    title: "Smartphone Photography Tips",
    description: "Master the art of taking stunning photos with your smartphone",
    category: "Photography",
    duration: "12 min",
    level: "Intermediate",
    image: "https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg"
  },
  {
    id: 4,
    title: "Personal Finance Management",
    description: "Essential tips for managing your personal finances effectively",
    category: "Finance",
    duration: "15 min",
    level: "Beginner",
    image: "https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg"
  },
  {
    id: 5,
    title: "Basic Web Development",
    description: "Learn the basics of HTML, CSS, and JavaScript",
    category: "Technology",
    duration: "20 min",
    level: "Beginner",
    image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg"
  },
  {
    id: 6,
    title: "Digital Marketing Fundamentals",
    description: "Master the basics of digital marketing strategies",
    category: "Business",
    duration: "15 min",
    level: "Intermediate",
    image: "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg"
  }
]

const categories = ["All", "Finance", "Technology", "DIY", "Photography", "Business"]
const levels = ["All", "Beginner", "Intermediate", "Advanced"]

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedLevel, setSelectedLevel] = useState("All")

  const filteredCourses = allCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory
    const matchesLevel = selectedLevel === "All" || course.level === selectedLevel
    return matchesSearch && matchesCategory && matchesLevel
  })

  return (
    <main className="min-h-screen pt-24">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col gap-4 mb-8">
          <h1 className="text-4xl font-bold">Browse Courses</h1>
          <p className="text-lg text-muted-foreground">
            Discover bite-sized courses to enhance your skills
          </p>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Input
            placeholder="Search courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="md:col-span-2"
          />
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger>
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={selectedLevel} onValueChange={setSelectedLevel}>
            <SelectTrigger>
              <SelectValue placeholder="Level" />
            </SelectTrigger>
            <SelectContent>
              {levels.map((level) => (
                <SelectItem key={level} value={level}>
                  {level}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Results Summary */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-muted-foreground">
            Showing {filteredCourses.length} courses
          </p>
          <div className="flex gap-2">
            {selectedCategory !== "All" && (
              <Badge variant="secondary" className="cursor-pointer" onClick={() => setSelectedCategory("All")}>
                {selectedCategory} ×
              </Badge>
            )}
            {selectedLevel !== "All" && (
              <Badge variant="secondary" className="cursor-pointer" onClick={() => setSelectedLevel("All")}>
                {selectedLevel} ×
              </Badge>
            )}
            {(selectedCategory !== "All" || selectedLevel !== "All" || searchQuery) && (
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => {
                  setSelectedCategory("All")
                  setSelectedLevel("All")
                  setSearchQuery("")
                }}
              >
                Clear all
              </Button>
            )}
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>

        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium mb-2">No courses found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search or filter criteria
            </p>
            <Button 
              variant="outline"
              onClick={() => {
                setSelectedCategory("All")
                setSelectedLevel("All")
                setSearchQuery("")
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    </main>
  )
}
