"use client";

import Container from "@/components/reusables/container";
import { client } from "@/sanity-client/client";
import { Box, Divider, Stack, Text } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { PortableText } from "@portabletext/react";
import Banner from "../components/banner";
import { customPortableTextComponent } from "../components/customPortableTextComponent";
import PageLink from "../components/pageLink.";
import { sectionViewState } from "@/state/sectionViewState";
import { useSetRecoilState } from "recoil";
import GithubLink from "../components/githubLink";
import WebsiteLink from "../components/websiteLink";

export default function CaseStudy() {
  const { id } = useParams();
  const setViewState = useSetRecoilState(sectionViewState);

  const { data: project, isLoading } = useQuery({
    queryKey: ["project", id],
    queryFn: async () => {
      const res = await client.fetch<Project[]>(
        `*[_id == "${id}"] {
           study->,
           name,
           link,
           startDate, 
           endDate
        }`
      );

      return res[0];
    },
  });

  useEffect(() => {
    if (isLoading) return;
    const links = [
      "The Problem",
      "The Solution",
      "Challenges",
      "Methodology",
      "Result",
    ];

    const observer = new IntersectionObserver(
      (entry) => {
        setViewState(entry[0].target.innerHTML.toString());
      },
      { rootMargin: "-400px" }
    );

    links.map((link) => {
      const element = document.getElementById(link);
      if (element) observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [isLoading, setViewState]);

  return (
    <Box as="main" paddingBlock="8rem">
      <Container>
        <Banner project={project?.study} />
        <Stack
          w="100%"
          direction="row"
          paddingInline="3rem"
          spacing="5rem"
          paddingTop="5rem"
          position="relative"
        >
          <Stack flex={2.5}>
            {!isLoading ? (
              <PortableText
                value={project!.study.study}
                components={customPortableTextComponent}
              />
            ) : null}
          </Stack>
          <Stack
            flex={1}
            h="20rem"
            spacing="1.5rem"
            position="sticky"
            top="6rem"
          >
            <Text fontWeight="semibold">On this page</Text>
            <PageLink />
            <Divider w="5rem" borderColor="rgba(0, 100, 100, .3)" />
            <Stack direction="row" align="center">
              <GithubLink link={project?.study.githubLink} />
              <WebsiteLink link={project?.link} />
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
