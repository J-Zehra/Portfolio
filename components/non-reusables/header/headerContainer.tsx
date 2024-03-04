import { scrollState } from "@/state/scrollState";
import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import { useRecoilValue } from "recoil";

type Props = {
  children: ReactNode;
};

const HeaderContainer = ({ children }: Props) => {
  const isScrolled = useRecoilValue(scrollState);

  return (
    <Box
      as="header"
      pos="fixed"
      w="100%"
      zIndex={10}
      borderBottom="1px solid rgba(0, 100, 100, 0.05)"
      backdropFilter={isScrolled ? "blur(15px)" : ""}
    >
      {children}
    </Box>
  );
};

export default HeaderContainer;
