import React from "react";
import { Products } from "../ui-core/templates/pages/CategoryPage.template";
import { Heading } from "../ui-core/components";

const WomensClothingCategory: React.FC = () => {
  return (
    <div className="content">
      <div className="heading">
        <Heading variant="h2">Women's Clothing</Heading>
      </div>
      <Products
        url="https://fakestoreapi.com/products/category/women's clothing"
        descriptionBackgroundColor="#FF5E84"
      />
    </div>
  );
};

export default WomensClothingCategory;
