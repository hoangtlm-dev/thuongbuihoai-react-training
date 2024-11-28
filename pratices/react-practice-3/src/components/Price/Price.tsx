import React, { memo } from "react";
import "./price.css";

interface PriceProps {
  value?: number;
  className?: string;
}

const Price: React.FC<PriceProps> = memo(({ value="", className }) => {
  return (
    <p data-testid="price" className={className}>
      ${value}
    </p>
  );
});

export default Price;
