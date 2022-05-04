import React, { useState } from "react";
import Price from "../../components/Price/Price";
import Products from "../../components/ProductItem/Product";
import Title from "../../components/common/Title/Title";
import fetchProduct from "../../hooks/fetchProduct";
import { ProductProps } from "../../types/product";
import "./productList.css"

export interface ProductListProps {
  isReset: Boolean;
  setIsReset: Function
}

export default function ProductList({isReset, setIsReset} : ProductListProps) {
  const products = fetchProduct(isReset, setIsReset);
  return (
    <div className="product__list">
      {products.map((product: ProductProps, index: number) => 
        <div className="product__item" key={index}>
          <Products
            product={product}
            id={""}
            name={""}
            price={0}
            images={[]}
          />
          <div className="product__content">
            <Title className={""} value={product.name} />
            <Price value={product.price.toString()} />
          </div>
        </div>
      )}
    </div>
  );
}