import React, { memo, MouseEvent } from "react";
import "./categoryCheck.css";

interface CategoryCheckProps {
  text: string;
  categoryId: string;
  value: boolean;
  onToggleCategory: Function;
  checked: boolean;
}

const CategoryCheck: React.FC<CategoryCheckProps> = memo(
  ({ text, onToggleCategory, categoryId, checked }) => {
    const handleCheck = (
      event: MouseEvent<HTMLInputElement> & { target: HTMLInputElement }
    ) => {
      const value = event.target.checked;
      onToggleCategory(categoryId, value);
    };

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
  }
);

export default CategoryCheck;
