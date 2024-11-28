import useSWR from "swr";
import React, { ChangeEvent, useCallback, useContext, useState } from "react";
import toast from "react-hot-toast";
import getBase64 from "@helpers/getBase64";
import InputValue from "@components/Input/InputValue/InputValue";
import Button from "@components/common/Button/Button/Button";
import { FieldName, FormProps } from "@common-types/form";
import { Product } from "@common-types/product";
import { RULES } from "@constants/rules";
import { validate } from "@helpers/validate";
import { CategoryProps } from "@common-types/category";
import { SUCCESS_MSG } from "@constants/message";
import { getData, update } from "@helpers/apiHandle";
import { setFieldsValue } from "@helpers/fieldHandle";
import { CATEGORIES_URL, PRODUCTS_URL } from "@constants/url";
import { DataContext } from "@context/DataContext";
import { Action } from "@common-types/data";
import "../modal.css";

interface ModalUpdateProps {
  product: Product;
  hideModalUpdate: () => void;
  deleteImage: () => void;
  updateProductDetail: (product: Product) => void;
}

const ModalUpdate: React.FC<ModalUpdateProps> = ({
  product,
  hideModalUpdate,
  updateProductDetail,
}) => {
  // fetch data with useSWR
  const { data } = useSWR(CATEGORIES_URL, getData<CategoryProps[]>);
  const {dispatch} = useContext(DataContext);
  // create state to handle select file image
  const [selectedFile, setSelectedFile] = useState<string[]>([]);
  // create state to update product
  const [productEdit, setProductEdit] = useState<Product>(product);
  const updateProduct = async (id: string, productData: Product) => {
    const productEdit: Product = {
      id: productData.id,
      categoryId: productData.categoryId,
      name: productData.name,
      price: +productData.price,
      quantity: +productData.quantity,
      description: productData.description,
      images: productData.images,
    };
    try {
      const response = await update(`${PRODUCTS_URL}/${id}`, productEdit);
      if(response) {
        dispatch({
          action: Action.UpdateProductSuccess,
          payload: {...response.data}
        });
        updateProductDetail(response.data);
      }
      toast.success(SUCCESS_MSG.MESSAGE_UPDATE_PRODUCT);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const [formValues, setFormValues] = useState<FormProps>({
    categoryId: {
      value: productEdit?.categoryId,
      rules: [RULES.REQUIRED],
      error: "",
    },
    name: {
      value: productEdit?.name,
      rules: [RULES.REQUIRED],
      error: "",
    },
    price: {
      value: productEdit?.price.toString(),
      rules: [RULES.REQUIRED, RULES.NUMBER, RULES.NEGATIVE],
      error: "",
    },
    quantity: {
      value: productEdit?.quantity.toString(),
      rules: [RULES.REQUIRED, RULES.NUMBER, RULES.NEGATIVE],
      error: "",
    },
    description: {
      value: productEdit?.description,
      rules: [RULES.REQUIRED],
      error: "",
    },
    images: {
      value: productEdit?.images.toString(),
      rules: [],
      error: "",
    }
  });

  // handle update product
  const handleUpdateProduct = (id: string, productEdit: Product) => {
    for (let i = 0; i < selectedFile.length; i++) {
      productEdit.images.push(selectedFile[i]);
    }

    // validate form
    setFormValues(validate(formValues));
    const temp = (Object.keys(formValues) as (keyof typeof formValues)[]).map(
      (fieldName) => {
        if (formValues[fieldName].error) {
          return false;
        }
      }
    );

    if (!temp.includes(false)) {
      setFormValues({...formValues});
      updateProduct(id, productEdit);
      hideModalUpdate();
    }
  };

  // handle change value
  const handleChange = useCallback((event: { target: { value: string; name: string } }) => {
    const value = event.target.value;
    const fieldName = event.target.name as FieldName;
    setProductEdit({ ...productEdit, [fieldName]: value });
    setFormValues(setFieldsValue(formValues, value, fieldName));
  }, [productEdit]);

  // handle change image
  const imageChange = useCallback(async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    const newFiles = [];
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const imageSrc = await getBase64(files[i]);
        newFiles.push(imageSrc)
      }
    }
    setSelectedFile([...selectedFile, ...newFiles]);
  }, [selectedFile]);

  // handle delete image
  const handleDeleteImage = useCallback((event: { target: EventTarget }) => {
    const target = event.target as Element;
    const indexOfArr = productEdit.images.findIndex(
      (item: string) => item == (target as HTMLInputElement).dataset.id
    );
    const indexOf = selectedFile.findIndex(
      (item: string) => item == (target as HTMLInputElement).dataset.id
    );
    selectedFile.splice(indexOf, 1);
    productEdit.images.splice(indexOfArr, 1);
    setSelectedFile([...selectedFile]);
  },[selectedFile]);

  return (
    <div data-testid="modal-update" className="modal-update">
      <div className="modal-dialog-modalUpdate">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-heading" id="productModalLabel">
              Edit Product Information
            </h4>
          </div>
          <div className="modal-body">
            <div className="form-control">
              <label htmlFor="">Product name: </label>
              <InputValue
                type="text"
                name="name"
                value={productEdit?.name}
                onChange={handleChange}
              />
              <small className="form__error">
                {formValues.name.error}
              </small>
            </div>
            <div className="form-control">
              <label htmlFor="">Description: </label>
              <textarea
                data-testid="change-value"
                className="input__text"
                cols={30}
                rows={5}
                value={productEdit?.description}
                name="description"
                onChange={handleChange}
              ></textarea>
              <small className="form__error">
                {formValues.description.error}
              </small>
            </div>
            <div className="form-control">
              <label htmlFor="">Categories: </label>
              <select
                className="form__select"
                name="categoryId"
                onChange={handleChange}
              >
                {data?.map(({ id, name }: CategoryProps, index: number) => (
                  <option
                    key={index}
                    value={id}
                  >
                    {name}
                  </option>
                ))}
              </select>
              <small className="form__error">
                {formValues.categoryId.error}
              </small>
            </div>
            <div id="form__number" className="form-control">
              <div className="form-control">
                <label htmlFor="">Price: </label>
                <InputValue
                  className="input__number"
                  type="number"
                  min={0}
                  value={productEdit?.price}
                  name="price"
                  onChange={handleChange}
                />
                <small className="form__error">
                  {formValues.price.error}
                </small>
              </div>
              <div className="form-control">
                <label htmlFor="">Quantity: </label>
                <InputValue
                  className="input__number"
                  type="number"
                  min={0}
                  value={productEdit?.quantity}
                  name="quantity"
                  onChange={handleChange}
                />
                <small className="form__error">
                  {formValues.quantity.error}
                </small>
              </div>
            </div>
            <div className="form-control">
              <div className="form__img--list">
                {productEdit?.images?.map((img: string, index: number) => (
                  <img
                    data-testid="delete-image"
                    key={index}
                    className="form__img"
                    data-id={img}
                    src={img}
                    onClick={handleDeleteImage}
                  />
                ))}
                {selectedFile.length > 0 &&
                  selectedFile.map((src, key: number) => (
                    <img
                      data-testid="after-change-file"
                      key={key}
                      className="form__img"
                      data-id={src}
                      src={src}
                      onClick={handleDeleteImage}
                    />
                  ))}
                <input
                  data-testid="change-file"
                  className="form__input--img"
                  type="file"
                  id="file"
                  multiple
                  name="images"
                  onChange={imageChange}
                />
              </div>
            </div>
          </div>
          <div className="modal-footer-modalUpdate">
            <Button
              type="warning"
              onClick={hideModalUpdate}
              text="Cancel"
            />
            <Button
              text="Submit"
              type="success"
              onClick={() => handleUpdateProduct(product.id, productEdit)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalUpdate;
