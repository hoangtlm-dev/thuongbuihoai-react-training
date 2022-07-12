import React, { memo } from "react";
import CategoryList from "@components/Category/CategoryList/CategoryList";
import NavigationBar from "@components/common/NavigationBar/NavigationBar";
import CardProductList from "@components/CardProduct/CardProductList";
import "./productList.css";

const ProductList: React.FC = memo(() => {
  return (
    <div data-testid="product-list">
      <NavigationBar isThemeDark={true} />
      <p className="productList__page">Home/Beverages</p>
      <div className="productList">
        <div className="productList__select">
          <p className="productList__select--category">Categories</p>
          <CategoryList type="checkbox" isCheckbox={true} />
        </div>
        <div className="productList--popular">
          <CardProductList
            type="popular"
            visibleCounter={true}
            content="popular"
          />
        </div>
      </div>
    </div>
  );
});

export default ProductList;
