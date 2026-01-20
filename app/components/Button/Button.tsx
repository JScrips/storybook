"use client";
import React from "react";
import { Button as RACButton } from "react-aria-components";
import type { ButtonProps } from "./Button.d";

export const Button = ({ variant = "primary", ...props }: ButtonProps) => {
  return (
    <>
      {variant === "primary" ? (
        <RACButton
          {...props}
          className="
      cursor-pointer transition-all
      bg-primary text-buttonText
      px-6 py-2 rounded-sm text-shadow-lg/10 font-medium
      inset-shadow-sm inset-shadow-white/40
      border-defaultBorder border-b-[4px]
      hover:brightness-110 hover:-translate-y-[1px]  hover:border-b-[6px]
      pressed:border-b-[2px] pressed:brightness-80 pressed:translate-y-[2px]
      "
        />
      ) : (
        <></>
      )}
    </>
  );
};
