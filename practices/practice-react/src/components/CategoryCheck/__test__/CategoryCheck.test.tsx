import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { DataContextProps } from "@common-types/data";
import { DataContext } from "@context/DataContext";
import { CATEGORY, CATEGORY_MOCKING_LIST } from "@__mocks__/constants/category";
import { PRODUCT_MOCKING_LIST } from "@__mocks__/constants/product";
import "@testing-library/jest-dom";
import CategoryCheck from "../CategoryCheck";

const contextProductMock: DataContextProps = {
  searchValue: [],
  setSearchValue: jest.fn(),
  categories: CATEGORY_MOCKING_LIST,
  setCategories: jest.fn(),
  products: PRODUCT_MOCKING_LIST,
  setProducts: jest.fn(),
};

describe("Categories component", () => {
  test("should render categories component", () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <DataContext.Provider value={contextProductMock}>
        <Router location={history.location} navigator={history}>
          <CategoryCheck
            text="Dairy"
            categoryId={""}
            value={false}
            onToggleCategory={() => {}}
            checked={false}
          />
        </Router>
      </DataContext.Provider>
    );
    expect(getByTestId("category-check")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const history = createMemoryHistory();
    const { asFragment } = render(
      <DataContext.Provider value={contextProductMock}>
        <Router location={history.location} navigator={history}>
          <CategoryCheck
            text="Dairy"
            categoryId={""}
            value={false}
            onToggleCategory={() => {}}
            checked={false}
          />
        </Router>
      </DataContext.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
