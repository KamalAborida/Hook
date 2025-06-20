import { Flex, Image } from "@chakra-ui/react";

import partnersLogo1 from "../../assets/partners-logo1.svg";
import partnersLogo2 from "../../assets/partners-logo2.svg";
import partnersLogo3 from "../../assets/partners-logo3.svg";
import partnersLogo4 from "../../assets/partners-logo4.svg";
import partnersLogo5 from "../../assets/partners-logo5.svg";

interface PartnersLogoProps {
  width: string;
}

export const PartnersLogo = ({ width }: PartnersLogoProps) => {
  const logos = [
    partnersLogo1,
    partnersLogo2,
    partnersLogo3,
    partnersLogo4,
    partnersLogo5,
  ];

  return (
    <Flex justify="space-between" align="center" flexWrap="wrap" w={width} mx={"auto"}>
      {logos.map((logo, i) => (
        <Image key={i} src={logo} alt="partner logo" />
      ))}
    </Flex>
  );
};
