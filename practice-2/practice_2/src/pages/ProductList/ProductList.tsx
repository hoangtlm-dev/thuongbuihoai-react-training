import React from "react";
import Price from "../../components/Price/Price";
import Products from "../../components/ProductItem/Product";
import Title from "../../components/common/Title/Title";
import "./productList.css"
import fetchProduct from "../../hooks/fetchProduct";

export default function ProductList() {
  const products = fetchProduct();
  return (
    <div className="product__list">
      {products.map(product => 
        <div className="product__item" key={product.id}>
          <Products product={product} />
          <div className="product__content">
            <Title className={""} value={product.name} />
            <Price value={product.price} />
          </div>
        </div>
      )}
    </div>
  );
}