'use client'

import { useState } from 'react'
import Navigation from '@/app/components/ui/Navigation/Navigation'
import ContactForm from '@/app/components/ui/ContactForm/ContactForm'
import './template-1.css'

export default function CDTemplate1() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null)

  const templateData = {
    cityName: 'Miami',
    firmName: 'Rodriguez Criminal Defense',
    primaryPracticeArea: 'Criminal Defense',
    phoneNumber: '(305) 555-0400',
    attorneyName: 'Carlos Rodriguez',
    yearsOfExperience: '15+',
    casesWon: '1,200+',
    heroHeadline: 'Arrested? Call Now. We Answer 24/7.',
    heroSubheadline: 'Immediate response for DUI, assault, drug charges, and all criminal cases in Miami',
  }

  const practiceAreas = [
    {
      title: 'DUI Defense',
      description: 'Pulled over for DUI? Don\'t talk to police without an attorney. We challenge breathalyzer results and protect your license.',
      icon: '🚨'
    },
    {
      title: 'Drug Charges',
      description: 'From possession to trafficking, we fight drug charges aggressively. Protect your freedom and future.',
      icon: '⚖️'
    },
    {
      title: 'Assault & Battery',
      description: 'Charged with assault? We build strong defenses including self-defense and witness credibility challenges.',
      icon: '🥊'
    },
    {
      title: 'Domestic Violence',
      description: 'These charges carry serious consequences. We protect your rights and work to minimize impact on your life.',
      icon: '🏠'
    },
    {
      title: 'Theft & Burglary',
      description: 'Property crimes can result in jail time and a permanent record. We fight to reduce or dismiss charges.',
      icon: '🔓'
    },
    {
      title: 'Weapons Charges',
      description: 'Florida gun laws are complex. We defend against illegal possession and use of weapon charges.',
      icon: '🔫'
    }
  ]

  const testimonials = [
    {
      name: 'Anonymous Client',
      case: 'DUI - Charges Reduced',
      rating: 5,
      text: 'I called Carlos at 2 AM after my DUI arrest. He answered immediately, met me at the station, and got my charges reduced. His expertise saved my career.'
    },
    {
      name: 'J.M.',
      case: 'Drug Possession - Case Dismissed',
      rating: 5,
      text: 'Facing felony drug charges was terrifying. Carlos found illegal search issues and got my entire case thrown out. Forever grateful.'
    },
    {
      name: 'R.T.',
      case: 'Assault - Not Guilty Verdict',
      rating: 5,
      text: 'The assault charges against me were false. Carlos believed in me from day one and proved it in court. Verdict: Not Guilty.'
    }
  ]

  const processSteps = [
    {
      number: 1,
      title: 'Call Immediately',
      description: 'Whether you\'ve been arrested or are under investigation, call us 24/7. Time is critical in criminal cases.'
    },
    {
      number: 2,
      title: 'Emergency Response',
      description: 'We can meet you at the jail, police station, or courthouse. Immediate legal representation protects your rights.'
    },
    {
      number: 3,
      title: 'Aggressive Defense',
      description: 'We investigate every detail, challenge evidence, negotiate with prosecutors, and fight for the best outcome.'
    },
    {
      number: 4,
      title: 'Protect Your Future',
      description: 'Our goal is dismissal, reduced charges, or acquittal. We minimize the impact on your life and freedom.'
    }
  ]

  const faqItems = [
    {
      question: 'Should I talk to the police if I\'m arrested?',
      answer: 'NO. Politely invoke your right to remain silent and ask for an attorney immediately. Anything you say WILL be used against you in court. Even innocent people can inadvertently say things that hurt their case. Call us before you talk to anyone.'
    },
    {
      question: 'How quickly can you respond to an emergency?',
      answer: 'We answer our phones 24/7/365 - nights, weekends, holidays. If you\'ve been arrested, we can often meet you at the jail or police station within 1-2 hours. For urgent matters during business hours, we can usually see you the same day.'
    },
    {
      question: 'What should I do if I\'m being investigated but not arrested yet?',
      answer: 'Contact us immediately - before speaking to police. If police want to "just ask you some questions," you need an attorney present. We can arrange to be present during any questioning and protect your rights from the start.'
    },
    {
      question: 'How much does criminal defense cost?',
      answer: 'Our fees vary based on the complexity of your case. We offer flexible payment plans because we understand this is a difficult time financially. During your free consultation, we\'ll provide a clear fee structure with no hidden costs.'
    },
    {
      question: 'Can you get my charges dismissed?',
      answer: 'Every case is different. We\'ve successfully gotten many cases dismissed by finding constitutional violations, challenging evidence, or negotiating with prosecutors. We thoroughly investigate every angle to build the strongest possible defense for you.'
    },
    {
      question: 'What if I\'m guilty? Should I just plead guilty?',
      answer: 'Never plead guilty without consulting an attorney. Even if you believe you\'re guilty, there may be defenses you don\'t know about. We can often negotiate reduced charges, alternative sentencing, or programs that avoid jail time and criminal records.'
    }
  ]

  return (
    <>
      {/* Hero Section - Layout 2: Centered Video Background */}
      <div className="hero-layout-2">
        <video
          className="hero-layout-2__video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-urban-city-traffic-at-night-9556-large.mp4" type="video/mp4" />
        </video>

        <div className="hero-layout-2__overlay"></div>

        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10 }}>
          <Navigation
            logoText={templateData.firmName}
            phoneNumber={templateData.phoneNumber}
            ctaText="Call 24/7"
          />
        </div>

        <div className="hero-layout-2__content">
          <h1 className="hero-layout-2__headline">
            {templateData.heroHeadline}
          </h1>
          <p className="hero-layout-2__subheadline">
            {templateData.heroSubheadline}
          </p>

          <div className="hero-layout-2__cta">
            <a
              href={`tel:${templateData.phoneNumber.replace(/\D/g, '')}`}
              className="hero-layout-2__call-btn"
            >
              <span className="hero-layout-2__call-icon">📞</span>
              {templateData.phoneNumber}
            </a>
          </div>

          <div className="hero-layout-2__achievements">
            <div className="hero-layout-2__achievement">
              <div className="hero-layout-2__achievement-value">24/7</div>
              <div className="hero-layout-2__achievement-label">Emergency Response</div>
            </div>
            <div className="hero-layout-2__achievement">
              <div className="hero-layout-2__achievement-value">{templateData.yearsOfExperience}</div>
              <div className="hero-layout-2__achievement-label">Years Experience</div>
            </div>
            <div className="hero-layout-2__achievement">
              <div className="hero-layout-2__achievement-value">{templateData.casesWon}</div>
              <div className="hero-layout-2__achievement-label">Cases Won</div>
            </div>
            <div className="hero-layout-2__achievement">
              <div className="hero-layout-2__achievement-value">Free</div>
              <div className="hero-layout-2__achievement-label">Consultation</div>
            </div>
          </div>
        </div>
      </div>

      {/* Practice Areas Section */}
      <section id="practice-areas" className="practice-areas">
        <div className="container">
          <div className="practice-areas__header">
            <h2 className="practice-areas__title">We Defend All Criminal Charges</h2>
            <p className="practice-areas__subtitle">
              Aggressive representation for Miami criminal cases
            </p>
          </div>

          <div className="practice-areas__grid">
            {practiceAreas.map((area) => (
              <div key={area.title} className="practice-area">
                <div className="practice-area__icon">{area.icon}</div>
                <h3 className="practice-area__title">{area.title}</h3>
                <p className="practice-area__description">{area.description}</p>
                <a href="#contact" className="practice-area__link">
                  Get Help Now <span className="practice-area__arrow">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgent CTA Section */}
      <section className="contact__emergency" style={{ padding: 'var(--spacing-2xl) 0', backgroundColor: 'var(--color-accent)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'white', fontSize: 'var(--font-size-2xl)', marginBottom: 'var(--spacing-md)' }}>
            Just Arrested? Don't Wait - Call Now
          </h2>
          <a href={`tel:${templateData.phoneNumber.replace(/\D/g, '')}`} className="contact__emergency-phone" style={{ display: 'inline-block', marginBottom: 'var(--spacing-sm)' }}>
            {templateData.phoneNumber}
          </a>
          <p className="contact__emergency-text">Every minute counts. Get a lawyer on your side immediately.</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <div className="testimonials__header">
            <h2 className="testimonials__title">Our Clients Walk Free</h2>
            <p className="testimonials__subtitle">
              Real results from real criminal defense cases
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
                    <div className="testimonial__author-case">{testimonial.case}</div>
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
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&h=800&fit=crop"
                alt={templateData.attorneyName}
                className="attorney-bio__image"
              />
              <div className="attorney-bio__credentials">
                <h4 className="attorney-bio__credentials-title">Credentials</h4>
                <ul className="attorney-bio__credentials-list">
                  <li className="attorney-bio__credential">Florida Bar Certified</li>
                  <li className="attorney-bio__credential">Trial Lawyer</li>
                  <li className="attorney-bio__credential">Criminal Law Specialist</li>
                  <li className="attorney-bio__credential">Former Prosecutor</li>
                </ul>
              </div>
            </div>

            <div className="attorney-bio__content">
              <div className="attorney-bio__header">
                <h2 className="attorney-bio__name">{templateData.attorneyName}</h2>
                <p className="attorney-bio__title">
                  Miami Criminal Defense Attorney | Available 24/7
                </p>
              </div>

              <div className="attorney-bio__highlights">
                <div className="attorney-bio__highlight">
                  <div className="attorney-bio__highlight-value">{templateData.yearsOfExperience}</div>
                  <div className="attorney-bio__highlight-label">Years Defending Clients</div>
                </div>
                <div className="attorney-bio__highlight">
                  <div className="attorney-bio__highlight-value">{templateData.casesWon}</div>
                  <div className="attorney-bio__highlight-label">Cases Won</div>
                </div>
                <div className="attorney-bio__highlight">
                  <div className="attorney-bio__highlight-value">24/7</div>
                  <div className="attorney-bio__highlight-label">Available</div>
                </div>
              </div>

              <p className="attorney-bio__text">
                When you're arrested, you need an attorney who answers the phone - day or night. I've built my practice
                on being available when clients need me most: in their darkest hour. With over {templateData.yearsOfExperience}
                of criminal defense experience, I know that time is critical in criminal cases.
              </p>

              <p className="attorney-bio__text">
                As a former prosecutor, I know exactly how the state builds its case against you. I use that insider knowledge
                to dismantle their arguments, challenge evidence, and protect your constitutional rights. Whether you're facing
                DUI charges, drug offenses, or violent crime accusations, I fight aggressively for the best possible outcome.
              </p>

              <div className="attorney-bio__quote">
                "Everyone deserves a vigorous defense. I don't care what you're accused of - I care about protecting your rights
                and your future. When you call me at 3 AM, I answer. That's my commitment to you."
                <br />— {templateData.attorneyName}
              </div>

              <div className="attorney-bio__cta">
                <a href={`tel:${templateData.phoneNumber.replace(/\D/g, '')}`} className="btn btn--call btn--large">
                  📞 Call {templateData.phoneNumber}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process process--timeline">
        <div className="container">
          <div className="process__header">
            <h2 className="process__title">What Happens When You Call</h2>
            <p className="process__subtitle">
              Immediate action to protect your rights and freedom
            </p>
          </div>

          <div className="process__steps">
            {processSteps.map((step) => (
              <div key={step.number} className="process-step">
                <div className="process-step__number">{step.number}</div>
                <div className="process-step__content">
                  <h3 className="process-step__title">{step.title}</h3>
                  <p className="process-step__description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="process__cta">
            <p className="process__cta-text">
              Don't face criminal charges alone. Get experienced legal help now.
            </p>
            <a href="#contact" className="btn btn--primary btn--large">
              Get Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq">
        <div className="container">
          <div className="faq__header">
            <h2 className="faq__title">Critical Questions & Answers</h2>
            <p className="faq__subtitle">
              What you need to know if you're facing criminal charges
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
          <div className="contact__emergency">
            <h3 className="contact__emergency-title">Arrested or Under Investigation?</h3>
            <a href={`tel:${templateData.phoneNumber.replace(/\D/g, '')}`} className="contact__emergency-phone">
              {templateData.phoneNumber}
            </a>
            <p className="contact__emergency-text">24/7 Emergency Response · Free Consultation · Payment Plans Available</p>
          </div>

          <div className="contact__header">
            <h2 className="contact__title">Contact Us Immediately</h2>
            <p className="contact__subtitle">
              We answer 24/7 - nights, weekends, holidays
            </p>
          </div>

          <div className="contact__container">
            <div className="contact__info">
              <div className="contact__info-item">
                <span className="contact__info-icon">📞</span>
                <div className="contact__info-content">
                  <div className="contact__info-label">24/7 Emergency Line</div>
                  <a href={`tel:${templateData.phoneNumber.replace(/\D/g, '')}`} className="contact__info-value">
                    {templateData.phoneNumber}
                  </a>
                </div>
              </div>

              <div className="contact__info-item">
                <span className="contact__info-icon">📧</span>
                <div className="contact__info-content">
                  <div className="contact__info-label">Email</div>
                  <a href="mailto:defense@rodriguezlaw.com" className="contact__info-value">
                    defense@rodriguezlaw.com
                  </a>
                </div>
              </div>

              <div className="contact__info-item">
                <span className="contact__info-icon">📍</span>
                <div className="contact__info-content">
                  <div className="contact__info-label">Miami Office</div>
                  <div className="contact__info-value">
                    801 Brickell Avenue, Suite 900<br />
                    {templateData.cityName}, FL 33131
                  </div>
                </div>
              </div>

              <div className="contact__info-item">
                <span className="contact__info-icon">⚠️</span>
                <div className="contact__info-content">
                  <div className="contact__info-label">We Handle</div>
                  <div className="contact__info-hours">
                    • DUI & Traffic Offenses<br />
                    • Drug Crimes<br />
                    • Assault & Violent Crimes<br />
                    • Theft & Property Crimes<br />
                    <strong>All Criminal Charges</strong>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <ContactForm
                variant="dark"
                title="Get Help Now"
                subtitle="Free consultation - we respond immediately"
                ctaText="Request Emergency Consultation"
              />
            </div>
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
                24/7 criminal defense representation in Miami and throughout South Florida. When you need us most, we're here.
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
                <li><a href="#" className="footer__link">DUI Defense</a></li>
                <li><a href="#" className="footer__link">Drug Charges</a></li>
                <li><a href="#" className="footer__link">Assault & Battery</a></li>
                <li><a href="#" className="footer__link">Domestic Violence</a></li>
                <li><a href="#" className="footer__link">Theft Crimes</a></li>
              </ul>
            </div>

            <div className="footer__section">
              <h4 className="footer__title">Resources</h4>
              <ul className="footer__links">
                <li><a href="#about" className="footer__link">About</a></li>
                <li><a href="#faq" className="footer__link">FAQ</a></li>
                <li><a href="#contact" className="footer__link">Contact</a></li>
                <li><a href="#" className="footer__link">Know Your Rights</a></li>
              </ul>
            </div>

            <div className="footer__section">
              <h4 className="footer__title">Emergency Contact</h4>
              <div className="footer__contact-item">
                <span className="footer__contact-icon">📞</span>
                <div className="footer__contact-text">
                  <a href={`tel:${templateData.phoneNumber.replace(/\D/g, '')}`} className="footer__contact-link">
                    {templateData.phoneNumber}
                  </a>
                  <br />24/7 - We Always Answer
                </div>
              </div>
              <div className="footer__contact-item">
                <span className="footer__contact-icon">📍</span>
                <div className="footer__contact-text">
                  801 Brickell Ave, Suite 900<br />
                  {templateData.cityName}, FL 33131
                </div>
              </div>
            </div>
          </div>

          <div className="footer__bottom">
            <p className="footer__copyright">
              © {new Date().getFullYear()} {templateData.firmName}. All rights reserved.
            </p>
            <ul className="footer__legal">
              <li><a href="#" className="footer__legal-link">Privacy</a></li>
              <li><a href="#" className="footer__legal-link">Terms</a></li>
              <li><a href="#" className="footer__legal-link">Disclaimer</a></li>
            </ul>
          </div>

          <div className="footer__disclaimer">
            <p className="footer__disclaimer-text">
              <strong>Disclaimer:</strong> The information on this website is for general information only and does not constitute legal advice.
              No attorney-client relationship is formed by using this website. Contact us for specific legal advice about your case.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
