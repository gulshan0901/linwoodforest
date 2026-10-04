# Linwood Forest Insurance Group - Modern Website Redesign

A modern, responsive redesign of the Linwood Forest Insurance Group website built with Next.js and Material UI.

## 🌟 Features

### Modern Design

- Professional color scheme (Blue & Green)
- Modern typography and spacing
- Smooth animations and hover effects
- Mobile-first responsive design
- Glassmorphism and gradient effects

### Key Sections

1. **Header** - Responsive navigation with mobile menu, language toggle, contact info
2. **Hero Section** - Compelling headline, call-to-action buttons, trust indicators
3. **Services Section** - Insurance service cards with features and pricing
4. **Statistics Section** - Animated counters showing company achievements
5. **Team Section** - Professional team member cards
6. **Testimonials** - Live Google reviews and ratings in an interactive carousel
7. **Contact Section** - Contact form with validation, business information, and map
8. **Footer** - Comprehensive footer with links, social media, and company info

### Technical Features

- **Next.js 15** - React framework for production
- **Material UI (MUI)** - Modern React component library
- **TypeScript** - Type-safe development
- **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **SEO Optimized** - Meta tags, structured data, and semantic HTML
- **Accessibility** - WCAG compliant components
- **Performance Optimized** - Lazy loading, code splitting

## 🚀 Getting Started

### Prerequisites

- Node.js 16.x or later
- npm or yarn

### Installation

1. Install dependencies

```bash
npm install
```

2. Run the development server

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

### Google Reviews

The homepage loads reviews live from the Google Places API (New). The business's Google Place ID
is stored in the site configuration. Configure this server-side environment variable in the
deployment platform:

- `GOOGLE_MAPS_API_KEY` - A key with Places API (New) enabled. Restrict it to the Places API and
  keep it private; do not use a `NEXT_PUBLIC_` variable.

The Place ID is available from the [Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id).
Review content is fetched without caching and includes Google Maps attribution.

## 📁 Components Created

- **Header.tsx** - Navigation header with mobile menu and language toggle
- **HeroSection.tsx** - Hero banner with compelling CTA and trust indicators
- **ServicesSection.tsx** - Insurance services cards with hover effects
- **StatsSection.tsx** - Animated statistics counters with intersection observer
- **TeamSection.tsx** - Team member profiles with specialties
- **TestimonialsSection.tsx** - Client testimonials carousel with pagination
- **ContactSection.tsx** - Contact form with validation and business info
- **Footer.tsx** - Comprehensive site footer with all links

## 🎨 Design System

### Colors

- **Primary Blue**: #1565C0 - Trust, professionalism
- **Secondary Green**: #388E3C - Growth, stability
- **Background**: #FAFAFA - Clean, modern

### Key Improvements Over Original

- **Modern UI/UX** - Clean, professional design vs outdated original
- **Mobile Responsive** - Perfect mobile experience
- **Better Performance** - Fast loading times and smooth interactions
- **Enhanced UX** - Intuitive navigation and clear information architecture
- **Professional Branding** - Consistent visual identity throughout
- **Interactive Elements** - Engaging animations and micro-interactions

## 📞 Contact Information

**Linwood Forest Insurance Group**

- Phone: (610) 572-7322
- Email: sales@linwoodforest.com
- Address: 3312 7th St. Unit 101, Whitehall, PA 18052

## 🏆 Mission

_"Your Insurance....Our Priority"_

As a veteran-owned business, we strive to properly protect our clients with personalized service and competitive rates.

---

**Built with ❤️ using Next.js and Material UI**
