import React, { memo } from "react";
import { Link } from "react-router-dom";
import { Categories } from "@common-types/category";
import "./categoryCard.css";

interface CategoryCardProps {
  category: Categories;
  categoryId: string;
  onClick: Function;
}

const CategoryCard: React.FC<CategoryCardProps> = memo(
  ({ onClick, category, categoryId }) => {
    const handleCheck = (event: any) => {
      const value = event.target.value;
      onClick(categoryId, value);
    };
    return (
      <div className="categoryCard">
        <figure className="categoryCard__image">
          <img
            src={category.images.src}
            alt={category.images.alt}
          />
        </figure>
        <Link
          className="categoryCard__text"
          to={`/products/category/${category.id}`}
          onClick={handleCheck}
        >
          <p data-testid="category-item">{category.name}</p>
        </Link>
      </div>
    );
  }
);

export default CategoryCard;
