# Travel Master - Deployment Guide

Complete guide to deploying your Travel Master website to production.

## Pre-Deployment Checklist

Before deploying, make sure you've completed:

- [ ] Updated company name and branding
- [ ] Changed all placeholder content
- [ ] Updated contact information
- [ ] Added your destinations and packages
- [ ] Customized colors to match your brand
- [ ] Tested on mobile devices
- [ ] Tested all links and navigation
- [ ] Updated favicon and logo
- [ ] Set up proper meta tags for SEO

## Deployment Options

### Option 1: Deploy to Vercel (Recommended)

Vercel is the platform that created Next.js and provides the best experience.

#### Steps:

1. **Create a GitHub Account** (if you don't have one)
   - Go to [github.com](https://github.com)
   - Sign up for free

2. **Push Your Code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Travel Master website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/travel-master.git
   git push -u origin main
   ```

3. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"
   - Your site is live! 🎉

#### Custom Domain on Vercel
1. In Vercel dashboard, go to Settings
2. Find "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions
5. Wait for DNS to propagate (5-48 hours)

### Option 2: Deploy to Netlify

1. **Connect GitHub**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Choose GitHub
   - Select your repository

2. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`

3. **Deploy**
   - Netlify automatically deploys on push
   - Your site is live!

### Option 3: Deploy to AWS Amplify

1. **Connect Repository**
   - Go to [AWS Amplify Console](https://us-east-1.console.aws.amazon.com/amplify)
   - Click "Create app"
   - Choose GitHub
   - Authorize and select your repository

2. **Build Settings**
   - Leave as default (Amplify auto-detects Next.js)

3. **Deploy**
   - Amplify builds and deploys automatically

### Option 4: Deploy to Railway

1. **Create Account**
   - Go to [railway.app](https://railway.app)
   - Sign up with GitHub

2. **Deploy Project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository
   - Railway auto-detects Next.js

3. **Verify Deployment**
   - Click "Domains"
   - Add custom domain if desired

### Option 5: Docker Deployment (Advanced)

If you want more control, you can containerize the app:

1. **Create Dockerfile**
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install

COPY . .

RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]
```

2. **Build and Run**
```bash
docker build -t travel-master .
docker run -p 3000:3000 travel-master
```

3. **Deploy to Container Services**
   - Docker Hub
   - AWS ECS
   - Google Cloud Run
   - Any container hosting platform

## Domain Setup

### Using a Custom Domain

1. **Register Domain**
   - Services: Namecheap, GoDaddy, Google Domains
   - Choose your domain
   - Complete registration

2. **Point to Hosting**
   - Each platform has different DNS instructions
   - Update nameservers OR DNS records

3. **Verify**
   - Test domain in browser
   - Wait for DNS propagation (up to 48 hours)

### Using Vercel's Free Domain (On Vercel)
- Automatic setup with `*.vercel.app` subdomain
- Upgrade to custom domain anytime

## SSL/HTTPS

✅ **Automatically handled** on all major platforms:
- Vercel: Free SSL by default
- Netlify: Free SSL by default
- AWS: Free with AWS Certificate Manager
- Railway: Free SSL by default

## Environment Variables

Currently, Travel Master doesn't require environment variables since it's a static site. If you add backend functionality:

1. **On Vercel**
   - Settings → Environment Variables
   - Add key-value pairs
   - Auto-available in app

2. **On Netlify**
   - Settings → Build & deploy → Build environment variables
   - Add variables

3. **Create `.env.local`** (local development only)
```
NEXT_PUBLIC_API_URL=https://api.example.com
API_SECRET_KEY=your_secret_key
```

## Performance Optimization

### After Deployment

1. **Check Performance**
   - Use [PageSpeed Insights](https://pagespeed.web.dev)
   - Use [GTmetrix](https://gtmetrix.com)
   - Look for optimization suggestions

2. **Optimize Images**
   - Compress before uploading
   - Use WebP format when possible
   - Ensure responsive sizes

3. **Minimize Requests**
   - Combine similar files
   - Remove unused dependencies
   - Lazy load below-fold content

### Build Optimization

```bash
# Analyze bundle size
npm install --save-dev @next/bundle-analyzer
```

Then add to `next.config.mjs`:
```js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer(nextConfig)
```

Run: `ANALYZE=true npm run build`

## SEO for Production

### Meta Tags
Edit `/app/layout.jsx` metadata:
```jsx
export const metadata = {
  title: 'Your Company - Travel Website',
  description: 'Discover amazing travel destinations...',
  keywords: 'travel, destinations, tours, packages',
}
```

### Sitemap (Add to public/sitemap.xml)
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
    <lastmod>2025-03-05</lastmod>
  </url>
  <url>
    <loc>https://yourdomain.com/destinations</loc>
  </url>
  <!-- Add all pages -->
</urlset>
```

### robots.txt (Add to public/robots.txt)
```
User-agent: *
Allow: /
Sitemap: https://yourdomain.com/sitemap.xml
```

## Monitoring & Analytics

### Add Google Analytics (Optional)

1. Install package:
```bash
npm install gtag next-gtag
```

2. Create `/lib/gtag.js`:
```js
export const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'

export const pageview = (url) => {
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  })
}
```

3. Update root layout to include tracking

### Monitor Performance
- Set up performance alerts
- Monitor error rates
- Track page load times
- Monitor user engagement

## Troubleshooting Deployment

### Build Errors

**Error: "Cannot find module"**
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm build
```

**Error: "Out of memory"**
- Increase build memory
- Split large pages into smaller components
- Check for circular imports

### Runtime Errors

**404 Pages**
- Check file paths
- Ensure JSX files are in correct directories
- Verify Next.js routing

**Styling Issues**
- Clear browser cache
- Verify Tailwind CSS is configured
- Check CSS imports

### Performance Issues

**Slow Pages**
- Optimize images
- Reduce bundle size
- Enable caching
- Use CDN

## Continuous Deployment

### Auto-Deploy on Push

All major platforms auto-deploy when you push to GitHub:

```bash
# Make changes locally
git add .
git commit -m "Update description"
git push

# Site automatically redeploys
```

## Rollback

If something goes wrong after deployment:

**Vercel**: Dashboard → Deployments → Click previous version → Redeploy
**Netlify**: Deploys → Select previous deploy → Publish

## Security Best Practices

1. **Never commit secrets**
   - Use environment variables
   - Add `.env` to `.gitignore`
   - Use `.env.example` for structure

2. **Keep dependencies updated**
   ```bash
   npm update
   ```

3. **Security headers** (Added automatically by most platforms)
   - X-Frame-Options
   - X-Content-Type-Options
   - Content-Security-Policy

## Maintenance

### Regular Tasks

1. **Weekly**
   - Monitor error logs
   - Check performance metrics
   - Verify all links work

2. **Monthly**
   - Update dependencies
   - Review analytics
   - Check SEO rankings

3. **Quarterly**
   - Performance audit
   - Security audit
   - Content refresh

## Scaling Tips

If traffic grows significantly:

1. **Database** (when needed)
   - Add backend with database
   - Use Supabase, Firebase, or PostgreSQL

2. **Image Optimization**
   - Use next/image component
   - Implement CDN
   - Use responsive images

3. **Caching**
   - Enable edge caching
   - Use ISR (Incremental Static Regeneration)
   - Cache API responses

## Cost Estimates

### Free Options
- **Vercel**: Free tier included
- **Netlify**: Free tier with limits
- **Railway**: $5/month credits monthly
- **GitHub Pages**: Free (static only)

### Paid Options
- **Vercel Pro**: $20/month
- **AWS**: Variable, typically $5-50/month
- **Custom VPS**: $3-20/month

## Support Resources

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Deployment Help**: Check platform's support docs

## Quick Deployment Summary

### 5-Minute Deployment (Vercel)
1. Push code to GitHub
2. Go to vercel.com
3. Import repository
4. Click Deploy
5. Done! ✅

---

Your Travel Master website is now ready for the world to see! 🌍✈️
