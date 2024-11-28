import useSWR from "swr";
import React, { memo, useContext, useEffect, useState } from "react";
import { CATEGORIES_URL } from "@constants/url";
import { getData } from "@helpers/apiHandle";
import { DataContext } from "@context/DataContext";
import { CategoryProps } from "@common-types/category";
import "../categories.css"

const CategoryList: React.FC = memo(() => {
  // fetch data with useSWR
  const { data } = useSWR(CATEGORIES_URL, getData<CategoryProps[]>);
  const { setCategories } = useContext(DataContext);

  useEffect(() => {
    setCategories(data);
  }, [data]);

  // handle highlight when categoryId selected
  const [activeId, setActiveId] = useState<string>("");
  const { setSearchValue } = useContext(DataContext);
  const handleSearch = (id: string) => (e: React.MouseEvent<HTMLElement>) => {
    // get current categoryId
    const categoryId = { categoryId: e.currentTarget.dataset.index };
    setSearchValue?.(categoryId);
    setActiveId(id);
  };

  // handle search default
  const handleDefaultCategory = () => {
    const categoryId = "";
    setSearchValue?.(categoryId);
    setActiveId("");
  };

  const renderCategoryList = (data: []) => {
    return data?.map((category: CategoryProps) => (
      <li
        data-index={category.id}
        className={`categories__item ${
          activeId === category.id ? "active" : "inActive"
        }`}
        key={category.id}
        onClick={handleSearch(category.id)}
      >
        {category.name}
      </li>
    ));
  }

  return (
    <div data-testid="category-list" className="categories">
      <ul className="categories__list">
        <li
          data-testid="category-item"
          className={`categories__item ${
            activeId === "" ? "active" : "inActive"
          }`}
          onClick={handleDefaultCategory}
        >
          All
        </li>
        {renderCategoryList(data as [])}
      </ul>
    </div>
  );
});

export default CategoryList;
