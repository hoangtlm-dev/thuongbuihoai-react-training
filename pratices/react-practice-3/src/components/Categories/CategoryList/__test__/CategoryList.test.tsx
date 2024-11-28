import "@testing-library/jest-dom";
import { useState } from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { CATEGORY_MOCKING_LIST } from "@__mocks__/constants/categories";
import { getData } from "@helpers/apiHandle";
import { CATEGORIES_URL } from "@constants/url";
import { DataContext } from "@context/DataContext";
import { ProductContext } from "@common-types/product";
import { PRODUCT_MOCKING_LIST } from "@__mocks__/constants/product";
import mockAxios from "@__mocks__/axios";
import CategoryList from "../CategoryList";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

const contextProductMock: ProductContext = {
  products: PRODUCT_MOCKING_LIST,
  dispatch: jest.fn(),
  searchValue: "",
  setSearchValue: jest.fn(),
  categories: CATEGORY_MOCKING_LIST,
  setCategories: jest.fn(),
};

describe("Category component", () => {
  const setup = () => {
    const utils = render(
      <DataContext.Provider value={contextProductMock}>
        <CategoryList />
      </DataContext.Provider>
    );
    const input = utils.getByTestId("category-item") as HTMLInputElement;
    return {
      input,
      ...utils,
    };
  };

  beforeEach(() => {
    (useState as jest.Mock).mockImplementation(
      jest.requireActual("react").useState
    );
  });

  afterEach(() => {
    mockAxios.reset();
  });

  test("get categories item should call", async () => {
    mockAxios.get.mockResolvedValueOnce({ data: CATEGORY_MOCKING_LIST });
    const result = await getData(CATEGORIES_URL);
    expect(mockAxios.get).toHaveBeenCalledWith(CATEGORIES_URL);
    expect(result).toEqual(CATEGORY_MOCKING_LIST);
  });

  test("render category component", async () => {
    mockAxios.get.mockResolvedValueOnce({ data: CATEGORY_MOCKING_LIST });
    const { getByTestId } = render(
      <DataContext.Provider value={contextProductMock}>
        <CategoryList />
      </DataContext.Provider>
    );
    const categories = getByTestId("category-list");
    expect(categories).toBeInTheDocument();

    // Click a category
    const firstCategory = await waitFor(() =>
      screen.getByText(CATEGORY_MOCKING_LIST[0].name)
    );
    fireEvent.click(firstCategory);
    expect(firstCategory).toEqual(firstCategory);
  });

  test("should render product by search category", () => {
    const { input } = setup();
    fireEvent.change(input, { target: { id: "1651999177368" } });
    expect(input.id).toEqual("1651999177368");
  });

  test("should filter when click category", () => {
    const { getByTestId } = render(
      <DataContext.Provider value={contextProductMock}>
        <CategoryList />
      </DataContext.Provider>
    );
    const categoryItem = getByTestId("category-item");
    fireEvent.click(categoryItem);
    expect(contextProductMock.setSearchValue).toHaveBeenCalled();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(
      <DataContext.Provider value={contextProductMock}>
        <CategoryList />
      </DataContext.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
