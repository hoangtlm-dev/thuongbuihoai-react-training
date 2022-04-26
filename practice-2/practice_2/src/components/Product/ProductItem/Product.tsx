import React from "react";
import { ProductProps } from "../../../types/product";
import "./product.css"

export default function Products({ image }: ProductProps) {

  return (
    <div className="product">
      <img
        className="product__image"
        src={image.src}
        alt={image.alt}
      />
      <p className="product__view"><a href="">Quick view</a></p>
    </div>
  );
}
