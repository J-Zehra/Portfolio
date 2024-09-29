import { Center } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";

type Props = {
  link?: string;
};

const GithubLink = ({ link }: Props) => {
  return (
    <Link href={link || ""}>
      <Center
        p=".8rem"
        fontSize="1.4rem"
        bg="palette.background.primary.hover"
        border="1px solid rgba(255, 255, 255, .05)"
        borderRadius="2rem"
        _hover={{
          bg: "palette.background.secondary.color",
        }}
        transition="all .3s ease"
      >
        <FaGithub />
      </Center>
    </Link>
  );
};

export default GithubLink;
