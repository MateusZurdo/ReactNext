import { theme, DefaultTheme } from "@chakra-ui/core";

const customTheme: DefaultTheme = {
  ...theme,
  fonts: {
    body: "Roboto, system-ui, sans-serif",
    heading: "Roboto, system-ui, sans-serif",
    mono: "Menlo, monospace",
  },
  fontWeights: {
    ...theme.fontWeights,
    normal: 400,
    medium: 700,
    bold: 900,
  },
  radii: {
    ...theme.radii,
    sm: "5px",
    md: "8px",
  },
  colors: {
    ...theme.colors,
    orange: {
      ...theme.colors.orange,
      500: "#FF7300",
    },
    gray: {
      ...theme.colors.gray,
      300: "#e1e1e6",
      600: "#29292e",
      700: "#202024",
      800: "#121214",
    },
  },
};

export default customTheme;
