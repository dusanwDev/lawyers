'use client'

import { useState } from 'react'
import Navigation from '@/app/components/ui/Navigation/Navigation'
import ContactForm from '@/app/components/ui/ContactForm/ContactForm'
import './template-3.css'

export default function CDTemplate3() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null)

  const templateData = {
    cityName: 'New York',
    firmName: 'Sterling & Associates',
    phoneNumber: '(212) 555-0600',
    yearsOfExperience: '40+',
    attorneysCount: '12',
    casesWon: '2,500+',
    heroHeadline: 'New York's Premier High-Stakes Criminal Defense Firm',
    heroSubheadline: 'Elite legal representation for complex federal and state criminal cases. When your freedom, reputation, and future are on the line.',
  }

  const bulletPoints = [
    '12 experienced trial attorneys with 40+ years combined experience',
    'Successfully defended Fortune 500 executives and high-profile clients',
    'Proven track record in federal court and appellate litigation'
  ]

  const practiceAreas = [
    { title: 'Federal Criminal Defense', description: 'Complex federal prosecutions demand exceptional legal expertise. Our team has defended clients in every federal district.', icon: '🏛️' },
    { title: 'White Collar Crimes', description: 'Securities fraud, embezzlement, tax evasion, RICO. We protect executives and professionals facing financial crime charges.', icon: '💼' },
    { title: 'Appellate Practice', description: 'Post-conviction relief and appeals in state and federal courts. Our appellate team has overturned countless convictions.', icon: '📜' },
    { title: 'High-Profile Cases', description: 'Media scrutiny requires strategic reputation management. We handle sensitive cases with discretion and skill.', icon: '📰' }
  ]

  const testimonials = [
    { name: 'Fortune 500 Executive', case: 'Securities Fraud - Acquitted', rating: 5, text: 'Facing federal securities fraud charges threatened everything I built. Sterling & Associates assembled a team of experts, challenged the prosecution's case, and won my acquittal. Their expertise is unmatched.' },
    { name: 'Medical Professional', case: 'Healthcare Fraud - Dismissed', rating: 5, text: 'The government alleged a $10M fraud scheme. The legal team at Sterling thoroughly investigated, found fatal flaws in the indictment, and got all charges dismissed before trial.' },
    { name: 'Business Owner', case: 'Tax Evasion - Probation Only', rating: 5, text: 'I was facing 7 years in federal prison for tax charges. Sterling negotiated a resolution that resulted in probation with no jail time. Their skill saved my life and business.' }
  ]

  const awards = ['Best Law Firm - Criminal Defense', 'Super Lawyers - Top 100', 'Chambers USA Ranked', 'AV Preeminent Rating']

  const faqItems = [
    { question: 'What makes your firm different from other criminal defense attorneys?', answer: 'We are a boutique firm specializing exclusively in high-stakes criminal defense. Our 12 attorneys have deep expertise in federal court, white collar crime, and complex litigation. We have the resources to take on the federal government, conduct independent investigations, and hire top expert witnesses. Many of our attorneys are former federal prosecutors and have argued before appellate courts nationwide.' },
    { question: 'Do you handle cases outside of New York?', answer: 'Yes. While based in New York, our attorneys are admitted to practice in multiple federal districts nationwide and have handled cases across the country. We regularly associate with local counsel when necessary and travel to represent clients wherever they face charges.' },
    { question: 'How do you approach white collar criminal cases?', answer: 'White collar cases require early intervention. We often begin representing clients during the investigation phase—before charges are filed. Our approach combines aggressive legal defense with forensic accounting, expert witnesses, and strategic negotiation. Many white collar cases are won before trial through motion practice and negotiation.' },
    { question: 'What are your legal fees?', answer: 'Our fees reflect the complexity and resources required for high-stakes criminal defense. Federal cases typically require retainers starting at $100,000. Complex white collar matters may be higher. We provide detailed fee agreements, transparent billing, and can structure payment arrangements for qualified clients.' },
    { question: 'Can you help with appeals?', answer: 'Yes. Our appellate practice is one of the strongest in New York. We handle direct appeals, post-conviction motions, habeas corpus petitions, and clemency applications. Our appellate team has successfully overturned convictions in state and federal courts, including several landmark decisions.' }
  ]

  return (
    <>
      <div className="hero-layout-3">
        <div className="hero-layout-3__banner">
          <div className="container">
            <div className="hero-layout-3__banner-content">
              <div className="hero-layout-3__banner-left">
                <span className="hero-layout-3__banner-item">🏆 Premier Defense Firm</span>
                <span className="hero-layout-3__banner-item">🏛️ Federal Court Experience</span>
              </div>
              <div className="hero-layout-3__banner-right">
                <span>Confidential Consultation:</span>
                <a href={`tel:${templateData.phoneNumber.replace(/\D/g, '')}`} className="hero-layout-3__phone">{templateData.phoneNumber}</a>
              </div>
            </div>
          </div>
        </div>

        <Navigation logoText={templateData.firmName} phoneNumber={templateData.phoneNumber} ctaText="Confidential Consultation" />

        <div className="container">
          <div className="hero-layout-3__content">
            <div className="hero-layout-3__text">
              <h1 className="hero-layout-3__headline">{templateData.heroHeadline}</h1>
              <p className="hero-layout-3__subheadline">{templateData.heroSubheadline}</p>
              <ul className="hero-layout-3__bullets">
                {bulletPoints.map((bullet, i) => <li key={i} className="hero-layout-3__bullet">{bullet}</li>)}
              </ul>
              <div className="hero-layout-3__cta-group">
                <a href={`tel:${templateData.phoneNumber.replace(/\D/g, '')}`} className="btn btn--primary btn--large">Schedule Consultation</a>
                <p className="hero-layout-3__call-option">Or call <a href={`tel:${templateData.phoneNumber.replace(/\D/g, '')}`} className="hero-layout-3__call-link">{templateData.phoneNumber}</a> for immediate assistance</p>
              </div>
            </div>
            <div className="hero-layout-3__attorney">
              <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=800&fit=crop" alt="Sterling & Associates Team" className="hero-layout-3__attorney-image" />
              <p className="hero-layout-3__attorney-caption">
                <span className="hero-layout-3__attorney-name">Sterling & Associates</span><br />New York's Premier Criminal Defense Team
              </p>
            </div>
          </div>
        </div>

        <div className="hero-layout-3__trust-strip">
          <div className="container">
            <div className="hero-layout-3__trust-items">
              {awards.map((award, i) => (
                <div key={i} className="hero-layout-3__trust-item">
                  <span className="hero-layout-3__trust-icon">🏆</span>{award}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section id="practice-areas" className="practice-areas">
        <div className="container">
          <div className="practice-areas__header">
            <h2 className="practice-areas__title">Elite Criminal Defense Practice</h2>
            <p className="practice-areas__subtitle">Specialized expertise for complex, high-stakes criminal matters</p>
          </div>
          <div className="practice-areas__grid">
            {practiceAreas.map((area) => (
              <div key={area.title} className="practice-area">
                <div className="practice-area__icon">{area.icon}</div>
                <h3 className="practice-area__title">{area.title}</h3>
                <p className="practice-area__description">{area.description}</p>
                <a href="#contact" className="practice-area__link">Learn More <span className="practice-area__arrow">→</span></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <div className="testimonials__header">
            <h2 className="testimonials__title">Trusted by Leaders</h2>
            <p className="testimonials__subtitle">Confidential representation for high-profile clients</p>
          </div>
          <div className="testimonials__grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial">
                <div className="testimonial__rating">{[...Array(5)].map((_, j) => <span key={j} className="testimonial__star">★</span>)}</div>
                <p className="testimonial__text">{t.text}</p>
                <div className="testimonial__author">
                  <div className="testimonial__avatar">{t.name.charAt(0)}</div>
                  <div className="testimonial__author-info">
                    <div className="testimonial__author-name">{t.name}</div>
                    <div className="testimonial__author-case">{t.case}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="attorney-bio attorney-bio--team">
        <div className="container">
          <div className="attorney-bio__container">
            <div className="attorney-bio__header" style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
              <h2 className="attorney-bio__name">Our Legal Team</h2>
              <p className="attorney-bio__title">{templateData.attorneysCount} experienced criminal defense attorneys</p>
            </div>
            <div className="attorney-bio__highlights" style={{ justifyContent: 'center', marginBottom: 'var(--spacing-2xl)' }}>
              <div className="attorney-bio__highlight"><div className="attorney-bio__highlight-value">{templateData.yearsOfExperience}</div><div className="attorney-bio__highlight-label">Combined Experience</div></div>
              <div className="attorney-bio__highlight"><div className="attorney-bio__highlight-value">{templateData.casesWon}</div><div className="attorney-bio__highlight-label">Cases Handled</div></div>
              <div className="attorney-bio__highlight"><div className="attorney-bio__highlight-value">{templateData.attorneysCount}</div><div className="attorney-bio__highlight-label">Trial Attorneys</div></div>
              <div className="attorney-bio__highlight"><div className="attorney-bio__highlight-value">100%</div><div className="attorney-bio__highlight-label">Dedication</div></div>
            </div>
            <p className="attorney-bio__text" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto var(--spacing-lg)' }}>
              Sterling & Associates represents clients facing the most serious criminal allegations. Our attorneys include former federal prosecutors, experienced trial lawyers, and appellate specialists. We have successfully defended Fortune 500 executives, medical professionals, elected officials, and individuals in matters ranging from securities fraud to murder.
            </p>
            <p className="attorney-bio__text" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto var(--spacing-2xl)' }}>
              What sets us apart is our commitment to excellence and our resources. We maintain relationships with top forensic experts, investigators, and consultants. When you hire Sterling & Associates, you get an entire team dedicated to your defense—not just one attorney.
            </p>
          </div>
          <div className="attorney-bio__cta" style={{ textAlign: 'center', marginTop: 'var(--spacing-2xl)' }}>
            <a href="#contact" className="btn btn--primary btn--large">Schedule Confidential Consultation</a>
          </div>
        </div>
      </section>

      <section id="faq" className="faq">
        <div className="container">
          <div className="faq__header">
            <h2 className="faq__title">Common Questions</h2>
            <p className="faq__subtitle">What to know about high-stakes criminal defense</p>
          </div>
          <div className="faq__list">
            {faqItems.map((item, index) => (
              <div key={index} className={`faq-item ${activeFaq === index ? 'faq-item--active' : ''}`}>
                <button className="faq-item__question" onClick={() => setActiveFaq(activeFaq === index ? null : index)}>
                  {item.question}<span className="faq-item__icon">▼</span>
                </button>
                <div className="faq-item__answer">
                  <div className="faq-item__answer-text"><p>{item.answer}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <div className="contact__header">
            <h2 className="contact__title">Confidential Consultation</h2>
            <p className="contact__subtitle">Discreet, strategic defense for serious criminal matters</p>
          </div>
          <div className="contact__container">
            <div className="contact__info">
              <div className="contact__info-item">
                <span className="contact__info-icon">📞</span>
                <div className="contact__info-content">
                  <div className="contact__info-label">Direct Line</div>
                  <a href={`tel:${templateData.phoneNumber.replace(/\D/g, '')}`} className="contact__info-value">{templateData.phoneNumber}</a>
                </div>
              </div>
              <div className="contact__info-item">
                <span className="contact__info-icon">📧</span>
                <div className="contact__info-content">
                  <div className="contact__info-label">Email (Secure)</div>
                  <a href="mailto:contact@sterlingdefense.com" className="contact__info-value">contact@sterlingdefense.com</a>
                </div>
              </div>
              <div className="contact__info-item">
                <span className="contact__info-icon">📍</span>
                <div className="contact__info-content">
                  <div className="contact__info-label">Manhattan Office</div>
                  <div className="contact__info-value">767 Fifth Avenue, Suite 4700<br />{templateData.cityName}, NY 10153</div>
                </div>
              </div>
              <div className="contact__info-item">
                <span className="contact__info-icon">⚖️</span>
                <div className="contact__info-content">
                  <div className="contact__info-label">Practice Focus</div>
                  <div className="contact__info-hours">
                    • Federal Criminal Defense<br />
                    • White Collar Crimes<br />
                    • Appellate Practice<br />
                    • High-Profile Cases<br />
                    <strong>Nationwide Representation</strong>
                  </div>
                </div>
              </div>
            </div>
            <div><ContactForm variant="light" title="Request Consultation" subtitle="All communications are confidential" ctaText="Contact Us Securely" /></div>
          </div>
          <div className="contact__emergency">
            <h3 className="contact__emergency-title">Facing Federal Charges?</h3>
            <a href={`tel:${templateData.phoneNumber.replace(/\D/g, '')}`} className="contact__emergency-phone">{templateData.phoneNumber}</a>
            <p className="contact__emergency-text">Elite Defense Team · Confidential · Nationwide Practice</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer__main">
            <div className="footer__section">
              <div className="footer__logo">{templateData.firmName}</div>
              <p className="footer__description">Premier criminal defense firm serving clients nationwide in complex federal and state criminal matters.</p>
              <div className="footer__social">
                <a href="#" className="footer__social-link" aria-label="LinkedIn">in</a>
                <a href="#" className="footer__social-link" aria-label="Twitter">𝕏</a>
              </div>
            </div>
            <div className="footer__section">
              <h4 className="footer__title">Practice Areas</h4>
              <ul className="footer__links">
                <li><a href="#" className="footer__link">Federal Criminal Defense</a></li>
                <li><a href="#" className="footer__link">White Collar Crimes</a></li>
                <li><a href="#" className="footer__link">Appellate Practice</a></li>
                <li><a href="#" className="footer__link">High-Profile Cases</a></li>
              </ul>
            </div>
            <div className="footer__section">
              <h4 className="footer__title">Contact</h4>
              <div className="footer__contact-item">
                <span className="footer__contact-icon">📞</span>
                <div className="footer__contact-text">
                  <a href={`tel:${templateData.phoneNumber.replace(/\D/g, '')}`} className="footer__contact-link">{templateData.phoneNumber}</a>
                </div>
              </div>
              <div className="footer__contact-item">
                <span className="footer__contact-icon">📍</span>
                <div className="footer__contact-text">767 Fifth Avenue, Suite 4700<br />{templateData.cityName}, NY 10153</div>
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <p className="footer__copyright">© {new Date().getFullYear()} {templateData.firmName}. All rights reserved.</p>
            <ul className="footer__legal">
              <li><a href="#" className="footer__legal-link">Privacy</a></li>
              <li><a href="#" className="footer__legal-link">Terms</a></li>
              <li><a href="#" className="footer__legal-link">Disclaimer</a></li>
            </ul>
          </div>
          <div className="footer__disclaimer">
            <p className="footer__disclaimer-text"><strong>Attorney Advertising.</strong> Prior results do not guarantee a similar outcome. This website is for informational purposes and does not constitute legal advice.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
