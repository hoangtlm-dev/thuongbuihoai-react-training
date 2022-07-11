import useSWR from "swr";
import React, { memo } from "react";
import { Link } from "react-router-dom";
import { Product } from "@common-types/product";
import { PRODUCTS_URL } from "@constants/url";
import { getData } from "@helpers/fetchApi";
import Text from "@components/common/Text/Text";
import Price from "@components/common/Price/Price";
import Counter from "@components/common/Counter/Counter";
import Icon from "@components/common/Icon/Icon";
import "./cardProduct.css";

interface CartProductProps {
  type: string;
  content: string;
  isOffer: boolean;
  isPopular: boolean;
  isBestSelling: boolean;
  visibleQuantity?: boolean;
  visibleDiscountPrice?: boolean;
  visibleCounter?: boolean;
}

const CardProduct: React.FC<CartProductProps> = memo(
  ({
    type,
    isOffer,
    isPopular,
    isBestSelling,
    visibleQuantity,
    visibleDiscountPrice,
    visibleCounter,
  }) => {
    const filter = {
      offer: isOffer.toString(),
      popular: isPopular.toString(),
      bestSelling: isBestSelling.toString()
    }
    const queryParams: URLSearchParams = new URLSearchParams(filter);
    const { data } = useSWR(PRODUCTS_URL + "?" + queryParams.toString(), getData<Product[]>);

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
        {data?.map((product) => (
          <div key={product.productId}>
            <img className="card__image" src={product.images.src} alt={product.images.alt} />
            <div className={cartInfo}>
            <Link className="cart__link" to={`/products/${product?.productId}`}>
              <Text text={product?.productName} />
            </Link>
            {visibleQuantity && (
              <p className="card__unit">{product?.offerQuantity}</p>
            )}
            <Price
              type="original"
              value={product?.originalPrice.value}
              currency={product?.originalPrice.currency} />
            {visibleDiscountPrice && (
              <Price
                type="discount"
                value={product?.discountPrice.value}
                currency={product?.discountPrice.currency} />
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
        ))}
      </div>
    );
  }
);

export default CardProduct;
