import { Box, Flex, Image } from "@chakra-ui/react";
import { SectionTitle } from "../SectionTitle/SectionTitle";

import haccpCert from "../../assets/haccp-cert.svg";
import halalCert from "../../assets/halal-cert.svg";
import isoCert from "../../assets/iso-cert.svg";

interface CertificationsSectionProps {
  bgColor?: string;
  paddingBottom?: string;
}

export default function CertificationsSection({
  bgColor,
  paddingBottom,
}: CertificationsSectionProps) {
  return (
    <Box bg={bgColor} pb={paddingBottom}>
      <Flex width={"100%"}>
        <SectionTitle
          bigLabel="CERTIFICATIONS"
          smallLabel="CERTIFICATIONS"
          bigLabelFontSize="250px"
          smallLabelSectionWidth="1070px"
          // lineWidthPercentage="70%"
        />
      </Flex>

      <Flex
        w={"70%"}
        m={"0 auto"}
        justifyContent={"space-between"}
        zIndex={100}
        pos={"relative"}
        bottom={"55px"}
      >
        <Image src={halalCert} alt={""} />
        <Image src={haccpCert} alt={""} />
        <Image src={isoCert} alt={""} />
        <Image src={haccpCert} alt={""} />
      </Flex>
    </Box>
  );
}
