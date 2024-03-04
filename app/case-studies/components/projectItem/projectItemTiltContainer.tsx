import { useTheme } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import Tilt from "react-parallax-tilt";

type Props = {
  children: ReactNode;
};

const ProjectItemTiltContainer = ({ children }: Props) => {
  const theme = useTheme();
  const secondaryColor = theme.colors.palette.background.primary;

  return (
    <Tilt
      glareEnable
      glareColor={secondaryColor}
      tiltReverse
      glareReverse
      gyroscope
    >
      {children}
    </Tilt>
  );
};

export default ProjectItemTiltContainer;
