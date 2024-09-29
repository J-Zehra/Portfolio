"use client";

import useObserver from "@/hooks/useObserver";
import { NavLinks } from "@/utils/enums";
import { Grid } from "@chakra-ui/react";

export default function ServicesPage() {
  const { ref } = useObserver(NavLinks.services);

  return (
    <Grid h="100vh" placeContent="center" ref={ref}>
      Under Constuction
    </Grid>
  );
}
