import axios from "axios";
import React, { useState } from "react";
import useCategory from "@/hooks/useCategory";
import { CategoriesProps } from "@/types/categories";
import { SUCCESS_MSG } from "@/constants/message";
import { ModalUpdateProps } from "types/modal";
import { PRODUCT_CRUD } from "@/constants/url";
import "./modalUpdate.css";
import getBase64 from "@/helpers/getBase64";

const ModalUpdate: React.FC<ModalUpdateProps> = ({ product, hideModalUpdate, onChangeProductDetail }) => {
  const [productEdit, setProductEdit] = useState(product);

  const categories = useCategory();
  const [selectedFile, setSelectedFile] = useState([]);

  const handleUpdateProduct = async (id: string) => {
    for (let i = 0; i < selectedFile.length; i++) {
      productEdit.images.push(selectedFile[i]);
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

  const imageChange = async (event: { target: { files: any; }; }) => {
    const files = event.target.files;
    if(files) {
      for (let i = 0; i < files.length; i++) {
        const imageSrc = await getBase64(files[i]);
        setSelectedFile(selectedFile=>[...selectedFile, imageSrc])
      }
      console.log("selected file", selectedFile);
    }
  }

  const handleDeleteImage = (event: React.ChangeEvent) => {
    const target = event.target as Element;
    const indexOfArr = productEdit.images.findIndex(item=> item == (target as HTMLImageElement).dataset.id);
    productEdit.images.splice(indexOfArr, 1);
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
                  <img key={index} data-id={img} className="form__img" onClick={handleDeleteImage} src={img} />
                )}
                <input type="file" id="file" onChange={imageChange} multiple name="images" className="form__input--img"/>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn__submit" onClick={() => handleUpdateProduct(product.id)}>Submit</button>
            <button className="btn btn__cancel" onClick={() => hideModalUpdate(false)}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalUpdate;
