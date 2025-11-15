# Quick Customization Guide

Your templates are now ready to customize! Here's how to get started.

## 🎨 Available Color Palettes

### Personal Injury Colors (PI)
```css
--pi-navy: #1a365d          /* Dark professional blue */
--pi-gold: #d4a574          /* Trust & premium gold */
--pi-blue: #2c5282          /* Medium blue */
--pi-orange: #ed8936        /* Action orange */
--pi-charcoal: #2d3748      /* Dark gray/charcoal */
--pi-electric-blue: #3182ce /* Bright blue */
--pi-accent-gold: #ecc94b   /* Light gold */
```

### Criminal Defense Colors (CD)
```css
--cd-midnight: #1a202c      /* Very dark blue/black */
--cd-urgent-red: #e53e3e    /* Emergency red */
--cd-silver: #718096        /* Professional silver */
--cd-deep-navy: #1e3a5f     /* Deep navy */
--cd-burgundy: #9b2c2c      /* Deep red */
--cd-gold: #d69e2e          /* Gold accent */
--cd-platinum: #e2e8f0      /* Light silver */
--cd-charcoal: #2d3748      /* Charcoal gray */
--cd-deep-blue: #2c5282     /* Deep blue */
```

## 📁 Where to Customize

### Personal Injury Templates:
- **Template 1**: `app/templates/pi/template-1/template-1.css`
- **Template 2**: `app/templates/pi/template-2/template-2.css`
- **Template 3**: `app/templates/pi/template-3/template-3.css`

### Criminal Defense Templates:
- **Template 1**: `app/templates/cd/template-1/template-1.css`
- **Template 2**: `app/templates/cd/template-2/template-2.css`
- **Template 3**: `app/templates/cd/template-3/template-3.css`

## ⚡ Quick Customization Examples

### Change Hero Background Color
```css
.hero-layout-1__banner {
  background-color: #2c5282;  /* Use PI blue */
}
```

### Add Gradient Background
```css
.hero-layout-2 {
  background: linear-gradient(135deg, var(--pi-navy), var(--pi-blue));
}
```

### Customize Phone Number
```css
.hero-layout-1__phone {
  color: var(--pi-gold);
  font-size: 1.5rem;
  font-weight: 700;
}
```

### Style Practice Area Cards
```css
.practice-area {
  border: 2px solid var(--pi-gold);
  background: white;
  border-radius: 12px;
}

.practice-area:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
  border-color: var(--pi-orange);
}
```

### Customize Button
```css
.btn--primary {
  background: linear-gradient(135deg, var(--pi-orange), var(--pi-electric-blue));
  font-size: 1.25rem;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  box-shadow: 0 4px 15px rgba(237, 137, 54, 0.4);
}

.btn--primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(237, 137, 54, 0.6);
}
```

### Dark Theme Section
```css
.testimonials {
  background: linear-gradient(180deg, var(--pi-navy), var(--pi-charcoal));
}

.testimonials__title {
  color: white;
}

.testimonial {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

## 🎯 Common Customizations

### 1. Change All Primary Colors
```css
/* In your template-X.css file */
.hero-layout-1__headline,
.practice-areas__title,
.attorney-bio__name {
  color: var(--pi-navy);
}
```

### 2. Add Hover Effects
```css
.practice-area {
  transition: all 0.3s ease;
}

.practice-area:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}
```

### 3. Customize Typography
```css
.hero-layout-1__headline {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
}
```

### 4. Change Section Spacing
```css
.practice-areas {
  padding: 6rem 0;  /* More breathing room */
}
```

### 5. Add Background Patterns
```css
.practice-areas {
  background-color: #f8f9fa;
  background-image:
    linear-gradient(30deg, #f0f0f0 12%, transparent 12.5%, transparent 87%, #f0f0f0 87.5%, #f0f0f0),
    linear-gradient(150deg, #f0f0f0 12%, transparent 12.5%, transparent 87%, #f0f0f0 87.5%, #f0f0f0);
  background-size: 80px 140px;
}
```

## 🛠️ Useful CSS Variables

### Spacing
```css
var(--spacing-xs)   /* 0.5rem / 8px */
var(--spacing-sm)   /* 1rem / 16px */
var(--spacing-md)   /* 1.5rem / 24px */
var(--spacing-lg)   /* 2rem / 32px */
var(--spacing-xl)   /* 3rem / 48px */
var(--spacing-2xl)  /* 4rem / 64px */
var(--spacing-3xl)  /* 6rem / 96px */
```

### Font Sizes
```css
var(--font-size-xs)   /* 0.75rem */
var(--font-size-sm)   /* 0.875rem */
var(--font-size-base) /* 1rem */
var(--font-size-lg)   /* 1.125rem */
var(--font-size-xl)   /* 1.25rem */
var(--font-size-2xl)  /* 1.5rem */
var(--font-size-3xl)  /* 2rem */
var(--font-size-4xl)  /* 2.5rem */
```

### Border Radius
```css
var(--border-radius-sm)  /* 4px */
var(--border-radius-md)  /* 8px */
var(--border-radius-lg)  /* 12px */
var(--border-radius-xl)  /* 16px */
```

### Shadows
```css
var(--shadow-sm)  /* Subtle shadow */
var(--shadow-md)  /* Medium shadow */
var(--shadow-lg)  /* Large shadow */
var(--shadow-xl)  /* Extra large shadow */
```

## 📱 Testing Your Changes

1. **Save your CSS file**
2. **Refresh the browser** (or let Next.js hot-reload)
3. **Check on different screen sizes**:
   - Desktop (1200px+)
   - Tablet (768px - 1199px)
   - Mobile (< 768px)

## 💡 Pro Tips

1. **Start Small**: Change one thing at a time to see the effect
2. **Use Comments**: Document why you made changes
3. **Test Colors**: Use a color contrast checker for accessibility
4. **Backup First**: Save a copy before making major changes
5. **Use DevTools**: Chrome/Firefox inspector helps identify class names

## 🔥 Ready-to-Use Color Schemes

### Professional Blue & Gold
```css
--color-primary: #1a365d
--color-secondary: #d4a574
--color-accent: #ed8936
```

### Bold Red & Gray
```css
--color-primary: #9b2c2c
--color-secondary: #718096
--color-accent: #e53e3e
```

### Modern Navy & Orange
```css
--color-primary: #1e3a5f
--color-secondary: #d69e2e
--color-accent: #3182ce
```

## 🚀 Next Steps

1. Open `app/templates/pi/template-1/template-1.css`
2. Find the section you want to customize
3. Uncomment the styles you like (remove `/*` and `*/`)
4. Modify the values to your preference
5. Save and see the changes!

Happy customizing! 🎨
