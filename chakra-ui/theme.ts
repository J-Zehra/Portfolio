import { extendTheme } from "@chakra-ui/react";
import colors from "./color";
import fonts from "./fonts";
import styles from "./global";
import { CustomButton, CustomText } from "./components";

const theme = extendTheme({
  colors,
  fonts,
  styles,
  components: { Text: CustomText, Button: CustomButton },
});
export default theme;
