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
      <div data-testid="category-card" className="category-card">
        <figure className="category-card-image">
          <img src={category.images.src} alt={category.images.alt} />
        </figure>
        <Link
          className="category-card-text"
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
