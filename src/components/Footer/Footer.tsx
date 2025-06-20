// src/components/Footer.tsx
import { Box, Flex, HStack, Image, Link, Text } from "@chakra-ui/react";
import { MdOutlineEmail } from "react-icons/md";
import logo from "../../assets/logo-red.svg";

export const Footer = () => {
  const navItems = [
    { label: "Courses", to: "/courses" },
    { label: "Experts", to: "/experts" },
    { label: "About us", to: "/about" },
    { label: "Certificates", to: "/certificates" },
    { label: "Contacts", to: "/contact" },
  ];

  return (
    <Box
      borderTop="1px solid"
      borderColor={"redAccent"}
      py={10}
      px={36}
      mb={10}
      bg="white"
      h="170.46470642089844px"
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Image src={logo} alt="Logo" />

        {/* Navigation Links */}
        <HStack
          spacing={8}
          color="rgba(0, 0, 0, 0.6)"
          fontWeight="500"
          fontSize="16px"
          fontFamily={"inter"}
          lineHeight={"140%"}
        >
          {navItems.map((item) => (
            <Link
              key={item.to}
              href={item.to}
              _hover={{ textDecoration: "none", color: "rgba(0, 0, 0, 1)" }}
            >
              {item.label}
            </Link>
          ))}
        </HStack>
      </Flex>

      <Box
        bg={"#000000"}
        opacity={"0.1"}
        width={"100%"}
        height={"2px"}
        my={8}
      />

      <Flex
        justify="flex-end"
        align="center"
        fontSize="16px"
        color="black"
        fontWeight={"500"}
        lineHeight={"150%"}
        fontFamily={"inter"}
      >
        <HStack spacing={2}>
          <MdOutlineEmail size={20} />
          <Text fontWeight="medium" color="black">
            info@IEXEX.com
          </Text>
        </HStack>
      </Flex>
    </Box>
  );
};
