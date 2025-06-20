import { Box, Flex, Text } from "@chakra-ui/react";

interface SectionHeaderProps {
  smallLabel: string;
  bigLabel: string; // Should be two words, space-separated
  width?: string;
}

export const SectionHeader = ({
  smallLabel,
  bigLabel,
  width = "500px",
}: SectionHeaderProps) => {
  const phrase = bigLabel.split(" ");

  return (
    <Box position="relative" w={width} zIndex={1}>
      <Box>
        <Text
          fontSize={{ base: "60px", md: "128px" }}
          fontWeight="900"
          lineHeight="1"
          letterSpacing="-6px"
          fontFamily="bigShoulders"
          color="primary"
          opacity="6%"
          textTransform="uppercase"
          userSelect="none"
        >
          {phrase[0]}
        </Text>
        <Text
          fontSize={{ base: "60px", md: "128px" }}
          fontWeight="900"
          lineHeight="1"
          letterSpacing="-6px"
          fontFamily="bigShoulders"
          color="primary"
          opacity="6%"
          textTransform="uppercase"
          userSelect="none"
        >
          {`${phrase[1]} ${phrase[2] || ""}`}
        </Text>
      </Box>

      <Flex
        flexDir={"column"}
        pos={"absolute"}
        top={0}
        left={"10%"}
        height={"100%"}
        justifyContent={"space-around"}
      >
        <Text
          color="redAccent"
          fontWeight="700"
          fontSize="20px"
          fontFamily="inter"
          textTransform="capitalize"
          textAlign="center"
        >
          {smallLabel}
        </Text>
        <Box h="2px" bg="redAccent" w="130px" borderRadius="full" />
      </Flex>
    </Box>
  );
};
