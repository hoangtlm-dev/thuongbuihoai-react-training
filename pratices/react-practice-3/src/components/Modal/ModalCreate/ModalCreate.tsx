import useSWR from "swr";
import React, { ChangeEvent, useCallback, useState } from "react";
import getBase64 from "@helpers/getBase64";
import InputValue from "@components/Input/InputValue/InputValue";
import Button from "@components/common/Button/Button/Button";
import { FieldName, FormProps } from "@common-types/form";
import { Product } from "@common-types/product";
import { CategoryProps } from "@common-types/category";
import { RULES } from "@constants/rules";
import { CATEGORIES_URL } from "@constants/url";
import { getData } from "@helpers/apiHandle";
import { validate } from "@helpers/validate";
import { setFieldsValue } from "@helpers/fieldHandle";
import "../modal.css";

interface ModalCreateProps {
  hideModalCreate: () => void;
  createProduct: (dataProduct: Product) => void;
}

const ModalCreate: React.FC<ModalCreateProps> = ({
  hideModalCreate,
  createProduct,
}) => {
  const initProduct: Product = {
    id: "",
    name: "",
    price: 0,
    images: [],
    quantity: 0,
    categoryId: "",
    description: ""
  }
  const [isDisable, setIsDisable] = useState<boolean>(false);
  const [newProduct, setNewProduct] = useState<Product>(initProduct);
  // fetch data with useSWR
  const { data } = useSWR(CATEGORIES_URL, getData<Product[]>);
  // create state to handle select file image
  const [selectedFile, setSelectedFile] = useState<string[]>([]);
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
      }
    );

    // check validate if pass then create product
    if (!temp.includes(false)) {
      setFormValues({...formValues});
      setIsDisable(!isDisable);
      const product: Product = { ...newProduct, images: images }
      createProduct(product);
      hideModalCreate();
    }
  };

  // handle change value
  const handleChange = useCallback((event: { target: { value: string; name: string } }) => {
    const value = event.target.value;
    const fieldName = event.target.name as FieldName;
    setNewProduct({ ...newProduct, [fieldName]: value });
    setFormValues(setFieldsValue(formValues, value, fieldName));
  }, [formValues]);

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
    const indexOfArr = selectedFile.findIndex(
      (item: string) => item == (target as HTMLInputElement).dataset.id
    );
    selectedFile.splice(indexOfArr, 1);
    setSelectedFile([...selectedFile]);
  }, [selectedFile]);

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
              <label htmlFor="">Product name <span className="star">*</span></label>
              <InputValue
                type="text"
                name="name"
                onChange={handleChange}
              />
              <small className="form__error">
                {formValues?.name?.error ? formValues.name.error : ""}
              </small>
            </div>
            <div className="form-control">
              <label htmlFor="">Description <span className="star">*</span></label>
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
              <label htmlFor="">Categories <span className="star">*</span></label>
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
                <label htmlFor="">Price <span className="star">*</span></label>
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
                <label htmlFor="">Quantity <span className="star">*</span></label>
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
            <Button
              type="warning"
              text="Cancel"
              onClick={hideModalCreate}
            />
            <Button
              type="success"
              text="Submit"
              disabled = {isDisable}
              onClick={() => handleCreateProduct()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCreate;
