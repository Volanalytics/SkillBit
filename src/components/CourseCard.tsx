import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

interface CourseCardProps {
  id: number
  title: string
  description: string
  category: string
  duration: string
  level: string
  image: string
}

export function CourseCard({
  id,
  title,
  description,
  category,
  duration,
  level,
  image
}: CourseCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <Link href={`/course/${id}`} className="block">
        <div className="aspect-video relative overflow-hidden">
          <Image 
            src={image} 
            alt={title}
            fill
            className="object-cover transition-transform hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <CardHeader>
          <div className="flex justify-between items-start mb-2">
            <Badge variant="secondary">{category}</Badge>
            <Badge variant="outline">{duration}</Badge>
          </div>
          <CardTitle className="line-clamp-2">{title}</CardTitle>
          <CardDescription className="line-clamp-2">{description}</CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between">
          <Badge variant="outline">{level}</Badge>
          <Button>Start Course</Button>
        </CardFooter>
      </Link>
    </Card>
  )
}
