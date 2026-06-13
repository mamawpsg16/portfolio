# Kevin Mensah — Portfolio

Personal portfolio site built with **Vue 3** (`<script setup>` SFCs) and **Vite**. Single-page layout with sections for hero, about, skills, experience, education, and contact.

## Tech stack

- Vue 3 + Vite
- DM Sans (self-hosted) + custom CSS (`src/style.css`)
- Scroll reveal animations (`src/reveal.js`)
- Contact form via Web3Forms

## Project structure

```
src/
  App.vue            # root layout, section order
  main.js            # app entry
  reveal.js          # scroll-reveal helper
  style.css          # global styles
  components/
    NavBar.vue
    Hero.vue
    About.vue
    Skills.vue
    Experience.vue
    Education.vue
    Contact.vue
public/              # static assets (fonts, CV, images)
.github/workflows/   # CI / CD / AI review
```

## Local development

```bash
npm install
npm run dev      # start dev server
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

## CI / CD

GitHub Actions pipeline across `development` → `uat` → `main`:

| Workflow | File | Trigger |
| --- | --- | --- |
| CI (build check) | `.github/workflows/ci.yml` | PRs into `development`, `uat` |
| CD (deploy) | `.github/workflows/cd.yml` | PR into `main` (pre-merge check) + push to `main` (deploy) |
| AI Code Review | `.github/workflows/ai-review.yml` | PRs into `development`, `uat`, `main` |

## AI code review (Groq)

Every PR into `development`, `uat`, or `main` gets an automated review from Groq
(`llama-3.3-70b-versatile`). The workflow diffs the PR against its base branch and
asks the model for a structured review, then posts (and updates) a single comment:

- per-finding blocks: file + approximate line, **Severity** (High/Medium/Low), **Problem**, **Suggested fix**
- a plain-language **Summary**
- a final **Verdict**: `SAFE` / `NOT SAFE` (NOT SAFE if any High finding)

### Setup

Add a repository secret named `GROQ_API_KEY`
(Settings → Secrets and variables → Actions → New repository secret).

> The diff sent to the model is capped at 12000 bytes to stay within the context
> window — very large PRs may be reviewed only partially.
