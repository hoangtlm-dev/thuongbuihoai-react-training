import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { ProductProps } from "../../types/product";
import "./product.css"

export default function Products ({ product }: ProductProps) {
  return (
    <div className="product">
      <img
        className="product__image"
        src={product.images[0]}
      />
      <p className="product__view">
        <Link className="product__link" state={{ product }} to="/detail">Quick view</Link>
      </p>
    </div>
  )
}