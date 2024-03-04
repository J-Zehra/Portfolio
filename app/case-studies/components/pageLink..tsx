import { sectionViewState } from "@/state/sectionViewState";
import { Box, Stack, Text } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";

const PageLink = () => {
  const viewState = useRecoilValue(sectionViewState);

  const links = [
    "The Problem",
    "The Solution",
    "Challenges",
    "Methodology",
    "Result",
  ];

  const scrollToElement = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const elementTop = element.offsetTop;
      const windowHeight = window.innerHeight;
      const margin = targetId === "The Problem" ? 20 : windowHeight / 2.5;
      const scrollPosition = elementTop + margin;

      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <Stack>
      {links.map((link) => {
        return (
          <Box
            onClick={() => scrollToElement(link)}
            key={link}
            cursor="pointer"
          >
            <Text
              w="fit-content"
              color={viewState === link ? "palette.accent" : ""}
              fontWeight={viewState === link ? "bold" : ""}
              _hover={{ color: "palette.accent" }}
            >
              {link}
            </Text>
          </Box>
        );
      })}
    </Stack>
  );
};

export default PageLink;
