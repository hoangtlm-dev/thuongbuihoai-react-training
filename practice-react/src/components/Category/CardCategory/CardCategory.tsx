import React, { memo } from "react";
import { Link } from "react-router-dom";
import { Categories } from "@common-types/category";
import "./cardCategory.css";

interface CardCategoryProps {
  category: Categories;
  categoryId: string;
  onClick: Function;
}

const CardCategory: React.FC<CardCategoryProps> = memo(
  ({ onClick, category, categoryId }) => {
    const handleCheck = (event: any) => {
      const value = event.target.value;
      onClick(categoryId, value);
    };
    return (
      <div className="cardCategory">
        <figure className="categoryList__image">
          <img
            className="categoryList__images"
            src={category.images.src}
            alt={category.images.alt}
          />
        </figure>
        <Link
          className="categoryList__text"
          to={`/products/category/${category.id}`}
          onClick={handleCheck}
        >
          <p data-testid="category-item">{category.name}</p>
        </Link>
      </div>
    );
  }
);

export default CardCategory;
