import { Box, useMediaQuery } from "@chakra-ui/react";
import bg from "../assets/hero-bg.png";
import { SectionWithMedia } from "../components/SectionWithMedia/SectionWithMedia";

import meatPlate from "../assets/meat-plate-large.svg";
import whatWeOfferImg from "../assets/what-we-offer.png";
import whoWeAreImg from "../assets/who-we-are.png";

import { CallToAction } from "../components/CallToAction/CallToAction";
import CertificationsSection from "../components/CertificationsSection/CertificationsSection";
import InfoTitleSection from "../components/InfoTitleSection/InfoTitleSection";
import PageTitle from "../components/PageTitle/PageTitle";
import { WhoWeAreFeatureList } from "../components/SectionWithMedia/WhoWeAreFeatureList";

export default function About() {
  const [isLessThan1100] = useMediaQuery("(max-width: 1000px)");
  const boxWidth = isLessThan1100 ? "100%" : undefined;

  return (
    <Box>
      <PageTitle bg={bg} title="About Us" />

      <Box width={boxWidth || "80%"} m="0 auto" bg="white" mt="100px" mb="150px">
        <SectionWithMedia
          bigLabel="Who We Are"
          smallLabel="Who We Are"
          mediaSrc={whoWeAreImg}
          mediaPosition="right"
          text="Hoka is a modern butcher shop with a timeless commitment: delivering premium meat with trust, transparency, and taste. Born in the UAE and rooted in a passion for quality, Hoka was founded to bring back the craft of butchery — modernized for today’s fast-paced world."
        />
      </Box>

      <InfoTitleSection
        title="OUR STORY"
        text="Hoka began with a simple realization — customers deserve better. Better meat. Better service. Better sourcing. We started by partnering with farms and suppliers who share our dedication to ethical sourcing and superior quality. Every cut we offer is carefully selected and expertly handled, from farm to table"
      />

      <Box width={boxWidth || "60%"} m="0 auto" bg="white" my="150px">
        <SectionWithMedia
          bigLabel="Why hook"
          smallLabel="Why hook"
          mediaSrc={meatPlate}
          mediaPosition="left"
          text="The name says it all. Meat hangs on a hook. Flavor keeps you hooked. We’re all about drawing you in with bold taste, quality you can trust, and service that feels personaL"
        />
      </Box>

      <InfoTitleSection
        title="PHILOSOPHY"
        text="We’re passionate about meat — but even more passionate about how it’s sourced, cut, and served. Our team of skilled butchers brings generations of expertise to the table, delivering cuts that are fresh, honest, and made just for you."
      />

      <Box width={boxWidth || "70%"} m="0 auto" bg="white" my="150px">
        <SectionWithMedia
          bigLabel="What We Offer"
          smallLabel="What We Offer"
          mediaSrc={whatWeOfferImg}
          mediaPosition="right"
        >
          <WhoWeAreFeatureList />
        </SectionWithMedia>
      </Box>

      <CertificationsSection bgColor="#F7F7F7" paddingBottom="50px" />

      <CallToAction
        btnText="Explore Our Cuts"
        text="Explore our premium cuts. Try the Hook experience. Or talk to us about becoming a franchise partner."
      />
    </Box>
  );
}
