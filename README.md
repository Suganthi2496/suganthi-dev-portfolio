# Suganthi S Portfolio

Professional portfolio for **Suganthi S**, Senior Backend Developer (Python · FastAPI · Microservices), positioned backend-first while showcasing Full Stack capability (React.js · Next.js).

Built with **React + Vite**: fast, component-based, and easy to deploy.

## Tech stack

- **React 18** (functional components + hooks)
- **Vite 5** (dev server + build)
- Plain CSS with design tokens (no UI framework dependency)
- Zero runtime dependencies beyond React

## Project structure

```
portfolio/
├── index.html                       # Vite entry HTML (meta tags, fonts)
├── vite.config.js                   # Dev server + tunneled-host allowlist
├── vercel.json                      # Vercel deploy config
├── public/
│   └── Suganthi Backend Developer.pdf   # Downloadable résumé
├── src/
│   ├── main.jsx                     # React entry
│   ├── App.jsx                      # Section composition
│   ├── index.css                    # Theme, layout, animations
│   ├── data/portfolio.js            # All content lives here. Edit to update the site.
│   ├── hooks/
│   │   ├── useInView.js             # Reveal-on-scroll
│   │   └── useCountUp.js            # Animated stat counters
│   └── components/
│       ├── Nav.jsx  ScrollProgress.jsx  Hero.jsx  About.jsx
│       ├── Experience.jsx  Skills.jsx  Projects.jsx
│       ├── Education.jsx  Contact.jsx  Footer.jsx
│       └── Reveal.jsx               # Shared scroll-reveal wrapper
└── README.md
```

## Sections

1. **Hero**: headline, dual role chips (Backend-first), 3 animated stats, résumé download
2. **About**: backend-focused summary + quick-facts card
3. **Experience**: vertical timeline (3 roles, 2018 to present)
4. **Skills**: backend featured with proficiency bars; databases, frontend, integrations, tools, AI-assisted
5. **Projects**: 4 production systems with cursor-glow cards
6. **Education**: degree + schooling
7. **Contact**: email, phone, LinkedIn, location

## Develop locally

```bash
npm install
npm run dev      # http://localhost:5173
```

### Previewing over a tunnel (ngrok, etc.)

`vite.config.js` sets `host: true` and allowlists ngrok domains
(`.ngrok-free.app`, `.ngrok.io`, `.ngrok.app`) under `server.allowedHosts`, so you
can expose the dev server through a tunnel. For a different tunneling tool
(Cloudflare Tunnel, localtunnel, etc.), add its domain to that array.

## Build for production

```bash
npm run build    # outputs to dist/
npm run preview  # preview the production build
```

## Deploy

**Vercel** (matches the URL in the résumé):
```bash
npm i -g vercel
vercel --prod
```
Vercel auto-detects Vite via `vercel.json`. **Netlify**: build command `npm run build`, publish directory `dist`.

## Customize

- **All content** goes in `src/data/portfolio.js` (profile, stats, experience, skills, projects, education).
- **Colors / theme** are CSS variables in the `:root` block of `src/index.css`.
- **Skill bar levels** are the `level` values in `featuredSkills` (data file).
- **Résumé** can be replaced at `public/Suganthi Backend Developer.pdf` (keep the name) or repointed via `profile.resume`.

## Notes

- Fully responsive with an accessible mobile menu and active-section nav highlighting.
- Respects `prefers-reduced-motion`.
- SEO + Open Graph meta tags live in `index.html`. Update `og:url` to the deployed URL.
