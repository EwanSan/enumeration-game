# Curated sources per question type

Use this list to pick a strategy in **Step 2** of the skill workflow. Sources are listed in order of preference (simplest first).

## Country-level facts (any theme involving countries)

### REST Countries (free JSON API, no key)
- Endpoint: `https://restcountries.com/v3.1/all`
- Fields: `name`, `cca2`, `cca3`, `area`, `population`, `capital`, `region`, `subregion`, `borders`, `latlng`, `landlocked`, `independent`, `unMember`
- Best for: bulk country attributes (area, population, capital, continent, ISO codes, land borders)
- Suggested cached file: `research/datasets/countries-base.json`
- Example:
  ```bash
  curl -s 'https://restcountries.com/v3.1/all?fields=name,cca3,area,population,capital,region,borders,latlng,landlocked,unMember' > research/datasets/countries-base.json
  ```

### Wikidata SPARQL endpoint
- Endpoint: `https://query.wikidata.org/sparql`
- Best for: structured queries that REST Countries doesn't cover (heads of state, government type, official languages, neighboring states with disputed status filter, etc.)
- Returns JSON with `format=json` Accept header
- Example: countries that are kingdoms
  ```sparql
  SELECT ?country ?countryLabel WHERE {
    ?country wdt:P31 wd:Q3624078 .          # sovereign state
    ?country wdt:P122 wd:Q7269 .            # basic form of government: monarchy
    SERVICE wikibase:label { bd:serviceParam wikibase:language "fr" . }
  }
  ```

### Wikipedia list pages
- Use **WebFetch** with a clear prompt asking Claude to extract the list from the table.
- Best for: curated thematic lists ("List of countries by X", "Countries crossed by the equator")
- French Wikipedia (`fr.wikipedia.org`) is preferred when the answerSet is French — names will already match.

## Geographic / geometric criteria

For criteria that are intrinsically spatial (intersects equator, contains peak > X meters, borders a sea), use Natural Earth + geopandas:

```bash
uv run --with geopandas --with shapely python -c '
import geopandas as gpd
world = gpd.read_file("https://naturalearth.s3.amazonaws.com/110m_cultural/ne_110m_admin_0_countries.zip")
# ... filter ...
'
```

Datasets:
- **Natural Earth** (`https://www.naturalearthdata.com/`) — country polygons at 110m / 50m / 10m resolution
- **OpenStreetMap / Overpass** — for finer queries (mountain peaks, rivers); use with care, queries are slow
- **GeoNames** (`http://www.geonames.org/`) — populated places, mountains, with elevation

If a geospatial dataset is reused, save it under `research/datasets/` (the geojson can be large — consider whether to commit it; for >10 MB, gitignore and document the fetch command instead).

## Demographic / economic data

- **World Bank Open Data** (`https://data.worldbank.org/`) — population, GDP, demographic indicators by year
  - JSON API: `https://api.worldbank.org/v2/country/all/indicator/<INDICATOR>?format=json&per_page=300`
- **UN Data** (`https://data.un.org/`) — for official UN statistics

## Sport / culture / specialty themes

When a future theme covers a specialty domain (footballers, actors, films), the source table will look completely different. Update this file when adding new themes — keep one section per question type per theme.

## Anti-patterns

- **Do not use ChatGPT/Claude internal knowledge as the source.** Hallucination risk. Always fetch from a primary source and cite the URL with access date.
- **Do not invent thresholds.** If the question is "countries larger than France", France's area must come from the same source as the comparison set, not a different reference.
- **Do not mix sources within a single question.** If half the answers come from REST Countries and half from Wikipedia, populations may differ and the answer set becomes inconsistent. Pick one source per question and document it.
