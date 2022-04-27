import React from "react";
import { cardImage } from "../../constants/card";
import Price from "../../components/Price/Price";
import Products from "../../components/ProductItem/Product";
import Title from "../../components/common/Title/Title";
import "./card.css"

export default function CardItem() {
  return (
    <div className="card">
      <Products id="1" image={cardImage} />
      <div className="card__content">
        <Title className={""} value="Build Your Pizza" />
        <Price children="50000" />
      </div>
    </div>
  );
}