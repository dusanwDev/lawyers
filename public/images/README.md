# Image Assets

## Directory Structure

```
public/images/
  ├── placeholders/         # Placeholder images for templates
  ├── attorneys/           # Attorney photos
  ├── backgrounds/         # Hero background images and videos
  └── logos/              # Firm logos and badges
```

## Placeholder Images Needed

### For All Templates
- **Attorney Photos**: Professional headshots (1200x1600px recommended)
- **Background Images**: Hero backgrounds (1920x1080px minimum)
- **Background Videos**: Hero video backgrounds (.mp4, .webm formats)
- **Team Photos**: Group photos for multi-attorney templates
- **Award Badges**: Professional association logos (transparent PNG)

### Image Specifications

#### Attorney Photos
- Format: JPG or WebP
- Dimensions: 1200x1600px (portrait) or 1600x1200px (landscape)
- File size: < 500KB (optimized)
- Professional, high-quality headshots

#### Background Images
- Format: JPG or WebP
- Dimensions: 1920x1080px minimum (Full HD)
- File size: < 1MB (optimized)
- High contrast for text overlay

#### Background Videos
- Format: MP4 (H.264) and WebM
- Dimensions: 1920x1080px (Full HD)
- Length: 15-30 seconds looping
- File size: < 5MB
- Muted (no audio needed)

#### Award Badges & Logos
- Format: PNG (transparent) or SVG
- Dimensions: 200x200px minimum
- File size: < 100KB

## Placeholder Image Services

For development, you can use:
- **Unsplash**: https://unsplash.com/ (free high-quality images)
- **Pexels**: https://pexels.com/ (free stock photos and videos)
- **Pixabay**: https://pixabay.com/ (free images and videos)

## Next.js Image Optimization

All images should be imported using Next.js Image component for automatic optimization:

```tsx
import Image from 'next/image'

<Image
  src="/images/attorneys/john-doe.jpg"
  alt="John Doe, Personal Injury Attorney"
  width={1200}
  height={1600}
  priority={true} // For above-fold images
/>
```

## Copyright Notice

Ensure all images used have proper licensing:
- Client-provided photos (with permission)
- Licensed stock photography
- Creative Commons (with attribution if required)
- Original photography

Never use copyrighted images without permission.
