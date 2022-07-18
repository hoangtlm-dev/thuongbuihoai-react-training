import React from "react";
import { Link } from "react-router-dom";
import { Product } from "@common-types/product";
import Text from "@components/common/Text/Text";
import Price from "@components/common/Price/Price";
import Counter from "@components/common/Counter/Counter";
import Icon from "@components/common/Icon/Icon";
import "./productList.css";

interface CartProductProps {
  type: string;
  content: string;
  visibleQuantity?: boolean;
  visibleDiscountPrice?: boolean;
  visibleCounter?: boolean;
  productList?: Product[];
}

const CardProductList: React.FC<CartProductProps> = ({
  type,
  content,
  visibleQuantity,
  visibleDiscountPrice,
  visibleCounter,
  productList,
}) => {
  let className = "";
  switch (type) {
    case "normal":
      className = "productList__normal";
      break;
    case "medium":
      className = "productList__medium";
      break;
    case "medium-box":
      className = "productList__medium--box";
      break;
    default:
      break;
  }

  let cartInfo = "";
  switch (content) {
    case "discount":
      cartInfo = "card__discount";
      break;
    case "quantity":
      cartInfo = "card__quantity";
      break;
    default:
      break;
  }

  return (
    <>
      {productList?.map((product: Product) => (
        <div
          data-testid="product-list"
          key={product.productId}
          className={className}
        >
          <img
            className="card__image"
            src={product.images.src}
            alt={product.images.alt}
          />
          <div className={cartInfo}>
            <Link className="cart__link" to={`/products/${product?.productId}`}>
              <Text size="normal" text={product?.productName} />
            </Link>
            {visibleQuantity && (
              <p className="card__unit">{product?.offerQuantity}</p>
            )}
            <Price
              type="original"
              value={product?.originalPrice.value}
              currency={product?.originalPrice.currency}
            />
            {visibleDiscountPrice && (
              <Price
                type="discount"
                value={product?.discountPrice.value}
                currency={product?.discountPrice.currency}
              />
            )}
          </div>
          {visibleCounter && (
            <div className="card__counter">
              <Counter counter={product.productQuantity} />
              <div className="card__icon">
                <Icon iconName="cart" />
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default CardProductList;
