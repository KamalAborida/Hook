import { Box, Flex, Image, Text } from "@chakra-ui/react";

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
  smallLabelSectionWidth,
  bigLabelFontSize,
  lineWidthPercentage,
}: SectionTitleProps) => {
  return (
    <Box
      position="relative"
      textAlign="center"
      w={"100%"}
      zIndex={1}
      // border={"1px solid blue"}
    >
      <Image
        src={leftPattern}
        alt=""
        pos={"absolute"}
        right={0}
        transform={"translateY(-50%)"}
        top={"50%"}
      />

      <Image
        src={rightPattern}
        alt=""
        pos={"absolute"}
        left={0}
        transform={"translateY(-50%)"}
        top={"50%"}
      />

      <Text
        fontSize={bigLabelFontSize || "300px"}
        fontWeight="900"
        lineHeight="396px"
        letterSpacing={"-7.2px"}
        fontFamily="bigShoulders"
        color="primary"
        opacity={"11%"}
        textTransform="uppercase"
        userSelect="none"
      >
        {bigLabel}
      </Text>

      <Flex
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        align="center"
        gap={3}
        width={smallLabelSectionWidth || "883px"}
        // border={"2px solid red"}
        justifyContent="space-between"
        alignItems={"center"}
      >
        <Text
          color="redAccent"
          fontWeight="700"
          fontSize="21.13px"
          lineHeight={"44.8px"}
          letterSpacing={"1.28px"}
          fontFamily="inter"
          textTransform="uppercase"
          // border={"2px solid red"}
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
