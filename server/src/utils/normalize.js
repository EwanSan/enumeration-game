/**
 * Normalize a string for comparison: lowercase, strip accents, collapse whitespace.
 */
export function normalize(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ");
}

/**
 * Check if two strings match after normalization.
 */
export function matches(a, b) {
  return normalize(a) === normalize(b);
}
