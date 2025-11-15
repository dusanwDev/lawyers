'use client'

import { useEffect, useRef, useState } from 'react'
import './CountUpValue.css'

interface CountUpValueProps {
  value: string | number
  duration?: number
  className?: string
}

export default function CountUpValue({ value, duration = 2000, className = '' }: CountUpValueProps) {
  const [displayValue, setDisplayValue] = useState<string | number>(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element || hasAnimated) return

    // Create an Intersection Observer that triggers only when element is 100% visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Only trigger when the element is fully in view (100% visible)
          if (entry.isIntersecting && entry.intersectionRatio >= 1) {
            setHasAnimated(true)
            animateValue()
            observer.unobserve(element)
          }
        })
      },
      {
        threshold: 1.0, // Element must be 100% visible
        rootMargin: '0px'
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [hasAnimated])

  const animateValue = () => {
    const stringValue = String(value)

    // Check if value contains numbers to animate
    const numMatch = stringValue.match(/[\d,]+/)

    if (numMatch) {
      const numStr = numMatch[0]
      const prefix = stringValue.substring(0, stringValue.indexOf(numStr))
      const suffix = stringValue.substring(stringValue.indexOf(numStr) + numStr.length)
      const numValue = parseFloat(numStr.replace(/,/g, ''))

      const startTime = performance.now()

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const current = Math.floor(easeOutQuart * numValue)

        // Format the number with commas if original had them
        let formattedNum = current.toString()
        if (numStr.includes(',') && current >= 1000) {
          formattedNum = current.toLocaleString()
        }

        setDisplayValue(`${prefix}${formattedNum}${suffix}`)

        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          setDisplayValue(value)
        }
      }

      requestAnimationFrame(animate)
    } else {
      // If no number found, just display the value
      setDisplayValue(value)
    }
  }

  return (
    <div
      ref={elementRef}
      className={`count-up-value ${className} ${hasAnimated ? 'count-up-value--animated' : ''}`}
    >
      {displayValue}
    </div>
  )
}
