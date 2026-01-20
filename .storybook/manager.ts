import { addons } from "storybook/manager-api";
import { themes } from "storybook/theming";

// Theme the Storybook UI based on system preference
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

addons.setConfig({
  theme: prefersDark ? themes.dark : themes.light,
});
