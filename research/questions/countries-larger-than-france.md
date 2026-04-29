# countries-larger-than-france

**Theme:** countries
**Date:** 2026-04-29

## Original
> Quels pays ont une superficie plus grande que celle de la France (métropolitaine) ?

## Disambiguated
> Pays dont la superficie est strictement supérieure (>) à celle de la France métropolitaine (territoires d'outre-mer exclus), selon les données REST Countries. Seuls les États membres de l'ONU sont retenus. La France elle-même est exclue.

## Source
- Seuil de référence : **543 940 km²** (France métropolitaine, données du Registre foncier français, lacs/glaciers > 1 km² exclus) — Wikipedia EN « Metropolitan France », consulté 2026-04-29
- Dataset caché : `research/datasets/countries-base.json` (REST Countries API, champ `area`)
- Note : REST Countries affiche 543 908 km² pour la France, ce qui correspond au territoire métropolitain (les DOM-TOM ne sont pas agrégés dans cette entrée). Le seuil Wikipedia de 543 940 km² est utilisé comme référence officielle.

## Raw output
47 pays retournés par le filtre `area > 543940 AND unMember == true AND cca3 != FRA`, triés par superficie décroissante :

Russie 17 098 246 | Canada 9 984 670 | Chine 9 706 961 | États-Unis 9 525 067 |
Brésil 8 515 767 | Australie 7 692 024 | Inde 3 287 263 | Argentine 2 780 400 |
Kazakhstan 2 724 900 | Algérie 2 381 741 | Rép. dém. du Congo 2 344 858 |
Arabie saoudite 2 149 690 | Mexique 1 964 375 | Indonésie 1 904 569 |
Soudan 1 886 068 | Libye 1 759 540 | Iran 1 648 195 | Mongolie 1 564 110 |
Pérou 1 285 216 | Tchad 1 284 000 | Niger 1 267 000 | Angola 1 246 700 |
Mali 1 240 192 | Afrique du Sud 1 221 037 | Colombie 1 141 748 | Éthiopie 1 104 300 |
Bolivie 1 098 581 | Mauritanie 1 030 700 | Égypte 1 002 450 | Tanzanie 947 303 |
Nigeria 923 768 | Venezuela 916 445 | Namibie 825 615 | Mozambique 801 590 |
Pakistan 796 095 | Turquie 783 562 | Chili 756 102 | Zambie 752 612 |
Birmanie 676 578 | Afghanistan 652 230 | Somalie 637 657 | Centrafrique 622 984 |
Soudan du Sud 619 745 | Ukraine 603 550 | Madagascar 587 041 | Botswana 582 000 |
Kenya 580 367

## Normalization decisions
Même table d'alias que `countries-larger-than-germany.md`. Tous les 47 pays présents dans l'answerSet.

## Final answer set (47 pays)
Russie, Canada, Chine, États-Unis, Brésil, Australie, Inde, Argentine, Kazakhstan,
Algérie, République démocratique du Congo, Arabie saoudite, Mexique, Indonésie,
Soudan, Libye, Iran, Mongolie, Pérou, Tchad, Niger, Angola, Mali, Afrique du Sud,
Colombie, Éthiopie, Bolivie, Mauritanie, Égypte, Tanzanie, Nigeria, Venezuela,
Namibie, Mozambique, Pakistan, Turquie, Chili, Zambie, Birmanie, Afghanistan,
Somalie, Centrafrique, Soudan du Sud, Ukraine, Madagascar, Botswana, Kenya
