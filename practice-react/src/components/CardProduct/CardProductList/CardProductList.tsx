import React, { memo } from "react";
import Text from "@components/common/Text/Text";
import CardProduct from "../CardProduct";

interface CartProductProps {
  type?: string;
}

const CardProductList: React.FC = memo(() => {
  return (
    <div className="cardProductList">
      <div className="cardProductList__title">
      <Text text="Offers" type="large" />
      </div>
      <div className="card__item">
        <CardProduct type="offers" />
        <CardProduct type="offers" />
        <CardProduct type="offers" />
        <CardProduct type="offers" />
      </div>
    </div>
  );
});

export default CardProductList;
