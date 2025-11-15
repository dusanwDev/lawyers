# Law Firm Landing Page Templates

Professional, conversion-optimized landing page templates for **Personal Injury** and **Criminal Defense** law firms built with **Next.js 14**, **TypeScript**, and **Custom CSS** (BEM naming conventions).

## 🎯 Overview

This project contains **6 reusable landing page templates** designed specifically for U.S. law firms:

### Personal Injury Templates
1. **Compassion & Strength** - Layout 1 (Attorney + Form)
2. **Results-Driven Power** - Layout 2 (Video + CTA)
3. **Local Authority** - Layout 3 (Text + Attorney)

### Criminal Defense Templates
4. **Emergency Defense 24/7** - Layout 2 (Video + CTA)
5. **Former Prosecutor** - Layout 1 (Attorney + Form)
6. **High-Stakes Authority** - Layout 3 (Text + Attorney)

## 🚀 Getting Started

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to see the template gallery.

## 📁 Project Structure

```
lawyers/
├── app/
│   ├── templates/
│   │   ├── pi/
│   │   │   ├── template-1/page.tsx  # Compassion & Strength
│   │   │   ├── template-2/page.tsx  # Results-Driven Power
│   │   │   └── template-3/page.tsx  # Local Authority
│   │   └── cd/
│   │       ├── template-1/page.tsx  # Emergency Defense 24/7
│   │       ├── template-2/page.tsx  # Former Prosecutor
│   │       └── template-3/page.tsx  # High-Stakes Authority
│   ├── layout.tsx
│   ├── page.tsx                     # Template gallery/index
│   └── globals.css
├── styles/
│   └── components/                  # Component-specific CSS modules
├── public/
│   └── images/                      # Image assets
└── README.md
```

## 🎨 Template Routes

| Template | Route | Hero Layout |
|----------|-------|-------------|
| **PI Template 1** | `/templates/pi/template-1` | Layout 1: Attorney Left + Form Right |
| **PI Template 2** | `/templates/pi/template-2` | Layout 2: Video Background + CTA |
| **PI Template 3** | `/templates/pi/template-3` | Layout 3: Text Left + Attorney Right |
| **CD Template 1** | `/templates/cd/template-1` | Layout 2: Video Background + CTA |
| **CD Template 2** | `/templates/cd/template-2` | Layout 1: Attorney Left + Form Right |
| **CD Template 3** | `/templates/cd/template-3` | Layout 3: Text Left + Attorney Right |

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Custom CSS with BEM naming conventions
- **CSS Modules**: Isolated component styles
- **No Tailwind CSS**: Pure custom CSS approach

## 📋 Template Implementation Guide

Each template can be implemented using the provided Claude Code prompts. To implement a specific template:

### Step 1: Choose Your Template

Select from the 6 available templates based on your firm type:

#### Personal Injury
- **Template 1**: Solo/small firms (2-5 attorneys) - Compassionate approach
- **Template 2**: Established firms (5-20 attorneys) - Results-focused
- **Template 3**: Local firms (1-3 attorneys) - Community-based

#### Criminal Defense
- **Template 1**: Emergency response firms - 24/7 availability
- **Template 2**: Trial attorneys - Prosecutorial background
- **Template 3**: Premium firms (5-15 attorneys) - Complex cases

### Step 2: Use the Claude Code Prompt

Each template has a complete Claude Code prompt that includes:
- Full hero layout implementation
- All required sections (10+ sections per template)
- BEM CSS naming conventions
- Contact form with validation
- SEO-optimized structure
- Responsive design
- Accessibility features

### Step 3: Customize Placeholders

Replace these placeholders with actual firm data:

```typescript
{{PAGE_TITLE}}              // "Miami Car Accident Lawyer | Free Consultation"
{{META_DESCRIPTION}}        // SEO description
{{CITY_NAME}}              // "Miami"
{{PRIMARY_PRACTICE_AREA}}  // "Personal Injury" or "Criminal Defense"
{{HERO_HEADLINE}}          // Main hero headline
{{HERO_SUBHEADLINE}}       // Supporting headline
{{PRIMARY_CTA_TEXT}}       // "Get Your Free Consultation"
{{PHONE_NUMBER}}           // "(555) 123-4567"
{{ATTORNEY_NAME}}          // "John Doe, Esq."
{{ATTORNEY_IMAGE}}         // "/images/attorneys/john-doe.jpg"
{{YEARS_OF_EXPERIENCE}}    // "25+ Years"
{{RESULTS_HIGHLIGHT}}      // "$500M+ Recovered"
{{AWARDS_LIST}}            // Array of awards
{{TESTIMONIAL_LIST}}       // Array of testimonials
{{FAQ_ITEMS}}             // Array of FAQ items
{{PROCESS_STEPS}}         // Array of process steps
```

## 🎯 Hero Layout Reference

### Layout 1: Attorney Left + Form Right + Top Banner
- **Top Banner**: Full-width with phone CTA
- **Left Column**: Attorney image + credentials
- **Right Column**: Headline + form
- **Bottom Trust Bar**: Awards, experience, results
- **Best For**: Building personal trust and immediate lead capture

### Layout 2: Centered Video Background + Call Button + Achievements
- **Background**: Full-screen looping video with overlay
- **Centered Content**: Bold headline + subheadline
- **Giant CTA**: Prominent call button (tel: link)
- **Achievements Row**: Key stats and credentials
- **Best For**: High-impact, results-driven messaging

### Layout 3: Text Left + Attorney Right + Top Banner
- **Top Banner**: Full-width with urgency message
- **Left Column**: Headline + bullets + CTA
- **Right Column**: Attorney/team image
- **Bottom Trust Strip**: Awards and credentials
- **Best For**: Information-first, authority-building approach

## 🎨 CSS Architecture

### BEM Naming Convention

All CSS uses Block-Element-Modifier (BEM) methodology:

```css
/* Block */
.hero { }

/* Elements */
.hero__banner { }
.hero__content { }
.hero__headline { }
.hero__form { }

/* Modifiers */
.hero--dark { }
.hero__button--primary { }
```

### CSS Custom Properties

Global CSS variables are defined in `app/globals.css`:

```css
/* Personal Injury Colors */
--pi-navy: #1a365d;
--pi-gold: #d4a574;

/* Criminal Defense Colors */
--cd-midnight: #1a202c;
--cd-urgent-red: #e53e3e;

/* Spacing */
--spacing-sm: 1rem;
--spacing-md: 1.5rem;
--spacing-lg: 2rem;
```

## 📱 Responsive Design

All templates are mobile-first and fully responsive:
- **Desktop**: 1200px+ (full layout)
- **Tablet**: 768px-1199px (adapted layout)
- **Mobile**: < 768px (stacked, optimized)

## ♿ Accessibility

All templates include:
- Semantic HTML5 elements
- ARIA labels where appropriate
- Keyboard navigation support
- Screen reader optimization
- Color contrast compliance (WCAG 2.1 AA)
- Focus indicators

## 🔍 SEO Features

Each template includes:
- Proper heading hierarchy (one H1, multiple H2s, H3s)
- Meta tags (title, description)
- Semantic HTML
- Fast page load (Next.js optimization)
- Mobile-friendly design
- LocalBusiness schema markup (for local firms)

## 📞 Contact Form Features

All contact forms include:
- Required field validation
- Email format validation
- Phone number validation
- Accessible error messages
- Privacy/confidentiality notices
- Placeholder for API endpoint integration

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Deploy to Vercel
npx vercel

# Or connect your GitHub repository for automatic deployments
```

### Other Platforms

This Next.js project can be deployed to:
- **Netlify**
- **AWS Amplify**
- **DigitalOcean App Platform**
- **Self-hosted** (Node.js server)

## 📝 Customization Tips

### Changing Colors

Edit `app/globals.css` to modify the color palette:

```css
:root {
  --pi-navy: #YOUR_COLOR;
  --pi-gold: #YOUR_COLOR;
}
```

### Adding Images

1. Place images in `public/images/`
2. Use Next.js Image component:

```tsx
import Image from 'next/image'

<Image
  src="/images/attorneys/attorney-name.jpg"
  alt="Attorney Name"
  width={1200}
  height={1600}
  priority
/>
```

### Connecting Forms

Replace the form submission placeholder:

```typescript
// In each template's form component
const handleSubmit = async (e: FormEvent) => {
  e.preventDefault()
  // TODO: Connect to your CRM/email API
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(formData)
  })
}
```

## 📄 License

This project is proprietary. All templates are designed for law firm use.

## 🤝 Support

For questions or customization requests, refer to the Claude Code prompts included for each template.

---

**Built with Next.js 14, TypeScript, and Custom CSS**
**No Tailwind CSS • BEM Naming • Conversion-Optimized**
