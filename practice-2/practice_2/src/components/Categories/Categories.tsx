import React, { useContext } from "react";
import { LoadingContext } from "@/context/LoadingContext";
import useCategory from "@/hooks/useCategory";
import { CategoriesProps, CategoryProps } from "@/types/categories";
import "./categories.css";

const Category: React.FC<CategoryProps> = ({ setOpenModalSearch }) => {
  const {setIsReload, setFilterInput} = useContext(LoadingContext);
  const handleSearch = (e: React.MouseEvent<HTMLElement>) => {
    const categoryId = {categoryId : e.currentTarget.dataset.index};
    setFilterInput(categoryId);
    setOpenModalSearch(false);
    setIsReload(true);
  }

  const handleDefaultCategory = () => {
    const categoryId = "";
    setFilterInput(categoryId);
    setOpenModalSearch(false);
    setIsReload(true);
  }

  const categories = useCategory();
  function renderCategoryList(categories: []) {
    return categories.map((category: CategoriesProps, index: number) =>
      <li  key={index} className="categories__item">
        <a data-index={category.id} onClick={handleSearch} key={category.id}>{category.name}</a>
      </li>
    );
  }

  return (
    <>
      <div className="categories">
        <p className="categories__title">PRODUCT CATEGORIES</p>
          <ul className="categories__list">
            {renderCategoryList(categories as [])}
            <li className="categories__item" onClick={handleDefaultCategory}>Default</li>
          </ul>
      </div>
    </>
  );
}

export default Category;
