import { Skeleton, SkeletonText, Stack } from "@chakra-ui/react";
import React from "react";

export default function TestimonialsLoading() {
  return (
    <Stack spacing="1.5rem">
      <Stack direction="row" align="center">
        <Skeleton w="1rem" h="1rem" borderRadius="2rem" />
        <SkeletonText w="5rem" borderRadius="2rem" noOfLines={1} />
      </Stack>
      <SkeletonText w="25rem" />
      <Skeleton w="10rem" h="1.6rem" borderRadius=".3rem" />
    </Stack>
  );
}
