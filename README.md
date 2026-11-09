# Sk Sarfaraj Ali — Premium Developer Portfolio

A modern, responsive **React + Vite + Tailwind CSS** single-page developer portfolio, featuring Framer Motion animations and Lucide icons. Built for local development first, without deployment or backend services.

**Live site:** https://sarfaraj666.github.io/pfolio/

## Quick start

You need **Node.js 18+** and npm, plus an internet connection for the first dependency installation.

```bash
npm install
npm run dev
```

Open the local URL displayed in your terminal (typically `http://127.0.0.1:5173/`).

To create a production build on your computer:

```bash
npm run build
npm run preview
```

## Folder map

```
Sarfaraj_Premium_Portfolio/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   ├── favicon.svg
│   └── images/
│       └── README.md
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── styles.css
│   └── data/
│       └── portfolio.js  ← edit all content, projects and links here
└── README.md
```

## Replace the placeholders

1. **Profile photo**: put your original photo in `public/images/profile.webp`. Set `profileImage: '/images/profile.webp'` in `src/data/portfolio.js`.
2. **Project screenshots**: put real screenshots in `public/images/feality.webp` and `public/images/portfolio.webp`. Set each project's `screenshot` value to the corresponding path. The current graphics are openly labelled **concept placeholders**, not fabricated screenshots.
3. **Resume**: put your PDF into `public/resume.pdf`; set `resumeUrl: '/resume.pdf'`. Until then the UI clearly says “Resume coming soon.”
4. **Contact details**: edit `src/data/portfolio.js`. Confirm email and LinkedIn profile address before publishing. The phone number is kept off the public-facing UI by default (`showPhone: false`); change it only if you want to publish it.
5. **Projects**: replace descriptions and add new project objects in the `projects` array. Do not add repository links that aren't verified.

## What works

- Full responsive layout for desktops, tablets and mobile
- Sticky navigation with mobile menu and active section tracking
- Dark/light theme toggle, saved locally in the browser
- Smooth anchor navigation and scroll-triggered motion
- Hero text transition and lightweight ambient cursor-follow effect
- Editable skills, project cards, GitHub/LinkedIn/email links
- Contact form input validation and direct email submission through FormSubmit
- Accessibility essentials: semantic sections, labels, skip link, focus rings, reduced-motion support
- Basic search engine and social metadata

## Important limitations

- The contact form uses FormSubmit. The first submission requires confirming the activation email sent to the portfolio inbox before future messages are delivered.
- GitHub Pages deploys the site automatically after pushes to the `main` branch.
- The included initial concept project visuals should be replaced with authentic screenshots before a public launch.
- The portfolio email came from prior user-provided resume details; verify it before publishing. The LinkedIn URL provided for this project may differ from the one linked in your GitHub bio.
- External typefaces are requested from Google Fonts when a network connection is available; system fonts are used as fallback.
- Dependency installation/build verification could not run in the generation environment if registry/network access is blocked. Run `npm install` and `npm run build` on your computer.

## Local-only handover checklist

- [ ] Add your profile image
- [ ] Provide project screenshots
- [ ] Confirm LinkedIn and email
- [ ] Add resume PDF when ready
- [ ] Run `npm install && npm run build`
- [ ] Check browser views and inspect contact links

This project intentionally contains no credentials, no analytics trackers, no real form backend and no deployment automation.
