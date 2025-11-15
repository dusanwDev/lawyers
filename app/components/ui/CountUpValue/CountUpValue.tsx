'use client'

import { useEffect, useState } from 'react'
import './CountUpValue.css'

interface CountUpValueProps {
  value: string | number
  duration?: number
  className?: string
  shouldAnimate?: boolean
}

export default function CountUpValue({ value, duration = 2000, className = '', shouldAnimate = false }: CountUpValueProps) {
  const [displayValue, setDisplayValue] = useState<string | number>(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (shouldAnimate && !hasAnimated) {
      setHasAnimated(true)
      animateValue()
    }
  }, [shouldAnimate, hasAnimated])

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
    <div className={`count-up-value ${className} ${hasAnimated ? 'count-up-value--animated' : ''}`}>
      {displayValue}
    </div>
  )
}
