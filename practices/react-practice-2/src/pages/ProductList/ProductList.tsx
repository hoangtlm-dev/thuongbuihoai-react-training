import React from "react";
import Title from "../components/Title/Title";
import Price from "../components/Price/Price";
import ProductItem from "@/components/ProductItem/ProductItem";
import { Product } from "@/types/product";
import "./productList.css";
import useProduct from "@/hooks/useProduct";

const ProductList: React.FC = () => {
  const { products } = useProduct();
  return (
    <div className="product__list">
      {products.map((product: Product, index: number) =>
        <div className="product__item" key={index}>
          <ProductItem product={product} />
          <div className="product__content">
            <Title text={product.name} />
            <Price value={product.price.toString()} />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductList;
