import React from "react";
import Title from "../components/Title/Title";
import Price from "../components/Price/Price";
import ProductItem from "../../components/ProductItem/ProductItem";
import { ProductListProps, ProductProps } from "../../types/product";
import "./productList.css";

const ProductList: React.FC<ProductListProps> = ({products}) => {

  return (
    <div className="product__list">
      {products.map((product: ProductProps, index: number) =>
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
