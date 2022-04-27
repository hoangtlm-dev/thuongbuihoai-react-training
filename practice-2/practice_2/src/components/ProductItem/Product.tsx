import React from "react";
import { Link } from "react-router-dom"
import { ProductProps } from "../../types/product";
import "./product.css"

export default function Products ({ id, image }: ProductProps) {
  return (
    <div className="product">
      <img
        className="product__image"
        src={image.src}
        alt={image.alt}
      />
      <p className="product__view">
        <Link className="product__link" to="/detail">Quick view</Link>
      </p>
    </div>
  )
}