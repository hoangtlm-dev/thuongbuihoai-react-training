import React from "react";
import "./checkbox.css";

interface CheckboxProps {
  text: string;
  categoryId: string;
  value: boolean;
  onClick: Function;
}

const Checkbox: React.FC<CheckboxProps> = ({ text, onClick, categoryId }) => {
  const handleCheck = (event: any) => {
    const value = event.target.checked
    onClick(categoryId, value);
  }

  return (
    <label className="checkbox__value">
      <input
        type="checkbox"
        name="checkbox"
        multiple
        data-index={categoryId}
        onClick={handleCheck}
      />
      {text}
    </label>
  );
};

export default Checkbox;
