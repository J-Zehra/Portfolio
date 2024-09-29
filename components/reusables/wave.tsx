import { Box } from "@chakra-ui/react";
import React from "react";

export default function Wave() {
  return (
    <Box w="100%" position="absolute" bottom="-15rem">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#2A2A2A"
          fill-opacity="1"
          d="M0,256L60,240C120,224,240,192,360,170.7C480,149,600,139,720,144C840,149,960,171,1080,165.3C1200,160,1320,128,1380,112L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
    </Box>
  );
}
