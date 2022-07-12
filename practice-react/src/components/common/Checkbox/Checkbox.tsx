import React, { MouseEventHandler } from "react";
import "./checkbox.css";

interface CheckboxProps {
  value: string;
  categoryId: any;
  onClick: MouseEventHandler<HTMLInputElement>;
}

const Checkbox: React.FC<CheckboxProps> = ({ value, onClick, categoryId }) => {
  return (
    <label className="checkbox__value">
      <input
        type="checkbox"
        name="checkbox"
        data-index={categoryId}
        onClick={onClick}
      />
      {value}
    </label>
  );
};

export default Checkbox;
