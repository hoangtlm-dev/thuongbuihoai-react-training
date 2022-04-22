import React from "react";
import { cardImage } from "../../../constants/card";
import Price from "../../Price/Price";
import Products from "../../Product/Product";
import Title from "../../Title/Title";
import "../card.css"

export default function CardItem() {

  return (
    <div className="card">
      <Products image={cardImage} />
      <div className="card__content">
        <Title className={""} children="Banh kem" />
        <Price children="50000" />
      </div>
    </div>
  );
}