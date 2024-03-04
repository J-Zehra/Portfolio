const styles = {
  global: {
    html: {
      scrollBehavior: "smooth",
      overflowX: "hidden",
    },
    body: {
      bg: "palette.background.secondary",
      color: "palette.text",
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
      bg: "#35827D",
    },
  },
};

export default styles;
