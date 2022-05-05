import React, { useState } from "react";
import { ProductPropRouter } from "../../types/product";
import Description from "../../components/Description/Description";
import Price from "../../components/Price/Price";
import Title from "../../components/common/Title/Title";
import { useLocation } from "react-router-dom";
import Button from "../../components/common/Button/Button";
import Form from "../../components/Form/Form";
import "./productDetail.css"

const ProductDetails: React.FC = () => {
  const location = useLocation()
  const { product }  = location.state as ProductPropRouter;
  const [openModalUpdate, setOpenModalUpdate] = useState(false)

  const handleChangeProductDetail = (newProduct: {}) => {
    (location.state).product = newProduct
  }

  return (
    <>
      <div className="productDetails">
        <div className="productDetails__img--left">
          <img
            src={product.images[0]}
            alt="This is image" />
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
            <Button className="btn btn__update" value={<i onClick={() => setOpenModalUpdate(true)} className="fa fa-pen"></i>} />
          </div>
          <Title value={product.name} />
          <input className="productDetails__input" type="number" value={product.quantity} />
          <Description value={product.description} />
        </div>
      </div>
      {openModalUpdate && <Form id={product.id} onChangeProductDetail={handleChangeProductDetail} hideModalUpdate={setOpenModalUpdate} />}
    </>
  );
}

export default ProductDetails;
