# countries-multiple-timezones

**Theme:** countries
**Date:** 2026-04-29

## Original
> Pays avec plusieurs fuseaux horaires ?

## Disambiguated
> Quels pays utilisent officiellement plusieurs fuseaux horaires (territoires d'outre-mer inclus) ?

**Critères retenus :**
1. **Fuseaux officiels uniquement** — pas les usages informels. Ex : la Chine utilise officiellement UTC+8 partout (le Xinjiang suit informellement UTC+6) → exclue.
2. **Territoires d'outre-mer inclus** — la France métropolitaine est sur un seul fuseau, mais ses territoires (Polynésie, Martinique, Réunion…) lui en confèrent 12 → incluse.
3. **Snapshot au 2026-04-29** — le Kazakhstan a unifié ses fuseaux le 1er mars 2024 → exclu.

## Sources
- https://en.wikipedia.org/wiki/Time_zone (consulté le 2026-04-29)
- https://en.wikipedia.org/wiki/List_of_UTC_offsets (consulté le 2026-04-29)
- Pages individuelles Wikipedia pour France, Espagne, Portugal, Royaume-Uni, Équateur, RDC, Kazakhstan, Mongolie, Chili, Danemark, Pays-Bas, Micronésie, Papouasie-Nouvelle-Guinée

## Raw output (par pays)

| Pays | Nb fuseaux | Notes |
|------|-----------|-------|
| Russie | 11 | UTC+2 → UTC+12 |
| États-Unis | 6+ | UTC-10 (Hawaii) → UTC-5 (Est) + territoires |
| Canada | 6 | UTC-8 → UTC-3:30 |
| Australie | 5–6 | Dont UTC+8:45 (Eucla) et UTC+9:30 (Australie du Sud) |
| Brésil | 4 | UTC-5 → UTC-2 (Fernando de Noronha) |
| Mexique | 3 | UTC-8 → UTC-6 |
| Indonésie | 3 | UTC+7 / UTC+8 / UTC+9 |
| France | 12 | UTC-10 (Polynésie) → UTC+12 (Wallis-et-Futuna) |
| Kiribati | 3 | UTC+12 / UTC+13 / UTC+14 |
| Nouvelle-Zélande | 3 | Dont UTC+12:45 (îles Chatham) |
| Espagne | 2 | Espagne continentale UTC+1, îles Canaries UTC+0 |
| Portugal | 2 | Continent + Madère UTC+0 ; Açores UTC-1 |
| Royaume-Uni | multiple | Territoire principal GMT ; territoires UTC-8 → UTC+6 |
| Équateur | 2 | Continent UTC-5 ; Galápagos UTC-6 |
| RDC | 2 | UTC+1 (ouest) / UTC+2 (est) — seul pays africain à 2 fuseaux |
| Mongolie | 2 | Provinces de l'ouest (Khovd, Uvs, Bayan-Ölgii) UTC+7 ; reste UTC+8 |
| Chili | 3 | Chili continental / Magallanes UTC-3 / Île de Pâques UTC-6 |
| Danemark | 6 | Danemark + Féroé + Groenland (plusieurs zones dont UTC-4) |
| Pays-Bas | 2 | Pays-Bas européens UTC+1 ; Pays-Bas caribéens (Bonaire, Saba, Sint Eustatius) UTC-4 |
| Micronésie | 2 | Ouest UTC+10 ; Est UTC+11 |
| Papouasie-Nouvelle-Guinée | 2 | Continent UTC+10 ; Bougainville UTC+11 |

## Ambiguïtés et décisions

**Chine** : officiellement 1 fuseau (UTC+8). Le Xinjiang utilise UTC+6 de facto mais non officiellement → **exclue**.

**Kazakhstan** : utilisait 2 fuseaux ; unifié à UTC+5 le 1er mars 2024 → **exclu**.

**Norvège** : Svalbard et Jan Mayen suivent le même fuseau que le continent (UTC+1/+2) → **exclue**.

**Danemark** : Groenland est un territoire autonome du Royaume du Danemark, les Féroé aussi. Inclus car ils font formellement partie du royaume danois, au même titre que les territoires français.

**Pays-Bas** : Aruba, Curaçao, Sint Maarten sont des pays constituants du Royaume des Pays-Bas (comme le Groenland pour le Danemark). Les Pays-Bas caribéens (Bonaire, Saba, Sint Eustatius) sont des communes néerlandaises directes. La distinction officielle vs de facto est nette ici → **inclus**.

## Normalization decisions
Tous les 21 pays sont dans l'answerSet sans renommage nécessaire.

## Final answer set
"Russie", "États-Unis", "Canada", "Australie", "Brésil",
"Mexique", "Indonésie", "France", "Kiribati", "Nouvelle-Zélande",
"Espagne", "Portugal", "Royaume-Uni", "Équateur", "République démocratique du Congo",
"Mongolie", "Chili", "Danemark", "Pays-Bas", "Micronésie",
"Papouasie-Nouvelle-Guinée"
