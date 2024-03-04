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
        fontSize="1.2rem"
        bg="rgba(0, 100, 100, .1)"
        borderRadius="2rem"
        _hover={{
          bg: "rgba(0, 100, 100, .2)",
        }}
        transition="all .3s ease"
      >
        <FaGithub />
      </Center>
    </Link>
  );
};

export default GithubLink;
