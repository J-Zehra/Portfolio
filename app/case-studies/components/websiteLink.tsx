import { Center } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { CiLink } from "react-icons/ci";

type Props = {
  link?: string;
};

const WebsiteLink = ({ link }: Props) => {
  return (
    <Link href={link || ""}>
      <Center
        bg="rgba(0, 100, 100, .1)"
        borderRadius="2rem"
        padding=".8rem"
        fontSize="1.4rem"
        _hover={{
          bg: "rgba(0, 100, 100, .2)",
        }}
        transition="all .3s ease"
      >
        <CiLink
         />
      </Center>
    </Link>
  );
};

export default WebsiteLink;
