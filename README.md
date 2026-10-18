# Ember & Bloom Café

Ember & Bloom is a polished, frontend-only café website customized from the
original [Munni Cafe](https://github.com/Madhusrivalli03/munni-cafe) project for
the Glacier InfoTech agency portfolio. It keeps the original project's warm
dark coffee aesthetic, glass cards, responsive layout, and motion design while
replacing backend-oriented surfaces with static café content.

## Features

- Welcoming animated hero with café branding and clear calls to action
- Café story with animated stats and responsive image treatment
- Static Coffee, Pastries, and Specials menu tabs
- Responsive gallery with an accessible fullscreen lightbox
- Guest testimonials and a floating WhatsApp contact action
- Opening hours, fictional location details, phone, email, and Google Maps link
- Contact form that opens the visitor's ordinary email client via `mailto:`
- Mobile navigation, active-section tracking, scroll reveals, and lightweight
  visual effects

## Technology

- Next.js 16 App Router
- React 19 and TypeScript
- Tailwind CSS 4 with the existing custom coffee theme
- shadcn/ui primitives
- Framer Motion animations
- Lucide React icons

## Local development

Requirements: Node.js 18 or newer and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Validation commands

```bash
npm run lint
npm run build
npm run start
```

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import the repository at [vercel.com](https://vercel.com).
3. Keep the framework preset as Next.js.
4. Use `npm run build` as the build command and deploy.

No environment variables are needed. The site does not use a database,
backend server, authentication, payment processing, API keys, or external
service configuration. Images and content are served from the repository's
`public/` directory.

## Project structure

```text
src/
├── app/
│   ├── globals.css       # Coffee theme, layout utilities, and animations
│   ├── layout.tsx        # Metadata and root layout
│   └── page.tsx          # Page composition
├── components/
│   ├── ui/               # Preserved shadcn/ui primitives
│   ├── AboutSection.tsx
│   ├── ContactSection.tsx
│   ├── GallerySection.tsx
│   ├── HeroSection.tsx
│   ├── MenuSection.tsx
│   └── ...
└── lib/utils.ts          # Shared class-name helper
```

## Attribution and license

This website is a customization of the original `Madhusrivalli03/munni-cafe`
repository. The original repository did not include a standalone `LICENSE`
file; its README described the project as MIT-licensed. Original project
attribution and notices are retained here, and this customization should not
be interpreted as claiming that all original code or assets were authored from
scratch by Glacier InfoTech. Review and preserve the original author's
licensing terms when redistributing the project.

The café name, contact details, menu copy, and other business information in
this portfolio version are fictional sample content.
