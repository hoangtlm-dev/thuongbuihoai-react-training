import React, { memo } from "react";
import Text from "@components/common/Text/Text";
import CardProduct from "../CardProduct";

const CardProductSelling: React.FC = memo(() => {
  return (
    <div className="cardProductSellingList">
      <div className="cardProductSelling__title">
        <Text text="Best Selling Products" type="large" />
      </div>
      <div className="card__item--selling">
        <CardProduct type="selling" visibleCounter={true} content="selling" />
        <CardProduct type="selling" visibleCounter={true} content="selling" />
        <CardProduct type="selling" visibleCounter={true} content="selling" />
        <CardProduct type="selling" visibleCounter={true} content="selling" />
      </div>
    </div>
  );
});

export default CardProductSelling;
