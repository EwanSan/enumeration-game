# countries-smaller-than-switzerland

**Theme:** countries
**Date:** 2026-04-29

## Original
> Les pays dont la superficie est plus petite que celle de la Suisse ?

## Disambiguated
> Pays dont la superficie est strictement inférieure (<) à celle de la Suisse, selon les données REST Countries (eaux intérieures incluses). Seuls les États membres de l'ONU sont retenus. La Suisse elle-même est exclue.

## Source
- Dataset caché : `research/datasets/countries-base.json` (REST Countries API, champ `area`)
- Superficie de la Suisse dans ce dataset : **41 284 km²** (cca3=CHE)

## Raw output
60 pays retournés par le filtre `area < 41284 AND unMember == true AND cca3 != CHE`, triés par superficie décroissante :

Bhutan 38 394 | Moldova 33 847 | Belgium 30 528 | Lesotho 30 355 | Armenia 29 743 |
Solomon Islands 28 896 | Albania 28 748 | Equatorial Guinea 28 051 | Burundi 27 834 |
Haiti 27 750 | Rwanda 26 338 | North Macedonia 25 713 | Djibouti 23 200 | Belize 22 966 |
Israel 21 937 | El Salvador 21 041 | Slovenia 20 273 | Fiji 18 272 | Kuwait 17 818 |
Eswatini 17 364 | Timor-Leste 14 874 | Bahamas 13 943 | Montenegro 13 812 |
Vanuatu 12 189 | Qatar 11 586 | Jamaica 10 991 | Gambia 10 689 | Lebanon 10 452 |
Cyprus 9 251 | Brunei 5 765 | Trinidad and Tobago 5 130 | Cape Verde 4 033 |
Samoa 2 842 | Luxembourg 2 586 | Mauritius 2 040 | Comoros 1 862 |
São Tomé and Príncipe 964 | Kiribati 811 | Bahrain 765 | Dominica 751 | Tonga 747 |
Singapore 710 | Micronesia 702 | Saint Lucia 616 | Andorra 468 | Palau 459 |
Seychelles 452 | Antigua and Barbuda 442 | Barbados 430 |
Saint Vincent and the Grenadines 389 | Grenada 344 | Malta 316 | Maldives 300 |
Saint Kitts and Nevis 261 | Marshall Islands 181 | Liechtenstein 160 |
San Marino 61 | Tuvalu 26 | Nauru 21 | Monaco 2

## Normalization decisions
59 pays directement dans l'answerSet (même alias table que les questions précédentes).
1 pays absent de l'answerSet → ajouté :
- **El Salvador** : pays absent de l'answerSet (oubli), ajouté entre "Égypte" et "Émirats arabes unis".

Autres alias notables :
- Bhutan → Bhoutan
- Moldova → Moldavie
- Solomon Islands → Îles Salomon
- Equatorial Guinea → Guinée équatoriale
- North Macedonia → Macédoine du Nord
- Timor-Leste → Timor oriental
- Montenegro → Monténégro
- Jamaica → Jamaïque
- Gambia → Gambie
- Lebanon → Liban
- Cyprus → Chypre
- Trinidad and Tobago → Trinité-et-Tobago
- Cape Verde → Cap-Vert
- Mauritius → Maurice
- Comoros → Comores
- Bahrain → Bahreïn
- Dominica → Dominique
- Singapore → Singapour
- Saint Lucia → Sainte-Lucie
- Andorra → Andorre
- Palau → Palaos
- Antigua and Barbuda → Antigua-et-Barbuda
- Barbados → Barbade
- Saint Vincent and the Grenadines → Saint-Vincent-et-les-Grenadines
- Grenada → Grenade
- Malta → Malte
- Saint Kitts and Nevis → Saint-Kitts-et-Nevis
- Marshall Islands → Îles Marshall
- San Marino → Saint-Marin

## Final answer set (60 pays)
Bhoutan, Moldavie, Belgique, Lesotho, Arménie, Îles Salomon, Albanie, Guinée équatoriale,
Burundi, Haïti, Rwanda, Macédoine du Nord, Djibouti, Belize, Israël, El Salvador,
Slovénie, Fidji, Koweït, Eswatini, Timor oriental, Bahamas, Monténégro, Vanuatu,
Qatar, Jamaïque, Gambie, Liban, Chypre, Brunei, Trinité-et-Tobago, Cap-Vert,
Samoa, Luxembourg, Maurice, Comores, São Tomé-et-Príncipe, Kiribati, Bahreïn,
Dominique, Tonga, Singapour, Micronésie, Sainte-Lucie, Andorre, Palaos, Seychelles,
Antigua-et-Barbuda, Barbade, Saint-Vincent-et-les-Grenadines, Grenade, Malte,
Maldives, Saint-Kitts-et-Nevis, Îles Marshall, Liechtenstein, Saint-Marin,
Tuvalu, Nauru, Monaco
