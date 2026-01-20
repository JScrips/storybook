import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { TestComponent } from "./TestComponent";

export default {
  title: "Core Components/TestComponent",
  component: TestComponent,
  parameters: {
    codeCoverage: 100,
    design: {
      type: "figma",
      url: "https://www.google.com",
    },
  },
} as Meta<typeof TestComponent>;

type Story = StoryObj<typeof TestComponent>;

// =============================================================================
// PRIMARY VARIANTS
// =============================================================================

export const Primary: Story = {
  args: {
    id: "primary-button",
    variant: "primary",
  },
};
