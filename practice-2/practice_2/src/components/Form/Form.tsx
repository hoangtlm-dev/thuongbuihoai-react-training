import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import fetchCategory from "../../hooks/fetchCategory";
import { CategoriesProps } from "../../types/categories";
import { ProductPropRouter, ProductType } from "../../types/product";
import { SUCCESS_MSG } from "../../constants/message";
import { ProductListContext } from "../../App";
import { FormProps } from "../../types/form";
import "./form.css"

const Form: React.FC<FormProps> = ({ id, hideModalUpdate, onChangeProductDetail }) => {
  const location = useLocation()
  const product: ProductType = (location.state as ProductPropRouter).product
  const [productEdit, setProductEdit] = useState<ProductType>(product)
  const categories = fetchCategory();
  const setIsReset = useContext(ProductListContext) as Function
  const [image, setImage] = useState([])

  useEffect(() => {
    return () => {
      image && URL.revokeObjectURL(image.preview)
    }
  }, [image])

  const handleUpdateProduct = async (id: string) => {
    await axios.put("products/"+ id,
      {...productEdit}
    )
    .then(function (response) {
      setIsReset(true)
      onChangeProductDetail(response.data)
      alert(SUCCESS_MSG.MESSAGE_UPDATE_PRODUCT)
      hideModalUpdate(false)
    })
    .catch(function (error) {
      alert(error)
    });
  }

  const handleChange = (event: { target: { value: {}; name: string; } }) => {
    const value = event.target.value
    const key = event.target.name
    setProductEdit({...productEdit, [key]: value})
    const file = event.target.files[0]
    file.preview = URL.createObjectURL(file)
    console.log("file", file);
    file.name = "src/assets/image" + file.name
    console.log("file.name", file.name);

    setImage(file)
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
            <div id="form__number" className="form-control">
              <div className="form__price">
                <label htmlFor="">Price: </label>
                <input className="modal__input" type="number" name="price" onChange={handleChange} value={productEdit.price} />
              </div>
              <div className="form__quantity">
                <label htmlFor="">Quantity: </label>
                <input className="modal__input" type="number" name="quantity" onChange={handleChange} value={productEdit.quantity} />
              </div>
            </div>
            <div className="form-control">
              <div className="form__img--list">
                {product.images.map((img: string, index: number) =>
                  <img key={index} className="form__img" src={img} />
                )}
                <input type="file" multiple name="images" onChange={handleChange} className="form__input--img"/>
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

export default Form;
