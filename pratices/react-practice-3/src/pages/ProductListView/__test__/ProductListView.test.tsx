import "@testing-library/jest-dom";
import mockAxios from "@__mocks__/axios";
import ProductListView from "../ProductListView";
import Categories from "@components/Categories/Categories";
import Button from "@components/common/Button/Button/Button";
import ProductGridView from "@pages/ProductGridView/ProductGridView";
import ModalUpdate from "@components/Modal/ModalUpdate/ModalUpdate";
import ModalCreate from "@components/Modal/ModalCreate/ModalCreate";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Link, Router } from "react-router-dom";
import { CATEGORIES_URL, PRODUCTS_URL } from "@constants/url";
import { getData } from "@helpers/apiHandle";
import { CATEGORY_MOCKING_LIST } from "@__mocks__/constants/categories";
import { PRODUCT_MOCKING, PRODUCT_MOCKING_LIST } from "@__mocks__/constants/product";
import { ProductContext } from "@common-types/product";
import { DataContext } from "@context/DataContext";
import { Action, DataState } from "@common-types/data";
import { productReducer } from "@reducer/productReducer";

const contextProductMock: ProductContext = {
  products: PRODUCT_MOCKING_LIST,
  dispatch: jest.fn(),
  searchValue: "",
  setSearchValue: jest.fn(),
  categories: CATEGORY_MOCKING_LIST,
  setCategories: jest.fn()
};

describe("Product list view component", () => {
  afterEach(() => {
    mockAxios.reset();
  });

  test("get product list should call", async () => {
    mockAxios.get.mockResolvedValueOnce({ data: PRODUCT_MOCKING_LIST });
    const result = await getData(PRODUCTS_URL);
    expect(mockAxios.get).toHaveBeenCalledWith(PRODUCTS_URL);
    expect(result).toEqual(PRODUCT_MOCKING_LIST);
  });

  test("get categories should call", async () => {
    mockAxios.get.mockResolvedValueOnce({ data: CATEGORY_MOCKING_LIST });
    const result = await getData(CATEGORIES_URL);
    expect(mockAxios.get).toHaveBeenCalledWith(CATEGORIES_URL);
    expect(result).toEqual(CATEGORY_MOCKING_LIST);
  });

  test("should get product when run app", () => {
    mockAxios.get.mockResolvedValue({ data: PRODUCT_MOCKING_LIST });
    const history = createMemoryHistory();
    render(
      <DataContext.Provider value={contextProductMock}>
        <Router location={history.location} navigator={history}>
          <ProductListView />
        </Router>
      </DataContext.Provider>
    );
    waitFor(() => { expect(contextProductMock.dispatch).toHaveBeenCalled() });
  });

  test("should update product when click button submit", () => {
    mockAxios.put.mockResolvedValue(PRODUCT_MOCKING);
    render(
      <DataContext.Provider value={contextProductMock}>
        <ModalUpdate
          product={PRODUCT_MOCKING}
          hideModalUpdate={() => {}}
          deleteImage={() => {}}
          updateProductDetail={() => {}}
        />
      </DataContext.Provider>
    );
    const btnSubmit = screen.getByText("Submit");
    fireEvent.click(btnSubmit);
    waitFor(() => { expect(contextProductMock.dispatch).toHaveBeenCalled() });
  });

  test("should create product when click Submit", () => {
    mockAxios.post.mockResolvedValue(PRODUCT_MOCKING);
    render(
      <ModalCreate
        hideModalCreate={() => {}}
        createProduct={() => {}}
      />
    );
    const submitBtn = screen.getByText("Submit");
    fireEvent.click(submitBtn);
    waitFor(() => { expect(contextProductMock.dispatch).toHaveBeenCalled() });
  });

  test("should get product when run app", () => {
    mockAxios.get.mockResolvedValue({ data: PRODUCT_MOCKING_LIST });
    const history = createMemoryHistory();
    render(
      <DataContext.Provider value={contextProductMock}>
        <Router location={history.location} navigator={history}>
          <ProductGridView />
        </Router>
      </DataContext.Provider>
    );
    waitFor(() => {
      expect(contextProductMock.dispatch).toHaveBeenCalled();
    });
  });

  test("should get data when dispatch action GetProductSuccess", () => {
    const initialState: DataState = {
      products: PRODUCT_MOCKING_LIST,
    };
    const getProduct = {
      action: Action.GetProductSuccess,
      payload: PRODUCT_MOCKING_LIST,
    };
    const updatedState = productReducer(initialState, getProduct);
    expect(updatedState).toEqual(updatedState);
  });

  test("should filter when click category", () => {
    const { getByTestId } = render(
      <DataContext.Provider value={contextProductMock}>
        <Categories />
      </DataContext.Provider>
    );
    const categoryItem = getByTestId("category-item");
    fireEvent.click(categoryItem);
    expect(contextProductMock.setSearchValue).toHaveBeenCalled();
  });

  test("Redirect to product page when click button 'View all products'", async () => {
    const history = createMemoryHistory();
    history.push = jest.fn();
    const { getByText } = render(
      <Router location={history.location} navigator={history}>
        <Link to="/products">
          <Button type="secondary" text="VIEW ALL PRODUCTS" />
        </Link>
      </Router>
    );

    fireEvent.click(getByText("VIEW ALL PRODUCTS"));
    expect(history.push).toHaveBeenCalled();
  });

  test("matches snapshot", () => {
    const history = createMemoryHistory();
    const { asFragment } = render(
      <DataContext.Provider value={contextProductMock}>
        <Router location={history.location} navigator={history}>
          <ProductListView />
        </Router>
      </DataContext.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
