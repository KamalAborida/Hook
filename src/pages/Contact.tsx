import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
import PageTitle from "../components/PageTitle/PageTitle";

import bg from "../assets/hero-bg.png";
import map from "../assets/map.png";
import { ContactCard } from "../components/ContactCard.tsx/ContactCard";
import { ContactForm } from "../components/ContactForm/ContactForm";

export default function Contact() {
    const [isLessThan1100] = useMediaQuery("(max-width: 1000px)");
    const boxWidth = isLessThan1100 ? "95%" : undefined;

  return (
    <Box>
      <PageTitle bg={bg} title="Contact Us" />

      <Flex w={boxWidth || "80%"} my={"120px"} mx={"auto"} justifyContent={"space-between"} alignItems={"center"}>
        <ContactCard />
        <ContactForm hasBigTitle={false} />
      </Flex>

      <Box
        w={"100%"}
        // border={"1px solid red"}
        h={"545px"}
        bgImg={map}
        // bgPos={"center"}
      ></Box>
    </Box>
  );
}
