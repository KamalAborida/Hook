import { Box, Flex } from "@chakra-ui/react";
import { HeroSection } from "../components/HeroSection/HeroSection";

import bg from "../assets/hero-bg.png";
import AboutHookSection from "../components/AboutHookSection/AboutHookSection";

import CertificationsSection from "../components/CertificationsSection/CertificationsSection";
import { ContactForm } from "../components/ContactForm/ContactForm";
import ProductsCategoriesSection from "../components/ProductCategoriesSection/ProductCategoriesSection";

export default function Home() {
  return (
    <Box>
      {/*Background Image*/}
      <Box
        position={"absolute"}
        w={"100%"}
        h={"150vh"}
        p={0}
        top={0}
        bgImage={bg}
        bgSize="100%"
      />
      
      <HeroSection />
      <AboutHookSection />
      <ProductsCategoriesSection />
      <CertificationsSection />
      <Flex bg={"#F7F7F7"} justifyContent={"center"} alignItems={"center"} pt={16} pb={8}>
        <ContactForm />
      </Flex>
    </Box>
  );
}
