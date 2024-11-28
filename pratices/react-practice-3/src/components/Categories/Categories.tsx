import React, { memo } from "react";
import CategoryList from "./CategoryList/CategoryList";

const Categories: React.FC = memo(() => {
  return (
    <div data-testid="categories" className="categories">
      <p className="categories__title">What are you looking for here?</p>
      <CategoryList />
    </div>
  );
});

export default Categories;
