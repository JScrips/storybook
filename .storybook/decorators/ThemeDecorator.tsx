import type { Decorator } from "@storybook/nextjs-vite";
import { useEffect } from "react";

export const ThemeDecorator: Decorator = (Story, context) => {
  const theme = context.globals.theme || "light";

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    // Apply theme class to html element for Tailwind dark mode
    if (theme === "dark") {
      html.classList.add("dark");
      html.setAttribute("data-theme", "dark");
      body.style.backgroundColor = "#0a0a0a";
      body.style.color = "#ededed";
    } else {
      html.classList.remove("dark");
      html.setAttribute("data-theme", "light");
      body.style.backgroundColor = "#ffffff";
      body.style.color = "#171717";
    }
  }, [theme]);

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <Story />
    </div>
  );
};
