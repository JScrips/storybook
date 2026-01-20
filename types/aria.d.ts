declare namespace AriaAttributes {
  interface TabStyles {
    base: string;
    hovered: string;
    selected: string;
    focusVisible: string;
    disabled?: string;
    pressed?: string;
  }

  interface ButtonStyles {
    base: string;
    hovered: string;
    pressed: string;
    focusVisible: string;
    disabled?: string;
  }

  interface InputStyles {
    base: string;
    hovered: string;
    focused: string;
    focusVisible: string;
    disabled?: string;
    invalid?: string;
  }

  interface MenuItemStyles {
    base: string;
    hovered: string;
    selected: string;
    focusVisible: string;
    disabled?: string;
  }

  interface ToggleStyles {
    base: string;
    hovered: string;
    selected: string;
    focusVisible: string;
    disabled?: string;
  }
}

export = AriaAttributes;
export as namespace AriaAttributes;
