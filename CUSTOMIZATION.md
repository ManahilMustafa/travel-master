# Travel Master - Customization Guide

This guide will help you customize the Travel Master website to match your brand and content.

## Color Customization

### Primary Colors
Edit `/app/globals.css` to change the color scheme:

```css
:root {
  --primary: 3 105 161;      /* Ocean Blue - Main brand color */
  --accent: 249 115 22;      /* Orange - Accent color for CTAs */
  --secondary: 14 165 233;   /* Sky Blue - Secondary brand color */
  --background: 255 255 255; /* White background */
  --foreground: 15 23 42;    /* Dark text color */
  --muted: 226 232 240;      /* Light gray for subtle elements */
}
```

### How Colors are Used
- **Primary**: Buttons, navigation, hover states, primary CTAs
- **Accent**: Special badges, highlights, hover effects
- **Secondary**: Secondary buttons, accents
- **Muted**: Backgrounds, borders, disabled states

## Typography Customization

### Change Fonts
Edit `/app/layout.jsx`:

```jsx
// Current fonts
const poppins = Poppins({...})
const playfair = Playfair_Display({...})

// To change, replace with other Google Fonts:
const your_heading_font = import_your_font({...})
const your_body_font = import_your_font({...})
```

### Font Sizes
Edit CSS classes in `/app/globals.css`:

```css
.heading-1 {
  @apply text-4xl md:text-5xl lg:text-6xl; /* Adjust sizes */
}

.heading-2 {
  @apply text-3xl md:text-4xl; /* H2 sizes */
}

.heading-3 {
  @apply text-2xl md:text-3xl; /* H3 sizes */
}
```

## Content Customization

### Home Page
Edit `/app/page.jsx` to customize:
- Featured destinations data
- Why Choose Us section
- Hero section content

```jsx
const featuredDestinations = [
  {
    id: 1,
    name: 'Your Destination',
    country: 'Country Name',
    image: 'your-image-url',
    description: 'Your description',
    rating: 4.8,
    price: 1299,
    duration: '7 Days',
  },
  // Add more...
]
```

### Destinations Page
Edit `/app/destinations/page.jsx`:
- Update `allDestinations` array
- Add new regions for filtering
- Modify search filters

### Packages Page
Edit `/app/packages/page.jsx`:
- Update `packages` array with your packages
- Customize package highlights
- Adjust pricing

### About Page
Edit `/app/about/page.jsx`:
- Update company story
- Change team members
- Modify mission/vision statements
- Add sustainability initiatives

### Contact Page
Edit `/app/contact/page.jsx`:
- Update contact information
- Customize FAQ questions
- Update form fields
- Embed your actual location map

## Component Customization

### Navbar
Edit `/components/Navbar.jsx`:

```jsx
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/destinations', label: 'Destinations' },
  // Customize navigation items
]
```

### Footer
Edit `/components/Footer.jsx`:
- Update company info
- Add social media links
- Customize footer links

### Hero Section
Edit `/components/Hero.jsx`:
- Change hero text
- Update background images
- Modify CTA buttons
- Customize statistics

## Image Management

### Best Practices
1. **Use High Quality Images**
   - Professional travel photos
   - 1200x800px minimum
   - Optimized for web

2. **External Images**
   - Use Unsplash, Pexels, or Pixabay
   - Or host your own images in `/public`

3. **Format**
   - JPEG for photographs
   - PNG for graphics with transparency
   - WebP for better compression

### Replace Images
Update image URLs in components:

```jsx
// In DestinationCard.jsx or other components
<img
  src="YOUR-IMAGE-URL"
  alt="Description"
  className="..."
/>
```

## Form Customization

### Contact Form Fields
Edit `/app/contact/page.jsx`:

```jsx
const [formData, setFormData] = useState({
  fullName: '',
  email: '',
  phone: '',
  destination: '',
  message: '',
  // Add new fields here
})
```

### Form Submission
Currently the form logs to console. To make it functional:

```jsx
const handleSubmit = async (e) => {
  e.preventDefault()
  // Send to your backend
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(formData),
  })
  // Handle response
}
```

## Adding New Pages

1. Create new file in `/app/[page-name]/page.jsx`
2. Import Navbar and Footer
3. Add to navigation links in `Navbar.jsx`:

```jsx
const navLinks = [
  // ... existing links
  { href: '/new-page', label: 'New Page' },
]
```

## Styling Customization

### Button Styles
Edit `/app/globals.css` for button classes:

```css
.btn-primary {
  @apply inline-flex items-center justify-center px-6 py-3 font-semibold text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors;
}

.btn-secondary { /* ... */ }
.btn-outline { /* ... */ }
```

### Card Styles
Customize card hover effects and spacing:

```jsx
<div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300">
  {/* content */}
</div>
```

## Responsive Design

### Breakpoints Used
- `sm`: 640px (tablets)
- `md`: 768px (small desktops)
- `lg`: 1024px (desktops)
- `xl`: 1280px (large desktops)

### Example Responsive Classes
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* 1 column mobile, 2 tablet, 3 desktop */}
</div>
```

## SEO Customization

### Update Metadata
Edit `/app/layout.jsx`:

```jsx
export const metadata = {
  title: 'Your Site Title',
  description: 'Your site description',
  // Add more metadata
}
```

### Per-Page Metadata
Add to individual page files:

```jsx
export const metadata = {
  title: 'Page Title | Travel Master',
  description: 'Page description',
}
```

## Performance Tips

1. **Optimize Images**
   - Use WebP format when possible
   - Compress before uploading
   - Use appropriate sizes for different devices

2. **Lazy Loading**
   - Images load when visible (built-in with Next.js)
   - Use `loading="lazy"` attribute

3. **Code Splitting**
   - Components are automatically split by Next.js
   - Use dynamic imports for large components

## Testing Your Changes

1. **Local Development**
   ```bash
   npm run dev
   ```
   Visit http://localhost:3000

2. **Build for Production**
   ```bash
   npm run build
   npm run start
   ```

3. **Mobile Testing**
   - Use DevTools device emulation
   - Test on actual mobile devices
   - Check viewport responsiveness

## Common Customizations

### Change Brand Color Throughout
1. Update `--primary` in globals.css
2. Update logo color in Navbar.jsx
3. Update button styles if needed

### Update Company Information
1. Change "Travel Master" text in Navbar.jsx
2. Update company info in Footer.jsx
3. Modify about page content

### Add More Destinations
1. Add objects to `allDestinations` array
2. Include all required fields (id, name, image, price, etc.)
3. Images automatically display in cards

### Modify Navigation Menu
1. Edit `navLinks` array in Navbar.jsx
2. Create corresponding page in `/app/[page-name]/`
3. Add layout and components

## Need Help?

- Check the README.md for project structure
- Review existing components for patterns
- Consult Tailwind CSS documentation for styling
- Visit Next.js docs for framework features

---

Happy customizing! 🎉
