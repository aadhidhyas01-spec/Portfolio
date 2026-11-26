# THE INNOVATION STUDIO — AADHIDHYA

> "Curiosity Creates. Intelligence Innovates. Technology Transforms."

A modern, warm-editorial personal portfolio built for **Aadhidhya S** (AI & Machine Learning undergraduate, robotics explorer, and software developer) using **React, Vite, TypeScript, Tailwind CSS, Framer Motion, and Lucide React**.

## Tech Stack

- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS (`#F7F4EC` Warm Ivory, `#FFFFFF` Pure White, `#172B4D` Midnight Navy, `#4169E1` Electric Blue, `#FF8066` Coral Orange, `#21A99A` Fresh Teal, `#F2C96D` Soft Gold)
- **Motion**: Framer Motion (with `prefers-reduced-motion` support)
- **Icons**: Lucide React

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Customize Your Details

- **Profile, LinkedIn, Email & GitHub URL**: Edit `src/data/profile.ts`
- **Projects**: Edit `src/data/projects.ts`
- **Skills**: Edit `src/data/skills.ts`
- **Profile Photo & Resume PDF**: Place assets inside `public/images/` and `public/resume/`.

## GitHub & Vercel Deployment

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Aadhidhya Innovation Studio portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

### 2. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **Add New Project** and import your portfolio repository.
3. Keep the detected **Vite** preset (`Build Command: npm run build`, `Output Directory: dist`).
4. Click **Deploy** — Vercel will automatically build and publish your live site on every push to `main`.
# Portfolio
