import React, { memo } from "react";
import Text from "@components/common/Text/Text";
import CardProduct from "../CardProduct";

const CardProductList: React.FC = memo(() => {
  return (
    <div className="cardProductList">
      <div className="cardProductList__title">
      <Text text="Offers" type="large" />
      </div>
      <div className="card__item--offers">
        <CardProduct type="offers" visibleQuantity={true} visibleDiscountPrice={true} content="offers" />
        <CardProduct type="offers" visibleQuantity={true} visibleDiscountPrice={true} content="offers" />
        <CardProduct type="offers" visibleQuantity={true} visibleDiscountPrice={true} content="offers" />
        <CardProduct type="offers" visibleQuantity={true} visibleDiscountPrice={true} content="offers" />
      </div>
    </div>
  );
});

export default CardProductList;
