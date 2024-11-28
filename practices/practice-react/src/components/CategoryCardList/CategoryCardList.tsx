import React, { memo } from "react";
import CategoryList from "../CategoryList/CategoryList";

const CategoryCardList: React.FC = memo(() => {
  return (
    <div data-testid="categories" className="categories">
      <p className="categories-title">Categories</p>
      <CategoryList
        type="row"
        isSelect={true}
        onToggleCategory={() => {}}
        selectedCategories={[]}
        id={""}
      />
    </div>
  );
});

export default CategoryCardList;
