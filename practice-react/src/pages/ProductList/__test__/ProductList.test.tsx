import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { DataContextProps } from "@common-types/data";
import { CATEGORY_MOCKING_LIST } from "@__mocks__/constants/category";
import { PRODUCT_MOCKING_LIST } from "@__mocks__/constants/product";
import { DataContext } from "@context/DataContext";
import "@testing-library/jest-dom";
import ProductList from "../ProductList";

const contextProductMock: DataContextProps = {
  searchValue: {},
  setSearchValue: jest.fn(),
  categories: CATEGORY_MOCKING_LIST,
  setCategories: jest.fn(),
  products: PRODUCT_MOCKING_LIST,
  setProducts: jest.fn(),
};

describe("ProductList component", () => {
  test("should render ProductList component", () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <DataContext.Provider value={contextProductMock}>
        <Router location={history.location} navigator={history}>
          <ProductList />
        </Router>
      </DataContext.Provider>
    );
    expect(getByTestId("product-list")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const history = createMemoryHistory();
    const { asFragment } = render(
      <DataContext.Provider value={contextProductMock}>
        <Router location={history.location} navigator={history}>
          <ProductList />
        </Router>
      </DataContext.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
