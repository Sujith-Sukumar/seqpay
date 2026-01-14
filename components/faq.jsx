"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FadeIn } from "./motion-wrapper"
import { HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "How long does it take to set up RavPay?",
    answer:
      "You can create an account and start accepting payments within minutes. API integration typically takes 1-2 days depending on your platform complexity.",
  },
  {
    question: "What payment methods are supported?",
    answer:
      "RavPay supports UPI, credit cards, debit cards, netbanking, wallets, and international cards including Visa, MasterCard, and RuPay.",
  },
  {
    question: "How secure is RavPay?",
    answer:
      "RavPay is PCI DSS Level 1 compliant with 256-bit encryption. We use AI-powered fraud detection and comply with all RBI guidelines for payment security.",
  },
  {
    question: "What are the settlement timelines?",
    answer:
      "Settlement timelines depend on your plan. Starter plans have weekly settlements, Business plans have daily settlements, and Enterprise plans can have instant settlements.",
  },
  {
    question: "Is there a minimum transaction amount?",
    answer: "There is no minimum transaction amount. You can accept payments as low as ₹1 through RavPay.",
  },
  {
    question: "Do you provide technical support?",
    answer:
      "Yes, we provide email support for Starter plans, priority support for Business plans, and dedicated account managers for Enterprise customers.",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Frequently asked <span className="text-gradient">questions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about RavPay. Can't find what you're looking for? Contact our team.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="bg-background/50 backdrop-blur rounded-2xl border border-border/50 p-2 shadow-xl">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/50 last:border-0">
                  <AccordionTrigger className="text-left text-foreground hover:text-primary transition-colors py-6 px-4 hover:no-underline group [&[data-state=open]]:text-primary">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <HelpCircle className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-medium">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 px-4 pl-15">
                    <div className="pl-11">{faq.answer}</div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
