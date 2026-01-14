"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Zap, Play } from "lucide-react"
import { FadeIn, ScaleIn } from "./motion-wrapper"
import { useEffect, useState } from "react"

export default function Hero() {
  const [counters, setCounters] = useState({ revenue: 0, transactions: 0, rate: 0, users: 0 })

  useEffect(() => {
    const targets = { revenue: 1245890, transactions: 2847, rate: 99.2, users: 1234 }
    const duration = 2000
    const steps = 60
    const interval = duration / steps

    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = step / steps
      const easeOut = 1 - Math.pow(1 - progress, 3)

      setCounters({
        revenue: Math.floor(targets.revenue * easeOut),
        transactions: Math.floor(targets.transactions * easeOut),
        rate: Math.floor(targets.rate * easeOut * 10) / 10,
        users: Math.floor(targets.users * easeOut),
      })

      if (step >= steps) clearInterval(timer)
    }, interval)

    return () => clearInterval(timer)
  }, [])

  const formatRevenue = (num) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(num)
  }

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <FadeIn delay={0}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-blue-500/10 border border-primary/20 text-primary text-sm font-medium mb-8 hover:shadow-lg hover:shadow-primary/10 transition-shadow duration-300 cursor-default">
              <Zap className="w-4 h-4 animate-pulse" />
              <span>Trusted by 10,000+ businesses worldwide</span>
              <ArrowRight className="w-3 h-3" />
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-balance mb-6">
              <span className="text-foreground">Fast, Secure</span>
              <br />
              <span className="text-gradient">Online Payments</span>
              <br />
              <span className="text-foreground">for Your Business</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty leading-relaxed">
              Accept payments seamlessly with RavPay. Support for UPI, credit cards, debit cards, and netbanking with
              industry-leading security and real-time analytics.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="w-full sm:w-auto h-12 px-8 text-base font-semibold bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300 btn-shine"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto h-12 px-8 text-base font-semibold bg-background/50 backdrop-blur border-border/50 hover:bg-muted/50 hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <Play className="w-5 h-5 mr-2 text-primary group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mt-10 text-sm text-muted-foreground">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
                <Shield className="w-4 h-4 text-green-600" />
                <span className="font-medium text-green-700">PCI DSS Compliant</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
                <Shield className="w-4 h-4 text-blue-600" />
                <span className="font-medium text-blue-700">256-bit Encryption</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20">
                <Shield className="w-4 h-4 text-purple-600" />
                <span className="font-medium text-purple-700">RBI Authorized</span>
              </div>
            </div>
          </FadeIn>
        </div>

        <ScaleIn delay={0.5}>
          <div className="mt-16 md:mt-20 relative">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-60" />

            <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl md:rounded-3xl p-4 md:p-8 border border-border/50 shadow-2xl">
              <div className="bg-background rounded-xl md:rounded-2xl shadow-xl overflow-hidden border border-border/50">
                {/* Browser chrome */}
                <div className="h-10 md:h-12 bg-muted/50 flex items-center px-4 gap-2 border-b border-border/50">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400 hover:bg-red-500 transition-colors cursor-pointer" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400 hover:bg-yellow-500 transition-colors cursor-pointer" />
                    <div className="w-3 h-3 rounded-full bg-green-400 hover:bg-green-500 transition-colors cursor-pointer" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="px-4 py-1.5 bg-background rounded-lg text-xs text-muted-foreground font-mono">
                      dashboard.ravpay.com
                    </div>
                  </div>
                </div>

                {/* Dashboard content */}
                <div className="p-6 md:p-8">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {[
                      {
                        label: "Total Revenue",
                        value: formatRevenue(counters.revenue),
                        trend: "+12.5%",
                        color: "text-green-600",
                      },
                      {
                        label: "Transactions",
                        value: counters.transactions.toLocaleString(),
                        trend: "+8.2%",
                        color: "text-green-600",
                      },
                      { label: "Success Rate", value: `${counters.rate}%`, trend: "+0.5%", color: "text-green-600" },
                      {
                        label: "Active Users",
                        value: counters.users.toLocaleString(),
                        trend: "+15.3%",
                        color: "text-green-600",
                      },
                    ].map((stat, index) => (
                      <div
                        key={stat.label}
                        className="p-4 bg-gradient-to-br from-muted/30 to-muted/50 rounded-xl border border-border/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <p className="text-xs font-medium text-muted-foreground mb-1">{stat.label}</p>
                        <p className="text-lg md:text-2xl font-bold text-foreground">{stat.value}</p>
                        <p className={`text-xs font-medium ${stat.color} mt-1`}>{stat.trend}</p>
                      </div>
                    ))}
                  </div>

                  <div className="h-40 md:h-56 bg-gradient-to-br from-primary/5 to-blue-500/5 rounded-xl flex items-end p-4 border border-border/20">
                    <div className="flex items-end gap-2 w-full h-full">
                      {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-primary to-blue-500 rounded-t-lg hover:from-primary/80 hover:to-blue-500/80 transition-all duration-300 cursor-pointer"
                          style={{
                            height: `${height}%`,
                            animation: `grow 1s ease-out ${i * 0.1}s both`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScaleIn>
      </div>

      <style jsx>{`
        @keyframes grow {
          from {
            height: 0%;
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  )
}
