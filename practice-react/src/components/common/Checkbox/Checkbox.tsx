import React from "react";
import "./checkbox.css";

interface CheckboxProps {
  text: string;
  categoryId: string;
  value: boolean;
  onToggleCategory: Function;
  checked: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ text, onToggleCategory, categoryId, checked }) => {
  const handleCheck = (event: any) => {
    const value = event.target.checked
    onToggleCategory(categoryId, value);
  }

  return (
    <label className="checkbox__value">
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

export default Checkbox;
