'use client'

import { useState } from 'react'
import Link from 'next/link'

interface NavigationProps {
  logoText?: string
  phoneNumber?: string
  ctaText?: string
}

export default function Navigation({
  logoText = 'Law Firm Name',
  phoneNumber = '(555) 123-4567',
  ctaText = 'Free Consultation'
}: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { label: 'Home', href: '#' },
    { label: 'Practice Areas', href: '#practice-areas' },
    { label: 'About', href: '#about' },
    { label: 'Results', href: '#results' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="navigation">
      <div className="container">
        <div className="navigation__container">
          {/* <Link href="/" className="navigation__logo">
            {logoText}
          </Link> */}

          <button
            className={`navigation__toggle ${isMenuOpen ? 'navigation__toggle--active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="navigation__toggle-icon"></span>
          </button>

          <ul className={`navigation__menu ${isMenuOpen ? 'navigation__menu--active' : ''}`}>
            {menuItems.map((item) => (
              <li key={item.label} className="navigation__item">
                <Link
                  href={item.href}
                  className="navigation__link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="navigation__item navigation__cta">

            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
