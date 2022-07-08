import React from "react";
import "./checkbox.css";

interface CheckboxProps { 
  value: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ value }) => {
  return (
    <label className="checkbox__value">
      <input type="checkbox" name="checkbox" />
        {value}
    </label>
  );
};

export default Checkbox;
