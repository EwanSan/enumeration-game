# countries-southern-hemisphere

**Theme:** countries
**Date:** 2026-04-29

## Original
> Les pays de l'hémisphère Sud ?

## Disambiguated
> Pays membres de l'ONU dont le centroïde géographique (champ `latlng` de REST Countries) est à une latitude strictement inférieure à 0° (hémisphère Sud). Critère : territoire majoritairement au sud de l'équateur, approché par la position du centroïde national.

## Source
- Dataset caché : `research/datasets/countries-base.json` (REST Countries API, champ `latlng`)
- Filtre : `latlng[0] < 0 AND unMember == true`

## Décision de disambiguation
Utiliser le centroïde (< 0°) plutôt qu'un critère binaire (territoire entièrement au sud) ou le critère de la capitale, car :
- c'est la définition la plus neutre et calculable automatiquement
- elle correspond à l'intuition « pays dont la majorité du territoire est dans l'hémisphère Sud »
- elle est cohérente avec le dataset déjà en cache

## Cas limites documentés
| Pays | Latitude centroïde | Note |
|---|---|---|
| Gabon | −1,00° | Inclus — centroïde au sud, mais territoire straddling l'équateur |
| République du Congo | −1,00° | Inclus — idem |
| Nauru | −0,53° | Inclus — île minuscule juste au sud de l'équateur |
| Équateur | −2,00° | Inclus — centroïde au sud malgré le nom |
| Rwanda | −2,00° | Inclus |
| Rép. dém. du Congo | 0,00° | **Exclu** — centroïde exactement sur l'équateur |
| Ouganda | +1,00° | Exclu — centroïde au nord |
| Kenya | +1,00° | Exclu — centroïde au nord |
| São Tomé-et-Príncipe | +1,00° | Exclu — centroïde au nord |

## Raw output (39 pays, du plus au moins austral)
Nouvelle-Zélande −41° | Argentine −34° | Uruguay −33° | Chili −30° |
Lesotho −29,5° | Afrique du Sud −29° | Australie −27° | Eswatini −26,5° |
Paraguay −23° | Namibie −22° | Botswana −22° | Maurice −20,3° | Tonga −20° |
Zimbabwe −20° | Madagascar −20° | Mozambique −18,3° | Fidji −17,7° |
Bolivie −17° | Vanuatu −16° | Zambie −15° | Samoa −13,6° | Malawi −13,5° |
Angola −12,5° | Comores −12,2° | Brésil −10° | Pérou −10° |
Timor oriental −8,8° | Tuvalu −8° | Îles Salomon −8° | Tanzanie −6° |
Papouasie-Nouvelle-Guinée −6° | Indonésie −5° | Seychelles −4,6° |
Burundi −3,5° | Équateur −2° | Rwanda −2° | Gabon −1° |
République du Congo −1° | Nauru −0,5°

## Normalization decisions
Tous les 39 pays directement dans l'answerSet, aucun ajout nécessaire.

## Final answer set (39 pays)
Afrique du Sud, Angola, Argentine, Australie, Bolivie, Botswana, Brésil, Burundi,
Chili, Comores, Équateur, Eswatini, Fidji, Gabon, Îles Salomon, Indonésie,
Lesotho, Madagascar, Malawi, Maurice, Mozambique, Namibie, Nauru, Nouvelle-Zélande,
Papouasie-Nouvelle-Guinée, Paraguay, Pérou, République du Congo, Rwanda, Samoa,
Seychelles, Tanzanie, Timor oriental, Tonga, Tuvalu, Uruguay, Vanuatu, Zambie, Zimbabwe
