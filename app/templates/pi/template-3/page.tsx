'use client'

import { useState } from 'react'
import Navigation from '@/app/components/ui/Navigation/Navigation'
import ContactForm from '@/app/components/ui/ContactForm/ContactForm'
import './template-3.css'

export default function PITemplate3() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null)

  // Placeholder data - Replace with real data
  const templateData = {
    cityName: 'Phoenix',
    firmName: 'Davis Personal Injury Law',
    primaryPracticeArea: 'Personal Injury',
    phoneNumber: '(602) 555-0300',
    attorneyName: 'John Davis',
    attorneyImage: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&h=800&fit=crop',
    yearsOfExperience: '20+',
    resultsHighlight: '$25M+',
    heroHeadline: 'Phoenix Personal Injury Lawyer Your Neighbors Trust',
    heroSubheadline: 'Born and raised in Phoenix. Fighting for Arizona families for over 20 years.',
    primaryCtaText: 'Call Your Local Attorney Now',
  }

  const bulletPoints = [
    'Over 20 years serving Phoenix and surrounding areas',
    'Personal attention from your attorney, not a paralegal',
    'We know the local courts, judges, and insurance adjusters'
  ]

  const practiceAreas = [
    {
      title: 'Car Accidents',
      description: 'Phoenix traffic accidents require local expertise. We know the dangerous intersections and help you get fair compensation.',
      icon: '🚗'
    },
    {
      title: 'Slip & Fall',
      description: 'Property owners must maintain safe premises. We hold negligent Phoenix businesses and property owners accountable.',
      icon: '⚠️'
    },
    {
      title: 'Dog Bites',
      description: 'Arizona dog bite laws protect victims. We help families recover medical costs and compensation for injuries.',
      icon: '🐕'
    },
    {
      title: 'Bicycle Accidents',
      description: 'Phoenix cyclists deserve protection. We fight for riders injured by careless drivers.',
      icon: '🚴'
    }
  ]

  const testimonials = [
    {
      name: 'Susan Mitchell',
      case: 'Car Accident',
      rating: 5,
      text: 'John was recommended by my neighbor and I\'m so glad I called. He personally handled my case and got me a settlement that covered all my medical bills and lost wages. A true Phoenix local who cares.'
    },
    {
      name: 'Carlos Hernandez',
      case: 'Slip & Fall',
      rating: 5,
      text: 'After I was injured at a grocery store, John fought hard for me. His knowledge of Phoenix courts and local insurance companies made all the difference. Highly recommend!'
    },
    {
      name: 'Emily Rogers',
      case: 'Dog Bite',
      rating: 5,
      text: 'My daughter was bitten by a neighbor\'s dog and we didn\'t know what to do. John was compassionate, explained everything clearly, and got us a fair settlement. Thank you!'
    }
  ]

  const caseResults = [
    { amount: '$850K', type: 'Car Accident', description: 'Intersection collision on Camelback Road' },
    { amount: '$425K', type: 'Slip & Fall', description: 'Premises liability at Phoenix shopping center' },
    { amount: '$275K', type: 'Dog Bite', description: 'Severe injuries requiring surgery' },
    { amount: '$180K', type: 'Bicycle Accident', description: 'Cyclist hit by distracted driver' }
  ]

  const processSteps = [
    {
      icon: '📞',
      title: 'Call Me Directly',
      description: 'When you call, you talk to me - not a receptionist. I personally review every case.'
    },
    {
      icon: '🤝',
      title: 'Free Consultation',
      description: 'We meet at my office or I can come to you. No pressure, just honest advice about your case.'
    },
    {
      icon: '⚖️',
      title: 'I Handle Everything',
      description: 'From dealing with insurance companies to filing paperwork, I take care of it all while you recover.'
    },
    {
      icon: '💰',
      title: 'Get Compensated',
      description: 'You pay nothing unless we win. My fee comes from the settlement, never from your pocket upfront.'
    }
  ]

  const awards = [
    'AVVO 10.0 Rating',
    'Arizona Super Lawyers',
    'Phoenix Rising Star',
    'Million Dollar Advocates Forum'
  ]

  const faqItems = [
    {
      question: 'Do I really need a Phoenix attorney for my injury case?',
      answer: 'Absolutely. Local knowledge matters. I know the Phoenix courts, the judges, and how local insurance companies operate. This insider knowledge helps me negotiate better settlements and, if necessary, win at trial. Out-of-town attorneys don\'t have these relationships.'
    },
    {
      question: 'How much does it cost to hire you?',
      answer: 'Nothing upfront and nothing unless we win. I work on contingency, which means my fee comes from your settlement. If we don\'t win, you don\'t pay me anything. This allows everyone to afford quality legal representation.'
    },
    {
      question: 'Will I actually work with you or with a paralegal?',
      answer: 'You work directly with me. While I have staff to help with paperwork, I personally handle all client communications, negotiations, and court appearances. When you call, you reach me. This personal attention is what sets small local firms apart from large operations.'
    },
    {
      question: 'How long will my case take?',
      answer: 'Most Phoenix personal injury cases settle within 3-9 months. However, every case is unique. I never rush to settle for less than you deserve. Some cases take longer if insurance companies won\'t offer fair compensation, but I\'ll keep you informed every step of the way.'
    },
    {
      question: 'What if the accident was partly my fault?',
      answer: 'Arizona uses comparative negligence law, which means you can still recover compensation even if you were partially at fault. Your settlement is reduced by your percentage of fault. For example, if you were 20% at fault, you can still recover 80% of damages.'
    }
  ]

  return (
    <>
      {/* Hero Section - Layout 3: Text Left + Attorney Right + Top Banner */}
      <div className="hero-layout-3">
        {/* Top Banner */}
        <div className="hero-layout-3__banner">
          <div className="container">
            <div className="hero-layout-3__banner-content">
              <div className="hero-layout-3__banner-left">
                <span className="hero-layout-3__banner-item">
                  📍 Serving Phoenix Since 2004
                </span>
                <span className="hero-layout-3__banner-item">
                  💼 Free Consultation
                </span>
              </div>
              <div className="hero-layout-3__banner-right">
                <span>Call Your Local Attorney:</span>
                <a href={`tel:${templateData.phoneNumber.replace(/\D/g, '')}`} className="hero-layout-3__phone">
                  {templateData.phoneNumber}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <Navigation
          logoText={templateData.firmName}
          phoneNumber={templateData.phoneNumber}
          ctaText="Free Consultation"
        />

        {/* Main Hero Content */}
        <div className="container">
          <div className="hero-layout-3__content">
            {/* Left Column - Text + Bullets */}
            <div className="hero-layout-3__text">
              <h1 className="hero-layout-3__headline">{templateData.heroHeadline}</h1>
              <p className="hero-layout-3__subheadline">{templateData.heroSubheadline}</p>

              <ul className="hero-layout-3__bullets">
                {bulletPoints.map((bullet, index) => (
                  <li key={index} className="hero-layout-3__bullet">
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="hero-layout-3__cta-group">
                <a
                  href={`tel:${templateData.phoneNumber.replace(/\D/g, '')}`}
                  className="btn btn--primary btn--large"
                >
                  {templateData.primaryCtaText}
                </a>
                <p className="hero-layout-3__call-option">
                  Or call <a href={`tel:${templateData.phoneNumber.replace(/\D/g, '')}`} className="hero-layout-3__call-link">{templateData.phoneNumber}</a> 24/7
                </p>
              </div>
            </div>

            {/* Right Column - Attorney Image */}
            <div className="hero-layout-3__attorney">
              <img
                src={templateData.attorneyImage}
                alt={templateData.attorneyName}
                className="hero-layout-3__attorney-image"
              />
              <p className="hero-layout-3__attorney-caption">
                <span className="hero-layout-3__attorney-name">{templateData.attorneyName}</span>
                <br />Your Local Phoenix Personal Injury Attorney
              </p>
            </div>
          </div>
        </div>

        {/* Trust Strip */}
        <div className="hero-layout-3__trust-strip">
          <div className="container">
            <div className="hero-layout-3__trust-items">
              {awards.map((award, index) => (
                <div key={index} className="hero-layout-3__trust-item">
                  <span className="hero-layout-3__trust-icon">🏆</span>
                  {award}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Practice Areas Section */}
      <section id="practice-areas" className="practice-areas">
        <div className="container">
          <div className="practice-areas__header">
            <h2 className="practice-areas__title">How I Help Phoenix Injury Victims</h2>
            <p className="practice-areas__subtitle">
              Local expertise for common Phoenix personal injury cases
            </p>
          </div>

          <div className="practice-areas__grid">
            {practiceAreas.map((area) => (
              <div key={area.title} className="practice-area">
                <div className="practice-area__icon">{area.icon}</div>
                <h3 className="practice-area__title">{area.title}</h3>
                <p className="practice-area__description">{area.description}</p>
                <a href="#contact" className="practice-area__link">
                  Discuss Your Case <span className="practice-area__arrow">→</span>
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
            <h2 className="testimonials__title">What Phoenix Clients Say</h2>
            <p className="testimonials__subtitle">
              Real reviews from real Phoenix residents I've helped
            </p>
          </div>

          <div className="testimonials__grid">
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
                    <div className="testimonial__author-case">{testimonial.case} - Phoenix, AZ</div>
                  </div>
                </div>
              </div>
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
              <div className="attorney-bio__credentials">
                <h4 className="attorney-bio__credentials-title">Credentials</h4>
                <ul className="attorney-bio__credentials-list">
                  <li className="attorney-bio__credential">Licensed in Arizona</li>
                  <li className="attorney-bio__credential">Arizona State University</li>
                  <li className="attorney-bio__credential">Arizona Bar Association</li>
                  <li className="attorney-bio__credential">Maricopa County Bar</li>
                </ul>
              </div>
            </div>

            <div className="attorney-bio__content">
              <div className="attorney-bio__header">
                <h2 className="attorney-bio__name">Meet {templateData.attorneyName}</h2>
                <p className="attorney-bio__title">
                  Your Local Phoenix Personal Injury Attorney
                </p>
              </div>

              <div className="attorney-bio__highlights">
                <div className="attorney-bio__highlight">
                  <div className="attorney-bio__highlight-value">{templateData.yearsOfExperience}</div>
                  <div className="attorney-bio__highlight-label">Years in Phoenix</div>
                </div>
                <div className="attorney-bio__highlight">
                  <div className="attorney-bio__highlight-value">{templateData.resultsHighlight}</div>
                  <div className="attorney-bio__highlight-label">Recovered Locally</div>
                </div>
                <div className="attorney-bio__highlight">
                  <div className="attorney-bio__highlight-value">500+</div>
                  <div className="attorney-bio__highlight-label">Phoenix Cases</div>
                </div>
              </div>

              <p className="attorney-bio__text">
                I was born and raised right here in Phoenix, Arizona. After graduating from Arizona State University
                and law school, I returned home to serve my community. For over {templateData.yearsOfExperience} years,
                I've been helping Phoenix families get fair compensation after accidents and injuries.
              </p>

              <p className="attorney-bio__text">
                Unlike large firms that shuffle clients between paralegals and junior attorneys, I personally handle
                every case. When you call my office, you talk to me. When we go to court, I'm there with you. This
                personal approach has helped me recover over {templateData.resultsHighlight} for Phoenix injury victims.
              </p>

              <div className="attorney-bio__quote">
                "I believe personal injury law should be personal. You deserve an attorney who knows you, knows Phoenix,
                and fights for you like you're family - because in this community, we are all neighbors."
                <br />— {templateData.attorneyName}
              </div>

              <div className="attorney-bio__cta">
                <a href="#contact" className="btn btn--primary btn--large">
                  Call Me Today for Free Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Results Section */}
      <section id="results" className="case-results">
        <div className="container">
          <div className="case-results__header">
            <h2 className="case-results__title">Recent Phoenix Results</h2>
            <p className="case-results__subtitle">
              Real cases I've handled for Phoenix residents
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
              *Every case is different. Past results do not guarantee future outcomes. Actual compensation depends on your specific injuries and circumstances.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <div className="container">
          <div className="process__header">
            <h2 className="process__title">How I Work With You</h2>
            <p className="process__subtitle">
              Simple, personal, and focused on your recovery
            </p>
          </div>

          <div className="process__steps">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="process-step__icon">{step.icon}</div>
                <h3 className="process-step__title">{step.title}</h3>
                <p className="process-step__description">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="process__cta">
            <p className="process__cta-text">
              Ready to discuss your case? I'm here to help.
            </p>
            <a href={`tel:${templateData.phoneNumber.replace(/\D/g, '')}`} className="btn btn--call btn--large">
              📞 {templateData.phoneNumber}
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq">
        <div className="container">
          <div className="faq__header">
            <h2 className="faq__title">Common Questions</h2>
            <p className="faq__subtitle">
              Answers about personal injury cases in Phoenix
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
            <h2 className="contact__title">Contact Your Phoenix Attorney</h2>
            <p className="contact__subtitle">
              Call me directly or fill out the form below
            </p>
          </div>

          <div className="contact__container">
            <div className="contact__info">
              <div className="contact__info-item">
                <span className="contact__info-icon">📞</span>
                <div className="contact__info-content">
                  <div className="contact__info-label">Call Me Directly</div>
                  <a href={`tel:${templateData.phoneNumber.replace(/\D/g, '')}`} className="contact__info-value">
                    {templateData.phoneNumber}
                  </a>
                </div>
              </div>

              <div className="contact__info-item">
                <span className="contact__info-icon">📧</span>
                <div className="contact__info-content">
                  <div className="contact__info-label">Email</div>
                  <a href="mailto:john@davisinjurylaw.com" className="contact__info-value">
                    john@davisinjurylaw.com
                  </a>
                </div>
              </div>

              <div className="contact__info-item">
                <span className="contact__info-icon">📍</span>
                <div className="contact__info-content">
                  <div className="contact__info-label">Phoenix Office</div>
                  <div className="contact__info-value">
                    2425 E Camelback Road, Suite 150<br />
                    {templateData.cityName}, AZ 85016
                  </div>
                </div>
              </div>

              <div className="contact__info-item">
                <span className="contact__info-icon">🕐</span>
                <div className="contact__info-content">
                  <div className="contact__info-label">Office Hours</div>
                  <div className="contact__info-hours">
                    Monday - Friday: 8:00 AM - 6:00 PM<br />
                    Saturday: By Appointment<br />
                    Sunday: Closed<br />
                    <strong>Phone Available 24/7</strong>
                  </div>
                </div>
              </div>

              <div className="contact__map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.1234567890!2d-112.0740!3d33.5095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDMwJzM0LjIiTiAxMTLCsDA0JzI2LjQiVw!5e0!3m2!1sen!2sus!4v1234567890"
                  width="600"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                />
              </div>
            </div>

            <div>
              <ContactForm
                variant="light"
                title="Send Me a Message"
                subtitle="I personally read and respond to every message"
                ctaText="Send Message"
              />
            </div>
          </div>

          <div className="contact__emergency">
            <h3 className="contact__emergency-title">Injured? Call Now</h3>
            <a href={`tel:${templateData.phoneNumber.replace(/\D/g, '')}`} className="contact__emergency-phone">
              {templateData.phoneNumber}
            </a>
            <p className="contact__emergency-text">Available 24/7 • No Fees Unless We Win</p>
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
                Serving Phoenix and the greater Maricopa County area with personal injury legal services
                since 2004. Your neighbor, your advocate.
              </p>
              <div className="footer__social">
                <a href="#" className="footer__social-link" aria-label="Facebook">f</a>
                <a href="#" className="footer__social-link" aria-label="LinkedIn">in</a>
                <a href="#" className="footer__social-link" aria-label="Google">G</a>
              </div>
            </div>

            <div className="footer__section">
              <h4 className="footer__title">Practice Areas</h4>
              <ul className="footer__links">
                <li><a href="#" className="footer__link">Car Accidents</a></li>
                <li><a href="#" className="footer__link">Slip & Fall</a></li>
                <li><a href="#" className="footer__link">Dog Bites</a></li>
                <li><a href="#" className="footer__link">Bicycle Accidents</a></li>
              </ul>
            </div>

            <div className="footer__section">
              <h4 className="footer__title">Resources</h4>
              <ul className="footer__links">
                <li><a href="#about" className="footer__link">About John</a></li>
                <li><a href="#results" className="footer__link">Case Results</a></li>
                <li><a href="#faq" className="footer__link">FAQ</a></li>
                <li><a href="#contact" className="footer__link">Contact</a></li>
              </ul>
            </div>

            <div className="footer__section">
              <h4 className="footer__title">Contact</h4>
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
                  <a href="mailto:john@davisinjurylaw.com" className="footer__contact-link">
                    john@davisinjurylaw.com
                  </a>
                </div>
              </div>
              <div className="footer__contact-item">
                <span className="footer__contact-icon">📍</span>
                <div className="footer__contact-text">
                  2425 E Camelback Rd, Suite 150<br />
                  {templateData.cityName}, AZ 85016
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
              <li><a href="#" className="footer__legal-link">Terms</a></li>
              <li><a href="#" className="footer__legal-link">Disclaimer</a></li>
            </ul>
          </div>

          <div className="footer__disclaimer">
            <p className="footer__disclaimer-text">
              <strong>Disclaimer:</strong> The information on this website is for general information purposes only.
              Nothing on this site should be taken as legal advice. This information is not intended to create, and
              receipt or viewing does not constitute, an attorney-client relationship.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
