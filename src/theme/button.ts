// theme/components/button.ts
import type { ComponentStyleConfig } from "@chakra-ui/react";

export const Button: ComponentStyleConfig = {
  baseStyle: {
    // fontFamily: "inter",
    fontWeight: 500,
    outline: "none",
    border: "none",
    color: "white",

    _hover: {
      outline: "none",
      border: "none",
      transform: "scale(0.95)",
      transition: "transform 0.2s ease-in-out",
    },
  },
  variants: {
    noPattern: {
      fontFamily: "poppins",

      _hover: {
        opacity: 0.9,
      },
    },

    meatPattern: {
      borderRadius: "18px",
      fontFamily: "inter",
      color: "white",

      _hover: {
        opacity: 0.9,
      },
    },
  },
};
