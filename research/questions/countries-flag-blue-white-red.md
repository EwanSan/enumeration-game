# countries-flag-blue-white-red

**Theme:** countries
**Date:** 2026-05-04

## Original
> Quels pays ont le bleu, le blanc et le rouge sur leur drapeau ?

## Disambiguated
> Pays dont le drapeau national comporte simultanément les trois couleurs bleu, blanc et rouge comme éléments distincts visibles. Une couleur présente uniquement dans les armoiries complexes est acceptée si les armoiries font partie intégrante du drapeau officiel.

## Source
- Vérification visuelle des drapeaux nationaux sur Wikipedia
- Complété par analyse systématique par région

## Raw output
Europe : France, Pays-Bas, Luxembourg, Russie, Serbie, Slovaquie, Slovénie, Croatie, Islande, Norvège, République tchèque
Amériques : États-Unis, Chili, Cuba, Haïti, Costa Rica, Panama, Paraguay, République dominicaine, Liberia, Belize
Asie / Océanie : Philippines, Thaïlande, Cambodge, Laos, Corée du Nord, Corée du Sud, Australie, Nouvelle-Zélande, Fidji, Samoa, Tuvalu, Kiribati
Caraïbes/Antilles : Antigua-et-Barbuda
Afrique : Seychelles

## Normalization decisions
- Czech Republic → "République tchèque" ✓ (entrée dans l'answerSet, pas "Tchéquie")
- Tous les autres correspondent directement à des entrées de l'answerSet.

Vérifications spécifiques :
- Haïti : bandes bleu + rouge, blanc uniquement dans les armoiries centrales → inclus
- Belize : fond bleu + bandes rouges + blanc dans les armoiries → inclus
- Tuvalu : fond bleu clair + Union Jack (bleu/blanc/rouge) + étoiles jaunes → inclus (Union Jack porte les 3 couleurs)
- Kiribati : demi-fond rouge + demi-fond bleu avec vagues blanches → inclus
- Antigua-et-Barbuda : bleu + blanc + rouge dans le design du soleil levant → inclus

## Final answer set
Antigua-et-Barbuda, Australie, Belize, Cambodge, Chili, Corée du Nord, Corée du Sud, Costa Rica, Croatie, Cuba, États-Unis, Fidji, France, Haïti, Islande, Kiribati, Laos, Liberia, Luxembourg, Norvège, Nouvelle-Zélande, Panama, Paraguay, Pays-Bas, Philippines, République dominicaine, République tchèque, Russie, Samoa, Serbie, Seychelles, Slovaquie, Slovénie, Thaïlande, Tuvalu
