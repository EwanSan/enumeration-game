# countries-desert

**Theme:** countries
**Date:** 2026-04-29

## Original
> Les pays ayant un désert sur leur territoire ?

## Disambiguated
> Quels pays ont au moins un désert nommé et reconnu sur leur territoire, en excluant les déserts polaires (Arctique et Antarctique) ?

**Critères retenus :**
- Déserts chauds (subtropicaux, côtiers, de pluie d'ombre) et froids/tempérés (Gobi, Patagonie, Grand Bassin) : **inclus**
- Déserts polaires / toundra arctique : **exclus** (évite d'inclure Norvège, Finlande, Islande, Canada arctique…)
- Seuil : le désert doit être nommé et référencé sur Wikipedia "List of deserts"

## Sources
- https://en.wikipedia.org/wiki/List_of_deserts_by_area (consulté le 2026-04-29)
- https://en.wikipedia.org/wiki/List_of_deserts (consulté le 2026-04-29)
- https://en.wikipedia.org/wiki/Desert (consulté le 2026-04-29)

## Mapping déserts → pays

| Désert | Pays |
|--------|------|
| Sahara | Algérie, Tchad, Égypte, Libye, Mali, Mauritanie, Maroc, Niger, Soudan, Tunisie |
| Désert de Namib | Namibie, Angola… mais Angola déjà couvert par Namib/Kalahari |
| Kalahari | Botswana, Namibie, Afrique du Sud |
| Karoo | Afrique du Sud |
| Danakil | Éthiopie, Érythrée, Djibouti, Somalie |
| Désert côtier érythréen | Érythrée, Djibouti |
| Guban | Somalie |
| Grand Bara | Djibouti |
| Chalbi | Kenya |
| Nyiri | Kenya, Tanzanie |
| Lompoul | Sénégal |
| Désert arabique | Arabie saoudite, Oman, Émirats arabes unis, Yémen, Israël, Palestine |
| Désert syrien | Syrie, Jordanie, Irak |
| Dasht-e Kavir / Lut | Iran |
| Dasht-e-Margo / Registan | Afghanistan |
| Thar | Inde, Pakistan |
| Kharan / Thal / Indus | Pakistan |
| Kyzylkoum | Kazakhstan, Ouzbékistan, Turkménistan |
| Karakoum | Turkménistan |
| Gobi | Mongolie, Chine |
| Taklamakan / Lop / Gurbantünggüt | Chine |
| Karapinar | Turquie |
| Tabernas / Bardenas Reales / Monegros | Espagne |
| Sables d'Oleshky | Ukraine |
| Désert de Ryn | Russie, Kazakhstan |
| Great Basin / Mojave / Sonoran / Chihuahua | États-Unis |
| Sonoran / Chihuahua | Mexique |
| Atacama | Chili, Pérou |
| Sechura | Pérou |
| Monte / Patagonie | Argentine |
| La Guajira | Colombie, Venezuela |
| Grand Désert de Victoria / Simpson / Gibson… | Australie |

## Ambiguïtés et décisions

**Déserts polaires exclus** : le Canada (Arctic) et les pays nordiques (Islande, Norvège, Finlande, Suède) ont des régions techniquement classées "déserts polaires" par précipitation, mais cela correspond à la toundra arctique, que personne n'associe à un "désert". → **Exclus**.

**Canada** (Thompson Plateau, Colombie-Britannique) : région semi-aride, pas un désert nommé reconnu de façon standard. → **Exclu**.

**Brésil** (Jalapão) : le Jalapão est une étendue sablonneuse de cerrado parfois appelée désert, mais classé principalement comme savane. → **Exclu**.

**Indonésie** (Bromo Sand Sea) : mer de sable volcanique sur le mont Bromo, pas un désert climatique. → **Exclue**.

**Koweït / Qatar / Bahreïn** : pays très arides dans la continuité du désert arabique, mais non listés explicitement dans "List of deserts" comme ayant un désert nommé distinct. → **Exclus** (conservatisme source).

**Espagne** : le désert de Tabernas (Almería) est le seul vrai désert classé en Europe occidentale. Bardenas Reales et Monegros sont aussi listés. → **Incluse**.

**Ukraine** : les Sables d'Oleshky (Олешківські піски), dans la région de Kherson, sont un des plus grands déserts de sable d'Europe (~160 km²). → **Incluse**.

**Russie** : le désert de Ryn (Ryn-Peski) dans la région de l'Astrakhan, entre la Volga et l'Oural. → **Incluse**.

**Sénégal** : désert de Lompoul, dunes de sable dans le nord du Sénégal. Destination touristique reconnue. → **Inclus**.

**Tanzanie** : désert de Nyiri (Nyika), partagé avec le Kenya. → **Incluse**.

**Colombie / Venezuela** : désert de La Guajira, péninsule du nord. → **Inclus**.

**Angola** : la façade côtière sud (désert du Namib) s'étend dans le sud de l'Angola. Mais Angola n'est pas dans la liste sources (Namib listé pour Namibie seulement). → **Exclu** (non confirmé par la source).

## Normalization decisions
Tous les 50 pays sont dans l'answerSet sans renommage.

## Final answer set (50 pays)
**Afrique (20) :** Algérie, Tchad, Égypte, Libye, Mali, Mauritanie, Maroc, Niger, Soudan, Tunisie, Érythrée, Éthiopie, Djibouti, Somalie, Kenya, Tanzanie, Sénégal, Namibie, Botswana, Afrique du Sud
**Asie/Moyen-Orient (19) :** Arabie saoudite, Oman, Émirats arabes unis, Yémen, Israël, Palestine, Syrie, Jordanie, Irak, Iran, Afghanistan, Pakistan, Inde, Kazakhstan, Ouzbékistan, Turkménistan, Chine, Mongolie, Turquie
**Europe (3) :** Espagne, Ukraine, Russie
**Amériques (7) :** États-Unis, Mexique, Argentine, Chili, Pérou, Colombie, Venezuela
**Océanie (1) :** Australie
