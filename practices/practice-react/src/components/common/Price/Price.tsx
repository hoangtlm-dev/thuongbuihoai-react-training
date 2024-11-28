import React, { memo, useMemo } from "react";
import "./price.css";

interface PriceProps {
  value?: number;
  type: string;
  currency?: string;
}

const Price: React.FC<PriceProps> = memo(
  ({ value, type = "original", currency }) => {
    const className = useMemo(() => {
      switch (type) {
        case "original":
          return "price-original";
        case "discount":
          return "price-discount";
        default:
          return "price";
      }
    }, [type]);

    return (
      <p data-testid="price" className={className}>
        <span className="price-unit">{currency}</span>
        {value}
      </p>
    );
  }
);

export default Price;
