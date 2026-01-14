"use client"

import { FadeIn } from "./motion-wrapper"
import { Shield, CreditCard, Smartphone, Wallet, Building2, Banknote } from "lucide-react"

const partners = [
  { name: "Visa", display: "VISA", color: "from-blue-600 to-blue-700", icon: CreditCard },
  { name: "MasterCard", display: "MasterCard", color: "from-red-500 to-orange-500", icon: CreditCard },
  { name: "UPI", display: "UPI", color: "from-green-600 to-emerald-600", icon: Smartphone },
  { name: "RuPay", display: "RuPay", color: "from-purple-600 to-indigo-600", icon: Banknote },
  { name: "American Express", display: "AMEX", color: "from-gray-700 to-gray-800", icon: Building2 },
  { name: "Google Pay", display: "GPay", color: "from-yellow-500 to-orange-500", icon: Wallet },
]

export default function TrustedBy() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Secure & Trusted
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Payment Methods We <span className="text-gradient">Support</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Seamlessly integrated with leading payment providers for maximum security and convenience
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner, index) => {
              const Icon = partner.icon
              return (
                <div
                  key={partner.name}
                  className="group relative p-6 rounded-2xl bg-background/50 backdrop-blur border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 cursor-pointer"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Gradient background */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${partner.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <div className="relative flex flex-col items-center text-center space-y-3">
                    {/* Icon container */}
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${partner.color} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
                        <Icon className="w-5 h-5 text-foreground" />
                      </div>
                    </div>
                    
                    {/* Partner name */}
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {partner.display}
                      </h3>
                      <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                </div>
              )
            })}
          </div>
        </FadeIn>

        {/* Trust indicators */}
        <FadeIn delay={0.4}>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>PCI DSS Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
              <span>256-bit SSL Encryption</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" style={{ animationDelay: '1s' }} />
              <span>99.9% Uptime</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
