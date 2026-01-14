"use client"

import { useEffect, useRef, useState } from "react"

export function useInView(options = {}) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (options.once !== false) {
            observer.unobserve(entry.target)
          }
        } else if (options.once === false) {
          setIsInView(false)
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || "0px",
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [options.threshold, options.rootMargin, options.once])

  return [ref, isInView]
}

export function FadeIn({ children, className = "", delay = 0, direction = "up", duration = 0.6, ...props }) {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  const directions = {
    up: "translate-y-8",
    down: "-translate-y-8",
    left: "translate-x-8",
    right: "-translate-x-8",
    none: "",
  }

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${className}`}
      style={{
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translate(0, 0)" : undefined,
      }}
      {...props}
    >
      <div
        style={{
          transform: isInView
            ? "none"
            : directions[direction]
              ? `translateY(${direction === "up" ? "2rem" : direction === "down" ? "-2rem" : "0"}) translateX(${direction === "left" ? "2rem" : direction === "right" ? "-2rem" : "0"})`
              : undefined,
          transition: `transform ${duration}s ease-out ${delay}s`,
        }}
      >
        {children}
      </div>
    </div>
  )
}

export function StaggerChildren({ children, className = "", staggerDelay = 0.1 }) {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children)
        ? children.map((child, index) => (
            <div
              key={index}
              className="transition-all duration-500 ease-out"
              style={{
                transitionDelay: `${index * staggerDelay}s`,
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(1.5rem)",
              }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  )
}

export function ScaleIn({ children, className = "", delay = 0, duration = 0.5 }) {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${className}`}
      style={{
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
        opacity: isInView ? 1 : 0,
        transform: isInView ? "scale(1)" : "scale(0.95)",
      }}
    >
      {children}
    </div>
  )
}

export function SlideIn({ children, className = "", delay = 0, from = "left" }) {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  const transforms = {
    left: "translateX(-3rem)",
    right: "translateX(3rem)",
    top: "translateY(-3rem)",
    bottom: "translateY(3rem)",
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        transitionDelay: `${delay}s`,
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translate(0, 0)" : transforms[from],
      }}
    >
      {children}
    </div>
  )
}
