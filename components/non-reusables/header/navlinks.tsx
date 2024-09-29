"use client";

import { activeNavState } from "@/state/activeNav";
import { scrollState } from "@/state/scrollState";
import { NavLinks } from "@/utils/enums";
import { Center, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRecoilValue } from "recoil";

export default function Navlinks() {
  const activeNav = useRecoilValue(activeNavState);
  const isScrolled = useRecoilValue(scrollState);

  const links = [
    { label: NavLinks.home, link: "/" },
    { label: NavLinks.about, link: "/about" },
    { label: NavLinks.caseStudies, link: "/case-studies" },
    { label: NavLinks.services, link: "/services" },
    { label: NavLinks.contact, link: "/contact" },
  ];

  return (
    <Stack as="nav" spacing="2rem" direction="row" align="center">
      {links.map((nav) => {
        return (
          <Link key={nav.link} href={nav.link}>
            <Center transition="all .2s ease" h={isScrolled ? "3rem" : "4rem"}>
              <Text
                color={
                  activeNav === nav.label ? "palette.accent.primary.color" : ""
                }
                fontWeight={activeNav === nav.label ? "medium" : "normal"}
                _hover={{ color: "palette.accent.primary.color" }}
                fontSize=".8rem"
              >
                {nav.label}
              </Text>
            </Center>
          </Link>
        );
      })}
    </Stack>
  );
}
