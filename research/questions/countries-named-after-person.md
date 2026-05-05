# countries-named-after-person

**Theme:** countries
**Date:** 2026-05-04

## Original
> Quel pays a un nom faisant référence à un personnage historique ? Par exemple la Colombie ou la Bolivie.

## Disambiguated
> Quels pays portent un nom contenant directement celui d'une personne historique réelle (explorateurs, souverains, libérateurs, saints) ?

Critères retenus après discussion :
- **Inclus** : saints (personnages réels à caractère religieux)
- **Inclus** : Arabie saoudite (nom de la famille fondatrice = personne réelle)
- **Exclus** : El Salvador (Jésus = "le Sauveur", mais le prénom n'est pas dans le nom du pays)
- **Exclus** : Îles Salomon, Eswatini, Kiribati (connexion trop indirecte ou figure légendaire)

## Source
- Wikipedia EN "List of countries named after people" — https://en.wikipedia.org/wiki/List_of_countries_named_after_people (2026-05-04)

## Raw output
| Country | Person | Type |
|---------|--------|------|
| Bolivia | Simón Bolívar | Military leader/revolutionary |
| Colombia | Christopher Columbus | Explorer |
| Dominican Republic | Saint Dominic | Religious figure (via Santo Domingo) |
| Eswatini | King Mswati II | Monarch — **excluded (indirect)** |
| Georgia | Saint George | Saint |
| Kiribati | Thomas Gilbert | Sea captain — **excluded (transliteration)** |
| Marshall Islands | John Marshall | Royal Navy officer |
| Mauritius | Maurice of Nassau | Prince/statesman |
| Mozambique | Mussa Bin Bique | Local ruler |
| Philippines | Philip II of Spain | Monarch |
| Saint Kitts and Nevis | Saint Christopher | Saint |
| Saint Lucia | Saint Lucy | Saint |
| Saint Vincent and the Grenadines | Saint Vincent of Saragossa | Saint |
| San Marino | Saint Marinus | Saint |
| São Tomé and Príncipe | Saint Thomas (apostle) | Saint |
| Saudi Arabia | Saud bin Muhammad Al Muqrin | Historical figure / founding dynasty |
| Seychelles | Jean Moreau de Séchelles | French finance minister |
| Solomon Islands | King Solomon | Biblical/legendary — **excluded (légendaire)** |

## Normalization decisions
- Bolivia → Bolivie ✓
- Colombia → Colombie ✓
- Dominican Republic → République dominicaine ✓
- Georgia → Géorgie ✓
- Marshall Islands → Îles Marshall ✓
- Mauritius → Maurice ✓
- Mozambique → Mozambique ✓
- Philippines → Philippines ✓
- Saint Kitts and Nevis → Saint-Kitts-et-Nevis ✓
- Saint Lucia → Sainte-Lucie ✓
- Saint Vincent and the Grenadines → Saint-Vincent-et-les-Grenadines ✓
- San Marino → Saint-Marin ✓
- São Tomé and Príncipe → São Tomé-et-Príncipe ✓
- Saudi Arabia → Arabie saoudite ✓
- Seychelles → Seychelles ✓

## Final answer set
Arabie saoudite, Bolivie, Colombie, Géorgie, Îles Marshall, Maurice, Mozambique,
Philippines, République dominicaine, Saint-Kitts-et-Nevis, Saint-Marin,
Saint-Vincent-et-les-Grenadines, Sainte-Lucie, São Tomé-et-Príncipe, Seychelles
