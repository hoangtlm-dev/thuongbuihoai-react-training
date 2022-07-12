import React, { memo } from "react";
import Text from "@components/common/Text/Text";
import CardProductList from "../CardProductList";

const CardProductOffer: React.FC = memo(() => {
  return (
    <div data-testid="card-product-offer" className="cardOffersList">
      <div className="cardOffersList__title">
        <Text text="Offers" type="large" />
      </div>
      <div className="card__item--offers">
        <CardProductList
          type="offers"
          content="offers"
          isOffer={true}
          isPopular={false}
          isBestSelling={false}
          visibleQuantity={true}
          visibleDiscountPrice={true}
        />
      </div>
    </div>
  );
});

export default CardProductOffer;
