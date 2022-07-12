import React, { memo, useContext } from "react";
import { DataContext } from "@context/DataContext";
import { useParams } from "react-router-dom";
import NavigationBar from "@components/common/NavigationBar/NavigationBar";
import CardProductList from "@components/CardProduct/CardProductList";
import background from "@assets/images/backgrounds/gray.png";
import Text from "@components/common/Text/Text";
import Price from "@components/common/Price/Price";
import Counter from "@components/common/Counter/Counter";
import Button from "@components/common/Button/Button";
import "./productDetail.css";

const ProductDetail: React.FC = memo(() => {
  const { id } = useParams();
  const { products } = useContext(DataContext);
  const dataElement = products?.find((item) => item.productId === id);

  return (
    <div data-testid="product-detail" className="productDetail">
      <NavigationBar isThemeDark={true} />
      <figure>
        <img className="productDetail--image" src={dataElement?.images.src} alt={dataElement?.images.alt} />
        <img
          className="productDetail--background"
          src={background}
          alt="This is background"
        />
      </figure>
      <div className="productDetail__info">
        <Text text={dataElement?.productName} type="large" />
        <p className="productDetail__price">Price</p>
        <Price value={dataElement?.originalPrice.value} type="original" currency={dataElement?.originalPrice.currency} />
        <p className="productDetail__description"></p>
        <p className="productDetail__quantity">Quantity</p>
        <div className="productDetail__counter">
          <Counter counter={dataElement?.productQuantity} />
        </div>
        <div className="productDetail--btn">
          <Button text="Add to cart" type="large" />
        </div>
      </div>
      <div className="productDetail--more">
        <div className="productDetail__title">
          <Text text="Products you may like" type="large-dark" />
        </div>
        <div className="productDetail-popular">
          <CardProductList type="popular" visibleCounter={true} content="popular" />
        </div>
      </div>
    </div>
  );
});

export default ProductDetail;
