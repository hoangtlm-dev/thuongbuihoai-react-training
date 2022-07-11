import React, { memo } from "react";
import { ProductProps } from "@common-types/product";
import CategoryList from "@components/Category/CategoryList/CategoryList";
import NavigationBar from "@components/common/NavigationBar/NavigationBar";
import CardProduct from "@components/CardProduct/CardProduct";
import "./productList.css";

const ProductList: React.FC<ProductProps> = memo(({ product }) => {
  return (
    <>
      <NavigationBar isThemeDark={true} />
      <p className="productList__page">Home/Beverages</p>
      <div data-testid="product-list" className="productList">
        <div className="productList__select">
          <p className="productList__select--category">Categories</p>
          <CategoryList type="checkbox" isCheckbox={true} />
        </div>
        <div className="productList--popular">
          <CardProduct
            type="popular"
            visibleCounter={true}
            content="popular"
            isOffer={true}
            isPopular={false}
            isBestSelling={false}
          />
        </div>
      </div>
    </>
  );
});

export default ProductList;
