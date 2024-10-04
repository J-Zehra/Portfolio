"use client";

import Overview from "@/components/sections/overview";
import Socials from "@/components/non-reusables/socials";
import Container from "@/components/reusables/container";
import useObserver from "@/hooks/useObserver";
import { NavLinks } from "@/utils/enums";
import {
  Box,
  Button,
  Center,
  Flex,
  Highlight,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { FaLightbulb } from "react-icons/fa";
import Specialties from "@/components/sections/specialties";
import CaseStudies from "@/components/sections/caseStudies";
import Testimonials from "@/components/sections/testimonials";
import Contact from "@/components/sections/contact";
import BackgroundElements from "@/components/non-reusables/backgroundElements";
import UnderConstractionModal from "@/components/non-reusables/underConstractionModal";
import Wave from "@/components/reusables/wave";

export default function Home() {
  const { ref } = useObserver(NavLinks.home);

  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });

  return (
    <>
      {/* {isOpen ? (
        <UnderConstractionModal isOpen={isOpen} onClose={onClose} />
      ) : null} */}
      <Box pos="relative">
        <Flex
          as="main"
          ref={ref}
          h="100vh"
          w="100%"
          justifyContent="center"
          alignItems="center"
          bg="palette.background.primary.color"
        >
          <Container
            as={Stack}
            h="fit-content"
            flexDir="row"
            zIndex={2}
            alignItems="center"
            justifyContent="space-between"
          >
            <Stack alignItems="center" flex={1}>
              {/* <Socials /> */}
              <Text variant="heading" fontSize="3.2rem" textAlign="center">
                <Highlight
                  styles={{ color: "palette.accent.primary.color" }}
                  query={["Precise Execution."]}
                >
                  Selective Effort, Precise Execution.
                </Highlight>
              </Text>
              <Text lineHeight={6} w="50%" textAlign="center">
                Welcome to my digital domain, where creativity meets technical
                mastery. Explore my portfolio and let&apos;s turn your digital
                dreams into reality.
              </Text>
              <Stack
                marginTop="1.2rem"
                direction="row"
                align="center"
                spacing="3rem"
              >
                <Button leftIcon={<FaLightbulb />}>Transform Ideas</Button>
                <Link href="/case-studies">
                  <Text
                    textDecoration="underline"
                    _hover={{ color: "palette.text.primary.hover" }}
                    fontWeight="semibold"
                  >
                    My works
                  </Text>
                </Link>
              </Stack>
            </Stack>
          </Container>
          <Wave />
        </Flex>
        <BackgroundElements />
      </Box>
      <Specialties />
      <CaseStudies />
      <Overview />
      <Testimonials />
      <Contact />
    </>
  );
}
