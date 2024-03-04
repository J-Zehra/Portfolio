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
    <Tilt glareEnable glareColor="#508C88" tiltReverse glareReverse gyroscope>
      <Card
        cursor="default"
        boxShadow="2px 5px 10px rgba(0, 100, 100, .05)"
        width="20rem"
        bg="palette.background.primary"
      >
        <CardHeader
          as={Stack}
          spacing="1rem"
          bg="#CDE3DF"
          borderTopRadius=".5rem"
        >
          <Box fontSize="3rem" color="palette.accent">
            {icon}
          </Box>
          <Stack direction="column">
            <Text fontSize="1.3rem" opacity={0.8} fontWeight="bold">
              {title}
            </Text>
            <Text
              opacity={0.8}
              color="palette.text"
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
              <Text color="palette.accent" fontWeight="semibold">
                Learn more
              </Text>
            </Link>
            <Box>
              <IoIosArrowRoundForward />
            </Box>
          </Center>
        </CardFooter>
      </Card>
    </Tilt>
  );
}
