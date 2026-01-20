"use client";
import React from "react";
import { Button as RACButton } from "react-aria-components";
import type { ButtonProps } from "./Button.d";

export function Button(props: ButtonProps) {
  return (
    <RACButton
      {...props}
      className="bg-white dark:bg-gray-900 text-white px-4 py-2 rounded hover:bg-blue-700"
    />
  );
}
