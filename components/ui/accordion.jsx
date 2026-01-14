"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"

const Accordion = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={className} {...props} />
))
Accordion.displayName = "Accordion"

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={`border-b ${className || ""}`} {...props} />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef(
  ({ className, children, ...props }, ref) => {
    const [isOpen, setIsOpen] = React.useState(false)
    
    return (
      <button
        ref={ref}
        className={`flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline ${className || ""}`}
        onClick={() => setIsOpen(!isOpen)}
        {...props}
      >
        {children}
        <ChevronDown className={`h-4 w-4 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>
    )
  }
)
AccordionTrigger.displayName = "AccordionTrigger"

const AccordionContent = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={`overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down ${className || ""}`}
      {...props}
    >
      <div className="pb-4 pt-0">{children}</div>
    </div>
  )
)
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }