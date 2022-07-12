import React, { memo } from "react";
import Text from "@components/common/Text/Text";
import CardProductList from "../CardProductList";

const CardProductPopular: React.FC = memo(() => {
  return (
    <div data-testid="card-product-popular" className="cardPopularList">
      <div className="cardPopular__title">
        <Text text="Popular Products" type="large-dark" />
      </div>
      <div className="card__item--popular">
        <CardProductList
          type="popular"
          content="popular"
          isOffer={false}
          isBestSelling={false}
          isPopular={true}
          visibleCounter={true}
        />
      </div>
    </div>
  );
});

export default CardProductPopular;
