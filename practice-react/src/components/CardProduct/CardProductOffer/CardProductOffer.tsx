import React, { memo } from "react";
import Text from "@components/common/Text/Text";
import CardProduct from "../CardProduct";

const CardProductOffer: React.FC = memo(() => {
  return (
    <div className="cardOffersList">
      <div className="cardOffersList__title">
        <Text text="Offers" type="large" />
      </div>
      <div className="card__item--offers">
        <CardProduct
          type="offers"
          isOffer={true}
          isPopular={false}
          isBestSelling={false}
          visibleQuantity={true}
          visibleDiscountPrice={true}
          content="offers"
        />
      </div>
    </div>
  );
});

export default CardProductOffer;
