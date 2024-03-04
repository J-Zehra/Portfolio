import { Box, Skeleton, SkeletonText, Stack } from "@chakra-ui/react";
import React from "react";

export default function Loading() {
  return (
    <Stack direction="row" spacing="4rem" justify="space-between">
      <Box flex={1.5} pos="relative">
        <Skeleton w="100%" h="20rem" borderRadius=".5rem" />
      </Box>
      <Stack spacing="1.6rem" flex={1} justify="end">
        <Stack>
          <Skeleton w="4rem" h="4rem" borderRadius=".5rem" />
          <Skeleton w="15rem" h="2rem" borderRadius=".5rem" />
          <Skeleton w="20rem" h="1.5rem" borderRadius=".5rem" />
        </Stack>
        <SkeletonText borderRadius=".5rem" />
        <Stack direction="row" align="center" spacing="2rem">
          <Skeleton w="12rem" h="3rem" borderRadius=".5rem" />
          <Skeleton w="4rem" h="1rem" borderRadius=".5rem" />
        </Stack>
      </Stack>
    </Stack>
  );
}
