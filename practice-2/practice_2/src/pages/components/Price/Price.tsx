import React, { memo } from "react";
import { PriceProps } from "@/types/price";
import "./price.css";

const Price: React.FC<PriceProps> = ({ value }) => {
  return (
    <p className="card__price">
      ${value}
    </p>
  );
}

export default memo(Price);
