import React, { memo } from "react";
import url from "@assets/images/cottage-cheese.png";
import Text from "@components/common/Text/Text";
import Price from "@components/common/Price/Price";
import "./cardProduct.css";

interface CartProductProps {
  type: string;
}

const CardProduct: React.FC<CartProductProps> = memo(({ type }) => {
  let className = "";
  switch (type) {
    case "offers":
      className = "card__product--offers";
      break;
      case "selling":
      className = "card__product--selling";
      break;
    default:
      break;
  }
  return (
    <div data-testid="card-product" className={className}>
      <img src={url} alt="This is ice-cream-sundae image" />
      <div className="card__info">
        <Text text="Cottage Cheese" />
        <p className="card__unit">3kg</p>
        <Price type="original" value={100} currency="$" />
        <Price type="discount" value={150} currency="$" />
        <h1 className="test">hello</h1>
      </div>
    </div>
  );
});

export default CardProduct;
