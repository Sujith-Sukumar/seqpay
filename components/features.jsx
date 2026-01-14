"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Link2, Code, Smartphone, RotateCcw, ShieldCheck, BarChart3 } from "lucide-react"
import { FadeIn } from "./motion-wrapper"

const features = [
  {
    icon: Link2,
    title: "Payment Links",
    description: "Create and share payment links instantly. No coding required to start accepting payments.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Code,
    title: "API Integration",
    description: "Robust REST APIs with comprehensive documentation for seamless integration into your platform.",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: Smartphone,
    title: "UPI & Cards",
    description: "Accept all major payment methods including UPI, credit cards, debit cards, and wallets.",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: RotateCcw,
    title: "Refund Management",
    description: "Process refunds with a single click. Automated reconciliation and instant notifications.",
    color: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-500/10",
  },
  {
    icon: ShieldCheck,
    title: "Fraud Protection",
    description: "AI-powered fraud detection with real-time risk scoring to protect your business.",
    color: "from-red-500 to-rose-500",
    bgColor: "bg-red-500/10",
  },
  {
    icon: BarChart3,
    title: "Real-time Dashboard",
    description: "Monitor transactions, track revenue, and analyze business metrics in real-time.",
    color: "from-indigo-500 to-violet-500",
    bgColor: "bg-indigo-500/10",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Features
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Everything you need to <span className="text-gradient">accept payments</span>
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Powerful features designed to help your business grow and scale effortlessly.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FadeIn key={feature.title} delay={index * 0.1}>
              <Card className="group relative border border-border/50 bg-card/50 backdrop-blur hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 transition-all duration-500 overflow-hidden h-full">
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                <CardHeader className="relative">
                  <div
                    className={`w-14 h-14 rounded-2xl ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon
                      className={`w-7 h-7 bg-gradient-to-br ${feature.color} bg-clip-text`}
                      style={{
                        color: "transparent",
                        backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                      }}
                    />
                    <feature.icon className={`w-7 h-7 text-primary`} />
                  </div>
                  <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Bottom gradient line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                />
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
