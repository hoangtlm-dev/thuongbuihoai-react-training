import mockAxios from "@__mocks__/axios";
import "@testing-library/jest-dom";
import ProductList from "../ProductList";
import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { DataContextProps } from "@common-types/data";
import { useState } from "react";
import { DataContext } from "@context/DataContext";
import { PRODUCT_MOCKING_LIST } from "@__mocks__/constants/product";
import { PRODUCTS_URL } from "@constants/url";
import { getData } from "@helpers/fetchApi";
import { CATEGORY_MOCKING_LIST } from "@__mocks__/constants/category";

const contextProductMock: DataContextProps = {
  searchValue: [],
  setSearchValue: jest.fn(),
  categories: CATEGORY_MOCKING_LIST,
  setCategories: jest.fn(),
  products: PRODUCT_MOCKING_LIST,
  setProducts: jest.fn(),
};

describe("CardProductList component", () => {
  beforeEach(() => {
    (useState as jest.Mock).mockImplementation(
      jest.requireActual("react").useState
    );
  });

  afterEach(() => {
    mockAxios.reset();
  });

  test("get categories item should call", async () => {
    mockAxios.get.mockResolvedValueOnce({ data: PRODUCT_MOCKING_LIST });
    const result = await getData(PRODUCTS_URL);
    expect(mockAxios.get).toHaveBeenCalledWith(PRODUCTS_URL);
    expect(result).toEqual(PRODUCT_MOCKING_LIST);
  });

  test("matches snapshot", () => {
    const history = createMemoryHistory();
    const { asFragment } = render(
      <DataContext.Provider value={contextProductMock}>
        <Router location={history.location} navigator={history}>
          <ProductList type="offers" content="offers" />
        </Router>
      </DataContext.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
