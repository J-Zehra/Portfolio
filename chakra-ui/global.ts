const styles = {
  global: {
    html: {
      scrollBehavior: "smooth",
      overflowX: "hidden",
    },
    body: {
      bg: "palette.background.secondary.color",
      color: "palette.text.primary.color",
      WebkitTapHighlightColor: "transparent",
    },
    "::-webkit-scrollbar": {
      width: "8px",
    },
    "::-webkit-scrollbar-track": {
      bg: "transparent",
    },
    "::-webkit-scrollbar-thumb": {
      bg: "palette.accent",
    },
    "::-webkit-scrollbar-thumb:hover": {
      bg: "palette.accent.primary.color",
    },
  },
};

export default styles;
