import { Box, Flex, Image, Text } from "@chakra-ui/react";

import aboutHook from "../../assets/about-hook.png";
import { SectionTitle } from "../SectionTitle/SectionTitle";

export default function AboutHookSection() {
  return (
    <Box
      pos={"relative"}
      mt={8}
      bgColor={"white"}
      zIndex={4}
      p={"40px 20px"}
      w={"100%"}
      // border={"1px solid red"}
    >
      <Flex
        pos={"absolute"}
        w={"100%"}
        top={0}
        left={0}
        justifyContent={"center"}
        // border={"1px solid yellow"}
      >
        <SectionTitle bigLabel="ABOUT hook" smallLabel="ABOUT" smallLabelSectionWidth="1050px"/>
      </Flex>

      <Flex
        zIndex={100}
        width={"67%"}
        m={"250px auto 0 auto"}
        justifyContent={"space-between"}
        // border={"1px solid red"}
        alignItems={"center"}
      >
        <Text
          fontSize={"22px"}
          fontWeight={"400"}
          lineHeight={"37.4px"}
          fontFamily={"dm"}
          width={"40%"}
          color={"#1212129E"}
        >
          At Hoka, we believe that meat isn't just food — it's a craft. Born
          from a passion for premium cuts and honest sourcing, Hoka was founded
          to redefine the modern butcher shop. We combine traditional values
          with a digital-first approach to make high-quality meat more
          accessible than ever.
        </Text>
        <Image src={aboutHook} alt="" pos={"relative"} bottom={"10px"} w={"454px"} />
      </Flex>
    </Box>
  );
}
