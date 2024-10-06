import { Highlight, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Logo from "./logo";

export default function SectionHeader({
  title,
  description,
  coloredText,
}: {
  title: string;
  coloredText?: string;
  description: string;
}) {
  return (
    <Stack align="end">
      {/* <Logo /> */}
      <Text variant="heading">
        <Highlight
          query={coloredText || ""}
          styles={{ color: "palette.accent.primary.color" }}
        >
          {title}
        </Highlight>
      </Text>
      <Text>{description}</Text>
    </Stack>
  );
}
