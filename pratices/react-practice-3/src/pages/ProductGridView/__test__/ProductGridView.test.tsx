import "@testing-library/jest-dom";
import mockAxios from "@__mocks__/axios";
import ProductGridView from "../ProductGridView";
import ModalCreate from "@components/Modal/ModalCreate/ModalCreate";
import { fireEvent, render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { PRODUCTS_URL } from "@constants/url";
import { create, getData, remove } from "@helpers/apiHandle";
import { useState } from "react";
import {
  PRODUCT_MOCKING,
  PRODUCT_MOCKING_LIST,
} from "@__mocks__/constants/product";
import { Action, DataState } from "@common-types/data";
import { productReducer } from "@reducer/productReducer";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

describe("Product grid view component", () => {
  beforeEach(() => {
    (useState as jest.Mock).mockImplementation(
      jest.requireActual("react").useState
    );
  });

  afterEach(() => {
    mockAxios.reset();
  });

  const setup = () => {
    const utils = render(
      <ModalCreate hideModalCreate={() => {}} createProduct={() => {}} />
    );
    const input = utils.getByTestId("change-value") as HTMLInputElement;
    return {
      input,
      ...utils,
    };
  };

  test("should change value when onChang input", () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: "Cheese pocket" } });
    expect(input.value).toBe("Cheese pocket");
  });

  test("get categories item should call", async () => {
    mockAxios.get.mockResolvedValueOnce({ data: PRODUCT_MOCKING_LIST });
    const result = await getData(PRODUCTS_URL);
    expect(mockAxios.get).toHaveBeenCalledWith(PRODUCTS_URL);
    expect(result).toEqual(PRODUCT_MOCKING_LIST);
  });

  test("add new product item should call", async () => {
    mockAxios.post.mockResolvedValueOnce(PRODUCT_MOCKING);
    const result = await create(PRODUCTS_URL, PRODUCT_MOCKING);
    expect(mockAxios.post).toHaveBeenCalledWith(PRODUCTS_URL, PRODUCT_MOCKING);
    expect(result).toEqual(PRODUCT_MOCKING);
  });

  test("delete product item should call", async () => {
    const PRODUCT_URL_CALL = PRODUCTS_URL + "/1";
    mockAxios.delete.mockResolvedValueOnce(PRODUCT_MOCKING);
    const result = await remove(PRODUCT_URL_CALL);
    expect(mockAxios.delete).toHaveBeenCalledWith(PRODUCT_URL_CALL);
    expect(result).toEqual(PRODUCT_MOCKING);
  });

  test("should render product grid view component", () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <Router location={history.location} navigator={history}>
        <ProductGridView />
      </Router>
    );
    expect(getByTestId("product-gird-view")).toBeInTheDocument();
  });

  test("should open modal when click button 'Add new product'", () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <Router location={history.location} navigator={history}>
        <ProductGridView />
      </Router>
    );
    const btnOpenModal = getByTestId("open-modal");
    fireEvent.click(btnOpenModal);
    expect(btnOpenModal).toBeInTheDocument();
  });

  test("should create product when dispatch action CreateProductsSuccess", () => {
    const initialState: DataState = {
      products: PRODUCT_MOCKING_LIST,
    };
    const createProduct = {
      action: Action.CreateProductsSuccess,
      payload: PRODUCT_MOCKING_LIST,
    };
    const updatedState = productReducer(initialState, createProduct);
    expect(updatedState).toEqual(updatedState);
  });

  test("should get data when dispatch action GetProductSuccess", () => {
    const initialState: DataState = {
      products: PRODUCT_MOCKING_LIST,
    };
    const createProduct = {
      action: Action.GetProductSuccess,
      payload: PRODUCT_MOCKING_LIST,
    };
    const updatedState = productReducer(initialState, createProduct);
    expect(updatedState).toEqual(updatedState);
  });

  test("should delete product when dispatch action DeleteProductSuccess", () => {
    const initialState: DataState = {
      products: PRODUCT_MOCKING_LIST,
    };
    const deleteProduct = {
      action: Action.DeleteProductSuccess,
      payload: PRODUCT_MOCKING_LIST,
    };
    const updatedState = productReducer(initialState, deleteProduct);
    expect(updatedState).toEqual(updatedState);
  });

  test("matches snapshot", () => {
    const history = createMemoryHistory();
    const { asFragment } = render(
      <Router location={history.location} navigator={history}>
        <ProductGridView />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
