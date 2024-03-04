"use client";

import Container from "@/components/reusables/container";
import SectionHeader from "@/components/reusables/sectionHeader";
import useObserver from "@/hooks/useObserver";
import { client } from "@/sanity-client/client";
import { NavLinks } from "@/utils/enums";
import { Box, Center, Stack } from "@chakra-ui/react";
import { useQuery } from "react-query";
import Loading from "./components/loading";
import ProjectItem from "./components/projectItem/projectItem";

export default function CaseStudiesPage() {
  const { ref } = useObserver(NavLinks.caseStudies);

  const { data: projects, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: () => {
      return client.fetch<Project[]>(
        `*[_type == "project"] | order(_createdAt asc) { 
          _id, 
          "mainImageUrl": mainImage.asset->url, 
          "subImageUrl": subImage.asset->url, 
          "logoUrl": logo.asset->url, 
          title, 
          subtitle, 
          description, 
          link,
        }`
      );
    },
  });

  return (
    <Box
      as="main"
      paddingTop="6rem"
      bg="palette.background.ssecondary"
      ref={ref}
    >
      <Center>
        <SectionHeader
          title="Case Studies"
          description="Take a time to look at the steps I took in every project."
          coloredText="Studies"
        />
      </Center>

      <Box
        bg="palette.background.primary"
        paddingBlock="8rem"
        borderTopRadius="12rem"
        marginTop="5rem"
      >
        <Container>
          <Stack spacing="10rem">
            {isLoading ? (
              <Loading />
            ) : (
              projects?.map((project, index) => {
                return (
                  <ProjectItem
                    key={project._id}
                    project={project}
                    isLoading={isLoading}
                    index={index}
                  />
                );
              })
            )}
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}