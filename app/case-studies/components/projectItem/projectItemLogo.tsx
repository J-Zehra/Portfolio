import { Image } from "@chakra-ui/react";
import React from "react";

type Props = {
  logoUrl: string;
  isHover: boolean;
};

const ProjectItemLogo = ({ logoUrl, isHover }: Props) => {
  return (
    <Image
      src={logoUrl}
      alt="Portfolio Image"
      width="4rem"
      transition="all .3s ease"
      filter={isHover ? "" : "grayscale(100%)"}
    />
  );
};

export default ProjectItemLogo;
