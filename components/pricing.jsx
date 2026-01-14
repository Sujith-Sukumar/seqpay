"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Sparkles, ArrowRight } from "lucide-react"
import { FadeIn } from "./motion-wrapper"

const plans = [
  {
    name: "Starter",
    price: "1.9%",
    description: "Perfect for small businesses and startups",
    features: ["Payment Links", "Basic Dashboard", "Email Support", "Standard Checkout", "Weekly Settlements"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Business",
    price: "1.5%",
    description: "For growing businesses with higher volumes",
    features: [
      "Everything in Starter",
      "API Access",
      "Priority Support",
      "Custom Checkout",
      "Daily Settlements",
      "Advanced Analytics",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large businesses with custom needs",
    features: [
      "Everything in Business",
      "Dedicated Account Manager",
      "Custom Integration",
      "SLA Guarantee",
      "Instant Settlements",
      "White-label Solution",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-primary/5 via-blue-500/5 to-cyan-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Pricing
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Simple, <span className="text-gradient">transparent pricing</span>
            </h2>
            <p className="text-lg text-muted-foreground">No hidden fees. No setup costs. Pay only for what you use.</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6 items-start">
          {plans.map((plan, index) => (
            <FadeIn key={plan.name} delay={index * 0.1}>
              <Card
                className={`relative group h-full transition-all duration-500 hover:-translate-y-2 ${
                  plan.popular
                    ? "border-2 border-primary shadow-2xl shadow-primary/20 scale-105 z-10 bg-gradient-to-b from-primary/5 to-background"
                    : "border border-border/50 hover:border-primary/30 hover:shadow-xl"
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-primary to-blue-600 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg shadow-primary/30">
                      <Sparkles className="w-3.5 h-3.5" />
                      Most Popular
                    </span>
                  </div>
                )}

                <CardHeader className="text-center pb-4 pt-8">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="mt-6 mb-2">
                    <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                    {plan.price !== "Custom" && (
                      <span className="text-muted-foreground ml-2 text-sm">per transaction</span>
                    )}
                  </div>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                </CardHeader>

                <CardContent className="pt-4">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                            plan.popular ? "bg-primary" : "bg-primary/10"
                          }`}
                        >
                          <Check className={`w-3 h-3 ${plan.popular ? "text-white" : "text-primary"}`} />
                        </div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full h-12 font-semibold transition-all duration-300 group/btn ${
                      plan.popular
                        ? "bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 text-white btn-shine"
                        : "bg-background border-2 border-border hover:border-primary/50 hover:bg-primary/5 text-foreground"
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>

                {/* Hover glow for non-popular cards */}
                {!plan.popular && (
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                )}
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
