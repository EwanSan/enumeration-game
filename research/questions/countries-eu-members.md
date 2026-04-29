# countries-eu-members

**Theme:** countries
**Date:** 2026-04-29

## Original
> Quels sont les pays membres de l'Union européenne ?

## Disambiguated
> Pays membres de l'Union européenne à la date de rédaction (27 États membres depuis le Brexit de 2020 ; pays candidats à l'adhésion exclus).

## Source
- Wikipedia EN: `https://en.wikipedia.org/wiki/Member_state_of_the_European_Union` — accessed 2026-04-29
- Extraction via MediaWiki API (`action=parse&prop=wikitext`) + regex sur les templates `{{flag|...}}` de la table principale

Note: une première tentative via Wikidata SPARQL (P463 = Q458, sans P582) a retourné 25 pays — elle omettait le Danemark et les Pays-Bas (problème de modélisation P31 dans Wikidata) et incluait le Royaume-Uni dans une variante sans filtre. Wikipedia EN a été utilisé comme source de référence finale.

## Raw output
```
Austria, Belgium, Bulgaria, Croatia, Cyprus, Czech Republic, Denmark, Estonia,
Finland, France, Germany, Greece, Hungary, Ireland, Italy, Latvia, Lithuania,
Luxembourg, Malta, Netherlands, Poland, Portugal, Romania, Slovakia, Slovenia,
Spain, Sweden
```

## Normalization decisions
- Austria → Autriche
- Belgium → Belgique
- Bulgaria → Bulgarie
- Croatia → Croatie
- Cyprus → Chypre
- Czech Republic → République tchèque (Wikidata retournait "Tchéquie" — l'answerSet utilise "République tchèque")
- Denmark → Danemark
- Estonia → Estonie
- Finland → Finlande
- France → France
- Germany → Allemagne
- Greece → Grèce
- Hungary → Hongrie
- Ireland → Irlande
- Italy → Italie
- Latvia → Lettonie
- Lithuania → Lituanie
- Luxembourg → Luxembourg
- Malta → Malte
- Netherlands → Pays-Bas
- Poland → Pologne
- Portugal → Portugal
- Romania → Roumanie
- Slovakia → Slovaquie
- Slovenia → Slovénie
- Spain → Espagne
- Sweden → Suède

Tous les 27 pays trouvés dans l'answerSet sans exception.

## Final answer set
Allemagne, Autriche, Belgique, Bulgarie, Chypre, Croatie, Danemark, Espagne,
Estonie, Finlande, France, Grèce, Hongrie, Irlande, Italie, Lettonie, Lituanie,
Luxembourg, Malte, Pays-Bas, Pologne, Portugal, République tchèque, Roumanie,
Slovaquie, Slovénie, Suède
