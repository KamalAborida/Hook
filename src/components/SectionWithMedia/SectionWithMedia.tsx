import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import { SectionHeader } from "./SectionHeader";

interface SectionWithMediaProps {
  bigLabel: string;
  smallLabel: string;
  mediaSrc: string;
  mediaWidth?: string;
  mediaHeight?: string;
  mediaPosition?: "left" | "right";
  text?: string;
  children?: React.ReactNode;
}

export const SectionWithMedia = ({
  bigLabel,
  smallLabel,
  mediaSrc,
  mediaWidth,
  mediaHeight,
  mediaPosition = "right",
  text,
  children,
}: SectionWithMediaProps) => {
  const Media = (
    <Box position="relative">
      <Image
        src={mediaSrc}
        alt={"Media"}
        borderRadius="md"
        objectFit="cover"
        // filter="blur(3px)"
        maxW={"100%"}
        width={mediaWidth}
        height={mediaHeight}
      />
    </Box>
  );

  const Content = (
    <VStack spacing={6} width={"50%"}>
      <SectionHeader bigLabel={bigLabel} smallLabel={smallLabel} />
      {text && (
        <Text whiteSpace={"pre-line"} color="text" fontSize="16px" fontFamily="inter" maxW="500px">
          {text}
        </Text>
      )}
      {children}
    </VStack>
  );

  return (
    <Box>
      <Flex
        direction={mediaPosition === "left" ? "row" : "row-reverse"}
        justifyContent="space-between"
        alignItems="center"
        // border={"1px solid red"}
      >
        {Media}
        {Content}
      </Flex>
    </Box>
  );
};
