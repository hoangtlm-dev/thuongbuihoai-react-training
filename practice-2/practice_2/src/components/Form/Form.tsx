import React, { useContext, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import fetchCategory from "../../hooks/fetchCategory";
import { FormProps } from "../../types/form";
import { CategoriesProps } from "../../types/categories";
import { ProductPropRouter } from "../../types/product";
import { SUCCESS_MSG } from "../../constants/message";
import { ProductListContext } from "../../App";
import "./form.css"

export default function Form({ id, hideModalUpdate }: FormProps) {
  const location = useLocation()
  const { product } = location.state as ProductPropRouter
  const [productEdit, setProductEdit] = useState(product)
  const categories = fetchCategory();
  const setIsReset = useContext(ProductListContext) as Function
  console.log("setIsReset", setIsReset);

  const handleUpdateProduct = async (id: string) => {
    await axios.put("products/"+ id,
      {...productEdit}
    )
    .then(function (response) {
      console.log("abc", response)
    })
    .catch(function (error) {
      // console.log(error);
    });

    setIsReset(true)
    alert(SUCCESS_MSG.MESSAGE_UPDATE_PRODUCT)
    hideModalUpdate(false)
  }

  const handleChange = (event: { target: { value: {}; name: string; } }) => {
    const value = event.target.value
    const key = event.target.name
    setProductEdit({...productEdit, [key]: value})
  }

  return (
    <div className="modals" id="bookDeleteModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title" id="productModalLabel">Edit Product Information</h4>
          </div>
          <div className="modal-body">
            <div className="form-control">
              <label htmlFor="">Product name: </label>
              <input className="form__input" type="text" onChange={handleChange} name="name" value={productEdit.name} />
            </div>
            <div className="form-control">
              <label htmlFor="">Description: </label>
              <textarea className="form__text" value={productEdit.description} onChange={handleChange} name="description" id="" cols={30} rows={5}></textarea>
            </div>
            <div className="form-control">
              <label htmlFor="">Categories: </label>
              <select className="form__select" name="categoryId" onChange={handleChange} id="">
                {categories.map((cate: CategoriesProps, index: number) =>
                  <option key={index} value={cate.id} selected={productEdit.categoryId == cate.id}>{cate.name}</option>
                )}
              </select>
            </div>
            <div className="form-control">
              <label htmlFor="">Quantity: </label>
              <input className="modal__input" type="number" name="quantity" onChange={handleChange} value={productEdit.quantity} />
            </div>
            <div className="form-control">
              <div className="form__img--list">
                {product.images.map((img: string, index: number) => 
                  <img key={index} className="form__img" src={img} />
                )}
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn__submit" onClick={() => handleUpdateProduct(id)}>Submit</button>
            <button className="btn btn__cancel" onClick={() => hideModalUpdate(false)}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}