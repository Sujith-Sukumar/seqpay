"use client"

import { FadeIn } from "./motion-wrapper"
import { CheckCircle2, Users, Shield, Zap, Target, Heart } from "lucide-react"

export default function FAQ() {
  return (
    <section id="aboutus" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              SeqPay – Simplifying <span className="text-gradient">Digital Financial Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              SeqPay is a comprehensive digital financial services brand operated by ESTA Enterprises Private Limited. We focus on delivering secure, reliable, and easy-to-use payment and banking solutions through our advanced web and mobile applications.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="space-y-12">
            {/* Who We Are */}
            <div className="bg-background/50 backdrop-blur rounded-2xl border border-border/50 p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Who We Are</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                SeqPay is built to support India's growing digital economy by bringing multiple financial services onto a single, unified platform. Backed by ESTA Enterprises Private Limited, SeqPay combines technology, trust, and service excellence to support both customers and business partners.
              </p>
              <p className="text-muted-foreground">
                Today, ESTA Enterprises actively supports more than 3,000 Common Service Centres (CSCs) across Kerala and other parts of India, enabling them to offer essential digital financial services to local communities.
              </p>
            </div>

            {/* What We Do */}
            <div className="bg-background/50 backdrop-blur rounded-2xl border border-border/50 p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">What We Do</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">AEPS – Aadhaar Enabled Payment System</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li>• Cash withdrawal</li>
                    <li>• Balance enquiry</li>
                    <li>• Mini statement services</li>
                    <li className="text-xs italic">(Using Aadhaar and biometric authentication)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">DMT – Domestic Money Transfer</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li>• Fast and secure money transfers to any bank account within India</li>
                    <li>• Supported via IMPS, NEFT, or RTGS</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Micro ATM (m-ATM) Services</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li>• Basic banking services such as cash withdrawal and balance enquiry</li>
                    <li>• Using debit cards and PIN authentication</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">BBPS Utility Bill Payments</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li>• Secure payment of electricity, water, gas, mobile postpaid, broadband, DTH, FASTag, and other utility bills</li>
                    <li className="text-xs italic">(Through Bharat Bill Payment System)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Recharge Services</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li>• Instant mobile prepaid recharges</li>
                    <li>• DTH recharges</li>
                    <li>• Data card recharges</li>
                    <li>• FASTag recharges across major operators</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Our Platform */}
            <div className="bg-background/50 backdrop-blur rounded-2xl border border-border/50 p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Our Platform</h3>
              </div>
              <p className="text-muted-foreground mb-4">The SeqPay Web & Mobile Application is designed to be:</p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">User-friendly and easy to operate</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Secure and reliable</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Suitable for individuals, retailers, and CSC operators</span>
                </div>
              </div>
              <p className="text-muted-foreground mt-4">All transactions are processed with real-time updates and digital confirmations.</p>
            </div>

            {/* Who We Serve & Vision */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-background/50 backdrop-blur rounded-2xl border border-border/50 p-8 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">Who We Serve</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Individual users</li>
                  <li>• Retailers and merchants</li>
                  <li>• Common Service Centres (CSCs)</li>
                  <li>• Small businesses</li>
                  <li>• Rural and semi-urban communities</li>
                </ul>
                <p className="text-muted-foreground mt-4 text-sm">We strongly support financial inclusion by helping digital services reach every level of society.</p>
              </div>

              <div className="bg-background/50 backdrop-blur rounded-2xl border border-border/50 p-8 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-muted-foreground">
                  To build a trusted and scalable digital financial ecosystem that empowers people and businesses with seamless access to essential financial services.
                </p>
              </div>
            </div>

            {/* Our Commitment */}
            <div className="bg-gradient-to-br from-primary/10 to-blue-500/10 backdrop-blur rounded-2xl border border-primary/20 p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Our Commitment</h3>
              </div>
              <p className="text-muted-foreground mb-4">Backed by ESTA Enterprises Private Limited, SeqPay is committed to:</p>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Secure and compliant digital transactions</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Reliable support for service partners</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Expanding digital access through CSC networks</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Continuous innovation in fintech solutions</span>
                </div>
              </div>
              <p className="text-center text-foreground font-semibold mt-6 text-lg">
                SeqPay – One Platform. Multiple Services. Trusted Support.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
