"use client";

import theme from "@/chakra-ui/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function ChakraProviderWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
