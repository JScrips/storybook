import "../app/globals.css";

import { Preview } from "@storybook/nextjs-vite";
import { ReactRenderer } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-themes";
import { decorators } from "./decorators/decorators";
import { globalTypes } from "./global/globalTypes";
import { parameters } from "./parameters/parameters";

const preview: Preview = {
  decorators: [
    ...decorators,
    withThemeByClassName<ReactRenderer>({
      themes: {
        light: "",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
  ],
  globalTypes,
  parameters: {
    ...parameters,
    options: {
      storySort: {
        order: [
          "Documentation",
          [
            "Introduction",
            "Getting Started",
            "Release Notes",
            "Known Issues",
            "Github Copilot",
            "Resources",
            "Accessibility",
          ],
          "Accelerators",
          "Templates",
          "Core Components",
          "Compound Components",
          "Beta",
        ],
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
  tags: ["autodocs"],
};

export default preview;
