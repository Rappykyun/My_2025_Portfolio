# Deploy to Microsoft Azure (Static Web Apps or Storage Static Website)

This project is a Vite + React SPA. Azure can host it as static files.

## Option A — Azure Static Web Apps (GitHub CI/CD)

Prereqs:
- Azure subscription and a Resource Group
- GitHub repo with this project

Steps:
1) Push the repo to GitHub (main branch).
2) In Azure Portal: Create resource → Static Web App.
   - Deployment source: GitHub
   - App location: /
   - Api location: (leave empty)
   - Output location: dist
3) Azure creates a GitHub Actions workflow. On first run it will build with `npm ci && npm run build` and deploy from `dist/`.
4) SPA routing: We've added `public/staticwebapp.config.json` to rewrite 404s to `/index.html` so React Router works on refresh/deep links.

Local test:
- npm run build
- npm run preview

## Option B — Azure Storage Static Website (manual or CI)

Prereqs:
- Storage Account with Static website enabled

Steps:
1) Build locally:
   - npm ci
   - npm run build (outputs to dist/)
2) In Storage Account → Static website:
   - Index document name: index.html
   - Error document path: index.html (SPA fallback)
3) Upload contents of dist/ to $web container.
4) Browse the Primary endpoint.

Optional: Azure CDN in front of Storage for performance.

## Environment variables
If you add Vite envs, put them in `.env` and rebuild. Static hosts don’t run server code; only VITE_ vars are embedded at build time.

## Custom domain & HTTPS
- Static Web Apps: add custom domain in the resource; Azure manages certs.
- Storage Website: map via Azure CDN/Front Door or custom domain settings and enable HTTPS.

## Troubleshooting
- 404s on deep links → ensure 404 rewrites to index.html (config above or portal setting).
- Blank page after deploy → check console for missing assets; verify you uploaded `dist` contents (not the folder itself in some tools).
- Fonts not loading → correct MIME types are declared in `staticwebapp.config.json`.
