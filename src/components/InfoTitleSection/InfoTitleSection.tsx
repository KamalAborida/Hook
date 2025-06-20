import { Box, Text } from "@chakra-ui/react";
import { SectionTitle } from "../SectionTitle/SectionTitle";

export default function InfoTitleSection({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <Box textAlign="center" bg={"#F7F7F7"} py={"100px"}>
      <SectionTitle
        bigLabel={title}
        smallLabel={title}
      />
      <Text
        fontSize="20px"
        fontWeight="400"
        lineHeight="35px"
        fontFamily="dm"
        color="#1212129E"
        m="30px auto"
        w={"65%"}
      >
        {text}
      </Text>
    </Box>
  );
}
