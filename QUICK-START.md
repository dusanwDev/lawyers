# Quick Start Guide

Get your law firm landing page template up and running in minutes!

## ⚡ 30-Second Start

```bash
# Install dependencies (if not already done)
npm install

# Start development server
npm run dev
```

Visit **http://localhost:3000** to see all 6 templates!

---

## 🎯 Choose Your Template

Click on any template from the homepage to see the placeholder:

### Personal Injury
- **/templates/pi/template-1** - Compassion & Strength (Attorney + Form)
- **/templates/pi/template-2** - Results-Driven Power (Video + CTA)
- **/templates/pi/template-3** - Local Authority (Text + Attorney)

### Criminal Defense
- **/templates/cd/template-1** - Emergency Defense 24/7 (Video + CTA)
- **/templates/cd/template-2** - Former Prosecutor (Attorney + Form)
- **/templates/cd/template-3** - High-Stakes Authority (Text + Attorney)

---

## 🛠️ Implement a Template

Each template is currently a placeholder. To implement the full template:

### Step 1: Find the Claude Code Prompt

Open `IMPLEMENTATION-GUIDE.md` and find your template's prompt.

Example for **PI Template 1**:
- Search for "PI Template 1 Prompt"
- Copy the entire prompt text

### Step 2: Use Claude Code

Paste the prompt into Claude Code and let it generate:
- Complete page with all sections
- BEM-style CSS modules
- Contact form with validation
- Responsive design
- SEO structure

### Step 3: Customize

Replace all placeholders with your firm's actual data:

```typescript
// Example replacements
{{CITY_NAME}} → "Miami"
{{PHONE_NUMBER}} → "(305) 555-1234"
{{ATTORNEY_NAME}} → "John Smith, Esq."
{{HERO_HEADLINE}} → "Injured in Miami? Get the Compensation You Deserve"
```

See the **Customization Checklist** in `IMPLEMENTATION-GUIDE.md` for all required changes.

---

## 📸 Add Your Images

Upload attorney photos and assets:

```
public/images/
  ├── attorneys/
  │   └── john-smith.jpg       # Attorney headshot
  ├── backgrounds/
  │   ├── hero-bg.jpg          # Hero background
  │   └── hero-video.mp4       # Hero video (for Layout 2)
  └── logos/
      └── firm-logo.png        # Your firm logo
```

**Image Requirements:**
- **Attorney Photos**: 1200x1600px, JPG/WebP, < 500KB
- **Backgrounds**: 1920x1080px, JPG/WebP, < 1MB
- **Videos**: 1920x1080px MP4, 15-30sec loop, < 5MB
- **Logo**: PNG transparent, 200x200px min

---

## 🎨 Customize Colors

Edit `app/globals.css` to change your brand colors:

```css
:root {
  /* Change these to your firm colors */
  --pi-navy: #1a365d;          /* Primary color */
  --pi-gold: #d4a574;          /* Accent color */

  --cd-midnight: #1a202c;      /* Primary color */
  --cd-urgent-red: #e53e3e;    /* Accent color */
}
```

---

## 📬 Connect Your Contact Form

Each template has a contact form. Connect it to your email/CRM:

### Option 1: Email (FormSpree - Free)

1. Sign up at https://formspree.io
2. Get your form endpoint
3. Update the form in your template:

```typescript
const handleSubmit = async (e: FormEvent) => {
  e.preventDefault()
  await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
}
```

### Option 2: Custom API

Create `app/api/contact/route.ts`:

```typescript
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const data = await request.json()

  // Send email via SendGrid, Resend, etc.
  // Or save to database
  // Or integrate with your CRM

  return NextResponse.json({ success: true })
}
```

---

## 🚀 Deploy to Production

### Deploy to Vercel (Free)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts to deploy
```

Or connect your GitHub repo to Vercel for automatic deployments.

### Other Deployment Options

- **Netlify**: Connect GitHub repo
- **AWS Amplify**: Use AWS console
- **DigitalOcean**: App Platform
- **Self-hosted**: Run `npm run build && npm start`

---

## 📋 Production Checklist

Before going live:

- [ ] All {{PLACEHOLDERS}} replaced with real data
- [ ] Attorney photos uploaded and optimized
- [ ] Contact form connected to email/CRM
- [ ] Phone numbers are click-to-call on mobile
- [ ] Google Analytics added (optional)
- [ ] Favicon added
- [ ] Meta tags updated for SEO
- [ ] Test on mobile devices
- [ ] Test all links work
- [ ] Privacy policy page added (required)
- [ ] Disclaimer text reviewed by compliance

---

## 🆘 Troubleshooting

### Port already in use?

```bash
# Kill process on port 3000
npx kill-port 3000

# Or use a different port
npm run dev -- -p 3001
```

### Build errors?

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules
npm install

# Rebuild
npm run build
```

### Images not loading?

- Ensure images are in `public/images/`
- Use paths like `/images/attorneys/name.jpg` (leading slash)
- Check file names match exactly (case-sensitive)

---

## 📚 Next Steps

1. ✅ **Choose your template** from the 6 options
2. ✅ **Implement using Claude Code** (see IMPLEMENTATION-GUIDE.md)
3. ✅ **Customize** with your firm's data
4. ✅ **Add images** and branding
5. ✅ **Test** locally
6. ✅ **Deploy** to production
7. ✅ **Market** your new landing page!

---

## 💡 Pro Tips

- **Mobile First**: 60%+ of legal searches are on mobile
- **Fast Loading**: Optimize all images before uploading
- **Clear CTA**: Make phone number and contact form prominent
- **Social Proof**: Real testimonials convert better than stock photos
- **Local SEO**: Include city name throughout content
- **Trust Signals**: Display bar certifications and awards
- **Video**: Consider adding a short introduction video

---

**Need help? Check:**
- `README.md` - Full project documentation
- `IMPLEMENTATION-GUIDE.md` - Detailed implementation steps
- `public/images/README.md` - Image specifications

**Ready to build? Start with:**
```bash
npm run dev
```

Then open http://localhost:3000 and choose your template!
