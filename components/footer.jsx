"use client"

import { Twitter, Linkedin, Github, Instagram, ArrowUp } from "lucide-react"
import { FadeIn } from "./motion-wrapper"

const footerLinks = {
  Product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "API Docs", href: "#" },
    { name: "Integrations", href: "#" },
  ],
  Company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
  ],
  Resources: [
    { name: "Documentation", href: "#" },
    { name: "Help Center", href: "#" },
    { name: "Status", href: "#" },
    { name: "Contact", href: "#contact" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "Compliance", href: "#" },
  ],
}

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "GitHub", icon: Github, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-foreground text-background overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground via-foreground to-black/90" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12 mb-16">
            {/* Brand */}
            <div className="col-span-2">
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">R</span>
                </div>
                <span className="text-2xl font-bold">RavPay</span>
              </div>
              <p className="text-background/60 text-sm mb-8 max-w-xs leading-relaxed">
                Fast, secure, and reliable payment solutions for businesses of all sizes. Join 10,000+ businesses
                already using RavPay.
              </p>

              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-xl bg-background/10 hover:bg-primary hover:scale-110 flex items-center justify-center transition-all duration-300"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-semibold mb-5 text-background">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-background/60 hover:text-primary transition-colors duration-200 inline-block"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Bottom */}
        <FadeIn delay={0.1}>
          <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-background/50">© 2026 RavPay. All rights reserved.</p>

            <div className="flex items-center gap-8">
              <div className="flex items-center gap-6 text-sm text-background/50">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  PCI DSS Compliant
                </span>
                <span>RBI Authorized</span>
              </div>

              {/* Back to top button */}
              <button
                onClick={scrollToTop}
                className="w-10 h-10 rounded-xl bg-background/10 hover:bg-primary hover:scale-110 flex items-center justify-center transition-all duration-300"
                aria-label="Back to top"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  )
}
