import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import "@testing-library/jest-dom";
import CategoryList from "../CategoryList";
import { CategoryContext } from "@common-types/category";
import { CategoriesContext } from "@context/CategoryContext";

const contextProductMock: CategoryContext = {
  searchValue: {},
  setSearchValue: () => {},
  categories: [],
  setCategories: () => {},
};

describe("CategoryList component", () => {
  test("should render categoryList - type select component", () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <CategoriesContext.Provider value={contextProductMock}>
        <Router location={history.location} navigator={history}>
          <CategoryList type="select" isSelect={true} />
        </Router>
      </CategoriesContext.Provider>
    );
    expect(getByTestId("category-list")).toBeInTheDocument();
  });

  test("should render categoryList - type checkbox component", () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <CategoriesContext.Provider value={contextProductMock}>
        <Router location={history.location} navigator={history}>
          <CategoryList type="checkbox" isCheckbox={true} />
        </Router>
      </CategoriesContext.Provider>
    );
    expect(getByTestId("category-list")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const history = createMemoryHistory();
    const { asFragment } = render(
      <CategoriesContext.Provider value={contextProductMock}>
        <Router location={history.location} navigator={history}>
          <CategoryList type="select" isSelect={true} />
        </Router>
      </CategoriesContext.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
