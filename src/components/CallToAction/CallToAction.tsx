import { Box, Flex, Text } from "@chakra-ui/react";
import bg from "../../assets/call-to-action-bg.png";
import { PatternedButton } from "../PatternedButton/PatternedButton";

interface CallToActionProps {
  btnText: string;
  text: string;
}

export const CallToAction = ({ btnText, text }: CallToActionProps) => {
  return (
    <Box position="relative" py={20} px={4} overflow="hidden">
      <Box
        position="absolute"
        bgImage={bg}
        bgSize="cover"
        bgRepeat={"no-repeat"}
        opacity={0.4}
        filter="blur(7px)"
        zIndex={0}
        width={"100%"}
        top={0}
        left={0}
        height={"100%"}
      ></Box>

      {/* Foreground content */}
      <Flex
        position="relative"
        zIndex={2}
        flexDir={"column"}
        m={"0 auto"}
        justifyContent="center"
        alignItems="center"
        bg="white"
        border="18px solid"
        borderColor={"rgba(1, 1, 1, 0.11)"}
        borderRadius="40px"
        p={"60px"}
        boxShadow="lg"
        w={"70%"}
        textAlign="center"
        gap={8}
      >
        <Text
          color="primary"
          fontWeight="700"
          fontSize="24px"
          lineHeight="34px"
          fontFamily={"dm"}
          maxW={"75%"}
        >
          {text}
        </Text>

        <PatternedButton
          variantColor="red"
          w={"35%"}
          boxShadow={"10px 10px 10px rgba(0, 0, 0, 0.32)"}
          h={"42px"}
        >
          {btnText}
        </PatternedButton>
      </Flex>
    </Box>
  );
};
