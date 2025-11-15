'use client'

import { useState } from 'react'
import Navigation from '@/app/components/ui/Navigation/Navigation'
import ContactForm from '@/app/components/ui/ContactForm/ContactForm'
import './template-2.css'

export default function PITemplate2() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null)

  // Placeholder data - Replace with real data
  const templateData = {
    cityName: 'Los Angeles',
    firmName: 'Miller & Associates Law Group',
    primaryPracticeArea: 'Personal Injury',
    phoneNumber: '(213) 555-0200',
    yearsOfExperience: '30+',
    resultsHighlight: '$250M',
    attorneysCount: '15',
    heroHeadline: 'Los Angeles Personal Injury Attorneys with Proven Million-Dollar Results',
    heroSubheadline: 'Representing victims of catastrophic injuries, truck accidents, and wrongful death across California',
    primaryCtaText: 'Call Now for Free Consultation',
  }

  const practiceAreas = [
    {
      title: 'Truck Accidents',
      description: 'Catastrophic injuries from commercial vehicle collisions require experienced legal representation. We hold trucking companies accountable.',
      icon: '🚛'
    },
    {
      title: 'Catastrophic Injuries',
      description: 'Life-changing injuries deserve maximum compensation. We fight for spinal cord injuries, traumatic brain injuries, and amputations.',
      icon: '🏥'
    },
    {
      title: 'Wrongful Death',
      description: 'When negligence takes a life, we help families seek justice and hold responsible parties accountable.',
      icon: '⚰️'
    },
    {
      title: 'Motorcycle Accidents',
      description: 'Motorcycle riders face unique dangers. We understand the severity of these crashes and fight for full compensation.',
      icon: '🏍️'
    },
    {
      title: 'Pedestrian Accidents',
      description: 'Pedestrians have no protection in crashes. We secure compensation for medical bills, lost income, and pain & suffering.',
      icon: '🚶'
    },
    {
      title: 'Product Liability',
      description: 'Defective products cause serious harm. We take on manufacturers and distributors for dangerous products.',
      icon: '⚠️'
    }
  ]

  const testimonials = [
    {
      name: 'David Thompson',
      case: 'Truck Accident - $4.2M Settlement',
      rating: 5,
      text: 'After my truck accident left me paralyzed, Miller & Associates fought tirelessly for three years. They secured a $4.2M settlement that ensures my family\'s future is protected.'
    },
    {
      name: 'Maria Rodriguez',
      case: 'Wrongful Death - $2.8M Verdict',
      rating: 5,
      text: 'Losing my husband was devastating. This firm treated us with compassion while aggressively pursuing justice. The verdict they won helps us maintain our home and secure our children\'s education.'
    },
    {
      name: 'James Patterson',
      case: 'Catastrophic Injury - $5.1M Settlement',
      rating: 5,
      text: 'The brain injury I suffered changed my life forever. Miller & Associates brought in top medical experts and won a settlement that covers my lifetime care needs.'
    }
  ]

  const caseResults = [
    { amount: '$8.5M', type: 'Truck Accident', description: 'Multi-vehicle collision on I-405 causing traumatic brain injury', featured: true },
    { amount: '$5.1M', type: 'Catastrophic Injury', description: 'Construction site accident resulting in paraplegia' },
    { amount: '$4.2M', type: 'Wrongful Death', description: 'Pedestrian fatality due to negligent driver' },
    { amount: '$3.7M', type: 'Motorcycle Accident', description: 'Left-turn crash causing multiple fractures and permanent disability' },
    { amount: '$2.9M', type: 'Product Liability', description: 'Defective machinery causing amputation' },
    { amount: '$2.4M', type: 'Premises Liability', description: 'Catastrophic fall from unsafe building structure' }
  ]

  const processSteps = [
    {
      number: 1,
      title: 'Immediate Response',
      description: 'Contact us 24/7. We begin investigating your case immediately, preserving evidence before it disappears.'
    },
    {
      number: 2,
      title: 'Expert Case Building',
      description: 'Our team of attorneys, investigators, and medical experts builds an ironclad case for maximum compensation.'
    },
    {
      number: 3,
      title: 'Aggressive Advocacy',
      description: 'We don\'t settle for less. Our trial-ready approach forces insurance companies to pay what you deserve.'
    },
    {
      number: 4,
      title: 'Maximum Recovery',
      description: 'We\'ve recovered over $250M for clients. Our track record speaks for itself.'
    }
  ]

  const teamMembers = [
    { name: 'Robert Miller', title: 'Senior Partner', experience: '30+ Years', image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=300&h=300&fit=crop' },
    { name: 'Jennifer Chen', title: 'Trial Attorney', experience: '15+ Years', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop' },
    { name: 'Michael Torres', title: 'Partner', experience: '20+ Years', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop' }
  ]

  const faqItems = [
    {
      question: 'What types of cases does your firm handle?',
      answer: 'We specialize in catastrophic personal injury cases including truck accidents, wrongful death, traumatic brain injuries, spinal cord injuries, and complex product liability cases. We take on cases with significant injuries that require substantial compensation.'
    },
    {
      question: 'How much does it cost to hire your law firm?',
      answer: 'We work exclusively on a contingency fee basis. This means you pay nothing upfront and nothing during the case. Our fees come only from your settlement or verdict. If we don\'t win, you don\'t pay.'
    },
    {
      question: 'What makes your firm different from other personal injury attorneys?',
      answer: 'Our firm has recovered over $250M for clients with a 30+ year track record. We have the resources to take on large corporations and insurance companies. Every case is staffed with multiple attorneys and supported by medical experts, investigators, and trial consultants.'
    },
    {
      question: 'How long will my case take?',
      answer: 'Catastrophic injury cases are complex and can take 1-3 years or more. However, we prioritize getting you interim compensation for medical bills and lost wages while we build your case for maximum recovery. We never rush to settle for less than you deserve.'
    },
    {
      question: 'Do you handle cases outside of Los Angeles?',
      answer: 'Yes. While we\'re based in Los Angeles, we represent clients throughout California and have successfully handled cases nationwide. We can travel to you for consultations and have a network of local co-counsel when needed.'
    },
    {
      question: 'What if the insurance company has already made me an offer?',
      answer: 'Don\'t accept it without consulting us first. Initial insurance offers are typically far below what your case is worth. We provide free case evaluations to help you understand the true value of your claim before you sign anything.'
    }
  ]

  return (
    <>
      {/* Hero Section - Layout 2: Centered Video Background + Call Button */}
      <div className="hero-layout-2">
        {/* Video Background */}
        <video
          className="hero-layout-2__video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-people-walking-on-the-streets-of-the-city-4401-large.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="hero-layout-2__overlay"></div>

        {/* Navigation - positioned absolutely over video */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10 }}>
          <Navigation
            logoText={templateData.firmName}
            phoneNumber={templateData.phoneNumber}
            ctaText="Free Consultation"
          />
        </div>

        {/* Centered Content */}
        <div className="hero-layout-2__content">
          <h1 className="hero-layout-2__headline">
            {templateData.heroHeadline}
          </h1>
          <p className="hero-layout-2__subheadline">
            {templateData.heroSubheadline}
          </p>

          {/* Giant Call Button */}
          <div className="hero-layout-2__cta">
            <a
              href={`tel:${templateData.phoneNumber.replace(/\D/g, '')}`}
              className="hero-layout-2__call-btn"
            >
              <span className="hero-layout-2__call-icon">📞</span>
              {templateData.phoneNumber}
            </a>
          </div>

          {/* Achievements Row */}
          <div className="hero-layout-2__achievements">
            <div className="hero-layout-2__achievement">
              <div className="hero-layout-2__achievement-value">{templateData.resultsHighlight}+</div>
              <div className="hero-layout-2__achievement-label">Total Recovered</div>
            </div>
            <div className="hero-layout-2__achievement">
              <div className="hero-layout-2__achievement-value">{templateData.yearsOfExperience}</div>
              <div className="hero-layout-2__achievement-label">Years Experience</div>
            </div>
            <div className="hero-layout-2__achievement">
              <div className="hero-layout-2__achievement-value">{templateData.attorneysCount}</div>
              <div className="hero-layout-2__achievement-label">Expert Attorneys</div>
            </div>
            <div className="hero-layout-2__achievement">
              <div className="hero-layout-2__achievement-value">24/7</div>
              <div className="hero-layout-2__achievement-label">Availability</div>
            </div>
          </div>
        </div>
      </div>

      {/* Practice Areas Section */}
      <section id="practice-areas" className="practice-areas">
        <div className="container">
          <div className="practice-areas__header">
            <h2 className="practice-areas__title">High-Stakes Personal Injury Cases</h2>
            <p className="practice-areas__subtitle">
              We specialize in complex, catastrophic injury cases that demand maximum compensation
            </p>
          </div>

          <div className="practice-areas__grid">
            {practiceAreas.map((area, index) => (
              <div
                key={area.title}
                className={`practice-area ${index === 0 ? 'practice-area--featured' : ''}`}
              >
                <div className="practice-area__icon">{area.icon}</div>
                <h3 className="practice-area__title">{area.title}</h3>
                <p className="practice-area__description">{area.description}</p>
                <a href="#contact" className="practice-area__link">
                  Get Free Consultation <span className="practice-area__arrow">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Results Section */}
      <section id="results" className="case-results">
        <div className="container">
          <div className="case-results__header">
            <h2 className="case-results__title">Record-Breaking Results</h2>
            <p className="case-results__subtitle">
              Over {templateData.resultsHighlight} recovered for our clients
            </p>
          </div>

          <div className="case-results__grid">
            {caseResults.map((result, index) => (
              <div
                key={index}
                className={`case-result ${index === 0 ? 'case-result--featured' : ''}`}
              >
                <div className="case-result__amount">{result.amount}</div>
                <h3 className="case-result__type">{result.type}</h3>
                <p className="case-result__description">{result.description}</p>
              </div>
            ))}
          </div>

          <div className="case-results__disclaimer">
            <p className="case-results__disclaimer-text">
              *Every case is unique. Past results do not guarantee future outcomes. Settlement amounts depend on specific facts, injuries, and liability.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof/Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <div className="testimonials__summary">
            <div className="testimonials__summary-rating">5.0</div>
            <div className="testimonials__summary-stars">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="testimonial__star">★</span>
              ))}
            </div>
            <p className="testimonials__summary-text">
              Based on 200+ client reviews
            </p>
          </div>

          <div className="testimonials__header">
            <h2 className="testimonials__title">Client Success Stories</h2>
            <p className="testimonials__subtitle">
              Real results from real clients whose lives we've helped rebuild
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

      {/* Team Bio Section */}
      <section id="about" className="attorney-bio attorney-bio--team">
        <div className="container">
          <div className="attorney-bio__container">
            <div className="attorney-bio__header" style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
              <h2 className="attorney-bio__name">Award-Winning Legal Team</h2>
              <p className="attorney-bio__title">
                {templateData.attorneysCount} experienced trial attorneys with over {templateData.resultsHighlight} in verdicts and settlements
              </p>
            </div>

            <div className="attorney-bio__highlights" style={{ justifyContent: 'center', marginBottom: 'var(--spacing-2xl)' }}>
              <div className="attorney-bio__highlight">
                <div className="attorney-bio__highlight-value">{templateData.resultsHighlight}+</div>
                <div className="attorney-bio__highlight-label">Total Recovered</div>
              </div>
              <div className="attorney-bio__highlight">
                <div className="attorney-bio__highlight-value">{templateData.yearsOfExperience}</div>
                <div className="attorney-bio__highlight-label">Combined Experience</div>
              </div>
              <div className="attorney-bio__highlight">
                <div className="attorney-bio__highlight-value">500+</div>
                <div className="attorney-bio__highlight-label">Cases Won</div>
              </div>
              <div className="attorney-bio__highlight">
                <div className="attorney-bio__highlight-value">100+</div>
                <div className="attorney-bio__highlight-label">Million Dollar Verdicts</div>
              </div>
            </div>

            <p className="attorney-bio__text" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto var(--spacing-lg)' }}>
              Our firm was founded on one principle: catastrophic injury victims deserve the best legal representation available.
              With {templateData.yearsOfExperience} of combined experience, our attorneys have secured some of the largest personal
              injury settlements in California history.
            </p>

            <p className="attorney-bio__text" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto var(--spacing-2xl)' }}>
              We don't handle hundreds of small cases. Instead, we focus on complex, high-value cases where our expertise makes
              the difference between a standard settlement and life-changing compensation. Our firm has the resources to take on
              Fortune 500 companies, major insurance carriers, and go to trial when necessary.
            </p>
          </div>

          <div className="attorney-bio__team-grid">
            {teamMembers.map((member) => (
              <div key={member.name} className="team-member">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-member__image"
                />
                <h3 className="team-member__name">{member.name}</h3>
                <p className="team-member__title">{member.title}</p>
                <p className="team-member__bio">{member.experience} of trial experience</p>
              </div>
            ))}
          </div>

          <div className="attorney-bio__cta" style={{ textAlign: 'center', marginTop: 'var(--spacing-2xl)' }}>
            <a href="#contact" className="btn btn--primary btn--large">
              Schedule Your Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process process--timeline">
        <div className="container">
          <div className="process__header">
            <h2 className="process__title">Our Proven Process</h2>
            <p className="process__subtitle">
              How we build winning cases for catastrophic injury victims
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
              Don't let insurance companies minimize your claim. Contact us now.
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
            <h2 className="faq__title">Frequently Asked Questions</h2>
            <p className="faq__subtitle">
              Get answers about catastrophic injury cases and our legal process
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
            <h3 className="contact__emergency-title">Serious Injury? Call Now</h3>
            <a href={`tel:${templateData.phoneNumber.replace(/\D/g, '')}`} className="contact__emergency-phone">
              {templateData.phoneNumber}
            </a>
            <p className="contact__emergency-text">Available 24/7 · Free Consultation · No Fees Unless We Win</p>
          </div>

          <div className="contact__header">
            <h2 className="contact__title">Get Your Free Case Evaluation</h2>
            <p className="contact__subtitle">
              Speak with an experienced attorney about your case today
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
                  <a href="mailto:cases@millerlawgroup.com" className="contact__info-value">
                    cases@millerlawgroup.com
                  </a>
                </div>
              </div>

              <div className="contact__info-item">
                <span className="contact__info-icon">📍</span>
                <div className="contact__info-content">
                  <div className="contact__info-label">Main Office</div>
                  <div className="contact__info-value">
                    5500 Wilshire Boulevard, Suite 2000<br />
                    {templateData.cityName}, CA 90036
                  </div>
                </div>
              </div>

              <div className="contact__info-item">
                <span className="contact__info-icon">⚖️</span>
                <div className="contact__info-content">
                  <div className="contact__info-label">We Handle</div>
                  <div className="contact__info-hours">
                    • Catastrophic Injuries<br />
                    • Truck Accidents<br />
                    • Wrongful Death<br />
                    • Product Liability<br />
                    <strong>Statewide Representation</strong>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <ContactForm
                variant="light"
                title="Request Free Consultation"
                subtitle="An attorney will review your case within 2 hours"
                ctaText="Submit Case Information"
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
                California's premier catastrophic injury law firm. Over {templateData.resultsHighlight} recovered for
                victims of truck accidents, wrongful death, and life-changing injuries.
              </p>
              <div className="footer__social">
                <a href="#" className="footer__social-link" aria-label="Facebook">f</a>
                <a href="#" className="footer__social-link" aria-label="Twitter">𝕏</a>
                <a href="#" className="footer__social-link" aria-label="LinkedIn">in</a>
                <a href="#" className="footer__social-link" aria-label="YouTube">▶</a>
              </div>
            </div>

            <div className="footer__section">
              <h4 className="footer__title">Practice Areas</h4>
              <ul className="footer__links">
                <li><a href="#" className="footer__link">Truck Accidents</a></li>
                <li><a href="#" className="footer__link">Catastrophic Injuries</a></li>
                <li><a href="#" className="footer__link">Wrongful Death</a></li>
                <li><a href="#" className="footer__link">Motorcycle Accidents</a></li>
                <li><a href="#" className="footer__link">Product Liability</a></li>
              </ul>
            </div>

            <div className="footer__section">
              <h4 className="footer__title">Resources</h4>
              <ul className="footer__links">
                <li><a href="#about" className="footer__link">Our Team</a></li>
                <li><a href="#results" className="footer__link">Case Results</a></li>
                <li><a href="#faq" className="footer__link">FAQ</a></li>
                <li><a href="#" className="footer__link">Case Studies</a></li>
                <li><a href="#" className="footer__link">Legal Blog</a></li>
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
                  <br />24/7 Emergency Line
                </div>
              </div>
              <div className="footer__contact-item">
                <span className="footer__contact-icon">📧</span>
                <div className="footer__contact-text">
                  <a href="mailto:cases@millerlawgroup.com" className="footer__contact-link">
                    cases@millerlawgroup.com
                  </a>
                </div>
              </div>
              <div className="footer__contact-item">
                <span className="footer__contact-icon">📍</span>
                <div className="footer__contact-text">
                  5500 Wilshire Blvd, Suite 2000<br />
                  {templateData.cityName}, CA 90036
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
              <li><a href="#" className="footer__legal-link">Accessibility</a></li>
              <li><a href="#" className="footer__legal-link">Disclaimer</a></li>
            </ul>
          </div>

          <div className="footer__disclaimer">
            <p className="footer__disclaimer-text">
              <strong>Attorney Advertising.</strong> This website is designed for general information only. The information presented
              should not be construed to be formal legal advice nor the formation of an attorney-client relationship. Prior results
              do not guarantee a similar outcome. Each case is different and must be judged on its own merits.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
