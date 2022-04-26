import React from "react";
import { ProductProps } from "../../../types/product";
import Description from "../../Description/Description";
import Price from "../../Price/Price";
import Title from "../../Title/Title";
import "./productDetail.css"

export default function ProductDetails({ image }: ProductProps) {

  return (
    <div className="productDetails">
      <div className="productDetails__img--left">
        <img
          src={image.src}
          alt={image.alt}
        />
      </div>
      <div className="productDetails__img--right">
        <img
          src={image.src}
          alt={image.alt}
        />
        <img
          src={image.src}
          alt={image.alt}
        />
        <img
          src={image.src}
          alt={image.alt}
        />
      </div>
      <div className="productDetails__info">
        <Price children="55000" />
        <Title children="Build Your Pizza" />
        <input className="productDetails__input" type="number" placeholder="1" />
        <Description children="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo." />
      </div>
    </div>
  );
}