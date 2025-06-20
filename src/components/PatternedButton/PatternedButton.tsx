import { Button, Box, Image, type ButtonProps, Text } from "@chakra-ui/react";

import pattern from "../../assets/btn-pattern-l.svg";
import patternRed from "../../assets/btn-pattern-red.svg";

interface PatternedButtonProps extends ButtonProps {
  children: React.ReactNode;
  variantColor?: "red" | "primaryLight";
  color?: string;
}

export const PatternedButton = ({
  variantColor = "primaryLight",
  children,
  color,
  ...rest
}: PatternedButtonProps) => {
  return (
    <Button
      display="inline-block"
      variant="meatPattern"
      position="relative"
      zIndex={0}
      {...rest}
      bg={variantColor === "red" ? "redAccent" : "primaryLight"}
    >
      <Box
        position="absolute"
        left="0"
        top="0"
        height="100%"
        width="50px"
        borderRadius={"18px"}
        zIndex={1}
        pointerEvents="none"
        overflow="hidden"
        sx={{
          WebkitMaskImage: "linear-gradient(to right, white, transparent)",
          maskImage: "linear-gradient(to right, white, transparent)",
        }}
        bg={"#F6E8E8"}
      >
        <Image
          src={variantColor === "red" ? patternRed : pattern}
          alt="left pattern"
          height="100%"
          width="100%"
          objectFit="cover"
        />
      </Box>

      <Box
        position="absolute"
        right="0"
        top="0"
        height="100%"
        width="50px"
        borderRadius={"18px"}
        zIndex={1}
        pointerEvents="none"
        overflow="hidden"
        bg={"#F6E8E8"}
        sx={{
          WebkitMaskImage: "linear-gradient(to left, white, transparent)",
          maskImage: "linear-gradient(to left, white, transparent)",
        }}
      >
        <Image
          src={variantColor === "red" ? patternRed : pattern}
          alt="right pattern"
          height="100%"
          width="100%"
          objectFit="cover"
        />
      </Box>

      <Text
        zIndex={2}
        opacity="1 !important"
        position="relative"
        pointerEvents="none"
        color={color ? color : "white"}
        fontSize={"14px"}
        lineHeight={"19.6px"}
        fontWeight={"500"}
        fontFamily={"inter"}
      >
        {children}
      </Text>
    </Button>
  );
};
