import React, { useState } from "react";
import { ProductDetailProps } from "../../types/product";
import Description from "../../components/Description/Description";
import Price from "../../components/Price/Price";
import Title from "../../components/common/Title/Title";
import "./productDetail.css"
import { useLocation } from "react-router-dom";
import ModalDelete from "../../components/Modal/ModalDelete/ModalDelete";

export default function ProductDetails({ image }: ProductDetailProps) {
  const location = useLocation()
  const { product } = location.state

  const [open, setOpen] = useState(false)

  const showModal = () => {
    setOpen(true)
  }

  const hideModal = () => {
    setOpen(false)
  }

  return (
    <>
      <div className="productDetails">
        <div className="productDetails__img--left">
          <img
            src={product.images[0]}
            alt={image.alt} />
        </div>
        <div className="productDetails__img--right">
          {product.images.map((img: string) => <img
            src={img}
            alt={image.alt} />
          )}
        </div>
        <div className="productDetails__info">
          <Price value={product.price} />
          <Title value={product.name} />
          <input className="productDetails__input" type="number" placeholder="1" />
          <Description value={product.description} />
          <button onClick={showModal}>Delete</button>
        </div>
      </div>
      {
        open? (
          <ModalDelete isShowing={hideModal} id={product.id} />
        ) : (
          ""
        )
      }
    </>
  );
}