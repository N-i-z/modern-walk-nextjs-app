import React from "react";
import ProductCard from "../../components/molecules/ProductCard/ProductCard.component";
import useFetchProducts from "../../../hooks/useFetchProducts";
import Loading from "../../components/atoms/Loading/Loading.component";
import { ProductListProps, ProductsProps } from "./template.types";

export const Products: React.FC<ProductsProps> = ({
  url,
  descriptionBackgroundColor,
}) => {
  const { loading, data } = useFetchProducts(url);

  return (
    <div>
      {loading ? (
        <Loading message="Loading..." />
      ) : (
        <ProductList
          products={data || []}
          descriptionBackgroundColor={descriptionBackgroundColor}
        />
      )}
    </div>
  );
};

export const ProductList: React.FC<ProductListProps> = ({
  products,
  descriptionBackgroundColor,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-10">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          image={product.image}
          price={product.price}
          description={product.description}
          descriptionBackgroundColor={descriptionBackgroundColor}
          category={product.category}
        />
      ))}
    </div>
  );
};
