import { extendBaseTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const styles = {
  global: () => ({
    body: {
      color: mode("gray.800", "#d9d9d9"),
      bg: mode("f6f6f6", "#20214"),
    },
  }),
};

const components = {
  Drawer: {
    BaseStyle: () => ({
      dialog: {
        bg: mode("white", "#20214"),
      },
    }),
  },
};

const theme = extendBaseTheme({
  styles,
  components,
  config,
});

export default theme;
