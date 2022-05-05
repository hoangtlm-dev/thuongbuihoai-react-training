import React, { useState } from "react";
import { Link } from "react-router-dom"
import { ProductProps } from "../../types/product";
import Button from "../common/Button/Button";
import ModalDelete from "../Modal/ModalDelete/ModalDelete";
import "./productItem.css"

const ProductItem: React.FC<ProductProps> = ({ product }) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className="product">
        <img
          className="product__image"
          src={product.images[0]}
        />
        <p className="product__view">
          <Link className="product__link" state={{ product }} to="/detail">
            <Button className="btn btn__view" value={<i className="fa fa-search"></i>} />
          </Link>
          <Button className="btn btn__delete" value={<i onClick={() => setOpen(true)} className="fa fa-trash"></i>} />
        </p>
      </div>
      {open && <ModalDelete hideModal={setOpen} id={product.id} />}
    </>
  )
}

export default ProductItem;
