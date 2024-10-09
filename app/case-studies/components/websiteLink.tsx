import { Center } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { CiLink } from "react-icons/ci";
import { useQuery } from "react-query";
import { getCaseStudy } from "../lib/data";

type Props = {
  id: string;
};

const WebsiteLink = ({ id }: Props) => {
  const { data: project, isLoading } = useQuery({
    queryKey: ["project", id],
    queryFn: () => getCaseStudy(id),
  });

  return (
    <Link href={project?.study.link || ""}>
      <Center
        bg="palette.background.primary.hover"
        border="1px solid rgba(255, 255, 255, .05)"
        borderRadius="2rem"
        padding=".8rem"
        fontSize="1.4rem"
        _hover={{
          bg: "palette.background.secondary.color",
        }}
        transition="all .3s ease"
      >
        <CiLink />
      </Center>
    </Link>
  );
};

export default WebsiteLink;
