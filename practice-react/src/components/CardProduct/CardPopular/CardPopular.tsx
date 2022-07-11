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

export default CardPopular;
