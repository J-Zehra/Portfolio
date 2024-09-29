"use client";

import Container from "../../reusables/container";
import { Flex } from "@chakra-ui/react";
import Navlinks from "./navlinks";
import Link from "next/link";
import HeaderContainer from "./headerContainer";
import HeaderLogo from "./headerLogo";

export default function Header() {
  return (
    <HeaderContainer>
      <Container
        as={Flex}
        borderRadius="2rem"
        paddingInline="2.5rem"
        border="1px solid rgba(255, 255, 255, 0.05)"
        backdropFilter="blur(15px)"
        alignItems="center"
        bg="rgba(75, 75, 75, .1)"
        justifyContent="space-between"
      >
        <Link href="/">
          <HeaderLogo />
        </Link>
        <Navlinks />
      </Container>
    </HeaderContainer>
  );
}
