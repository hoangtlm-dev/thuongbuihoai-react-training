import React, { memo } from "react";
import url from "@assets/images/cottage-cheese.png";
import Text from "@components/common/Text/Text";
import Price from "@components/common/Price/Price";
import "./cardProduct.css";
import Counter from "@components/common/Counter/Counter";
import Icon from "@components/common/Icon/Icon";

interface CartProductProps {
  type: string;
  content: string;
  visibleQuantity?: boolean;
  visibleDiscountPrice?: boolean;
  visibleCounter?: boolean;
}

const CardProduct: React.FC<CartProductProps> = memo(
  ({ type, visibleQuantity, visibleDiscountPrice, visibleCounter }) => {
    let className = "";
    switch (type) {
      case "offers":
        className = "card__product--offers";
        break;
      case "selling":
        className = "card__product--selling";
        break;
      case "popular":
        className = "card__product--popular";
        break;
      default:
        break;
    }

    let cartInfo = "";
    switch (type) {
      case "offers":
        cartInfo = "card__offers";
        break;
      case "selling":
        cartInfo = "card__selling";
        break;
      case "popular":
        cartInfo = "card__popular";
        break;
      default:
        break;
    }

    return (
      <div data-testid="card-product" className={className}>
        <img src={url} alt="This is ice-cream-sundae image" />
        <div className={cartInfo}>
          <Text text="Cottage Cheese" />
          {visibleQuantity && <p className="card__unit">3kg</p>}
          <Price type="original" value={100} currency="$" />
          {visibleDiscountPrice && (
            <Price type="discount" value={150} currency="$" />
          )}
        </div>
        {visibleCounter && (
          <div className="card__counter">
            <Counter />
            <div className="card__icon">
              <Icon iconName="cart" />
            </div>
          </div>
        )}
      </div>
    );
  }
);

export default CardProduct;
