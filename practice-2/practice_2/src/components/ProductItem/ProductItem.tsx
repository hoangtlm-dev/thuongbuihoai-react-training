import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom"
import { ProductItemProps } from "@/types/product";
import Button from "../Button/Button";
import ModalDelete from "../Modal/ModalDelete/ModalDelete";
import "./productItem.css";

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const handleOpenModalDelete = useCallback(() => {
    setOpenModalDelete(true)
  }, []);

  return (
    <>
      <div className="product">
        <img
          className="product__image"
          src={product.images[0]}
        />
        <div className="product__view">
          <Link className="product__link" state={{ product }} to="/detail">
            <Button className="btn btn__view" text={<i className="fa fa-search"></i>} />
          </Link>
          <Button className="btn btn__delete" text={<i onClick={handleOpenModalDelete} className="fa fa-trash"></i>} />
        </div>
      </div>
      {openModalDelete && <ModalDelete hideModalDelete={setOpenModalDelete} id={product.id} />}
    </>
  );
}

export default ProductItem;
