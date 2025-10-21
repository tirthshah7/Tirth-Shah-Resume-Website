# 🎯 Quick Start Guide

## ⚡ Get Running in 2 Minutes

### Step 1: Start Development Server
```bash
npm run dev
```
✅ Opens automatically at `http://localhost:3000`

### Step 2: View Your Site
Your futuristic portfolio is now running locally! 🎉

---

## 🚀 Deploy to Internet (Choose One)

### 🟢 Option 1: Vercel (Fastest - 3 minutes)

1. Create GitHub account (if needed) at github.com
2. Create new repository
3. Run these commands:
   ```bash
   git init
   git add .
   git commit -m "My portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

4. Go to [vercel.com](https://vercel.com)
5. Sign in with GitHub
6. Click "New Project" → Import your repo
7. Click "Deploy"
8. **Done!** Your site is live at `https://your-name.vercel.app`

### 🔵 Option 2: Netlify (Drag & Drop - 1 minute)

1. Build your site:
   ```bash
   npm run build
   ```

2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag the `build` folder onto the page
4. **Done!** Your site is live instantly!

### 🟣 Option 3: GitHub Pages (Free from GitHub)

1. Push code to GitHub (same as Vercel steps 1-3)
2. Go to your repo → Settings → Pages
3. Under "Build and deployment" → Source: "GitHub Actions"
4. Push code: `git push`
5. **Done!** Live at `https://YOUR_USERNAME.github.io/YOUR_REPO/`

---

## ✏️ Customize Your Content

### Update Personal Info (5 minutes)

**1. Hero Section** - `src/components/Hero.tsx`
```typescript
// Line 27: Change your name
<motion.h1>Your Name</motion.h1>

// Line 51: Update your title/roles
Developer | Engineer | Your Role

// Lines 94-100: Update social links
href="YOUR_GITHUB_URL"
href="YOUR_LINKEDIN_URL"
href="YOUR_EMAIL"
```

**2. Projects** - `src/components/Projects.tsx`
- Edit the `projects` array (starting line 21)
- Update titles, descriptions, images, GitHub links

**3. Skills** - `src/components/Skills.tsx`
- Edit `skillCategories` array (starting line 13)
- Add/remove your skills

**4. Experience** - `src/components/Timeline.tsx`
- Edit `timelineData` array (starting line 18)
- Update your work history

**5. Contact** - `src/components/Contact.tsx`
- Line 60: Update email
- Line 70: Update location

**6. SEO & Meta Tags** - `index.html`
- Lines 8-26: Update title, description, URLs
- Replace `https://tirthshah.dev/` with your domain

---

## 🎨 Common Customizations

### Change Color Scheme

Edit `src/App.tsx` line 14-15:
```typescript
// Current: cyan and purple
<div className="... bg-cyan-500/20 ..." />
<div className="... bg-purple-500/20 ..." />

// Change to any Tailwind color:
// blue, green, pink, orange, red, indigo, teal
```

### Add Google Analytics

1. Get your GA4 ID from analytics.google.com
2. Add to `index.html` before `</head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Connect Contact Form

The form currently shows an alert. To make it work:

**Option A: Formspree (Easiest)**
1. Go to formspree.io
2. Create free account
3. Get your form endpoint
4. Update `src/components/Contact.tsx` line 13:
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const formData = new FormData(e.target as HTMLFormElement);
  await fetch('YOUR_FORMSPREE_ENDPOINT', {
    method: 'POST',
    body: formData,
    headers: { 'Accept': 'application/json' }
  });
  alert('Message sent!');
};
```

**Option B: Netlify Forms** (if using Netlify)
1. Add `netlify` attribute to form tag
2. No backend needed - emails go to your Netlify dashboard

---

## 📊 Performance Tips

### Optimize Images
- Use WebP format for faster loading
- Compress images at tinypng.com
- Use appropriate sizes (max 1920px width)

### Reduce Bundle Size
Already optimized! But if you remove unused components:
```bash
# Remove unused dependencies
npm uninstall package-name
```

---

## 🆘 Troubleshooting

### "Module not found" Error
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Fails
```bash
npm run build
# Check the error message
# Usually means a TypeScript type error - fix in the file mentioned
```

### Port 3000 Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
# Or change port in vite.config.ts
```

### Images Not Loading
- Check image URLs in project files
- Ensure images are in `public/` folder or use CDN URLs

---

## 🎓 Learn More

- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite Guide](https://vitejs.dev)
- [Framer Motion](https://www.framer.com/motion/)

---

## ✅ Pre-Launch Checklist

- [ ] Updated all personal information
- [ ] Tested all social links
- [ ] Added your projects
- [ ] Updated skills
- [ ] Changed domain URLs in meta tags
- [ ] Tested on mobile device
- [ ] Ran `npm run build` successfully
- [ ] Connected contact form (optional)
- [ ] Added analytics (optional)

---

**Need help?** Check DEPLOYMENT.md for detailed deployment instructions!

**Ready to deploy?** Choose a platform above and go live! 🚀

