import React, { memo } from "react";
import url from "@assets/images/ice-cream-sundae.png";
import Text from "@components/common/Text/Text";
import Price from "@components/common/Price/Price";

interface CartProductProps {
  type?: string;
}

const CardProduct: React.FC = memo(() => {
  return (
    <div data-testid="card-product" className="card__product">
      <img src={url} alt="This is ice-cream-sundae image" />
      <Text text="Cottage Cheese" />
      <p className="card__unit">3kg</p>
      <Price type="original" value={100} currency="$" />
      <Price type="discount" value={150} currency="$" />
    </div>
  );
});

export default CardProduct;