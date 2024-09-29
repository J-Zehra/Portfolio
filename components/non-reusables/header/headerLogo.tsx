import { scrollState } from "@/state/scrollState";
import { Center } from "@chakra-ui/react";
import Image from "next/image";
import { useRecoilValue } from "recoil";

const HeaderLogo = () => {
  const isScrolled = useRecoilValue(scrollState);

  return (
    <Center>
      <Image
        src={"/logo.png"}
        alt="Logo"
        width={500}
        height={500}
        style={{
          transition: "all .2s ease",
          width: isScrolled ? "1rem" : "1.25rem",
          userSelect: "none",
        }}
      />
    </Center>
  );
};

export default HeaderLogo;
