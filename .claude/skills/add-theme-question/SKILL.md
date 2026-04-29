---
name: add-theme-question
description: Use when the user wants to add a new researched question to a game theme (e.g. "add a question to the countries theme", "ajoute une question sur les pays X"). Standardizes the research workflow so each question is traceable, reviewable, and validated against the theme's answerSet.
---

# Add a researched question to a theme

This skill defines a 5-step workflow to add a new question to a theme file under `server/src/data/themes/`. Each question requires research (data lookup, criterion definition, normalization). The workflow produces:

1. A **research note** under `research/questions/<question-id>.md` documenting source and decisions.
2. (Optionally) a **cached dataset** under `research/datasets/` if the source is reusable for future questions.
3. A **new entry** appended to the theme file's `questions` array.

The existing `server/src/data/themeLoader.js` validates at startup that every `correctAnswer` belongs to the theme's `answerSet`. That validator is the safety net — do not bypass it.

## Workflow

### Step 1 — Disambiguate the question

Restate the user's question in a precise, unambiguous form. Ask the user to confirm if the disambiguation changes the intent.

Example:
- Original: "Quels sont les pays frontaliers de la Russie ?"
- Disambiguated: "Pays partageant une frontière terrestre avec la Russie (frontières maritimes exclues, États reconnus par l'ONU)."

Common ambiguity axes to consider:
- Land vs maritime borders
- De jure vs de facto borders (disputed territories)
- UN-recognized states only, or include partially-recognized ones (Kosovo, Taiwan, Palestine, etc.)
- Numerical thresholds: strict `>` vs `>=`
- Year of measurement (population, GDP) — pin to a year and source

Record both the original and disambiguated form in the research note.

### Step 2 — Pick a strategy

Decide where the data comes from. Order of preference:
1. **A cached dataset already in `research/datasets/`** — reuse it.
2. **A simple authoritative web source** — Wikipedia list page, REST Countries API, World Bank.
3. **A Wikidata SPARQL query** — for structured queries that don't have a ready-made list.
4. **Geospatial computation** — only when the criterion is intrinsically geometric (intersects equator, contains peak > 3000m). Use `uv run --with geopandas --with shapely python -c "..."` ad-hoc; do not create a venv in the repo.

See `sources.md` for a curated list of sources per question type.

### Step 3 — Fetch / compute

Execute the strategy:
- **WebFetch** for Wikipedia HTML pages.
- **`curl` or `python3`** for JSON APIs.
- **`uv run --with <pkg> python -c "..."`** for transient scientific dependencies. Never `pip install` into the system Python and never create a `requirements.txt` in the repo.

If the dataset is reusable across multiple questions (country areas, populations, capitals, borders, continents, ISO codes), save it to `research/datasets/<descriptive-name>.json`. Pretty-print so diffs are readable.

If the dataset is one-off (a Wikipedia list of monarchies), do not save it — just paste the raw output into the research note.

### Step 4 — Normalize to the answerSet

Read the theme file (`server/src/data/themes/<theme>.js`) to get the canonical vocabulary. Map the raw source names to entries in the `answerSet`.

See `normalize-to-answerset.md` for mapping rules and common gotchas (Tchéquie/Czech Republic, Birmanie/Myanmar, Eswatini/Swaziland, États-Unis/USA, etc.).

For every raw name that does NOT match an `answerSet` entry, stop and ask the user. Possible cases:
- **Name mismatch** — different spelling, propose the corresponding answerSet entry.
- **AnswerSet gap** — the entity exists but isn't in the answerSet (e.g. Vatican). User decides to add it or exclude it.
- **Out of scope** — entity isn't a country (e.g. Hong Kong, Greenland). User decides.

Never silently drop or rename entries — every decision goes in the research note.

### Step 5 — Append to the theme

Once all answers are normalized:

1. Choose a stable, descriptive `id` in `kebab-case`, prefixed by the theme: `countries-borders-russia`, `countries-peaks-3000m`. The id doubles as the research note filename.
2. Edit `server/src/data/themes/<theme>.js` and append to the `questions` array:
   ```js
   {
     id: "countries-borders-russia",
     text: "Quels pays partagent une frontière terrestre avec la Russie ?",
     correctAnswers: ["Norvège", "Finlande", ...],
   },
   ```
3. Restart the server (`cd server && npm run dev`). `themeLoader.js` will throw if any `correctAnswer` is not in the `answerSet` — that's the final check.

## Research note template

Save as `research/questions/<question-id>.md`:

```markdown
# <question-id>

**Theme:** <theme-id>
**Date:** <YYYY-MM-DD>

## Original
> <user's original question>

## Disambiguated
> <precise restatement>

## Source
- <URL(s) with access date>
- <SPARQL query / API call / dataset reference>

## Raw output
<paste raw list, or "see research/datasets/<file>.json">

## Normalization decisions
- <raw name> → <answerSet entry> (reason if non-obvious)
- <flagged item> → excluded because <reason, user-confirmed>

## Final answer set
<final list of correctAnswers as appended to the theme>
```

## See also
- `normalize-to-answerset.md` — name mapping rules
- `sources.md` — curated source list per question type
