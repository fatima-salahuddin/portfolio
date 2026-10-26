<h1>Portfolio</h1>

<p>
  <a href="https://portfolio-fatima-salahuddin.vercel.app"><img src="https://img.shields.io/badge/live-portfolio--fatima--salahuddin.vercel.app-0F172A?style=flat-square&logo=vercel&logoColor=white" alt="Live site"></a>
  <img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white" alt="Framer Motion">
</p>

My personal site: projects with case-study pages, skills, resume and contact.

**Live at [portfolio-fatima-salahuddin.vercel.app](https://portfolio-fatima-salahuddin.vercel.app)**

## Pages

| Route | Shows |
|---|---|
| `/` | introduction and highlights |
| `/projects` | project grid |
| `/projects/[slug]` | one page per project: problem, solution, features, stack |
| `/skills` | skills by area |
| `/resume` | resume with a PDF download |
| `/about`, `/contact` | background and a contact form |

## How it is built

- **Next.js App Router** with TypeScript, styled with Tailwind CSS, animated with Framer Motion
- **One source of content:** everything on the site comes from [`app/data/resume.ts`](app/data/resume.ts),
  so adding a project or a job is a single edit and the project pages are generated from it
- **Deployed on Vercel**, which rebuilds on every push to `main`

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

---

<sub>By <a href="https://github.com/fatima-salahuddin">Fatima Salahuddin</a></sub>
