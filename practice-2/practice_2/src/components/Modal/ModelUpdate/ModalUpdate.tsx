import axios from "axios";
import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import useCategory from "../../../hooks/useCategory";
import { CategoriesProps } from "../../../types/categories";
import { ProductUpdateProps, ProductProps } from "../../../types/product";
import { SUCCESS_MSG } from "../../../constants/message";
import { ProductListContext } from "../../../App";
import { ModalUpdateProps } from "types/modal";
import { PRODUCT_CRUD } from "../../../constants/url";
import "./modalUpdate.css";

const ModalUpdate: React.FC<ModalUpdateProps> = ({ id, hideModalUpdate, onChangeProductDetail }) => {
  const location = useLocation();
  const product: ProductProps = (location.state as ProductUpdateProps).product;
  const [productEdit, setProductEdit] = useState<ProductProps>(product);

  const categories = useCategory();
  const [selectedFile, setSelectedFile] = useState([]);

  const handleUpdateProduct = async (id: string) => {
    for (let i = 0; i < selectedFile.length; i++) {
      productEdit.images.push("src/assets/images/" + selectedFile[i].name);
    }
      await axios ({
        method: "put",
        url: PRODUCT_CRUD + id,
        data:{...productEdit},
      })
      .then(function (response) {
        onChangeProductDetail(response.data);
        alert(SUCCESS_MSG.MESSAGE_UPDATE_PRODUCT);
        hideModalUpdate(false);
      })
      .catch(function (error) {
        alert(error);
      });
    }

  const handleChange = (event: { target: { value: {}; name: string; } }) => {
    const value = event.target.value;
    const key = event.target.name;
    setProductEdit({...productEdit, [key]: value});
  }

  const imageChange = (event: React.ChangeEvent) => {
    const target= event.target;
    if(target.files) {
      for (let i = 0; i < event.target.files.length; i++) {
        setSelectedFile(selectedFile => [...selectedFile, target.files[i]] as any);
      }
    }
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
                <input className="modal__input" type="number" min="0" name="price" onChange={handleChange} value={productEdit.price} />
              </div>
              <div className="form__quantity">
                <label htmlFor="">Quantity: </label>
                <input className="modal__input" type="number" min="0" name="quantity" onChange={handleChange} value={productEdit.quantity} />
              </div>
            </div>
            <div className="form-control">
              <div className="form__img--list">
                {product.images.map((img: string, index: number) =>
                  <img key={index} className="form__img" src={img} />
                )}
                <input type="file" id="file" multiple name="images" onChange={imageChange} className="form__input--img"/>
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

export default ModalUpdate;
