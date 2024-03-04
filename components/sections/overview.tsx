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
      boxShadow="0px 10px 18px rgba(0, 100, 100, .02)"
      bg="palette.background.primary"
      borderBottomRadius="20rem"
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
                color="palette.accent"
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
