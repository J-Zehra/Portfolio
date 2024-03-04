import { Box, useTheme } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  index: number;
  isHover: boolean;
};

const isOdd = (number: number) => {
  if (number % 2 === 0) {
    return true;
  } else return false;
};

const ProjectItemGradientOverlay = ({ index, isHover }: Props) => {
  const theme = useTheme();
  const secondaryColor = theme.colors.palette.background.primary;

  const gradientDirection = (number: number) => {
    if (isOdd(number)) {
      return {
        backgroundImage: `linear-gradient(to right , rgba(0, 0, 0, 0), ${secondaryColor})`,
      };
    } else
      return {
        backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0), ${secondaryColor})`,
      };
  };

  return (
    <AnimatePresence>
      {!isHover ? (
        <Box
          pos="absolute"
          top={0}
          right={0}
          left={0}
          bottom={0}
          w="100%"
          h="100%"
          borderRadius=".5rem"
          zIndex={1}
          pointerEvents="none"
          {...gradientDirection(index)}
          as={motion.div}
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
        />
      ) : null}
    </AnimatePresence>
  );
};

export default ProjectItemGradientOverlay;
