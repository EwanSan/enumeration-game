# countries-flag-single-star

**Theme:** countries
**Date:** 2026-05-04

## Original
> Quels pays ont exactement une étoile sur leur drapeau ?

## Disambiguated
> Pays dont le drapeau national comporte exactement une étoile (5, 6, 7, 12 ou 24 branches) comme élément distinct. Les drapeaux croissant + étoile (couverts par la question Q1 sur les croissants) sont exclus pour éviter le double compte. Les drapeaux à étoiles multiples sont exclus.

## Source
- Vérification visuelle des drapeaux nationaux sur Wikipedia

## Raw output
Une seule étoile (hors combinaison croissant+étoile) :
- Birmanie (Myanmar) : grande étoile blanche (5 branches) sur fond tricolore
- Burkina Faso : étoile jaune centrale sur bicolore rouge/vert
- Cameroun : étoile jaune centrale
- Centrafrique : étoile jaune en haut à gauche
- Chili : étoile blanche (5 branches) dans le canton bleu
- Cuba : étoile blanche dans le triangle rouge
- Djibouti : étoile rouge dans le triangle blanc
- Ghana : étoile noire centrale sur tricolore
- Guinée-Bissau : étoile noire dans la bande rouge verticale
- Îles Marshall : étoile blanche à 24 branches (soleil levant)
- Israël : étoile de David (hexagramme) bleue
- Jordanie : étoile blanche à 7 branches dans le triangle rouge
- Liberia : étoile blanche dans le canton bleu
- Maroc : étoile verte (pentagrame) sur fond rouge
- Mozambique : étoile jaune à 5 branches (avec AK-47 en son centre)
- Nauru : étoile blanche à 12 branches
- São Tomé-et-Príncipe : étoile noire dans la bande jaune
- Sénégal : étoile verte centrale
- Togo : étoile blanche dans le canton rouge
- Viêt Nam : étoile jaune centrale sur fond rouge

Exclusions (croissant+étoile → couverts par Q1) : Algérie, Azerbaïdjan, Libye, Malaisie, Mauritanie, Pakistan, Tunisie, Turquie
Exclusions (2+ étoiles) : Australie (6), Cap-Vert (10), Chine (5), États-Unis (50), Kiribati, Kosovo (6), Nouvelle-Zélande (4), Panama (2), Singapour (5), Tuvalu (9)...

## Normalization decisions
- Myanmar → "Birmanie" ✓ (entrée dans l'answerSet)
- Marshall Islands → "Îles Marshall" ✓
- Tous les autres correspondent directement à des entrées de l'answerSet.

## Final answer set
Birmanie, Burkina Faso, Cameroun, Centrafrique, Chili, Cuba, Djibouti, Ghana, Guinée-Bissau, Îles Marshall, Israël, Jordanie, Liberia, Maroc, Mozambique, Nauru, São Tomé-et-Príncipe, Sénégal, Togo, Viêt Nam
