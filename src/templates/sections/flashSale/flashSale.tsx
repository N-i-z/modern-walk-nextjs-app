import React, { useState, useEffect } from "react";
import axios from "axios";
import "./flashSale.css";
import ProductCard from "../../../components/productCard/ProductCard.tsx";
import Loading from "../../../components/loading/Loading.tsx";
import { Product } from "../../../models/Product.tsx";
import { Category } from "../../../enums/category.ts";

const FlashSale: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [menProducts, setMenProducts] = useState<Product[]>([]);
  const [womenProducts, setWomenProducts] = useState<Product[]>([]);

  useEffect(() => {
    setLoading(true);
    axios
      .all([
        axios.get("https://fakestoreapi.com/products/category/men's clothing"),
        axios.get(
          "https://fakestoreapi.com/products/category/women's clothing"
        ),
      ])
      .then(
        axios.spread((menRes, womenRes) => {
          const menProducts: Product[] = menRes.data
            .slice(0, 2)
            .map((product: any) => ({
              ...product,
              category: Category.MensClothing,
            }));
          const womenProducts: Product[] = womenRes.data
            .slice(0, 2)
            .map((product: any) => ({
              ...product,
              category: Category.WomensClothing,
            }));
          setMenProducts(menProducts);
          setWomenProducts(womenProducts);
        })
      )
      .catch((error) => {
        console.error("Error fetching products:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  const renderAlternateProducts = () => {
    const alternateProducts: Product[] = [];
    const maxLength = Math.max(menProducts.length, womenProducts.length);

    for (let i = 0; i < maxLength; i++) {
      if (i < menProducts.length) {
        alternateProducts.push(menProducts[i]);
      }
      if (i < womenProducts.length) {
        alternateProducts.push(womenProducts[i]);
      }
    }
    return alternateProducts;
  };

  return (
    <div className="flash-sale-products">
      {loading ? (
        <Loading message="Loading..." />
      ) : (
        renderAlternateProducts().map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            description={product.description}
            category={product.category}
            descriptionBackgroundColor={
              product.category === Category.MensClothing ? "#2BD9AF" : "#FF5E84"
            }
          />
        ))
      )}
    </div>
  );
};

export default FlashSale;