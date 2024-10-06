import { Box, Stack, Text } from "@chakra-ui/react";
import Container from "../reusables/container";

export default function Overview() {
  const items = [
    { label: "Clients worked with", value: 20 },
    { label: "Projects worked on", value: 25 },
    { label: "Years of experience", value: 3 },
  ];

  return (
    <Box
      p="2rem"
      zIndex={5}
      w="100%"
      bg="palette.background.primary.hover"
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
              <Text color="palette.text.secondary.color">{item.label}</Text>
              <Text
                variant="heading"
                fontSize="4.5rem"
                fontWeight="black"
                color="palette.background.secondary.hover"
                bgGradient="linear(to-r, #505050, #6FBFBF)"
                bgClip="text"
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
