# Travel Master - Complete Travel Website

A fully-featured, responsive travel agency website built with Next.js 16 and Tailwind CSS, featuring multiple pages, stunning UI components, and excellent user experience.

## Features

✨ **Responsive Design**
- Mobile-first approach with smooth responsive layouts
- Hamburger menu for mobile navigation
- Optimized for all screen sizes

🌍 **Pages Included**
- **Home**: Landing page with featured destinations and hero section
- **Destinations**: Browse all destinations with filtering and search
- **Packages**: Tour packages with sorting and detailed information
- **About**: Company story, mission, team, and sustainability commitment
- **Contact**: Contact form, FAQ, and location map

🎨 **Design Features**
- Ocean blue and tropical color scheme (#0369A1 primary, #F97316 accent)
- Modern gradient backgrounds and smooth animations
- Interactive hover effects and transitions
- Beautiful card-based layouts

🧩 **Reusable Components**
- Navbar with mobile menu toggle
- Footer with social links
- Destination cards with ratings
- Package cards with highlights
- Hero section with CTA buttons
- Custom button variants
- Responsive form inputs

📱 **Navigation**
- Sticky navbar for easy navigation
- Smooth page transitions
- Responsive mobile hamburger menu
- Active page tracking

## Project Structure

```
/app
  /layout.jsx          # Root layout with fonts and metadata
  /page.jsx            # Home page
  /destinations
    /page.jsx          # Destinations listing page
  /packages
    /page.jsx          # Packages listing page
  /about
    /page.jsx          # About us page
  /contact
    /page.jsx          # Contact form page
  /globals.css         # Global styles with design tokens

/components
  /Navbar.jsx          # Navigation bar component
  /Footer.jsx          # Footer component
  /Hero.jsx            # Hero section component
  /DestinationCard.jsx # Destination card component
  /PackageCard.jsx     # Package card component
  /Button.jsx          # Reusable button component
  /Section.jsx         # Section wrapper component
```

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or pnpm as package manager

### Installation

1. Install dependencies:
```bash
npm install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm run start
```

## Customization

### Colors
Edit the color variables in `/app/globals.css`:
```css
:root {
  --primary: 3 105 161;      /* Ocean Blue */
  --accent: 249 115 22;      /* Orange */
  --secondary: 14 165 233;   /* Sky Blue */
  /* ... other colors */
}
```

### Fonts
Fonts are configured in `/app/layout.jsx` using Google Fonts:
- **Poppins**: Body and general text
- **Playfair Display**: Headings and titles

### Content
Replace placeholder data in components:
- Update destination data in `/app/destinations/page.jsx`
- Modify package data in `/app/packages/page.jsx`
- Edit team members in `/app/about/page.jsx`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technologies Used

- **Next.js 16**: React framework for production
- **React 19**: UI library
- **Tailwind CSS 4**: Utility-first CSS framework
- **Lucide React**: Icon library
- **Poppins & Playfair Display**: Google Fonts

## Responsive Breakpoints

- Mobile: < 640px (sm)
- Tablet: 640px - 1024px (md, lg)
- Desktop: > 1024px (xl)

## Key Components Explained

### Navbar
- Sticky positioning for easy access
- Mobile hamburger menu with smooth transitions
- Logo and brand name
- Navigation links and CTA button

### Hero Section
- Full-viewport height design
- Gradient background with decorative blobs
- Floating destination card overlay
- Statistics display

### Destination Cards
- Hover effects with image zoom
- Star ratings
- Price display
- Quick view link

### Package Cards
- Popular badge for featured packages
- Detailed highlights with checkmarks
- Per-person pricing
- Call-to-action buttons

## Performance Optimizations

- Image optimization with next/image
- Responsive images with srcset
- CSS-in-JS for dynamic styling
- Optimized font loading
- Lazy loading for below-the-fold content

## License

This project is open source and available for use.

## Support

For questions or issues, contact info@travelmaster.com

---

Built with ❤️ for travel enthusiasts everywhere.
