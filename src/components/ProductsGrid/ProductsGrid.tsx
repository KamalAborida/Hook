// src/components/BeefProductGrid.tsx

import { Box, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { CATEGORIES } from "./data";

export const ProductsGrid = () => {
  const [activeCategory, setActiveCategory] = useState("beef");

  const currentCategory = CATEGORIES.find(
    (category) => category.key === activeCategory
  );

  return (
    <Box pt={"70px"} pb={"150px"} fontFamily={"dm"}>
      {/* Category Tabs */}
      <Flex
        justify="center"
        w="100%"
        mx="auto"
        mb={16}
        gap={14}
        borderBottom="4px solid"
        borderColor="gray.200"
      >
        {CATEGORIES.map((cat) => (
          <HStack
            key={cat.key}
            spacing={4}
            cursor="pointer"
            pos={"relative"}
            top={"4px"}
            pb={4}
            borderBottom={
              cat.key === activeCategory ? "4px solid #B49070" : "none"
            }
            onClick={() => setActiveCategory(cat.key)}
          >
            <Image
              src={activeCategory === cat.key ? cat.hoverImage : cat.image}
              alt={cat.label}
              w={"45px"}
              h={"45px"}
            />
            <Text
              color={cat.key === activeCategory ? "primary" : "gray.600"}
              fontSize={"20px"}
              fontWeight={"600"}
              lineHeight={"28px"}
            >
              {cat.label}
            </Text>
          </HStack>
        ))}
      </Flex>

      {/* Product Columns */}
      <Flex justify="space-around" gap={6} w={"85%"} mx={"auto"}>
        {currentCategory?.products.map((section) => (
          <VStack key={section.type} maxW={"372px"} w={"30%"} spacing={1}>
            <Box
              bg="#BDA1800F"
              px={8}
              pt={10}
              pb={4}
              w={"100%"}
              borderRadius={"10px 10px 0px 0px"}
            >
              <Text
                fontWeight="600"
                lineHeight={"28px"}
                fontSize={"18px"}
                color={"primary"}
              >
                {section.type.toUpperCase()}
              </Text>
            </Box>

            <VStack
              spacing={8}
              bg="#BDA1800F"
              p={8}
              w={"100%"}
              borderRadius={"0px 0px 10px 10px"}
            >
              {section.items.map((item, idx) => (
                <Flex key={idx} justifyContent={"space-between"} w={"100%"}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    borderRadius="8px"
                    maxW={"73px"}
                    maxH={"70px"}
                    width={"25%"}
                  />
                  <VStack align={"start"} spacing={1} color={"redAccent"} width={"70%"}>
                    <Text fontSize={"16px"} fontWeight="600">
                      {item.name}
                    </Text>
                    <Text fontSize="12px" fontWeight={"600"}>
                      {item.description}
                    </Text>
                  </VStack>
                </Flex>
              ))}
            </VStack>
          </VStack>
        ))}
      </Flex>
    </Box>
  );
};
