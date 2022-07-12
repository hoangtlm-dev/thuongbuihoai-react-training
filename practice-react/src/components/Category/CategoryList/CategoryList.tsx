import useSWR from "swr";
import React, { useContext, useEffect } from "react";
import { Categories } from "@common-types/category";
import { Link } from "react-router-dom";
import { getData } from "@helpers/fetchApi";
import { CATEGORIES_URL } from "@constants/url";
import { DataContext } from "@context/DataContext";
import Checkbox from "@components/common/Checkbox/Checkbox";
import "./categoryList.css";

interface CategoryProps {
  isCheckbox?: boolean;
  isSelect?: boolean;
  type: string;
}

const CategoryList: React.FC<CategoryProps> = ({
  isCheckbox,
  isSelect,
  type,
}) => {
  // fetch data with useSWR
  const { data } = useSWR(CATEGORIES_URL, getData<Categories[]>);
  const { setSearchValue, setCategories, categories } = useContext(DataContext);

  useEffect(() => {
    setCategories(data);
  }, [data]);

  const handleSearch = (e: React.MouseEvent<HTMLElement>) => {
    // get current categoryId
    const categoryId = { categoryId: e.currentTarget.dataset.index };
    setSearchValue?.(categoryId);
  };

  let className = "";
  switch (type) {
    case "select":
      className = "categoryList--select";
      break;
    case "checkbox":
      className = "categoryList--checkbox";
      break;
    default:
      break;
  }

  const renderCategoryList = () => {
    return categories?.map((category: Categories) => (
      <div key={category.id}>
        {isSelect && (
          <div className="categoryList__list">
            <figure className="categoryList__image">
              <img
                className="categoryList__images"
                src={category.images.src}
                alt={category.images.alt}
              />
            </figure>
            <Link data-index={category.id} className="categoryList__text" to="/products" onClick={handleSearch}>
              <p data-testid="category-item">{category.name}</p>
            </Link>
          </div>
        )}
        {isCheckbox && (
          <div className="categoryList__checkbox">
            <Checkbox categoryId={category.id} onClick={handleSearch} value={category.name} />
          </div>
        )}
      </div>
    ));
  };

  return (
    <div data-testid="category-list" className={className}>
      {renderCategoryList()}
    </div>
  );
};

export default CategoryList;
