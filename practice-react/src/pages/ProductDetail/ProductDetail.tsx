import React, { memo } from "react";
import NavigationBar from "@components/common/NavigationBar/NavigationBar";
import CardProductList from "@components/CardProduct/CardProductList";
import url from "@assets/images/eco-face-cream.png";
import background from "@assets/images/backgrounds/gray.png";
import Text from "@components/common/Text/Text";
import Price from "@components/common/Price/Price";
import Counter from "@components/common/Counter/Counter";
import Button from "@components/common/Button/Button";
import "./productDetail.css";

const ProductDetail: React.FC = memo(() => {
  return (
    <div className="productDetail">
      <NavigationBar isThemeDark={true} />
      <figure>
        <img className="productDetail--image" src={url} alt="" />
        <img
          className="productDetail--background"
          src={background}
          alt="This is background"
        />
      </figure>
      <div className="productDetail__info">
        <Text text="Eco-Face cleanser." type="large" />
        <p className="productDetail__price">Price</p>
        <Price value={100} type="original" currency="$" />
        <p className="productDetail__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam molestie ultrices donec pulvinar quis est bibendum suspendisse viverra.</p>
        <p className="productDetail__quantity">Quantity</p>
        <div className="productDetail__counter">
          <Counter counter={0} />
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
