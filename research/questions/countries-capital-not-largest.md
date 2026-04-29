# countries-capital-not-largest

**Theme:** countries
**Date:** 2026-04-29

## Original
> Pays dont la capitale n'est pas la ville la plus peuplée ?

## Disambiguated
> Pays membres de l'ONU dont la capitale officielle (siège du gouvernement) n'est pas la ville la plus peuplée au sens de la population intra-muros (city proper), selon la liste Wikipedia EN "List of countries whose capital is not their largest city".

**Définition de "ville la plus peuplée" :** population intra-muros (city proper) — les aires urbaines et métropolitaines sont exclues car moins comparables d'un pays à l'autre.
**Définition de "capitale" :** siège du gouvernement (executive capital) pour les pays à capitales multiples.

## Source
- Wikipedia EN: `https://en.wikipedia.org/wiki/List_of_countries_whose_capital_is_not_their_largest_city` — accessed 2026-04-29
- Liste humainement vérifiée, utilisant la population city proper de façon cohérente.

## Raw output
37 entrées dans la table Wikipedia ; 2 exclues (non-membres de l'ONU) :
- **Palestine** : État observateur à l'ONU, non membre
- **Taïwan** : non membre de l'ONU

35 pays retenus :

| Pays (EN) | Capitale | Plus grande ville |
|---|---|---|
| Australia | Canberra | Sydney |
| Belize | Belmopan | Belize City |
| Benin | Porto-Novo | Cotonou |
| Bolivia | Sucre | Santa Cruz de la Sierra |
| Brazil | Brasília | São Paulo |
| Burundi | Gitega | Bujumbura |
| Cameroon | Yaoundé | Douala |
| Canada | Ottawa | Toronto |
| China | Beijing | Shanghai |
| Ecuador | Quito | Guayaquil |
| Equatorial Guinea | Ciudad de la Paz | Malabo |
| Gambia | Banjul | Serrekunda |
| India | New Delhi | Mumbai |
| Israel | Jerusalem | Tel Aviv |
| Ivory Coast | Yamoussoukro | Abidjan |
| Kazakhstan | Astana | Almaty |
| Liechtenstein | Vaduz | Schaan |
| Malta | Valletta | St. Paul's Bay |
| Micronesia | Palikir | Weno |
| Morocco | Rabat | Casablanca |
| Myanmar | Naypyidaw | Yangon |
| New Zealand | Wellington | Auckland |
| Nigeria | Abuja | Lagos |
| Pakistan | Islamabad | Karachi |
| Palau | Ngerulmud | Koror |
| Philippines | Manila | Quezon City |
| San Marino | San Marino (city) | Serravalle |
| South Africa | Pretoria | Johannesburg |
| Switzerland | Bern | Zürich |
| Tanzania | Dodoma | Dar es Salaam |
| Trinidad and Tobago | Port of Spain | Chaguanas |
| Turkey | Ankara | Istanbul |
| United Arab Emirates | Abu Dhabi | Dubai |
| United States | Washington, D.C. | New York City |
| Vietnam | Hanoi | Ho Chi Minh City |

## Edge cases documentés

| Pays | Situation | Décision |
|---|---|---|
| Afrique du Sud | 3 capitales (Pretoria exécutive, Cape Town législative, Bloemfontein judiciaire) ; plus grande ville : Johannesburg | Inclus — aucune des capitales n'est Johannesburg |
| Côte d'Ivoire | Yamoussoukro = capitale officielle depuis 1983 ; Abidjan = capitale économique et de facto | Inclus — Wikipedia liste Yamoussoukro comme capitale |
| Bolivie | Sucre = capitale constitutionnelle ; La Paz = siège du gouvernement ; plus grande ville : Santa Cruz | Inclus tel quel, Wikipedia tranche sur Sucre |
| Suisse | Berne = Bundesstadt (ville fédérale), pas de capitale légale | Inclus — Wikipedia l'inclut dans la liste |
| Guinée équatoriale | Nouvelle capitale Ciudad de la Paz (ex-Oyala) depuis 2020 ; Malabo reste centre de facto | Inclus tel quel per Wikipedia |
| Philippines | Capitale Manila, plus grande ville Quezon City (toutes deux dans la région du Grand Manille) | Inclus — city proper, Quezon City > Manila |
| Chine | Beijing est à la fois capitale et très grande ville ; Shanghai > Beijing city proper | Inclus per Wikipedia (Shanghai city proper > Beijing city proper) |

## Normalization decisions
Tous les 35 pays directement dans l'answerSet, aucun ajout nécessaire.

Alias notables :
- Benin → Bénin
- Bolivia → Bolivie
- Brazil → Brésil
- Cameroon → Cameroun
- China → Chine
- Ecuador → Équateur
- Equatorial Guinea → Guinée équatoriale
- Gambia → Gambie
- India → Inde
- Ivory Coast → Côte d'Ivoire
- Morocco → Maroc
- Myanmar → Birmanie
- New Zealand → Nouvelle-Zélande
- San Marino → Saint-Marin
- South Africa → Afrique du Sud
- Switzerland → Suisse
- Tanzania → Tanzanie
- Trinidad and Tobago → Trinité-et-Tobago
- Turkey → Turquie
- United Arab Emirates → Émirats arabes unis
- United States → États-Unis
- Vietnam → Viêt Nam

## Final answer set (35 pays)
Australie, Belize, Bénin, Bolivie, Brésil, Burundi, Cameroun, Canada, Chine,
Équateur, Guinée équatoriale, Gambie, Inde, Israël, Côte d'Ivoire, Kazakhstan,
Liechtenstein, Malte, Micronésie, Maroc, Birmanie, Nouvelle-Zélande, Nigeria,
Pakistan, Palaos, Philippines, Saint-Marin, Afrique du Sud, Suisse, Tanzanie,
Trinité-et-Tobago, Turquie, Émirats arabes unis, États-Unis, Viêt Nam
