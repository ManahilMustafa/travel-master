# Travel Master - Project Structure & Documentation

Welcome to Travel Master! This guide provides a complete overview of the project structure and all available documentation.

## 📚 Documentation Files

Start here based on your needs:

| Document | Purpose | Audience |
|----------|---------|----------|
| **README.md** | Project overview, features, tech stack | Everyone |
| **QUICK_START.md** | Get up and running in minutes | First-time users |
| **CUSTOMIZATION.md** | Detailed customization guide | Developers |
| **DEPLOYMENT.md** | How to deploy to production | DevOps/Deployment |
| **PROJECT_STRUCTURE.md** | This file - directory structure | Developers |

## 🗂️ Directory Structure

```
Travel Master/
│
├── 📄 README.md                 # Main documentation
├── 📄 QUICK_START.md            # Quick start guide  
├── 📄 CUSTOMIZATION.md          # Customization details
├── 📄 DEPLOYMENT.md             # Deployment instructions
├── 📄 PROJECT_STRUCTURE.md      # This file
│
├── 📁 app/                      # Next.js App Router pages
│   ├── 📄 layout.jsx            # Root layout with fonts & metadata
│   ├── 📄 page.jsx              # Home/landing page
│   ├── 📄 globals.css           # Global styles & design tokens
│   │
│   ├── 📁 destinations/         # Destinations page
│   │   └── 📄 page.jsx          # Browse destinations with filters
│   │
│   ├── 📁 packages/             # Tour packages page
│   │   └── 📄 page.jsx          # View tour packages with sorting
│   │
│   ├── 📁 blog/                 # Blog page (expandable)
│   │   └── 📄 page.jsx          # Blog post listing
│   │
│   ├── 📁 about/                # About us page
│   │   └── 📄 page.jsx          # Company story & team
│   │
│   └── 📁 contact/              # Contact page
│       └── 📄 page.jsx          # Contact form & FAQ
│
├── 📁 components/               # Reusable React components
│   ├── 📄 Navbar.jsx            # Navigation bar with mobile menu
│   ├── 📄 Footer.jsx            # Footer with links & info
│   ├── 📄 Hero.jsx              # Hero section for landing
│   ├── 📄 DestinationCard.jsx    # Destination card component
│   ├── 📄 PackageCard.jsx        # Package card component
│   ├── 📄 Button.jsx            # Reusable button component
│   └── 📄 Section.jsx           # Section wrapper component
│
├── 📁 public/                   # Static assets
│   ├── 📄 hero-bg.jpg           # Generated hero background
│   └── 📄 [other images]        # Add your images here
│
├── 📁 lib/                      # Utility functions
│   └── 📄 utils.ts              # Helper utilities
│
├── 📄 package.json              # Project dependencies
├── 📄 next.config.mjs           # Next.js configuration
├── 📄 tailwind.config.js        # Tailwind CSS config
├── 📄 postcss.config.js         # PostCSS config
├── 📄 tsconfig.json             # TypeScript config
└── 📄 .gitignore                # Git ignore rules
```

## 📄 File Purpose Guide

### App Files

| File | Purpose |
|------|---------|
| `layout.jsx` | Root layout - imports fonts, sets up HTML structure |
| `page.jsx` (home) | Landing page with hero, featured destinations, CTA |
| `globals.css` | Design tokens, Tailwind theme, button styles |
| `destinations/page.jsx` | All destinations with search & region filters |
| `packages/page.jsx` | Tour packages with sorting options |
| `blog/page.jsx` | Blog posts listing & featured article |
| `about/page.jsx` | Company info, team, mission, values |
| `contact/page.jsx` | Contact form, FAQ, location map |

### Component Files

| Component | Props/Features |
|-----------|----------------|
| `Navbar.jsx` | Sticky header, mobile menu, nav links |
| `Footer.jsx` | Company info, links, social, copyright |
| `Hero.jsx` | Large banner, CTA buttons, background image |
| `DestinationCard.jsx` | Image, rating, price, duration, link |
| `PackageCard.jsx` | Popular badge, highlights, pricing, details |
| `Button.jsx` | Variants: primary, secondary, outline, ghost |
| `Section.jsx` | Wrapper with padding for content sections |

## 🎨 Design System

### Colors (Edit in `globals.css`)
```css
--primary: 3 105 161;      /* Ocean Blue #0369A1 */
--accent: 249 115 22;      /* Orange #F97316 */
--secondary: 14 165 233;   /* Sky Blue #0EA5E9 */
--background: 255 255 255; /* White */
--foreground: 15 23 42;    /* Dark Blue/Black */
--muted: 226 232 240;      /* Light Gray */
```

### Typography
- **Headings**: Playfair Display (serif, elegant)
- **Body**: Poppins (sans-serif, modern)
- **Monospace**: System default

### Spacing (Tailwind Scale)
- `p-4` = 1rem padding
- `gap-4` = 1rem gap
- `py-16` = 4rem vertical padding
- `md:py-24` = 6rem on medium screens

### Responsiveness
- `sm`: 640px (tablets)
- `md`: 768px (small desktops)
- `lg`: 1024px (desktops)
- `xl`: 1280px (large screens)

## 🚀 Getting Started

### Quick Navigation

1. **First Time Setup** → Read `QUICK_START.md`
2. **Want to Customize** → Read `CUSTOMIZATION.md`
3. **Ready to Deploy** → Read `DEPLOYMENT.md`
4. **Need Technical Details** → Read this file

### Most Important Files to Edit

1. **Brand Your Site**
   - `components/Navbar.jsx` - Update company name
   - `app/globals.css` - Change brand colors

2. **Update Content**
   - `app/page.jsx` - Home page content
   - `app/destinations/page.jsx` - Add destinations
   - `app/packages/page.jsx` - Add packages
   - `app/about/page.jsx` - Company info

3. **Contact Info**
   - `app/contact/page.jsx` - Contact details
   - `components/Footer.jsx` - Footer info

## 🔧 Development Workflow

### Adding a New Page

1. Create new directory: `/app/new-page/`
2. Create file: `/app/new-page/page.jsx`
3. Add to Navbar: `components/Navbar.jsx`
4. Example structure:
```jsx
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function NewPage() {
  return (
    <>
      <Navbar />
      {/* Your content */}
      <Footer />
    </>
  )
}
```

### Adding a New Component

1. Create file: `/components/YourComponent.jsx`
2. Export default function
3. Use in pages:
```jsx
import YourComponent from '@/components/YourComponent'

<YourComponent prop1="value" />
```

### Styling Components

Use Tailwind CSS classes:
```jsx
<div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg">
  <h2 className="heading-2 text-foreground">Title</h2>
  <p className="text-gray-600">Description</p>
</div>
```

## 📦 Key Dependencies

| Package | Purpose |
|---------|---------|
| `next` | React framework |
| `react` | UI library |
| `tailwindcss` | Styling |
| `lucide-react` | Icons |
| `next/font/google` | Google Fonts |
| `@vercel/analytics` | Usage tracking |

## 🎯 Feature Checklist

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Navigation with mobile hamburger menu
- ✅ Home/landing page with hero section
- ✅ Destinations page with search & filters
- ✅ Packages page with sorting
- ✅ About page with team & values
- ✅ Contact page with form & FAQ
- ✅ Blog page (example)
- ✅ Footer with links & social
- ✅ Modern animations & transitions
- ✅ SEO-friendly structure
- ✅ Fast performance
- ✅ Easy customization

## 📱 Responsive Design

The site uses mobile-first design:

```
Mobile (< 640px)
  ↓
Tablet (640px - 1024px) 
  ↓
Desktop (> 1024px)
```

All components adapt automatically with Tailwind's responsive prefixes.

## 🎨 Customization Quick Links

| Change | Location | Details |
|--------|----------|---------|
| **Company Name** | `components/Navbar.jsx` | Line ~30 |
| **Logo** | `components/Navbar.jsx` | Line ~26 |
| **Colors** | `app/globals.css` | Lines 6-16 |
| **Fonts** | `app/layout.jsx` | Lines 3-10 |
| **Navigation** | `components/Navbar.jsx` | Lines 13-19 |
| **Destinations** | `app/page.jsx` | Lines 15+ |
| **Packages** | `app/packages/page.jsx` | Lines 5+ |
| **Contact Info** | `app/contact/page.jsx` | Lines 8-22 |

## 🚀 Common Tasks

### Change Brand Color
1. Open `app/globals.css`
2. Edit `--primary: 3 105 161;`
3. Instantly applies site-wide

### Add New Destination
1. Open `app/destinations/page.jsx`
2. Add object to `allDestinations` array
3. Appears automatically in grid

### Update Contact Info
1. Open `app/contact/page.jsx`
2. Edit `contactInfo` array
3. Changes appear on Contact page

### Customize Typography
1. Open `app/layout.jsx` for fonts
2. Open `app/globals.css` for sizes
3. Edit values as needed

## 🔗 External Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **React**: https://react.dev
- **Lucide Icons**: https://lucide.dev

## 📊 Performance Metrics

Target metrics after deployment:
- **PageSpeed Score**: 90+
- **Lighthouse**: 90+ (all categories)
- **Load Time**: < 2 seconds
- **Time to Interactive**: < 3 seconds

## ✅ Pre-Deployment Checklist

- [ ] Updated company name
- [ ] Changed brand colors
- [ ] Replaced all placeholder text
- [ ] Updated all images
- [ ] Set contact information
- [ ] Tested all links
- [ ] Mobile responsive verified
- [ ] Meta tags updated
- [ ] Analytics configured
- [ ] Domain ready

## 🆘 Troubleshooting

| Issue | Solution |
|-------|----------|
| Colors not changing | Clear browser cache, rebuild |
| Images not showing | Check image URLs, paths |
| Mobile menu broken | Check Navbar.jsx syntax |
| Styles missing | Verify Tailwind CSS import |
| Build fails | Delete `node_modules`, reinstall |

## 📞 Support

- **Documentation**: See README.md and related .md files
- **Code Examples**: Check individual component files
- **Customization**: See CUSTOMIZATION.md
- **Deployment**: See DEPLOYMENT.md

---

**Happy building! 🎉**

Need help? Check the relevant documentation file or review the component code directly - it's all well-commented and organized.
