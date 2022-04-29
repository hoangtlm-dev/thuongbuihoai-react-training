import axios from "axios";
import { ModalDeleteProps } from "../../../types/modal";
import Button from "../../common/Button/Button";
import "./modalDelete.css"

export default function ModalDelete({ id }: ModalDeleteProps) {
  const handleDeleteProduct = (id: string) => {
    axios.delete("products/"+ id)
    .catch(function (error) {
      console.log(error.toJSON());
    });
  }

  return (
    <div className="modal" id="showModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title" id="productModalLabel">Delete product</h4>
          </div>
          <div className="modal-body">
            <span>Are you sure to delete this product?</span>
          </div>
          <div className="modal-footer">
            <Button value="No" className="btn btn-secondary" />
            <Button onClick={() => handleDeleteProduct(id)} value="Yes" className="btn btn-primary" />
          </div>
        </div>
      </div>
    </div>
  )
}