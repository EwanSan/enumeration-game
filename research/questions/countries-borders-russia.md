# countries-borders-russia

**Theme:** countries
**Date:** 2026-04-29

## Original
> Quels sont les pays frontaliers de la Russie ?

## Disambiguated
> Pays partageant une frontière terrestre avec la Russie (frontières maritimes exclues, États membres de l'ONU uniquement). Les pays bordant l'enclave de Kaliningrad (Estonie, Lettonie, Lituanie, Pologne) sont inclus car ils partagent bien une frontière terrestre avec la Russie.

## Source
- REST Countries API: `https://restcountries.com/v3.1/alpha/RUS?fields=name,borders` — accessed 2026-04-29
- Full base dataset cached at `research/datasets/countries-base.json`

## Raw output
```
borders: ['AZE', 'BLR', 'CHN', 'EST', 'FIN', 'GEO', 'KAZ', 'PRK', 'LVA', 'LTU', 'MNG', 'NOR', 'POL', 'UKR']
```

## Normalization decisions
- AZE (Azerbaijan) → Azerbaïdjan
- BLR (Belarus) → Biélorussie
- CHN (China) → Chine
- EST (Estonia) → Estonie
- FIN (Finland) → Finlande
- GEO (Georgia) → Géorgie
- KAZ (Kazakhstan) → Kazakhstan
- PRK (North Korea) → Corée du Nord
- LVA (Latvia) → Lettonie
- LTU (Lithuania) → Lituanie
- MNG (Mongolia) → Mongolie
- NOR (Norway) → Norvège
- POL (Poland) → Pologne
- UKR (Ukraine) → Ukraine

All 14 entries found in the answerSet with no gaps or exclusions.

## Final answer set
Azerbaïdjan, Biélorussie, Chine, Estonie, Finlande, Géorgie, Kazakhstan, Corée du Nord, Lettonie, Lituanie, Mongolie, Norvège, Pologne, Ukraine
