# countries-landlocked

**Theme:** countries
**Date:** 2026-04-29

## Original
> Pays sans littoral ?

## Disambiguated
> Pays membres de l'ONU dont le territoire n'a aucun accès à la mer (landlocked), y compris les pays bordant uniquement la mer Caspienne (mer intérieure / bassin endoréique). La Caspienne n'est pas considérée comme un océan ou une mer ouverte.

## Source
- Dataset caché : `research/datasets/countries-base.json` (REST Countries API, champ `landlocked`)
- Filtre : `landlocked == true AND unMember == true`

## Raw output
43 pays retournés :

Afghanistan, Andorra, Armenia, Austria, Azerbaijan, Belarus, Bhutan, Bolivia,
Botswana, Burkina Faso, Burundi, Central African Republic, Chad, Czechia,
Eswatini, Ethiopia, Hungary, Kazakhstan, Kosovo*, Kyrgyzstan, Laos, Lesotho,
Liechtenstein, Luxembourg, Malawi, Mali, Moldova, Mongolia, Nepal, Niger,
North Macedonia, Paraguay, Rwanda, San Marino, Serbia, Slovakia, South Sudan,
Switzerland, Tajikistan, Turkmenistan, Uganda, Uzbekistan, Zambia, Zimbabwe

*Kosovo : `unMember == false` dans le dataset REST Countries → exclu. 42 pays retenus après filtre.

Note : Azerbaïdjan et Turkménistan bordent la mer Caspienne → inclus (mer intérieure).

## Normalization decisions
2 alias manquants dans le dictionnaire initial, corrigés :
- Andorra → **Andorre**
- Turkmenistan → **Turkménistan**

Autres alias notables :
- Armenia → Arménie
- Belarus → Biélorussie
- Bhutan → Bhoutan
- Bolivia → Bolivie
- Burkina Faso → Burkina Faso
- Central African Republic → Centrafrique
- Czechia → République tchèque
- Ethiopia → Éthiopie
- Hungary → Hongrie
- Kyrgyzstan → Kirghizistan
- Moldova → Moldavie
- Mongolia → Mongolie
- Nepal → Népal
- North Macedonia → Macédoine du Nord
- San Marino → Saint-Marin
- South Sudan → Soudan du Sud
- Tajikistan → Tadjikistan
- Uganda → Ouganda
- Uzbekistan → Ouzbékistan
- Zambia → Zambie

## Final answer set (43 pays)
Afghanistan, Andorre, Arménie, Autriche, Azerbaïdjan, Biélorussie, Bhoutan,
Bolivie, Botswana, Burkina Faso, Burundi, Centrafrique, Éthiopie, Eswatini,
Hongrie, Kazakhstan, Kirghizistan, Laos, Lesotho, Liechtenstein, Luxembourg,
Macédoine du Nord, Malawi, Mali, Moldavie, Mongolie, Népal, Niger, Ouganda,
Ouzbékistan, Paraguay, République tchèque, Rwanda, Saint-Marin, Serbie,
Slovaquie, Soudan du Sud, Suisse, Tadjikistan, Tchad, Turkménistan, Zambie, Zimbabwe
