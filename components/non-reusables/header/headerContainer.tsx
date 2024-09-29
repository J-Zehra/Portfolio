import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const HeaderContainer = ({ children }: Props) => {
  return (
    <Box
      as="header"
      pos="fixed"
      w="100%"
      top="1.5rem"
      left="50%"
      transform="translateX(-50%)"
      zIndex={10}
    >
      {children}
    </Box>
  );
};

export default HeaderContainer;
