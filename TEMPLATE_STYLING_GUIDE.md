# Template Styling Guide

Each template now has its own separate CSS file that you can customize independently!

## File Structure

```
app/
├── templates/
│   ├── pi/
│   │   ├── template-1/
│   │   │   ├── page.tsx
│   │   │   └── template-1.css  ← Customize PI Template 1 here
│   │   ├── template-2/
│   │   │   ├── page.tsx
│   │   │   └── template-2.css  ← Customize PI Template 2 here
│   │   └── template-3/
│   │       ├── page.tsx
│   │       └── template-3.css  ← Customize PI Template 3 here
│   └── cd/
│       ├── template-1/
│       │   ├── page.tsx
│       │   └── template-1.css  ← Customize CD Template 1 here
│       ├── template-2/
│       │   ├── page.tsx
│       │   └── template-2.css  ← Customize CD Template 2 here
│       └── template-3/
│           ├── page.tsx
│           └── template-3.css  ← Customize CD Template 3 here
```

## How It Works

1. **Base Styles**: All templates still share the base component styles from `styles/components/`
2. **Template-Specific Styles**: Each template has its own CSS file that overrides or extends the base styles
3. **CSS Cascade**: Template-specific styles are loaded AFTER base styles, so they take priority

## How to Customize

### Example 1: Change Colors for a Specific Template

Open `app/templates/pi/template-1/template-1.css` and add:

```css
/* Change the primary color for this template only */
.hero-layout-1__headline {
  color: #2C5F2D;  /* Custom green instead of default */
}

.hero-layout-1__banner {
  background-color: #1A3A1B;  /* Dark green banner */
}
```

### Example 2: Adjust Spacing

```css
/* Make the hero section taller */
.hero-layout-1__content {
  padding: 6rem 0;  /* More padding top/bottom */
}
```

### Example 3: Change Fonts

```css
/* Use a different font for headlines */
.hero-layout-1__headline {
  font-family: 'Georgia', serif;
  font-size: 3.5rem;
}
```

### Example 4: Modify Background Colors

```css
/* Change section backgrounds */
.practice-areas {
  background-color: #F0F8F0;  /* Light green */
}

.testimonials {
  background-color: #E8F4E8;  /* Lighter green */
}
```

### Example 5: Customize Buttons

```css
/* Style the call button differently */
.hero-layout-2__call-btn {
  background-color: #FF6B35;  /* Orange button */
  color: white;
  font-size: 2rem;
  padding: 2rem 3rem;
  border-radius: 50px;  /* Very rounded */
}

.hero-layout-2__call-btn:hover {
  background-color: #FF8555;
  transform: scale(1.1);
}
```

## Important Notes

1. **Specificity**: The template CSS files are loaded last, so they override base styles
2. **BEM Classes**: Use the same BEM class names that are in the templates
3. **CSS Variables**: You can still use CSS variables from `styles/globals.css`
4. **No Conflicts**: Changes in one template CSS file won't affect other templates

## CSS Variables Available

You can use these variables in your custom styles:

```css
/* Colors */
var(--color-primary)
var(--color-primary-dark)
var(--color-secondary)
var(--color-accent)

/* Spacing */
var(--spacing-xs)
var(--spacing-sm)
var(--spacing-md)
var(--spacing-lg)
var(--spacing-xl)
var(--spacing-2xl)
var(--spacing-3xl)

/* Font Sizes */
var(--font-size-base)
var(--font-size-lg)
var(--font-size-xl)
var(--font-size-2xl)
var(--font-size-3xl)
var(--font-size-4xl)

/* And many more in styles/globals.css */
```

## Tips

1. **Start Small**: Override one property at a time to see the effect
2. **Use Browser DevTools**: Inspect elements to see which classes to target
3. **Keep Base Styles**: Don't delete the base CSS files in `styles/components/`
4. **Test Responsive**: Check your changes on mobile, tablet, and desktop
5. **Comment Your Code**: Add comments explaining why you made changes

## Example: Complete Template Customization

Here's a full example of customizing PI Template 1 with a green legal theme:

```css
/* PI Template 1 - Green Legal Theme */

/* Hero Section */
.hero-layout-1__banner {
  background-color: #1B4332;
}

.hero-layout-1__headline {
  color: #1B4332;
  font-size: 3.5rem;
  font-weight: 700;
}

.hero-layout-1__phone {
  color: #52B788;
}

/* Practice Areas */
.practice-areas {
  background-color: #F1FAEE;
}

.practice-area {
  border: 2px solid #52B788;
  background-color: white;
}

.practice-area:hover {
  background-color: #D8F3DC;
  transform: translateY(-5px);
}

/* Testimonials */
.testimonials {
  background-color: #D8F3DC;
}

.testimonial {
  background-color: white;
  border-left: 4px solid #52B788;
}

/* CTA Buttons */
.btn--primary {
  background-color: #52B788;
  color: white;
}

.btn--primary:hover {
  background-color: #40916C;
}
```

## Need Help?

- Check the base styles in `styles/components/` to see all available classes
- Look at the template files to see which classes are used
- Use your browser's developer tools to inspect elements
- Start with small changes and build up

Happy customizing!
