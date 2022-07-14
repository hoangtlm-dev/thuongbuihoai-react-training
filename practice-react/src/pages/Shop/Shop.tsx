import React, { memo, useCallback, useContext, useMemo, useState } from "react";
import { DataContext } from "@context/DataContext";
import { useParams } from "react-router-dom";
import CategoryList from "@components/CategoryList/CategoryList";
import NavigationBar from "@components/common/NavigationBar/NavigationBar";
import ProductList from "@components/ProductList/ProductList";
import "./shop.css";

const Shop: React.FC = memo(() => {
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
    <div data-testid="shop-page" className="shopPage">
      <NavigationBar
        mode={{
          dark: true,
        }}
      />
      <p className="shopPage__heading">Home/Beverages</p>
      <div className="shopPage__info">
        <div className="shopPage__select">
          <p className="shopPage__title">Categories</p>
          <CategoryList
            id={id}
            type="checkbox"
            isCheckbox={true}
            selectedCategories={selectedCategories}
            onToggleCategory={handleToggleCategory}
          />
        </div>
        <div className="shopPage__product">
          <ProductList
            type="popular"
            content="popular"
            visibleCounter={true}
            productList={productList}
          />
        </div>
      </div>
    </div>
  );
});

export default Shop;