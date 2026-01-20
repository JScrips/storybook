import type { SyntheticEvent, JSX } from "react";
import type { AriaAttributes } from "../../../ariaAttributes.d";
export type ButtonProps = AriaAttributes & {
  /**
   * A unique identifier for the Button.
   */
  id: string;

  /**
   * Text For the Button
   */
  buttonText?: string;

  /**
   * Visual style variant of the button.
   */
  variant: "primary" | "secondary" | "destructive" | "quiet";

  /**
   * Callback function to handle the button click events.
   */
  onClick: (event: SyntheticEvent<EventTarget>) => void;
};

export declare const Button: (props: ButtonProps) => JSX.Element;
