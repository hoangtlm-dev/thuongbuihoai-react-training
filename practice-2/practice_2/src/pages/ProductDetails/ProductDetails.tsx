import React from "react";
import { ProductDetailProps } from "../../types/product";
import Description from "../../components/Description/Description";
import Price from "../../components/Price/Price";
import Title from "../../components/common/Title/Title";
import "./productDetail.css"
import { useLocation } from "react-router-dom";

export default function ProductDetails({ image }: ProductDetailProps) {
  const location = useLocation()
  const { product } = location.state

  console.log("pro", product);
  

  return (
    <div className="productDetails">
      <div className="productDetails__img--left">
        <img
          src={product.images[0]}
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
        <Price value={product.price} />
        <Title value={product.name} />
        <input className="productDetails__input" type="number" placeholder="1" />
        <Description value={product.description} />
      </div>
    </div>
  );
}