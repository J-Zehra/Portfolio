import { Box } from "@chakra-ui/react";
import React from "react";
import Container from "../reusables/container";
import SectionHeader from "../reusables/sectionHeader";

export default function Contact() {
  return (
    <Box as="section" paddingBlock="4rem" bg="palette.background.primary">
      <Container>
        <SectionHeader
          title="Let's Discuss Your Project"
          description="Get in touch with me by filling out the form. I respond immediately!"
          coloredText="Project"
        />
      </Container>
    </Box>
  );
}
