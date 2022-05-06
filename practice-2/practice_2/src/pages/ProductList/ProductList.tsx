import React from "react";
import Price from "../../components/Price/Price";
import ProductItem from "../../components/ProductItem/ProductItem";
import Title from "../../components/common/Title/Title";
import { ProductListProps, ProductType } from "../../types/product";
import "./productList.css"

const ProductList: React.FC<ProductListProps> = ({products}) => {

  return (
    <div className="product__list">
      {products.map((product: ProductType, index: number) =>
        <div className="product__item" key={index}>
          <ProductItem product={product} />
          <div className="product__content">
            <Title value={product.name} />
            <Price value={product.price.toString()} />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductList;
