import React from "react";
import { CategoryType } from "@common-types/categoryList";
import { Link } from "react-router-dom";
import Checkbox from "@components/common/Checkbox/Checkbox";
import "./categoryList.css";

interface CategoryProps {
  categoryList: CategoryType[];
  isCheckbox?: boolean;
  isSelect?: boolean;
  type: string;
}

const CategoryList: React.FC<CategoryProps> = ({
  categoryList,
  isCheckbox,
  isSelect,
  type,
}) => {
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
  const renderCategoryList = (list: CategoryType[]) => {
    return list.map((item) => (
      <>
        {isSelect && (
          <div className="categoryList__list" key={item.key}>
            <figure className="categoryList__image">
              <img
                className="categoryList__images"
                src={item.src}
                alt={item.alt}
              />
            </figure>
            <Link className="categoryList__text" to="/products">
              <p>{item.text}</p>
            </Link>
          </div>
        )}
        {isCheckbox && (
          <div className="categoryList__checkbox">
            <Checkbox value={item.text} />
          </div>
        )}
      </>
    ));
  };

  return (
    <div data-testid="category-list" className={className}>
      {renderCategoryList(categoryList)}
    </div>
  );
};

export default CategoryList;
