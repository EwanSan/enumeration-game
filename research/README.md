# Research artifacts

This folder holds the provenance for every researched question added to a theme. It is **versioned in the repo** so corrections are traceable, but it is **not shipped to the server runtime** — only `server/src/data/themes/*.js` is consumed by the game.

Layout:
- `datasets/` — cached source data (REST Countries dump, borders table, populations, …) reused across questions. Pretty-printed JSON.
- `questions/` — one markdown note per question, named after the question's `id` (e.g. `countries-borders-russia.md`). Each note records the original prompt, the disambiguated form, the source (with URL and access date), the raw output, and the normalization decisions.

To add a new question, use the `add-theme-question` skill (see `.claude/skills/add-theme-question/SKILL.md`).
