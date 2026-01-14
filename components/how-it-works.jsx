"use client"

import { UserPlus, Settings, Rocket, ArrowRight } from "lucide-react"
import { FadeIn } from "./motion-wrapper"

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Create Account",
    description: "Sign up in minutes with your business details. No lengthy paperwork required.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Settings,
    step: "02",
    title: "Integrate",
    description: "Use our APIs, plugins, or no-code solutions to connect RavPay to your platform.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Start Accepting",
    description: "Go live and start accepting payments from customers across multiple channels.",
    color: "from-green-500 to-emerald-500",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-muted/30 to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-primary/10 via-blue-500/10 to-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Get started in <span className="text-gradient">three simple steps</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Start accepting payments in minutes, not days. Our streamlined process gets you up and running fast.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.15}>
              <div className="relative group">
                {/* Connector line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-border via-primary/30 to-border" />
                )}

                {/* Arrow icon between steps */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-14 left-[calc(100%-1rem)] w-8 h-8 items-center justify-center z-10">
                    <ArrowRight className="w-5 h-5 text-primary/50" />
                  </div>
                )}

                <div className="relative bg-background rounded-3xl p-8 border border-border/50 shadow-lg hover:shadow-2xl hover:border-primary/30 hover:-translate-y-2 transition-all duration-500 text-center overflow-hidden">
                  {/* Background glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  {/* Step number badge */}
                  <div className="absolute top-4 right-4">
                    <span
                      className={`text-5xl font-bold bg-gradient-to-br ${item.color} bg-clip-text text-transparent opacity-20`}
                    >
                      {item.step}
                    </span>
                  </div>

                  {/* Icon */}
                  <div
                    className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} p-0.5 mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                  >
                    <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                      <item.icon className="w-9 h-9 text-primary" />
                    </div>
                  </div>

                  <span
                    className={`inline-block text-sm font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-3`}
                  >
                    STEP {item.step}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
