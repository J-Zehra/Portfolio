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
      <Container as={Flex} alignItems="center" justifyContent="space-between">
        <Link href="/">
          <HeaderLogo />
        </Link>
        <Navlinks />
      </Container>
    </HeaderContainer>
  );
}
