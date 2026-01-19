import type { SyntheticEvent, JSX } from "react";

export type ButtonProps = {
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
