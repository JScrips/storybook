import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Button } from "./Button";
import { ButtonProps } from "./Button.argTypes";

import Overview from "./README.mdx";

export default {
  title: "Core Components/Button",
  component: Button,
  subComponents: {
    ButtonProps,
  },
  parameters: {
    codeCoverage: 100,
    design: {
      type: "figma",
      url: "https://www.google.com",
    },
    overview: Overview,
  },
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    id: "example-button",
    variant: "primary",
  },
};
