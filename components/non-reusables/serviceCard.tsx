import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { ReactNode } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Tilt from "react-parallax-tilt";

export default function ServiceCard({
  title,
  subtitle,
  description,
  icon,
}: {
  title: string;
  subtitle: string;
  description: string;
  icon: ReactNode;
}) {
  return (
    <Card
      cursor="default"
      boxShadow="2px 5px 10px rgba(0, 100, 100, .05)"
      width="20rem"
      bg="palette.background.primary.hover"
      border="1px solid rgba(255, 255, 255, .1)"
    >
      <CardHeader
        as={Stack}
        spacing="1rem"
        bg="palette.background.primary.color"
        borderTopRadius=".5rem"
      >
        <Box fontSize="3rem" color="palette.accent.primary.color">
          {icon}
        </Box>
        <Stack direction="column">
          <Text fontSize="1.3rem" opacity={0.8} fontWeight="bold">
            {title}
          </Text>
          <Text
            opacity={0.8}
            color="palette.text.primary.color"
            fontStyle="oblique"
            fontWeight="mediumed"
          >
            {subtitle}
          </Text>
        </Stack>
      </CardHeader>
      <CardBody paddingBlock={2}>
        <Text opacity={0.9} lineHeight={6}>
          {description}
        </Text>
      </CardBody>
      <CardFooter>
        <Center gap="1rem">
          <Link href="">
            <Text
              color="palette.accent.primary.color"
              _hover={{ color: "palette.accent.primary.hover" }}
              fontWeight="semibold"
            >
              Learn more
            </Text>
          </Link>
          <Box>
            <IoIosArrowRoundForward />
          </Box>
        </Center>
      </CardFooter>
    </Card>
  );
}
