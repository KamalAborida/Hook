// src/theme/index.ts
import { extendTheme } from "@chakra-ui/react";
import { Button } from "./button";

const theme = extendTheme({
  components: {
    Button,
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  colors: {
    primary: "#B49070",
    primaryLight: "#BDA180",
    navLink: "#8B5D27",
    text: "rgba(18,18,18,0.62)",
    redAccent: "#AF2026",
    darkBlueAccent: "#011C2A",
    semiDarkGray: "#F7F7F7",
  },
  fonts: {
    dm: `"DM Sans", sans-serif`,
    poppins: `'Poppins', sans-serif`,
    inter: `Inter, sans-serif`,
    montserrat: `Montserrat, sans-serif`,
    body: `"DM Sans", sans-serif`,
    heading: `Montserrat, sans-serif`,
    bigShoulders: `'Big Shoulders Display', sans-serif`,
  },
  fontSizes: {
    body: "22px",
    mainTitle: "128px",
  },
  lineHeights: {
    body: "37.5px",
    mainTitle: "61.6px",
  },
  fontWeights: {
    body: "400",
    mainTitle: "600",
  },
});

export default theme;
