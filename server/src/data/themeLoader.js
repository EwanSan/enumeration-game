import * as themeModules from "./themes/index.js";
import { normalize } from "../utils/normalize.js";

function validateTheme(theme) {
  const normalizedSet = new Set(theme.answerSet.map(normalize));

  for (const question of theme.questions) {
    for (const answer of question.correctAnswers) {
      if (!normalizedSet.has(normalize(answer))) {
        throw new Error(
          `Theme "${theme.id}", question "${question.id}": ` +
          `correctAnswer "${answer}" is not in the answer set`
        );
      }
    }
  }
}

const themes = new Map();
for (const theme of Object.values(themeModules)) {
  validateTheme(theme);
  themes.set(theme.id, theme);
}

const themeList = [...themes.values()].map((t) => ({ id: t.id, name: t.name }));

export { themes, themeList };
