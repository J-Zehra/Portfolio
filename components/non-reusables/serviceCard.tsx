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
import React, { ReactNode, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import CardWave1 from "../svg/cardWave1";

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
  const [shineStyle, setShineStyle] = useState({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const shineX = (x / width) * 100;
    const shineY = (y / height) * 100;

    setShineStyle({
      background: `radial-gradient(circle at ${shineX}% ${shineY}%, rgba(114, 189, 190, 0.15) 5%, rgba(114, 189, 190, 0.1) 10%, transparent 75%)`,

      zIndex: 2,
    });
  };

  const handleMouseLeave = () => {
    setShineStyle({});
  };

  return (
    <Card
      cursor="pointer"
      boxShadow="2px 5px 10px rgba(0, 100, 100, .05)"
      width="20rem"
      h="23rem"
      borderRadius=".7rem"
      bg="palette.background.primary.color"
      border="1px solid rgba(255, 255, 255, .1)"
      position="relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      transition="all .3s ease"
      _hover={{ borderColor: "rgba(114, 189, 190, 0.3)" }}
    >
      {/* Shine effect overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        transition="all .3s ease"
        height="100%"
        pointerEvents="none"
        style={shineStyle}
        borderRadius=".7rem"
        zIndex={2} // Overlay z-index
      />

      {/* Card content */}
      <CardHeader
        as={Stack}
        zIndex={1} // Lower z-index than shine
        spacing="1rem"
        bg="palette.background.primary.color"
        borderTopRadius=".7rem"
      >
        <Box fontSize="3rem" color="palette.accent.primary.color">
          {icon}
        </Box>
        <Stack direction="column">
          <Text
            fontSize="1.3rem"
            color="palette.accent.primary.color"
            fontWeight="bold"
          >
            {title}
          </Text>
        </Stack>
      </CardHeader>
      <CardBody display="flex" alignItems="end" zIndex={1} paddingBlock={2}>
        <Text opacity={0.9} lineHeight={6}>
          {description}
        </Text>
      </CardBody>
      <CardFooter zIndex={1}>
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
      <CardWave1 />
    </Card>
  );
}
