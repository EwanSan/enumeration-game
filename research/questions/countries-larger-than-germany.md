# countries-larger-than-germany

**Theme:** countries
**Date:** 2026-04-29

## Original
> Les pays plus grands que l'Allemagne (en surface) ?

## Disambiguated
> Pays dont la superficie est strictement supérieure (>) à celle de l'Allemagne, selon les données REST Countries (eaux intérieures incluses). Seuls les États membres de l'ONU sont retenus.

## Source
- Dataset caché : `research/datasets/countries-base.json` (REST Countries API, champ `area`)
- Superficie de l'Allemagne dans ce dataset : **357 114 km²**

## Raw output
62 pays retournés par le filtre `area > 357114 AND unMember == true`, triés par superficie décroissante :

Russia 17 098 246 | Canada 9 984 670 | China 9 706 961 | United States 9 525 067 |
Brazil 8 515 767 | Australia 7 692 024 | India 3 287 263 | Argentina 2 780 400 |
Kazakhstan 2 724 900 | Algeria 2 381 741 | DR Congo 2 344 858 | Saudi Arabia 2 149 690 |
Mexico 1 964 375 | Indonesia 1 904 569 | Sudan 1 886 068 | Libya 1 759 540 |
Iran 1 648 195 | Mongolia 1 564 110 | Peru 1 285 216 | Chad 1 284 000 |
Niger 1 267 000 | Angola 1 246 700 | Mali 1 240 192 | South Africa 1 221 037 |
Colombia 1 141 748 | Ethiopia 1 104 300 | Bolivia 1 098 581 | Mauritania 1 030 700 |
Egypt 1 002 450 | Tanzania 947 303 | Nigeria 923 768 | Venezuela 916 445 |
Namibia 825 615 | Mozambique 801 590 | Pakistan 796 095 | Turkey 783 562 |
Chile 756 102 | Zambia 752 612 | Myanmar 676 578 | Afghanistan 652 230 |
Somalia 637 657 | Central African Republic 622 984 | South Sudan 619 745 |
Ukraine 603 550 | Madagascar 587 041 | Botswana 582 000 | Kenya 580 367 |
France 543 908 | Yemen 527 968 | Thailand 513 120 | Spain 505 992 |
Turkmenistan 488 100 | Cameroon 475 442 | Papua New Guinea 462 840 | Sweden 450 295 |
Uzbekistan 447 400 | Morocco 446 550 | Iraq 438 317 | Paraguay 406 752 |
Zimbabwe 390 757 | Norway 386 224 | Japan 377 930

## Normalization decisions
Standard aliases EN → FR (voir normalize-to-answerset.md) ; tous les 62 pays présents dans l'answerSet.
Cas notables :
- Myanmar → Birmanie (nom utilisé dans l'answerSet)
- DR Congo → République démocratique du Congo
- Central African Republic → Centrafrique

## Final answer set (62 pays)
Russie, Canada, Chine, États-Unis, Brésil, Australie, Inde, Argentine, Kazakhstan,
Algérie, République démocratique du Congo, Arabie saoudite, Mexique, Indonésie,
Soudan, Libye, Iran, Mongolie, Pérou, Tchad, Niger, Angola, Mali, Afrique du Sud,
Colombie, Éthiopie, Bolivie, Mauritanie, Égypte, Tanzanie, Nigeria, Venezuela,
Namibie, Mozambique, Pakistan, Turquie, Chili, Zambie, Birmanie, Afghanistan,
Somalie, Centrafrique, Soudan du Sud, Ukraine, Madagascar, Botswana, Kenya,
France, Yémen, Thaïlande, Espagne, Turkménistan, Cameroun, Papouasie-Nouvelle-Guinée,
Suède, Ouzbékistan, Maroc, Irak, Paraguay, Zimbabwe, Norvège, Japon
