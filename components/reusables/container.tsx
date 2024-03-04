import { Box, BoxProps } from "@chakra-ui/react";

const breakPoints = {
  base: "92%",
  sm: "90%",
  lg: "80%",
  xl: "85%",
  "2xl": "70%",
};

interface ContainerProps extends BoxProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children, ...rest }) => {
  return (
    <Box w={breakPoints} maxW="container.xl" h="100%" margin="auto" {...rest}>
      {children}
    </Box>
  );
};

export default Container;
