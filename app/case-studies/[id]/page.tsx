"use client";

import Container from "@/components/reusables/container";
import {
  Box,
  Divider,
  Skeleton,
  SkeletonText,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { Suspense, useEffect } from "react";
import { useQuery } from "react-query";
import { PortableText } from "@portabletext/react";
import { customPortableTextComponent } from "../components/customPortableTextComponent";
import PageLink from "../components/pageLink.";
import { sectionViewState } from "@/state/sectionViewState";
import { useSetRecoilState } from "recoil";
import GithubLink from "../components/githubLink";
import WebsiteLink from "../components/websiteLink";
import { getCaseStudy } from "../lib/data";
import Banner from "../components/banner";

export default function CaseStudy({ params }: { params: { id: string } }) {
  const setViewState = useSetRecoilState(sectionViewState);

  const { data: project, isLoading } = useQuery({
    queryKey: ["project", params.id],
    queryFn: () => getCaseStudy(params.id),
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
        <Banner id={params.id} />
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
            ) : (
              <Stack spacing="3rem">
                <Skeleton
                  opacity={0.05}
                  w="8rem"
                  h="2rem"
                  borderRadius=".3rem"
                />
                <SkeletonText w="100%" noOfLines={6} opacity={0.05} />
              </Stack>
            )}
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
              <GithubLink id={params.id} />
              <WebsiteLink id={params.id} />
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
