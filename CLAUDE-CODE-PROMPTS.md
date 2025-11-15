# Claude Code Prompts - All 6 Templates

This file contains all 6 complete Claude Code prompts for implementing the law firm landing page templates.

## Table of Contents

1. [PI Template 1: Compassion & Strength](#pi-template-1-compassion--strength)
2. [PI Template 2: Results-Driven Power](#pi-template-2-results-driven-power)
3. [PI Template 3: Local Authority](#pi-template-3-local-authority)
4. [CD Template 1: Emergency Defense 24/7](#cd-template-1-emergency-defense-247)
5. [CD Template 2: Former Prosecutor](#cd-template-2-former-prosecutor)
6. [CD Template 3: High-Stakes Authority](#cd-template-3-high-stakes-authority)

---

## PI Template 1: Compassion & Strength

**Trigger**: `pi-template-1`

**Use this prompt when you want to implement the Compassion & Strength layout for Personal Injury firms.**

### Complete Claude Code Prompt:

\`\`\`text
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
\`\`\`

---

## PI Template 2: Results-Driven Power

**Trigger**: `pi-template-2`

**Use this prompt when you want to implement the Results-Driven Power layout for established PI firms.**

### Complete Claude Code Prompt:

\`\`\`text
You are an expert Next.js and frontend developer specializing in law firm websites. Create "PI Template 2 - Results-Driven Injury Power Layout" for personal injury law firms.

**Template Details:**
- Name: Results-Driven Injury Power Layout
- Practice Area: Personal Injury (high-value cases: truck accidents, catastrophic injury, wrongful death)
- Ideal For: Established firms (5-20 attorneys) with strong case results, metro areas
- Hero Layout: Layout 2 (Centered Video Background + Call Button + Achievements)

**File Path:**
app/templates/pi/template-2/page.tsx

**Hero Layout Implementation (Layout 2):**
1. Background:
   - Full-screen looping video (placeholder: courtroom or city skyline)
   - Dark overlay (rgba(0,0,0,0.6)) for text contrast

2. Centered Content:
   - {{HERO_HEADLINE}} (bold, large, includes city + practice area)
   - {{HERO_SUBHEADLINE}}

3. Center CTA:
   - Giant call button with {{PRIMARY_CTA_TEXT}}
   - Link: tel:{{PHONE_NUMBER}}
   - High contrast, impossible to miss

4. Achievements Row (below CTA):
   - {{RESULTS_HIGHLIGHT}} (e.g., "$500M+ Recovered")
   - {{YEARS_OF_EXPERIENCE}} (e.g., "40+ Years Experience")
   - {{AWARDS_LIST}} (e.g., "Super Lawyers 2024")

**Section Structure (in order):**
1. Hero (Layout 2 - Video Background)
2. Navigation (transparent over hero, solid on scroll)
3. Practice Areas (2-column grid with icons: Truck Accidents, Catastrophic Injury, Wrongful Death, Brain Injury, Spinal Cord Injury, Burn Injury)
4. Case Results (prominent section - 8 results in grid, focus on high-dollar verdicts/settlements)
5. Social Proof (video testimonials section + {{TESTIMONIAL_LIST}} - 4 testimonials)
6. Attorney/Firm Bio (team photo, aggressive representation message, {{YEARS_OF_EXPERIENCE}})
7. Process (3 bold steps: Free Case Review, Aggressive Representation, Maximum Compensation)
8. Awards & Recognition ({{AWARDS_LIST}} - logo grid)
9. FAQ ({{FAQ_ITEMS}} - 5 questions focused on case value and timeline)
10. Contact (two-column: form left, info + CTA right)
11. Footer (comprehensive links, multi-location info if applicable)

**Design Requirements:**
- Custom CSS only (NO Tailwind)
- BEM naming convention
- Color palette: Deep charcoal (#2d3748), electric blue (#3182ce), gold accent (#ecc94b), white
- Bold typography, powerful visual hierarchy
- High-contrast, results-focused aesthetic

**CSS Structure:**
Create separate CSS files in styles/components/:
- hero-video.module.css
- navigation.module.css
- practice-areas.module.css
- case-results.module.css
- testimonials.module.css
- attorney-bio.module.css
- process.module.css
- awards.module.css
- faq.module.css
- contact.module.css
- footer.module.css

Use BEM naming:
.hero-video { }
.hero-video__overlay { }
.hero-video__content { }
.hero-video__headline { }
.hero-video__subheadline { }
.hero-video__cta { }
.hero-video__achievements { }
.hero-video__achievement { }
.case-results { }
.case-results__grid { }
.case-results__item { }
.case-results__amount { }
.case-results__description { }

**Contact Form Requirements:**
- Fields: Name (required), Email (required with validation), Phone (required), Case Type (dropdown), Message (required)
- Client-side validation with real-time feedback
- Comment: /* TODO: Connect to CRM/API endpoint */
- Submit button: {{PRIMARY_CTA_TEXT}}

**SEO Requirements:**
- One <h1>: "{{CITY_NAME}} {{PRIMARY_PRACTICE_AREA}} Attorney - $500M+ Recovered"
- <h2> for major sections
- <h3> for case results and practice areas
- Metadata:
  - title: {{PAGE_TITLE}}
  - description: {{META_DESCRIPTION}}

**Placeholders to Use:**
{{PAGE_TITLE}}, {{META_DESCRIPTION}}, {{CITY_NAME}}, {{PRIMARY_PRACTICE_AREA}}, {{HERO_HEADLINE}}, {{HERO_SUBHEADLINE}}, {{PRIMARY_CTA_TEXT}}, {{PHONE_NUMBER}}, {{ATTORNEY_NAME}}, {{ATTORNEY_IMAGE}}, {{YEARS_OF_EXPERIENCE}}, {{RESULTS_HIGHLIGHT}}, {{AWARDS_LIST}}, {{TESTIMONIAL_LIST}}, {{FAQ_ITEMS}}, {{PROCESS_STEPS}}

**Implementation Notes:**
- Video element with autoplay, loop, muted attributes
- Fallback background image if video fails
- Transparent-to-solid navigation on scroll
- Animate achievements on scroll into view
- Mobile: replace video with static image
- Accessibility: video has aria-hidden, all text readable
\`\`\`

---

## PI Template 3: Local Authority

**Trigger**: `pi-template-3`

**Use this prompt when you want to implement the Local Authority layout for community-focused PI firms.**

### Complete Claude Code Prompt:

\`\`\`text
You are an expert Next.js and frontend developer specializing in law firm websites. Create "PI Template 3 - Local Injury Authority Layout" for personal injury law firms.

**Template Details:**
- Name: Local Injury Authority Layout
- Practice Area: Personal Injury (general - car accidents, premises liability, dog bites)
- Ideal For: Solo or small firms (1-3 attorneys) focused on local community, suburban/small city markets
- Hero Layout: Layout 3 (Text Left + Attorney Right + Top Banner)

**File Path:**
app/templates/pi/template-3/page.tsx

**Hero Layout Implementation (Layout 3):**
1. Top Banner:
   - Full-width strip
   - Right side: "Call Now {{PHONE_NUMBER}}"
   - "Free Consultation • No Fee Unless We Win"

2. Main Hero (Two columns):
   - Left Column:
     - {{HERO_HEADLINE}} (emphasize local: "Your {{CITY_NAME}} {{PRIMARY_PRACTICE_AREA}} Lawyer")
     - {{HERO_SUBHEADLINE}}
     - Bullet list: {{BULLET_1}}, {{BULLET_2}}, {{BULLET_3}}
     - CTA button ({{PRIMARY_CTA_TEXT}})
     - "Or call {{PHONE_NUMBER}} 24/7"

   - Right Column:
     - {{ATTORNEY_IMAGE}} (professional, approachable)
     - {{ATTORNEY_NAME}}

3. Optional Bottom Trust Strip:
   - {{AWARDS_LIST}} (local bar associations, community awards)

**Section Structure (in order):**
1. Hero (Layout 3)
2. Navigation (simple, clean)
3. Practice Areas (3-column grid: Car Accidents, Slip & Fall, Dog Bites, Premises Liability, Bicycle Accidents, Pedestrian Accidents)
4. Why Choose Us (local focus: "{{CITY_NAME}} resident", "Know local courts", "Personal attention")
5. Attorney Bio ({{ATTORNEY_NAME}}, community involvement, local credentials)
6. Social Proof ({{TESTIMONIAL_LIST}} - 5 testimonials from local clients)
7. Case Results ({{RESULTS_HIGHLIGHT}} - 6 local results)
8. Process (5 steps: Call Us, Free Consultation, Investigation, Negotiation, Get Compensated)
9. Service Area (map + list of nearby cities/neighborhoods)
10. FAQ ({{FAQ_ITEMS}} - 8 questions, very approachable tone)
11. Contact (simple form + local office photo)
12. Footer (local business schema markup)

**Design Requirements:**
- Custom CSS only (NO Tailwind)
- BEM naming convention
- Color palette: Trustworthy blue (#2c5282), warm orange accent (#ed8936), cream (#fffaf0), dark gray (#2d3748)
- Approachable, friendly typography
- Community-focused, accessible aesthetic
- Local imagery and references

**CSS Structure:**
Create separate CSS files in styles/components/:
- hero-split.module.css
- navigation.module.css
- practice-areas.module.css
- why-choose.module.css
- attorney-bio.module.css
- testimonials.module.css
- case-results.module.css
- process.module.css
- service-area.module.css
- faq.module.css
- contact.module.css
- footer.module.css

Use BEM naming:
.hero-split { }
.hero-split__banner { }
.hero-split__content { }
.hero-split__left { }
.hero-split__right { }
.hero-split__headline { }
.hero-split__bullets { }
.hero-split__bullet { }
.hero-split__cta { }
.hero-split__image { }
.hero-split__trust-strip { }

**Contact Form Requirements:**
- Fields: Name (required), Email (required), Phone (required), How can we help? (textarea, required)
- Simple, friendly validation messages
- Comment: /* TODO: Connect to email/contact API */
- Submit button: {{PRIMARY_CTA_TEXT}}
- Privacy notice: "Your information is confidential"

**SEO Requirements:**
- One <h1>: "{{CITY_NAME}} {{PRIMARY_PRACTICE_AREA}} Lawyer | Local Injury Attorney"
- <h2> for sections
- <h3> for practice areas and testimonials
- Local business schema markup in footer
- Metadata:
  - title: {{PAGE_TITLE}}
  - description: {{META_DESCRIPTION}}

**Placeholders to Use:**
{{PAGE_TITLE}}, {{META_DESCRIPTION}}, {{CITY_NAME}}, {{PRIMARY_PRACTICE_AREA}}, {{HERO_HEADLINE}}, {{HERO_SUBHEADLINE}}, {{BULLET_1}}, {{BULLET_2}}, {{BULLET_3}}, {{PRIMARY_CTA_TEXT}}, {{PHONE_NUMBER}}, {{ATTORNEY_NAME}}, {{ATTORNEY_IMAGE}}, {{YEARS_OF_EXPERIENCE}}, {{RESULTS_HIGHLIGHT}}, {{AWARDS_LIST}}, {{TESTIMONIAL_LIST}}, {{FAQ_ITEMS}}, {{PROCESS_STEPS}}

**Implementation Notes:**
- Mobile-first responsive design
- Click-to-call on mobile devices
- Google Maps embed for service area
- LocalBusiness schema JSON-LD
- Warm, approachable micro-interactions
- Fast load times (optimize images)
\`\`\`

---

## CD Template 1: Emergency Defense 24/7

**Trigger**: `cd-template-1`

**Use this prompt when you want to implement the Emergency Defense 24/7 layout for criminal defense firms.**

### Complete Claude Code Prompt:

\`\`\`text
You are an expert Next.js and frontend developer specializing in law firm websites. Create "CD Template 1 - Emergency Defense 24/7 Layout" for criminal defense law firms.

**Template Details:**
- Name: Emergency Defense 24/7 Layout
- Practice Area: Criminal Defense (DUI, domestic violence, drug crimes, assault)
- Ideal For: Solo or small firms (1-4 attorneys) offering 24/7 emergency response, metro areas
- Hero Layout: Layout 2 (Centered Video Background + Call Button + Achievements)

**File Path:**
app/templates/cd/template-1/page.tsx

**Hero Layout Implementation (Layout 2):**
1. Background:
   - Full-screen looping video (night city, police lights - conveys urgency)
   - Dark overlay (rgba(0,0,0,0.7)) for readability

2. Centered Content:
   - {{HERO_HEADLINE}} (urgent: "Arrested? Call Now - Available 24/7")
   - {{HERO_SUBHEADLINE}} ("{{CITY_NAME}} Criminal Defense Attorney")

3. Center CTA:
   - Giant call button: "CALL NOW {{PHONE_NUMBER}}"
   - Pulsing animation to convey urgency
   - Link: tel:{{PHONE_NUMBER}}
   - Secondary text: "Get a Response Within Minutes"

4. Achievements Row:
   - {{RESULTS_HIGHLIGHT}} (e.g., "1000+ Cases Handled")
   - {{YEARS_OF_EXPERIENCE}} (e.g., "15+ Years Experience")
   - {{AWARDS_LIST}} (e.g., "AVVO 10.0 Rating")

**Section Structure (in order):**
1. Hero (Layout 2 - Urgent Video Background)
2. Navigation (minimal, focus on phone number)
3. Immediate Help CTA (banner: "Been Arrested? Time is Critical - Call {{PHONE_NUMBER}}")
4. Practice Areas (4-column grid: DUI, Drug Crimes, Assault, Domestic Violence, Theft, Probation Violations, Warrants, Expungements)
5. Why Choose Us (24/7 availability, immediate jail visits, aggressive defense)
6. Attorney Bio ({{ATTORNEY_NAME}}, criminal defense focus, {{YEARS_OF_EXPERIENCE}})
7. Case Results ({{RESULTS_HIGHLIGHT}} - dismissals, reduced charges, acquittals)
8. Process (4 urgent steps: Call Immediately, Free Consultation, Build Defense, Fight For You)
9. Social Proof ({{TESTIMONIAL_LIST}} - 4 testimonials emphasizing responsiveness)
10. FAQ ({{FAQ_ITEMS}} - 6 questions about arrest, bail, charges)
11. Contact (form + "CALL NOW" emphasis)
12. Footer (24/7 notice, disclaimer)

**Design Requirements:**
- Custom CSS only (NO Tailwind)
- BEM naming convention
- Color palette: Midnight blue (#1a202c), urgent red (#e53e3e), silver/gray (#718096), white
- Bold, urgent typography
- High-contrast for readability
- Conveys immediate action

**CSS Structure:**
Create separate CSS files in styles/components/:
- hero-urgent.module.css
- navigation.module.css
- urgent-banner.module.css
- practice-areas.module.css
- why-choose.module.css
- attorney-bio.module.css
- case-results.module.css
- process.module.css
- testimonials.module.css
- faq.module.css
- contact.module.css
- footer.module.css

Use BEM naming:
.hero-urgent { }
.hero-urgent__video { }
.hero-urgent__overlay { }
.hero-urgent__content { }
.hero-urgent__headline { }
.hero-urgent__cta { }
.hero-urgent__cta--pulse { }
.hero-urgent__achievements { }
.urgent-banner { }
.urgent-banner__text { }
.urgent-banner__phone { }

**Contact Form Requirements:**
- Fields: Name (required), Phone (required), Email, Charge/Situation (dropdown or textarea), Message
- Prominent "URGENT" indicator
- Comment: /* TODO: Connect to 24/7 answering service API */
- Submit button: {{PRIMARY_CTA_TEXT}}
- Text below: "Or call {{PHONE_NUMBER}} now for immediate help"

**SEO Requirements:**
- One <h1>: "{{CITY_NAME}} Criminal Defense Attorney - 24/7 Emergency Defense"
- <h2> for sections
- <h3> for practice areas
- Metadata:
  - title: {{PAGE_TITLE}}
  - description: {{META_DESCRIPTION}}

**Placeholders to Use:**
{{PAGE_TITLE}}, {{META_DESCRIPTION}}, {{CITY_NAME}}, {{PRIMARY_PRACTICE_AREA}}, {{HERO_HEADLINE}}, {{HERO_SUBHEADLINE}}, {{PRIMARY_CTA_TEXT}}, {{PHONE_NUMBER}}, {{ATTORNEY_NAME}}, {{ATTORNEY_IMAGE}}, {{YEARS_OF_EXPERIENCE}}, {{RESULTS_HIGHLIGHT}}, {{AWARDS_LIST}}, {{TESTIMONIAL_LIST}}, {{FAQ_ITEMS}}, {{PROCESS_STEPS}}

**Implementation Notes:**
- Pulsing CTA button animation (CSS keyframes)
- Video with fallback image
- Mobile: static urgent background image
- Phone number clickable everywhere
- Fast page load (critical for urgent situations)
- Sticky phone CTA on mobile
\`\`\`

---

## CD Template 2: Former Prosecutor

**Trigger**: `cd-template-2`

**Use this prompt when you want to implement the Former Prosecutor layout for trial-focused criminal defense attorneys.**

### Complete Claude Code Prompt:

\`\`\`text
You are an expert Next.js and frontend developer specializing in law firm websites. Create "CD Template 2 - Former Prosecutor / Trial Warrior Layout" for criminal defense law firms.

**Template Details:**
- Name: Former Prosecutor / Trial Warrior Layout
- Practice Area: Criminal Defense (serious felonies, white collar, federal crimes)
- Ideal For: Established firms or solo attorneys with prosecutorial background, trial experience
- Hero Layout: Layout 1 (Attorney Left + Form Right + Top Banner)

**File Path:**
app/templates/cd/template-2/page.tsx

**Hero Layout Implementation (Layout 1):**
1. Top Banner:
   - Full-width strip
   - Right side: "Call Now {{PHONE_NUMBER}}"
   - "Former Prosecutor • Proven Trial Attorney"

2. Main Hero (Two columns):
   - Left Column:
     - {{ATTORNEY_IMAGE}} (professional courtroom setting or law office)
     - "{{ATTORNEY_NAME}} — Former {{CITY_NAME}} Prosecutor"
     - Credentials badges (bar associations, certifications)

   - Right Column:
     - {{HERO_HEADLINE}} ("Serious Charges Require Serious Defense")
     - {{HERO_SUBHEADLINE}} ("{{CITY_NAME}} {{PRIMARY_PRACTICE_AREA}} Attorney")
     - Contact form (Name, Phone, Email, Charge Type, Message)
     - {{PRIMARY_CTA_TEXT}}
     - "Confidential Consultation"

3. Bottom Trust Bar:
   - {{RESULTS_HIGHLIGHT}} (trial verdicts)
   - {{YEARS_OF_EXPERIENCE}} (prosecutor + defense)
   - {{AWARDS_LIST}}
   - "100+ Trials"

**Section Structure (in order):**
1. Hero (Layout 1)
2. Navigation (professional, includes credentials)
3. Former Prosecutor Advantage (section explaining insider knowledge)
4. Practice Areas (3-column: Felonies, Federal Crimes, White Collar, Sex Crimes, Violent Crimes, Appeals)
5. Attorney Bio ({{ATTORNEY_NAME}}, prosecutorial background, trial stats, {{YEARS_OF_EXPERIENCE}})
6. Case Results ({{RESULTS_HIGHLIGHT}} - trial victories, dismissals, not guilty verdicts)
7. Trial Experience (emphasis on courtroom success)
8. Social Proof ({{TESTIMONIAL_LIST}} - 3 detailed testimonials)
9. Process (4 steps: Confidential Consultation, Case Investigation, Aggressive Defense, Trial if Necessary)
10. FAQ ({{FAQ_ITEMS}} - 7 questions about serious charges, trials, sentencing)
11. Contact (form + office info)
12. Footer (credentials, bar info, disclaimer)

**Design Requirements:**
- Custom CSS only (NO Tailwind)
- BEM naming convention
- Color palette: Deep navy (#1e3a5f), burgundy accent (#9b2c2c), gold (#d69e2e), cream (#faf5f0)
- Professional, authoritative typography
- Courtroom/legal imagery
- Credibility-focused design

**CSS Structure:**
Create separate CSS files in styles/components/:
- hero-prosecutor.module.css
- navigation.module.css
- prosecutor-advantage.module.css
- practice-areas.module.css
- attorney-bio.module.css
- case-results.module.css
- trial-experience.module.css
- testimonials.module.css
- process.module.css
- faq.module.css
- contact.module.css
- footer.module.css

Use BEM naming:
.hero-prosecutor { }
.hero-prosecutor__banner { }
.hero-prosecutor__content { }
.hero-prosecutor__left { }
.hero-prosecutor__image { }
.hero-prosecutor__credentials { }
.hero-prosecutor__right { }
.hero-prosecutor__headline { }
.hero-prosecutor__form { }
.hero-prosecutor__trust-bar { }
.prosecutor-advantage { }
.prosecutor-advantage__item { }

**Contact Form Requirements:**
- Fields: Name (required), Phone (required), Email (required), Charge Type (dropdown: Felony, Federal, White Collar, Sex Crime, Other), Message (required)
- Professional validation
- Comment: /* TODO: Connect to secure client intake system */
- Submit button: {{PRIMARY_CTA_TEXT}}
- Confidentiality notice prominent

**SEO Requirements:**
- One <h1>: "{{CITY_NAME}} Criminal Defense Attorney | Former Prosecutor"
- <h2> for major sections
- <h3> for practice areas and case results
- Metadata:
  - title: {{PAGE_TITLE}}
  - description: {{META_DESCRIPTION}}

**Placeholders to Use:**
{{PAGE_TITLE}}, {{META_DESCRIPTION}}, {{CITY_NAME}}, {{PRIMARY_PRACTICE_AREA}}, {{HERO_HEADLINE}}, {{HERO_SUBHEADLINE}}, {{PRIMARY_CTA_TEXT}}, {{PHONE_NUMBER}}, {{ATTORNEY_NAME}}, {{ATTORNEY_IMAGE}}, {{YEARS_OF_EXPERIENCE}}, {{RESULTS_HIGHLIGHT}}, {{AWARDS_LIST}}, {{TESTIMONIAL_LIST}}, {{FAQ_ITEMS}}, {{PROCESS_STEPS}}

**Implementation Notes:**
- Professional, trust-building animations
- Credentials section with badge/seal imagery
- Trial stats counter animation on scroll
- Responsive design maintaining authority
- Secure form handling indicators
\`\`\`

---

## CD Template 3: High-Stakes Authority

**Trigger**: `cd-template-3`

**Use this prompt when you want to implement the High-Stakes Authority layout for premium criminal defense firms.**

### Complete Claude Code Prompt:

\`\`\`text
You are an expert Next.js and frontend developer specializing in law firm websites. Create "CD Template 3 - High-Stakes Criminal Defense Authority Layout" for criminal defense law firms.

**Template Details:**
- Name: High-Stakes Criminal Defense Authority Layout
- Practice Area: Criminal Defense (complex cases, high-profile, appellate)
- Ideal For: Established multi-attorney firms (5-15 lawyers), major metro markets
- Hero Layout: Layout 3 (Text Left + Attorney Right + Top Banner)

**File Path:**
app/templates/cd/template-3/page.tsx

**Hero Layout Implementation (Layout 3):**
1. Top Banner:
   - Full-width professional banner
   - Right side: "Call Now {{PHONE_NUMBER}}"
   - "Defending Your Rights, Protecting Your Future"

2. Main Hero (Two columns):
   - Left Column:
     - {{HERO_HEADLINE}} ("When Everything Is On The Line")
     - {{HERO_SUBHEADLINE}} ("{{CITY_NAME}}'s Premier {{PRIMARY_PRACTICE_AREA}} Firm")
     - Bullet list:
       - {{BULLET_1}} ("Decades of Combined Experience")
       - {{BULLET_2}} ("Proven Track Record in High-Stakes Cases")
       - {{BULLET_3}} ("Strategic, Aggressive Defense")
     - CTA button ({{PRIMARY_CTA_TEXT}})
     - "Or call {{PHONE_NUMBER}} for immediate consultation"

   - Right Column:
     - {{ATTORNEY_IMAGE}} (team photo or lead attorney)
     - {{ATTORNEY_NAME}} or "Our Defense Team"

3. Bottom Trust Strip:
   - {{AWARDS_LIST}} (Super Lawyers, Best Lawyers, AV Rated)

**Section Structure (in order):**
1. Hero (Layout 3)
2. Navigation (comprehensive, professional)
3. Practice Areas (2-column grid: Federal Crimes, White Collar, RICO, Securities Fraud, Healthcare Fraud, Tax Crimes, Appeals, Post-Conviction Relief)
4. Why Choose Our Firm (multi-attorney resources, complex case experience, national recognition)
5. Attorney Team ({{ATTORNEY_NAME}}, multiple attorney profiles with {{YEARS_OF_EXPERIENCE}})
6. Case Results ({{RESULTS_HIGHLIGHT}} - high-profile dismissals, acquittals, successful appeals)
7. Recognitions & Awards ({{AWARDS_LIST}} - extensive credentials display)
8. Process (5 steps: Confidential Consultation, Team Case Review, Strategic Defense Planning, Aggressive Representation, Post-Trial Support)
9. Social Proof ({{TESTIMONIAL_LIST}} - 4 detailed testimonials from high-stakes clients)
10. Media & Publications (articles, speaking engagements, thought leadership)
11. FAQ ({{FAQ_ITEMS}} - 6 sophisticated questions about complex defense strategies)
12. Contact (professional form + multiple office locations)
13. Footer (comprehensive, multiple locations, awards)

**Design Requirements:**
- Custom CSS only (NO Tailwind)
- BEM naming convention
- Color palette: Charcoal (#2d3748), deep blue (#2c5282), platinum (#e2e8f0), gold accent (#b7791f)
- Sophisticated, premium typography (serif headlines)
- High-end, authoritative aesthetic
- Executive/corporate visual language

**CSS Structure:**
Create separate CSS files in styles/components/:
- hero-authority.module.css
- navigation.module.css
- practice-areas.module.css
- why-choose.module.css
- attorney-team.module.css
- case-results.module.css
- awards.module.css
- process.module.css
- testimonials.module.css
- media.module.css
- faq.module.css
- contact.module.css
- footer.module.css

Use BEM naming:
.hero-authority { }
.hero-authority__banner { }
.hero-authority__content { }
.hero-authority__left { }
.hero-authority__headline { }
.hero-authority__bullets { }
.hero-authority__cta { }
.hero-authority__right { }
.hero-authority__image { }
.hero-authority__trust-strip { }
.attorney-team { }
.attorney-team__grid { }
.attorney-team__profile { }

**Contact Form Requirements:**
- Fields: Name (required), Email (required), Phone (required), Company/Organization, Case Type (dropdown: Federal, White Collar, Appeal, Other), Confidential Case Details (textarea)
- Professional, sophisticated validation
- Comment: /* TODO: Connect to secure client portal API */
- Submit button: {{PRIMARY_CTA_TEXT}}
- Attorney-client privilege notice

**SEO Requirements:**
- One <h1>: "{{CITY_NAME}} Criminal Defense Law Firm | High-Stakes Defense Attorneys"
- <h2> for sections
- <h3> for attorney profiles and practice areas
- Metadata:
  - title: {{PAGE_TITLE}}
  - description: {{META_DESCRIPTION}}

**Placeholders to Use:**
{{PAGE_TITLE}}, {{META_DESCRIPTION}}, {{CITY_NAME}}, {{PRIMARY_PRACTICE_AREA}}, {{HERO_HEADLINE}}, {{HERO_SUBHEADLINE}}, {{BULLET_1}}, {{BULLET_2}}, {{BULLET_3}}, {{PRIMARY_CTA_TEXT}}, {{PHONE_NUMBER}}, {{ATTORNEY_NAME}}, {{ATTORNEY_IMAGE}}, {{YEARS_OF_EXPERIENCE}}, {{RESULTS_HIGHLIGHT}}, {{AWARDS_LIST}}, {{TESTIMONIAL_LIST}}, {{FAQ_ITEMS}}, {{PROCESS_STEPS}}

**Implementation Notes:**
- Premium animations (subtle, sophisticated)
- Multi-attorney profile system
- Award logo grid with hover effects
- Media mentions carousel
- Multi-location contact system
- High-end photography and imagery
- Premium loading states
\`\`\`

---

## Usage Instructions

### How to Use These Prompts

1. **Choose your template** based on firm type and practice area
2. **Copy the entire prompt** (including all specifications)
3. **Paste into Claude Code** and execute
4. **The prompt will generate**:
   - Complete page component (page.tsx)
   - All necessary CSS modules with BEM naming
   - Contact form with validation
   - All sections in proper order
   - SEO-optimized structure

### After Implementation

1. **Replace placeholders** with actual firm data
2. **Upload images** to public/images/
3. **Customize colors** in CSS files if needed
4. **Test responsiveness** on mobile/tablet
5. **Connect contact form** to your email/CRM
6. **Deploy** to production

### Tips

- Each template is independent and won't affect others
- You can implement all 6 templates in the same project
- Prompts use BEM naming exclusively (no Tailwind)
- All forms include validation and accessibility
- Mobile-first responsive design is built-in

---

**Ready to implement? Copy the prompt for your chosen template and get started!**
