# Reetesh Sahu — Premium Portfolio (React + Vite)

World‑class, glassmorphism, recruiter‑grade developer portfolio tailored to **Reetesh Sahu** (Full Stack Developer • Competitive Programmer).

## Tech

- React + Vite + TypeScript
- Tailwind CSS (design tokens + glass UI)
- Framer Motion (reveal/interaction animations)
- `cmdk` command palette + keyboard shortcuts
- `@tsparticles/react` particle field
- `react-helmet-async` SEO meta handling
- EmailJS-ready contact form (optional)

## Setup

```bash
cd reetesh-portfolio
npm install
npm run dev
```

Build:

```bash
npm run build
npm run preview
```

## Resume file

Place your real resume PDF at:

- `public/Reetesh_Sahu_Resume.pdf`

The Hero section will automatically use it for the **Resume** download button.

## Contact form (EmailJS)

The contact form supports **EmailJS** via environment variables. If they are not provided, the form falls back to opening a `mailto:` draft with the message pre-filled.

1. Copy `.env.example` to `.env`
2. Fill values:

```bash
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

## SEO / OpenGraph

- Global SEO: `index.html` (base meta + OG)
- Page-specific SEO: `react-helmet-async` in `src/pages/HomePage.tsx`
- OG image: `public/og-image.svg`

## Deploy

### Vercel

- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

Environment Variables (optional):
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

### Netlify

- Build Command: `npm run build`
- Publish Directory: `dist`

Environment Variables (optional): same as above.

## Performance notes (what’s already in place)

- Particles use the **slim** tsparticles bundle
- Animations respect `prefers-reduced-motion`
- Tailwind design tokens avoid heavy runtime styling
- SVG OG image + favicon are lightweight and cacheable

## Easter egg

Try the Konami code: ↑ ↑ ↓ ↓ ← → ← → B A

