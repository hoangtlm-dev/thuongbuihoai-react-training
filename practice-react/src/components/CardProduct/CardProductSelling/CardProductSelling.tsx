import React, { memo } from "react";
import Text from "@components/common/Text/Text";
import CardProductList from "../CardProductList";

const CardProductSelling: React.FC = memo(() => {
  return (
    <div data-testid="card-product-selling" className="cardProductSellingList">
      <div className="cardProductSelling__title">
        <Text text="Best Selling Products" type="large" />
      </div>
      <div className="card__item--selling">
        <CardProductList
          isOffer={false}
          isPopular={false}
          isBestSelling={true}
          type="selling"
          visibleCounter={true}
          content="selling"
        />
      </div>
    </div>
  );
});

export default CardProductSelling;
