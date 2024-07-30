import React from "react";
import FlashSale from "../sections/FlashSale/FlashSale.section";
import Categories from "../sections/Categories/Categories.section";
import Heading from "../../components/atoms/Typography/Heading.component";

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <Heading variant="h2">Flash Sale</Heading>
      <FlashSale />
      <Heading variant="h2">Categories</Heading>
      <Categories />
    </div>
  );
};

export default Home;
