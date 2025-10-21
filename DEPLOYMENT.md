# 🚀 Deployment Guide - Futuristic Digital Resume Website

## Quick Start - Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

The dev server will open at `http://localhost:3000`

---

## 🌐 Deployment Options

### Option 1: Vercel (Recommended - Easiest)

**Why Vercel?**
- Zero-config deployment for Vite apps
- Automatic HTTPS
- Global CDN
- Free tier includes custom domains
- Automatic builds on git push

**Steps:**

1. **Create a GitHub repository** (if you haven't already):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"
   - Your site will be live at `https://your-project.vercel.app`

3. **Add Custom Domain (Optional):**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

**Configuration:** The `vercel.json` file is already included!

---

### Option 2: Netlify

**Why Netlify?**
- Easy drag-and-drop deployment
- Free HTTPS and CDN
- Form handling (useful for your contact form)
- Split testing capabilities

**Steps:**

**Method A: Drag & Drop**
1. Build your site: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag the `build/` folder to Netlify Drop
4. Site is live instantly!

**Method B: Git Integration**
1. Push code to GitHub (same as Vercel step 1)
2. Go to Netlify Dashboard
3. Click "Add new site" → "Import existing project"
4. Connect to GitHub and select your repo
5. Build settings are auto-detected from `netlify.toml`
6. Deploy!

**Configuration:** The `netlify.toml` file is already included!

---

### Option 3: GitHub Pages

**Why GitHub Pages?**
- Free hosting directly from your repo
- Simple GitHub integration
- Good for static sites

**Steps:**

1. **Push to GitHub** (if not already):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repo → Settings → Pages
   - Under "Build and deployment":
     - Source: "GitHub Actions"
   - The workflow is already configured in `.github/workflows/deploy.yml`

3. **Push changes to trigger deployment:**
   ```bash
   git push
   ```

4. Your site will be available at:
   `https://YOUR_USERNAME.github.io/YOUR_REPO/`

**Note:** If deploying to a subdirectory, update `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/YOUR_REPO/', // Add this line
  // ... rest of config
});
```

---

### Option 4: Cloudflare Pages

**Steps:**

1. Push code to GitHub
2. Go to [dash.cloudflare.com](https://dash.cloudflare.com)
3. Go to "Workers & Pages" → "Create application" → "Pages"
4. Connect GitHub repository
5. Build settings:
   - Build command: `npm run build`
   - Build output directory: `build`
6. Deploy!

---

## 📝 Before Going Live - Checklist

- [ ] **Update personal information** (if needed):
  - Email in Hero.tsx and Contact.tsx
  - GitHub/LinkedIn URLs in Hero.tsx
  - Projects links in Projects.tsx
  - Location in Contact.tsx

- [ ] **SEO Optimization**:
  - [ ] Update `<title>` in `index.html`
  - [ ] Add meta description
  - [ ] Add Open Graph tags
  - [ ] Add favicon

- [ ] **Contact Form**:
  - [ ] The current form is a demo. Consider integrating:
    - Formspree
    - Netlify Forms
    - EmailJS
    - Web3Forms

- [ ] **Analytics** (Optional):
  - [ ] Add Google Analytics
  - [ ] Add Vercel Analytics
  - [ ] Add Plausible Analytics

- [ ] **Performance**:
  - [x] Optimize images (already using Unsplash optimized URLs)
  - [x] Code splitting (Vite does this automatically)
  - [x] Lazy loading (Motion handles this)

---

## 🔧 Environment Variables

If you need environment variables (e.g., for analytics, forms):

**Vercel:**
```bash
# Add in Vercel Dashboard → Settings → Environment Variables
```

**Netlify:**
```bash
# Add in Netlify Dashboard → Site settings → Environment variables
```

**Local (.env file):**
```bash
# Create .env file (already in .gitignore)
VITE_ANALYTICS_ID=your-id
VITE_FORM_ENDPOINT=your-endpoint
```

Access in code: `import.meta.env.VITE_ANALYTICS_ID`

---

## 🎯 Recommended: Vercel

For this project, I recommend **Vercel** because:
1. Zero configuration needed
2. Fastest deployment (< 2 minutes)
3. Free tier is generous
4. Best developer experience
5. Automatic preview deployments for pull requests

---

## 📞 Need Help?

If you encounter any issues during deployment, check:
1. Build logs in the platform dashboard
2. Ensure Node version is 18+ (set in platform settings)
3. Check that all dependencies are in `package.json`
4. Verify build output directory is set to `build`

---

## 🚀 Quick Deploy Commands

```bash
# Vercel CLI (Alternative to web interface)
npm i -g vercel
vercel --prod

# Netlify CLI
npm i -g netlify-cli
netlify deploy --prod

# GitHub Pages
git push origin main  # Automatically deploys via GitHub Actions
```

