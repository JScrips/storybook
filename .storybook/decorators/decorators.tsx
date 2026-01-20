import type { Decorator } from "@storybook/nextjs-vite";
import { QueryClientProviderDecorator } from "./QueryClientProviderDecorator";
import { ThemeDecorator } from "./ThemeDecorator";

export const decorators: Decorator[] = [
  ThemeDecorator,
  QueryClientProviderDecorator,
];
