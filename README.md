# El Paso Data Centers — Community Briefing

An independent, plain-language public briefing on the data centers coming to the El Paso region: how much **water** and **power** they need, how much we have, and what a fair city rule would do. Prepared by **Celaya Solutions Research LLC**.

**Live site:** once GitHub Pages is enabled (see below), this publishes at
`https://celaya-solutions.github.io/Draft-Policy/`

> This is an independent community briefing. It is **not** an official City of El Paso publication. Every number is sourced. The legal documents are drafts and are not legal advice; consult counsel before any official action. Content is public domain. Corrections welcome.

## What's here

- `index.html` — the full public briefing (water, power, what's being built, the model ordinance, how to take action, the lab). White / navy / sun-gold, El Paso colors, ~8th-grade reading level, English with a Spanish summary, mobile-friendly and printable.
- `documents/`
  - `El_Paso_Data_Center_Ordinance_DRAFT.docx` — the full model city ordinance (Articles 1–8).
  - `Project_Jupiter_Evidence_Record.docx` — fact brief, water-balance math, dispute timeline, and index of 68 public records.
  - `El_Paso_Data_Center_Ordinance_CROSSWALK.docx` — maps the model ordinance to the City's draft framework.
  - `El_Paso_Data_Centers_Public_Explainer.html` — a shorter one-page version for handouts.

## The numbers, in brief

- El Paso uses ~**105 million gallons/day**; the regional supply cushion is ~**8.7 million gallons/day**.
- Combined data-center demand at full build-out is ~**1.56 million gallons/day** = **17.9%** of that cushion.
- El Paso Electric can make ~**2,300 MW**; record peak is **2,173 MW** (a ~**127 MW** cushion). Two data centers alone want ~**250 MW**.

Sources are listed on the page and in the Evidence Record.

## Publish with GitHub Pages

1. Push this folder to `https://github.com/celaya-solutions/Draft-Policy` (see below).
2. On GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**.
3. Branch: `main`, folder: `/ (root)`. Save.
4. Wait ~1 minute. The site appears at `https://celaya-solutions.github.io/Draft-Policy/`.

The included `.nojekyll` file tells GitHub Pages to serve the files as-is.

## Push it (first time)

From inside this folder:

```bash
git remote add origin https://github.com/celaya-solutions/Draft-Policy.git
git branch -M main
git push -u origin main
```

If the remote already has commits, pull first (`git pull origin main --allow-unrelated-histories`) or force with care.

---

*Celaya Solutions Research LLC — El Paso, Texas. Built to be checked.*
