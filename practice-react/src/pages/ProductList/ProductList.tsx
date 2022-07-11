import { CATEGORY_LIST } from "@constants/category";
import React, { memo } from "react";
import CategoryList from "@components/Category/CategoryList/CategoryList";
import NavigationBar from "@components/common/NavigationBar/NavigationBar";
import CardProduct from "@components/CardProduct/CardProduct";
import "./productList.css";

const ProductList: React.FC = memo(() => {
  return (
    <>
      <NavigationBar isThemeDark={true} />
      <p className="productList__page">Home/Beverages</p>
      <div data-testid="product-list" className="productList">
        <div className="productList__select">
          <p className="productList__select--category">Categories</p>
          <CategoryList
            type="checkbox"
            isCheckbox={true}
            categoryList={CATEGORY_LIST}
          />
        </div>
        <div className="productList--popular">
          <CardProduct type="popular" visibleCounter={true} content="popular" />
          <CardProduct type="popular" visibleCounter={true} content="popular" />
          <CardProduct type="popular" visibleCounter={true} content="popular" />
          <CardProduct type="popular" visibleCounter={true} content="popular" />
        </div>
      </div>
    </>
  );
});

export default ProductList;
