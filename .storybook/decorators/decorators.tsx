import type { Decorator } from "@storybook/nextjs-vite"
import { QueryClientProviderDecorator } from './QueryClientProviderDecorator';

export const decorators: Decorator[] = [
    QueryClientProviderDecorator
];