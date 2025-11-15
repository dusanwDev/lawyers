'use client'

import { useEffect, useRef, useState, ReactNode, cloneElement, isValidElement } from 'react'

interface CountUpGroupProps {
  children: ReactNode
  className?: string
}

export default function CountUpGroup({ children, className = '' }: CountUpGroupProps) {
  const [shouldAnimate, setShouldAnimate] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container || hasAnimated) return

    // Create an Intersection Observer that triggers only when container is 100% visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Only trigger when the container is fully in view (100% visible)
          if (entry.isIntersecting && entry.intersectionRatio >= 1) {
            setHasAnimated(true)
            setShouldAnimate(true)
            observer.unobserve(container)
          }
        })
      },
      {
        threshold: 1.0, // Container must be 100% visible
        rootMargin: '0px'
      }
    )

    observer.observe(container)

    return () => {
      observer.disconnect()
    }
  }, [hasAnimated])

  // Clone children and pass shouldAnimate prop to CountUpValue components
  const clonedChildren = typeof children === 'object' && children !== null && 'map' in children
    ? (children as Array<ReactNode>).map((child, index) => {
        if (isValidElement(child)) {
          return cloneElement(child, { ...child.props, shouldAnimate, key: index } as any)
        }
        return child
      })
    : children

  return (
    <div ref={containerRef} className={className}>
      {clonedChildren}
    </div>
  )
}
