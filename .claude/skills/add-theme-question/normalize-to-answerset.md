# Normalizing source data to a theme's answerSet

When fetching answers from English-language sources (Wikipedia, REST Countries, Wikidata), the raw names rarely match the theme's French `answerSet` exactly. This document codifies the mapping rules.

## Procedure

1. **Read the theme file** (`server/src/data/themes/<theme>.js`) and extract `answerSet`.
2. **Build a normalization comparison** using the same rules as `server/src/utils/normalize.js`:
   - Unicode NFD decomposition
   - strip combining diacritics (`/[̀-ͯ]/g`)
   - lowercase
   - trim and collapse whitespace
3. For each raw source name, attempt these matchers in order:
   - **Exact match** against an `answerSet` entry (after normalization).
   - **Known alias** from the table below.
   - **Manual lookup**: stop, present the unmatched item to the user, get a decision before continuing.

Never silently rename, drop, or invent entries. Every non-trivial mapping goes in the research note.

## Known aliases (English → French answerSet entry, for the `countries` theme)

| Source (EN / variant)             | answerSet entry          | Note                                                  |
|-----------------------------------|--------------------------|-------------------------------------------------------|
| Czech Republic / Czechia          | Tchéquie                 |                                                       |
| Myanmar / Burma                   | Birmanie                 |                                                       |
| Eswatini / Swaziland              | Eswatini                 | Renamed in 2018; older sources may say Swaziland      |
| United States / USA               | États-Unis               |                                                       |
| United Kingdom / UK / Britain     | Royaume-Uni              |                                                       |
| Ivory Coast / Côte d'Ivoire       | Côte d'Ivoire            | Apostrophe is U+0027 in the answerSet                 |
| North Korea / DPRK                | Corée du Nord            |                                                       |
| South Korea / Republic of Korea   | Corée du Sud             |                                                       |
| Russia / Russian Federation       | Russie                   |                                                       |
| Cape Verde / Cabo Verde           | Cap-Vert                 |                                                       |
| East Timor / Timor-Leste          | Timor oriental           | Verify spelling against current answerSet             |
| Vatican / Holy See                | (likely absent)          | Often not in answerSets — confirm with user           |
| Taiwan / Republic of China        | (likely absent)          | Recognition-dependent — confirm with user             |
| Palestine / State of Palestine    | (likely absent)          | Recognition-dependent — confirm with user             |
| Kosovo                            | (likely absent)          | Recognition-dependent — confirm with user             |
| Macedonia / North Macedonia       | Macédoine du Nord        | Renamed in 2019                                       |
| Türkiye / Turkey                  | Turquie                  |                                                       |
| Netherlands / Holland             | Pays-Bas                 |                                                       |
| The Bahamas / Bahamas             | Bahamas                  |                                                       |
| The Gambia / Gambia               | Gambie                   |                                                       |
| Brunei Darussalam                 | Brunei                   |                                                       |
| Republic of the Congo / Congo     | Congo                    | Often distinct from "République démocratique du Congo"|
| DR Congo / DRC                    | République démocratique du Congo | Verify exact answerSet entry                  |
| Central African Republic          | Centrafrique             |                                                       |
| Saint Kitts and Nevis             | Saint-Kitts-et-Nevis     | Verify hyphens vs spaces                              |
| Saint Vincent and the Grenadines  | Saint-Vincent-et-les-Grenadines | Verify exact form                              |
| São Tomé and Príncipe             | Sao Tomé-et-Principe     | Diacritics vary — match the answerSet                 |

This table is a starting point. **Always cross-check against the actual answerSet** in the theme file before mapping — entries may be renamed or added over time.

## Handling unmatched items

When a raw name does not match any `answerSet` entry and isn't in the alias table:

1. **Pause the workflow.** Do not append the question yet.
2. **Present the item to the user** with the most likely candidates from the `answerSet` (use fuzzy match on the normalized form).
3. **Record the user's decision** in the research note's "Normalization decisions" section:
   - `Map to <entry>`: standard alias case, add to this table for future reuse.
   - `AnswerSet gap`: the entity is in scope but missing from the answerSet. Ask the user whether to extend the answerSet (separate change, not part of the question commit).
   - `Out of scope`: exclude the entity, document why (recognition, dependency status, geography).

## Updating this document

When a new alias is confirmed during a research session, append it to the table above. The table is a living artifact — its value grows with each question added.
