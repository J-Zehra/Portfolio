import { Divider, Skeleton, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { SiChakraui, SiMongodb, SiNextdotjs, SiPrisma } from "react-icons/si";
import moment from "moment";
import { useQuery } from "react-query";
import { getCaseStudy } from "../lib/data";

export default function Banner({ id }: { id: string }) {
  const { data: project, isLoading } = useQuery({
    queryKey: ["project", id],
    queryFn: () => getCaseStudy(id),
  });

  if (isLoading) {
    return <Skeleton opacity={0.05} w="100%" h="15rem" borderRadius=".5rem" />;
  }

  return (
    <Stack
      p="2.5rem 3rem"
      backgroundImage="linear-gradient(to bottom, #468A8A, transparent)"
      borderRadius=".5rem"
      spacing="1.5rem"
    >
      <Stack direction="row" w="100%" justify="space-between" align="start">
        <Stack direction="row">
          <Text variant="subheading" fontSize="2.5rem">
            {project?.study?.name}
          </Text>
          <Text
            fontSize="1.2rem"
            fontStyle="italic"
            fontWeight="semibold"
            color="palette.accent"
          >
            Case Study
          </Text>
        </Stack>
        <Link href={project?.study?.link || ""} target="_blank">
          <Text
            textDecoration="underline"
            transition="all .3s ease"
            _hover={{ color: "palette.accent" }}
            fontWeight="semibold"
          >
            See live
          </Text>
        </Link>
      </Stack>
      <Divider borderColor="rgba(0, 100, 100, .1)" />
      <Stack direction="row" w="100%" justify="space-between" align="start">
        <Stack direction="row">
          <Stack opacity={0.8} fontSize=".8rem">
            <Text>Start Date:</Text>
            <Text>End Date:</Text>
          </Stack>
          <Stack fontWeight="medium" opacity={0.9} fontSize=".8rem">
            <Text>{moment(project?.study?.startDate).format("LL")}</Text>
            <Text>{moment(project?.study?.endDate).format("LL")}</Text>
          </Stack>
        </Stack>
        <Stack spacing="1rem">
          <Text opacity={0.8} fontSize=".8rem">
            Technologies
          </Text>
          <Stack direction="row" spacing="1.2rem" opacity={0.8}>
            <SiNextdotjs />
            <SiChakraui />
            <SiPrisma />
            <SiMongodb />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
