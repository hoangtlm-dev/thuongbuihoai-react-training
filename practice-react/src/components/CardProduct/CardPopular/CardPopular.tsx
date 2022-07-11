import React, { memo } from "react";
import Text from "@components/common/Text/Text";
import CardProduct from "../CardProduct";

const CardPopular: React.FC = memo(() => {
  return (
    <div className="cardPopularList">
      <div className="cardPopular__title">
        <Text text="Popular Products" type="large-dark" />
      </div>
      <div className="card__item--popular">
        <CardProduct
          isOffer={false}
          isBestSelling={false}
          isPopular={true}
          type="popular"
          visibleCounter={true}
          content="popular"
        />
      </div>
    </div>
  );
});

export default CardPopular;
