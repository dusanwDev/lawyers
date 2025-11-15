'use client'

import { useState, FormEvent } from 'react'

interface ContactFormProps {
  variant?: 'hero' | 'dark' | 'light'
  title?: string
  subtitle?: string
  ctaText?: string
}

export default function ContactForm({
  variant = 'hero',
  title = 'Get Your Free Case Review',
  subtitle = 'Fill out the form and we will contact you within 24 hours',
  ctaText = 'Get Started Now'
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const validatePhone = (phone: string) => {
    const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    return re.test(phone)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      phone: '',
      message: ''
    }

    let isValid = true

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
      isValid = false
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
      isValid = false
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email'
      isValid = false
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
      isValid = false
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
      isValid = false
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please tell us about your case'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    // TODO: Connect to API endpoint
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      console.log('Form submitted:', formData)
      setIsSuccess(true)
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className={`form form--${variant}`}>
        <div className="form__success">
          <div className="form__success-title">Thank You!</div>
          <p className="form__success-message">
            We've received your information and will contact you within 24 hours.
          </p>
        </div>
      </div>
    )
  }

  return (
    <form className={`form form--${variant}`} onSubmit={handleSubmit}>
      <div className="form__header">
        <h3 className="form__title">{title}</h3>
        <p className="form__subtitle">{subtitle}</p>
      </div>

      <div className="form__body">
        <div className="form__field">
          <label htmlFor="name" className="form__label">
            Name<span className="form__label-required">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`form__input ${errors.name ? 'form__input--error' : ''}`}
            placeholder="Your full name"
          />
          {errors.name && <span className="form__error">{errors.name}</span>}
        </div>

        <div className="form__field">
          <label htmlFor="email" className="form__label">
            Email<span className="form__label-required">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`form__input ${errors.email ? 'form__input--error' : ''}`}
            placeholder="your.email@example.com"
          />
          {errors.email && <span className="form__error">{errors.email}</span>}
        </div>

        <div className="form__field">
          <label htmlFor="phone" className="form__label">
            Phone<span className="form__label-required">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`form__input ${errors.phone ? 'form__input--error' : ''}`}
            placeholder="(555) 123-4567"
          />
          {errors.phone && <span className="form__error">{errors.phone}</span>}
        </div>

        <div className="form__field">
          <label htmlFor="message" className="form__label">
            Tell us about your case<span className="form__label-required">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`form__textarea ${errors.message ? 'form__textarea--error' : ''}`}
            placeholder="Please provide details about your case..."
            rows={4}
          />
          {errors.message && <span className="form__error">{errors.message}</span>}
        </div>
      </div>

      <div className="form__submit">
        <button
          type="submit"
          className="form__button"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : ctaText}
        </button>
      </div>

      <div className="form__footer">
        <p className="form__disclaimer">
          By submitting this form, you agree to be contacted regarding your case.
          Your information will be kept confidential.
        </p>
      </div>
    </form>
  )
}
