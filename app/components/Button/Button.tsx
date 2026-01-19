"use client";
import React from "react";
import { Button as RACButton } from "react-aria-components";

export function Button(props: any) {
  return (
    <RACButton
      {...props}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    >
      Test
    </RACButton>
  );
}
