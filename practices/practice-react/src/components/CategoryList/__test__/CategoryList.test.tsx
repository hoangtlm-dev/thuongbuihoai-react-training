import "@testing-library/jest-dom";
import CategoryList from "../CategoryList";
import mockAxios from "@__mocks__/axios";
import { useState } from "react";
import { fireEvent, render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { DataContextProps } from "@common-types/data";
import { DataContext } from "@context/DataContext";
import { CATEGORY_MOCKING_LIST } from "@__mocks__/constants/category";
import { CATEGORIES_URL } from "@constants/url";
import { getData } from "@helpers/fetchApi";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

const contextProductMock: DataContextProps = {
  searchValue: [],
  setSearchValue: jest.fn(),
  categories: CATEGORY_MOCKING_LIST,
  setCategories: jest.fn(),
  products: [],
  setProducts: jest.fn(),
};

describe("CategoryList component", () => {
  beforeEach(() => {
    (useState as jest.Mock).mockImplementation(
      jest.requireActual("react").useState
    );
  });

  afterEach(() => {
    mockAxios.reset();
  });

  const setup = () => {
    const history = createMemoryHistory();
    const utils = render(
      <DataContext.Provider value={contextProductMock}>
        <Router location={history.location} navigator={history}>
          <CategoryList
            type="row"
            isSelect={true}
            onToggleCategory={() => {}}
            selectedCategories={[]}
          />
        </Router>
      </DataContext.Provider>
    );
    const input = utils.getByTestId("category-list") as HTMLInputElement;
    return {
      input,
      ...utils,
    };
  };

  test("get categories item should call", async () => {
    mockAxios.get.mockResolvedValueOnce({ data: CATEGORY_MOCKING_LIST });
    const result = await getData(CATEGORIES_URL);
    expect(mockAxios.get).toHaveBeenCalledWith(CATEGORIES_URL);
    expect(result).toEqual(CATEGORY_MOCKING_LIST);
  });

  test("should render categoryList - type column component", () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <DataContext.Provider value={contextProductMock}>
        <Router location={history.location} navigator={history}>
          <CategoryList
            type="column"
            isSelect={true}
            onToggleCategory={() => {}}
            selectedCategories={[]}
          />
        </Router>
      </DataContext.Provider>
    );
    expect(getByTestId("category-list")).toBeInTheDocument();
  });

  test("should render categoryList - type row component", () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <DataContext.Provider value={contextProductMock}>
        <Router location={history.location} navigator={history}>
          <CategoryList
            type="row"
            isSelect={true}
            onToggleCategory={() => {}}
            selectedCategories={[]}
          />
        </Router>
      </DataContext.Provider>
    );
    expect(getByTestId("category-list")).toBeInTheDocument();
  });

  test("should render product by search category", () => {
    const { input } = setup();
    fireEvent.change(input, { target: { id: "1651999177368" } });
    expect(input.id).toEqual("1651999177368");
  });

  test("matches snapshot", () => {
    const history = createMemoryHistory();
    const { asFragment } = render(
      <DataContext.Provider value={contextProductMock}>
        <Router location={history.location} navigator={history}>
          <CategoryList
            type="select"
            isSelect={true}
            onToggleCategory={() => {}}
            selectedCategories={[]}
          />
        </Router>
      </DataContext.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
