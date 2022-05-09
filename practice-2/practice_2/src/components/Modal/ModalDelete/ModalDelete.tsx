import axios from "axios";
import React from "react";
import { ModalDeleteProps } from "../../../types/modal";
import { SUCCESS_MSG } from "../../../constants/message";
import { PRODUCT_CRUD } from "../../../constants/url";
import "./modalDelete.css";

const ModalDelete: React.FC<ModalDeleteProps> = ({ id, hideModalDelete }) => {
  const handleDeleteProduct = async (id: string) => {
   await axios.delete(PRODUCT_CRUD + id)
    .catch(function (error) {
      console.log(error.toJSON());
    });

    alert(SUCCESS_MSG.MESSAGE_DELETE_PRODUCT);
    hideModalDelete(false);
  }

  return (
    <div className="modal" id="showModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <span>Are you sure to delete this product?</span>
          </div>
          <div className="modal-footer">
            <button className="btn btn__no" onClick={() => hideModalDelete(false)}>No</button>
            <button className="btn btn__yes" onClick={() => handleDeleteProduct(id)}>Yes</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalDelete;
