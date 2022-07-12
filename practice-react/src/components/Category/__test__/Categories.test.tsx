import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import "@testing-library/jest-dom";
import Categories from "../Categories";
import { CategoryContext } from "@common-types/category";
import { CategoriesContext } from "@context/CategoryContext";

const contextProductMock: CategoryContext = {
  searchValue: {},
  setSearchValue: () => {},
  categories: [],
  setCategories: () => {},
};

describe("Categories component", () => {
  test("should render categories component", () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <CategoriesContext.Provider value={contextProductMock}>
        <Router location={history.location} navigator={history}>
          <Categories />
        </Router>
      </CategoriesContext.Provider>
    );
    expect(getByTestId("categories")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const history = createMemoryHistory();
    const { asFragment } = render(
      <CategoriesContext.Provider value={contextProductMock}>
        <Router location={history.location} navigator={history}>
          <Categories />
        </Router>
      </CategoriesContext.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
