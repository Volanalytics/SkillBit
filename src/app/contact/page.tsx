"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const supportCategories = [
  "Technical Issue",
  "Course Content",
  "Account & Billing",
  "Feature Request",
  "Other"
]

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <main className="min-h-screen pt-24">
      <div className="container max-w-2xl">
        {/* Header */}
        <div className="text-center space-y-4 mb-8">
          <h1 className="text-4xl font-bold">Contact Support</h1>
          <p className="text-lg text-muted-foreground">
            Need help? We're here to assist you with any questions or concerns.
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Email Support</CardTitle>
              <CardDescription>
                Get help via email
              </CardDescription>
            </CardHeader>
            <CardContent>
              <a 
                href="mailto:support@skillbit.com"
                className="text-primary hover:underline"
              >
                support@skillbit.com
              </a>
              <p className="text-sm text-muted-foreground mt-2">
                Response time: 24-48 hours
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Live Chat</CardTitle>
              <CardDescription>
                Chat with our support team
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Available Monday to Friday
                <br />
                9:00 AM - 5:00 PM EST
              </p>
              <Button className="mt-4" variant="outline">
                Start Chat
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Send us a message</CardTitle>
            <CardDescription>
              Fill out the form below and we'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input 
                    id="firstName" 
                    placeholder="John"
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input 
                    id="lastName" 
                    placeholder="Doe"
                    required 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="john@example.com"
                  required 
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {supportCategories.map((category) => (
                      <SelectItem key={category} value={category.toLowerCase()}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input 
                  id="subject" 
                  placeholder="Brief description of your inquiry"
                  required 
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Please provide as much detail as possible..."
                  className="min-h-[150px]"
                  required 
                />
              </div>

              <Button 
                type="submit" 
                className="w-full transition-transform hover:scale-105"
              >
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Success Message */}
        {isSubmitted && (
          <Alert className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>
              Your message has been sent. We'll get back to you soon.
            </AlertDescription>
          </Alert>
        )}

        {/* FAQ Section */}
        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
            <CardDescription>
              Quick answers to common questions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              {
                q: "How do I reset my password?",
                a: "You can reset your password by clicking the 'Forgot Password' link on the login page."
              },
              {
                q: "Can I get a refund?",
                a: "Yes, we offer a 30-day money-back guarantee for all premium subscriptions."
              },
              {
                q: "How do I access my courses offline?",
                a: "Premium members can download courses for offline viewing through our mobile app."
              }
            ].map((faq, index) => (
              <div key={index} className="space-y-2">
                <h3 className="font-medium">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
