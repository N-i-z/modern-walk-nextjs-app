import React from "react";
import { Products } from "../ui-core/templates/pages/CategoryPage.template";
import { Heading } from "../ui-core/components";

const MensClothingCategory: React.FC = () => {
  return (
    <div className="content">
      <div className="heading">
        <Heading variant="h2">Men's Clothing</Heading>
      </div>
      <Products
        url="https://fakestoreapi.com/products/category/men's clothing"
        descriptionBackgroundColor="#2BD9AF"
      />
    </div>
  );
};

export default MensClothingCategory;
