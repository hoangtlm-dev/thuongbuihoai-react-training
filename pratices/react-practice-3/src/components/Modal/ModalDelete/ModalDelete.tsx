import React from "react";
import Button from "@components/common/Button/Button/Button";
import "../modal.css";

interface ModalDeleteProps {
  id: string;
  hideModalDelete: () => void;
  deleteProduct: (id: string) => void;
}

const ModalDelete: React.FC<ModalDeleteProps> = ({ id, hideModalDelete, deleteProduct }) => {
  return (
    <div data-testid="modal-delete" className="modal-delete" id="showModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <span className="modal-title">Are you sure to delete this product?</span>
          </div>
          <div className="modal-footer">
            <Button text="No" type="warning" onClick={hideModalDelete} />
            <Button text="Yes" type="success" onClick={() => deleteProduct(id)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
