import React, { memo, useCallback, useContext, useMemo, useState } from "react";
import { DataContext } from "@context/DataContext";
import { useParams } from "react-router-dom";
import CategoryList from "@components/Category/CategoryList/CategoryList";
import NavigationBar from "@components/common/NavigationBar/NavigationBar";
import CardProductList from "@components/CardProduct/CardProductList";
import "./productList.css";

const ProductList: React.FC = memo(() => {
  const { products } = useContext(DataContext);
  const { id } = useParams();

  const defaultCategories = useMemo(() => {
    return id ? [id] : [];
  }, [id]);

  const [selectedCategories, setSelectedCategories] = useState<string[]>(defaultCategories);
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
    <div data-testid="product-list">
      <NavigationBar isThemeDark={true} />
      <p className="productList__page">Home/Beverages</p>
      <div className="productList">
        <div className="productList__select">
          <p className="productList__select--category">Categories</p>
          <CategoryList
            id={id}
            type="checkbox"
            isCheckbox={true}
            selectedCategories={selectedCategories}
            onToggleCategory={handleToggleCategory}
          />
        </div>
        <div className="productList--popular">
          <CardProductList
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

export default ProductList;
