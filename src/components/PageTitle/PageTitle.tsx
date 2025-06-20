import { Flex, Text } from "@chakra-ui/react";

interface PageTitleProps {
  bg: string;
  title: string;
}

const PageTitle = ({ bg, title }: PageTitleProps) => {
  return (
    <Flex
      w={"100%"}
      h={"40vh"}
      p={0}
      bgImage={bg}
      bgSize="100%"
      textAlign={"center"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Text
        fontSize="128px"
        fontWeight="600"
        lineHeight="61.6px"
        fontFamily="montserrat"
        color="primary"
        textTransform="uppercase"
        userSelect="none"
      >
        {title}
      </Text>
    </Flex>
  );
};

export default PageTitle;
