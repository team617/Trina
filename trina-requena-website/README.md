# Trina Requena - Integrative Alignment Guide Website

A beautiful, SEO-optimized website built for Trina Requena, ready to be recreated in WordPress with Elementor Pro.

## 📁 Folder Structure

```
trina-requena-website/
├── index.html          # Homepage
├── about.html          # About / Trina's Story
├── services.html       # Services (Group Yoga, 1:1 Yoga, Coaching)
├── approach.html       # The Three Pillars approach
├── contact.html        # Contact page with Calendly integration
├── css/
│   └── styles.css      # All brand styles
├── js/
│   └── main.js         # JavaScript functionality
└── assets/
    ├── fonts/          # Place your Rustique Serif font files here
    ├── images/         # Place all images and logos here
    └── backgrounds/    # Place texture/watercolor backgrounds here
```

## 🚀 Quick Start

### Step 1: Add Your Fonts
Place your **Rustique Serif** font files in `assets/fonts/`:
- `RustiqueSerif-Regular.woff2` (preferred)
- `RustiqueSerif-Regular.woff` (fallback)
- `RustiqueSerif-Regular.otf` (fallback)

> If your font files have different names, update the `@font-face` section in `css/styles.css`

### Step 2: Add Your Images
Place these files in `assets/images/`:

**Logos (from your brand kit):**
- `Logosuite_primary_Horizontal.svg` - Main logo
- `picture-mark.svg` - The spiral icon
- `quote_spiral_2.svg` - Decorative spiral
- `favicon.svg` - Browser tab icon

**Photos (add your own):**
- `trina-portrait.jpg` - Trina's portrait (homepage)
- `trina-portrait-large.jpg` - Larger portrait (about page)
- `service-group-yoga.jpg` - Group yoga image
- `service-private-yoga.jpg` - 1:1 yoga image
- `service-coaching.jpg` - Coaching image
- `approach-spiral.jpg` - Image for approach page

**Social sharing images:**
- `og-image.jpg` (1200x630px) - Default social share image
- `og-about.jpg` - About page social image
- `og-services.jpg` - Services page social image
- `og-contact.jpg` - Contact page social image

### Step 3: Add Your Backgrounds
Place these in `assets/backgrounds/`:
- `fabric-texture.jpg` - The fabric texture
- `watercolor-hero.jpg` - Watercolor background for hero
- `watercolor-texture.jpg` - General watercolor texture

### Step 4: Configure Calendly
Open `contact.html` and find these lines:

```html
data-url="https://calendly.com/YOUR_CALENDLY_USERNAME/onboarding-call..."
```

Replace `YOUR_CALENDLY_USERNAME` with your actual Calendly username.

### Step 5: Update Contact Info
In all HTML files, update:
- Email address: `hello@trinarequena.com`
- Instagram link: `https://instagram.com/trinarequena`
- Website URL in SEO meta tags

## 🎨 Brand Colors (CSS Variables)

```css
--white-coral: #f8f0e9;   /* Light background */
--soft-clay: #c09c80;     /* Accent warm */
--dark-kakao: #34231a;    /* Dark text/backgrounds */
--warm-sand: #d1bca8;     /* Secondary background */
--deep-reef: #014544;     /* Primary accent (CTA buttons) */
--soft-sea: #abc6b5;      /* Light accent */
```

## 📝 Typography

- **Headlines:** Rustique Serif (72pt titles, 40pt headings)
- **Body Text:** Inter Light (16pt, 120% line-height, 10% letter-spacing)
- **Sublines:** Inter Light (16pt, uppercase, 15% letter-spacing)

## 🔍 SEO Features Included

- ✅ Semantic HTML5 structure
- ✅ Optimized meta titles & descriptions
- ✅ Open Graph tags for social sharing
- ✅ Schema.org structured data (Person)
- ✅ Proper heading hierarchy (H1 → H6)
- ✅ Alt text placeholders for images
- ✅ Fast-loading optimizations

## 📱 Responsive Design

The website is fully responsive:
- **Desktop:** 1200px max-width
- **Tablet:** Adjusts at 1024px
- **Mobile:** Full mobile optimization at 768px and below

## 🔧 Recreating in Elementor Pro

When rebuilding in WordPress/Elementor:

1. **Global Styles:** Set up your brand colors and fonts in Elementor's Site Settings
2. **Header:** Use Elementor Theme Builder for a sticky header
3. **Sections:** Each section maps to an Elementor section/container
4. **Calendly:** Use an HTML widget to embed the Calendly code
5. **Animations:** Use Elementor's motion effects for scroll animations

### Elementor Tips:
- Copy text content directly from the HTML files
- Match the CSS class names to Elementor's styling options
- Use the exact color hex codes from CSS variables
- Set up responsive breakpoints to match CSS media queries

## 📄 Pages Overview

| Page | File | Purpose |
|------|------|---------|
| Home | `index.html` | Introduction, pillars preview, services overview |
| About | `about.html` | Trina's story, values, personal journey |
| Services | `services.html` | Detailed service offerings with CTAs |
| Approach | `approach.html` | The three pillars methodology |
| Contact | `contact.html` | Calendly booking, FAQ, contact info |

## ✨ Special Features

- **Scroll animations:** Elements fade in as you scroll
- **Mobile menu:** Hamburger menu for mobile navigation
- **Sticky header:** Header shrinks and adds shadow on scroll
- **Calendly integration:** Embedded booking widget
- **Quote spirals:** Decorative brand elements

## 🆘 Need Help?

If you need to make changes:
- **Colors:** Edit CSS variables at the top of `styles.css`
- **Fonts:** Update `@font-face` in `styles.css`
- **Content:** Edit the HTML files directly
- **Layout:** Modify the CSS grid/flex properties in `styles.css`

---

Created with ❤️ for Trina Requena - Integrative Alignment Guide

*"When we align body, mind, and heart, life begins to flow with ease."*
