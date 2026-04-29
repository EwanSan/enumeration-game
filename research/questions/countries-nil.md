# countries-nil

**Theme:** countries
**Date:** 2026-04-29

## Original
> Pays traversés par le Nil

## Disambiguated
> Quels pays sont traversés ou longés par le Nil (Nil blanc, Nil bleu, et cours principal) ?
> Critère : le fleuve ou l'une de ses deux branches principales (Nil blanc / Nil bleu) doit physiquement traverser le territoire.

## Source
- https://fr.wikipedia.org/wiki/Nil (consulté le 2026-04-29)

## Raw output
Wikipedia cite 8 pays comme "traversés par le Nil" : Rwanda, Burundi, Tanzanie, Ouganda, Éthiopie, Soudan du Sud, Soudan, Égypte.

## Ambiguïté : Nil blanc vs Nil bleu vs bassin versant

Le Nil comporte deux branches principales :
- **Nil blanc** : quitte le lac Victoria à Ripon Falls (Ouganda) → Soudan du Sud → Soudan
- **Nil bleu** : source au lac Tana (Éthiopie) → Soudan (confluence à Khartoum)
- **Cours principal** : Soudan → Égypte → Méditerranée

Rwanda, Burundi, Tanzanie : la **Kagera** (tributaire du lac Victoria) draine ces pays. La Kagera est une source du lac Victoria, qui alimente le Nil blanc, mais elle n'est pas le Nil elle-même. Ces pays ne sont pas physiquement traversés par le Nil.

**Décision** : on retient 5 pays — ceux traversés physiquement par le Nil blanc, le Nil bleu, ou le cours principal. Rwanda, Burundi, Tanzanie sont exclus car seule la Kagera (tributaire indirect) les concerne.

## Normalization decisions
- Uganda → Ouganda ✓
- Ethiopia → Éthiopie ✓
- South Sudan → Soudan du Sud ✓
- Sudan → Soudan ✓
- Egypt → Égypte ✓
- Rwanda → exclu (Kagera → lac Victoria, pas le Nil)
- Burundi → exclu (idem)
- Tanzania → exclu (idem)

## Final answer set
"Ouganda", "Éthiopie", "Soudan du Sud", "Soudan", "Égypte"
