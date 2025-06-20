import { Box } from "@chakra-ui/react";
import PageTitle from "../components/PageTitle/PageTitle";

import bg from "../assets/hero-bg.png";
import { CallToAction } from "../components/CallToAction/CallToAction";
import { ProductsGrid } from "../components/ProductsGrid/ProductsGrid";

export default function Products() {
  return (
    <Box>
      <PageTitle bg={bg} title="Our Products" />
      <ProductsGrid />
      <CallToAction
        btnText="Explore Our Cuts"
        text="Explore our premium cuts. Try the Hook experience. Or talk to us about becoming a franchise partner."
      />
    </Box>
  );
}
