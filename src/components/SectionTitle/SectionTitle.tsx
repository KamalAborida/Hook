import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import leftPattern from "../../assets/section-title-illust-left.svg";
import rightPattern from "../../assets/section-title-illust-right.svg";

interface SectionTitleProps {
  bigLabel: string;
  smallLabel: string;
  smallLabelSectionWidth?: string;
  bigLabelFontSize?: string;
  lineWidthPercentage?: string;
}

export const SectionTitle = ({
  bigLabel,
  smallLabel,
  bigLabelFontSize,
  lineWidthPercentage,
}: SectionTitleProps) => {
  const [isWideScreen, setIsWideScreen] = useState<boolean>(false);

  const fallbackFontSize = bigLabelFontSize || "300px";
  const responsiveBigLabelFontSize = `clamp(100px, 16vw + 0.5rem, ${fallbackFontSize})`;

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 1350);
    };

    handleResize(); // Initial check on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box position="relative" textAlign="center" w="100%" zIndex={1}>
      {/* Background Patterns */}
      <Image
        src={leftPattern}
        alt=""
        pos="absolute"
        right={0}
        transform="translateY(-50%)"
        top="50%"
      />

      <Image
        src={rightPattern}
        alt=""
        pos="absolute"
        left={0}
        transform="translateY(-50%)"
        top="50%"
      />

      {/* Big Label */}
      <Text
        fontSize={isWideScreen ? fallbackFontSize : responsiveBigLabelFontSize}
        fontWeight="900"
        lineHeight="396px"
        letterSpacing="-7.2px"
        fontFamily="bigShoulders"
        color="primary"
        opacity="11%"
        textTransform="uppercase"
        userSelect="none"
      >
        {bigLabel}
      </Text>

      {/* Small Label and Line */}
      <Flex
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        align="center"
        gap={3}
        width={"70%"}
        justifyContent="space-between"
        alignItems="center"
      >
        <Text
          color="redAccent"
          fontWeight="700"
          fontSize="21.13px"
          lineHeight="44.8px"
          letterSpacing="1.28px"
          fontFamily="inter"
          textTransform="uppercase"
        >
          {smallLabel}
        </Text>

        <Box
          h="4px"
          bg="#12121214"
          position="relative"
          width={lineWidthPercentage || "75%"}
        >
          <Box
            w="12px"
            h="4px"
            bg="redAccent"
            position="absolute"
            right="0"
            top="0"
          />
        </Box>
      </Flex>
    </Box>
  );
};
