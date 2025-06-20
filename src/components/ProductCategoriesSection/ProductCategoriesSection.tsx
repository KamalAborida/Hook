import { Box, Flex } from "@chakra-ui/react";

import beefImg from "../../assets/beef-cat.png";
import chickenImg from "../../assets/chicken-cat.png";
import chickenIcon from "../../assets/chicken-icon.svg";
import cowIcon from "../../assets/cow-icon.svg";
import lambImg from "../../assets/lamb-cat.png";
import lambIcon from "../../assets/lamb-icon.svg";

import { ProductCategoryCard } from "../ProductCategoryCard/ProductCategoryCard";
import { SectionTitle } from "../SectionTitle/SectionTitle";

export default function ProductCategoriesSection() {
  return (
    <Box pos={"relative"} mt={8} bg={"#F7F7F7"} pt={230}>
      <Flex
        pos={"absolute"}
        top={-30}
        width={"100%"}
        alignItems={"flex-start"}
        justifyContent={"flex-start"}
        flexDir={"column"}
        zIndex={0}
      >
        <SectionTitle
          bigLabel="Our Products"
          smallLabel="Our Products"
          bigLabelFontSize="250px"
          smallLabelSectionWidth="1070px"
          // lineWidthPercentage="70%"
        />
      </Flex>

      <Flex w={"100%"} justifyContent={"space-between"} zIndex={100}>
        <ProductCategoryCard
          image={beefImg}
          label="Beef Products"
          icon={cowIcon}
          w={"34%"}
        />
        <ProductCategoryCard
          image={chickenImg}
          label="Chicken Products"
          icon={chickenIcon}
          w={"34%"}
        />
        <ProductCategoryCard
          image={lambImg}
          label="lamb Products"
          icon={lambIcon}
          w={"34%"}
        />
      </Flex>
    </Box>
  );
}
