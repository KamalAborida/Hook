import { Box } from "@chakra-ui/react";

import { CallToAction } from "../components/CallToAction/CallToAction";
import PageTitle from "../components/PageTitle/PageTitle";
import { SectionWithMedia } from "../components/SectionWithMedia/SectionWithMedia";

import bg from "../assets/hero-bg.png";
import ourPartnersMedia from "../assets/our-partners-media.svg";
import { PartnersLogo } from "../components/PartnersLogos/PartnersLogo";
import { SectionTitle } from "../components/SectionTitle/SectionTitle";

export default function Partners() {
  const text = `At Hoka, we believe that great meat starts with great partners.\n
We work closely with trusted farms, ethical suppliers, logistic\nexperts, and hospitality brands across the UAE to ensure eve-\nry cut we deliver meets the highest standards of quality, safety,\nfreshness.\n
Our partners help us bring the Hoka experience to homes,\nrestaurants, and gourmet kitchens throughout the region.`;

  return (
    <Box>
      <PageTitle bg={bg} title="Our Partners" />

      <Box w={"80%"} m={"0 auto"} bg={"white"} mt={"100px"} mb={"150px"}>
        <SectionWithMedia
          bigLabel="Our Partners"
          smallLabel="Our Partners"
          mediaSrc={ourPartnersMedia}
          mediaPosition="right"
          text={text}
        />
      </Box>

      <Box bg={"#F7F7F7"} py={"100px"}>
        <SectionTitle
          bigLabel="Our Partners"
          smallLabel="Our Partners"
          bigLabelFontSize="250px"
          smallLabelSectionWidth="65%"
        />
        <PartnersLogo width="80%" />
      </Box>

      <CallToAction
        btnText="Become a Partner"
        text="Want to partner with Hoka? We’re always looking to work with passionate businesses that share our values."
      />
    </Box>
  );
}
