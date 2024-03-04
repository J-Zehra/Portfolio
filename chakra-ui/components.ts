import { defineStyleConfig } from "@chakra-ui/react";

export const CustomText = defineStyleConfig({
  baseStyle: { fontSize: ".9rem", color: "palette.text" },
  variants: {
    heading: {
      fontWeight: "extrabold",
      fontSize: "3rem",
    },
    subheading: {
      fontWeight: "extrabold",
      fontSize: "2rem",
    },
  },
});

export const CustomButton = defineStyleConfig({
  baseStyle: {
    fontSize: ".9rem",
    w: "fit-content",
    borderRadius: ".3rem",
    boxShadow: "none",
    transition: "all .3s ease",
  },
  variants: {
    solid: {
      outline: "none",
      border: "none",
      p: " 1.5rem",
      bg: "palette.accent",
      color: "palette.background.primary",
      _hover: { bg: "#2D7974" },
      _active: { bg: "#256A65" },
    },
  },
});
