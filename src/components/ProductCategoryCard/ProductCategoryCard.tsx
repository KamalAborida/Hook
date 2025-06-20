import { Box, Flex, Image, Text, type BoxProps } from "@chakra-ui/react";

interface ProductCategoryCardProps extends BoxProps {
  icon: string;
  label: string;
  image: string;
}

export const ProductCategoryCard = ({
  icon,
  label,
  image,
  ...rest
}: ProductCategoryCardProps) => {
  return (
    <Box position="relative" overflow="hidden" textAlign="center" {...rest}>
      <Box
        width={"100%"}
        h={"100%"}
        bg={"rgba(160, 44, 44, 0.29)"}
        backdropFilter="blur(11px)"
        pos={"absolute"}
        top={0}
        left={0}
      ></Box>

      {/* Background Image */}
      <Image
        src={image}
        alt={label}
        objectFit="cover"
        w="100%"
        // filter="blur(12px)"
      />

      {/* Label + Icon */}
      <Flex
        position="absolute"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        left={"50%"}
        top={"50%"}
        transform={"translate(-50%,-50%)"}
        // border={"1px solid red"}
        width={"100%"}
        p={4}
        zIndex={50}
      >
        <Box
          borderRadius="full"
          display="flex"
          alignItems="center"
          justifyContent="center"
          mb={3}
        >
          <Image src={icon} alt={label} />
        </Box>
        <Text
          fontWeight="700"
          fontSize="40px"
          color="white"
          fontFamily={"dm"}
          lineHeight={"28px"}
        >
          {label}
        </Text>
      </Flex>
    </Box>
  );
};
