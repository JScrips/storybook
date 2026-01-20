import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, fn, userEvent, within } from "storybook/test";

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
  args: {
    onClick: fn(),
  },
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

// =============================================================================
// PRIMARY VARIANTS
// =============================================================================

export const Primary: Story = {
  args: {
    id: "primary-button",
    variant: "primary",
  },
  render: (args) => <Button {...args}>Primary Button</Button>,
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: "Primary Button" });

    // Verify button renders
    await expect(button).toBeInTheDocument();

    // Verify styling classes are applied
    await expect(button).toHaveClass("bg-blue-600");
    await expect(button).toHaveClass("text-white");
    await expect(button).toHaveClass("px-4");
    await expect(button).toHaveClass("py-2");
    await expect(button).toHaveClass("rounded");

    // Verify click handler works
    (args.onClick as ReturnType<typeof fn>).mockClear();
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  },
};

export const Secondary: Story = {
  args: {
    id: "secondary-button",
    variant: "secondary",
  },
  render: (args) => <Button {...args}>Secondary Button</Button>,
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: "Secondary Button" });

    await expect(button).toBeInTheDocument();
    (args.onClick as ReturnType<typeof fn>).mockClear();
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  },
};

export const Destructive: Story = {
  args: {
    id: "destructive-button",
    variant: "destructive",
  },
  render: (args) => <Button {...args}>Delete</Button>,
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: "Delete" });

    await expect(button).toBeInTheDocument();
    (args.onClick as ReturnType<typeof fn>).mockClear();
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  },
};

export const Quiet: Story = {
  args: {
    id: "quiet-button",
    variant: "quiet",
  },
  render: (args) => <Button {...args}>Cancel</Button>,
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: "Cancel" });

    await expect(button).toBeInTheDocument();
    (args.onClick as ReturnType<typeof fn>).mockClear();
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  },
};

// =============================================================================
// TEXT BUTTON WITH ICON
// =============================================================================

export const TextButtonWithLeadingIcon: Story = {
  args: {
    id: "leading-icon-button",
    iconPosition: "leading",
    variant: "primary",
  },
  render: (args) => (
    <Button {...args}>
      <svg
        data-testid="download-icon"
        aria-hidden="true"
        width="16"
        height="16"
        viewBox="0 0 16 16"
      >
        <path d="M8 12l-4-4h2.5V3h3v5H12L8 12z" fill="currentColor" />
      </svg>
      Download
    </Button>
  ),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: "Download" });

    await expect(button).toBeInTheDocument();
    await expect(canvas.getByTestId("download-icon")).toBeInTheDocument();

    (args.onClick as ReturnType<typeof fn>).mockClear();
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  },
};

export const TextButtonWithTrailingIcon: Story = {
  args: {
    id: "trailing-icon-button",
    iconPosition: "trailing",
    variant: "primary",
  },
  render: (args) => (
    <Button {...args}>
      Next
      <svg
        data-testid="arrow-icon"
        aria-hidden="true"
        width="16"
        height="16"
        viewBox="0 0 16 16"
      >
        <path d="M6 3l5 5-5 5V3z" fill="currentColor" />
      </svg>
    </Button>
  ),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: "Next" });

    await expect(button).toBeInTheDocument();
    await expect(canvas.getByTestId("arrow-icon")).toBeInTheDocument();

    (args.onClick as ReturnType<typeof fn>).mockClear();
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  },
};

// =============================================================================
// ICON ONLY BUTTON
// =============================================================================

export const IconOnlyButton: Story = {
  args: {
    id: "icon-only-button",
    "aria-label": "Close dialog",
    variant: "quiet",
  },
  render: (args) => (
    <Button {...args}>
      <svg
        data-testid="close-icon"
        aria-hidden="true"
        width="16"
        height="16"
        viewBox="0 0 16 16"
      >
        <path
          d="M4 4l8 8M12 4l-8 8"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </Button>
  ),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: "Close dialog" });

    await expect(button).toBeInTheDocument();
    await expect(canvas.getByTestId("close-icon")).toBeInTheDocument();

    // Verify aria-label is applied for accessibility
    await expect(button).toHaveAttribute("aria-label", "Close dialog");

    (args.onClick as ReturnType<typeof fn>).mockClear();
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  },
};

export const IconOnlyMenuButton: Story = {
  args: {
    id: "menu-button",
    "aria-label": "Open menu",
    variant: "primary",
  },
  render: (args) => (
    <Button {...args}>
      <svg
        data-testid="menu-icon"
        aria-hidden="true"
        width="16"
        height="16"
        viewBox="0 0 16 16"
      >
        <path
          d="M2 4h12M2 8h12M2 12h12"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    </Button>
  ),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: "Open menu" });

    await expect(button).toBeInTheDocument();
    await expect(canvas.getByTestId("menu-icon")).toBeInTheDocument();

    (args.onClick as ReturnType<typeof fn>).mockClear();
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  },
};

// =============================================================================
// ACCESSIBILITY TESTS
// =============================================================================

export const WithAriaDescribedBy: Story = {
  args: {
    id: "described-button",
    variant: "primary",
    "aria-describedby": "submit-description",
  },
  render: (args) => (
    <>
      <span id="submit-description">
        This will submit your form and send the data
      </span>
      <Button {...args}>Submit</Button>
    </>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: "Submit" });

    await expect(button).toBeInTheDocument();
    await expect(button).toHaveAttribute(
      "aria-describedby",
      "submit-description",
    );
  },
};

export const WithAriaDisabled: Story = {
  args: {
    id: "disabled-button",
    variant: "primary",
    "aria-disabled": "true",
  },
  render: (args) => <Button {...args}>Disabled Button</Button>,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: "Disabled Button" });

    await expect(button).toBeInTheDocument();
    await expect(button).toHaveAttribute("aria-disabled", "true");
  },
};

export const WithAriaPressed: Story = {
  args: {
    id: "toggle-button",
    variant: "secondary",
    "aria-pressed": "true",
  },
  render: (args) => <Button {...args}>Bold</Button>,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: "Bold" });

    await expect(button).toBeInTheDocument();
    await expect(button).toHaveAttribute("aria-pressed", "true");
  },
};

export const WithAriaExpanded: Story = {
  args: {
    id: "expandable-button",
    variant: "primary",
    "aria-expanded": "false",
    "aria-controls": "details-panel",
  },
  render: (args) => <Button {...args}>Show Details</Button>,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: "Show Details" });

    await expect(button).toBeInTheDocument();
    await expect(button).toHaveAttribute("aria-expanded", "false");
    await expect(button).toHaveAttribute("aria-controls", "details-panel");
  },
};

export const WithAriaHasPopup: Story = {
  args: {
    id: "popup-button",
    variant: "primary",
    "aria-haspopup": "menu",
  },
  render: (args) => <Button {...args}>Options</Button>,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: "Options" });

    await expect(button).toBeInTheDocument();
    await expect(button).toHaveAttribute("aria-haspopup", "menu");
  },
};

// =============================================================================
// OPTIONAL PROPS
// =============================================================================

export const WithMinWidth: Story = {
  args: {
    id: "min-width-button",
    variant: "primary",
    minWidth: "200px",
  },
  render: (args) => <Button {...args}>Wide</Button>,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: "Wide" });

    await expect(button).toBeInTheDocument();
  },
};

export const WithCustomId: Story = {
  args: {
    id: "custom-unique-id-123",
    variant: "primary",
  },
  render: (args) => <Button {...args}>Custom ID Button</Button>,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: "Custom ID Button" });

    await expect(button).toBeInTheDocument();
    await expect(button).toHaveAttribute("id", "custom-unique-id-123");
  },
};

// =============================================================================
// CLICK INTERACTION TESTS
// =============================================================================

export const ClickHandlerTest: Story = {
  args: {
    id: "click-test-button",
    variant: "primary",
  },
  render: (args) => <Button {...args}>Click Me</Button>,
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: "Click Me" });

    // Reset mock and verify initial state
    (args.onClick as ReturnType<typeof fn>).mockClear();
    await expect(args.onClick).not.toHaveBeenCalled();

    // First click
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledTimes(1);

    // Second click
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledTimes(2);

    // Third click
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledTimes(3);
  },
};

export const MultipleClicksTest: Story = {
  args: {
    id: "multi-click-button",
    variant: "secondary",
  },
  render: (args) => <Button {...args}>Click Multiple Times</Button>,
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: "Click Multiple Times" });

    // Reset mock before testing
    (args.onClick as ReturnType<typeof fn>).mockClear();

    // Click 5 times rapidly
    for (let i = 1; i <= 5; i++) {
      await userEvent.click(button);
      await expect(args.onClick).toHaveBeenCalledTimes(i);
    }
  },
};

// =============================================================================
// KEYBOARD INTERACTION TESTS
// =============================================================================

export const KeyboardInteraction: Story = {
  args: {
    id: "keyboard-button",
    variant: "primary",
  },
  render: (args) => <Button {...args}>Press Enter or Space</Button>,
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", {
      name: "Press Enter or Space",
    });

    // Reset mock before testing
    (args.onClick as ReturnType<typeof fn>).mockClear();

    // Focus the button
    button.focus();
    await expect(button).toHaveFocus();

    // Press Enter to activate
    await userEvent.keyboard("{Enter}");
    await expect(args.onClick).toHaveBeenCalledTimes(1);

    // Press Space to activate
    await userEvent.keyboard(" ");
    await expect(args.onClick).toHaveBeenCalledTimes(2);
  },
};

// =============================================================================
// DATA ATTRIBUTE PASSTHROUGH
// =============================================================================

export const WithDataAttributes: Story = {
  args: {
    id: "data-attr-button",
    variant: "primary",
  },
  render: (args) => (
    <Button
      {...args}
      data-testid="custom-test-id"
      data-analytics="button-click"
    >
      Data Attributes
    </Button>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByTestId("custom-test-id");

    await expect(button).toBeInTheDocument();
    await expect(button).toHaveAttribute("data-analytics", "button-click");
  },
};
