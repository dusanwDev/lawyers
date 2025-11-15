# Implementation Guide

Complete guide for implementing each of the 6 law firm landing page templates using Claude Code.

## 📚 Table of Contents

1. [Quick Start](#quick-start)
2. [Template Selection Guide](#template-selection-guide)
3. [Claude Code Prompts](#claude-code-prompts)
4. [Customization Checklist](#customization-checklist)
5. [Form Integration](#form-integration)
6. [SEO Optimization](#seo-optimization)

---

## 🚀 Quick Start

### Prerequisites

```bash
# Ensure Node.js is installed (v18+ recommended)
node --version

# Install dependencies
npm install

# Start development server
npm run dev
```

### Implementation Workflow

1. **Choose Template** → Select based on firm type and practice area
2. **Run Claude Code Prompt** → Use the appropriate prompt from this guide
3. **Customize Placeholders** → Replace {{VARIABLES}} with actual data
4. **Add Images** → Upload attorney photos and assets
5. **Test & Deploy** → QA test and deploy to production

---

## 🎯 Template Selection Guide

### When to Use Each Template

#### Personal Injury Templates

**PI Template 1: Compassion & Strength**
- ✅ Solo attorney or small firm (2-5 lawyers)
- ✅ Building trust through personal connection
- ✅ General PI: car accidents, slip & fall, medical malpractice
- ✅ Mid-sized cities or suburban markets
- ✅ Emphasizing attorney accessibility and compassion
- **Hero**: Attorney photo + integrated contact form

**PI Template 2: Results-Driven Power**
- ✅ Established firm with 5-20+ attorneys
- ✅ Strong case results to showcase ($500M+, etc.)
- ✅ High-value cases: truck accidents, catastrophic injury, wrongful death
- ✅ Major metro markets
- ✅ Aggressive, results-focused branding
- **Hero**: Full-screen video background + giant CTA

**PI Template 3: Local Authority**
- ✅ Solo or small firm (1-3 attorneys)
- ✅ Strong local community presence
- ✅ General PI with local focus
- ✅ Small to mid-sized cities
- ✅ Community reputation and referrals
- **Hero**: Text + bullet points + attorney image

#### Criminal Defense Templates

**CD Template 1: Emergency Defense 24/7**
- ✅ Solo or small firm (1-4 attorneys)
- ✅ 24/7 emergency arrest response
- ✅ DUI, domestic violence, drug crimes
- ✅ Immediate client action needed
- ✅ Urgency and availability messaging
- **Hero**: Urgent video background + pulsing call button

**CD Template 2: Former Prosecutor / Trial Warrior**
- ✅ Attorney with prosecutorial background
- ✅ Strong trial experience (100+ trials)
- ✅ Serious felonies, white collar, federal crimes
- ✅ Professional, credible positioning
- ✅ Insider knowledge angle
- **Hero**: Professional attorney image + credentials + form

**CD Template 3: High-Stakes Authority**
- ✅ Multi-attorney firm (5-15 lawyers)
- ✅ Complex, high-profile cases
- ✅ Federal crimes, appeals, white collar
- ✅ Major metro markets
- ✅ Premium, sophisticated branding
- **Hero**: Text-focused + team photo + trust indicators

---

## 💻 Claude Code Prompts

### How to Use These Prompts

Each prompt is **self-contained** and will:
- Create/update the specific template page
- Generate all required components
- Write BEM-style CSS
- Implement the correct hero layout
- Add form validation
- Set up SEO structure

**Important**: These prompts update ONLY the specific template folder. They won't affect other templates or the main project structure.

---

### PI Template 1 Prompt

**Trigger**: `pi-template-1`

```text
You are an expert Next.js and frontend developer specializing in law firm websites. Create "PI Template 1 - Compassion & Strength Layout" for personal injury law firms.

**Template Details:**
- Name: Compassion & Strength Layout
- Practice Area: Personal Injury (car accidents, slip & fall, medical malpractice)
- Ideal For: Solo attorneys or small firms (2-5 lawyers) in mid-sized cities
- Hero Layout: Layout 1 (Attorney Left + Form Right + Top Banner)

**File Path:**
app/templates/pi/template-1/page.tsx

**Hero Layout Implementation (Layout 1):**
1. Top Banner (full width):
   - Right side: "Call Now {{PHONE_NUMBER}}"
   - Include "Available 24/7" and "No Fee Unless We Win"

2. Main Hero (Two columns):
   - Left Column: Large attorney photo {{ATTORNEY_IMAGE}} with caption "{{ATTORNEY_NAME}} — {{PRIMARY_PRACTICE_AREA}} Lawyer in {{CITY_NAME}}"
   - Right Column: {{HERO_HEADLINE}}, {{HERO_SUBHEADLINE}}, contact form with fields (Name, Email, Phone, Message), CTA button {{PRIMARY_CTA_TEXT}}, reassurance text "No Fee Unless We Win"

3. Bottom Trust Bar:
   - Display: {{RESULTS_HIGHLIGHT}}, {{YEARS_OF_EXPERIENCE}}, {{AWARDS_LIST}}, {{RATINGS_SNIPPET}}

**Section Structure (in order):**
1. Hero (Layout 1)
2. Navigation (sticky)
3. Practice Areas (3-column grid: Car Accidents, Slip & Fall, Medical Malpractice, Wrongful Death, Workers' Comp, Product Liability)
4. Social Proof ({{TESTIMONIAL_LIST}} - 3 testimonials in cards)
5. Attorney/Firm Bio ({{ATTORNEY_NAME}}, {{YEARS_OF_EXPERIENCE}}, compassionate tone)
6. Case Results ({{RESULTS_HIGHLIGHT}} - grid of 6 results with amounts)
7. Process (4 steps: Free Consultation, Investigation, Negotiation, Trial if Needed)
8. FAQ ({{FAQ_ITEMS}} - 6 questions about fees, timeline, case value)
9. Contact (form + map placeholder + office hours)
10. Footer (links, disclaimer, social media icons)

**Design Requirements:**
- Custom CSS only (NO Tailwind)
- BEM naming convention throughout
- Color palette: Navy blue (#1a365d), warm gold accent (#d4a574), white, light gray (#f7fafc)
- Typography: Clean sans-serif, generous spacing
- Corporate/premium aesthetic
- Trust-focused visuals

**CSS Structure:**
Create separate CSS files in styles/components/:
- hero.module.css
- navigation.module.css
- practice-areas.module.css
- testimonials.module.css
- attorney-bio.module.css
- case-results.module.css
- process.module.css
- faq.module.css
- contact.module.css
- footer.module.css

Use BEM naming:
.hero { }
.hero__banner { }
.hero__banner-text { }
.hero__content { }
.hero__left { }
.hero__right { }
.hero__image { }
.hero__headline { }
.hero__form { }
.hero__trust-bar { }
.form { }
.form__field { }
.form__label { }
.form__input { }
.form__textarea { }
.form__button { }

**Contact Form Requirements:**
- Fields: Name (required), Email (required with format validation), Phone (required), Message (required)
- Client-side validation
- Comment: /* TODO: Connect to API endpoint */
- Submit button text: {{PRIMARY_CTA_TEXT}}

**SEO Requirements:**
- One <h1>: "{{CITY_NAME}} {{PRIMARY_PRACTICE_AREA}} Lawyer"
- <h2> for each section
- <h3> for subsections
- Metadata:
  - title: {{PAGE_TITLE}}
  - description: {{META_DESCRIPTION}}

**Placeholders to Use:**
{{PAGE_TITLE}}, {{META_DESCRIPTION}}, {{CITY_NAME}}, {{PRIMARY_PRACTICE_AREA}}, {{HERO_HEADLINE}}, {{HERO_SUBHEADLINE}}, {{PRIMARY_CTA_TEXT}}, {{PHONE_NUMBER}}, {{ATTORNEY_NAME}}, {{ATTORNEY_IMAGE}}, {{YEARS_OF_EXPERIENCE}}, {{RESULTS_HIGHLIGHT}}, {{AWARDS_LIST}}, {{TESTIMONIAL_LIST}}, {{FAQ_ITEMS}}, {{PROCESS_STEPS}}, {{RATINGS_SNIPPET}}

**Implementation Notes:**
- Create responsive layout (mobile-first)
- Sticky navigation after scroll
- Form validation with error messages
- Smooth scroll to sections
- Accessible (ARIA labels, semantic HTML)
- Use Next.js Image component for {{ATTORNEY_IMAGE}}
- Metadata API for SEO
```

---

### PI Template 2 Prompt

**Trigger**: `pi-template-2`

*(See full prompt in original response above)*

---

### PI Template 3 Prompt

**Trigger**: `pi-template-3`

*(See full prompt in original response above)*

---

### CD Template 1 Prompt

**Trigger**: `cd-template-1`

*(See full prompt in original response above)*

---

### CD Template 2 Prompt

**Trigger**: `cd-template-2`

*(See full prompt in original response above)*

---

### CD Template 3 Prompt

**Trigger**: `cd-template-3`

*(See full prompt in original response above)*

---

## ✅ Customization Checklist

After implementing a template, customize these elements:

### Required Customizations

- [ ] **Page Title** - Update {{PAGE_TITLE}} in metadata
- [ ] **Meta Description** - SEO description (155 characters)
- [ ] **City Name** - Replace {{CITY_NAME}} throughout
- [ ] **Practice Area** - Update {{PRIMARY_PRACTICE_AREA}}
- [ ] **Phone Number** - Replace {{PHONE_NUMBER}} everywhere
- [ ] **Attorney Name** - Update {{ATTORNEY_NAME}}
- [ ] **Attorney Image** - Upload and link {{ATTORNEY_IMAGE}}
- [ ] **Hero Headline** - Craft compelling {{HERO_HEADLINE}}
- [ ] **Hero Subheadline** - Write supporting {{HERO_SUBHEADLINE}}
- [ ] **CTA Text** - Customize {{PRIMARY_CTA_TEXT}}

### Content Customizations

- [ ] **Years of Experience** - {{YEARS_OF_EXPERIENCE}}
- [ ] **Results Highlight** - {{RESULTS_HIGHLIGHT}} (e.g., "$500M+ Recovered")
- [ ] **Awards List** - {{AWARDS_LIST}} with actual awards
- [ ] **Testimonials** - {{TESTIMONIAL_LIST}} (3-5 real testimonials)
- [ ] **FAQ Items** - {{FAQ_ITEMS}} (6-8 relevant questions)
- [ ] **Process Steps** - {{PROCESS_STEPS}} (3-5 steps)
- [ ] **Practice Areas** - Customize the practice area list
- [ ] **Case Results** - Add real case results (if allowed by bar rules)

### Design Customizations

- [ ] **Color Scheme** - Adjust CSS variables in globals.css
- [ ] **Typography** - Update font families if needed
- [ ] **Logo** - Add firm logo to navigation
- [ ] **Background Images** - Upload hero backgrounds
- [ ] **Background Video** - Add looping video (Layout 2 templates)
- [ ] **Favicon** - Add firm favicon

### Technical Customizations

- [ ] **Form Endpoint** - Connect to email/CRM API
- [ ] **Google Analytics** - Add tracking code
- [ ] **Google Maps** - Embed office location map
- [ ] **Schema Markup** - Add LocalBusiness structured data
- [ ] **Social Media Links** - Update footer social links

---

## 📬 Form Integration

### Form Submission Options

#### Option 1: Email Service (Simple)

```typescript
// Using a service like FormSpree, SendGrid, or Resend
const handleSubmit = async (e: FormEvent) => {
  e.preventDefault()

  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })

  if (response.ok) {
    // Show success message
  }
}
```

#### Option 2: CRM Integration

```typescript
// Integrate with legal CRM (Clio, MyCase, etc.)
const handleSubmit = async (e: FormEvent) => {
  e.preventDefault()

  const response = await fetch('/api/crm/contact', {
    method: 'POST',
    body: JSON.stringify({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      source: 'website_template_1'
    })
  })
}
```

#### Option 3: Database + Email

```typescript
// Save to database AND send email notification
const handleSubmit = async (e: FormEvent) => {
  e.preventDefault()

  // Call Next.js API route
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
}
```

### Recommended Services

- **FormSpree** - Simple email forwarding
- **SendGrid** - Transactional emails
- **Resend** - Modern email API
- **Zapier** - Connect to any CRM
- **Clio Grow** - Legal-specific lead management

---

## 🔍 SEO Optimization

### On-Page SEO Checklist

- [ ] **Title Tag** - Include city + practice area (under 60 chars)
- [ ] **Meta Description** - Compelling, keyword-rich (155 chars)
- [ ] **H1 Tag** - One per page with primary keyword
- [ ] **Heading Hierarchy** - Proper H1 → H2 → H3 structure
- [ ] **Alt Text** - Descriptive alt text on all images
- [ ] **Internal Links** - Link practice areas to dedicated pages
- [ ] **Mobile-Friendly** - Responsive design (built-in)
- [ ] **Page Speed** - Optimize images, use Next.js Image component
- [ ] **Schema Markup** - LocalBusiness, Attorney, LegalService

### Local SEO

```json
{
  "@context": "https://schema.org",
  "@type": "Attorney",
  "name": "Your Firm Name",
  "image": "https://yoursite.com/logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main St",
    "addressLocality": "Your City",
    "addressRegion": "ST",
    "postalCode": "12345"
  },
  "telephone": "+1-555-123-4567",
  "priceRange": "Free Consultation",
  "areaServed": "Your City, ST"
}
```

### Content Strategy

1. **FAQ Section** - Target long-tail keywords
2. **Case Results** - Builds trust and authority
3. **Practice Areas** - Separate pages for each area
4. **Attorney Bio** - Establish E-E-A-T (expertise, authority, trust)
5. **Blog** - Regular content for organic traffic

---

## 🚀 Deployment

### Vercel Deployment (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

### Environment Variables

Create `.env.local` for sensitive data:

```bash
NEXT_PUBLIC_FORM_ENDPOINT=https://...
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
CRM_API_KEY=your_api_key
```

---

## 📞 Support

For implementation questions:
1. Review the Claude Code prompts above
2. Check the main README.md
3. Refer to Next.js documentation
4. Test in development before deploying

---

**Ready to implement? Choose your template and use the corresponding Claude Code prompt!**
