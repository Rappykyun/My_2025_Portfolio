# Deployment Guide

This guide covers different deployment options for your portfolio website.

## 🚀 Quick Deployment

### Option 1: Vercel (Recommended)

Vercel provides the best experience for React applications with automatic deployments.

1. **Prerequisites**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   npm run deploy:vercel
   ```

3. **First-time setup**:
   - Login to Vercel: `vercel login`
   - Follow the prompts to connect your project
   - Automatic deployments on every push to main branch

### Option 2: Netlify

1. **Via Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   netlify login
   npm run deploy:netlify
   ```

2. **Via Drag & Drop**:
   - Run `npm run build`
   - Go to [netlify.com](https://netlify.com)
   - Drag the `dist` folder to deploy

### Option 3: GitHub Pages

1. **Setup**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Deploy**:
   ```bash
   npm run deploy:gh-pages
   ```

3. **Configure GitHub**:
   - Go to your repository settings
   - Enable GitHub Pages
   - Select `gh-pages` branch as source

## 🔧 Pre-deployment Checklist

### 1. Update Configuration Files

- [ ] Update `index.html` meta tags with your actual domain
- [ ] Update `public/sitemap.xml` with your domain
- [ ] Update `public/robots.txt` with your domain
- [ ] Update `package.json` homepage field

### 2. Environment Variables (if needed)

Create a `.env` file for environment-specific variables:

```env
VITE_APP_TITLE=Your Portfolio Title
VITE_CONTACT_EMAIL=your@email.com
VITE_ANALYTICS_ID=your-analytics-id
```

### 3. Build and Test

```bash
# Clean previous builds
npm run clean

# Type check
npm run type-check

# Build for production
npm run build

# Preview production build locally
npm run preview
```

### 4. Performance Optimization

- [ ] Optimize images (use WebP format when possible)
- [ ] Add lazy loading for images
- [ ] Check bundle size: `npm run analyze`
- [ ] Test Core Web Vitals

## 🌍 Custom Domain Setup

### Vercel

1. Add domain in Vercel dashboard
2. Update DNS records:
   ```
   Type: CNAME
   Name: www
   Value: vercel-dns.com
   
   Type: A
   Name: @
   Value: 76.76.19.61
   ```

### Netlify

1. Add domain in Netlify dashboard
2. Update DNS nameservers to Netlify's:
   ```
   dns1.p05.nsone.net
   dns2.p05.nsone.net
   dns3.p05.nsone.net
   dns4.p05.nsone.net
   ```

## 📊 Analytics Setup

### Google Analytics 4

1. Create GA4 property
2. Add tracking code to `index.html`:
   ```html
   <!-- Google tag (gtag.js) -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

### Vercel Analytics

Add to your Vercel project settings or use `@vercel/analytics`:

```bash
npm install @vercel/analytics
```

## 🔒 Security Headers

### Vercel - `vercel.json`

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

### Netlify - `netlify.toml`

```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Content-Type-Options = "nosniff"
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

## 🚦 CI/CD Pipeline

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run tests
      run: npm run type-check
    
    - name: Build
      run: npm run build
    
    - name: Deploy to Vercel
      run: npx vercel deploy --prod --token ${{ secrets.VERCEL_TOKEN }}
```

## 🐛 Troubleshooting

### Common Issues

1. **Build Fails**:
   - Check TypeScript errors: `npm run type-check`
   - Clear cache: `npm run clean`
   - Reinstall dependencies: `rm -rf node_modules package-lock.json && npm install`

2. **Routes Don't Work in Production**:
   - Configure your hosting platform for SPA routing
   - For Netlify: Add `_redirects` file with `/* /index.html 200`
   - For Vercel: Add `vercel.json` with rewrites

3. **Assets Not Loading**:
   - Check relative paths in imports
   - Ensure assets are in the `public` folder
   - Verify build output in `dist` folder

## 📞 Support

If you encounter issues:

1. Check the build logs
2. Review hosting platform documentation
3. Test locally with `npm run preview`
4. Contact hosting support if needed

---

Happy deploying! 🎉