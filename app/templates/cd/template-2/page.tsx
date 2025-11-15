'use client'

import { useState } from 'react'
import Navigation from '@/app/components/ui/Navigation/Navigation'
import ContactForm from '@/app/components/ui/ContactForm/ContactForm'
import CountUpValue from '@/app/components/ui/CountUpValue/CountUpValue'
import CountUpGroup from '@/app/components/ui/CountUpValue/CountUpGroup'
import './template-2.css'

export default function CDTemplate2() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null)

  const templateData = {
    cityName: 'Atlanta',
    firmName: 'Thompson Defense Firm',
    attorneyName: 'Michael Thompson',
    attorneyImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop',
    phoneNumber: '(404) 555-0500',
    yearsOfExperience: '25+',
    yearsAsProsecutor: '10',
    casesWon: '500+',
    heroHeadline: 'I Know How Prosecutors Think—Because I Was One',
    heroSubheadline: 'Former Senior Prosecutor now fighting for the defense. Atlanta criminal defense attorney with insider knowledge.',
  }

  const practiceAreas = [
    { title: 'Federal Crimes', description: 'Federal charges require attorneys who understand federal court. I\'ve prosecuted and now defend federal cases.', icon: '🏛️' },
    { title: 'White Collar Crimes', description: 'Fraud, embezzlement, insider trading. Complex financial crimes need sophisticated defense strategies.', icon: '💼' },
    { title: 'Serious Felonies', description: 'Murder, manslaughter, armed robbery. High-stakes cases demand experienced trial attorneys.', icon: '⚖️' },
    { title: 'Drug Trafficking', description: 'Large-scale drug cases with mandatory minimums. We fight for reduced charges and alternative sentencing.', icon: '💊' },
    { title: 'RICO Cases', description: 'Organized crime and racketeering charges. Complex conspiracy cases require strategic defense.', icon: '🔗' },
    { title: 'Sex Crimes', description: 'Sensitive cases requiring aggressive defense while protecting your reputation and future.', icon: '⚠️' }
  ]

  const testimonials = [
    { name: 'Business Owner', case: 'Federal Fraud - Charges Dismissed', rating: 5, text: 'Facing federal fraud charges was terrifying. Michael\'s experience as a prosecutor helped him find weaknesses in the government\'s case. All charges dismissed.' },
    { name: 'Anonymous', case: 'Murder - Not Guilty Verdict', rating: 5, text: 'I was accused of murder. Michael never gave up on me. After a 2-week trial, the jury found me not guilty. He saved my life.' },
    { name: 'Professional', case: 'White Collar - Reduced Sentence', rating: 5, text: 'The embezzlement charges could have meant 10 years. Michael negotiated a plea that saved my career and kept me out of prison.' }
  ]

  const faqItems = [
    { question: 'Why is your prosecutorial experience important?', answer: 'I spent 10 years as a Senior Prosecutor in the Fulton County DA\'s office. I know exactly how prosecutors build cases, what evidence they need, and their weaknesses. This insider knowledge helps me dismantle the state\'s case against you. I\'ve sat in their chairs—now I use that experience to defend you.' },
    { question: 'Do you handle federal criminal cases?', answer: 'Yes. Federal cases are my specialty. I\'ve handled cases in federal court both as a prosecutor and defense attorney. Federal charges carry serious penalties, and you need an attorney who understands federal procedures, sentencing guidelines, and how to negotiate with federal prosecutors.' },
    { question: 'What if I\'m guilty? Can you still help me?', answer: 'Even if you believe you\'re guilty, you have constitutional rights. I can often negotiate reduced charges, alternative sentencing, or programs that keep you out of prison. The prosecution must prove every element of their case beyond a reasonable doubt. I ensure they meet that burden.' },
    { question: 'How do you approach serious felony cases?', answer: 'Every case gets a full investigation. We hire expert witnesses, challenge forensic evidence, interview witnesses, and look for constitutional violations. If the evidence is strong, I negotiate the best possible plea. If not, we go to trial. I\'ve won acquittals in murder cases—I\'m not afraid of the courtroom.' },
    { question: 'What are your fees for criminal defense?', answer: 'Serious cases require serious resources. My fees vary based on case complexity. For felonies, retainers typically start at $25,000. Federal cases may be higher. I offer payment plans and will be transparent about costs during your consultation.' }
  ]

  return (
    <>
      <div className="hero-layout-1">
        <div className="hero-layout-1__banner">
          <div className="container">
            <div className="hero-layout-1__banner-content">
              <div className="hero-layout-1__banner-left">
                <span className="hero-layout-1__banner-item">🏛️ Former Senior Prosecutor</span>
                <span className="hero-layout-1__banner-item">⚖️ {templateData.casesWon} Cases Won</span>
                <span className="hero-layout-1__banner-item">💼 Federal Court Experience</span>
              </div>
              <div className="hero-layout-1__banner-right">
                <span>Serious Case? Call:</span>
                <a href={`tel:${templateData.phoneNumber.replace(/\D/g, '')}`} className="hero-layout-1__phone">{templateData.phoneNumber}</a>
              </div>
            </div>
          </div>
        </div>

        <Navigation logoText={templateData.firmName} phoneNumber={templateData.phoneNumber} ctaText="Free Consultation" />

        <div className="container">
          <div className="hero-layout-1__content">
            <div className="hero-layout-1__attorney">
              <img src={templateData.attorneyImage} alt={templateData.attorneyName} className="hero-layout-1__attorney-image" />
              <p className="hero-layout-1__attorney-caption">
                <span className="hero-layout-1__attorney-name">{templateData.attorneyName}</span> — Former Prosecutor, Now Your Defender
              </p>
            </div>

            <div className="hero-layout-1__text">
              <h1 className="hero-layout-1__headline">{templateData.heroHeadline}</h1>
              <p className="hero-layout-1__subheadline">{templateData.heroSubheadline}</p>
              <ContactForm variant="hero" title="Get Strategic Defense Now" subtitle="Free consultation for serious criminal charges" ctaText="Request Consultation" />
              <div className="hero-layout-1__reassurance">
                <p className="hero-layout-1__reassurance-text">⚖️ Former Prosecutor | Trial-Tested Defense</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-layout-1__trust-bar">
          <div className="container">
            <CountUpGroup className="hero-layout-1__trust-items">
              <div className="hero-layout-1__trust-item"><span className="hero-layout-1__trust-icon">🏛️</span><CountUpValue value={`${templateData.yearsAsProsecutor} Years`} className="hero-layout-1__trust-value" /><div className="hero-layout-1__trust-label">As Prosecutor</div></div>
              <div className="hero-layout-1__trust-item"><span className="hero-layout-1__trust-icon">⚖️</span><CountUpValue value={templateData.yearsOfExperience} className="hero-layout-1__trust-value" /><div className="hero-layout-1__trust-label">Total Experience</div></div>
              <div className="hero-layout-1__trust-item"><span className="hero-layout-1__trust-icon">🏆</span><CountUpValue value={templateData.casesWon} className="hero-layout-1__trust-value" /><div className="hero-layout-1__trust-label">Cases Won</div></div>
              <div className="hero-layout-1__trust-item"><span className="hero-layout-1__trust-icon">⭐</span><CountUpValue value="5.0" className="hero-layout-1__trust-value" /><div className="hero-layout-1__trust-label">Client Rating</div></div>
            </CountUpGroup>
          </div>
        </div>
      </div>

      <section id="practice-areas" className="practice-areas">
        <div className="container">
          <div className="practice-areas__header">
            <h2 className="practice-areas__title">Serious Charges Require Serious Defense</h2>
            <p className="practice-areas__subtitle">Complex criminal cases demand attorneys with prosecutorial insight</p>
          </div>
          <div className="practice-areas__grid">
            {practiceAreas.map((area) => (
              <div key={area.title} className="practice-area">
                <div className="practice-area__icon">{area.icon}</div>
                <h3 className="practice-area__title">{area.title}</h3>
                <p className="practice-area__description">{area.description}</p>
                <a href="#contact" className="practice-area__link">Discuss Your Case <span className="practice-area__arrow">→</span></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <div className="testimonials__header">
            <h2 className="testimonials__title">Winning High-Stakes Cases</h2>
            <p className="testimonials__subtitle">Client victories in serious criminal matters</p>
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

      <section id="about" className="attorney-bio">
        <div className="container">
          <div className="attorney-bio__container">
            <div className="attorney-bio__image-wrapper">
              <img src={templateData.attorneyImage} alt={templateData.attorneyName} className="attorney-bio__image" />
              <div className="attorney-bio__credentials">
                <h4 className="attorney-bio__credentials-title">Background</h4>
                <ul className="attorney-bio__credentials-list">
                  <li className="attorney-bio__credential">Former Senior Prosecutor</li>
                  <li className="attorney-bio__credential">Georgia Bar Certified</li>
                  <li className="attorney-bio__credential">Federal Court Admitted</li>
                  <li className="attorney-bio__credential">Trial Lawyer of the Year</li>
                </ul>
              </div>
            </div>
            <div className="attorney-bio__content">
              <div className="attorney-bio__header">
                <h2 className="attorney-bio__name">Meet {templateData.attorneyName}</h2>
                <p className="attorney-bio__title">Former Prosecutor | Criminal Defense Attorney</p>
              </div>
              <div className="attorney-bio__highlights">
                <div className="attorney-bio__highlight"><div className="attorney-bio__highlight-value">{templateData.yearsAsProsecutor}</div><div className="attorney-bio__highlight-label">Years as Prosecutor</div></div>
                <div className="attorney-bio__highlight"><div className="attorney-bio__highlight-value">{templateData.yearsOfExperience}</div><div className="attorney-bio__highlight-label">Total Experience</div></div>
                <div className="attorney-bio__highlight"><div className="attorney-bio__highlight-value">{templateData.casesWon}</div><div className="attorney-bio__highlight-label">Cases Won</div></div>
              </div>
              <p className="attorney-bio__text">For 10 years, I was a Senior Prosecutor in the Fulton County DA's office. I prosecuted everything from DUIs to murders. I know how prosecutors think because I was one of them. Now, I use that insider knowledge to defend people facing serious criminal charges.</p>
              <p className="attorney-bio__text">When you hire a former prosecutor, you get someone who understands both sides. I know what evidence prosecutors need, what weaknesses to exploit, and how to negotiate effectively. This experience has helped me win cases that other attorneys thought were unwinnable.</p>
              <div className="attorney-bio__quote">"I switched sides because everyone deserves a vigorous defense. The prosecution has unlimited resources. You need an attorney who knows their playbook inside and out."<br />— {templateData.attorneyName}</div>
              <div className="attorney-bio__cta">
                <a href="#contact" className="btn btn--primary btn--large">Schedule Consultation</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="faq">
        <div className="container">
          <div className="faq__header">
            <h2 className="faq__title">Common Questions</h2>
            <p className="faq__subtitle">What you need to know about serious criminal defense</p>
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
            <h2 className="contact__title">Facing Serious Charges?</h2>
            <p className="contact__subtitle">Get experienced defense from a former prosecutor</p>
          </div>
          <div className="contact__container">
            <div className="contact__info">
              <div className="contact__info-item">
                <span className="contact__info-icon">📞</span>
                <div className="contact__info-content">
                  <div className="contact__info-label">Call Now</div>
                  <a href={`tel:${templateData.phoneNumber.replace(/\D/g, '')}`} className="contact__info-value">{templateData.phoneNumber}</a>
                </div>
              </div>
              <div className="contact__info-item">
                <span className="contact__info-icon">📧</span>
                <div className="contact__info-content">
                  <div className="contact__info-label">Email</div>
                  <a href="mailto:mthompson@thompsondefense.com" className="contact__info-value">mthompson@thompsondefense.com</a>
                </div>
              </div>
              <div className="contact__info-item">
                <span className="contact__info-icon">📍</span>
                <div className="contact__info-content">
                  <div className="contact__info-label">Atlanta Office</div>
                  <div className="contact__info-value">191 Peachtree Street NE, Suite 4000<br />{templateData.cityName}, GA 30303</div>
                </div>
              </div>
            </div>
            <div><ContactForm variant="light" title="Request Consultation" subtitle="Confidential case review" ctaText="Send Secure Message" /></div>
          </div>
          <div className="contact__emergency">
            <h3 className="contact__emergency-title">Need Immediate Defense?</h3>
            <a href={`tel:${templateData.phoneNumber.replace(/\D/g, '')}`} className="contact__emergency-phone">{templateData.phoneNumber}</a>
            <p className="contact__emergency-text">Former Prosecutor · Trial-Tested Defense · Free Consultation</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer__main">
            <div className="footer__section">
              <div className="footer__logo">{templateData.firmName}</div>
              <p className="footer__description">Former prosecutor providing aggressive criminal defense in Atlanta. Insider knowledge. Trial-tested strategies.</p>
            </div>
            <div className="footer__section">
              <h4 className="footer__title">Practice Areas</h4>
              <ul className="footer__links">
                <li><a href="#" className="footer__link">Federal Crimes</a></li>
                <li><a href="#" className="footer__link">White Collar</a></li>
                <li><a href="#" className="footer__link">Serious Felonies</a></li>
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
            </div>
          </div>
          <div className="footer__bottom">
            <p className="footer__copyright">© {new Date().getFullYear()} {templateData.firmName}. All rights reserved.</p>
          </div>
          <div className="footer__disclaimer">
            <p className="footer__disclaimer-text"><strong>Disclaimer:</strong> This website is for informational purposes only and does not constitute legal advice.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
