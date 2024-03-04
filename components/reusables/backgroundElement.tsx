import { Box } from "@chakra-ui/react";
import Image from "next/image";

export default function BackgroundElement({
  src,
  top,
  left,
  right,
  bottom,
  width,
  opacity,
}: {
  src: string;
  top?: number | string;
  left?: number | string;
  right?: number | string;
  bottom?: number | string;
  width: string;
  opacity?: number;
}) {
  return (
    <Box
      pos="absolute"
      top={top}
      bottom={bottom}
      left={left}
      zIndex={0}
      opacity={opacity}
      right={right}
    >
      <Image
        src={src}
        alt="Background Element"
        width={800}
        height={800}
        style={{ width: width, pointerEvents: "none", userSelect: "none" }}
      />
    </Box>
  );
}
