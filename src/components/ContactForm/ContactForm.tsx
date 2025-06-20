import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
  SimpleGrid,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";

interface ContactFormProps {
  hasBigTitle?: boolean;
}

export const ContactForm = ({ hasBigTitle = true }: ContactFormProps) => {
  const formFields = [
    { label: "First Name", placeholder: "", name: "firstName" },
    { label: "Last Name", placeholder: "Doe", name: "lastName" },
    { label: "Email", placeholder: "", name: "email1", type: "email" },
    { label: "Email", placeholder: "", name: "email2", type: "email" },
  ];

  return (
    <Box px={4} py={10} maxW="600">
      {/* Header */}
      <VStack spacing={10} textAlign="center" mb={"40px"}>
        {hasBigTitle && (
          <Heading
            color="primary"
            fontSize="40px"
            fontWeight={"700"}
            fontFamily={"poppins"}
            lineHeight={"100%"}
          >
            Contact Us
          </Heading>
        )}
        <Text
          color="#717171"
          fontSize="18px"
          fontWeight={"500"}
          fontFamily={"poppins"}
          lineHeight={"100%"}
        >
          Any question or remarks? Just write us a message!
        </Text>
      </VStack>

      {/* Form */}
      <Box as="form">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          {formFields.map(({ label, placeholder, name, type = "text" }) => (
            <FormControl key={name} maxW={"278px"} w={"100%"}>
              <FormLabel
                fontSize="12px"
                color="#8D8D8D"
                // border={"2px solid red"}
                fontWeight={"500"}
                lineHeight={"20px"}
                fontFamily={"poppins"}
              >
                {label}
              </FormLabel>
              <Input
                name={name}
                placeholder={placeholder}
                type={type}
                fontSize={"14px"}
                fontWeight={"500"}
                lineHeight={"20px"}
                fontFamily={"poppins"}
                height={"30px"}
                px={0}
                pb={2}
                border="none"
                borderBottom="1px solid"
                borderColor="gray.300"
                borderRadius="none"
                _focus={{ borderColor: "gray.500", boxShadow: "none" }}
              />
            </FormControl>
          ))}
        </SimpleGrid>

        <FormControl mt={6}>
          <FormLabel fontSize="sm" color="gray.500">
            Message
          </FormLabel>
          <Textarea
            placeholder="Write your message.."
            border="none"
            height={"30px"}
            px={0}
            pb={2}
            borderBottom="1px solid"
            borderColor="gray.300"
            borderRadius="none"
            _focus={{ borderColor: "gray.500", boxShadow: "none" }}
          />
        </FormControl>

        <Center mt={10}>
          <Button
            type="submit"
            color="white"
            bg="darkBlueAccent"
            px={10}
            py={6}
            rounded="md"
            boxShadow="md"
          >
            Send Message
          </Button>
        </Center>
      </Box>
    </Box>
  );
};
