import React, { useCallback, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "@context/DataContext";
import { Product } from "@common-types/product";
import Price from "@components/Price/Price";
import Title from "@components/common/Title/Title";
import Text from "@components/Text/Text";
import ModalUpdate from "@components/Modal/ModalUpdate/ModalUpdate";
import toast from "react-hot-toast";
import "./productDetail.css";

const ProductDetails: React.FC = () => {
  // use useParams to get id
  const { id } = useParams();
  const { products } = useContext(DataContext);
  const dataElement = products?.find((item) => item.id === id);
  const [openModalUpdate, setOpenModalUpdate] = useState<boolean>(false);
  const [product, setProduct] = useState<Product | undefined>(dataElement);

  // update product detail
  const updateProductDetail = (response: Product) => {
    try {
      setProduct(response);
    } catch (error: any) {
      toast.error(error);
    }
  };

  // handle toggle modal update
  const toggleModalUpdate = useCallback(() => {
    setOpenModalUpdate(!openModalUpdate);
  }, [openModalUpdate]);

  return (
    <>
      <div data-testid="product-detail-page" className="productDetails">
        <div className="productDetails__img--left">
          <img className="product__image" src={product?.images[0]} />
        </div>
        <div className="productDetails__img--right">
          {product?.images.map((img: string, key: number) => (
            <img key={key} src={img} />
          ))}
        </div>
        <div className="productDetails__info">
          <div className="productDetail__update">
            <Title className="productDetail__title" text={product?.name} />
            <button
              data-testid="open-modal-update"
              className="btn btn__update"
              onClick={toggleModalUpdate}
            >
              <i className="fa fa-pen"></i>
            </button>
          </div>
          <Price className="productDetail__price" value={product?.price} />
          <input
            className="productDetails__input"
            min={0}
            type="number"
            defaultValue={product?.quantity}
          />
          <Text text={product?.description} />
        </div>
      </div>
      {openModalUpdate && (
        <ModalUpdate
          product={product!}
          hideModalUpdate={toggleModalUpdate}
          updateProductDetail={updateProductDetail}
          deleteImage={() => {}}
        />
      )}
    </>
  );
};

export default ProductDetails;
