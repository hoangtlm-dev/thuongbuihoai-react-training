import "@testing-library/jest-dom";
import Categories from "../Categories";
import mockAxios from "@__mocks__/axios";
import { useState } from "react";
import { fireEvent, render } from "@testing-library/react";
import { CATEGORY_MOCKING_LIST } from "@__mocks__/constants/categories";
import { getData } from "@helpers/fetchApi";
import { CATEGORIES_URL } from "@constants/url";
import { DataContext } from "@context/DataContext";
import { ProductContext } from "@common-types/product";
import { PRODUCT_MOCKING_LIST } from "@__mocks__/constants/product";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

const contextProductMock: ProductContext = {
  products: PRODUCT_MOCKING_LIST,
  dispatch: jest.fn(),
  searchValue: "",
  setSearchValue: jest.fn(),
};

describe("Category component", () => {
  const setup = () => {
    const utils = render(<Categories />);
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

  test("render category component", () => {
    const { getByTestId } = render(<Categories />);
    const categories = getByTestId("categories");
    expect(categories).toBeInTheDocument();
  });

  test("should render product by search category", () => {
    const { input } = setup();
    fireEvent.change(input, { target: { id: "1651999177368" } });
    expect(input.id).toEqual("1651999177368");
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

  test("matches snapshot", () => {
    const { asFragment } = render(
      <DataContext.Provider value={contextProductMock}>
        <Categories />
      </DataContext.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
