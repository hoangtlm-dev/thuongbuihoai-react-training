import React from "react";
import Button from "../common/Button/Button";
import "./form.css"

export default function Form() {
  return (
    <div className="modal" id="bookDeleteModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title" id="productModalLabel">Edit Product Information</h4>
          </div>
          <div className="modal-body">
            <div className="form-control">
              <label htmlFor="">Product name: </label>
              <input type="text" />
            </div>
            <div className="form-control">
              <label htmlFor="">Description: </label>
              <textarea className="form__text" name="" id="" cols={30} rows={5}></textarea>
            </div>
            <div className="form-control">
              <label htmlFor="">Categories: </label>
              <select className="form__select" name="" id="">
                <option value="">Cake</option>
                <option value="">Ice Cream</option>
              </select>
            </div>
            <div className="form-control">
              <label htmlFor="">Quantity: </label>
              <input className="modal__input" type="number" value={1} />
            </div>
            <div className="form-control">
              <input type="file" name="filefield" />
            </div>
          </div>
          <div className="modal-footer">
            <Button className="btn btn__submit" value="Submit" />
            <Button className="btn btn__cancel" value="Cancel" />
          </div>
        </div>
      </div>
    </div>
  );
}