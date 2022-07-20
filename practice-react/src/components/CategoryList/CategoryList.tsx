import useSWR from "swr";
import React, { useContext, useEffect, useMemo } from "react";
import { Categories } from "@common-types/category";
import { getData } from "@helpers/fetchApi";
import { CATEGORIES_URL } from "@constants/url";
import { DataContext } from "@context/DataContext";
import CategoryCard from "@components/CategoryCard/CategoryCard";
import CategoryCheck from "@components/CategoryCheck/CategoryCheck";
import "./categoryList.css";

interface CategoryProps {
  id?: string;
  type: string;
  isSelect?: boolean;
  isCheckbox?: boolean;
  onToggleCategory: Function;
  selectedCategories: string[];
}

const CategoryList: React.FC<CategoryProps> = ({
  id,
  type,
  isSelect,
  isCheckbox,
  onToggleCategory,
  selectedCategories
}) => {
  // fetch data with useSWR
  const { data } = useSWR(CATEGORIES_URL, getData<Categories[]>);
  const { setCategories, categories } = useContext(DataContext);

  useEffect(() => {
    setCategories(data);
  }, [data]);

  const className = useMemo(() => {
    switch (type) {
      case "row":
        return "category-list-row";
      case "column":
        return "category-list-column";
      default:
        return "category-list"
    }
  }, [type]);

  const renderCategoryList = () => {
    return categories?.map((category: Categories) => (
      <div key={category.id}>
        {isSelect && (
          <div className="category-list-card">
            <CategoryCard
              onToggleCategory={onToggleCategory}
              category={category}
              categoryId={category.id}
            />
          </div>
        )}
        {isCheckbox && (
          <div className="category-list-checkbox">
            <CategoryCheck
              onToggleCategory={onToggleCategory}
              categoryId={category.id}
              checked={category.id == id ? true : false}
              text={category.name}
              value={selectedCategories.includes(category.id)}
            />
          </div>
        )}
      </div>
    ));
  };

  return (
    <div data-testid="category-list" className={className}>
      {isCheckbox &&
        <div className="category-list-checkbox">
          <CategoryCheck
            onToggleCategory={onToggleCategory}
            categoryId=""
            text="All"
            checked={id ? false : true}
            value={!selectedCategories.length}
          />
        </div>
      }
      {renderCategoryList()}
    </div>
  );
};

export default CategoryList;
