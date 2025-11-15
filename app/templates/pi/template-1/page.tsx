'use client'

import { useState, useEffect, useRef } from 'react'
import Navigation from '@/app/components/ui/Navigation/Navigation'
import ContactForm from '@/app/components/ui/ContactForm/ContactForm'
import CountUpValue from '@/app/components/ui/CountUpValue/CountUpValue'
import CountUpGroup from '@/app/components/ui/CountUpValue/CountUpGroup'
import './template-1.css'

// Count-up animation hook
function useCountUp(end: number, duration: number = 2000, isVisible: boolean = false) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (!isVisible || hasAnimated) return

    setHasAnimated(true)
    const startTime = Date.now()
    const endValue = end

    const animate = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const current = Math.floor(easeOutQuart * endValue)

      setCount(current)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [end, duration, isVisible, hasAnimated])

  return count
}

// Component to handle individual count-up values
function CountUpValue({ value }: { value: string }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  // Parse the value to extract number, prefix, and suffix
  const parseValue = (val: string) => {
    // Match pattern like "$50M+", "25+", "5.0", "500+"
    const match = val.match(/^(\$)?(\d+(?:\.\d+)?)(M|K|\+)?(\+)?$/i)

    if (match) {
      const prefix = match[1] || ''
      const number = parseFloat(match[2])
      const suffix = (match[3] || '') + (match[4] || '')
      return { prefix, number, suffix }
    }

    // Fallback for plain numbers
    const numMatch = val.match(/(\d+(?:\.\d+)?)/)
    if (numMatch) {
      return { prefix: '', number: parseFloat(numMatch[1]), suffix: '' }
    }

    return { prefix: '', number: 0, suffix: val }
  }

  const { prefix, number, suffix } = parseValue(value)
  const currentCount = useCountUp(number, 2000, isVisible)

  // Format the number (preserve decimal for values like 5.0)
  const formattedNumber = value.includes('.')
    ? currentCount.toFixed(1)
    : currentCount.toString()

  return (
    <div ref={ref} className="hero-layout-1__trust-value">
      {prefix}{formattedNumber}{suffix}
    </div>
  )
}

export default function PITemplate1() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const logoText = 'Law Firm Name';
  const phoneNumber = '(555) 123-4567';
  const ctaText = 'CALL NOW';

  // Placeholder data - Replace with real data
  const templateData = {
    cityName: 'Chicago',
    firmName: 'Johnson & Associates',
    primaryPracticeArea: 'Personal Injury',
    phoneNumber: '(312) 555-0100',
    attorneyName: 'Sarah Johnson',
    attorneyImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop',
    yearsOfExperience: '25+',
    resultsHighlight: '$50M+',
    heroHeadline: 'Chicago Personal Injury Lawyer Fighting for Your Rights',
    heroSubheadline: 'Experienced legal representation for car accidents, slip & fall, and medical malpractice cases.',
    heroSubheadline2:'No fees unless we win',
    primaryCtaText: 'Get Your Free Case Review',
  }

  const practiceAreas = [
    {
      title: 'Car Accidents',
      description: 'Get compensation for injuries from negligent drivers, including medical bills, lost wages, and pain & suffering.',
      icon: '🚗'
    },
    {
      title: 'Slip & Fall',
      description: 'Property owners have a duty to keep premises safe. We fight for victims of dangerous conditions.',
      icon: '⚠️'
    },
    {
      title: 'Medical Malpractice',
      description: 'When healthcare providers fail their duty of care, we hold them accountable for your injuries.',
      icon: '⚕️'
    },
    {
      title: 'Workplace Injuries',
      description: 'Injured on the job? We help you get the workers\' compensation and benefits you deserve.',
      icon: '🏗️'
    },
    {
      title: 'Wrongful Death',
      description: 'Compassionate representation for families who have lost loved ones due to negligence.',
      icon: '🕊️'
    },
    {
      title: 'Dog Bites',
      description: 'Dog owners are liable for injuries their pets cause. We recover damages for victims.',
      icon: '🐕'
    }
  ]

  const testimonials = [
    {
      name: 'Michael Chen',
      case: 'Car Accident',
      rating: 5,
      text: 'After my accident, Sarah and her team fought tirelessly to get me the compensation I deserved. They handled everything while I focused on recovery. Highly recommended!'
    },
    {
      name: 'Jennifer Martinez',
      case: 'Slip & Fall',
      rating: 5,
      text: 'The professionalism and care I received was outstanding. They kept me informed every step of the way and secured a settlement that exceeded my expectations.'
    },
    {
      name: 'Robert Williams',
      case: 'Medical Malpractice',
      rating: 5,
      text: 'Dealing with a medical malpractice case is complex, but this firm made it manageable. Their expertise and dedication resulted in a favorable outcome.'
    },
    {
      name: 'Amanda Davis',
      case: 'Workplace Injury',
      rating: 5,
      text: 'I was injured at work and didn\'t know where to turn. This firm guided me through the entire process and secured the compensation I needed to support my family during recovery.'
    },
    {
      name: 'David Thompson',
      case: 'Wrongful Death',
      rating: 5,
      text: 'After losing my father due to negligence, this firm provided compassionate support and fought for justice. They made a difficult time more bearable and got us the settlement we deserved.'
    },
    {
      name: 'Lisa Anderson',
      case: 'Dog Bite',
      rating: 5,
      text: 'When my daughter was bitten by a neighbor\'s dog, this firm took immediate action. They were professional, caring, and secured compensation for her medical bills and trauma.'
    }
  ]

  const caseResults = [
    { amount: '$2.4M', type: 'Car Accident', description: 'Rear-end collision causing spinal injuries' },
    { amount: '$1.8M', type: 'Medical Malpractice', description: 'Surgical error resulting in permanent disability' },
    { amount: '$950K', type: 'Slip & Fall', description: 'Grocery store negligence causing hip fracture' },
    { amount: '$750K', type: 'Workplace Injury', description: 'Construction site accident with multiple injuries' }
  ]

  const processSteps = [
    {
      number: 1,
      title: 'Free Consultation',
      description: 'Call us for a no-obligation case review. We listen to your story and explain your legal options.'
    },
    {
      number: 2,
      title: 'Investigation',
      description: 'We gather evidence, interview witnesses, and build a strong case on your behalf.'
    },
    {
      number: 3,
      title: 'Negotiation',
      description: 'We fight with insurance companies to get you maximum compensation for your injuries.'
    },
    {
      number: 4,
      title: 'Resolution',
      description: 'Whether through settlement or trial, we secure the best possible outcome for you.'
    }
  ]

  const faqItems = [
    {
      question: 'How much does it cost to hire a personal injury lawyer?',
      answer: 'We work on a contingency fee basis, which means you pay nothing unless we win your case. There are no upfront costs or hidden fees. Our fee comes from a percentage of your settlement or verdict.'
    },
    {
      question: 'How long do I have to file a personal injury claim in Chicago?',
      answer: 'In Illinois, the statute of limitations for most personal injury cases is 2 years from the date of injury. However, certain cases may have different deadlines. It\'s crucial to contact us as soon as possible to protect your rights.'
    },
    {
      question: 'What compensation can I receive in a personal injury case?',
      answer: 'You may be entitled to compensation for medical expenses, lost wages, pain and suffering, emotional distress, and in some cases, punitive damages. The exact amount depends on the specifics of your case.'
    },
    {
      question: 'Do I need to go to court for my personal injury case?',
      answer: 'Most personal injury cases are settled out of court through negotiations. However, if a fair settlement cannot be reached, we are fully prepared to take your case to trial and fight for your rights in court.'
    },
    {
      question: 'How long does a personal injury case take?',
      answer: 'The timeline varies depending on the complexity of your case, the severity of injuries, and whether settlement negotiations are successful. Simple cases may resolve in a few months, while complex cases can take 1-2 years or longer.'
    }
  ]

  // Carousel navigation functions
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <>
      {/* Hero Section - Layout 1: Attorney Left + Form Right + Top Banner */}
      <div className="hero-layout-1">
        {/* Top Banner */}
        <div className="hero-layout-1__banner">
          <div className="container">
            <div className="hero-layout-1__banner-content">
              <div className="hero-layout-1__banner-left">
                LOGO
              </div>
                <a href={`tel:${phoneNumber.replace(/\D/g, '')}`} className="btn btn--primary">
                <span className="btn__icon">📞</span>
                {ctaText} {phoneNumber}
              </a>
            </div>
          </div>
        </div>

        <Navigation
          logoText={templateData.firmName}
          phoneNumber={templateData.phoneNumber}
          ctaText="Free Consultation"
        />
        {/* Navigation */}

        {/* Main Hero Content */}
        <div className="container">
          <div className="hero-layout-1__content">
            {/* Left Column - Attorney Image */}
            <div className="hero-layout-1__attorney">
              
              <h1 className="hero-layout-1__headline">{templateData.heroHeadline}</h1>
              <p className="hero-layout-1__subheadline">{templateData.heroSubheadline}</p>
              <p className="hero-layout-1__subheadline">{templateData.heroSubheadline2}</p>

              {/* <img
                src={templateData.attorneyImage}
                alt={templateData.attorneyName}
                className="hero-layout-1__attorney-image"
              /> */}
              {/* <p className="hero-layout-1__attorney-caption">
                <span className="hero-layout-1__attorney-name">{templateData.attorneyName}</span>
                {' '}— {templateData.primaryPracticeArea} Lawyer in {templateData.cityName}
              </p> */}
            </div>

            {/* Right Column - Text + Form */}
            <div className="hero-layout-1__text">

              <ContactForm
                variant="hero"
                title="Get Your Free Case Review"
                subtitle="We respond within 24 hours"
                ctaText={templateData.primaryCtaText}
              />


            </div>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="hero-layout-1__trust-bar">
          <div className="container">
            <CountUpGroup className="hero-layout-1__trust-items">
              <div className="hero-layout-1__trust-item">
                <CountUpValue value={templateData.resultsHighlight} />
                <div className="hero-layout-1__trust-label">Recovered for Clients</div>
              </div>
              <div className="hero-layout-1__trust-item">
                <CountUpValue value={templateData.yearsOfExperience} />
                <div className="hero-layout-1__trust-label">Years Experience</div>
              </div>
              <div className="hero-layout-1__trust-item">
                <CountUpValue value="5.0" />
                <div className="hero-layout-1__trust-label">Client Rating</div>
              </div>
              <div className="hero-layout-1__trust-item">
                <CountUpValue value="500+" />
                <div className="hero-layout-1__trust-label">Cases Won</div>
              </div>
            </CountUpGroup>
          </div>
        </div>
      </div>

      {/* Practice Areas Section */}
      <section id="practice-areas" className="practice-areas">
        <div className="container">
          <div className="practice-areas__header">
            <h2 className="practice-areas__title">How We Can Help You</h2>
            <p className="practice-areas__subtitle">
              Comprehensive legal representation for all types of personal injury cases
            </p>
          </div>

          <div className="practice-areas__grid">
            {practiceAreas.map((area) => (
              <div key={area.title} className="practice-area">
                <div className="practice-area__icon">{area.icon}</div>
                <h3 className="practice-area__title">{area.title}</h3>
                <p className="practice-area__description">{area.description}</p>
                <a href="#contact" className="practice-area__link">
                  Learn More <span className="practice-area__arrow">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof/Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <div className="testimonials__header">
            <h2 className="testimonials__title">What Our Clients Say</h2>
            <p className="testimonials__subtitle">
              Real stories from real clients we've helped
            </p>
          </div>

          <div className="testimonials__carousel">
            <button
              className="testimonials__nav testimonials__nav--left"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              ‹
            </button>

            <div className="testimonials__carousel-container">
              <div
                className="testimonials__carousel-track"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="testimonial">
                    <div className="testimonial__rating">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="testimonial__star">★</span>
                      ))}
                    </div>
                    <p className="testimonial__text">{testimonial.text}</p>
                    <div className="testimonial__author">
                      <div className="testimonial__avatar">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="testimonial__author-info">
                        <div className="testimonial__author-name">{testimonial.name}</div>
                        <div className="testimonial__author-case">{testimonial.case}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              className="testimonials__nav testimonials__nav--right"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              ›
            </button>
          </div>

          <div className="testimonials__dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`testimonials__dot ${index === currentTestimonial ? 'testimonials__dot--active' : ''}`}
                onClick={() => setCurrentTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Attorney Bio Section */}
      <section id="about" className="attorney-bio">
        <div className="container">
          <div className="attorney-bio__container">
            <div className="attorney-bio__image-wrapper">
              <img
                src={templateData.attorneyImage}
                alt={templateData.attorneyName}
                className="attorney-bio__image"
              />

            </div>

            <div className="attorney-bio__content">
              <div className="attorney-bio__header">
                <h2 className="attorney-bio__name">Meet {templateData.attorneyName}</h2>
                <p className="attorney-bio__title">
                  Personal Injury Attorney | {templateData.cityName}, IL
                </p>
              </div>

              <div className="attorney-bio__highlights">
                <div className="attorney-bio__highlight">
                  <div className="attorney-bio__highlight-value">{templateData.yearsOfExperience}</div>
                  <div className="attorney-bio__highlight-label">Years Experience</div>
                </div>
                <div className="attorney-bio__highlight">
                  <div className="attorney-bio__highlight-value">{templateData.resultsHighlight}</div>
                  <div className="attorney-bio__highlight-label">Total Recovered</div>
                </div>
                <div className="attorney-bio__highlight">
                  <div className="attorney-bio__highlight-value">500+</div>
                  <div className="attorney-bio__highlight-label">Cases Won</div>
                </div>
              </div>
              <div className="attorney-bio__credentials">
                <ul className="attorney-bio__credentials-list">
                  <p className="attorney-bio__credential">Licensed in Illinois</p>
                  <p className="attorney-bio__credential">Super Lawyers Rising Star</p>
                  <p className="attorney-bio__credential">Trial Lawyers Association</p>
                  <p className="attorney-bio__credential">Million Dollar Advocates Forum</p>
                </ul>
              </div>
              <p className="attorney-bio__text">
                With over {templateData.yearsOfExperience} years of experience representing injury victims
                throughout {templateData.cityName}, {templateData.attorneyName} has built a reputation for
                compassionate, results-driven legal advocacy. She understands the physical, emotional, and
                financial toll that an injury can take on you and your family.
              </p>

              <p className="attorney-bio__text">
                {templateData.attorneyName} takes a personalized approach to every case, ensuring clients
                receive the attention and communication they deserve. Her track record includes numerous
                six and seven-figure settlements and verdicts for clients injured in car accidents, slip
                and falls, medical malpractice, and other personal injury cases.
              </p>

              {/* <div className="attorney-bio__quote">
                "My mission is simple: to fight for justice and maximum compensation for every client.
                When you're injured due to someone else's negligence, you deserve a lawyer who will stand
                up for your rights and never back down."
                <br />— {templateData.attorneyName}
              </div> */}

              <div className="attorney-bio__cta">
                <a href="#contact" className="btn btn--primary btn--large">
                  Schedule Your Free Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Results Section */}
      {/* <section id="results" className="case-results">
        <div className="container">
          <div className="case-results__header">
            <h2 className="case-results__title">Proven Results</h2>
            <p className="case-results__subtitle">
              We've recovered millions for our clients
            </p>
          </div>

          <div className="case-results__grid">
            {caseResults.map((result, index) => (
              <div key={index} className={`case-result ${index === 0 ? 'case-result--featured' : ''}`}>
                <div className="case-result__amount">{result.amount}</div>
                <h3 className="case-result__type">{result.type}</h3>
                <p className="case-result__description">{result.description}</p>
              </div>
            ))}
          </div>

          <div className="case-results__disclaimer">
            <p className="case-results__disclaimer-text">
              *Past results do not guarantee future outcomes. Each case is unique and results depend on specific facts and circumstances.
            </p>
          </div>
        </div>
      </section> */}

      {/* Process Section */}
      <section className="process">
        <div className="container">
          <div className="process__header">
            <h2 className="process__title">Our Process</h2>
            <p className="process__subtitle">
              Four simple steps to getting the compensation you deserve
            </p>
          </div>

          <div className="process__steps">
            {processSteps.map((step) => (
              <div key={step.number} className="process-step">
                <div className="process-step__number">{step.number}</div>
                <h3 className="process-step__title">{step.title}</h3>
                <p className="process-step__description">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="process__cta">
            <p className="process__cta-text">
              Ready to get started? Contact us today for your free consultation.
            </p>
            <a href="#contact" className="btn btn--primary btn--large">
              Get Your Free Case Review
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq">
        <div className="container">
          <div className="faq__header">
            <h2 className="faq__title">Frequently Asked Questions</h2>
            <p className="faq__subtitle">
              Get answers to common questions about personal injury cases
            </p>
          </div>

          <div className="faq__list">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className={`faq-item ${activeFaq === index ? 'faq-item--active' : ''}`}
              >
                <button
                  className="faq-item__question"
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  {item.question}
                  <span className="faq-item__icon">▼</span>
                </button>
                <div className="faq-item__answer">
                  <div className="faq-item__answer-text">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact__header">
            <h2 className="contact__title">Get Your Free Case Review</h2>
            <p className="contact__subtitle">
              Contact us today to discuss your case. No fees unless we win.
            </p>
          </div>

          <div className="contact__container">
            <div className="contact__info">
              <div className="contact__info-item">
                <span className="contact__info-icon">📞</span>
                <div className="contact__info-content">
                  <div className="contact__info-label">Call Us</div>
                  <a href={`tel:${templateData.phoneNumber.replace(/\D/g, '')}`} className="contact__info-value">
                    {templateData.phoneNumber}
                  </a>
                </div>
              </div>

              <div className="contact__info-item">
                <span className="contact__info-icon">📧</span>
                <div className="contact__info-content">
                  <div className="contact__info-label">Email</div>
                  <a href="mailto:info@lawfirm.com" className="contact__info-value">
                    info@lawfirm.com
                  </a>
                </div>
              </div>

              <div className="contact__info-item">
                <span className="contact__info-icon">📍</span>
                <div className="contact__info-content">
                  <div className="contact__info-label">Office Address</div>
                  <div className="contact__info-value">
                    123 Main Street, Suite 400<br />
                    {templateData.cityName}, IL 60601
                  </div>
                </div>
              </div>

              <div className="contact__info-item">
                <span className="contact__info-icon">🕐</span>
                <div className="contact__info-content">
                  <div className="contact__info-label">Hours</div>
                  <div className="contact__info-hours">
                    Monday - Friday: 8:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 2:00 PM<br />
                    Sunday: Closed<br />
                    <strong>Emergency? Call 24/7</strong>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <ContactForm
                variant="light"
                title="Send Us a Message"
                subtitle="We'll respond within 24 hours"
                ctaText="Send Message"
              />
            </div>
          </div>

          <div className="contact__emergency">
            <h3 className="contact__emergency-title">Need Immediate Assistance?</h3>
            <a href={`tel:${templateData.phoneNumber.replace(/\D/g, '')}`} className="contact__emergency-phone">
              {templateData.phoneNumber}
            </a>
            <p className="contact__emergency-text">Available 24/7 for emergencies</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer__main">
            <div className="footer__section">
              <div className="footer__logo">{templateData.firmName}</div>
              <p className="footer__description">
                Dedicated to fighting for justice and maximum compensation for personal injury victims
                throughout {templateData.cityName} and surrounding areas.
              </p>
              <div className="footer__social">
                <a href="#" className="footer__social-link" aria-label="Facebook">f</a>
                <a href="#" className="footer__social-link" aria-label="Twitter">𝕏</a>
                <a href="#" className="footer__social-link" aria-label="LinkedIn">in</a>
              </div>
            </div>

            <div className="footer__section">
              <h4 className="footer__title">Practice Areas</h4>
              <ul className="footer__links">
                <li><a href="#" className="footer__link">Car Accidents</a></li>
                <li><a href="#" className="footer__link">Slip & Fall</a></li>
                <li><a href="#" className="footer__link">Medical Malpractice</a></li>
                <li><a href="#" className="footer__link">Workplace Injuries</a></li>
                <li><a href="#" className="footer__link">Wrongful Death</a></li>
              </ul>
            </div>

            <div className="footer__section">
              <h4 className="footer__title">Quick Links</h4>
              <ul className="footer__links">
                <li><a href="#about" className="footer__link">About Us</a></li>
                <li><a href="#results" className="footer__link">Case Results</a></li>
                <li><a href="#faq" className="footer__link">FAQ</a></li>
                <li><a href="#contact" className="footer__link">Contact</a></li>
                <li><a href="#" className="footer__link">Blog</a></li>
              </ul>
            </div>

            <div className="footer__section">
              <h4 className="footer__title">Contact Info</h4>
              <div className="footer__contact-item">
                <span className="footer__contact-icon">📞</span>
                <div className="footer__contact-text">
                  <a href={`tel:${templateData.phoneNumber.replace(/\D/g, '')}`} className="footer__contact-link">
                    {templateData.phoneNumber}
                  </a>
                </div>
              </div>
              <div className="footer__contact-item">
                <span className="footer__contact-icon">📧</span>
                <div className="footer__contact-text">
                  <a href="mailto:info@lawfirm.com" className="footer__contact-link">
                    info@lawfirm.com
                  </a>
                </div>
              </div>
              <div className="footer__contact-item">
                <span className="footer__contact-icon">📍</span>
                <div className="footer__contact-text">
                  123 Main Street, Suite 400<br />
                  {templateData.cityName}, IL 60601
                </div>
              </div>
            </div>
          </div>

          <div className="footer__bottom">
            <p className="footer__copyright">
              © {new Date().getFullYear()} {templateData.firmName}. All rights reserved.
            </p>
            <ul className="footer__legal">
              <li><a href="#" className="footer__legal-link">Privacy Policy</a></li>
              <li><a href="#" className="footer__legal-link">Terms of Service</a></li>
              <li><a href="#" className="footer__legal-link">Disclaimer</a></li>
            </ul>
          </div>

          <div className="footer__disclaimer">
            <p className="footer__disclaimer-text">
              <strong>Disclaimer:</strong> The information on this website is for general information purposes only.
              Nothing on this site should be taken as legal advice for any individual case or situation. This information
              is not intended to create, and receipt or viewing does not constitute, an attorney-client relationship.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
