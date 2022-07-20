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
  type="normal",
  content="discount",
  visibleQuantity,
  visibleDiscountPrice,
  visibleCounter,
  productList,
}) => {
  let className = "product-list";
  switch (type) {
    case "normal":
      className = `${className}-${type}`;
      break;
    case "medium":
      className = `${className}-${type}`;
      break;
    case "medium-box":
      className = `${className}-${type}`;
      break;
    default:
      throw new Error("Invalid type");
  }

  let cartInfo = "card";
  switch (content) {
    case "discount":
      cartInfo = `${cartInfo}-${content}`;
      break;
    case "quantity":
      cartInfo = `${cartInfo}-${content}`;
      break;
    default:
      throw new Error("Invalid content");
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
            className="card-image"
            src={product.images.src}
            alt={product.images.alt}
          />
          <div className={cartInfo}>
            <Link className="cart-link" to={`/products/${product?.productId}`}>
              <Text size="normal" decoration="" text={product?.productName} />
            </Link>
            {visibleQuantity && (
              <p className="card-unit">{product?.offerQuantity}</p>
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
            <div className="card-counter">
              <Counter counter={product.productQuantity} />
              <div className="card-icon">
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
