import { Grid, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function Home() {
  return (
    <Grid h="100vh" w="100%" placeContent="center" bg="#EBF2F1">
      <Stack align="center">
        <Image
          src="/logo.png"
          alt="Logo"
          width={500}
          height={500}
          style={{ width: "15rem" }}
        />
        <Text
          position="absolute"
          bottom="2rem"
          fontWeight="semibold"
          opacity={0.8}
          color="#04364A"
        >
          Coming Soon
        </Text>
      </Stack>
    </Grid>
  );
}
