import React, { useCallback, useContext, useEffect, useState } from "react";
import { Product, ProductUpdateProps } from "@/types/product";
import Title from "../components/Title/Title";
import Text from "../components/Text/Text";
import Price from "../components/Price/Price";
import { Link, useLocation } from "react-router-dom";
import Button from "@/components/Button/Button";
import ModalUpdate from "@/components/Modal/ModelUpdate/ModalUpdate";
import { LoadingContext } from "@/context/LoadingContext";
import "./productDetail.css";

const ProductDetails: React.FC = () => {
  const location = useLocation();
  const { product }  = location.state as ProductUpdateProps;
  const [openModalUpdate, setOpenModalUpdate] = useState(false);

  const handleOpenModalUpdate = useCallback(() => {
    setOpenModalUpdate(true)
  }, []);

  const handleChangeProductDetail = (newProduct: {}) => {
    (location.state as Product).product = newProduct;
  }

  const {setIsReload} = useContext(LoadingContext);
  const handleBackToHome = () => {
    setIsReload(true);
  }

  if(!product) {
    return <div>Loading...</div>
  }

  return (
    <>
      <div className="productDetails">
        <div className="productDetails__img--left">
          <img
            className="product__image"
            src={product.images[0]}
          />
        </div>
        <div className="productDetails__img--right">
          {product.images.map((img: string, index: number) =>
            <img
              key={index}
              src={img}
              alt="This is image"
            />
            )
          }
        </div>
        <div className="productDetails__info">
          <div className="productDetail__update">
            <Price value={product.price.toString()} />
            <Button className="btn btn__update" text={<i onClick={handleOpenModalUpdate} className="fa fa-pen"></i>} />
          </div>
          <Title text={product.name} />
          <input className="productDetails__input" type="number" value={product.quantity} />
          <Text text={product.description} />
          <Link className="product__links" to="/">
            <Button onClick={handleBackToHome} className="btn btn__view" text={<div className="product__prev"><i className="fa-solid fa-circle-left"></i><p>Back to home</p></div>} />
          </Link>
        </div>
      </div>
      {openModalUpdate && <ModalUpdate product={product} onChangeProductDetail={handleChangeProductDetail} hideModalUpdate={setOpenModalUpdate} />}
    </>
  );
}

export default ProductDetails;
