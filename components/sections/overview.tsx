import { Box, Stack, Text } from "@chakra-ui/react";
import Container from "../reusables/container";

export default function Overview() {
  const items = [
    { label: "Clients worked with", value: 15 },
    { label: "Projects worked on", value: 20 },
    { label: "Years of experience", value: 2 },
  ];

  return (
    <Box
      p="2rem"
      marginTop="5rem"
      zIndex={5}
      // bg="palette.background.primary.hover"
      color="palette.text.primary.color"
    >
      <Container
        as="section"
        display="flex"
        justifyContent="space-around"
        alignItems="center"
      >
        {items.map((item) => {
          return (
            <Stack align="center" key={item.label}>
              <Text>{item.label}</Text>
              <Text
                variant="heading"
                fontSize="4.5rem"
                fontWeight="black"
                color="palette.accent.primary.color"
              >
                {item.value}+
              </Text>
            </Stack>
          );
        })}
      </Container>
    </Box>
  );
}
