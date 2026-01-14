"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react"
import { FadeIn, SlideIn } from "./motion-wrapper"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log("Form submitted:", formData)
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-muted/30 to-background" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Contact Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Get in <span className="text-gradient">touch</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <SlideIn from="left">
            <Card className="border border-border/50 shadow-xl bg-background/50 backdrop-blur">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="h-12 border-border/50 focus:border-primary/50 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="h-12 border-border/50 focus:border-primary/50 transition-colors"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-foreground">
                      Company
                    </label>
                    <Input
                      id="company"
                      placeholder="Your company name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="h-12 border-border/50 focus:border-primary/50 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="How can we help you?"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="border-border/50 focus:border-primary/50 transition-colors resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full h-12 font-semibold bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 btn-shine"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Message
                        <Send className="w-4 h-4" />
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </SlideIn>

          <SlideIn from="right" delay={0.2}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-8">Contact Information</h3>
                <div className="space-y-6">
                  {[
                    {
                      icon: Mail,
                      title: "Email",
                      lines: ["support@ravpay.com", "sales@ravpay.com"],
                      color: "from-blue-500 to-cyan-500",
                    },
                    {
                      icon: Phone,
                      title: "Phone",
                      lines: ["+91 1800-123-4567", "(Mon-Fri, 9AM-6PM IST)"],
                      color: "from-green-500 to-emerald-500",
                    },
                    {
                      icon: MapPin,
                      title: "Office",
                      lines: ["123 Tech Park, Sector 5", "Bangalore, Karnataka 560001", "India"],
                      color: "from-purple-500 to-pink-500",
                    },
                  ].map((item, index) => (
                    <div
                      key={item.title}
                      className="group flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-all duration-300 cursor-default"
                    >
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} p-0.5 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">{item.title}</p>
                        {item.lines.map((line, i) => (
                          <p key={i} className="text-muted-foreground text-sm">
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-blue-500/10 border border-primary/20">
                <h4 className="font-semibold text-foreground mb-2">Need immediate help?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Our team is available 24/7 to assist you with any urgent matters.
                </p>
                <Button variant="outline" size="sm" className="group bg-transparent">
                  Schedule a Call
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  )
}
