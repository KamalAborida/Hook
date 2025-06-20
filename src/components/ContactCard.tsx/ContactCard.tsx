import { Box, Flex, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

import bg from "../../assets/contact-card-bg.png"; // Replace with actual path

export const ContactCard = () => {
  return (
    <Flex
      bgImage={bg}
      bgSize="cover"
      bgPosition="center"
      borderRadius="46px"
      color="white"
      px={10}
      w={"40%"}
      maxW={"491px"}
      height={"479px"}
      flexDir={"column"}
      justifyContent="center"
      alignItems={"flex-start"}
    >
      <VStack align="start" spacing={10}>
        <Text
          fontSize="28px"
          fontWeight="600"
          lineHeight={"100%"}
          fontFamily={"poppins"}
        >
          Contact Information
        </Text>

        {/* Phone */}
        <HStack spacing={4}>
          <Icon as={FiPhone} boxSize={5} />
          <Text>+1012 3456 789</Text>
        </HStack>

        {/* Email */}
        <HStack spacing={4}>
          <Icon as={FiMail} boxSize={5} />
          <Text>demo@gmail.com</Text>
        </HStack>

        {/* Address */}
        <HStack align="start" spacing={4}>
          <Icon as={FiMapPin} boxSize={5} mt={1} />
          <Text>
            132 Dartmouth Street Boston,
            <br />
            Massachusetts 02156 United States
          </Text>
        </HStack>

        {/* Social Icons */}
        <HStack spacing={6} pt={4} color={"primary"}>
          <Box p={2} bg={"white"} borderRadius={"50%"}><FaTwitter size={20} /></Box>
          <Box p={2} bg={"white"} borderRadius={"50%"}><FaInstagram size={20} /></Box>
          <Box p={2} bg={"white"} borderRadius={"50%"}><FaDiscord size={20} /></Box>
        </HStack>
      </VStack>
    </Flex>
  );
};
