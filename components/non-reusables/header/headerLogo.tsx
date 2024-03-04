import { scrollState } from "@/state/scrollState";
import Image from "next/image";
import { useRecoilValue } from "recoil";

const HeaderLogo = () => {
  const isScrolled = useRecoilValue(scrollState);

  return (
    <Image
      src={"/logo.webp"}
      alt="Logo"
      width={500}
      height={500}
      style={{
        transition: "all .2s ease",
        width: isScrolled ? "4rem" : "6rem",
        userSelect: "none",
      }}
    />
  );
};

export default HeaderLogo;
