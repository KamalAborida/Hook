import { Box, Flex, Image, Link, useMediaQuery } from "@chakra-ui/react";
import { NavLink as RouterNavLink, useLocation } from "react-router-dom";
import { PatternedButton } from "../PatternedButton/PatternedButton";

import logo from "../../assets/logo.svg";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About us", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Our partners", to: "/partners" },
  { label: "Contact us", to: "/contact" },
];

export const Navbar = () => {
  const location = useLocation();
  const [isLessThan1100] = useMediaQuery("(max-width: 1000px)");
  const navItemsSpacing = isLessThan1100 ? 5 : undefined;

  return (
    <Box
      as="nav"
      w="100%"
      h={"101.5999984741211px"}
      px={12}
      py={4}
      bg="rgba(113, 110, 110, 0.06)" // 6% opacity of #716E6E
      backdropFilter="blur(19.4px)"
      boxShadow="sm"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      position="absolute"
      top={0}
      zIndex={1000}
    >
      {/* Logo */}
      <Image src={logo} alt="Logo" objectFit="contain" />

      <Flex gap={navItemsSpacing || 14} alignItems={"flex-end"}>
        {navItems.map(({ label, to }, index) => (
          <Box
            pos={"relative"}
            // border={"1px solid blue"}
            // minW={"67px"}
            textAlign={"center"}
            key={index}
          >
            <Link
              key={label}
              as={RouterNavLink}
              to={to}
              w={"93px"}
              fontFamily="poppins"
              fontWeight="300"
              fontSize="sm"
              lineHeight={"19.6px"}
              letterSpacing={"0.28px"}
              color="navLink"
              position="relative"
              bottom={location.pathname === to ? "2px" : "0"}
              _hover={{ textDecoration: "none", color: "redAccent" }}
              _activeLink={{
                color: "redAccent",
              }}
            >
              {location.pathname === to ? label : label.toUpperCase()}
              {location.pathname === to && (
                <Box
                  pos={"absolute"}
                  width={"120%"}
                  right={"-10%"}
                  height={"2px"}
                  bg={"redAccent"}
                  bottom={-2}
                ></Box>
              )}
            </Link>
          </Box>
        ))}
      </Flex>

      <PatternedButton
        variant="meatPattern"
        variantColor="primaryLight"
        h={"42px"}
        w={"167px"}
      >
        Explore Our Cuts
      </PatternedButton>
    </Box>
  );
};
