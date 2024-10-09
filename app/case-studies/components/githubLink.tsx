import { Center } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { useQuery } from "react-query";
import { getCaseStudy } from "../lib/data";

type Props = {
  id: string;
};

const GithubLink = ({ id }: Props) => {
  const { data: project, isLoading } = useQuery({
    queryKey: ["project", id],
    queryFn: () => getCaseStudy(id),
  });

  return (
    <Link href={project?.study.link || ""}>
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
