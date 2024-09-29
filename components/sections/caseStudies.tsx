import React from "react";
import Container from "../reusables/container";
import {
  Box,
  Button,
  Center,
  Flex,
  Highlight,
  Stack,
  Text,
} from "@chakra-ui/react";
import Logo from "../reusables/logo";
import { IoIosPaper } from "react-icons/io";

export default function CaseStudies() {
  return (
    <Box
      as="section"
      paddingBlock="2rem"
      bg="palette.background.primary"
      boxShadow="0px -10px 18px rgba(0, 100, 100, .02)"
      h="35rem"
      borderTopRadius="12rem"
    >
      <Container as={Flex} justifyContent="space-between" alignItems="center">
        <Stack flex={1}>
          {/* <Logo /> */}
          <Text variant="heading">
            <Highlight
              query="Projects"
              styles={{ color: "palette.accent.primary.color" }}
            >
              My Latest Projects
            </Highlight>
          </Text>
          <Text lineHeight={6}>
            In over 3 years, I&apos;ve been building websites and web app as a
            school requirement, personal project, and ultimately for a client.
            Here are some of the projects I&apos;ve worked on. See case studies
            for a more detailed development process.
          </Text>
          <Center marginTop="1.2rem" w="fit-content">
            <Button leftIcon={<IoIosPaper />}>Case Studies</Button>
          </Center>
        </Stack>
        <Center flex={1}></Center>
      </Container>
    </Box>
  );
}
