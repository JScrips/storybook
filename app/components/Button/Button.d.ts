import type { SyntheticEvent, JSX } from "react";
import type { AriaAttributes } from "../../../ariaAttributes.d";

/**
 * ========================
 * UTILITY TYPES
 * ========================
 */

/**
 * Size variants for buttons.
 * - `regular`: Standard button size for most use cases.
 * - `small`: Compact button size for space-constrained layouts.
 */
type ButtonSizeVariant = "regular" | "small";

/**
 * Visual style variants for buttons.
 * - `primary`: High-emphasis button for primary actions.
 * - `secondary`: Medium-emphasis button for secondary actions.
 * - `tertiary`: Low-emphasis button for less prominent actions.
 */
type ButonVariant = "primary" | "secondary" | "tertiary";

/**
 * Position of an icon relative to the button text.
 * - `leading`: Icon appears before the text.
 * - `trailing`: Icon appears after the text.
 */
type ButtonIconPosition = "leading" | "trailing";

/**
 * Supported CSS unit types for spacing and sizing values.
 */
export type UnitOfmeasureType = "%" | "px" | "em" | "rem";

/**
 * A template literal type representing a CSS spacing value.
 * Combines a numeric value with a unit of measure (e.g., "16px", "2rem").
 */
export type SpacingStringType = `${number}${UnitOfMeasureType}`;

/**
 * ========================
 * Actual Props
 * ========================
 */

/**
 * Common properties shared by all button types.
 * Extends AriaAttributes to support accessibility properties.
 */
export type CommonButtonProps = AriaAttributes & {
  /** Unique identifier for the button. */
  id: string;

  variant?: ButtonVariant;

  /** Minimum width of the button (e.g., "100px", "50%"). */
  minWidth?: SpacingStringType;

  /** Display text for the button. */
  buttonText?: string;

  /**
   * Visual style variant of the button.
   * - `primary`: High-emphasis for main actions.
   * - `secondary`: Medium-emphasis for alternate actions.
   * - `destructive`: Indicates a potentially harmful action.
   * - `quiet`: Minimal styling for subtle actions.
   */
  variant: "primary" | "secondary" | "destructive" | "quiet";

  /** Callback function invoked when the button is clicked. */
  onClick: (event: SyntheticEvent<EventTarget>) => void;
};

/**
 * Props for a button that displays only an icon (no text).
 * Requires an aria-label for accessibility since there is no visible text.
 */
export type IconOnlyButtonProps = CommonButtonProps &
  AriaAttributes & {
    /** The icon element to display in the button. */
    icon: AriaAttributes & JSX.Element;
    /** Required accessible label describing the button's action. */
    "aria-label": string;
    /** Text is not allowed for icon-only buttons. */
    text?: never;
    /** Icon position is not applicable for icon-only buttons. */
    iconPosition?: never;
  };

/**
 * Props for a button that displays text, optionally with an icon.
 */
export type TextButtonProps = CommonButtonProps &
  AriaAttributes & {
    /** The text content displayed in the button. */
    text: string;
    /** Optional icon element to display alongside the text. */
    icon?: AriaAttributes & JSX.Element;
    /** Position of the icon relative to the text (leading or trailing). */
    iconPosition?: ButtonIconPosition;
  };

/**
 * Union type representing all valid button prop configurations.
 * A button can be either icon-only or text-based (with optional icon).
 */
export type ButtonProps = IconOnlyButtonProps | TextButtonProps;

/**
 * ========================
 * Button Group Props
 * ========================
 */
/**
 * Props for a group of buttons displayed together.
 * Extends AriaAttributes to support accessibility properties.
 */
export type ButtonGroupProps = AriaAttributes & {
  /** Unique identifier for the button group. */
  id: string;
  /** Array of button configurations to render in the group. */
  buttonProps: (IconOnlyButtonProps | TextButtonProps)[];
  /** Horizontal alignment of the buttons within the group. */
  alignment: ButtonGroupAlignment;
  /** Size variant applied to all buttons in the group. */
  buttonSize: buttonSizeVariant;
};

/**
 * Horizontal alignment options for a group of buttons.
 * - `left`: Aligns buttons to the left of the container.
 * - `center`: Centers buttons within the container.
 * - `right`: Aligns buttons to the right of the container.
 */
type ButtonGroupAlignment = "left" | "center" | "right";

/**
 * A flexible button component supporting multiple variants, sizes, and icon configurations.
 * @param props - The button properties (either IconOnlyButtonProps or TextButtonProps).
 * @returns A JSX button element.
 */
export declare const Button: (props: ButtonProps) => JSX.Element;
