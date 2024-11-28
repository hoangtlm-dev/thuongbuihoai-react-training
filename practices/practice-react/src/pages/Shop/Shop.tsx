import React, { useCallback, useContext, useMemo, useState } from "react";
import { DataContext } from "@context/DataContext";
import { useParams } from "react-router-dom";
import CategoryList from "@components/CategoryList/CategoryList";
import NavigationBar from "@components/common/NavigationBar/NavigationBar";
import ProductList from "@components/ProductList/ProductList";
import Button from "@components/common/Button/Button";
import "./shop.css";

const Shop: React.FC = () => {
  const { products } = useContext(DataContext);
  const { id } = useParams();

  const defaultCategories = useMemo(() => {
    return id ? [id] : [];
  }, [id]);

  const [selectedCategories, setSelectedCategories] =
    useState<string[]>(defaultCategories);
  const productList = useMemo(() => {
    return selectedCategories.length
      ? products.filter((product) =>
          selectedCategories.includes(product.categoryId)
        )
      : products;
  }, [products, selectedCategories]);

  const handleToggleCategory = useCallback(
    (categoryId: string, value: string) => {
      if (categoryId) {
        if (value) {
          setSelectedCategories([...selectedCategories, categoryId]);
        } else {
          setSelectedCategories(
            selectedCategories.filter((item) => item !== categoryId)
          );
        }
      } else {
        if (value) {
          setSelectedCategories([]);
        }
      }
    },
    [selectedCategories]
  );

  return (
    <div data-testid="shop-page" className="shop-page">
      <NavigationBar mode="dark" />
      <p className="shop-page-heading">Home/Beverages</p>
      <div className="shop-page-info">
        <div className="shop-page-select">
          <p className="shop-page-title">Category</p>
          <CategoryList
            id={id}
            type="checkbox"
            isCheckbox={true}
            selectedCategories={selectedCategories}
            onToggleCategory={handleToggleCategory}
          />
          <div className="shop-page-button">
            <Button icon={true} text="Filter" type="large" />
          </div>
        </div>
        <div className="shop-page-product">
          <ProductList
            type="medium-box"
            content="quantity"
            visibleCounter={true}
            productList={productList}
          />
        </div>
      </div>
    </div>
  );
};

export default Shop;
