import React, { useContext } from "react";
import axios from "axios";
import { ModalDeleteProps } from "../../../types/modal";
import { SUCCESS_MSG } from "../../../constants/message";
import { ProductListContext } from "../../../App";
import "./modalDelete.css"

export default function ModalDelete({ id, hideModal }: ModalDeleteProps) {
  const setIsReset = useContext(ProductListContext) as Function
  console.log("setIsReset", setIsReset);
  const handleDeleteProduct = async (id: string) => {
   await axios.delete("products/"+ id)
    .catch(function (error) {
      console.log(error.toJSON());
    });

    setIsReset(true)
    alert(SUCCESS_MSG.MESSAGE_DELETE_PRODUCT)
    hideModal(false)
  }

  return (
    <div className="modal" id="showModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <span>Are you sure to delete this product?</span>
          </div>
          <div className="modal-footer">
            <button className="btn btn__no" onClick={() => hideModal(false)}>No</button>
            <button className="btn btn__yes" onClick={() => handleDeleteProduct(id)}>Yes</button>
          </div>
        </div>
      </div>
    </div>
  )
}