import React, { useContext } from "react";
import { DataContext } from "@context/DataContext";
import Text from "@components/common/Text/Text";
import CardProductList from "../CardProductList";

const CardProductOffer: React.FC = () => {
  const { products } = useContext(DataContext);
  const productOffer = products?.filter((product) => product.offer === true);

  return (
    <div data-testid="card-product-offer" className="cardOffersList">
      <div className="cardOffersList__title">
        <Text text="Offers" type="large" />
      </div>
      <div className="card__item--offers">
        <CardProductList
          type="offers"
          content="offers"
          productList={productOffer}
          visibleQuantity={true}
          visibleDiscountPrice={true}
        />
      </div>
    </div>
  );
};

export default CardProductOffer;
