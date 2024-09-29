"use client";

import { ReactNode } from "react";
import { Next13ProgressBar } from "next13-progressbar";
import { useTheme } from "@chakra-ui/react";

export default function ProgressProviderWrapper({
  children,
}: {
  children: ReactNode;
}) {
  const theme = useTheme();
  const accentColor = theme.colors.palette.accent.primary.color;

  return (
    <>
      {children}
      <Next13ProgressBar
        height="5px"
        color={accentColor}
        options={{ showSpinner: false }}
        showOnShallow
      />
    </>
  );
}
