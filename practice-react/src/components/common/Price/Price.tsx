import React, { memo } from "react";
import "./price.css";

interface PriceProps {
  value?: number;
  type: string;
  currency?: string;
}

const Price: React.FC<PriceProps> = memo(({ value = "", type, currency }) => {
  let className = "";
  switch (type) {
    case "original":
      className = "price__original";
      break;
    case "discount":
      className = "price__discount";
      break;
    default:
      break;
  }
  return (
    <p data-testid="price" className={className}>
      <span className="price--unit">{currency}</span>{value}
    </p>
  );
});

export default Price;
