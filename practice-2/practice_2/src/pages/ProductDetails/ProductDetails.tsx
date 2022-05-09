import React, { useCallback, useState } from "react";
import { ProductUpdateProps } from "../../types/product";
import Title from "../components/Title/Title";
import Text from "../components/Text/Text";
import Price from "../components/Price/Price";
import { useLocation } from "react-router-dom";
import Button from "../../components/Button/Button";
import ModalUpdate from "../../components/Modal/ModelUpdate/ModalUpdate";
import "./productDetail.css";

const ProductDetails: React.FC = () => {
  const location = useLocation();
  const { product }  = location.state as ProductUpdateProps;
  const [openModalUpdate, setOpenModalUpdate] = useState(false);

  const handleOpenModalUpdate = useCallback(() => {
    setOpenModalUpdate(true)
  }, []);

  const handleChangeProductDetail = (newProduct: {}) => {
    (location.state).product = newProduct;
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
            <Button className="btn btn__update" text={<i onClick={handleOpenModalUpdate} className="fa fa-pen"></i>} />
          </div>
          <Title text={product.name} />
          <input className="productDetails__input" type="number" value={product.quantity} />
          <Text text={product.description} />
        </div>
      </div>
      {openModalUpdate && <ModalUpdate id={product.id} onChangeProductDetail={handleChangeProductDetail} hideModalUpdate={setOpenModalUpdate} />}
    </>
  );
}

export default ProductDetails;
