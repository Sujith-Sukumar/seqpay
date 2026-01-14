"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { FadeIn } from "./motion-wrapper"

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Founder, ShopEase",
    content:
      "RavPay transformed our payment experience. The integration was seamless and our conversion rates improved by 25%.",
    rating: 5,
    image: "/professional-woman-portrait.png",
  },
  {
    name: "Rahul Verma",
    role: "CTO, TechStart",
    content:
      "The API documentation is excellent. We integrated RavPay in just 2 days. The real-time dashboard is incredibly useful.",
    rating: 5,
    image: "/professional-man-portrait.png",
  },
  {
    name: "Anita Desai",
    role: "CEO, FoodHub",
    content:
      "Customer support is outstanding. Any issue we had was resolved within hours. Highly recommend for any business.",
    rating: 5,
    image: "/professional-indian-woman-portrait.png",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-muted/30 to-background" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Loved by <span className="text-gradient">businesses everywhere</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              See what our customers have to say about their experience with RavPay.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.name} delay={index * 0.1}>
              <Card className="group relative border border-border/50 bg-background hover:border-primary/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden h-full">
                {/* Quote icon decoration */}
                <div className="absolute top-4 right-4 text-primary/10 group-hover:text-primary/20 transition-colors">
                  <Quote className="w-12 h-12" />
                </div>

                <CardContent className="pt-8 relative">
                  {/* Star rating */}
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400 drop-shadow-sm"
                        style={{ animationDelay: `${i * 100}ms` }}
                      />
                    ))}
                  </div>

                  {/* Testimonial content */}
                  <blockquote className="text-foreground text-lg leading-relaxed mb-8 relative">
                    <span className="text-primary text-2xl absolute -left-1 -top-2">"</span>
                    {testimonial.content}
                    <span className="text-primary text-2xl">"</span>
                  </blockquote>

                  {/* Author info */}
                  <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-blue-600 p-0.5">
                        <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                          <span className="text-primary font-bold text-lg">{testimonial.name.charAt(0)}</span>
                        </div>
                      </div>
                      {/* Online indicator */}
                      <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-green-500 border-2 border-background" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>

                {/* Bottom gradient accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
