# 🚀 Tirth Shah - Futuristic Digital Resume Website

A modern, animated portfolio website showcasing professional experience, projects, and skills with cutting-edge web technologies.

![Portfolio Preview](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?logo=vite)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-Latest-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38B2AC?logo=tailwind-css)

## ✨ Features

- 🎨 **Modern Design** - Futuristic dark theme with gradient accents
- ⚡ **Blazing Fast** - Built with Vite for optimal performance
- 🎬 **Smooth Animations** - Motion (Framer Motion) for fluid interactions
- 📱 **Fully Responsive** - Optimized for all screen sizes
- ♿ **Accessible** - Built with accessibility in mind
- 🎯 **SEO Optimized** - Complete meta tags, sitemap, and robots.txt
- 🔧 **Type-Safe** - Written in TypeScript
- 🎨 **UI Components** - shadcn/ui with Radix UI primitives

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | React 18.3.1 |
| **Language** | TypeScript |
| **Build Tool** | Vite 6.3.5 |
| **Styling** | Tailwind CSS v4 |
| **Animations** | Motion (Framer Motion) |
| **UI Components** | shadcn/ui + Radix UI |
| **Icons** | Lucide React |

## 📋 Sections

1. **Hero** - Introduction with social links
2. **Timeline** - Interactive experience and education timeline
3. **Projects** - Portfolio of technical projects
4. **Skills** - Categorized skill showcase
5. **Contact** - Contact information and form

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The development server will start at `http://localhost:3000`

## 📦 Project Structure

```
├── public/                 # Static assets
│   ├── favicon.svg        # Site favicon
│   ├── robots.txt         # SEO robots file
│   └── sitemap.xml        # SEO sitemap
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── figma/        # Figma-generated components
│   │   ├── Hero.tsx      # Hero section
│   │   ├── Timeline.tsx  # Experience timeline
│   │   ├── Projects.tsx  # Projects showcase
│   │   ├── Skills.tsx    # Skills section
│   │   └── Contact.tsx   # Contact section
│   ├── styles/           # Global styles
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Entry point
│   └── index.css         # Tailwind CSS
├── index.html            # HTML template
├── vite.config.ts        # Vite configuration
├── package.json          # Dependencies
├── DEPLOYMENT.md         # Deployment guide
├── vercel.json          # Vercel config
├── netlify.toml         # Netlify config
└── .github/workflows/   # GitHub Actions
```

## 🌐 Deployment

This project is ready to deploy on multiple platforms. See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

### Quick Deploy Options

#### Vercel (Recommended)
```bash
npm i -g vercel
vercel --prod
```

#### Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod
```

#### GitHub Pages
Push to GitHub and enable GitHub Actions in repository settings.

## 🎨 Customization

### Update Personal Information

Edit these files to customize the content:

1. **Hero Section** - `src/components/Hero.tsx`
   - Name, tagline, social links

2. **Timeline** - `src/components/Timeline.tsx`
   - Work experience and education

3. **Projects** - `src/components/Projects.tsx`
   - Project details and links

4. **Skills** - `src/components/Skills.tsx`
   - Skills and expertise

5. **Contact** - `src/components/Contact.tsx`
   - Contact information and form

6. **SEO** - `index.html`
   - Meta tags, title, description

### Update Domain URLs

Replace `https://tirthshah.dev/` in these files:
- `index.html` (Open Graph & Twitter meta tags)
- `public/robots.txt`
- `public/sitemap.xml`

## 🔧 Configuration

### Vite Configuration

The project uses custom path aliases configured in `vite.config.ts`:
- `@/` maps to `./src/`

### Environment Variables

Create a `.env` file for environment-specific variables:

```bash
# Example
VITE_ANALYTICS_ID=your-analytics-id
VITE_FORM_ENDPOINT=your-form-endpoint
```

Access in code: `import.meta.env.VITE_ANALYTICS_ID`

## 📊 Performance

- ⚡ Lighthouse Score: 95+ (Performance)
- 🎨 First Contentful Paint: < 1s
- 📦 Bundle Size: ~330KB (gzipped: ~105KB)
- 🖼️ Images: Optimized via Unsplash CDN

## 🤝 Contributing

This is a personal portfolio project, but suggestions are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available for personal use. Please provide attribution if you use this as a template.

## 👨‍💻 About

**Tirth Shah**
- 🔗 [GitHub](https://github.com/tirthshah7)
- 💼 [LinkedIn](https://www.linkedin.com/in/tirth-shah-pmp%C2%AE-555133166/)
- 📧 [Email](mailto:shahtirth0799@gmail.com)
- 🌐 [Website](https://www.theinspirededit.com)

---

<p align="center">Made with ❤️ using React, TypeScript, and Tailwind CSS</p>
