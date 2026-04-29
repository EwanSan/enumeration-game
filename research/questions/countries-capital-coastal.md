# countries-capital-coastal

**Theme:** countries
**Date:** 2026-04-29

## Original
> Pays dont la capitale est une ville côtière.

## Disambiguated
> Quels pays souverains membres de l'ONU ont une capitale officielle qui est une ville côtière (directement sur la mer, un océan, un golfe, une baie, un fjord ou un estuaire tidaux) ?

## Source
- REST Countries API (coordonnées des capitales) — https://restcountries.com/v3.1/all
- Natural Earth 10m coastline (distance capitales→côte) — ne_10m_coastline.geojson via GitHub nvkelso/natural-earth-vector
- Calcul Python/geopandas (distance en degrés × 111 ≈ km)

## Méthode
Distance de chaque capitale à la polyligne côtière Natural Earth 10m.
Seuil retenu : ≤ 20 km d'une côte marine, avec révision manuelle des cas limites.

## Décisions clés

**Azerbaïdjan – Bakou (2.1 km)** : La mer Caspienne est un lac fermé ; dans notre jeu, l'Azerbaïdjan est landlocked (countries-landlocked). Exclu par cohérence.

**Brunei – Bandar Seri Begawan (5.8 km)** : Sur la rivière Brunei, non perçue comme ville côtière. Exclu.

**Sri Lanka – Sri Jayawardenepura Kotte (5.7 km)** : La capitale officielle depuis 1982 est Kotte, adjacente à Colombo (côtière) mais non côtière elle-même. Exclu (Colombo n'est pas la capitale officielle).

**Bangladesh – Dhaka (17.4 km)** : Sur la Buriganga dans le delta du Gange. Non perçue comme côtière. Exclue.

**Chypre – Nicosie (18.2 km)** : Centre de l'île, non côtière. Exclue.

**Venezuela – Caracas (14.5 km)** : Séparée de la côte caraïbe par la Cordillère de la Costa. Exclue.

**Grèce – Athènes (5.8 km)** : À 5.8 km du golfe Saronique ; le Pirée (port majeur) fait partie de l'agglomération → incluse.

**Argentine – Buenos Aires (22.6 km en 10m, mais sur le Río de la Plata)** : Le calcul sous-estime la proximité car la Natural Earth 10m ne digitalise pas la rive nord du Río de la Plata comme côte marine. Buenos Aires est directement sur le front d'eau de l'estuaire → incluse.

**Thaïlande – Bangkok (17.6 km)** : Sur le delta de la Chao Phraya, port maritime de grande taille intégré à la ville (Klong Toei Port). Incluse.

**Lettonie – Riga (14.2 km)** : À l'embouchure de la Daugava sur le golfe de Riga (mer Baltique) → incluse.

**Bénin – Porto-Novo (13.2 km)** : Sur une lagune directement connectée au Bight du Bénin (Atlantique) → incluse.

**Sénégal – Dakar (10.9 km)** : Sur la presqu'île du Cap-Vert, port atlantique → incluse.

**Indonésie – Jakarta (7.4 km)** : Capital côtière sur la mer de Java. Note : Nusantara (IKN) est la nouvelle capitale officielle depuis août 2024 et se situe également en bord de mer (détroit de Makassar) → Indonésie incluse dans tous les cas.

**Pays-Bas – Amsterdam (39.9 km)** : Connectée à la mer du Nord via le canal de la mer du Nord, mais la 10m la place à 40 km. Non incluse (décision conservatrice).

## Final answer set (82 pays)

### Europe (12)
Danemark, Estonie, Finlande, Grèce, Irlande, Islande,
Lettonie, Malte, Monaco, Norvège, Portugal, Suède

### Afrique (25)
Algérie, Angola, Bénin, Cap-Vert, Comores, Djibouti,
Gabon, Gambie, Ghana, Guinée, Guinée équatoriale, Guinée-Bissau,
Liberia, Libye, Maroc, Maurice, Mauritanie, Mozambique,
São Tomé-et-Príncipe, Sénégal, Seychelles, Sierra Leone, Somalie, Togo, Tunisie

### Asie & Moyen-Orient (13)
Bahreïn, Émirats arabes unis, Indonésie, Japon, Koweït, Liban,
Maldives, Oman, Philippines, Qatar, Singapour, Thaïlande, Timor oriental

### Amériques (19)
Antigua-et-Barbuda, Argentine, Bahamas, Barbade, Cuba, Dominique,
Grenade, Guyana, Haïti, Jamaïque, Panama, Pérou,
République dominicaine, Saint-Kitts-et-Nevis, Saint-Vincent-et-les-Grenadines,
Sainte-Lucie, Suriname, Trinité-et-Tobago, Uruguay

### Océanie (13)
Fidji, Îles Marshall, Îles Salomon, Kiribati, Micronésie,
Nauru, Nouvelle-Zélande, Palaos, Papouasie-Nouvelle-Guinée,
Samoa, Tonga, Tuvalu, Vanuatu
