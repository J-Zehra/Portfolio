import isOdd from "@/utils/isOdd";
import { Image } from "@chakra-ui/react";
import React from "react";

type Props = {
  mainImageUrl: string;
  subImageUrl: string;
  index: number;
  onMouseOver: () => void;
  onMouseLeave: () => void;
};

const ProjectItemImage = ({
  mainImageUrl,
  subImageUrl,
  index,
  onMouseLeave,
  onMouseOver,
}: Props) => {
  const subImagePosition = (number: number) => {
    if (isOdd(number)) {
      return {
        left: "-2rem",
      };
    } else return { right: "-2rem" };
  };

  const subImageBosShadowDirection = (number: number) => {
    if (isOdd(number)) {
      return {
        boxShadow: "5px 8px 10px rgba(0, 150, 150, .15)",
      };
    } else return { boxShadow: "-5px 8px 10px rgba(0, 150, 150, .15)" };
  };

  return (
    <>
      <Image
        src={mainImageUrl}
        alt="Portfolio Image"
        width="100%"
        borderRadius=".5rem"
        filter="grayscale(100%)"
        transition="all .5s ease"
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        _hover={{ filter: "grayscale(0)" }}
        {...subImageBosShadowDirection(index + 1)}
      />
      <Image
        src={subImageUrl}
        alt="Portfolio Image"
        width="10rem"
        borderRadius=".6rem"
        filter="grayscale(100%)"
        transition="all .5s ease"
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        _hover={{ filter: "grayscale(0)" }}
        pos="absolute"
        bottom="-3rem"
        {...subImagePosition(index)}
        {...subImageBosShadowDirection(index)}
      />
    </>
  );
};

export default ProjectItemImage;
