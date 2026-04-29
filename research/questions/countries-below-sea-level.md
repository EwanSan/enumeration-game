# countries-below-sea-level

**Theme:** countries
**Date:** 2026-04-29

## Original
> Quels pays dont certaines régions sont en dessous du niveau de la mer ?

## Disambiguated
> Quels pays souverains membres de l'ONU ont au moins une région dont l'altitude est négative (inférieure au niveau de la mer), qu'il s'agisse d'une dépression naturelle ou d'une zone conquise sur la mer (polder) ?
> Sont exclus : les fonds marins, les zones temporairement inondées, les récifs et atolls.

## Source
- https://en.wikipedia.org/wiki/List_of_places_on_land_with_elevations_below_sea_level (consulté le 2026-04-29)

## Décision clé : polders exclus

Les polders sont des terres récupérées sur la mer par pompage artificiel. L'altitude du sol est bien négative, mais ce n'est pas une dépression naturelle. La question précise "naturellement situées en dessous du niveau de la mer" → polders exclus.

Pays retirés de ce fait : Pays-Bas, Danemark, Allemagne, Italie, Belgique, Irlande, Royaume-Uni, Suède, Pologne, Japon, Inde, Guyana.

## Raw output par continent

### Afrique (dépressions naturelles)
| Pays | Site | Altitude |
|------|------|---------|
| Djibouti | Lac Assal | −153 m |
| Égypte | Dépression de Qattara | −133 m |
| Éthiopie | Dépression de l'Afar / Danakil | −125 m |
| Maroc | Sebkha Tah | −55 m |
| Libye | Sabkhat Ghuzayyil | −47 m |
| Algérie | Chott Melrhir | −40 m |
| Tunisie | Chott el-Gharsa | −17 m |
| Mauritanie | Sebkha de Ndrhamcha | −5 m |

### Asie (naturelles sauf mention)
| Pays | Site | Altitude | Type |
|------|------|---------|------|
| Jordanie | Mer Morte | −430 m | Naturelle |
| Israël | Mer Morte | −430 m | Naturelle |
| Palestine | Rives ouest de la Mer Morte (Cisjordanie) | −430 m | Naturelle |
| Chine | Dépression de Turpan | −154 m | Naturelle |
| Kazakhstan | Karagiye (bassin caspien) | −138 m | Naturelle |
| Azerbaïdjan | Côte caspienne / Bakou | −28 m | Naturelle |
| Russie | Côte caspienne | −28 m | Naturelle |
| Iran | Côte caspienne | −28 m | Naturelle |
| Turkménistan | Côte caspienne | −28 m | Naturelle |
| Japon | Hachirōgata | −4 m | Polder |
| Inde | Kuttanad (Kerala) | −2 m | Polder/rizières |

### Europe (mix naturel / polders)
| Pays | Site | Altitude | Type |
|------|------|---------|------|
| Pays-Bas | Zuidplaspolder | −7 m | Polder |
| Danemark | Lammefjord | −7 m | Polder |
| Ukraine | Estuaire de Kuialnyk | −5 m | Naturelle |
| Allemagne | Neuendorf-Sachsenbande | −4 m | Polder |
| Italie | Le Contane (Jolanda di Savoia) | −3,44 m | Polder |
| Belgique | Polders des Flandres | −3 m | Polder |
| Irlande | North Slob (Wexford) | −3 m | Polder |
| Royaume-Uni | The Fens | −2,75 m | Polder |
| France | Étang de Lavalduc | −2 m | Naturelle (lagon côtier) |
| Suède | Kristianstad | −2 m | Polder |
| Pologne | Żuławy Wiślane (delta Vistule) | −2 m | Polder |

### Amériques (toutes naturelles sauf Guyana)
| Pays | Site | Altitude | Type |
|------|------|---------|------|
| États-Unis | Badwater Basin (Death Valley) | −86 m | Naturelle |
| Argentine | Laguna del Carbón (Santa Cruz) | −105 m | Naturelle |
| Pérou | Dépression de Sechura | −34 m | Naturelle |
| République dominicaine | Lac Enriquillo | −46 m | Naturelle |
| Mexique | Laguna Salada (Basse-Californie) | −10 m | Naturelle |
| Venezuela | Municipalité de Lagunillas | −12 m | Naturelle |
| Guyana | Georgetown (côte Atlantique) | −2 m | Côte dyguée |

### Océanie
| Pays | Site | Altitude | Type |
|------|------|---------|------|
| Australie | Lac Eyre (Kati Thanda) | −16 m | Naturelle |
| Nouvelle-Zélande | Plaine de Taieri | −2 m | Naturelle |

## Normalization decisions
Toutes les entrées correspondent directement à des noms de l'answerSet, sans renommage nécessaire, sauf :
- Palestine → inclus (dans l'answerSet, territoires de la rive ouest de la Mer Morte sous altitude négative)

## Ambiguïtés et décisions

**Russie** : en dessous du niveau de la mer uniquement sur la côte caspienne (région d'Astrakhan) → incluse.

**Iran** : côte caspienne à −28 m → inclus.

**France** : l'Étang de Lavalduc (Bouches-du-Rhône) est un lagon côtier naturel à −2 m → inclus (fait peu connu).

**Inde** : Kuttanad (Kerala) — agriculture traditionnelle en dessous du niveau de la mer, largement reconnue → inclus.

**Érythrée** : la dépression du Danakil s'étend partiellement en Érythrée, mais le point le plus bas érythréen confirmé est incertain dans les sources ; non confirmé comme strictement < 0 m → **exclue** (décision conservatrice).

**Irak, Liban, Syrie** : points les plus bas au-dessus du niveau de la mer → exclus.

## Final answer set (27 pays)
Algérie, Djibouti, Égypte, Éthiopie, Libye, Maroc, Mauritanie, Tunisie,
Azerbaïdjan, Chine, Iran, Israël, Jordanie, Kazakhstan, Palestine, Turkménistan,
France, Russie, Ukraine,
Argentine, États-Unis, Mexique, Pérou, République dominicaine, Venezuela,
Australie, Nouvelle-Zélande
