"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Sparkles } from "lucide-react"

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "How It Works", href: "#how-it-works" },
//   { name: "Pricing", href: "#pricing" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-xl shadow-sm border-b border-border/50" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative w-9 h-9 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary/25 group-hover:shadow-primary/40 transition-shadow duration-300">
              <span className="text-white font-bold text-lg">Z</span>
              <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="text-xl font-bold text-foreground tracking-tight">ZPay</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full group-hover:w-4/5 transition-all duration-300" />
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="font-medium hover:bg-primary/5 hover:text-primary transition-colors duration-200"
            >
              Sign In
            </Button>
            <Button
              size="sm"
              className="font-medium bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 btn-shine"
            >
              <Sparkles className="w-4 h-4 mr-1.5" />
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 border-t border-border/50">
            <div className="flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-4 mt-2 border-t border-border/50">
                <Button variant="ghost" size="sm" className="justify-start">
                  Sign In
                </Button>
                <Button size="sm" className="bg-gradient-to-r from-primary to-blue-600">
                  <Sparkles className="w-4 h-4 mr-1.5" />
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
