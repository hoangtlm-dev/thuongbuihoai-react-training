import useSWR, { Key } from "swr";
import React, { ChangeEvent, useState } from "react";
import { FormProps } from "@/types/form";
import { Product } from "@/types/product";
import { RULES } from "@/constants/rules";
import getBase64 from "@/helpers/getBase64";
import { getData } from "@/helpers/fetchApi";
import { validate } from "@/helpers/validate";
import { ModalCreateProps } from "@/types/modal";
import { CATEGORIES_URL } from "@/constants/url";
import { CategoryProps } from "@/types/category";
import { setFieldsValue } from "@/helpers/fieldHandle";
import InputValue from "@/components/Input/InputValue/InputValue";
import "../modal.css";

const ModalCreate: React.FC<ModalCreateProps> = ({
  hideModalCreate,
  createProduct,
}) => {
  const [newProduct, setNewProduct] = useState([]);
  // fetch data with useSWR
  const key: Key = CATEGORIES_URL;
  const { data } = useSWR(key, getData<Product[]>);
  // create state to handle select file image
  const [selectedFile, setSelectedFile] = useState([]);
  // create state to set form values
  const [formValues, setFormValues] = useState<FormProps>({
    categoryId: {
      value: "",
      rules: [RULES.REQUIRED],
      error: "",
    },
    name: {
      value: "",
      rules: [RULES.REQUIRED],
      error: "",
    },
    price: {
      value: "",
      rules: [RULES.REQUIRED, RULES.NUMBER, RULES.NEGATIVE],
      error: "",
    },
    quantity: {
      value: "",
      rules: [RULES.REQUIRED, RULES.NUMBER, RULES.NEGATIVE],
      error: "",
    },
    description: {
      value: "",
      rules: [RULES.REQUIRED],
      error: "",
    },
    images: {
      value: "",
      rules: [],
      error: "",
    }
  });

  // handle create product
  const handleCreateProduct = () => {
    const images: string[] = [];
    for (let i = 0; i < selectedFile.length; i++) {
      images.push(selectedFile[i]);
    }
    // validate form
    setFormValues(validate(formValues));
    const temp = (Object.keys(formValues) as (keyof typeof formValues)[]).map(
      (fieldName) => {
        if (formValues[fieldName].error) {
          return false;
        }
        return;
      }
    );

    // check validate if pass then create product
    if (!temp.includes(false)) {
      setFormValues({...formValues});
      createProduct({ images, ...newProduct } as unknown as Product);
      hideModalCreate();
    }
  };

  // handle change value
  const handleChange = (event: { target: { value: string; name: string } }) => {
    const value = event.target.value;
    const fieldName = event.target.name;
    setNewProduct({ ...newProduct, [fieldName]: value });
    setFormValues(setFieldsValue(formValues, value, fieldName));
  };

  // handle change image
  const imageChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const imageSrc = await getBase64(files[i]);
        setSelectedFile((selectedFile) => [...selectedFile, imageSrc] as never);
      }
    }
  };

  // handle delete image
  const handleDeleteImage = (event: { target: EventTarget }) => {
    const target = event.target as Element;
    const indexOfArr = selectedFile.findIndex(
      (item: string) => item == (target as HTMLInputElement).dataset.id
    );
    selectedFile.splice(indexOfArr, 1);
    setSelectedFile([...selectedFile]);
  };

  return (
    <div
      data-testid="modal-create"
      className="modal-create"
      id="bookDeleteModal"
    >
      <div className="modal-dialog-modalUpdate">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-heading" id="productModalLabel">
              Add New Product Information
            </h4>
          </div>
          <div className="modal-body">
            <div className="form-control">
              <label htmlFor="">Product name: </label>
              <InputValue
                className="input__value"
                type="text"
                name="name"
                onChange={handleChange}
              />
              <small className="form__error">
                {formValues?.name?.error ? formValues.name.error : ""}
              </small>
            </div>
            <div className="form-control">
              <label htmlFor="">Description: </label>
              <textarea
                data-testid="change-value"
                className="input__text"
                name="description"
                id=""
                cols={30}
                rows={5}
                onChange={handleChange}
              ></textarea>
              <small className="form__error">
                {formValues?.description?.error
                  ? formValues.description.error
                  : ""}
              </small>
            </div>
            <div className="form-control">
              <label htmlFor="">Categories: </label>
              <select
                className="form__select"
                name="categoryId"
                defaultValue={""}
                onChange={handleChange}
              >
                <option value="" disabled>Choose a category ...</option>
                {data?.map(({ id, name }: CategoryProps, index: number) => (
                  <option key={index} value={id}>
                    {name}
                  </option>
                ))}
              </select>
              <small className="form__error">
                {formValues?.categoryId?.error
                  ? formValues.categoryId.error
                  : ""}
              </small>
            </div>
            <div id="form__number" className="form-control">
              <div className="form-control">
                <label htmlFor="">Price: </label>
                <InputValue
                  className="input__number"
                  type="number"
                  min={0}
                  name="price"
                  onChange={handleChange}
                />
                <small className="form__error">
                  {formValues?.price?.error ? formValues.price.error : ""}
                </small>
              </div>
              <div className="form-control">
                <label htmlFor="">Quantity: </label>
                <InputValue
                  className="input__number"
                  type="number"
                  min={0}
                  name="quantity"
                  onChange={handleChange}
                />
                <small className="form__error">
                  {formValues?.quantity?.error ? formValues.quantity.error : ""}
                </small>
              </div>
            </div>
            <div className="form-control">
              <div className="form__img--list">
                {selectedFile.length > 0 &&
                  selectedFile.map((src, key: number) => (
                    <img
                      data-testid="after-change-file"
                      className="form__img"
                      key={key}
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
            <button
              data-testid="hide-modal-btn"
              className="btn btn__no"
              onClick={hideModalCreate}
            >
              Cancel
            </button>
            <button
              data-testid="add-new-product"
              className="btn btn__yes"
              onClick={() => handleCreateProduct()}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCreate;
