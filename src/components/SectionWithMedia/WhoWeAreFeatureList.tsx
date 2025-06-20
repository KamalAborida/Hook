import { HStack, Icon, List, ListItem, Text } from "@chakra-ui/react";
import { BsCircleFill } from "react-icons/bs";

const features = [
  "Handpicked cuts of beef, lamb, poultry, and more",
  "Locally and internationally sourced premium meat",
  "Custom cutting, vacuum sealing, and doorstep delivery",
  "Fast, convenient ordering via WhatsApp",
];

export const WhoWeAreFeatureList = () => {
  return (
    <List spacing={4}>
      {features.map((item, index) => (
        <ListItem key={index}>
          <HStack align="start" spacing={3}>
            <Icon as={BsCircleFill} boxSize="8px" color="redAccent" mt="6px" />
            <Text
              color="#1212129E"
              fontSize="20px"
              fontFamily="dm"
              lineHeight={"21px"}
            >
              {item}
            </Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};
