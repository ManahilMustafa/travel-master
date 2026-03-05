# Travel Master - Quick Start Guide

Get your Travel Master website up and running in minutes!

## Installation & Setup (2 minutes)

### 1. Install Dependencies
```bash
pnpm install
# or npm install
```

### 2. Start Development Server
```bash
pnpm dev
# or npm run dev
```

### 3. Open in Browser
Navigate to [http://localhost:3000](http://localhost:3000)

## First Time Customization (5-10 minutes)

### Step 1: Update Company Name
1. Open `/components/Navbar.jsx`
2. Find: `<span className="...">Travel Master</span>`
3. Replace with your company name

### Step 2: Update Branding Colors
1. Open `/app/globals.css`
2. Find the `:root` section
3. Update these values:
   - `--primary: 3 105 161;` → Your main brand color
   - `--accent: 249 115 22;` → Your accent color

### Step 3: Update Contact Information
1. Open `/app/contact/page.jsx`
2. Find the `contactInfo` array
3. Update:
   - Phone number
   - Email address
   - Physical address
   - Business hours

### Step 4: Add Your Logo (Optional)
1. Replace the `✈` emoji in `Navbar.jsx` with your logo
2. Or add an image file and reference it

## Navigation Guide

| Page | Purpose | File |
|------|---------|------|
| Home | Landing page with overview | `/app/page.jsx` |
| Destinations | Browse all destinations | `/app/destinations/page.jsx` |
| Packages | View tour packages | `/app/packages/page.jsx` |
| About | Company information | `/app/about/page.jsx` |
| Contact | Contact form & details | `/app/contact/page.jsx` |

## Common Tasks

### Add a New Destination
1. Open `/app/page.jsx` or `/app/destinations/page.jsx`
2. Find the destinations array
3. Add a new object:
```jsx
{
  id: 7,
  name: 'Your Destination Name',
  country: 'Country Name',
  region: 'Region',
  image: 'https://image-url.jpg',
  description: 'Description of the destination',
  rating: 4.8,
  price: 1299,
  duration: '7 Days',
}
```

### Add a New Package
1. Open `/app/packages/page.jsx`
2. Find the packages array
3. Add:
```jsx
{
  id: 10,
  name: 'Package Name',
  destination: 'Destination',
  price: 1299,
  duration: 7,
  groupSize: 8,
  image: 'https://image-url.jpg',
  highlights: [
    'Highlight 1',
    'Highlight 2',
  ],
  popular: false,
}
```

### Change Colors
Every color in the site is controlled by 3 main values in `/app/globals.css`:

```css
--primary: 3 105 161;      /* Main color */
--accent: 249 115 22;      /* Highlight color */
--secondary: 14 165 233;   /* Secondary color */
```

### Update Footer
Open `/components/Footer.jsx` and update:
- Company description
- Quick links
- Contact information
- Social media links

### Customize Hero Section
Open `/components/Hero.jsx` to modify:
- Main heading
- Description text
- Feature stats
- Hero image

## Responsive Design

The site is fully responsive and works on:
- 📱 Mobile phones (320px+)
- 📱 Tablets (640px+)
- 💻 Desktops (1024px+)

Test using browser DevTools → Toggle device toolbar

## Deployment

### Deploy to Vercel (Recommended)
1. Push code to GitHub
2. Go to [Vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy
5. Your site is live! 🎉

### Deploy to Other Platforms
The site works with any hosting that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render
- etc.

## File Structure Quick Reference

```
Travel Master/
├── app/                    # Pages and layouts
│   ├── layout.jsx         # Root layout
│   ├── page.jsx           # Home page
│   ├── globals.css        # Global styles
│   ├── destinations/
│   ├── packages/
│   ├── about/
│   └── contact/
├── components/            # Reusable components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── DestinationCard.jsx
│   ├── PackageCard.jsx
│   └── ...
└── public/               # Static assets
    └── images/
```

## Features Overview

✅ **Mobile Responsive** - Works perfectly on all devices  
✅ **Fast & Optimized** - Built with Next.js 16  
✅ **SEO Ready** - Proper meta tags and structure  
✅ **Modern Design** - Beautiful UI with animations  
✅ **Easy to Customize** - Well-organized code  
✅ **No Database Needed** - Static content by default  

## Need More Details?

- **Full Customization Guide**: See `CUSTOMIZATION.md`
- **Project Structure**: See `README.md`
- **Code Examples**: Check individual component files

## Support

For help with:
- **Next.js**: [nextjs.org](https://nextjs.org)
- **Tailwind CSS**: [tailwindcss.com](https://tailwindcss.com)
- **React**: [react.dev](https://react.dev)

## Next Steps

1. ✅ Install and run the project
2. ✅ Customize colors to match your brand
3. ✅ Update company information
4. ✅ Add your destinations and packages
5. ✅ Deploy to production

Happy building! 🚀

---

**Pro Tip**: Use Ctrl+F (Cmd+F on Mac) to find and replace "Travel Master" throughout the codebase with your company name.
