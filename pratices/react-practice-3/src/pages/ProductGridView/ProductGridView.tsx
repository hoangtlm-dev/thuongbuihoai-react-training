import useSWR from "swr";
import React, { useCallback, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import ModalCreate from "@components/Modal/ModalCreate/ModalCreate";
import ScrollButton from "@components/common/Button/ScrollButton/ScrollButton";
import ProductGridCard from "@components/ProductGridCard/ProductGridCard";
import { Product } from "@common-types/product";
import { SUCCESS_MSG } from "@constants/message";
import { create, getData, remove } from "@helpers/apiHandle";
import { PRODUCTS_URL } from "@constants/url";
import { DataContext } from "@context/DataContext";
import { Action } from "@common-types/data";
import "./productGridView.css";

const ProductGridView: React.FC = () => {
  const [openModalCreate, setOpenModalCreate] = useState<boolean>(false);
  const { products, searchValue, dispatch } = useContext(DataContext);
  const queryParams: URLSearchParams = new URLSearchParams(searchValue);
  const { data } = useSWR(PRODUCTS_URL + "?" + queryParams.toString(), getData<Product[]>);
  useEffect(() => {
    if(data) {
      dispatch({
        action: Action.GetProductSuccess,
        payload: data
      });
    }
  }, [data]);
  // create product
  const createProduct = async (productData: Product) => {
    const newProduct: Product = {
      id: new Date().valueOf().toString(),
      categoryId: productData.categoryId,
      name: productData.name,
      price: +productData.price,
      quantity: +productData.quantity,
      description: productData.description,
      images: productData.images,
    };
    try {
      const response = await create(PRODUCTS_URL, newProduct);
      if(response) {
        dispatch({
          action: Action.CreateProductsSuccess,
          payload: {...response.data}
        });
        toast.success(SUCCESS_MSG.MESSAGE_ADD_PRODUCT);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  // delete product
  const deleteProduct = async (id: string) => {
    try {
      const response = await remove(`${PRODUCTS_URL}/${id}`);
      if(response) {
        dispatch({
          action: Action.DeleteProductSuccess,
          payload: id
        });
        toast.success(SUCCESS_MSG.MESSAGE_DELETE_PRODUCT);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  // handle toggle modal create
  const toggleModalCreate = useCallback(() => {
    setOpenModalCreate(!openModalCreate);
  }, [openModalCreate]);

  return (
    <>
      <div data-testid="product-gird-view" className="product__list">
        <button
          data-testid="open-modal"
          className="btn btn__add"
          onClick={toggleModalCreate}
        >
          Add new product
        </button>
        <div data-testid="delete-product" className="product__info">
          {products?.map((product: Product) => (
            <div className="product__item" key={product.id}>
              <ProductGridCard
                product={product}
                deleteProduct={deleteProduct}
              />
            </div>
          ))}
        </div>
        {openModalCreate && (
          <ModalCreate
            createProduct={createProduct}
            hideModalCreate={toggleModalCreate}
          />
        )}
      </div>
      <ScrollButton className="btn__backToTop" children={<i className="fa fa-arrow-alt-circle-up"></i>} />
    </>
  );
};

export default ProductGridView;
