import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { CourseCard } from "@/components/CourseCard"
import Link from "next/link"

const featuredCourses = [
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
  }
]

export default function Home() {
  return (
    <main>
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 md:pt-32 md:pb-20 bg-gradient-to-b from-background to-muted/50">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-6 duration-1000">
            Master New Skills in Minutes
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            AI-powered micro-courses on trending topics. Learn anything in bite-sized lessons.
          </p>
          <div className="flex justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
            <Button size="lg" className="transition-transform hover:scale-105" asChild>
              <Link href="/SkillBit/courses">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" className="transition-transform hover:scale-105" asChild>
              <Link href="/SkillBit/courses">Browse Courses</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-12 px-4 relative">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Featured Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 px-4 bg-muted/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)] dark:bg-grid-black/10"></div>
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Popular Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {["Finance", "Technology", "DIY & Crafts", "Photography", "Health & Wellness", "Business", "Art & Design", "Personal Development"].map((category) => (
              <Card 
                key={category} 
                className="hover:bg-accent transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg group"
              >
                <CardHeader>
                  <CardTitle className="text-lg">{category}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-muted/50 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)] dark:bg-grid-black/10"></div>
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of learners mastering new skills in minutes.
          </p>
          <Button size="lg" className="transition-transform hover:scale-105" asChild>
            <Link href="/SkillBit/courses">Get Started Now</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
