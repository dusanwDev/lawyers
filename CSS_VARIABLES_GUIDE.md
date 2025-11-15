# CSS Custom Properties Guide - Per-Template Customization

## 🎯 How It Works

The hero.css (and other component files) now use **CSS custom properties** with fallback values. This means you can customize each template by simply setting variables, without needing to override specific CSS properties!

## 📝 Basic Syntax

```css
/* In hero.css (base) */
.hero-layout-1__headline {
  font-size: var(--hero-1-headline-size, var(--font-size-3xl));
  /*         ↑ Custom variable          ↑ Fallback if not set */
}

/* In your template CSS */
.hero-layout-1 {
  --hero-1-headline-size: 4rem; /* Override the default! */
}
```

## 🎨 Available Hero Layout 1 Variables

### Banner Section
```css
--hero-1-banner-bg              /* Background (color or gradient) */
--hero-1-banner-text            /* Text color */
--hero-1-banner-padding         /* Padding around banner */
--hero-1-banner-shadow          /* Box shadow */
```

### Phone Number
```css
--hero-1-phone-color            /* Phone number color */
--hero-1-phone-size             /* Font size */
--hero-1-phone-weight           /* Font weight */
--hero-1-phone-shadow           /* Text shadow */
--hero-1-phone-hover            /* Hover color */
--hero-1-phone-hover-transform  /* Hover transform (e.g., scale(1.05)) */
```

### Headlines
```css
--hero-1-headline-color         /* Main headline color */
--hero-1-headline-size          /* Font size */
--hero-1-headline-weight        /* Font weight */
--hero-1-headline-shadow        /* Text shadow */

--hero-1-subheadline-color      /* Subheadline color */
--hero-1-subheadline-size       /* Font size */
```

### Attorney Image
```css
--hero-1-image-border           /* Image border */
--hero-1-image-radius           /* Border radius */
--hero-1-image-shadow           /* Box shadow */
--hero-1-image-transition       /* Transition property */
--hero-1-image-hover-transform  /* Hover transform */
```

### Trust Bar
```css
--hero-1-trust-bg               /* Background */
--hero-1-trust-padding          /* Padding */
--hero-1-trust-border           /* Border (usually top) */
--hero-1-trust-shadow           /* Box shadow */

--hero-1-trust-icon-color       /* Icon color */

--hero-1-trust-value-color      /* Value color (numbers) */
--hero-1-trust-value-size       /* Font size */
--hero-1-trust-value-weight     /* Font weight */
--hero-1-trust-value-shadow     /* Text shadow */

--hero-1-trust-label-color      /* Label color */
--hero-1-trust-label-size       /* Font size */
--hero-1-trust-label-transform  /* Text transform */
--hero-1-trust-label-spacing    /* Letter spacing */
```

## 💡 Complete Template Example

### PI Template (Professional Blue & Gold)
```css
.hero-layout-1 {
  /* Banner - Gradient navy to blue */
  --hero-1-banner-bg: linear-gradient(90deg, #1a365d, #2c5282);
  --hero-1-banner-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  /* Phone - Gold with hover effect */
  --hero-1-phone-color: #ecc94b;
  --hero-1-phone-size: 1.35rem;
  --hero-1-phone-hover: #d4a574;
  --hero-1-phone-hover-transform: scale(1.05);

  /* Headline - Large navy */
  --hero-1-headline-color: #1a365d;
  --hero-1-headline-size: 3.25rem;
  --hero-1-headline-weight: 800;

  /* Image - Gold border */
  --hero-1-image-border: 5px solid #d4a574;
  --hero-1-image-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  --hero-1-image-hover-transform: scale(1.02);

  /* Trust Bar - Dark gradient */
  --hero-1-trust-bg: linear-gradient(135deg, #1a365d, #2c5282);
  --hero-1-trust-value-color: #ecc94b;
  --hero-1-trust-value-size: 2.25rem;
}
```

### CD Template (Urgent Red & Dark)
```css
.hero-layout-1 {
  /* Banner - Very dark */
  --hero-1-banner-bg: linear-gradient(90deg, #1a202c, #1e3a5f);
  --hero-1-banner-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

  /* Phone - URGENT RED */
  --hero-1-phone-color: #e53e3e;
  --hero-1-phone-size: 1.5rem;
  --hero-1-phone-weight: 800;
  --hero-1-phone-hover: #d69e2e;
  --hero-1-phone-hover-transform: scale(1.08);

  /* Headline - Strong & commanding */
  --hero-1-headline-color: #1a202c;
  --hero-1-headline-size: 3rem;
  --hero-1-headline-weight: 900;

  /* Image - Red border for urgency */
  --hero-1-image-border: 6px solid #e53e3e;
  --hero-1-image-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);

  /* Trust Bar - Dark with red accents */
  --hero-1-trust-bg: linear-gradient(135deg, #1a202c, #2d3748);
  --hero-1-trust-value-color: #e53e3e;
  --hero-1-trust-value-size: 2.5rem;
  --hero-1-trust-value-weight: 900;
}
```

## 🚀 Quick Customizations

### Make Phone Number Bigger & Bolder
```css
.hero-layout-1 {
  --hero-1-phone-size: 2rem;
  --hero-1-phone-weight: 900;
}
```

### Change Trust Bar to Light Theme
```css
.hero-layout-1 {
  --hero-1-trust-bg: #ffffff;
  --hero-1-trust-value-color: #1a365d;
  --hero-1-trust-label-color: #4a5568;
}
```

### Add Dramatic Image Border
```css
.hero-layout-1 {
  --hero-1-image-border: 8px solid gold;
  --hero-1-image-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
  --hero-1-image-hover-transform: scale(1.05) rotate(2deg);
}
```

### Create Gradient Text Shadow
```css
.hero-layout-1 {
  --hero-1-headline-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
  --hero-1-trust-value-shadow: 4px 4px 8px rgba(229, 62, 62, 0.4);
}
```

## 📋 Best Practices

1. **Always set variables on the parent element** (`.hero-layout-1`)
2. **Use CSS variables from globals.css** for consistency (e.g., `var(--pi-navy)`)
3. **Test on multiple screen sizes** - variables work on all breakpoints
4. **Comment your customizations** - explain why you made changes
5. **Group related variables** together for readability

## 🎨 Color Scheme Templates

### Professional & Trustworthy
```css
--hero-1-banner-bg: linear-gradient(90deg, #1a365d, #2c5282);
--hero-1-phone-color: #d4a574;
--hero-1-headline-color: #1a365d;
```

### Bold & Urgent
```css
--hero-1-banner-bg: linear-gradient(90deg, #1a202c, #000000);
--hero-1-phone-color: #e53e3e;
--hero-1-headline-color: #1a202c;
```

### Modern & Clean
```css
--hero-1-banner-bg: linear-gradient(90deg, #f7fafc, #ffffff);
--hero-1-phone-color: #3182ce;
--hero-1-headline-color: #2d3748;
```

## 🔥 Advanced Techniques

### Animated Gradient Background
```css
.hero-layout-1 {
  --hero-1-banner-bg: linear-gradient(
    270deg,
    #1a365d,
    #2c5282,
    #3182ce
  );
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

### Layered Shadows
```css
.hero-layout-1 {
  --hero-1-image-shadow:
    0 10px 20px rgba(0, 0, 0, 0.15),
    0 20px 40px rgba(0, 0, 0, 0.1),
    0 30px 60px rgba(0, 0, 0, 0.05);
}
```

### Responsive Variables (Future Enhancement)
```css
/* You can even make variables respond to screen size */
@media (max-width: 768px) {
  .hero-layout-1 {
    --hero-1-headline-size: 2rem;
    --hero-1-phone-size: 1.25rem;
  }
}
```

## 🎯 Next Steps

1. Choose a template to customize
2. Open its CSS file (e.g., `app/templates/pi/template-1/template-1.css`)
3. Set variables inside `.hero-layout-1 { }`
4. Save and see changes immediately!

Happy customizing! 🚀
