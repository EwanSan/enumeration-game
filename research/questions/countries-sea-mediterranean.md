# countries-sea-mediterranean

**Theme:** countries
**Date:** 2026-04-29

## Original
> Pays ayant accès à la mer Méditerranée

## Disambiguated
> Quels pays ont un littoral sur la mer Méditerranée (côte directe, mer Adriatique et mer Égée incluses en tant que parties de la Méditerranée) ?

## Source
- https://fr.wikipedia.org/wiki/Mer_Méditerranée (consulté le 2026-04-29)
- Wikipedia : "La mer Méditerranée est bordée par 21 États souverains officiellement reconnus... plus l'État Palestinien."

## Raw output
**Europe (11) :** Espagne, France, Monaco, Italie, Malte, Slovénie, Croatie, Bosnie-Herzégovine, Monténégro, Albanie, Grèce
**Asie occidentale (5) :** Turquie, Chypre, Syrie, Liban, Israël
**Afrique du Nord (5) :** Égypte, Libye, Tunisie, Algérie, Maroc
**Cas particulier :** Palestine

## Ambiguïtés et décisions

**Palestine** : Wikipedia mentionne explicitement la Palestine comme ayant un littoral méditerranéen (bande de Gaza, ~40 km). Palestine figure dans l'answerSet → **incluse**. Total : 22 pays.

**Bosnie-Herzégovine** : ~20 km de côte adriatique près de Neum. Confirmé par Wikipedia comme faisant partie des 21 États riverains → **incluse**.

**Chypre du Nord** : territoire non reconnu par l'ONU → **exclu**.

**Gibraltar** : territoire britannique revendiqué par l'Espagne → **exclu** (pas un État souverain).

## Normalization decisions
Tous les 22 pays sont dans l'answerSet sans renommage nécessaire.

## Final answer set (22 pays)
"Espagne", "France", "Monaco", "Italie", "Malte",
"Slovénie", "Croatie", "Bosnie-Herzégovine", "Monténégro", "Albanie",
"Grèce", "Turquie", "Chypre", "Syrie", "Liban",
"Israël", "Palestine", "Égypte", "Libye", "Tunisie",
"Algérie", "Maroc"
