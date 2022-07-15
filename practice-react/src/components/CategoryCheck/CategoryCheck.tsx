import React from "react";
import "./categoryCheck.css";

interface CategoryCheckProps {
  text: string;
  categoryId: string;
  value: boolean;
  onToggleCategory: Function;
  checked: boolean;
}

const CategoryCheck: React.FC<CategoryCheckProps> = ({ text, onToggleCategory, categoryId, checked }) => {
  const handleCheck = (event: any) => {
    const value = event.target.checked
    onToggleCategory(categoryId, value);
  }

  return (
    <label data-testid="category-check" className="checkbox__value">
      <input
        type="checkbox"
        name="checkbox"
        multiple
        defaultChecked={checked}
        data-index={categoryId}
        onClick={handleCheck}
      />
      {text}
    </label>
  );
};

export default CategoryCheck;
