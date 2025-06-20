import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import { PatternedButton } from "../PatternedButton/PatternedButton";

import hero from "../../assets/homepage-hero.svg";
import meatPlate from "../../assets/meat-plate.svg";
// import bg from "../../assets/hero-bg.png";

export const HeroSection = () => {
  return (
    <Box
      as="section"
      w="100%"
      minH="100vh"
      px={6}
      py={12}
      position="relative"
    >
      <Center flexDir="column" textAlign="center" gap={4}>
        <Text
          fontSize="24px"
          color="primary"
          lineHeight={"61.6px"}
          fontWeight="600"
          fontFamily="montserrat"
          mb={5}
        >
          Serious About Meat. Serious About Quality
        </Text>

        <Flex
          position="relative"
          alignItems="center"
          justifyContent="center"
          gap={4}
        >
          <Image
            src={hero}
            zIndex={1}
          />

          <Image
            src={meatPlate}
            alt="Meat Pack"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            zIndex={2}
          />
        </Flex>

        <PatternedButton mt={6} w={"167px"} h={"42px"} variant="meatPattern" variantColor="red">
          Explore Our Cuts
        </PatternedButton>

        <Text
          maxW="550px"
          // border={"1px solid red"}
          mt={6}
          fontSize="24px"
          fontWeight="500"
          color="primary"
          opacity={0.8}
          fontFamily="montserrat"
          lineHeight="34px"
          letterSpacing={"4%"}
        >
          At Hoka, we bring craftsmanship, care, and premium meat straight to
          your table because you deserve nothing less.
        </Text>
      </Center>
    </Box>
  );
};
