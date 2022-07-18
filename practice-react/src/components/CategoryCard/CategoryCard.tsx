import React, { memo } from "react";
import { Link } from "react-router-dom";
import { Categories } from "@common-types/category";
import "./categoryCard.css";

interface CategoryCardProps {
  category: Categories;
  categoryId: string;
  onToggleCategory: Function;
}

const CategoryCard: React.FC<CategoryCardProps> = memo(
  ({ onToggleCategory, category, categoryId }) => {
    const handleSelect = () => {
      onToggleCategory(categoryId);
    };

    return (
      <div data-testid="category-card" className="categoryCard">
        <figure className="categoryCard__image">
          <img src={category.images.src} alt={category.images.alt} />
        </figure>
        <Link
          className="categoryCard__text"
          to={`/products/category/${category.id}`}
          onClick={handleSelect}
        >
          <p data-testid="category-item">{category.name}</p>
        </Link>
      </div>
    );
  }
);

export default CategoryCard;
